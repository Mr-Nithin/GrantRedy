import { useState } from 'react'

// Form without a backend yet: on submit it clears and shows the confirmation message.
export default function EnquiryForm({ className, okClassName, okText, children }) {
  const [sent, setSent] = useState(false)

  const submit = e => {
    e.preventDefault()
    e.target.reset()
    setSent(true)
  }

  return (
    <form className={className} onSubmit={submit}>
      {children}
      {sent && <p className={okClassName}>{okText}</p>}
    </form>
  )
}
