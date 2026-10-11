import EnquiryForm from '../components/EnquiryForm'
import CalendlyEmbed from '../components/CalendlyEmbed'
import { usePageMeta } from '../hooks/usePageMeta'

export default function ContactPage() {
  usePageMeta("Contact Us", "Book a free 30-minute R&D Tax Incentive assessment or send GrantReady a message.")
  return (
    <>

<header className="page-hero">
  <div className="eyebrow">Contact us</div>
  <h1>Let's talk about what your business is owed.</h1>
  <p className="lede">Book a free 30-minute assessment directly with Lina, or send us a message, and we'll be in touch as soon as possible.</p>
  
</header><section className="flush"><div className="contact-grid">
<div className="stack">
  <div className="tile"><div className="eyebrow">Book a free assessment</div><h3>Book time with Lina</h3>
    <div className="person"><img src="/assets/img/team/lina.jpg" alt="Lina Lamont" /><div><b>Lina Lamont</b><span>R&amp;D Tax Incentive &amp; EMDG Specialist · 18 years experience</span></div></div>
    <p>Free · 30 minutes · No obligation. Lina will review your activities and give you a frank assessment of eligibility and potential benefit.</p>
    <CalendlyEmbed url="https://calendly.com/lina-grantready/15-minute-discussion" />
    <p className="book-alt">Prefer to talk first? <a href="tel:0398539853">03 9853 9853</a> · <a href="mailto:lina@grantready.com.au?subject=Free%20R%26D%20assessment">lina@grantready.com.au</a></p></div>
  <div className="tile"><div className="eyebrow">GrantReady Pty Ltd</div>
    <div className="lrow"><span>📞 Phone</span><b><a href="tel:0398539853">03 9853 9853</a></b></div>
    <div className="lrow"><span>📍 Office</span><b>Melbourne, Victoria</b></div>
    <div className="lrow"><span>🕘 Business hours</span><b>Mon-Fri 9:00 am - 5:30 pm AEST</b></div></div>
</div>
<EnquiryForm className="tile contact-form" okClassName="form-ok" okText="Thanks. We'll be in touch within one business day.">
  <div className="eyebrow">Send a message</div>
  <div className="fields">
    <div><label htmlFor="c-first">First name</label><input id="c-first" name="first" required autoComplete="given-name" /></div>
    <div><label htmlFor="c-last">Last name</label><input id="c-last" name="last" required autoComplete="family-name" /></div>
    <div><label htmlFor="c-email">Email address</label><input id="c-email" name="email" type="email" required autoComplete="email" /></div>
    <div><label htmlFor="c-phone">Phone number</label><input id="c-phone" name="phone" type="tel" autoComplete="tel" /></div>
    <div className="full"><label htmlFor="c-company">Company name</label><input id="c-company" name="company" autoComplete="organization" /></div>
    <fieldset className="full choice">
      <legend>Is your business a Pty Ltd or Ltd company?</legend>
      <div className="choice-opts">
        {['Yes', 'No', 'Not sure'].map(v => (
          <label key={v}><input type="radio" name="company-type" value={v} required /><span>{v}</span></label>
        ))}
      </div>
    </fieldset>
    <div className="full"><label htmlFor="c-enq">Enquiry type</label><select id="c-enq" name="enquiry-type" required><option value="">Select an option</option><option>R&amp;D Tax Incentive, first claim</option><option>R&amp;D Tax Incentive, review my existing claim</option><option>Export Market Development Grant (EMDG)</option><option>Other government grants</option><option>General enquiry</option></select></div>
    <div className="full"><label htmlFor="c-msg">Message (optional)</label><textarea id="c-msg" name="message" rows="4"></textarea></div>
  </div>
  <button className="btn" type="submit">Send message →</button>
  <p className="small">We respond within one business day. Your details are not shared with third parties.</p>
</EnquiryForm>
</div></section>

    </>
  )
}
