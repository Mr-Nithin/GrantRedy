import Quiz from '../components/Quiz'
import { usePageMeta } from '../hooks/usePageMeta'

export default function EligibilityQuizPage() {
  usePageMeta("Eligibility Quiz", "Am I eligible for the R&D Tax Incentive? A free 3-minute questionnaire.")
  return (
    <>

<header className="page-hero">
  <div className="eyebrow">Free · 3 minutes · Instant result</div>
  <h1>Am I eligible for the R&amp;D Tax Incentive?</h1>
  <p className="lede">Are you eligible to claim the R&amp;D Tax Incentive? Complete this simple questionnaire to find out!</p>
  
</header><section className="flush"><Quiz />
<p className="small" style={{marginTop: "16px"}}>This questionnaire provides a general indication of eligibility only and does not constitute tax or legal advice. A formal eligibility assessment requires a consultation with a registered tax agent. GrantReady Pty Ltd is a Registered Tax Agent.</p>
</section>

    </>
  )
}
