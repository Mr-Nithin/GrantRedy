import { Link } from 'react-router-dom'
import CaseVisual from '../components/CaseVisual'
import { usePageMeta } from '../hooks/usePageMeta'

export default function IndustriesPage() {
  usePageMeta("Industries", "R&D Tax Incentive guidance for biotech, biomedical, agriculture, software and manufacturing.")
  return (
    <>

<header className="page-hero has-aside">
<div className="hero-text">
  <div className="eyebrow">Industries</div>
  <h1>R&amp;D doesn't look the same in every industry. But the incentive does.</h1>
  <p className="lede">GrantReady has worked across every major Australian industry sector. The eligible activities differ, but the refund of up to 43.5¢ per dollar (indicative) is the same. Select your industry for sector-specific guidance.</p>
</div>
<div className="hero-aside"><CaseVisual tone="blue" icon="🏭" name={'Typical claim ranges'} sector={'Indicative, by sector'} stats={[{ value: '$200K–$1.5M', label: 'Biotech & Life Sciences' }, { value: '$80K–$500K', label: 'Agriculture & AgTech' }]} chip={'12+ sectors since 2006'} /></div>
</header><section className="flush"><div className="grid3"><Link className="ind" to="/industry-biotech"><div className="icon">🧬</div><h3>Biotech &amp; Life Sciences</h3><p>Drug discovery, genomics, diagnostics, cell therapy, and biologics development. Some of the highest-value R&amp;D claims in Australia.</p><p className="range">→ $200K–$1.5M typical range</p><span className="more">See industry guide →</span></Link><Link className="ind" to="/industry-biomedical"><div className="icon">🏥</div><h3>Biomedical &amp; Medical Devices</h3><p>Device development, clinical trials, regulatory submissions, and novel therapeutic applications with uncertain outcomes.</p><p className="range">→ $150K–$800K typical range</p><span className="more">See industry guide →</span></Link><Link className="ind" to="/industry-agriculture"><div className="icon">🌱</div><h3>Agriculture &amp; AgTech</h3><p>Farm robotics and precision agriculture (ag tech), new crop varieties, novel growing methods, and food processing innovation.</p><p className="range">→ $80K–$500K typical range</p><span className="more">See industry guide →</span></Link><Link className="ind" to="/industry-it"><div className="icon">💻</div><h3>IT &amp; Software</h3><p>Platform development, novel algorithms, AI/ML systems, and technical infrastructure where the outcome is genuinely uncertain.</p><p className="range">→ $100K–$600K typical range</p><span className="more">See industry guide →</span></Link><Link className="ind" to="/industry-manufacturing"><div className="icon">🏭</div><h3>Manufacturing &amp; Engineering</h3><p>Novel equipment design, process engineering, materials development, automation, and quality improvement programs.</p><p className="range">→ $120K–$700K typical range</p><span className="more">See industry guide →</span></Link><div className="ind ind-alt"><div className="eyebrow">All industries</div><h3>Not sure if your industry qualifies?</h3><p>The R&amp;D Tax Incentive applies to any industry where experimental activities resolve technical uncertainty. A free assessment gives you a definitive answer.</p><Link className="btn" to="/eligibility-quiz">Take the quiz →</Link></div></div></section><div className="final"><div><h2>Every industry. One specialist team.</h2><p>GrantReady has managed R&amp;D Tax Incentive claims across 12+ sectors since 2006. Talk to a specialist about your specific industry and activities.</p></div><div className="ctas"><Link className="btn" to="/contact">Book free assessment →</Link></div></div>

    </>
  )
}
