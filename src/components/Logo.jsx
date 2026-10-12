import { useEffect, useState } from 'react'

const STATIC = '/assets/img/logo-static.webp'
const ANIMATED = '/assets/img/logo.webp'

// Shows the light first frame of the logo straight away, then swaps in the
// (much heavier) animated version once the page has finished loading.
export default function Logo() {
  const [src, setSrc] = useState(STATIC)

  useEffect(() => {
    const swap = () => {
      const img = new Image()
      img.onload = () => setSrc(ANIMATED)
      img.src = ANIMATED
    }
    if (document.readyState === 'complete') swap()
    else {
      window.addEventListener('load', swap, { once: true })
      return () => window.removeEventListener('load', swap)
    }
  }, [])

  return <img src={src} alt="GrantReady" width="389" height="104" />
}
