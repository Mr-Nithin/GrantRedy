import { useState } from 'react'
import { money } from '../utils/money'

// Homepage quick estimate: under $20M = 43.5% refundable, $20M+ = 38.5% non-refundable (from)
export default function Estimator() {
  const [spend, setSpend] = useState(400000)
  const [small, setSmall] = useState(true)

  return (
    <div className="calc" id="calc" aria-label="Benefit calculator">
      <h3>Estimate your benefit</h3>
      <small>Indicative only.</small>
      <label htmlFor="spend">Eligible R&amp;D spend <span className="val">{money(spend)}</span></label>
      <input id="spend" type="range" min="20000" max="2000000" step="10000" value={spend} onChange={e => setSpend(+e.target.value)} />
      <label>Aggregated turnover</label>
      <div className="seg">
        <button type="button" aria-pressed={small} onClick={() => setSmall(true)}>Under $20M</button>
        <button type="button" aria-pressed={!small} onClick={() => setSmall(false)}>$20M or more</button>
      </div>
      <div className="result">
        <div className="n">{money(spend * (small ? 0.435 : 0.385))}</div>
        <p>{small ? '43.5% refundable offset' : '38.5% non-refundable offset (from)'}</p>
      </div>
    </div>
  )
}
