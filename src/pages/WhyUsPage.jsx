import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export default function WhyUsPage() {
  usePageMeta("Why GrantReady", "Specialists beat generalists. Every single time.")
  return (
    <>

<header className="page-hero">
  <div className="eyebrow">Why GrantReady</div>
  <h1>Specialists beat generalists. Every single time.</h1>
  <p className="lede">Your accountant is great at what they do. R&amp;D Tax Incentive claims are not what they do. The difference between a generalist and a specialist claim is reliably worth tens of thousands of dollars.</p>
  <div className="kpis"><div><b>+$40-$100K</b><span>Additional recovery vs self-lodged</span></div><div><b>20+</b><span>Years operating as R&amp;D specialists</span></div><div><b>12+</b><span>Sectors served across Australia</span></div></div>
</header><section>
  <div className="eyebrow">What sets us apart</div>
  <h2>Four reasons GrantReady clients recover more.</h2>
  
  <div className="grid4"><div className="tile"><div className="icon">🎯</div><h3>Specialists, not generalists</h3><p>GrantReady does one thing: R&amp;D Tax Incentive and EMDG. One focus means deeper expertise, stronger claims, and better outcomes than a generalist.</p></div><div className="tile"><div className="icon">📅</div><h3>Operating since 2006</h3><p>Over 20 years navigating every legislative change, ATO review approach, and shift in the program's rules.</p></div><div className="tile"><div className="icon">📝</div><h3>Thorough documentation</h3><p>Our specialists conduct structured interviews with your technical team to capture every eligible activity. Stronger documentation means a stronger claim and a cleaner audit trail.</p></div><div className="tile"><div className="icon">✅</div><h3>End-to-end managed</h3><p>From eligibility through documentation, registration, lodgement, and ATO review management. You review and approve. We handle everything else.</p></div></div>
</section><section>
  <div className="eyebrow">Specialist vs generalist</div>
  <h2>The difference in a table.</h2>
  
  <div className="table-wrap"><table className="compare"><thead><tr><th>What matters</th><th className="us">GrantReady</th><th>Generalist</th></tr></thead><tbody><tr><td>Specialist R&amp;D expertise</td><td className="yes"><span className="mark" aria-label="Yes">✓</span></td><td className="no"><span className="mark" aria-label="No">✗</span></td></tr><tr><td>Full activity identification</td><td className="yes"><span className="mark" aria-label="Yes">✓</span></td><td className="no"><span className="mark" aria-label="No">✗</span></td></tr><tr><td>Expert-led documentation</td><td className="yes"><span className="mark" aria-label="Yes">✓</span></td><td className="no"><span className="mark" aria-label="No">✗</span></td></tr><tr><td>End-to-end claim management</td><td className="yes"><span className="mark" aria-label="Yes">✓</span></td><td className="no"><span className="mark" aria-label="No">✗</span></td></tr></tbody></table></div>
</section><div className="final"><div><h2>Find out what a specialist review would change for you.</h2><p>Free, no-obligation 30-minute call. We review your current claim and give you a frank estimate of what we would do differently.</p></div><div className="ctas"><Link className="btn" to="/contact">Book free assessment</Link><Link className="btn ghost" to="/eligibility-quiz">Check eligibility first</Link></div></div>

    </>
  )
}
