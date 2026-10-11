import { useState } from 'react'
import { Link } from 'react-router-dom'
import posts from '../data/posts.json'
import { usePageMeta } from '../hooks/usePageMeta'

const latest = posts[0]
const CATEGORIES = ['All', 'R&D Tax Incentive', 'Grants', 'Consulting', 'Business']

export default function BlogPage() {
  usePageMeta('Blog', 'R&D Tax Incentive insights from the specialists.')
  const [cat, setCat] = useState('All')
  const shown = cat === 'All' ? posts : posts.filter(p => p.tag === cat)

  return (
    <>
      <header className="page-hero has-aside">
        <div className="hero-text">
          <div className="eyebrow">Blog</div>
          <h1>R&amp;D Tax Incentive insights from the specialists.</h1>
          <p className="lede">Practical guidance on R&amp;D Tax Incentive eligibility, documentation, and claims management from Australia's specialist consultancy.</p>
        </div>
        <div className="hero-aside">
          <Link className="latest" to={`/blog/${latest.slug}`}>
            <img src={latest.image} alt="" />
            <div>
              <span className="pill">Latest · {latest.date}</span>
              <h3>{latest.title}</h3>
              <span className="read">Read article →</span>
            </div>
          </Link>
        </div>
      </header>
      <section className="flush">
        <div className="filters" role="group" aria-label="Filter posts">
          {CATEGORIES.map(c => (
            <button key={c} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="blog-grid">
          {shown.map(p => (
            <article className="post" key={p.slug}>
              <img src={p.image} alt="" loading="lazy" />
              <div className="post-body">
                <div className="post-meta"><span className="pill">{p.tag}</span><time>{p.date}</time></div>
                <h3><Link to={`/blog/${p.slug}`}>{p.title}</Link></h3>
                <p>{p.excerpt}</p>
                <span className="small">{p.readTime} · <span className="read">Read article →</span></span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <div className="final">
        <div><h2>Ready to check your eligibility?</h2><p>Skip the reading and talk to a specialist. Free 30-minute eligibility assessment with no obligation.</p></div>
        <div className="ctas"><Link className="btn" to="/eligibility-quiz">Take the quiz →</Link><Link className="btn ghost" to="/contact">Book a call</Link></div>
      </div>
    </>
  )
}
