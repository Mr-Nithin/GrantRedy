import { Link } from 'react-router-dom'
import CaseVisual from '../components/CaseVisual'
import { usePageMeta } from '../hooks/usePageMeta'

export default function IndustryBiotechPage() {
  usePageMeta("R&D Tax Incentive for Biotech & Life Sciences", "Australia&#x27;s biotech sector is among the most R&amp;D-intensive industries in the economy, and one of the sectors where R&amp;D Tax Incentive claims ar")
  return (
    <>

<header className="page-hero has-aside">
<div className="hero-text">
  <div className="eyebrow">Who we help: Biotech</div>
  <h1><span className="hero-ico">🧬</span>R&amp;D Tax Incentive for Biotech &amp; Life Sciences</h1>
  <p className="lede">Australia's biotech sector is among the most R&amp;D-intensive industries in the economy, and one of the sectors where R&amp;D Tax Incentive claims are most consistently undervalued. GrantReady has deep experience in biotech R&amp;D documentation and has helped life sciences companies recover significant amounts through both the R&amp;D Tax Incentive and the EMDG program.</p>
  <div className="ctas"><Link className="btn" to="/eligibility-quiz">Check your eligibility<span className="arr" aria-hidden="true" /></Link><Link className="btn ghost" to="/contact">Book free assessment</Link></div>
</div>
<div className="hero-aside"><CaseVisual tone="blue" icon="🧬" name={'Example: Biotech company'} sector={'Annual turnover $8M'} stats={[{ value: '$2.1M', label: 'eligible R&D spend' }, { value: '$913,500', label: 'R&D benefit' }]} chip={'Refundable, even in a loss-making position'} /></div>
</header><section>
  
  
  
  <div className="grid3 align-start">
<div className="tile"><div className="eyebrow">Eligible activities</div><h3>What activities typically qualify?</h3><ul className="checks"><li>Drug discovery and lead compound identification</li><li>Pre-clinical research and animal model studies</li><li>Clinical trial design, conduct, and analysis</li><li>Biologics and biosimilar development</li><li>Genomics, proteomics, and bioinformatics research</li><li>Synthetic biology and gene therapy experimentation</li><li>Process development for manufacturing scale-up</li><li>Toxicology studies and safety assessment</li></ul></div>
<div className="tile"><div className="eyebrow">Eligible expenditure</div><h3>What costs can be claimed?</h3><ul className="checks"><li>Wages and salaries of R&amp;D staff (scientists, lab technicians)</li><li>Contract research organisation (CRO) costs</li><li>Laboratory consumables and reagents</li><li>Equipment and facility costs attributable to R&amp;D</li><li>Regulatory and clinical study costs</li><li>Intellectual property registration costs</li></ul></div>
<div className="tile example"><div className="eyebrow">Example outcome</div><h3>Example: Biotech company</h3><div className="ledger"><div className="lrow"><span>Annual turnover</span><b>$8M</b></div><div className="lrow"><span>Eligible R&amp;D spend</span><b>$2.1M</b></div><div className="lrow total"><span>R&amp;D benefit</span><b>$913,500</b></div></div><p className="small">Refundable cash payment, even in a loss-making position (indicative)</p><div className="example-cta"><b>What would your claim be worth?</b><Link className="btn" to="/benefit-calculator">Estimate your benefit<span className="arr" aria-hidden="true" /></Link></div></div>
</div>
</section><section>
  <div className="eyebrow">FAQs</div>
  <h2>Common questions for Biotech</h2>
  
  <div className="faq"><details><summary>Do Phase 1 and Phase 2 clinical trials qualify?</summary><p>Yes. Clinical trials (including Phase 1 safety studies, Phase 2 efficacy studies, and early Phase 3 work) generally qualify as core R&amp;D activities because their outcomes are genuinely uncertain and they follow the scientific method.</p></details><details><summary>Can we claim costs paid to a CRO?</summary><p>Yes. Payments to a contract research organisation (also referred to as a Research Service Provider, or RSP, once registered) for work conducted on your behalf, where you own the results, are generally eligible as contracted R&amp;D expenditure.</p></details><details><summary>We are pre-revenue. Can we still claim?</summary><p>Absolutely. Pre-revenue companies in a tax loss position actually benefit most from the R&amp;D Tax Incentive: they can receive a direct cash refund of up to 43.5% of eligible spend (indicative), even with zero revenue.</p></details></div>
</section><div className="final"><div><h2>Find out what your biotech business is owed.</h2><p>Book a free assessment. Our specialists understand your sector and will identify every dollar you are entitled to.</p></div><div className="ctas"><Link className="btn" to="/contact">Book free assessment</Link><Link className="btn ghost" to="/eligibility-quiz">Take eligibility quiz</Link></div></div>

    </>
  )
}
