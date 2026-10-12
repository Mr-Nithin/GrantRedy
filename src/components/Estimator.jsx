import { useState } from 'react'
import { money } from '../utils/money'

// Homepage quick estimate: under $20M = 43.5% refundable offset;
// $20M+ = 8.5–16.5% net benefit above the tax rate, depending on R&D intensity
export default function Estimator() {
  const [spend, setSpend] = useState(400000)
  const [small, setSmall] = useState(true)

  return (
    <div className="calc" id="calc" aria-label="Benefit calculator">
      <h2>Estimate your benefit</h2>
      <small>Indicative only.</small>
      <label htmlFor="spend">Eligible R&amp;D spend <span className="val">{money(spend)}</span></label>
      <input id="spend" type="range" min="20000" max="2000000" step="10000" value={spend} onChange={e => setSpend(+e.target.value)} />
      <label>Aggregated turnover</label>
      <div className="seg">
        <button type="button" aria-pressed={small} onClick={() => setSmall(true)}>Under $20M</button>
        <button type="button" aria-pressed={!small} onClick={() => setSmall(false)}>$20M or more</button>
      </div>
      {/* Both results share one grid cell (only the selected one is visible), so the card
          always reserves the taller one's height and the hero never shifts when switching */}
      <div className="result est-result">
        <div className={small ? 'est on' : 'est'} aria-hidden={!small}>
          <div className="n">{money(spend * 0.435)}</div>
          <p>43.5% refundable offset</p>
        </div>
        <div className={small ? 'est' : 'est on'} aria-hidden={small}>
          <div className="n range">{money(spend * 0.085)}–{money(spend * 0.165)}</div>
          <p>8.5–16.5% above tax rate, non-refundable</p>
        </div>
      </div>
    </div>
  )
}
