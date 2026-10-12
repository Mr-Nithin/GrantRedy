// Server entry used only at build time to pre-render each route to static HTML.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import posts from './data/posts.json'

export const routes = [
  '/', '/rdti', '/emdg', '/other-grants', '/services', '/case-studies', '/industries',
  '/industry-agriculture', '/industry-biomedical', '/industry-biotech', '/industry-it', '/industry-manufacturing',
  '/accounting-firms', '/why-us', '/team', '/about', '/blog', '/contact', '/eligibility-quiz', '/benefit-calculator',
  ...posts.map(p => `/blog/${p.slug}`),
]

export { posts }

export function render(url) {
  globalThis.__pageMeta = null
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  )
  return { html, meta: globalThis.__pageMeta }
}
