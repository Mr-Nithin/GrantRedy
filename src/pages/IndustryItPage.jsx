import { Link } from 'react-router-dom'
import CaseVisual from '../components/CaseVisual'
import { usePageMeta } from '../hooks/usePageMeta'

export default function IndustryItPage() {
  usePageMeta("R&D Tax Incentive for IT & Software Companies", "Software is one of the most misunderstood sectors under the R&amp;D Tax Incentive. Many software companies assume their work does not qualify, but sig")
  return (
    <>

<header className="page-hero has-aside">
<div className="hero-text">
  <div className="eyebrow">Who we help: IT &amp; Software</div>
  <h1><span className="hero-ico">💻</span>R&amp;D Tax Incentive for IT &amp; Software Companies</h1>
  <p className="lede">Software is one of the most misunderstood sectors under the R&amp;D Tax Incentive. Many software companies assume their work does not qualify, but significant development activity often does, particularly where the technical outcome is uncertain and the work extends beyond applying known methods. GrantReady has helped dozens of software companies establish and maintain successful R&amp;D claims.</p>
  <div className="ctas"><Link className="btn" to="/eligibility-quiz">Check your eligibility<span className="arr" aria-hidden="true" /></Link><Link className="btn ghost" to="/contact">Book free assessment</Link></div>
</div>
<div className="hero-aside"><CaseVisual tone="blue" icon="💻" name={'Example: IT & Software company'} sector={'Annual turnover $6M'} stats={[{ value: '$900K', label: 'eligible R&D spend' }, { value: '$391,500', label: 'R&D benefit' }]} chip={'Cash refund, even for loss-making SaaS'} /></div>
</header><section>
  
  
  
  <div className="grid3 align-start">
<div className="tile"><div className="eyebrow">Eligible activities</div><h3>What activities typically qualify?</h3><ul className="checks"><li>Machine learning model architecture research and training</li><li>Development of novel algorithms with uncertain performance outcomes</li><li>New programming language compiler or runtime development</li><li>Security research and cryptographic system development</li><li>Natural language processing and computer vision R&amp;D</li><li>Distributed systems and database architecture experimentation</li><li>Novel API and integration protocol development</li><li>Autonomous systems and robotics software development</li></ul></div>
<div className="tile"><div className="eyebrow">Eligible expenditure</div><h3>What costs can be claimed?</h3><ul className="checks"><li>Developer and data scientist wages attributable to R&amp;D</li><li>Cloud computing costs for R&amp;D workloads</li><li>Software tools and licences used for R&amp;D</li><li>Contractor costs for R&amp;D activities</li><li>Hardware for R&amp;D testing environments</li></ul></div>
<div className="tile example"><div className="eyebrow">Example outcome</div><h3>Example: IT &amp; Software company</h3><div className="ledger"><div className="lrow"><span>Annual turnover</span><b>$6M</b></div><div className="lrow"><span>Eligible R&amp;D spend</span><b>$900K</b></div><div className="lrow total"><span>R&amp;D benefit</span><b>$391,500</b></div></div><p className="small">Cash refund, even for loss-making SaaS businesses (indicative)</p><div className="example-cta"><b>What would your claim be worth?</b><Link className="btn" to="/benefit-calculator">Estimate your benefit<span className="arr" aria-hidden="true" /></Link></div></div>
</div>
</section><section>
  <div className="eyebrow">FAQs</div>
  <h2>Common questions for IT &amp; Software</h2>
  
  <div className="faq"><details><summary>Does building a SaaS product qualify?</summary><p>Not all of it. Routine software development using known frameworks does not qualify. But activities involving genuine technical uncertainty (where the approach, architecture, or algorithm behaviour cannot be determined in advance) often do.</p></details><details><summary>We use off-the-shelf ML frameworks like TensorFlow. Does that disqualify us?</summary><p>Not necessarily. Using established frameworks as a starting point does not disqualify you if your work involves experimental extension of those frameworks, novel training approaches, or genuinely uncertain performance outcomes.</p></details><details><summary>Our engineers spend time on both eligible and non-eligible work. How do we handle this?</summary><p>You can claim the portion of wages attributable to R&amp;D activities. GrantReady can help you implement a time-tracking and allocation methodology that meets ATO documentation requirements.</p></details></div>
</section><div className="final"><div><h2>Find out what your IT &amp; software business is owed.</h2><p>Book a free assessment. Our specialists understand your sector and will identify every dollar you are entitled to.</p></div><div className="ctas"><Link className="btn" to="/contact">Book free assessment</Link><Link className="btn ghost" to="/eligibility-quiz">Take eligibility quiz</Link></div></div>

    </>
  )
}
