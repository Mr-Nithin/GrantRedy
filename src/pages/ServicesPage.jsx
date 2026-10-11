import { Link } from 'react-router-dom'
import CaseVisual from '../components/CaseVisual'
import { usePageMeta } from '../hooks/usePageMeta'

export default function ServicesPage() {
  usePageMeta("Our Services", "R&D Tax Incentive, EMDG and other government grants, managed end-to-end by specialists.")
  return (
    <>

<header className="page-hero has-aside">
<div className="hero-text">
  <div className="eyebrow">Our services</div>
  <h1>Government funding for Australian businesses. Managed by specialists.</h1>
  <p className="lede">GrantReady manages R&amp;D Tax Incentive, EMDG, and other government grant programs. One specialist team. Three programs. End-to-end management.</p>
</div>
<div className="hero-aside"><CaseVisual tone="blue" icon="💼" name={'Three programs'} sector={'One specialist team'} stats={[{ value: '43.5%', label: 'R&D Tax Incentive offset' }, { value: '50%', label: 'EMDG reimbursement' }]} chip={'Plus other grants via GrantGuru'} /></div>
</header><section className="flush"><div className="grid3"><div className="prog"><div className="icon">🔬</div><div className="eyebrow">R&amp;D Tax Incentive</div><h3>R&amp;D Tax Incentive</h3><p>Recover up to 43.5¢ for every dollar of eligible R&amp;D expenditure (indicative). Managed end-to-end.</p><ul className="checks"><li>Eligibility assessment at no charge</li><li>Activity identification and technical narrative</li><li>Expenditure mapping and documentation</li><li>AusIndustry registration management</li><li>ATO schedule provided for your accountant to lodge</li><li>ATO review and audit defence</li></ul><Link className="more" to="/rdti">Learn more →</Link></div><div className="prog"><div className="icon">✈️</div><div className="eyebrow">EMDG</div><h3>Export Market Development Grant</h3><p>Recover up to 50% of eligible overseas marketing expenditure. Administered by Austrade.</p><ul className="checks"><li>Eligibility assessment for exporters</li><li>Export promotion expenditure review</li><li>Application preparation and lodgement</li><li>Austrade communication management</li><li>Annual grant management</li></ul><Link className="more" to="/emdg">Learn more →</Link></div><div className="prog"><div className="icon">💼</div><div className="eyebrow">Other grants</div><h3>Other Government Grants</h3><p>Our sister platform GrantGuru identifies grant needs and tracks every federal and state program relevant to your business. GrantReady manages the application.</p><ul className="checks"><li>Grant needs identified through GrantGuru</li><li>Eligibility pre-screening</li><li>Application writing and submission</li><li>Reporting and milestone management</li><li>Ongoing monitoring via GrantGuru</li></ul><Link className="more" to="/other-grants">Learn more →</Link></div></div></section><section>
  <div className="eyebrow">Why specialists</div>
  <h2>Why GrantReady beats your accountant on this.</h2>
  
  <div className="grid4"><div className="tile"><div className="icon">🎯</div><h3>Specialists, not generalists</h3><p>GrantReady does one thing. That means deeper expertise and better outcomes.</p></div><div className="tile"><div className="icon">🤖</div><h3>AI-assisted documentation</h3><p>Our process captures more eligible activity and produces stronger technical narratives.</p></div><div className="tile"><div className="icon">🛡️</div><h3>Full ATO defence</h3><p>If your claim is reviewed, GrantReady manages the ATO response end-to-end at no extra cost.</p></div><div className="tile"><div className="icon">💰</div><h3>Fixed fee</h3><p>You know what you're getting. You know what you're paying. No surprises, no percentage taken from your refund.</p></div></div>
</section><div className="final"><div><h2>Not sure which program applies to you?</h2><p>Book a free 30-minute call. We tell you exactly what you are entitled to and manage the process on your behalf.</p></div><div className="ctas"><Link className="btn" to="/contact">Book free assessment →</Link></div></div>

    </>
  )
}
