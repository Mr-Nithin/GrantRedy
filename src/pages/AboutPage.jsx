import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export default function AboutPage() {
  usePageMeta("About Us", "20 years. One specialisation. Hundreds of Australian businesses funded.")
  return (
    <>

<header className="page-hero">
  <div className="eyebrow">About us</div>
  <h1>20 years. One specialisation. Hundreds of Australian businesses funded.</h1>
  <p className="lede">GrantReady was founded on a simple observation: most Australian businesses doing genuine R&amp;D are either not claiming or significantly underclaiming. We exist to fix that.</p>
  
</header><section>
  <div className="eyebrow">Our mission</div>
  <h2>Helping Australian innovation get the recognition it deserves.</h2>
  
  <div className="split"><div>
<p>The R&amp;D Tax Incentive is one of the most generous government programs in the OECD. It returns up to 43.5 cents for every dollar spent on eligible research and development, as a direct cash refund for eligible small companies in a tax loss position. Yet most businesses doing genuine R&amp;D don't access it properly.</p>
<p>Some don't know they qualify. Others have been told by generalist accountants that their activities don't count. Many more are claiming, but claiming significantly less than they are entitled to, and some are overclaiming without realising it.</p>
<p>GrantReady exists to close that gap. As a registered tax agent (solely for the purposes of providing R&amp;D tax advice) with specialist expertise in R&amp;D Tax Incentive and EMDG, we manage the entire claim process on behalf of our clients and deliver outcomes that generalists simply can't match.</p></div><div className="grid2"><div className="tile"><div className="icon">🏢</div><h3>Registered Tax Agent</h3><p>GrantReady Pty Ltd is a Registered Tax Agent, solely for the purposes of providing R&amp;D tax advice.</p></div><div className="tile"><div className="icon">📅</div><h3>Operating since 2006</h3><p>20+ years as an R&amp;D Tax Incentive specialist. We have navigated every major legislative change.</p></div><div className="tile"><div className="icon">🛡️</div><h3>ATO audit defence</h3><p>Two successful ATO audit defences. We prepare claims that stand up to scrutiny.</p></div><div className="tile"><div className="icon">🤖</div><h3>AI-assisted process</h3><p>Our proprietary documentation platform improves claim quality and reduces your team's time.</p></div></div></div>
</section><section>
  <div className="eyebrow">Our history</div>
  <h2>20 years of specialist focus.</h2>
  
  <div className="story six"><div className="chap"><span className="yr">2006</span><h3>Founded</h3><p>GrantReady established in Melbourne as a specialist R&amp;D Tax Incentive consultancy.</p></div><div className="chap"><span className="yr">2010</span><h3>Program expansion</h3><p>Added Export Market Development Grant (EMDG) to the service offering.</p></div><div className="chap"><span className="yr">2016</span><h3>100+ clients</h3><p>Reached milestone of 100 active Australian business clients across all major sectors.</p></div><div className="chap"><span className="yr">2019</span><h3>ATO audit wins</h3><p>Successfully defended two ATO audit challenges with full claim amounts preserved.</p></div><div className="chap"><span className="yr">2023</span><h3>AI documentation</h3><p>Launched AI-assisted documentation platform to improve claim quality and efficiency.</p></div><div className="chap now"><span className="yr">2024</span><h3>Expansion</h3><p>Expanded specialist team to meet growing demand across biotech, manufacturing, and technology sectors.</p></div></div>
</section><div className="final"><div><h2>Work with a team that does this every day.</h2><p>20 years of specialist experience. One focus. Better outcomes for Australian businesses doing genuine R&amp;D.</p></div><div className="ctas"><Link className="btn" to="/contact">Book free assessment →</Link></div></div>

    </>
  )
}
