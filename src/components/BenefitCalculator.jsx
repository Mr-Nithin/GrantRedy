import { useState } from 'react'
import { money } from '../utils/money'

const RATES = { small: { loss: 0.435, profit: 0.185 }, mid: { loss: 0.085, profit: 0.085 }, large: { loss: 0, profit: 0 } }
const TURNOVER = [['small', 'Less than $20 million'], ['mid', '$20M to $250 million'], ['large', 'More than $250 million']]
const RATE_ROWS = [
  { key: 'small-loss', rate: '43.5%', who: 'Under $20M turnover, in tax loss', what: 'Refundable cash payment, even if no tax is payable.' },
  { key: 'small-profit', rate: '18.5%', who: 'Under $20M turnover, in tax profit', what: 'Offset reduces tax payable; any excess may be refunded.' },
  { key: 'mid', rate: '8.5–16.5%', who: '$20M to $250M turnover', what: 'Non-refundable offset above the company tax rate.' },
  { key: 'large', rate: '0%', who: 'Over $250M turnover', what: 'Large entities need a tailored assessment.' },
]
const POSITION = [['loss', 'Tax loss', 'Taxable loss for the year'], ['profit', 'Tax profit', 'Taxable profit for the year']]

function note(turnover, position) {
  if (turnover === 'mid') return '8.5% to 16.5% above the company tax rate depending on R&D intensity; non-refundable, excess carries forward (indicative).'
  if (turnover === 'large') return 'Large entities require a tailored assessment. Talk to a specialist.'
  return position === 'loss'
    ? 'Refundable cash payment, even if no tax payable (indicative).'
    : 'Benefit over a normal R&D deduction; the offset reduces tax payable and any unused amount is refunded (indicative).'
}

const OUTCOMES = [
  { key: 'small-loss', rate: 0.435, note: note('small', 'loss') },
  { key: 'small-profit', rate: 0.185, note: note('small', 'profit') },
  { key: 'mid', rate: 0.085, note: note('mid') },
  { key: 'large', rate: 0, note: note('large') },
]

export default function BenefitCalculator() {
  const [turnover, setTurnover] = useState('small')
  const [position, setPosition] = useState('loss')
  const [spend, setSpend] = useState(200000)

  const activeRate = turnover === 'small' ? `small-${position}` : turnover

  return (
    <>
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
      {/* Every possible result shares one grid cell and only the active one is visible,
          so the card keeps the tallest result's height and the page never shifts */}
      <div className="result est-result">
        {OUTCOMES.map(o => (
          <div key={o.key} className={o.key === activeRate ? 'est on' : 'est'} aria-hidden={o.key !== activeRate}>
            <div className={o.key === 'mid' ? 'n range' : 'n'}>
              {o.key === 'mid' ? `${money(spend * 0.085)}–${money(spend * 0.165)}` : money(spend * o.rate)}
            </div>
            <p>{o.note}</p>
          </div>
        ))}
      </div>
    </div>
    {/* Rates panel highlights the row that applies to the current selection */}
    <div className="tile calc-rates">
      <div className="eyebrow">How benefit rates work</div>
      <ul className="rate-list">
        {RATE_ROWS.map(r => (
          <li key={r.key} className={r.key === activeRate ? 'on' : undefined} aria-current={r.key === activeRate ? 'true' : undefined}>
            <span className="rate-badge">{r.rate}</span>
            <div><b>{r.who}</b><span>{r.what}</span></div>
          </li>
        ))}
      </ul>
      <p className="small rate-foot">Your selection is highlighted. Rates are indicative.</p>
    </div>
    </>
  )
}
