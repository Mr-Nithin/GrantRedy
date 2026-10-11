import { useEffect } from 'react'

const SCRIPT_ID = 'calendly-script'

// Inline Calendly scheduler: visitors pick a time and book without leaving the page
export default function CalendlyEmbed({ url, height = 660 }) {
  useEffect(() => {
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
  }, [])

  const src = `${url}?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=2f59ed`
  return (
    <div className="calendly">
      <div className="calendly-inline-widget" data-url={src} style={{ minWidth: 280, height }} />
      <p className="small">
        Calendar not loading? <a href={url} target="_blank" rel="noopener">Book on Calendly →</a>
      </p>
    </div>
  )
}
