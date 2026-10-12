import { Link } from 'react-router-dom'
import CaseVisual from '../components/CaseVisual'
import { usePageMeta } from '../hooks/usePageMeta'

export default function IndustryManufacturingPage() {
  usePageMeta("R&D Tax Incentive for Manufacturing & Engineering", "Advanced manufacturing and engineering companies are among the largest R&amp;D Tax Incentive claimants in Australia. Whether you are developing new ma")
  return (
    <>

<header className="page-hero has-aside">
<div className="hero-text">
  <div className="eyebrow">Who we help: Manufacturing</div>
  <h1><span className="hero-ico">🏭</span>R&amp;D Tax Incentive for Manufacturing &amp; Engineering</h1>
  <p className="lede">Advanced manufacturing and engineering companies are among the largest R&amp;D Tax Incentive claimants in Australia. Whether you are developing new materials, improving production processes, designing automated systems, or developing new products, GrantReady can identify the R&amp;D component of your manufacturing activity and build a defensible, high-value claim.</p>
  <div className="ctas"><Link className="btn" to="/eligibility-quiz">Check your eligibility<span className="arr" aria-hidden="true" /></Link><Link className="btn ghost" to="/contact">Book free assessment</Link></div>
</div>
<div className="hero-aside"><CaseVisual tone="blue" icon="🏭" name={'Example: Manufacturing company'} sector={'Annual turnover $18M'} stats={[{ value: '$1.5M', label: 'eligible R&D spend' }, { value: '$652,500', label: 'R&D benefit' }]} chip={'Refundable under $20M turnover'} /></div>
</header><section>
  
  
  
  <div className="grid3 align-start">
<div className="tile"><div className="eyebrow">Eligible activities</div><h3>What activities typically qualify?</h3><ul className="checks"><li>New product design and engineering development</li><li>Materials science and composite materials research</li><li>Manufacturing process improvement with uncertain outcomes</li><li>Industrial automation and robotics R&amp;D</li><li>Quality control system development and testing</li><li>Tooling and mould design experimentation</li><li>Energy efficiency and emissions reduction R&amp;D</li><li>Supply chain technology and logistics system R&amp;D</li></ul></div>
<div className="tile"><div className="eyebrow">Eligible expenditure</div><h3>What costs can be claimed?</h3><ul className="checks"><li>Engineer and technician wages attributable to R&amp;D</li><li>Materials and components used in R&amp;D prototypes</li><li>Equipment costs attributable to R&amp;D activities</li><li>Testing and certification laboratory costs</li><li>External engineering consultant costs</li><li>Software development for manufacturing control systems</li></ul></div>
<div className="tile example"><div className="eyebrow">Example outcome</div><h3>Example: Manufacturing company</h3><div className="ledger"><div className="lrow"><span>Annual turnover</span><b>$18M</b></div><div className="lrow"><span>Eligible R&amp;D spend</span><b>$1.5M</b></div><div className="lrow total"><span>R&amp;D benefit</span><b>$652,500</b></div></div><p className="small">Refundable for companies under $20M turnover (indicative)</p><div className="example-cta"><b>What would your claim be worth?</b><Link className="btn" to="/benefit-calculator">Estimate your benefit<span className="arr" aria-hidden="true" /></Link></div></div>
</div>
</section><section>
  <div className="eyebrow">FAQs</div>
  <h2>Common questions for Manufacturing</h2>
  
  <div className="faq"><details><summary>We improve our production process. Does this qualify?</summary><p>Process improvement can qualify if it involves genuine experimental activity (testing different approaches, measuring outcomes, and iterating) where the optimal outcome cannot be predicted in advance using existing knowledge.</p></details><details><summary>We produce custom-engineered products for clients. Does this qualify?</summary><p>R&amp;D conducted primarily to produce a product to a customer specification generally does not qualify. But where your engineers must solve genuinely novel technical problems to achieve the required outcome, those specific activities may qualify.</p></details><details><summary>Can we claim capital equipment?</summary><p>Generally no, capital equipment costs are not eligible. However, depreciation of equipment attributable to R&amp;D activities may be included. GrantReady can advise on the correct treatment.</p></details></div>
</section><div className="final"><div><h2>Find out what your manufacturing business is owed.</h2><p>Book a free assessment. Our specialists understand your sector and will identify every dollar you are entitled to.</p></div><div className="ctas"><Link className="btn" to="/contact">Book free assessment</Link><Link className="btn ghost" to="/eligibility-quiz">Take eligibility quiz</Link></div></div>

    </>
  )
}
