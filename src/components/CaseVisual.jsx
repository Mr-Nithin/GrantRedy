import { Fragment, useEffect, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

function StatValue({ value }) {
  // Long values get a smaller size; ranges may wrap after the dash rather than overflow
  return (
    <b className={value.length > 7 ? 'long' : undefined}>
      {value.split('–').map((part, i) => <Fragment key={i}>{i > 0 && <>–<wbr /></>}{part}</Fragment>)}
    </b>
  )
}

// Branded results panel. With `rotate` (ms) and more than two stats, the two
// visible boxes cycle through all stats; hovering pauses the rotation.
export default function CaseVisual({ icon, name, sector, stats, chip, tone = 'blue', rotate }) {
  const rotating = rotate && stats.length > 2
  const [start, setStart] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (!rotating || paused || prefersReducedMotion()) return
    const id = setInterval(() => setStart(s => (s + 1) % stats.length), rotate)
    return () => clearInterval(id)
  }, [rotating, paused, rotate, stats.length])

  return (
    <div
      className={`case-visual tone-${tone}`}
      role={rotating ? "group" : "img"}
      aria-label={`${name}: ${stats.map(s => `${s.value} ${s.label}`).join(', ')}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="cv-top">
        <span className="cv-icon" aria-hidden="true">{icon}</span>
        <div><b>{name}</b><span>{sector}</span></div>
      </div>
      <div className="cv-stats">
        {rotating
          ? // Each box stacks every stat in the same cell and shows one, so its height is
            // always that of the tallest stat and the layout never shifts while rotating
            [0, 1].map(slot => (
              <div key={slot} className="cv-slot">
                {stats.map((s, i) => {
                  const on = i === (start + slot) % stats.length
                  return (
                    <div key={s.label} className={on ? 'cv-item on' : 'cv-item'} aria-hidden={!on}>
                      <StatValue value={s.value} />
                      <span>{s.label}</span>
                    </div>
                  )
                })}
              </div>
            ))
          : stats.map(s => (
              <div key={s.label}>
                <StatValue value={s.value} />
                <span>{s.label}</span>
              </div>
            ))}
      </div>
      <span className="cv-chip">✓ {chip}</span>
    </div>
  )
}
