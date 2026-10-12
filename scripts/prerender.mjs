// Post-build step: renders every route to static HTML and writes the SEO / agent files.
// Run after `vite build` and `vite build --ssr src/entry-server.jsx --outDir dist-ssr`.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { loadEnv } from 'vite'

const SITE = (loadEnv('production', process.cwd()).VITE_SITE_URL || 'https://d3hkz6lbhj1jks.cloudfront.net').replace(/\/$/, '')
const dist = path.resolve('dist')
const { render, routes, posts } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href)
// Inline the stylesheet so the first paint needs no extra round trip
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8').replace(
  /<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/,
  (_, href) => `<style>${fs.readFileSync(path.join(dist, href), 'utf-8')}</style>`)
  // The pages are fully rendered HTML (links work without JavaScript), so the app bundle
  // is started only after the page has loaded, keeping it off the critical rendering path
  .replace(/<script type="module" crossorigin src="(\/assets\/index-([^"]+)\.js)"><\/script>/, (_, src, hash) => {
    const boot = `/assets/boot-${hash}.js`
    fs.writeFileSync(path.join(dist, boot),
      `function s(){var e=document.createElement('script');e.type='module';e.src='${src}';document.head.appendChild(e)}` +
      // once the page has loaded and its first content has painted
      `function p(){var d=0;function g(){d||(d=1,s())}` +
      `try{if(performance.getEntriesByName('first-contentful-paint').length)return g();` +
      `new PerformanceObserver(function(l){l.getEntriesByName('first-contentful-paint').length&&g()}).observe({type:'paint',buffered:true})}catch(e){}` +
      `setTimeout(g,3000)}` +
      `document.readyState==='complete'?p():addEventListener('load',p)\n`)
    return `<script src="${boot}" defer></script>`
  })

const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function page(url) {
  const { html, meta } = render(url)
  const title = meta ? `${meta.title} | GrantReady` : 'GrantReady'
  const desc = meta?.description || ''
  let out = template
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(desc)}">`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  if (url !== '/404') out = out.replace('</head>', `<link rel="canonical" href="${SITE}${url === '/' ? '/' : url}">\n</head>`)
  return out
}

for (const url of routes) {
  const file = url === '/' ? 'index.html' : `${url.slice(1)}/index.html`
  fs.mkdirSync(path.dirname(path.join(dist, file)), { recursive: true })
  fs.writeFileSync(path.join(dist, file), page(url))
}
fs.writeFileSync(path.join(dist, '404.html'), page('/404'))

// robots.txt and sitemap.xml
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`)
fs.writeFileSync(path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes.map(u => `  <url><loc>${SITE}${u}</loc></url>`).join('\n') + '\n</urlset>\n')

// llms.txt: a plain Markdown guide to the site for AI agents
const link = (u, t) => `- [${t}](${SITE}${u})`
fs.writeFileSync(path.join(dist, 'llms.txt'), `# GrantReady

> GrantReady helps Australian businesses claim the R&D Tax Incentive (RDTI) and Export Market Development Grants (EMDG).

## Services
${link('/rdti', 'R&D Tax Incentive')}
${link('/emdg', 'Export Market Development Grants')}
${link('/other-grants', 'Other grants')}
${link('/services', 'All services')}

## Tools
${link('/eligibility-quiz', 'RDTI eligibility quiz')}
${link('/benefit-calculator', 'R&D benefit calculator')}

## Company
${link('/why-us', 'Why GrantReady')}
${link('/team', 'Our team')}
${link('/case-studies', 'Case studies')}
${link('/industries', 'Industries')}
${link('/contact', 'Contact and free assessment')}

## Blog
${posts.map(p => link(`/blog/${p.slug}`, p.title)).join('\n')}
`)

// Agent discovery catalogue (ARD format)
fs.mkdirSync(path.join(dist, '.well-known'), { recursive: true })
fs.writeFileSync(path.join(dist, '.well-known/ai-catalog.json'), JSON.stringify({
  specVersion: '1.0',
  entries: [{
    identifier: 'urn:air:grantready:site:llms',
    displayName: 'GrantReady site guide',
    type: 'text/markdown; profile="urn:air:agent-skills"',
    url: `${SITE}/llms.txt`,
    representativeQueries: [
      'Is my company eligible for the R&D Tax Incentive?',
      'How much R&D tax benefit could I claim?',
      'How do I apply for an EMDG grant?',
    ],
    trustManifest: { identity: SITE },
  }],
}, null, 2))

fs.rmSync('dist-ssr', { recursive: true, force: true })
console.log(`Pre-rendered ${routes.length + 1} pages`)
