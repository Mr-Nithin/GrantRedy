import { Link } from 'react-router-dom'
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
<div className="hero-aside optional"><CaseVisual tone="violet" icon="🧭" name={'Eligibility quiz'} sector={'Indicative result'} stats={[{ value: '7', label: 'quick questions' }, { value: '3 min', label: 'to your answer' }]} chip={'Instant result, no sign-up'} /></div>
</header><section className="flush"><div className="quiz-layout"><Quiz />
<aside className="tile quiz-aside">
  <div className="eyebrow">What happens next</div>
  <ol className="next-steps">
    <li><b>Answer 7 questions</b><span>About your business structure, R&amp;D spend and activities.</span></li>
    <li><b>Get an instant result</b><span>An indicative view of whether you may qualify.</span></li>
    <li><b>Talk to a specialist</b><span>A free assessment call confirms eligibility and your likely benefit.</span></li>
  </ol>
  <ul className="quiz-trust">
    <li>No sign-up or email required</li>
    <li>Your answers aren't stored or sent anywhere</li>
  </ul>
  <div className="quiz-talk">
    <div className="person"><img src="/assets/img/team/lina.webp" alt="Lina Lamont" /><div><b>Rather talk it through?</b><span>Lina Lamont, CEO</span></div></div>
    <Link className="btn" to="/contact#book">Book a quick call</Link>
    <p className="small"><a href="tel:0398539853">03 9853 9853</a> · <a href="mailto:lina@grantready.com.au">lina@grantready.com.au</a></p>
  </div>
</aside></div>
<p className="small" style={{marginTop: "16px"}}>This quiz gives a general indication only and is not tax or legal advice. Your eligibility can only be confirmed by a registered tax agent, such as GrantReady Pty Ltd.</p>
</section><div className="final"><div><h2>Ready to claim what you're owed?</h2><p>Book a free assessment call. A specialist will confirm your eligibility and tell you what you can claim.</p></div><div className="ctas"><Link className="btn" to="/contact">Book free assessment<span className="arr" aria-hidden="true" /></Link><Link className="btn ghost" to="/benefit-calculator">Estimate your benefit</Link></div></div>

    </>
  )
}
