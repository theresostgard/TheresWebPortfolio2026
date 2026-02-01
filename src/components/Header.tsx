import { NavLink } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import './header.css'
import logo from '../assets/Logga-Theres-removebg-preview.png'

export default function Header() {
  const [open, setOpen] = useState(false)

  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const navRef = useRef<HTMLElement | null>(null)

  // Stäng meny vid klick utanför
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        open &&
        navRef.current &&
        !navRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [open])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="logo">
          <img src={logo} alt="Theres Östgård" />
        </NavLink>

        <button
          ref={buttonRef}
          className={`hamburger ${open ? 'is-open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          ref={navRef}
          className={`main-nav ${open ? 'open' : ''}`}
        >
          <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/projects" onClick={() => setOpen(false)}>Projects</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        </nav>

        <div className="header-right">
          <div className="social-links">
            {/* dina social icons oförändrade */}
          </div>
        </div>
      </div>
    </header>
  )
}
