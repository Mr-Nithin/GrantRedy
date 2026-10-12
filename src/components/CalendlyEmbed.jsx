import { useEffect, useState } from 'react'

const SCRIPT_ID = 'calendly-script'

// Inline Calendly scheduler: visitors pick a time and book without leaving the page.
// The widget (and its third-party cookies) loads only once the visitor asks to see times.
export default function CalendlyEmbed({ url, height = 660 }) {
  const [shown, setShown] = useState(false)

  // Visitors who followed a "Book a call" link (/contact#book) get the calendar straight away
  useEffect(() => {
    if (window.location.hash === '#book') setShown(true)
  }, [])

  useEffect(() => {
    if (!shown) return
    const existing = document.getElementById(SCRIPT_ID)
    if (existing) {
      // Script already loaded on an earlier visit to this page: re-scan for the widget
      window.Calendly?.initInlineWidgets?.()
      return
    }
    const s = document.createElement('script')
    s.id = SCRIPT_ID
    s.src = 'https://assets.calendly.com/assets/external/widget.js'
    s.async = true
    document.head.appendChild(s)
  }, [shown])

  const src = `${url}?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=2f59ed`
  return (
    <div className="calendly">
      {shown
        ? <div className="calendly-inline-widget" data-url={src} style={{ minWidth: 280, height }} />
        : (
          <div className="cal-facade">
            <p>Choose a time that suits you and book instantly.</p>
            <button type="button" className="btn" onClick={() => setShown(true)}>See available times</button>
          </div>
        )}
      <p className="small">
        Calendar not loading? <a href={url} target="_blank" rel="noopener">Book on Calendly<span className="arr" aria-hidden="true" /></a>
      </p>
    </div>
  )
}
