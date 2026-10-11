import { useState } from 'react'
import { Link } from 'react-router-dom'

const NONE = 'None of the above'
const QUESTIONS = [
  { q: 'Are you a:', hint: 'The R&D Tax Incentive is available to incorporated companies. Other structures may have alternative options.', opts: ['Company (Pty Ltd or Ltd)', 'Trust', 'Sole trader', 'Individual', 'Other'],
    bad: { 'Trust': 'Trusts are not eligible to apply for the R&D Tax Incentive. Generally, only companies are eligible, there are exceptions though!',
           'Sole trader': 'Sole Traders are not eligible to apply for the R&D Tax Incentive. Generally, only companies are eligible, there are exceptions though!',
           'Individual': 'Individuals are not eligible to apply for the R&D Tax Incentive. Generally, only companies are eligible, there are exceptions though!' } },
  { q: 'Will you spend more than $20,000 on your R&D activities in one financial year?', hint: 'Minimum spend of $20,000 per income year applies, unless you are working with a registered Research Service Provider.', opts: ['Yes', 'No'],
    bad: { No: 'To be eligible, you need to spend more than $20,000 in one financial year unless you are working with a registered Research Service Provider. You might like to come back to this questionnaire once you have spent over $20,000 in one year.' } },
  { q: 'Are your R&D activities being undertaken in Australia?', hint: 'Core R&D activities and the majority of R&D expenditure must be incurred in Australia. Some exceptions apply.', opts: ['Yes', 'No'],
    bad: { No: 'To be eligible, core R&D activities and the majority of your expenditure generally need to be undertaken within Australia. Some exceptions apply, for example with prior approval, part of a project can be conducted overseas.' } },
  { q: 'Is your innovation project based on scientific or engineering principles?', hint: 'R&D activities must involve systematic investigation based on the scientific method: hypothesis, experiment, evaluation.', opts: ['Yes', 'No'],
    bad: { No: 'Unfortunately, other types of research and development such as marketing, sales, sociology etc. are not eligible. You might like to come back to this questionnaire once you have eligible activities.' } },
  { q: 'Are you creating a new or improved:', hint: 'Select all that apply to your R&D project.', multi: true, opts: ['Product', 'Process', 'Service', 'Device', NONE],
    bad: { [NONE]: 'Sorry, your research and development must be a product, process, service or device to be eligible. You might like to come back to this questionnaire once you have eligible activities.' } },
  { q: 'Is there a risk your R&D project might not work, or have to be done differently than you are planning?', hint: 'The R&D Tax Incentive requires technical uncertainty, the outcome must not be known in advance from existing knowledge.', opts: ['Yes', 'No'],
    bad: { No: 'Sorry, to be eligible, the outcome of your project cannot be certain or guaranteed. You might like to come back to this questionnaire once you have eligible risk.' } },
  { q: 'Are you keeping any records or documentation of your work and time?', hint: 'The ATO requires contemporaneous documentation of R&D activities: lab notebooks, experiment logs, time records, emails, reports.', opts: ['Yes', 'No'],
    bad: { No: 'The program requires documentation to be kept to be eligible. You might like to come back to this questionnaire once you have eligible documentation.' } },
]

export default function Quiz() {
  // step: -1 = not started, 0..n-1 = question, n = eligible result
  const [step, setStep] = useState(-1)
  const [picked, setPicked] = useState([])
  const [fail, setFail] = useState(null)

  const restart = () => { setStep(0); setPicked([]); setFail(null) }
  const restartBtn = <button className="btn ghost" onClick={restart}>↺ Start again</button>

  if (step === -1) {
    return <div className="quiz tile"><div className="quiz-start"><button className="btn" onClick={restart}>Start the questionnaire →</button></div></div>
  }

  if (fail) {
    return (
      <div className="quiz tile"><div className="quiz-result">
        <div className="eyebrow">Your result</div>
        <h3>You may not be eligible right now.</h3>
        <p>{fail}</p>
        <p>Every situation is different. A specialist can tell you whether an exception applies.</p>
        <div className="ctas"><Link className="btn" to="/contact">Talk to a specialist</Link>{restartBtn}</div>
      </div></div>
    )
  }

  if (step >= QUESTIONS.length) {
    return (
      <div className="quiz tile"><div className="quiz-result ok">
        <div className="eyebrow">Your result</div>
        <h3>Good news: you may be eligible.</h3>
        <p>Based on your answers, your business looks like a strong candidate for the R&amp;D Tax Incentive. Book a free 30-minute assessment and a specialist will confirm your eligibility and estimate your benefit.</p>
        <div className="ctas"><Link className="btn" to="/contact">Book free assessment →</Link><Link className="btn ghost" to="/benefit-calculator">Estimate your benefit</Link></div>
      </div></div>
    )
  }

  const q = QUESTIONS[step]
  const toggle = opt => {
    if (!q.multi) return setPicked([opt])
    if (opt === NONE) return setPicked(p => (p.includes(NONE) ? [] : [NONE]))
    setPicked(p => (p.includes(opt) ? p.filter(x => x !== opt) : [...p.filter(x => x !== NONE), opt]))
  }
  const next = () => {
    const bad = picked.find(p => q.bad?.[p])
    if (bad) return setFail(q.bad[bad])
    setPicked([])
    setStep(step + 1)
  }
  const pct = (step / QUESTIONS.length) * 100

  return (
    <div className="quiz tile">
      <div className="quiz-progress"><span>Question {step + 1} of {QUESTIONS.length}</span><span>{Math.round(pct)}%</span></div>
      <div className="pbar"><i style={{ width: `${pct}%` }} /></div>
      <fieldset>
        <legend><h3>{q.q}</h3></legend>
        <p className="small">{q.hint}</p>
        <div className="quiz-opts">
          {q.opts.map(o => (
            <label className="opt" key={o}>
              <input type={q.multi ? 'checkbox' : 'radio'} name={`q${step}`} checked={picked.includes(o)} onChange={() => toggle(o)} /> {o}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="ctas"><button className="btn" disabled={!picked.length} onClick={next}>Continue →</button>{step > 0 && restartBtn}</div>
    </div>
  )
}
