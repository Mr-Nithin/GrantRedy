import { Link } from 'react-router-dom'
import BenefitCalculator from '../components/BenefitCalculator'
import CaseVisual from '../components/CaseVisual'
import { usePageMeta } from '../hooks/usePageMeta'

export default function BenefitCalculatorPage() {
  usePageMeta("Benefit Calculator", "Estimate your R&D Tax Incentive benefit in minutes.")
  return (
    <>

<header className="page-hero has-aside">
<div className="hero-text">
  <div className="eyebrow">Free · Instant estimate</div>
  <h1>Estimate your R&amp;D Tax Incentive benefit in minutes.</h1>
  <p className="lede">See how much your business may be able to claim from eligible research and development activities.</p>
</div>
<div className="hero-aside"><CaseVisual tone="teal" icon="🧮" name={'Benefit estimate'} sector={'Indicative only'} stats={[{ value: '43.5%', label: 'maximum refundable offset' }, { value: '$87,000', label: 'on $200K spend, in loss' }]} chip={'Based on current program rates'} /></div>
</header><section className="flush"><div className="contact-grid">
<BenefitCalculator />
<div className="stack">
  <div className="tile"><div className="eyebrow">How benefit rates work</div>
    <div className="lrow rate-row"><span><b>43.5%</b> Companies under $20M (in loss)</span><span className="small">Refundable cash payment, even if no tax payable.</span></div>
    <div className="lrow rate-row"><span><b>18.5%</b> Companies under $20M (in profit)</span><span className="small">Tax offset reducing liability; excess may be refunded.</span></div>
    <div className="lrow rate-row"><span><b>8.5–16.5%</b> Companies $20M–$250M</span><span className="small">Non-refundable offset above company tax rate.</span></div>
    <div className="lrow rate-row"><span><b>0%</b> Companies over $250M</span><span className="small">Large entities require tailored assessment.</span></div>
  </div>
  <div className="note-box"><h3>Want an exact figure?</h3><p>A free 30-minute assessment gives you a specialist estimate based on your real activities and expenditure.</p><Link className="btn" to="/contact">Book free assessment</Link></div>
</div>
</div>
<p className="small" style={{marginTop: "16px"}}>This calculator provides a general estimate only and does not constitute tax or legal advice. Actual benefit depends on your specific circumstances. GrantReady Pty Ltd is a Registered Tax Agent.</p>
</section>

    </>
  )
}
