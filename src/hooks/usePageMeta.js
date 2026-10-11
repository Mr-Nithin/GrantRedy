import { useEffect } from 'react'

// Sets the document title and meta description for the current page.
export function usePageMeta(title, description) {
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
