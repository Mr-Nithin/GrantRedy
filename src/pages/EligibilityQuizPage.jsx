import Quiz from '../components/Quiz'
import CaseVisual from '../components/CaseVisual'
import { usePageMeta } from '../hooks/usePageMeta'

export default function EligibilityQuizPage() {
  usePageMeta("Eligibility Quiz", "Am I eligible for the R&D Tax Incentive? A free 3-minute questionnaire.")
  return (
    <>

<header className="page-hero has-aside">
<div className="hero-text">
  <div className="eyebrow">Free · 3 minutes · Instant result</div>
  <h1>Am I eligible for the R&amp;D Tax Incentive?</h1>
  <p className="lede">Answer seven quick questions about your business and get an instant, indicative answer.</p>
</div>
<div className="hero-aside"><CaseVisual tone="violet" icon="🧭" name={'Eligibility quiz'} sector={'Indicative result'} stats={[{ value: '7', label: 'quick questions' }, { value: '3 min', label: 'to your answer' }]} chip={'Instant result, no sign-up'} /></div>
</header><section className="flush"><div className="quiz-layout"><Quiz />
<aside className="tile quiz-aside">
  <div className="eyebrow">What happens next</div>
  <ol className="next-steps">
    <li><b>Answer 7 questions</b><span>About your business structure, R&amp;D spend and activities.</span></li>
    <li><b>Get an instant result</b><span>An indicative view of whether you may qualify.</span></li>
    <li><b>Talk to a specialist</b><span>A free 30-minute assessment confirms eligibility and your likely benefit.</span></li>
  </ol>
  <p className="book-alt">Rather talk now? <a href="tel:0398539853">03 9853 9853</a></p>
</aside></div>
<p className="small" style={{marginTop: "16px"}}>This questionnaire provides a general indication of eligibility only and does not constitute tax or legal advice. A formal eligibility assessment requires a consultation with a registered tax agent. GrantReady Pty Ltd is a Registered Tax Agent.</p>
</section>

    </>
  )
}
