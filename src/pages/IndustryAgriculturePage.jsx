import { Link } from 'react-router-dom'
import CaseVisual from '../components/CaseVisual'
import { usePageMeta } from '../hooks/usePageMeta'

export default function IndustryAgriculturePage() {
  usePageMeta("R&D Tax Incentive for Agriculture & AgTech", "Agriculture and food technology companies conducting experimental activities in ag tech, crop science, precision agriculture, aquaculture, or food pro")
  return (
    <>

<header className="page-hero has-aside">
<div className="hero-text">
  <div className="eyebrow">Who we help: Agriculture &amp; AgTech</div>
  <h1><span className="hero-ico">🌾</span>R&amp;D Tax Incentive for Agriculture &amp; AgTech</h1>
  <p className="lede">Agriculture and food technology companies conducting experimental activities in ag tech, crop science, precision agriculture, aquaculture, or food processing are frequently eligible for significant R&amp;D Tax Incentive claims. Combined with potential EMDG entitlements for export-focused agri-businesses, GrantReady can often identify multiple funding streams simultaneously.</p>
  <div className="ctas"><Link className="btn" to="/eligibility-quiz">Check your eligibility<span className="arr" aria-hidden="true" /></Link><Link className="btn ghost" to="/contact">Book free assessment</Link></div>
</div>
<div className="hero-aside"><CaseVisual tone="blue" icon="🌾" name={'Example: Agriculture & AgTech company'} sector={'Annual turnover $12M'} stats={[{ value: '$800K', label: 'eligible R&D spend' }, { value: '$348,000', label: 'R&D benefit' }]} chip={'Refundable under $20M turnover'} /></div>
</header><section>
  
  
  
  <div className="grid3 align-start">
<div className="tile"><div className="eyebrow">Eligible activities</div><h2 className="h3">What activities typically qualify?</h2><ul className="checks"><li>Ag tech: autonomous farm equipment, spray-weeding drones, and robotic mowers</li><li>Crop improvement and plant breeding experiments</li><li>Soil science and nutrient management research</li><li>Precision agriculture technology development</li><li>Irrigation and water management systems R&amp;D</li><li>Livestock genetics and animal husbandry research</li><li>Food processing and fermentation development</li><li>Aquaculture system and feed development</li></ul></div>
<div className="tile"><div className="eyebrow">Eligible expenditure</div><h2 className="h3">What costs can be claimed?</h2><ul className="checks"><li>Farm staff wages attributable to R&amp;D trials</li><li>Seeds, inputs, and materials used in experimental plots</li><li>Equipment attributable to R&amp;D activities</li><li>Laboratory testing and analysis costs</li><li>Agronomist and specialist contractor costs</li><li>Data collection and sensor technology costs</li></ul></div>
<div className="tile example"><div className="eyebrow">Example outcome</div><h2 className="h3">Example: Agriculture &amp; AgTech company</h2><div className="ledger"><div className="lrow"><span>Annual turnover</span><b>$12M</b></div><div className="lrow"><span>Eligible R&amp;D spend</span><b>$800K</b></div><div className="lrow total"><span>R&amp;D benefit</span><b>$348,000</b></div></div><p className="small">Refundable for companies under $20M turnover (indicative)</p><div className="example-cta"><b>What would your claim be worth?</b><Link className="btn" to="/benefit-calculator">Estimate your benefit<span className="arr" aria-hidden="true" /></Link></div></div>
</div>
</section><section>
  <div className="eyebrow">FAQs</div>
  <h2>Common questions for Agriculture &amp; AgTech</h2>
  
  <div className="faq"><details><summary>Do on-farm trials qualify as R&amp;D?</summary><p>Yes, if the trials are designed to test a specific hypothesis with an uncertain outcome, follow a systematic experimental approach, and seek to generate new knowledge beyond existing agricultural practice.</p></details><details><summary>We export our produce. Can we also claim EMDG?</summary><p>Yes. Agricultural exporters are frequently eligible for the EMDG as well as the R&amp;D Tax Incentive. GrantReady can manage both claims simultaneously and maximise your total government funding recovery.</p></details><details><summary>We're a family farm. Do we qualify?</summary><p>The R&amp;D Tax Incentive is generally available to incorporated companies (Pty Ltd or Ltd). Sole traders, partnerships, and family trusts cannot usually claim directly, but there are limited exceptions and a corporate structure may be able to access the program. Speak to us to discuss your specific situation.</p></details></div>
</section><div className="final"><div><h2>Find out what your agriculture &amp; AgTech business is owed.</h2><p>Book a free assessment. Our specialists understand your sector and will identify every dollar you are entitled to.</p></div><div className="ctas"><Link className="btn" to="/contact">Book free assessment</Link><Link className="btn ghost" to="/eligibility-quiz">Take eligibility quiz</Link></div></div>

    </>
  )
}
