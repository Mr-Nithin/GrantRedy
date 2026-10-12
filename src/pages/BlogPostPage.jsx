import { Fragment } from 'react'
import { Link, useParams } from 'react-router-dom'
import posts from '../data/posts.json'
import { usePageMeta } from '../hooks/usePageMeta'
import NotFoundPage from './NotFoundPage'

// Links inside articles that pointed at the old site's routes
const LINKS = { '#rdti': '/rdti', '#blog-overseas': '/blog/overseas', '#book-lina': '/contact#book' }

// Renders **bold** and [text](url) inside article text
function Rich({ text }) {
  const parts = text.split(/(\*\*.+?\*\*|\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, i) => {
    const bold = part.match(/^\*\*(.+)\*\*$/)
    if (bold) return <strong key={i}>{bold[1]}</strong>
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) {
      const url = LINKS[link[2]] ?? link[2]
      return url.startsWith('/')
        ? <Link key={i} to={url}>{link[1]}</Link>
        : <a key={i} href={url} target="_blank" rel="noopener">{link[1]}</a>
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}

function Block({ block }) {
  switch (block.type) {
    case 'h': return <h2><Rich text={block.text} /></h2>
    case 'p': return <p><Rich text={block.text} /></p>
    case 'ul': return <ul>{block.items.map((t, i) => <li key={i}><Rich text={t} /></li>)}</ul>
    case 'stats': return <div className="kpis">{block.items.map((s, i) => <div key={i}><b>{s.value}</b><span>{s.label}</span></div>)}</div>
    default: return null
  }
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const i = posts.findIndex(p => p.slug === slug)
  const post = posts[i]
  usePageMeta(post?.title ?? 'Article not found', post?.excerpt ?? '')
  if (!post) return <NotFoundPage />

  const newer = posts[i - 1], older = posts[i + 1]

  return (
    <>
      <article className="article">
        <Link className="back" to="/blog"><span className="arr left" aria-hidden="true" />All articles</Link>
        <div className="post-meta"><span className="pill">{post.tag}</span><time>{post.date}</time><span>{post.readTime}</span></div>
        <h1>{post.title}</h1>
        <img className="article-img" src={post.image} alt="" />
        <div className="article-body">
          {post.blocks.map((b, j) => <Block key={j} block={b} />)}
        </div>
        <nav className="post-nav" aria-label="More articles">
          {newer ? <Link to={`/blog/${newer.slug}`}><small><span className="arr left" aria-hidden="true" />Newer</small>{newer.title}</Link> : <span />}
          {older ? <Link className="next" to={`/blog/${older.slug}`}><small>Older<span className="arr" aria-hidden="true" /></small>{older.title}</Link> : <span />}
        </nav>
      </article>
      <div className="final">
        <div><h2>Talk to a specialist about your claim.</h2><p>Free, no-obligation eligibility call.</p></div>
        <div className="ctas"><Link className="btn" to="/contact">Book free assessment</Link><Link className="btn ghost" to="/eligibility-quiz">Take the quiz</Link></div>
      </div>
    </>
  )
}
