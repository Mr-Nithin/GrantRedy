import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout() {
  const { pathname, hash } = useLocation()

  // New page: start at the top, or at the #section the link points to
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className="wrap">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
