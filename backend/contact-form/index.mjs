// GrantReady form backend (AWS Lambda, Function URL).
// Receives JSON from the website forms, re-validates everything server-side,
// and emails the enquiry through SendGrid. The SendGrid key is read from
// SSM Parameter Store (SecureString), never from code or environment files.

import { SSMClient, GetParameterCommand } from '@aws-sdk/client-ssm'

const ssm = new SSMClient({})
const {
  SENDGRID_KEY_PARAM,          // SSM parameter name holding the SendGrid API key
  TO_EMAILS = '',              // comma-separated recipients
  FROM_EMAIL,                  // verified SendGrid sender
  ALLOWED_ORIGINS = '',        // comma-separated site origins allowed to post
} = process.env

const MAX_BODY = 10_000
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const AU_PHONE = /^(\+?61|0)[2-478]\d{8}$/
const NAME = /^[A-Za-zÀ-ÖØ-öø-ÿ' .-]{2,}$/
const UNSAFE_LINE = /[<>]|javascript:|data:text\/html|[\r\n]/i
const UNSAFE_TEXT = /<\s*\/?\s*(script|iframe|object|embed|style|svg|img)\b|javascript:|\bon\w+\s*=/i

// Field rules per form. Unknown fields are rejected.
const FORMS = {
  contact: {
    subject: 'New enquiry from the contact page',
    fields: {
      first: { required: true, max: 50, name: true },
      last: { required: true, max: 50, name: true },
      email: { required: true, max: 120, email: true },
      phone: { max: 20, phone: true },
      company: { max: 120 },
      'company-type': { required: true, oneOf: ['Yes', 'No', 'Not sure'] },
      'enquiry-type': {
        required: true,
        oneOf: ['R&D Tax Incentive, first claim', 'R&D Tax Incentive, review my existing claim',
          'Export Market Development Grant (EMDG)', 'Other government grants', 'General enquiry'],
      },
      message: { max: 2000, multiline: true },
    },
  },
  booking: {
    subject: 'New assessment request from the homepage',
    fields: {
      name: { required: true, max: 80, name: true },
      email: { required: true, max: 120, email: true },
      turnover: { required: true, oneOf: ['Under $20M', '$20M or more', 'Not sure'] },
      interest: { required: true, oneOf: ['R&D Tax Incentive', 'EMDG', 'Both', 'Other grants'] },
    },
  },
}

const LABELS = {
  first: 'First name', last: 'Last name', email: 'Email', phone: 'Phone', company: 'Company',
  'company-type': 'Pty Ltd or Ltd company?', 'enquiry-type': 'Enquiry type', message: 'Message',
  name: 'Name', turnover: 'Annual turnover', interest: 'Interested in',
}

const clean = (v, multiline) => {
  let s = String(v ?? '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim()
  return multiline ? s : s.replace(/\s+/g, ' ')
}

function validate(form, body) {
  const spec = FORMS[form]
  const out = {}
  for (const key of Object.keys(body)) {
    if (!(key in spec.fields)) return `Unexpected field: ${key}`
  }
  for (const [key, rule] of Object.entries(spec.fields)) {
    const v = clean(body[key], rule.multiline)
    if (!v) { if (rule.required) return `Missing ${key}`; continue }
    if (v.length > rule.max && rule.max) return `${key} too long`
    if (rule.multiline ? UNSAFE_TEXT.test(v) : UNSAFE_LINE.test(v)) return `Invalid characters in ${key}`
    if (rule.email && !EMAIL.test(v)) return 'Invalid email'
    if (rule.phone && !AU_PHONE.test(v.replace(/[\s()-]/g, ''))) return 'Invalid phone'
    if (rule.name && !NAME.test(v)) return `Invalid ${key}`
    if (rule.oneOf && !rule.oneOf.includes(v)) return `Invalid ${key}`
    out[key] = v
  }
  return out
}

const esc = s => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

let cachedKey
async function sendgridKey() {
  if (!cachedKey) {
    const res = await ssm.send(new GetParameterCommand({ Name: SENDGRID_KEY_PARAM, WithDecryption: true }))
    cachedKey = res.Parameter.Value
  }
  return cachedKey
}

async function sendEmail(form, data, meta) {
  const rows = Object.entries(data).map(([k, v]) => [LABELS[k] || k, v])
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n') + `\n\nSent from ${meta.origin} at ${meta.time}`
  const html = `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">${
    rows.map(([k, v]) => `<tr><td style="color:#555;vertical-align:top"><b>${esc(k)}</b></td><td style="white-space:pre-wrap">${esc(v)}</td></tr>`).join('')
  }</table><p style="font-family:Arial,sans-serif;font-size:12px;color:#888">Sent from ${esc(meta.origin)} at ${esc(meta.time)}</p>`

  const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: { Authorization: `Bearer ${await sendgridKey()}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      personalizations: [{ to: TO_EMAILS.split(',').map(e => ({ email: e.trim() })).filter(e => e.email) }],
      from: { email: FROM_EMAIL, name: 'GrantReady website' },
      reply_to: { email: data.email, name: data.name || `${data.first || ''} ${data.last || ''}`.trim() },
      subject: FORMS[form].subject,
      content: [{ type: 'text/plain', value: text }, { type: 'text/html', value: html }],
      tracking_settings: { click_tracking: { enable: false }, open_tracking: { enable: false } },
    }),
  })
  if (!res.ok) throw new Error(`SendGrid ${res.status}: ${(await res.text()).slice(0, 300)}`)
}

const reply = (status, body) => ({ statusCode: status, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })

export async function handler(event) {
  const origin = event.headers?.origin || ''
  const allowed = ALLOWED_ORIGINS.split(',').map(s => s.trim()).filter(Boolean)
  // Browsers always send Origin on cross-site POSTs; reject anything else
  if (!allowed.includes(origin)) return reply(403, { ok: false, error: 'Forbidden' })
  if (event.requestContext?.http?.method !== 'POST') return reply(405, { ok: false, error: 'Method not allowed' })

  const raw = event.isBase64Encoded ? Buffer.from(event.body || '', 'base64').toString() : event.body || ''
  if (raw.length > MAX_BODY) return reply(413, { ok: false, error: 'Too large' })

  let payload
  try { payload = JSON.parse(raw) } catch { return reply(400, { ok: false, error: 'Bad JSON' }) }
  const { form, website, elapsedMs, fields } = payload || {}
  if (!FORMS[form] || typeof fields !== 'object' || fields === null) return reply(400, { ok: false, error: 'Bad request' })

  // Bot signals: honeypot filled or impossibly fast. Answer "ok" so bots don't adapt.
  if (website || !(Number(elapsedMs) >= 3000)) return reply(200, { ok: true })

  const data = validate(form, fields)
  if (typeof data === 'string') return reply(422, { ok: false, error: data })

  try {
    await sendEmail(form, data, { origin, time: new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' }) })
    return reply(200, { ok: true })
  } catch (err) {
    console.error('Email send failed', err.message)
    return reply(502, { ok: false, error: 'Could not send right now' })
  }
}
