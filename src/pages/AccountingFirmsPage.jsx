import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

const SECTORS = [
  ['💻', 'Software & SaaS', 'Building novel platforms, algorithms, or technical systems'],
  ['🏭', 'Manufacturing', 'Developing new processes, materials, or production systems'],
  ['🧬', 'Biotech & Life Sciences', 'Drug discovery, biologics, or medical device development'],
  ['🌾', 'Agriculture & Food Tech', 'Innovating in growing methods, crop science, food processing, or agricultural technology'],
  ['⚙️', 'Engineering', 'Designing novel equipment, automation, or structural systems'],
  ['🔎', 'Any sector with R&D spend >$20K', 'If your client is spending on genuine technical experimentation, they may qualify'],
]

export default function AccountingFirmsPage() {
  usePageMeta("For Accounting Firms", "Refer your clients to an R&D specialist who will never touch your tax, audit, or advisory work.")
  return (
    <>

<header className="page-hero has-aside">
<div className="hero-text">
  <div className="eyebrow">For accounting firms</div>
  <h1>Refer your clients to an R&amp;D specialist who will never touch your tax, audit, or advisory work.</h1>
  <p className="lede">GrantReady is a specialist R&amp;D Tax Incentive consultancy. We do one thing. That means your clients get a better R&amp;D claim outcome, and you keep every other part of the relationship.</p>
  <div className="ctas"><Link className="btn" to="/contact">Talk to us about a referral<span className="arr" aria-hidden="true" /></Link><Link className="btn ghost" to="/why-us">Why GrantReady</Link></div>
</div>
<div className="hero-aside"><div className="note-box"><h3>The referral promise</h3><ul className="checks"><li>We will never offer your client tax, audit, or advisory services</li><li>We will never approach your client about anything outside R&amp;D/EMDG</li><li>We will never recruit your staff or approach your other clients</li><li>We keep you informed throughout the engagement</li><li>Your client relationship remains yours, always</li></ul></div></div>
</header><section>
  <div className="eyebrow">Why refer to GrantReady</div>
  <h2>A specialist referral that makes you look good.</h2>
  <p className="lede">Your clients doing genuine R&amp;D are rarely claiming everything they're entitled to. Referring them to GrantReady delivers better outcomes for them, without any risk to your firm or your relationship.</p>
  <div className="grid3"><div className="tile"><div className="icon">🔬</div><h3>We do one thing</h3><p>GrantReady is a specialist R&amp;D Tax Incentive and government grants consultancy. We do not prepare tax returns, conduct audits, provide financial advisory services, or do anything that overlaps with what you do for your clients.</p></div><div className="tile"><div className="icon">🤝</div><h3>We will never approach your client about anything else</h3><p>Our engagement is scoped strictly to R&amp;D Tax Incentive and EMDG claims. We will not discuss tax compliance, SMSF, business advisory, or any other service with your referred clients. Your client relationship is yours.</p></div><div className="tile"><div className="icon">📋</div><h3>We keep you informed</h3><p>With your client's consent, we provide you with regular updates on claim status, lodgement, and outcome. You stay across the process without having to manage it.</p></div><div className="tile"><div className="icon">💰</div><h3>Your clients recover more</h3><p>Self-lodging clients and those managed by generalist accountants typically miss 20–40% of eligible activity. A GrantReady referral consistently delivers better outcomes, which reflects well on the firm that made the introduction.</p></div><div className="tile"><div className="icon">🛡️</div><h3>Your reputation is protected</h3><p>GrantReady is a Registered Tax Agent, solely for the purposes of providing R&amp;D tax advice. Our claims are documented to ATO technical standards. Two successful ATO audit defences on record. Your referral carries no professional risk.</p></div><div className="tile"><div className="icon">⚡</div><h3>Minimal disruption to your client</h3><p>Our structured process minimises the time your client needs to invest. We conduct focused interviews with their technical team, then handle all documentation, registration, lodgement, and ATO liaison ourselves.</p></div></div>
</section><section>
  <div className="eyebrow">Our scope: full stop</div>
  <h2>Here is exactly what GrantReady does not do.</h2>
  
  <div className="scope">
  <div className="scope-intro">
    <p>We are not a general practice. We hold no accounting firm licence. We cannot and do not offer services outside our specialisation. This is not a commercial policy. <strong>It is a structural constraint. We are built to do one thing.</strong></p>
    <blockquote>Referring a client to GrantReady carries no risk of losing the relationship. You remain their accountant, auditor, and advisor.</blockquote>
  </div>
  <div className="scope-grid">
    <div className="scope-do">
      <div className="eyebrow">What we do</div>
      <h3>R&amp;D Tax Incentive and EMDG claims. Nothing else.</h3>
      <ul className="checks">
        <li>Eligibility assessment, at no charge</li>
        <li>Activity identification and technical documentation</li>
        <li>AusIndustry registration</li>
        <li>ATO R&amp;D schedule prepared for <b>your firm</b> to lodge</li>
        <li>ATO and AusIndustry review management</li>
      </ul>
    </div>
    <div className="scope-dont">
      <div className="eyebrow">GrantReady will never</div>
      <ul>
        <li><span aria-hidden="true">✗</span>Prepare or lodge income tax returns</li>
        <li><span aria-hidden="true">✗</span>Conduct financial statement audits</li>
        <li><span aria-hidden="true">✗</span>Provide SMSF or superannuation advice</li>
        <li><span aria-hidden="true">✗</span>Offer business valuation or advisory services</li>
        <li><span aria-hidden="true">✗</span>Discuss GST, BAS, or payroll tax compliance</li>
        <li><span aria-hidden="true">✗</span>Provide investment or financial planning advice</li>
        <li><span aria-hidden="true">✗</span>Recruit or approach your staff</li>
        <li><span aria-hidden="true">✗</span>Contact your client about anything outside the R&amp;D/EMDG engagement</li>
      </ul>
    </div>
  </div>
  <p className="scope-seal"><span aria-hidden="true">📄</span>Our engagement with your client is scoped to R&amp;D Tax Incentive and EMDG claims only. <b>This is written into our client agreements.</b></p>
</div>
</section><section>
  <div className="eyebrow">How a referral works</div>
  <h2>Four steps from introduction to outcome.</h2>
  
  <ol className="referral-flow">
  <li className="ref-step">
    <span className="ref-num">1</span>
    <div className="ref-card">
      <span className="ref-who you">Your firm</span>
      <h3>You make the introduction</h3>
      <p>A brief email or phone call to your client is all it takes. We can provide you with a one-page summary to share with clients you think may be eligible.</p>
      <span className="ref-tag">✓ A brief email or call</span>
    </div>
  </li>
  <li className="ref-step">
    <span className="ref-num">2</span>
    <div className="ref-card">
      <span className="ref-who us">GrantReady</span>
      <h3>We conduct a free eligibility assessment</h3>
      <p>GrantReady assesses your client's eligibility and provides them with an honest estimate of potential benefit, at no charge. If they don't qualify, we tell them clearly.</p>
      <span className="ref-tag">✓ At no charge</span>
    </div>
  </li>
  <li className="ref-step">
    <span className="ref-num">3</span>
    <div className="ref-card">
      <span className="ref-who us">GrantReady</span>
      <h3>We manage the full claim</h3>
      <p>From documentation through AusIndustry registration, we prepare the ATO R&amp;D schedule for you to lodge with your client's tax return, and manage any review process. Your client gets their refund. You retain the relationship.</p>
      <span className="ref-tag">✓ End to end</span>
    </div>
  </li>
  <li className="ref-step">
    <span className="ref-num">4</span>
    <div className="ref-card">
      <span className="ref-who both">You + your client</span>
      <h3>You stay informed</h3>
      <p>We provide claim status updates to you and your client throughout the process, and share the outcome on completion. No surprises.</p>
      <span className="ref-tag">✓ No surprises</span>
    </div>
  </li>
</ol>
</section><section>
  <div className="eyebrow">Which clients to refer</div>
  <h2>The question to ask is simple.</h2>
  <div className="refer-grid">
    <div className="refer-question">
      <div className="eyebrow">Ask your client</div>
      <p className="rq-q">"Do you spend money developing something new, where the outcome wasn't certain?"</p>
      <div className="rq-yes"><span>Yes</span>They may be eligible for the R&amp;D Tax Incentive.</div>
      <p className="rq-note">The program applies across every sector.</p>
    </div>
    <ul className="refer-sectors">
      {SECTORS.map(([icon, title, text], i) => (
        <li key={title} className={i === SECTORS.length - 1 ? 'any' : undefined}>
          <span className="rs-icon" aria-hidden="true">{icon}</span>
          <div><b>{title}</b><span>{text}</span></div>
        </li>
      ))}
    </ul>
  </div>
  <div className="refer-call">
    <span className="rc-icon" aria-hidden="true">💡</span>
    <p><strong>Not sure if your client qualifies?</strong> A 10-minute call about your client's business activities is all we need for an informal view on eligibility. No paperwork, no commitment.</p>
    <a className="btn" href="tel:0398539853">Call 03 9853 9853</a>
  </div>
</section><section>
  <div className="eyebrow">Common questions</div>
  <h2>Questions from accounting firms.</h2>
  
  <div className="faq"><details><summary>Will GrantReady compete with us for the client's tax work?</summary><p>No. GrantReady is not a general accounting or tax practice. We do not hold an accounting firm licence and we do not offer accounting, audit, or tax compliance services. Our Registered Tax Agent status covers R&amp;D Tax Incentive advice only: we prepare the ATO R&amp;D schedule, but your firm lodges the client's tax return.</p></details><details><summary>How does GrantReady charge?</summary><p>GrantReady charges a commencement fee plus a performance component tied to the outcome. There is no fee for the initial eligibility assessment. We can provide you with our full fee schedule on request.</p></details><details><summary>Can we be involved in the process?</summary><p>Yes. Many referring firms choose to be kept across the engagement. We can copy you on key communications and provide a summary of the final claim outcome. The level of involvement is up to you and your client.</p></details><details><summary>What do you need from us to assess a client?</summary><p>A basic introduction is enough to start. For the eligibility assessment, we need to speak with someone at the client business who understands what they are building or developing. We do not need financial statements at the assessment stage.</p></details><details><summary>What if my client has already been lodging their own R&amp;D claim?</summary><p>This is one of our most common referral scenarios. Self-lodging clients typically miss 20–40% of eligible activity. GrantReady reviews the prior claim, identifies what was missed, and prepares an improved claim. The uplift is often significant. Ask us about our Health Check.</p></details></div>
</section><div className="final"><div><h2>Talk to us about referring a client.</h2><p>A 10-minute call is enough for us to tell you whether a referral makes sense. No paperwork. No obligation. Just a frank conversation between specialists.</p></div><div className="ctas"><Link className="btn" to="/contact">Get in touch<span className="arr" aria-hidden="true" /></Link><a className="btn ghost" href="tel:0398539853">Call 03 9853 9853</a></div></div>

    </>
  )
}
