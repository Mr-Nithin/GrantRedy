import EnquiryForm from '../components/EnquiryForm'
import CalendlyEmbed from '../components/CalendlyEmbed'
import { CALENDLY_URL } from '../config'
import CaseVisual from '../components/CaseVisual'
import { usePageMeta } from '../hooks/usePageMeta'

export default function ContactPage() {
  usePageMeta("Contact Us", "Book a free R&D Tax Incentive assessment call or send GrantReady a message.")
  return (
    <>

<header className="page-hero has-aside">
<div className="hero-text">
  <div className="eyebrow">Contact us</div>
  <h1>Let's talk about what your business is owed.</h1>
  <p className="lede">Pick a time to talk with Lina, or send us a message. We'll get back to you within one business day.</p>
</div>
<div className="hero-aside optional"><CaseVisual tone="blue" icon="☎️" name={'Talk to a specialist'} sector={'Mon–Fri 10:00 am – 4:00 pm AEST'} stats={[{ value: 'Free', label: 'assessment call' }, { value: '1 day', label: 'response to messages' }]} chip={'03 9853 9853'} /></div>
</header><section className="flush"><div className="contact-grid">
<div className="stack">
  <div className="tile" id="book"><div className="eyebrow">Book a free assessment</div><h3>Book time with Lina</h3>
    <div className="person"><img src="/assets/img/team/lina.jpg" alt="Lina Lamont" /><div><b>Lina Lamont</b><span>CEO · R&amp;D Tax Incentive &amp; EMDG specialist · 18 years' experience</span></div></div>
    <p>A quick, free call with no obligation. Lina will tell you if you qualify and what you could claim.</p>
    <CalendlyEmbed url={CALENDLY_URL} />
    <p className="book-alt">Prefer to talk first? <a href="tel:0398539853">03 9853 9853</a> · <a href="mailto:lina@grantready.com.au?subject=Free%20R%26D%20assessment">lina@grantready.com.au</a></p></div>
</div>
<div className="stack contact-right">
<EnquiryForm className="tile contact-form" okClassName="form-ok" okText="Thanks. We'll be in touch within one business day.">
  <div className="eyebrow">Send a message</div>
  <div className="fields">
    <div><label htmlFor="c-first">First name</label><input id="c-first" name="first" required autoComplete="given-name" maxLength="50" /></div>
    <div><label htmlFor="c-last">Last name</label><input id="c-last" name="last" required autoComplete="family-name" maxLength="50" /></div>
    <div><label htmlFor="c-email">Email address</label><input id="c-email" name="email" type="email" required autoComplete="email" maxLength="120" placeholder="name@company.com.au" /></div>
    <div><label htmlFor="c-phone">Phone number (optional)</label><input id="c-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength="20" placeholder="0412 345 678" /></div>
    <div className="full"><label htmlFor="c-company">Company name (optional)</label><input id="c-company" name="company" autoComplete="organization" maxLength="120" /></div>
    <fieldset className="full choice">
      <legend>Is your business a Pty Ltd or Ltd company?</legend>
      <div className="choice-opts">
        {['Yes', 'No', 'Not sure'].map(v => (
          <label key={v}><input type="radio" name="company-type" value={v} required /><span>{v}</span></label>
        ))}
      </div>
    </fieldset>
    <div className="full"><label htmlFor="c-enq">Enquiry type</label><select id="c-enq" name="enquiry-type" required><option value="">Select an option</option><option>R&amp;D Tax Incentive, first claim</option><option>R&amp;D Tax Incentive, review my existing claim</option><option>Export Market Development Grant (EMDG)</option><option>Other government grants</option><option>General enquiry</option></select></div>
    <div className="full"><label htmlFor="c-msg">Message (optional)</label><textarea id="c-msg" name="message" rows="4" maxLength="2000"></textarea></div>
  </div>
  <button className="btn" type="submit">Send message<span className="arr" aria-hidden="true" /></button>
  <p className="small">We never share your details.</p>
</EnquiryForm>
  <div className="tile"><div className="eyebrow">GrantReady Pty Ltd</div>
    <div className="lrow"><span>📞 Phone</span><b><a href="tel:0398539853">03 9853 9853</a></b></div>
    <div className="lrow"><span>📍 Office</span><b>Melbourne, Victoria</b></div>
    <div className="lrow"><span>🕘 Business hours</span><b>Mon–Fri 10:00 am – 4:00 pm AEST</b></div></div>
</div>
</div></section>

    </>
  )
}
