import { useRef, useState } from 'react'
import { HONEYPOT, MIN_FILL_MS, cleanValues, emailTypo, rateLimited, recordSubmit, unsafeMessage } from '../utils/formSecurity'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
// Australian numbers: mobile 04xx, landlines 02/03/07/08, with or without +61
const AU_PHONE = /^(\+?61|0)[2-478]\d{8}$/
const NAME = /^[A-Za-zÀ-ÖØ-öø-ÿ' .-]{2,}$/
const NAME_FIELDS = ['given-name', 'family-name', 'name']

function labelFor(el) {
  const wrap = el.closest('fieldset') || el.closest('div')
  const text = (wrap?.querySelector('legend, label')?.textContent || 'this field').replace(/\(optional\)/i, '').trim()
  return text.toLowerCase()
}

// Returns an error message for the field, or '' if it's valid
function check(el) {
  const v = el.value.trim()
  if (el.type === 'radio') {
    const group = el.form.querySelectorAll(`input[name="${el.name}"]`)
    return el.required && ![...group].some(r => r.checked) ? 'Please choose an option' : ''
  }
  if (!v) {
    if (!el.required) return ''
    return el.tagName === 'SELECT' ? 'Please choose an option' : `Please enter your ${labelFor(el)}`
  }
  const unsafe = unsafeMessage(el, v)
  if (unsafe) return unsafe
  if (el.type === 'email' && !EMAIL.test(v)) return 'Enter a valid email, e.g. name@company.com.au'
  if (el.type === 'email') { const typo = emailTypo(v); if (typo) return typo }
  if (el.type === 'tel' && !AU_PHONE.test(v.replace(/[\s()-]/g, ''))) return 'Enter a valid Australian phone number, e.g. 0412 345 678'
  if (NAME_FIELDS.includes(el.autocomplete) && !NAME.test(v)) return 'Use letters only'
  if (el.maxLength > 0 && v.length > el.maxLength) return `Keep this under ${el.maxLength} characters`
  return ''
}

// Shows or clears the message on the field's wrapper (rendered by CSS from data-error)
function mark(el, msg) {
  const wrap = el.closest('fieldset') || el.closest('div')
  if (msg) wrap.dataset.error = msg
  else delete wrap.dataset.error
  const group = el.type === 'radio' ? el.form.querySelectorAll(`input[name="${el.name}"]`) : [el]
  group.forEach(i => i.setAttribute('aria-invalid', msg ? 'true' : 'false'))
}

const fields = form => [...form.elements].filter(el => el.name && el.name !== HONEYPOT && /^(INPUT|SELECT|TEXTAREA)$/.test(el.tagName))

// Form without a backend yet: validates, filters bots, then clears and shows the confirmation message.
// `onSubmitData(values)` receives the cleaned values once a backend is connected.
export default function EnquiryForm({ className, okClassName, okText, onSubmitData, children }) {
  const [sent, setSent] = useState(false)
  const [errorCount, setErrorCount] = useState(0)
  const [blocked, setBlocked] = useState('')
  const startedAt = useRef(Date.now())

  const validateField = el => {
    if (!el.name || !el.form || el.name === HONEYPOT) return
    mark(el, check(el))
  }

  const submit = e => {
    e.preventDefault()
    const form = e.target
    let first = null, count = 0
    const seen = new Set()
    for (const el of fields(form)) {
      if (el.type === 'radio') { if (seen.has(el.name)) continue; seen.add(el.name) }
      const msg = check(el)
      mark(el, msg)
      if (msg) { count++; first ??= el }
    }
    setErrorCount(count)
    setBlocked('')
    if (first) { first.focus(); setSent(false); return }

    // Bot checks: honeypot filled or submitted too fast. Pretend success so bots don't adapt.
    const isBot = form.elements[HONEYPOT]?.value || Date.now() - startedAt.current < MIN_FILL_MS
    if (!isBot) {
      if (rateLimited()) { setBlocked("You've sent several messages recently. Please wait a few minutes, or call us on 03 9853 9853."); return }
      recordSubmit()
      onSubmitData?.(cleanValues(form))
    }
    form.reset()
    startedAt.current = Date.now()
    setSent(true)
  }

  return (
    <form
      className={className}
      noValidate
      onSubmit={submit}
      onBlur={e => validateField(e.target)}
      onChange={e => { if (e.target.type === 'radio' || e.target.tagName === 'SELECT') validateField(e.target) }}
      onInput={e => { const w = e.target.closest('fieldset') || e.target.closest('div'); if (w?.dataset.error) validateField(e.target) }}
    >
      {children}
      <div className="hp" aria-hidden="true">
        <label htmlFor={`${HONEYPOT}-field`}>Leave this field empty</label>
        <input id={`${HONEYPOT}-field`} name={HONEYPOT} type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="form-summary" role="alert">
        {blocked || (errorCount > 0 && !sent ? `Please fix ${errorCount === 1 ? 'the highlighted field' : `the ${errorCount} highlighted fields`}.` : '')}
      </p>
      {sent && <p className={okClassName}>{okText}</p>}
    </form>
  )
}
