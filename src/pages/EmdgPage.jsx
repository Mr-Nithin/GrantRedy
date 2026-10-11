import { Link } from 'react-router-dom'
import CaseVisual from '../components/CaseVisual'
import { money } from '../utils/money'
import { usePageMeta } from '../hooks/usePageMeta'

const CRITERIA = [
  { value: '<$20M', label: 'Annual income under $20 million' },
  { value: '$20K+', label: 'Spent at least $20,000 on eligible export promotion' },
  { value: 'AU', label: 'Products or services of Australian origin' },
  { value: 'ABN', label: 'Have an Australian Business Number' },
  { value: 'Non-gov', label: 'Not a government body or authority' },
]
const SPEND = [
  ['Soliciting for business overseas', 80000],
  ['Digital advertising (export markets)', 60000],
  ['Overseas agents and reps', 40000],
  ['IP registration (overseas)', 20000],
]
const SPEND_TOTAL = SPEND.reduce((t, [, a]) => t + a, 0)

export default function EmdgPage() {
  usePageMeta("EMDG", "Recover up to 50% of your overseas marketing expenditure with the Export Market Development Grant.")
  return (
    <>

<header className="page-hero has-aside">
<div className="hero-text">
  <div className="eyebrow">Export Market Development Grant</div>
  <h1>Recover up to 50% of your overseas marketing expenditure.</h1>
  <p className="lede">The Export Market Development Grant (EMDG) is an Australian Government program administered by Austrade that reimburses up to 50% of eligible export promotional expenditure for businesses with annual income under $20M.</p>
  <div className="ctas"><Link className="btn" to="/contact">Get EMDG assessment →</Link><Link className="btn ghost" to="/services">View all services</Link></div>
</div>
<div className="hero-aside"><CaseVisual tone="teal" icon="✈️" name={'Export Market Development Grant'} sector={'Administered by Austrade'} stats={[{ value: '50%', label: 'of eligible spend reimbursed' }, { value: '<$20M', label: 'maximum income to qualify' }]} chip={'$20K minimum spend · Tiers 1–3'} /></div>
</header><section>
  <div className="eyebrow">Eligible expenditure</div>
  <h2>What qualifies for EMDG.</h2>
  <p className="lede">EMDG covers a wide range of promotional activities that have the purpose of developing export sales. Here are the key eligible categories.</p>
  <div className="grid3"><div className="tile"><div className="icon">🌐</div><h3>Overseas representation and agents</h3><p>Fees paid to maintain a representative, distributor, or agent in a foreign country to promote your product or service in that export market.</p></div><div className="tile"><div className="icon">✈️</div><h3>Overseas and domestic travel</h3><p>Travel costs for promotional trips to a foreign country, and trips within Australia specifically to meet with and engage foreign buyers.</p></div><div className="tile"><div className="icon">🛬</div><h3>Hosting foreign buyer visits</h3><p>Costs of bringing potential overseas buyers to Australia to visit your business and see your product firsthand.</p></div><div className="tile"><div className="icon">📊</div><h3>Consultants</h3><p>Fees paid to a consultant engaged to carry out export market research or promotional activities on your behalf.</p></div><div className="tile"><div className="icon">📣</div><h3>Soliciting for business overseas</h3><p>Costs of activities carried out in a foreign country to seek export business, including trade shows, exhibitions, and direct in-market promotion.</p></div><div className="tile"><div className="icon">🎁</div><h3>Free samples and promotional items</h3><p>Product samples provided free of charge to potential foreign buyers to demonstrate your product ahead of an export sale.</p></div><div className="tile"><div className="icon">📋</div><h3>Promotional literature and advertising</h3><p>Production of marketing materials, digital advertising, and brand activity specifically targeting overseas markets.</p></div><div className="tile"><div className="icon">⚖️</div><h3>Intellectual property rights</h3><p>Costs of registering and protecting patents, trademarks, or designs in your export markets.</p></div><div className="tile"><div className="icon">🎓</div><h3>Export training</h3><p>Approved export training if you're a Tier 1 applicant, or training delivered through an approved representative body.</p></div></div>
</section><section>
  <div className="eyebrow">Eligibility</div>
  <h2>Do you qualify for EMDG?</h2>
  
  <div className="emdg-elig">
  <div>
    <div className="elig-cards">
      {CRITERIA.map(c => (
        <div className="elig-card" key={c.label}><b>{c.value}</b><span>{c.label}</span></div>
      ))}
    </div>
    <div className="elig-cta">
      <p><strong>All five apply?</strong> You're likely eligible. We'll confirm it and estimate your grant, free.</p>
      <Link className="btn" to="/contact">Book free EMDG assessment →</Link>
    </div>
  </div>
  <div className="tile emdg-example">
    <div className="eyebrow">Worked example</div>
    <p>A software company with $8M annual income spends $200,000 on EMDG-eligible activities in a financial year:</p>
    <ul className="spend-bars">
      {SPEND.map(([label, amount]) => (
        <li key={label}>
          <div><span>{label}</span><b>{money(amount)}</b></div>
          <i style={{ width: `${(amount / SPEND_TOTAL) * 100}%` }} />
        </li>
      ))}
    </ul>
    <div className="spend-total"><span>Total eligible spend</span><b>{money(SPEND_TOTAL)}</b></div>
    <div className="grant-result"><span>EMDG grant (50%)</span><b>{money(SPEND_TOTAL / 2)}</b></div>
  </div>
</div>
</section><div className="final"><div><h2>Find out if your export spend qualifies.</h2><p>Book a free EMDG eligibility assessment. We review your export marketing spend and tell you exactly what is recoverable.</p></div><div className="ctas"><Link className="btn" to="/contact">Book free EMDG assessment →</Link></div></div>

    </>
  )
}
