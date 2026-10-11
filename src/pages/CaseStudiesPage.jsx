import { Link } from 'react-router-dom'
import CaseVisual from '../components/CaseVisual'
import { usePageMeta } from '../hooks/usePageMeta'

export default function CaseStudiesPage() {
  usePageMeta("Case Studies", "Real Australian businesses that recovered government funding with GrantReady.")
  return (
    <>

<header className="page-hero">
  <div className="eyebrow">Case studies</div>
  <h1>Real businesses. Real results.</h1>
  <p className="lede">GrantReady has helped Australian businesses across every sector recover government funding they didn't know they were owed. Here are some of their stories.</p>
  
</header><section className="flush"><div className="cases"><article className="case">
  <CaseVisual tone="blue" icon="🏭" name="Lowbake Australia" sector="Manufacturing · Spraybooths & ovens"
    stats={[{ value: '80%', label: 'cut in energy costs' }, { value: '70%', label: 'cut in bake time' }]}
    chip="5 years of R&D Tax Incentive support" />
  <div><div className="meta"><span>Manufacturing</span></div><h3>Five years of R&amp;D Tax Incentive support behind an 80% cut in energy costs</h3>
  <dl><div><dt>The situation</dt><dd>As Australia's largest spraybooth manufacturer, designing and building spray booths and ovens for vehicles from small cars to large trucks and buses, Lowbake consistently refines and develops its technology to stay ahead.</dd></div><div><dt>What GrantReady did</dt><dd>GrantReady assisted Lowbake to access the R&amp;D Tax Incentive over five years for its research and development, allowing the company to keep investing in its technology.</dd></div><div><dt>Outcome</dt><dd>80% cut in energy costs, 70% cut in bake time, five years of R&amp;D Tax Incentive support</dd></div></dl>
  <p className="small"><b>Lowbake Australia</b> · <a href="https://www.lowbake.com" rel="noopener" target="_blank">Visit website →</a></p></div>
</article><article className="case flip">
  <CaseVisual tone="teal" icon="🩺" name="SourceDynamix" sector="Healthcare & IT · Patient management"
    stats={[{ value: '10+', label: 'years of R&D claims' }, { value: '$100Ks', label: 'in rebates recovered' }]}
    chip="Long-term R&D partner" />
  <div><div className="meta"><span>Healthcare &amp; Information Technology</span></div><h3>Ten years of R&amp;D Tax Incentive support for a growing patient care platform</h3>
  <dl><div><dt>The situation</dt><dd>SourceDynamix brings IT and software solutions to the complexities faced in the healthcare system around shared patient care, developing a highly scalable Patient Management System that integrates front office, clinical notes, radiology and laboratory information.</dd></div><div><dt>What GrantReady did</dt><dd>GrantReady has supported SourceDynamix for over 10 years, helping the company access the R&amp;D Tax Incentive as it continued to research, develop and refine its platform.</dd></div><div><dt>Outcome</dt><dd>Hundreds of thousands of dollars in R&amp;D Tax Incentive rebates over more than 10 years</dd></div></dl>
  <p className="small"><b>SourceDynamix</b> · <a href="https://3icare.com" rel="noopener" target="_blank">Visit website →</a></p></div>
</article><article className="case">
  <CaseVisual tone="violet" icon="⚽" name="Concave Football Boots" sector="Textile, Clothing & Footwear"
    stats={[{ value: 'Global', label: 'patented boot technology' }, { value: 'AU', label: 'Australian invention' }]}
    chip="Positioned for the R&D Tax Incentive" />
  <div><div className="meta"><span>Textile, Clothing &amp; Footwear</span></div><h3>Globally patented football boot technology, backed by the R&amp;D Tax Incentive</h3>
  <dl><div><dt>The situation</dt><dd>Developed on the back of an Australian invention, Concave Football Boots has refined a product that has been patented globally, aiming to be the most technologically advanced football boot in the world, offering players more power, better control, improved metatarsal protection and greater kicking accuracy.</dd></div><div><dt>What GrantReady did</dt><dd>With control and registration of the IP involved, Concave was in an ideal position to benefit from the R&amp;D Tax Incentive. GrantReady supported the company in accessing the incentive for its Australian research activities.</dd></div><div><dt>Outcome</dt><dd>Globally patented boot technology, positioned to benefit from the R&amp;D Tax Incentive</dd></div></dl>
  <p className="small"><b>Concave Football Boots</b></p></div>
</article></div></section><div className="final"><div><h2>Could you be the next case study?</h2><p>Every business in this list was told by someone they might not qualify. A GrantReady assessment proved otherwise.</p></div><div className="ctas"><Link className="btn" to="/eligibility-quiz">Check your eligibility →</Link><Link className="btn ghost" to="/contact">Book an assessment</Link></div></div>

    </>
  )
}
