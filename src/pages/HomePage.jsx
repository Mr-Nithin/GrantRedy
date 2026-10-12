import { Link } from 'react-router-dom'
import Estimator from '../components/Estimator'
import EnquiryForm from '../components/EnquiryForm'
import { usePageMeta } from '../hooks/usePageMeta'

export default function HomePage() {
  usePageMeta("Australia's R&D Tax Incentive Specialists", "GrantReady helps Australian businesses recover R&D Tax Incentive and EMDG funding.")
  return (
    <>


<header className="hero">
  <div>
    <div className="badge"><span className="star" aria-hidden="true">★★★</span> Australia's #1 R&amp;D Tax Specialist · Since 2006</div>
    <h1>We build defensible claims.</h1>
    <p>Most businesses doing <em>Research and Development</em> aren't claiming everything they're entitled to. Get back up to 43.5¢ per dollar of R&amp;D spend, plus 50% of overseas marketing costs via EMDG.</p>
    <div className="ctas"><Link className="btn" to="/eligibility-quiz">Check if you qualify<span className="arr" aria-hidden="true" /></Link><Link className="btn ghost" to="/benefit-calculator">Calculate your benefit<span className="arr" aria-hidden="true" /></Link></div>
    <div className="team">
      <div className="avatars"><img src="/assets/img/t1.webp" alt="" width="96" height="96" /><img src="/assets/img/t2.webp" alt="" width="96" height="96" /><img src="/assets/img/t3.webp" alt="" width="96" height="96" /><img src="/assets/img/t4.webp" alt="" width="96" height="96" /><img src="/assets/img/t5.webp" alt="" width="96" height="96" /></div>
      <p><b>Talk to our <span className="gold">SuperStar</span>.</b><br />Free assessment call. No obligation.</p>
    </div>
  </div>
  <div className="visual">
    <img src="/assets/img/hero.webp" alt="GrantReady team meeting with a client" width="720" height="480" fetchPriority="high" />
    <Estimator />
  </div>
</header>

<div className="stats">
  <div><b>3,000+</b><span>Grant programs for Australian business</span></div>
  <div><b>43.5%</b><span>Cash rebate on R&amp;D spend (up to)</span></div>
  <div><b>$2.9B</b><span>Federal grant program funding</span></div>
  <div><b>500+</b><span>Australian businesses helped</span></div>
  <div><b>2006</b><span>Operating since</span></div>
</div>

<section id="story">
  <div className="eyebrow">Our story</div>
  <h2>How we became Australia's #1 R&amp;D tax specialist.</h2>
  <p className="lede">It started with one problem we kept seeing: Australian businesses doing real research and development, and walking away from money they were owed.</p>
  <div className="story">
    <div className="chap"><span className="yr">2006</span><h3>One focus from day one</h3><p>GrantReady was founded to do one thing well: help Australian innovators claim the R&amp;D Tax Incentive properly.</p></div>
    <div className="chap"><span className="yr">20 yrs</span><h3>Through every rule change</h3><p>We've worked through every legislative change, every shift in ATO review approach, and every update to the program's rules.</p></div>
    <div className="chap"><span className="yr">500+</span><h3>Businesses helped</h3><p>From biotech labs to software teams and farms, we've helped hundreds of companies recover what they were owed, added EMDG for exporters, and built GrantGuru so anyone can find the right grant.</p></div>
    <div className="chap now"><span className="yr">Today</span><h3>Your claim is next</h3><p>Australia's #1 R&amp;D tax specialist. Start with a free assessment call and find out what your business could recover.</p></div>
  </div>
</section>

<section id="programs">
  <div className="eyebrow">Our programs</div>
  <h2>Two programs. One specialist team.</h2>
  <p className="lede">GrantReady manages the R&amp;D Tax Incentive and Export Market Development Grant (EMDG) claims process from eligibility assessment through lodgement and payment.</p>
  <div className="programs">
    <div className="prog">
      <div className="eyebrow">R&amp;D Tax Incentive</div>
      <h3>Get back up to 43.5 cents for every dollar of eligible R&amp;D expenditure</h3>
      <ul><li>Up to 43.5% offset for companies under $20M turnover</li><li>Refundable, even loss-making companies receive cash</li><li>Retrospective, claim within 10 months after end of your income year</li><li>End-to-end claim managed by R&amp;D specialists</li></ul>
      <div className="big"><b>43.5%</b><span>Maximum offset (indicative) on eligible R&amp;D spend</span></div>
    </div>
    <div className="prog">
      <div className="eyebrow">EMDG</div>
      <h3>Recover up to 50% of your overseas marketing expenditure</h3>
      <p>The Export Market Development Grant reimburses eligible export promotional expenditure for businesses with annual income under $20M. Trade shows, overseas travel, IP registration, and more.</p>
      <ul><li>Up to 50% of eligible export spend reimbursed</li><li>Available to exporters with income under $20M</li><li>Grant paid directly to your bank account</li><li>Covers trade shows, travel, IP registration</li></ul>
      <div className="big"><b>50%</b><span>Of eligible EMDG expenditure</span></div>
    </div>
  </div>
</section>


<section>
  <div className="eyebrow">Why GrantReady</div>
  <h2>Specialists beat generalists. Every time.</h2>
  <div className="grid4">
    <div><div className="icon">🎯</div><h3>Specialists, not generalists</h3><p>GrantReady does one thing: R&amp;D Tax Incentive and EMDG. One focus means better outcomes and a stronger claim.</p></div>
    <div><div className="icon">📅</div><h3>Operating since 2006</h3><p>Over 20 years navigating every legislative change, ATO review approach, and shift in the program's rules.</p></div>
    <div><div className="icon">📝</div><h3>Thorough documentation</h3><p>Our specialists conduct structured interviews with your technical team to capture every eligible activity and build a defensible claim.</p></div>
    <div><div className="icon">✅</div><h3>End-to-end managed</h3><p>From eligibility through documentation, registration, lodgement, and ATO review management. We handle everything.</p></div>
  </div>
</section>

<section id="industries">
  <div className="eyebrow">Who we help</div>
  <h2>R&amp;D happens across every industry.</h2>
  <p className="lede">If your business is solving technical problems with uncertain outcomes, the R&amp;D Tax Incentive almost certainly applies, regardless of your sector.</p>
  <div className="grid3">
    <Link className="ind" to="/industry-biotech"><div className="icon">🧬</div><h3>Biotech &amp; Life Sciences</h3><p>Drug development, clinical research, novel compounds, genomics, and diagnostics.</p></Link>
    <Link className="ind" to="/industry-biomedical"><div className="icon">🏥</div><h3>Biomedical &amp; MedTech</h3><p>Medical devices, implants, diagnostics hardware, and biomedical engineering.</p></Link>
    <Link className="ind" to="/industry-agriculture"><div className="icon">🌾</div><h3>Agriculture &amp; AgTech</h3><p>Farm robotics, precision agriculture, crop science, and novel growing methods.</p></Link>
    <Link className="ind" to="/industry-it"><div className="icon">💻</div><h3>IT &amp; Software</h3><p>Novel platforms, algorithms, embedded systems, and technical development beyond standard practice.</p></Link>
    <Link className="ind" to="/industry-manufacturing"><div className="icon">🏭</div><h3>Manufacturing</h3><p>New materials, process innovation, production automation, and novel manufacturing methods.</p></Link>
    <Link className="ind" to="/industries"><div className="icon">⚗️</div><h3>Other Industries</h3><p>R&amp;D applies across every sector. If your business is solving technical problems with uncertain outcomes, you're likely eligible.</p></Link>
  </div>
</section>

<section id="how">
  <div className="eyebrow">How it works</div>
  <h2>From free assessment to funded. Three steps.</h2>
  <p className="lede">Getting what you're entitled to is simple: engage GrantReady and we manage the process end to end.</p>
  <div className="nocost"><b>$0</b><p><strong>No cost to find out.</strong> Your eligibility assessment and estimate are completely free, and you're under no obligation to proceed.</p><a className="btn" href="#book">Book free assessment</a></div>
  <div className="steps2">
    <div className="st"><div><span className="num">01</span><span className="free"><b>$0</b> No cost · No obligation</span><h3>Free eligibility assessment</h3><p>We assess your eligibility, identify eligible activities and expenditure, and give you a realistic estimate. At no charge.</p><div className="det">Expect a quick call with a specialist.</div></div><div className="mock" aria-hidden="true"><div className="card">
  <h4>Free eligibility assessment</h4><div className="sub">A quick call with an R&amp;D tax specialist</div>
  <div className="price"><b>$0</b><s>no fee</s><span className="ok">No obligation</span></div>
  <div className="slots"><span>Mon 10:00</span><span className="on">Tue 2:30</span><span>Wed 11:00</span></div>
  <span className="cta">Book my free call</span></div></div></div>
    <div className="st"><div><span className="num">02</span><h3>We build your claim</h3><p>GrantReady collects documentation, builds the technical narrative, assesses eligible expenditure, registers with AusIndustry, and provides the ATO schedule for your accountant to lodge with your tax return.</p><div className="det">You review and approve before anything is submitted.</div></div><div className="mock" aria-hidden="true"><div className="card">
  <h4>Your R&amp;D claim</h4><div className="sub">Prepared by GrantReady · ready for your review</div>
  <div className="pbar"><i></i></div>
  <div className="row"><b>Technical discussion</b><span className="ok">✓ Done</span></div>
  <div className="row"><b>Eligible activities documented</b><span className="ok">✓ Done</span></div>
  <div className="row"><b>Expenditure assessed</b><span className="ok">✓ Done</span></div>
  <div className="row"><b>AusIndustry registration</b><span className="ok">✓ Lodged</span></div>
  <div className="row"><b>ATO schedule to accountant</b><span>Awaiting approval</span></div></div></div></div>
    <div className="st"><div><span className="num">03</span><h3>Government pays you</h3><p>Your refund arrives via tax return. Small companies in loss receive a direct cash refund. Larger companies reduce their tax payable.</p><div className="det">Most claims pay out within 30–60 days of lodgement.</div></div><div className="mock" aria-hidden="true"><div className="card">
  <h4>R&amp;D Tax Incentive refund</h4><div className="sub">Example only · refundable offset</div>
  <div className="row"><b>Eligible R&amp;D spend</b><span>$400,000</span></div>
  <div className="row"><b>Offset rate</b><span>43.5%</span></div>
  <div className="refund">$174,000</div><div className="sub" style={{margin: "0"}}>Paid via your tax return, typically 30–60 days after lodgement</div></div></div></div>
  </div>
</section>

<section>
  <div className="eyebrow">Client results</div>
  <h2>Businesses that didn't know what they were owed.</h2>
  <p className="lede">The most common thing our clients say after their first claim: "We wish we'd known sooner."</p>
  <div className="cases">
    <article className="case">
      <div className="rp" aria-hidden="true">
        <div className="rp-top"><div className="rp-ico">💻</div><div><b>SaaS platform</b><span>Melbourne · R&amp;D Tax Incentive</span></div></div>
        <div className="ba"><div><small>Claimed before</small><div className="was">$0</div></div><span className="arrow">→</span><div className="after"><small>With GrantReady</small><div className="now">$280,000</div></div></div>
        <span className="rp-chip">✓ Six weeks to lodgement</span>
      </div>
      <div>
        <div className="meta"><span>SaaS platform</span><span>Melbourne</span><span>R&amp;D Tax Incentive</span></div>
        <h3>Three years of R&amp;D, never claimed</h3>
        <dl>
          <div><dt>The situation</dt><dd>The team had been building new platform technology for three years but assumed software development wouldn't count, so they had never lodged a claim.</dd></div>
          <div><dt>What we did</dt><dd>Interviewed the engineers, separated core R&amp;D from routine development, documented the experiments, and registered the claim with AusIndustry.</dd></div>
          <div><dt>Timeline</dt><dd>Six weeks from first call to lodgement.</dd></div>
        </dl>
        <blockquote>"We had been doing R&amp;D for three years and had never claimed. GrantReady led us through the process in six weeks and we received $280,000 in the first year."<cite><b>Managing Director</b> · SaaS Platform, Melbourne</cite></blockquote>
      </div>
    </article>
    <article className="case flip">
      <div className="rp" aria-hidden="true">
        <div className="rp-top"><div className="rp-ico">🏭</div><div><b>Manufacturing</b><span>Brisbane · R&amp;D Tax Incentive</span></div></div>
        <div className="ba"><div><small>Told it wasn't eligible</small><div className="was">$0</div></div><span className="arrow">→</span><div className="after"><small>With GrantReady</small><div className="now">$340,000</div></div></div>
        <span className="rp-chip">✓ Automated testing platform</span>
      </div>
      <div>
        <div className="meta"><span>Manufacturing</span><span>Brisbane</span><span>R&amp;D Tax Incentive</span></div>
        <h3>Told it wasn't eligible. It was.</h3>
        <dl>
          <div><dt>The situation</dt><dd>The company had built an automated testing platform in-house. Their accountant advised it didn't qualify, so the spend went unclaimed.</dd></div>
          <div><dt>What we did</dt><dd>Reviewed the technical uncertainty behind the platform, mapped the eligible activities and costs, and built a claim that stands up to review.</dd></div>
          <div><dt>Outcome</dt><dd>$340,000 received, with documentation on file in case of an ATO review.</dd></div>
        </dl>
        <blockquote>"My accountant said the automated testing platform we'd built wasn't eligible. GrantReady showed us it absolutely was, and we received $340,000."<cite><b>Operations Director</b> · Manufacturing, Brisbane</cite></blockquote>
      </div>
    </article>
    <article className="case">
      <div className="rp" aria-hidden="true">
        <div className="rp-top"><div className="rp-ico">🏥</div><div><b>Biomedical</b><span>Sydney · R&amp;D Tax Incentive</span></div></div>
        <div className="ba"><div><small>Assumed ineligible</small><div className="was">$0</div></div><span className="arrow">→</span><div className="after"><small>With GrantReady</small><div className="now">$520,000</div></div></div>
        <span className="rp-chip">✓ Australian-owned IP qualified</span>
      </div>
      <div>
        <div className="meta"><span>Biomedical</span><span>Sydney</span><span>R&amp;D Tax Incentive</span></div>
        <h3>A multinational structure, still eligible</h3>
        <dl>
          <div><dt>The situation</dt><dd>As part of a multinational group, the business assumed its structure ruled it out of the Australian incentive.</dd></div>
          <div><dt>What we did</dt><dd>Confirmed the IP was Australian-owned, identified the qualifying research, and prepared the registration and claim.</dd></div>
          <div><dt>Outcome</dt><dd>$520,000 received.</dd></div>
        </dl>
        <blockquote>"We assumed our multinational structure disqualified us. GrantReady confirmed our Australian-owned IP still qualified. We received $520,000."<cite><b>CEO</b> · Biomedical, Sydney</cite></blockquote>
      </div>
    </article>
  </div>
</section>

<div className="cta2" id="book">
  <div className="form">
    <h2>Not sure if your business qualifies?</h2>
    <p>Book your free assessment call. Speak directly with an R&amp;D tax specialist about your eligibility and what you could recover.</p>
    <EnquiryForm okClassName="ok" okText="Thanks. We'll be in touch within one business day.">
      <div><label htmlFor="fname">Full name</label><input id="fname" name="name" required autoComplete="name" maxLength="80" placeholder="Jane Smith" /></div>
      <div><label htmlFor="femail">Email</label><input id="femail" name="email" type="email" required autoComplete="email" maxLength="120" placeholder="jane@company.com.au" /></div>
      <div><label htmlFor="fturn">Annual turnover</label><select id="fturn" name="turnover"><option>Under $20M</option><option>$20M or more</option><option>Not sure</option></select></div>
      <div><label htmlFor="fprog">Interested in</label><select id="fprog" name="interest"><option>R&amp;D Tax Incentive</option><option>EMDG</option><option>Both</option><option>Other grants</option></select></div>
      <button className="go" type="submit">Book my free assessment</button>
    </EnquiryForm>
  </div>
  <div className="pic"><img src="/assets/img/team.webp" alt="GrantReady team" loading="lazy" /></div>
</div>

    </>
  )
}
