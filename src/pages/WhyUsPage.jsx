import { Link } from 'react-router-dom'
import CaseVisual from '../components/CaseVisual'
import { usePageMeta } from '../hooks/usePageMeta'

const COMPARE = ['Specialist R&D expertise', 'Full activity identification', 'Expert-led documentation', 'End-to-end claim management']

export default function WhyUsPage() {
  usePageMeta("Why GrantReady", "Specialists beat generalists. Every single time.")
  return (
    <>

<header className="page-hero has-aside">
<div className="hero-text">
  <div className="eyebrow">Why GrantReady</div>
  <h1>Specialists beat generalists. Every single time.</h1>
  <p className="lede">Your accountant is great at what they do. R&amp;D Tax Incentive claims are not what they do. The difference between a generalist and a specialist claim is reliably worth tens of thousands of dollars.</p>
</div>
<div className="hero-aside"><CaseVisual tone="violet" icon="🎯" name={'Specialist vs self-lodged'} sector={'What a specialist adds'} stats={[{ value: '+$40–$100K', label: 'additional recovery vs self-lodged' }, { value: '20+', label: 'years as R&D specialists' }]} chip={'12+ sectors across Australia'} /></div>
</header><section>
  <div className="eyebrow">What sets us apart</div>
  <h2>Four reasons GrantReady clients recover more.</h2>
  
  <div className="grid4"><div className="tile"><div className="icon">🎯</div><h3>Specialists, not generalists</h3><p>GrantReady does one thing: R&amp;D Tax Incentive and EMDG. One focus means deeper expertise, stronger claims, and better outcomes than a generalist.</p></div><div className="tile"><div className="icon">📅</div><h3>Operating since 2006</h3><p>Over 20 years navigating every legislative change, ATO review approach, and shift in the program's rules.</p></div><div className="tile"><div className="icon">📝</div><h3>Thorough documentation</h3><p>Our specialists conduct structured interviews with your technical team to capture every eligible activity. Stronger documentation means a stronger claim and a cleaner audit trail.</p></div><div className="tile"><div className="icon">✅</div><h3>End-to-end managed</h3><p>From eligibility through documentation, registration, lodgement, and ATO review management. You review and approve. We handle everything else.</p></div></div>
</section><section>
  <div className="eyebrow">Specialist vs generalist</div>
  <h2>The difference, side by side.</h2>
  
  <div className="vs" role="table" aria-label="GrantReady compared with a generalist">
  <div className="vs-col vs-labels" role="rowgroup">
    <div className="vs-head" role="columnheader">What matters</div>
    {COMPARE.map(f => <div className="vs-cell" role="rowheader" key={f}>{f}</div>)}
  </div>
  <div className="vs-col vs-us">
    <span className="vs-badge">Recommended</span>
    <div className="vs-head" role="columnheader">GrantReady</div>
    {COMPARE.map(f => <div className="vs-cell" role="cell" key={f}><span className="mark yes" aria-label="Yes">✓</span></div>)}
    <div className="vs-foot"><Link className="btn" to="/contact">Book free assessment</Link></div>
  </div>
  <div className="vs-col vs-them">
    <div className="vs-head" role="columnheader">Generalist</div>
    {COMPARE.map(f => <div className="vs-cell" role="cell" key={f}><span className="mark no" aria-label="No">✗</span></div>)}
  </div>
</div>
</section><div className="final"><div><h2>Find out what a specialist review would change for you.</h2><p>Free, no-obligation 30-minute call. We review your current claim and give you a frank estimate of what we would do differently.</p></div><div className="ctas"><Link className="btn" to="/contact">Book free assessment</Link><Link className="btn ghost" to="/eligibility-quiz">Check eligibility first</Link></div></div>

    </>
  )
}
