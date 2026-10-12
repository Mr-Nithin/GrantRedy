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
<div className="hero-aside optional"><CaseVisual tone="teal" icon="🧮" name={'Benefit estimate'} sector={'Indicative only'} stats={[{ value: '43.5%', label: 'maximum refundable offset' }, { value: '$87,000', label: 'on $200K spend, in loss' }]} chip={'Based on current program rates'} /></div>
</header><section className="flush"><div className="contact-grid">
<BenefitCalculator />
</div>
<p className="small calc-note" style={{marginTop: "16px"}}>General estimate only, not tax or legal advice. Your actual benefit depends on your circumstances and can be confirmed by a registered tax agent.</p>
</section><div className="final"><div><h2>Want an exact figure for your business?</h2><p>Book a free assessment call. A specialist will review your activities and tell you exactly what you can claim.</p></div><div className="ctas"><Link className="btn" to="/contact">Book free assessment<span className="arr" aria-hidden="true" /></Link><Link className="btn ghost" to="/eligibility-quiz">Take the quiz first</Link></div></div>

    </>
  )
}
