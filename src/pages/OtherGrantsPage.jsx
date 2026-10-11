import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export default function OtherGrantsPage() {
  usePageMeta("Other Grants", "Federal and state grant programs for Australian businesses, tracked by GrantGuru.")
  return (
    <>

<header className="page-hero">
  <div className="eyebrow">Other grants</div>
  <h1>Beyond R&amp;D and EMDG, there's more.</h1>
  <p className="lede">Federal and state governments run hundreds of grant programs for Australian businesses. Every GrantReady client gets a free trial access to GrantGuru, our sister platform tracking 3,098 grants worth $106 billion, and finding every opportunity that's relevant to your business.</p>
  
</header><section>
  <div className="eyebrow">Meet GrantGuru</div>
  <h2>The grant discovery service built for Australian businesses.</h2>
  
  <div className="split"><div>
<p>GrantGuru is a dedicated grant discovery service (a sister company to GrantReady) built to solve one problem: making sure Australian businesses never miss a grant they're entitled to.</p>
<p>With 3,098 grants worth $106 billion tracked across federal and state governments, it's impossible to manually track what's open, what's relevant, and what's closing next week. GrantGuru does that automatically, and surfaces only the opportunities that match your specific business.</p>
<a className="btn" href="https://grantguru.com/au">Visit GrantGuru →</a></div>
<div className="tile"><div className="eyebrow">GrantGuru</div><div className="ledger"><div className="lrow"><span>Grants tracked</span><b>3,098</b></div><div className="lrow"><span>Combined value tracked</span><b>$106B</b></div><div className="lrow"><span>Matched to your profile</span><b>Automatically</b></div></div></div></div>
</section><section>
  <div className="eyebrow">What you get</div>
  <h2>Everything your business needs to stay grant-ready.</h2>
  
  <div className="grid3"><div className="tile"><div className="icon">🔍</div><h3>Comprehensively tracked</h3><p>GrantGuru covers federal and state grant programs across every sector and funding body. When a new opportunity opens, it appears in your account immediately.</p></div><div className="tile"><div className="icon">🎯</div><h3>Matched to your profile</h3><p>Your business profile determines what you see. You get only grants that are genuinely relevant to your size, sector, location, and activities, not a generic list of everything available.</p></div><div className="tile"><div className="icon">📋</div><h3>Eligibility at a glance</h3><p>Every match shows you the grant amount, closing date, and a plain-English eligibility summary so you can decide in seconds whether it's worth pursuing.</p></div><div className="tile"><div className="icon">🔔</div><h3>Alerts before they open</h3><p>GrantGuru alerts you before application windows open, so you have time to prepare, not scramble at the last minute.</p></div><div className="tile"><div className="icon">🤝</div><h3>Supported by specialists</h3><p>When you find something worth applying for, GrantReady's team is right there. We can take over the application, writing, and lodgement from inside the same relationship.</p></div><div className="tile"><div className="icon">🆓</div><h3>Free for every GrantReady client</h3><p>There's no extra cost. Every GrantReady client gets a fully activated GrantGuru account, included as part of the relationship, not as an upsell.</p></div></div>
</section><section>
  <div className="eyebrow">How it works</div>
  <h2>From client to covered, automatically.</h2>
  
  <ol className="steps"><li><h3>You become a GrantReady client</h3><p>As part of onboarding, we set up your GrantGuru account and configure it with your business profile: sector, size, activities, and location.</p></li><li><h3>GrantGuru tracks the landscape for you</h3><p>Hundreds of federal and state grant programs are tracked and updated regularly. No manual searching required on your end.</p></li><li><h3>Relevant grants land in your inbox</h3><p>You receive alerts when a matched grant opens, with closing dates, funding amounts, and a quick eligibility read so you can act fast.</p></li><li><h3>GrantReady takes it from there</h3><p>If a grant is worth pursuing, your existing GrantReady relationship means the team can step in immediately to assess, write, and lodge the application.</p></li></ol>
</section><div className="final"><div><h2>Don't let another grant close without knowing about it.</h2><p>Engage GrantReady and get R&amp;D tax, EMDG, and GrantGuru access, everything your business needs to capture every dollar it's entitled to.</p></div><div className="ctas"><Link className="btn" to="/contact">Book free assessment →</Link><a className="btn ghost" href="https://grantguru.com/au">Visit GrantGuru →</a></div></div>

    </>
  )
}
