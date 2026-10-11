import { Link } from 'react-router-dom'
import CaseVisual from '../components/CaseVisual'
import { usePageMeta } from '../hooks/usePageMeta'

export default function IndustryBiomedicalPage() {
  usePageMeta("R&D Tax Incentive for Medical Devices & Biomedical", "Medical device and biomedical technology companies are among the most consistent beneficiaries of the R&amp;D Tax Incentive. From early-stage prototyp")
  return (
    <>

<header className="page-hero has-aside">
<div className="hero-text">
  <div className="eyebrow">Who we help: Biomedical</div>
  <h1><span className="hero-ico">🏥</span>R&amp;D Tax Incentive for Medical Devices &amp; Biomedical</h1>
  <p className="lede">Medical device and biomedical technology companies are among the most consistent beneficiaries of the R&amp;D Tax Incentive. From early-stage prototype development through TGA regulatory submissions, a significant portion of your expenditure is likely eligible. GrantReady has deep experience in medical device R&amp;D documentation.</p>
  <div className="ctas"><Link className="btn" to="/eligibility-quiz">Check your eligibility →</Link><Link className="btn ghost" to="/contact">Book free assessment</Link></div>
</div>
<div className="hero-aside"><CaseVisual tone="blue" icon="🏥" name={'Example: Biomedical company'} sector={'Annual turnover $5M'} stats={[{ value: '$1.2M', label: 'eligible R&D spend' }, { value: '$522,000', label: 'R&D benefit' }]} chip={'Refundable under $20M turnover'} /></div>
</header><section>
  
  
  
  <div className="grid3 align-start">
<div className="tile"><div className="eyebrow">Eligible activities</div><h3>What activities typically qualify?</h3><ul className="checks"><li>Medical device design and prototype development</li><li>Biocompatibility testing and material science research</li><li>In vitro and in vivo testing of device performance</li><li>Clinical evaluation and human factors studies</li><li>TGA/FDA regulatory study design and conduct</li><li>Software verification and validation for medical software (SaMD)</li><li>Sterilisation and manufacturing process development</li><li>Implant and wearable device R&amp;D</li></ul></div>
<div className="tile"><div className="eyebrow">Eligible expenditure</div><h3>What costs can be claimed?</h3><ul className="checks"><li>Engineering and R&amp;D staff wages</li><li>Prototype and tooling costs attributable to R&amp;D</li><li>Testing laboratory and certification costs</li><li>CRO and clinical evaluation costs</li><li>IP registration and patent costs</li><li>Software development costs for device software</li></ul></div>
<div className="tile example"><div className="eyebrow">Example outcome</div><h3>Example: Biomedical company</h3><div className="ledger"><div className="lrow"><span>Annual turnover</span><b>$5M</b></div><div className="lrow"><span>Eligible R&amp;D spend</span><b>$1.2M</b></div><div className="lrow total"><span>R&amp;D benefit</span><b>$522,000</b></div></div><p className="small">Refundable for companies with turnover under $20M (indicative)</p><div className="example-cta"><b>What would your claim be worth?</b><Link className="btn" to="/benefit-calculator">Estimate your benefit →</Link></div></div>
</div>
</section><section>
  <div className="eyebrow">FAQs</div>
  <h2>Common questions for Biomedical</h2>
  
  <div className="faq"><details><summary>Does TGA regulatory work qualify?</summary><p>Work conducted to determine whether a device design meets regulatory requirements (where the outcome is not yet known) generally qualifies as a supporting R&amp;D activity.</p></details><details><summary>We manufacture devices under contract. Does this qualify?</summary><p>Contract manufacturing alone does not qualify. However, process development, material science research, and testing activities conducted to develop the manufacturing process may qualify.</p></details><details><summary>Can software developed for a medical device qualify?</summary><p>Yes. Software as a Medical Device (SaMD) development, verification, and validation activities generally qualify as R&amp;D, particularly where the software behaviour under certain conditions is uncertain.</p></details></div>
</section><div className="final"><div><h2>Find out what your biomedical business is owed.</h2><p>Book a free assessment. Our specialists understand your sector and will identify every dollar you are entitled to.</p></div><div className="ctas"><Link className="btn" to="/contact">Book free assessment</Link><Link className="btn ghost" to="/eligibility-quiz">Take eligibility quiz</Link></div></div>

    </>
  )
}
