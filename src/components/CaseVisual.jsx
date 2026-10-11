// Branded results panel used in place of a photo on case studies
export default function CaseVisual({ icon, name, sector, stats, chip, tone = 'blue' }) {
  return (
    <div className={`case-visual tone-${tone}`} role="img" aria-label={`${name}: ${stats.map(s => `${s.value} ${s.label}`).join(', ')}`}>
      <div className="cv-top">
        <span className="cv-icon" aria-hidden="true">{icon}</span>
        <div><b>{name}</b><span>{sector}</span></div>
      </div>
      <div className="cv-stats">
        {stats.map(s => (
          <div key={s.label}><b>{s.value}</b><span>{s.label}</span></div>
        ))}
      </div>
      <span className="cv-chip">✓ {chip}</span>
    </div>
  )
}
