import { Link } from 'react-router-dom'

const columns = [
  ['Services', [['/rdti', 'R&D Tax Incentive'], ['/emdg', 'EMDG'], ['/other-grants', 'Other Grants'], ['/services', 'Our Services'], ['/case-studies', 'Case Studies']]],
  ['Who we help', [['/industries', 'Industries'], ['/industry-biotech', 'Biotech'], ['/industry-biomedical', 'Biomedical'], ['/industry-agriculture', 'Agriculture'], ['/industry-it', 'IT & Software'], ['/industry-manufacturing', 'Manufacturing'], ['/accounting-firms', 'Accounting Firms']]],
  ['Company', [['/why-us', 'Why GrantReady'], ['/team', 'Meet the Team'], ['/about', 'About Us'], ['/blog', 'Blog'], ['/contact', 'Contact Us'], ['/eligibility-quiz', 'Eligibility Quiz'], ['/benefit-calculator', 'Benefit Calculator']]],
]

export default function Footer() {
  return (
    <footer className="site-foot">
      <div className="fgrid">
        <div className="fbrand">
          <Link className="logo" to="/"><img src="/assets/img/logo.gif" alt="GrantReady" /></Link>
          <p>Australia's specialist R&amp;D Tax Incentive and government grants consultancy. Operating since 2006.</p>
          <a className="ftel" href="tel:0398539853">03 9853 9853</a><br />
          <Link className="fcta" to="/contact">Book a free assessment</Link>
        </div>
        {columns.map(([title, links]) => (
          <div className="fcol" key={title}>
            <h4>{title}</h4>
            <ul>{links.map(([to, label]) => <li key={to}><Link to={to}>{label}</Link></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="fbottom">
        <p>GrantReady Pty Ltd is a Registered Tax Agent for the sole purpose of providing R&amp;D tax advice. The information on this website is general in nature and is not tax or legal advice. All eligibility and benefit estimates are indicative only.</p>
        <span>© 2026 GrantReady Pty Ltd · GrantReady Group incl. <a href="https://grantguru.com/au">GrantGuru</a></span>
      </div>
    </footer>
  )
}
