import { Link } from 'react-router-dom'
import Tabs from '../components/Tabs'
import CaseVisual from '../components/CaseVisual'
import { usePageMeta } from '../hooks/usePageMeta'

const tabs = [
  { id: 'overview', label: 'Overview', content: (
    <>
<div className="ov-grid">
<div className="ov-head"><div className="eyebrow">What is it?</div><h2>The R&amp;D Tax Incentive explained.</h2></div>
<div className="ov-intro">
<p>The Research and Development (R&amp;D) Tax Incentive is an Australian Government program administered jointly by AusIndustry (Department of Industry, Science and Resources) and the Australian Taxation Office (ATO).</p>
<p>The program encourages companies to conduct R&amp;D activities in Australia by providing a tax offset, or additional deductible expenditure, equal to a percentage of your eligible R&amp;D expenditure, depending on your tax position.</p>
<p>This is not a deduction. It is an offset against your tax payable, or a direct cash refund to your bank account. Over $2.9 billion is awarded annually, and it is not competitive. If you are eligible, you are entitled to it.</p></div>
<div className="note-box"><h3>Key difference from tax deductions</h3><p>A deduction reduces your taxable income. An offset reduces your tax payable dollar-for-dollar. For companies with turnover under $20M, any unused offset is paid to you as a cash refund, regardless of profit.</p><p><b>A startup spending $500,000 on eligible R&amp;D can receive up to $217,500 in cash (indicative), even with zero revenue.</b></p></div>
<div className="note-box"><h3>Who administers the program?</h3><p>AusIndustry handles R&amp;D registration, while the ATO processes the claim as part of your income tax return. It is a self-assessment program: both agencies may review or audit your submission at any time.</p></div>
<div className="note-box warn"><h3>⚠️ Under and overclaiming are both common</h3><p>Self-lodging businesses typically miss 20–40% of eligible activities. At the same time, many businesses already claiming are overclaiming without realising it, which carries real risk under an ATO or AusIndustry review. GrantReady's specialist review identifies both.</p></div>
</div>
</>
  ) },
  { id: 'eligible', label: 'Eligibility', content: (
    <>
<p className="lede">Before getting swept away with the thought of thousands of dollars cash-back for your business, you need to examine eligibility carefully. There are three tests, and you must satisfy all three. GrantReady can assess all of these at no charge.</p>
<div className="grid3">
<div className="tile"><span className="num-sm">01</span><h3>Applicant Eligibility</h3><p>Your business structure and ownership must satisfy the program requirements.</p><ul className="checks"><li>Must be an incorporated company, Pty Ltd or Ltd (Australian, or foreign with an Australian permanent establishment)</li><li>R&amp;D activities must generally be conducted in Australia, though prior approval can allow limited overseas activity</li><li>You must own the R&amp;D results, or have the right to access them</li><li>Exempt entities (trusts, partnerships, sole traders) do not qualify directly. There are limited exceptions, so speak to us about your situation</li></ul></div>
<div className="tile"><span className="num-sm">02</span><h3>Activity Eligibility</h3><p>A distinction must be made between core and supporting R&amp;D activities; both must be reported separately.</p><ul className="checks"><li>Core R&amp;D: experimental activities whose outcomes cannot be known in advance</li><li>Supporting R&amp;D: activities directly related to core R&amp;D activities</li><li>Activities must generate new knowledge using scientific method</li><li>Scientific method: hypothesis → experiment → observation and evaluation → conclusion</li><li>You must retain evidence that a knowledge gap existed at the time of activity</li></ul></div>
<div className="tile"><span className="num-sm">03</span><h3>Expenditure Eligibility</h3><p>The R&amp;D Tax Incentive is not subject to an expenditure cap, but there are minimums and thresholds.</p><ul className="checks"><li>Minimum $20,000 eligible R&amp;D expenditure per income year</li><li>Eligible costs include: wages, contractor payments, overhead directly attributable to R&amp;D, plant and equipment</li><li>No cap on eligible R&amp;D expenditure up to $150 million</li><li>Above $150M in R&amp;D expenditure, a non-refundable offset rate applies to the excess</li></ul></div>
</div></>
  ) },
  { id: 'receive', label: 'Your benefit', content: (
    <>
<div className="grid2">
<div className="tile"><div className="eyebrow">Companies with turnover &lt;$20M</div><div className="big-num">43.5%</div><p>The refundable R&amp;D tax offset is 18.5 percentage points above the claimant's company tax rate, equating to 43.5%. Once tax liability reaches zero, companies receive a cash refund for any unused offset amount.</p></div>
<div className="tile"><div className="eyebrow">Companies with turnover &gt;$20M</div><div className="big-num">8.5–16.5%</div><p>Larger companies face a two-tier intensity measure. R&amp;D expenditure between 0–2% R&amp;D intensity receives 8.5% above company tax rate; anything above 2% receives 16.5%. No cash refund, excess offsets carry forward to future years.</p></div>
</div>
<h3 style={{margin: "40px 0 6px"}}>Worked examples, all based on $1M eligible R&amp;D expenditure</h3>
<p className="small">These examples illustrate the benefit mechanism, not a guaranteed outcome. Your taxable offset amount will be determined by your own tax position.</p>
<div className="grid2">
<div className="tile"><h3>Example 1: Turnover &lt;$20M in Loss</h3><div className="ledger"><div className="lrow"><span>Turnover</span><b>&lt;$20 million</b></div><div className="lrow"><span>Taxable position</span><b>Loss of $1 million</b></div><div className="lrow"><span>Eligible R&amp;D expenditure</span><b>$1 million</b></div><div className="lrow"><span>Benefit</span><b>$435,000 ($1M × 43.5%)</b></div><div className="lrow"><span>Form of benefit</span><b>Cash refund</b></div><div className="lrow total"><span>Benefit</span><b>$435,000</b></div></div></div>
<div className="tile"><h3>Example 2: Turnover &lt;$20M in Profit</h3><div className="ledger"><div className="lrow"><span>Turnover</span><b>&lt;$20 million</b></div><div className="lrow"><span>Taxable profit (R&amp;D not deducted)</span><b>$1 million</b></div><div className="lrow"><span>Eligible R&amp;D expenditure</span><b>$1 million</b></div><div className="lrow"><span>Tax payable on profit</span><b>$250,000 ($1M × 25%)</b></div><div className="lrow"><span>R&amp;D tax offset</span><b>−$435,000 ($1M × 43.5%)</b></div><div className="lrow"><span>Result</span><b>$0 tax payable + $185,000 refunded</b></div><div className="lrow"><span>Value of a normal R&amp;D deduction</span><b>$250,000 ($1M × 25%)</b></div><div className="lrow"><span>Form of benefit</span><b>Offset clears tax payable; unused offset refunded</b></div><div className="lrow total"><span>Benefit</span><b>$185,000 more than a normal deduction (18.5%)</b></div></div></div>
<div className="tile"><h3>Example 3: Turnover $20M–$50M (R&amp;D Intensity &gt;2%)</h3><div className="ledger"><div className="lrow"><span>Turnover</span><b>$20 to $50 million</b></div><div className="lrow"><span>Taxable position</span><b>Profit or loss</b></div><div className="lrow"><span>Eligible R&amp;D expenditure</span><b>$1 million</b></div><div className="lrow"><span>Total company expenditure</span><b>$10 million</b></div><div className="lrow"><span>R&amp;D intensity</span><b>10%</b></div><div className="lrow"><span>Form of benefit</span><b>Non-refundable offset, excess carried forward</b></div><div className="lrow total"><span>Benefit</span><b>$149,000</b></div></div></div>
<div className="tile"><h3>Example 4: Turnover &gt;$50M (R&amp;D Intensity &lt;2%)</h3><div className="ledger"><div className="lrow"><span>Turnover</span><b>&gt;$50 million</b></div><div className="lrow"><span>Taxable position</span><b>Profit or loss</b></div><div className="lrow"><span>Eligible R&amp;D expenditure</span><b>$1 million</b></div><div className="lrow"><span>Total company expenditure</span><b>$100 million</b></div><div className="lrow"><span>R&amp;D intensity</span><b>1%</b></div><div className="lrow"><span>Form of benefit</span><b>Non-refundable offset, excess carried forward</b></div><div className="lrow total"><span>Benefit</span><b>$85,000</b></div></div></div>
</div></>
  ) },
  { id: 'apply', label: 'How to apply', content: (
    <>
<p className="lede">Registration is required for each year of income in which R&amp;D expenditure is incurred. Companies must register annually with AusIndustry before being able to claim the Tax Incentive. GrantReady manages this entire process on your behalf.</p>
<div className="apply-strip">
  <div className="as-when"><b>10 months</b><span>after your income year ends to register with AusIndustry. With a 30 June year-end, register by <strong>30 April</strong>.</span></div>
</div>
<div className="apply-phases">
  <div className="phase" data-no="01">
    <div className="phase-head"><span>Phase 1</span><b>Prepare</b><small>Assessment and review</small></div>
    <ol start="1">
      <li><span className="ap-num">1</span><div><h3>Engage GrantReady</h3><p>A free eligibility assessment and agreed scope. No obligation to proceed.</p><span className="tl-who">You + GrantReady</span></div></li>
      <li><span className="ap-num">2</span><div><h3>Activity and expenditure review</h3><p>We work with your technical team to find every eligible activity and cost, including ones others miss.</p><span className="tl-who">GrantReady + your team</span></div></li>
    </ol>
  </div>
  <div className="phase" data-no="02">
    <div className="phase-head"><span>Phase 2</span><b>Lodge</b><small>Registration and tax return</small></div>
    <ol start="3">
      <li><span className="ap-num">3</span><div><h3>AusIndustry registration</h3><p>We prepare and lodge your registration within 10 months of your income year ending.</p><span className="tl-who">GrantReady</span></div></li>
      <li><span className="ap-num">4</span><div><h3>ATO schedule</h3><p>We prepare the R&amp;D schedule; your accountant lodges it with your company tax return.</p><span className="tl-who">GrantReady → accountant</span></div></li>
    </ol>
  </div>
  <div className="phase" data-no="03">
    <div className="phase-head"><span>Phase 3</span><b>Receive</b><small>Refund and support</small></div>
    <ol start="5">
      <li><span className="ap-num">5</span><div><h3>Refund processing</h3><p>The offset reduces your tax payable. Eligible small companies receive any unused offset as cash.</p><span className="tl-who">ATO</span></div></li>
      <li><span className="ap-num">6</span><div><h3>Review management</h3><p>If the ATO or AusIndustry reviews your claim, we handle the response at no extra charge.</p><span className="tl-who">GrantReady</span></div></li>
    </ol>
  </div>
</div>
</>
  ) },
  { id: 'planning', label: 'Plan ahead', content: (
    <>
<p className="lede">While GrantReady handles the hard work of preparing and lodging your claim, a strong claim still depends on your company maintaining good record keeping throughout the financial year. The better your records, the stronger and more defensible your claim.</p>
<p>Applicants must keep adequate records to demonstrate to both AusIndustry and the ATO that:</p>
<div className="grid3">
<div className="tile"><h3>R&amp;D activities have been undertaken</h3><ul className="checks"><li>Records must show that the claimed activities took place and met the definition of core or supporting R&amp;D</li><li>Evidence of experimental activities, including use of scientific method to generate new knowledge and overcome uncertainty</li><li>Documents showing a knowledge gap existed at the time: literature reviews, patent searches, scientific or technology reviews, trade journals</li></ul></div>
<div className="tile"><h3>Eligible expenditure was incurred</h3><ul className="checks"><li>Timesheets or summaries of individual employees' total hours charged to the R&amp;D project</li><li>Salary and wages, superannuation, payroll tax, workers' compensation</li><li>Contractor payments, travel expenses, cost of trials, R&amp;D plant and equipment</li><li>General administration overheads attributable to R&amp;D</li></ul></div>
<div className="tile"><h3>All legislative requirements are satisfied</h3><ul className="checks"><li>Records must demonstrate that the activities and expenditure meet all eligibility criteria under the program</li><li>GrantReady conducts structured interviews with your technical team to build a compliant documentation package</li></ul></div>
</div>
<div className="note-box" style={{marginTop: "28px"}}><h3>Talk to us about your records</h3><p>If you are planning to submit a claim for the current financial year, speak to us about best-practice record keeping relevant to your specific industry and business activities. Getting this right early saves significant work at lodgement time.</p></div></>
  ) },
  { id: 'resources', label: 'Resources', content: (
    <>
<p className="lede">The R&amp;D Tax Incentive is a joint program between two government agencies. Both publish detailed guidance that forms the basis of what GrantReady uses when assessing and documenting your claim.</p>
<div className="grid2">
<a className="tile link-tile" href="https://www.ato.gov.au/Business/Research-and-development-tax-incentive/" rel="noopener" target="_blank"><h3>Australian Taxation Office (ATO)<span className="arr ext" aria-hidden="true" /></h3><p>The ATO administers the tax component of the R&amp;D Tax Incentive. Their website includes guidance on claiming, documentation requirements, and audit risk.</p></a>
<a className="tile link-tile" href="https://business.gov.au/grants-and-programs/research-and-development-tax-incentive" rel="noopener" target="_blank"><h3>AusIndustry / business.gov.au<span className="arr ext" aria-hidden="true" /></h3><p>AusIndustry (Department of Industry, Science and Resources) handles the registration component. Their site contains program guidelines, eligible activities guidance, and registration forms.</p></a>
</div>
<div className="note-box" style={{marginTop: "28px"}}><h3>Rather talk to a person?</h3><p>GrantReady has been working with the R&amp;D Tax Incentive since 2006. Our specialists have read every page of that ATO and AusIndustry guidance, so you don't have to. Book a free call and get a straight answer about your eligibility.</p></div></>
  ) },
]

