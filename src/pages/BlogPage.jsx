import { useState } from 'react'
import { Link } from 'react-router-dom'
import posts from '../data/posts.json'
import { usePageMeta } from '../hooks/usePageMeta'

const latest = posts[0]
const CATEGORIES = ['All', 'R&D Tax Incentive', 'Grants', 'Consulting', 'Business']

// Card images come in a 640px copy (made by scripts/optimize-images.mjs) and the full size
const thumbSet = src => `${src.replace(/\.webp$/, '-640.webp')} 640w, ${src} 1200w`

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
        <div className="hero-aside optional">
          <Link className="latest" to={`/blog/${latest.slug}`}>
            <img src={latest.image} srcSet={thumbSet(latest.image)} sizes="(max-width: 900px) 100vw, 480px" alt="" fetchPriority="high" />
            <div>
              <span className="pill">Latest · {latest.date}</span>
              <h2 className="h3">{latest.title}</h2>
              <span className="read">Read article<span className="arr" aria-hidden="true" /></span>
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
          {shown.map((p, i) => (
            <article className="post" key={p.slug}>
              <img src={p.image} srcSet={thumbSet(p.image)} sizes="(max-width: 700px) 100vw, 400px" alt="" {...(i === 0 ? { fetchPriority: 'high' } : { loading: 'lazy' })} />
              <div className="post-body">
                <div className="post-meta"><span className="pill">{p.tag}</span><time>{p.date}</time></div>
                <h2><Link to={`/blog/${p.slug}`}>{p.title}</Link></h2>
                <p>{p.excerpt}</p>
                <span className="small">{p.readTime} · <span className="read">Read article<span className="arr" aria-hidden="true" /></span></span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <div className="final">
        <div><h2>Ready to check your eligibility?</h2><p>Skip the reading and talk to a specialist. Free, no-obligation eligibility call.</p></div>
        <div className="ctas"><Link className="btn" to="/eligibility-quiz">Take the quiz<span className="arr" aria-hidden="true" /></Link><Link className="btn ghost" to="/contact">Book a call</Link></div>
      </div>
    </>
  )
}
