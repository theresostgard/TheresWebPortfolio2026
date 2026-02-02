import { NavLink } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import './header.css'
import LanguageToggle from './ui/LanguageToggle'
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
          <LanguageToggle />
          <div className="social-links">
            <a href="https://github.com/theresostgard" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="25" height="25" fill="currentColor" aria-hidden="true">
                <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.6-4-1.6-.6-1.6-1.5-2-1.5-2-1.2-.8.1-.8.1-.8 1.4.1 2.2 1.5 2.2 1.5 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.7-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.8 1.3 1.9 1.3 3.2 0 4.6-2.7 5.6-5.3 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5A12 12 0 0012 .5z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/theres-%C3%B6stg%C3%A5rd-597330301/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="25" height="25" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 11.02 0H4.98zM3.5 8.98h3v11h-3v-11zM9 8.98h2.88v1.5h.04c.4-.8 1.38-1.64 2.84-1.64 3.03 0 3.6 2 3.6 4.6v6.54h-3v-5.8c0-1.38-.02-3.16-1.92-3.16-1.92 0-2.2 1.5-2.2 3.06v5.9H9v-11z"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </header>
  )
}
