import { useState } from 'react'
import { money } from '../utils/money'

const RATES = { small: { loss: 0.435, profit: 0.185 }, mid: { loss: 0.085, profit: 0.085 }, large: { loss: 0, profit: 0 } }
const TURNOVER = [['small', 'Less than $20 million'], ['mid', '$20M to $250 million'], ['large', 'More than $250 million']]
const POSITION = [['loss', 'Tax loss', 'Taxable loss for the year'], ['profit', 'Tax profit', 'Taxable profit for the year']]

function note(turnover, position) {
  if (turnover === 'mid') return '8.5% to 16.5% above the company tax rate depending on R&D intensity; non-refundable, excess carries forward (indicative).'
  if (turnover === 'large') return 'Large entities require a tailored assessment. Talk to a specialist.'
  return position === 'loss'
    ? 'Refundable cash payment, even if no tax payable (indicative).'
    : 'Benefit over a normal R&D deduction; the offset reduces tax payable and any unused amount is refunded (indicative).'
}

export default function BenefitCalculator() {
  const [turnover, setTurnover] = useState('small')
  const [position, setPosition] = useState('loss')
  const [spend, setSpend] = useState(200000)

  return (
    <div className="tile calc-page">
      <h3>Your details</h3>
      <label>Annual company turnover</label>
      <div className="seg seg-wrap">
        {TURNOVER.map(([v, label]) => (
          <button key={v} type="button" aria-pressed={turnover === v} onClick={() => setTurnover(v)}>{label}</button>
        ))}
      </div>
      <label>Company tax position</label>
      <div className="seg">
        {POSITION.map(([v, label, sub]) => (
          <button key={v} type="button" aria-pressed={position === v} onClick={() => setPosition(v)}>{label}<small>{sub}</small></button>
        ))}
      </div>
      <label htmlFor="bcSpend">Eligible R&amp;D expenditure <span className="val">{money(spend)}</span></label>
      <input id="bcSpend" type="range" min="20000" max="5000000" step="10000" value={spend} onChange={e => setSpend(+e.target.value)} />
      <div className="range-ends"><span>$20K</span><span>$5M</span></div>
      <div className="result">
        <div className="n">
          {turnover === 'mid' ? `${money(spend * 0.085)}–${money(spend * 0.165)}` : money(spend * RATES[turnover][position])}
        </div>
        <p>{note(turnover, position)}</p>
      </div>
    </div>
  )
}
