import { Link } from 'react-router-dom'

const columns = [
  ['Services', [['/services', 'All Services'], ['/case-studies', 'Case Studies'], ['/emdg', 'EMDG'], ['/other-grants', 'Other Grants'], ['/rdti', 'R&D Tax Incentive']]],
  ['Who we help', [['/accounting-firms', 'Accounting Firms'], ['/industry-agriculture', 'Agriculture'], ['/industry-biomedical', 'Biomedical'], ['/industry-biotech', 'Biotech'], ['/industries', 'Industries'], ['/industry-it', 'IT & Software'], ['/industry-manufacturing', 'Manufacturing']]],
  ['Company', [['/about', 'About Us'], ['/blog', 'Blog'], ['/contact', 'Contact Us'], ['/team', 'Our Team'], ['/why-us', 'Why GrantReady']],
    ['Free tools', [['/benefit-calculator', 'Benefit Calculator'], ['/eligibility-quiz', 'Eligibility Quiz']]]],
]

export default function Footer() {
  return (
    <footer className="site-foot">
      <div className="foot-inner">
        <div className="fgrid">
          <div className="fbrand">
            <Link className="logo" to="/"><img src="/assets/img/logo.gif" alt="GrantReady" /></Link>
            <p>Australia's specialist R&amp;D Tax Incentive and government grants consultancy. Operating since 2006.</p>
            <ul className="fcontact">
              <li><a href="tel:0398539853">03 9853 9853</a></li>
              <li><a className="fmail" href="mailto:lina@grantready.com.au">lina@grantready.com.au</a></li>
              <li className="fplace">Melbourne, Victoria</li>
              <li className="fhours">Mon–Fri 10 am – 4 pm AEST</li>
            </ul>
          </div>
          {columns.map(([title, links, sub]) => (
            <div className="fcol" key={title}>
              <h4>{title}</h4>
              <ul>{links.map(([to, label]) => <li key={to}><Link to={to}>{label}</Link></li>)}</ul>
              {sub && (
                <>
                  <h4 className="fsub">{sub[0]}</h4>
                  <ul>{sub[1].map(([to, label]) => <li key={to}><Link to={to}>{label}</Link></li>)}</ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="fbottom">
        <div className="fbottom-inner">
          <div className="fbottom-row">
            <span>© 2026 GrantReady Pty Ltd · Part of the GrantReady Group, including <a href="https://grantguru.com/au">GrantGuru</a></span>
            <div className="fbottom-right">
              <span className="fagent">Registered Tax Agent</span>
              <button type="button" className="ftop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Back to top<span className="arr up" aria-hidden="true" />
              </button>
            </div>
          </div>
          <p className="fnote">Registered Tax Agent for R&amp;D tax advice only. Information on this website is general, not tax or legal advice. All estimates are indicative.</p>
        </div>
      </div>
    </footer>
  )
}
