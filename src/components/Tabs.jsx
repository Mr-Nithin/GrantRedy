import { useRef, useState } from 'react'

// Accessible tabs: tabs = [{ id, label, content }]. Arrow keys move between tabs.
export default function Tabs({ tabs }) {
  const [active, setActive] = useState(tabs[0].id)
  const refs = useRef({})

  const onKey = (e, i) => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!d) return
    const next = tabs[(i + d + tabs.length) % tabs.length]
    setActive(next.id)
    refs.current[next.id]?.focus()
  }

  return (
    <>
      <div className="tabs" role="tablist">
        {tabs.map((t, i) => (
          <button key={t.id} ref={el => (refs.current[t.id] = el)} role="tab" id={`t-${t.id}`} aria-controls={`p-${t.id}`}
            aria-selected={active === t.id} tabIndex={active === t.id ? 0 : -1}
            onClick={() => setActive(t.id)} onKeyDown={e => onKey(e, i)}>
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map(t => (
        <div key={t.id} className="tabpanel" role="tabpanel" id={`p-${t.id}`} aria-labelledby={`t-${t.id}`} hidden={active !== t.id}>
          {t.content}
        </div>
      ))}
    </>
  )
}
