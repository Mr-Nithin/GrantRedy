import { useEffect } from 'react'

// Sets the document title and meta description for the current page.
// During pre-rendering (no window) the values are captured so the build can
// write them into each page's static HTML.
export function usePageMeta(title, description) {
  if (typeof window === 'undefined') globalThis.__pageMeta = { title, description }

  useEffect(() => {
    document.title = `${title} | GrantReady`
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = description
  }, [title, description])
}