export default function RdtiPage() {
  usePageMeta("R&D Tax Incentive", "Get back up to 43.5\u00a2 for every dollar you spend on eligible R&D.")
  return (
    <>

<header className="page-hero has-aside">
<div className="hero-text">
  <div className="eyebrow">R&amp;D Tax Incentive</div>
  <h1>Get back up to 43.5¢ for every dollar you spend on eligible R&amp;D.</h1>
  <p className="lede">The Australian Government's R&amp;D Tax Incentive returns a significant portion of your R&amp;D expenditure as a refundable tax offset or additional deductible expenditure. Most eligible businesses are underclaiming or not claiming at all, while many others are overclaiming.</p>
  <div className="ctas"><Link className="btn" to="/eligibility-quiz">Check your eligibility<span className="arr" aria-hidden="true" /></Link><Link className="btn ghost" to="/benefit-calculator">Calculate your benefit</Link></div>
</div>
<div className="hero-aside"><CaseVisual tone="blue" icon="🔬" name={'R&D Tax Incentive'} sector={'AusIndustry + ATO program'} stats={[{ value: '43.5%', label: 'refundable offset, under $20M turnover' }, { value: '8.5–16.5%', label: 'offset above tax rate, over $20M' }]} chip={'Over $2.9B awarded annually'} /></div>
</header><section className="tabbed"><Tabs tabs={tabs} /></section><div className="final"><div><h2>Ready to claim what you're owed?</h2><p>Book a free eligibility assessment. GrantReady specialists review your business activities at no cost and tell you exactly what you can claim.</p></div><div className="ctas"><Link className="btn" to="/contact">Book free assessment</Link><Link className="btn ghost" to="/eligibility-quiz">Take the quiz first</Link></div></div>

    </>
  )
}
