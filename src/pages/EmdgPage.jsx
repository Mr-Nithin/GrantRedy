import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export default function EmdgPage() {
  usePageMeta("EMDG", "Recover up to 50% of your overseas marketing expenditure with the Export Market Development Grant.")
  return (
    <>

<header className="page-hero">
  <div className="eyebrow">Export Market Development Grant</div>
  <h1>Recover up to 50% of your overseas marketing expenditure.</h1>
  <p className="lede">The Export Market Development Grant (EMDG) is an Australian Government program administered by Austrade that reimburses up to 50% of eligible export promotional expenditure for businesses with annual income under $20M.</p>
  <div className="ctas"><Link className="btn" to="/contact">Get EMDG assessment →</Link><Link className="btn ghost" to="/services">View all services</Link></div><div className="kpis"><div><b>50%</b><span>Of eligible expenditure reimbursed</span></div><div><b>&lt;$20M</b><span>Maximum income to qualify</span></div><div><b>$20K</b><span>Minimum expenditure threshold</span></div><div><b>Tier 1-3</b><span>Grant tier based on minimum financial turnover</span></div></div>
</header><section>
  <div className="eyebrow">Eligible expenditure</div>
  <h2>What qualifies for EMDG.</h2>
  <p className="lede">EMDG covers a wide range of promotional activities that have the purpose of developing export sales. Here are the key eligible categories.</p>
  <div className="grid3"><div className="tile"><div className="icon">🌐</div><h3>Overseas representation and agents</h3><p>Fees paid to maintain a representative, distributor, or agent in a foreign country to promote your product or service in that export market.</p></div><div className="tile"><div className="icon">✈️</div><h3>Overseas and domestic travel</h3><p>Travel costs for promotional trips to a foreign country, and trips within Australia specifically to meet with and engage foreign buyers.</p></div><div className="tile"><div className="icon">🛬</div><h3>Hosting foreign buyer visits</h3><p>Costs of bringing potential overseas buyers to Australia to visit your business and see your product firsthand.</p></div><div className="tile"><div className="icon">📊</div><h3>Consultants</h3><p>Fees paid to a consultant engaged to carry out export market research or promotional activities on your behalf.</p></div><div className="tile"><div className="icon">📣</div><h3>Soliciting for business overseas</h3><p>Costs of activities carried out in a foreign country to seek export business, including trade shows, exhibitions, and direct in-market promotion.</p></div><div className="tile"><div className="icon">🎁</div><h3>Free samples and promotional items</h3><p>Product samples provided free of charge to potential foreign buyers to demonstrate your product ahead of an export sale.</p></div><div className="tile"><div className="icon">📋</div><h3>Promotional literature and advertising</h3><p>Production of marketing materials, digital advertising, and brand activity specifically targeting overseas markets.</p></div><div className="tile"><div className="icon">⚖️</div><h3>Intellectual property rights</h3><p>Costs of registering and protecting patents, trademarks, or designs in your export markets.</p></div><div className="tile"><div className="icon">🎓</div><h3>Export training</h3><p>Approved export training if you're a Tier 1 applicant, or training delivered through an approved representative body.</p></div></div>
</section><section>
  <div className="eyebrow">Eligibility</div>
  <h2>Do you qualify for EMDG?</h2>
  
  <div className="grid2"><div><ul className="checks"><li>Annual income under $20 million</li><li>Spent at least $20,000 on eligible export promotional activities</li><li>Products or services of Australian origin</li><li>Have an ABN</li><li>Not a government body or authority</li></ul></div>
<div className="tile"><div className="eyebrow">Worked example</div><p>A software company with $8M annual income spends $200,000 on EMDG-eligible activities in a financial year:</p><div className="ledger"><div className="lrow"><span>Soliciting for business overseas</span><b>$80,000</b></div><div className="lrow"><span>Digital advertising (export markets)</span><b>$60,000</b></div><div className="lrow"><span>Overseas agents and reps</span><b>$40,000</b></div><div className="lrow"><span>IP registration (overseas)</span><b>$20,000</b></div><div className="lrow"><span>Total eligible spend</span><b>$200,000</b></div><div className="lrow total"><span>EMDG grant (50%)</span><b>$100,000</b></div></div></div></div>
</section><div className="final"><div><h2>Find out if your export spend qualifies.</h2><p>Book a free EMDG eligibility assessment. We review your export marketing spend and tell you exactly what is recoverable.</p></div><div className="ctas"><Link className="btn" to="/contact">Book free EMDG assessment →</Link></div></div>

    </>
  )
}
