import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.classList.toggle('locked', open)
  }, [open])

  return (
    <nav id="nav" className={open ? 'open' : undefined}>
      <Link className="logo" to="/"><img src="/assets/img/logo.gif" alt="GrantReady" /></Link>
      <button className="menu-btn" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(o => !o)}>
        <svg className="m" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        <svg className="x" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
      </button>
      <div className="links" onClick={e => e.target.closest('a') && setOpen(false)}>
        <Link to="/rdti">R&amp;D Tax Incentive</Link>
        <Link to="/emdg">EMDG</Link>
        <Link to="/industries">Industries</Link>
        <Link to="/why-us">Why GrantReady</Link>
        <a className="tel" href="tel:0398539853">03 9853 9853</a>
        <Link className="btn" to="/contact">Free assessment</Link>
      </div>
    </nav>
  )
}
