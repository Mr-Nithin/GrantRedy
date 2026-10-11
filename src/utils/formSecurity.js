// Client-side form protection. This filters bots and malformed input before
// anything is sent; a server receiving the form must still re-validate.

export const HONEYPOT = 'website'          // hidden field only bots fill in
export const MIN_FILL_MS = 3000            // humans take longer than 3s to fill a form
const RATE_KEY = 'gr-form-submits'
const RATE_MAX = 3                         // submissions...
const RATE_WINDOW_MS = 10 * 60 * 1000      // ...per 10 minutes, per browser

// Markup or script in a field is never legitimate here
const UNSAFE_LINE = /[<>]|javascript:|data:text\/html|[\r\n]/i
const UNSAFE_TEXT = /<\s*\/?\s*(script|iframe|object|embed|style|svg|img)\b|javascript:|\bon\w+\s*=/i

export function unsafeMessage(el, value) {
  if (!value) return ''
  if (el.tagName === 'TEXTAREA') return UNSAFE_TEXT.test(value) ? 'Please remove code or HTML from your message' : ''
  if (el.tagName === 'INPUT' && el.type !== 'radio') return UNSAFE_LINE.test(value) ? 'Please remove special characters like < and >' : ''
  return ''
}

// Common misspellings of popular email providers
const DOMAIN_TYPOS = {
  'gamail.com': 'gmail.com', 'gmial.com': 'gmail.com', 'gmai.com': 'gmail.com', 'gmal.com': 'gmail.com',
  'gnail.com': 'gmail.com', 'gmaill.com': 'gmail.com', 'gmail.co': 'gmail.com', 'gmail.con': 'gmail.com',
  'gmail.cm': 'gmail.com', 'gmail.om': 'gmail.com', 'hotmial.com': 'hotmail.com', 'hotmal.com': 'hotmail.com',
  'hotmail.con': 'hotmail.com', 'yaho.com': 'yahoo.com', 'yahooo.com': 'yahoo.com', 'yahoo.con': 'yahoo.com',
  'outlok.com': 'outlook.com', 'outlook.con': 'outlook.com', 'bigpond.con': 'bigpond.com',
}

export function emailTypo(value) {
  const at = value.lastIndexOf('@')
  if (at < 1) return ''
  const fix = DOMAIN_TYPOS[value.slice(at + 1).toLowerCase()]
  return fix ? `Did you mean ${value.slice(0, at)}@${fix}?` : ''
}

// Trim, drop control characters and collapse whitespace in single-line fields
export function cleanValues(form) {
  const out = {}
  for (const [key, raw] of new FormData(form).entries()) {
    if (key === HONEYPOT) continue
    const el = form.elements[key]
    const multiline = el?.tagName === 'TEXTAREA'
    let v = String(raw).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim()
    if (!multiline) v = v.replace(/\s+/g, ' ')
    out[key] = v
  }
  return out
}

function readLog() {
  try { return JSON.parse(localStorage.getItem(RATE_KEY) || '[]').filter(t => Date.now() - t < RATE_WINDOW_MS) }
  catch { return [] }
}

export function rateLimited() {
  return readLog().length >= RATE_MAX
}

export function recordSubmit() {
  try { localStorage.setItem(RATE_KEY, JSON.stringify([...readLog(), Date.now()])) } catch { /* storage unavailable */ }
}
