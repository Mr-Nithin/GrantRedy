import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFoundPage() {
  usePageMeta('Page not found', 'The page you were looking for could not be found.')
  return (
    <header className="page-hero">
      <div className="eyebrow">404</div>
      <h1>We couldn't find that page.</h1>
      <p className="lede">It may have moved, or the link may be out of date.</p>
      <div className="ctas"><Link className="btn" to="/">Back to home</Link><Link className="btn ghost" to="/contact">Contact us</Link></div>
    </header>
  )
}
