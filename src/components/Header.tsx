import { NavLink } from 'react-router-dom'
import './header.css'
import ThemeToggle from './ui/ThemeToggle'
import logo from '../assets/Logga-Theres-removebg-preview.png'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="logo">
          <img src={logo} alt="Theres Östgård" />
        </NavLink>
        <nav className="main-nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
        </nav>
        <div className="header-right">
          <div className="social-links">
            <a href="https://github.com/theresostgard" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.6-4-1.6-.6-1.6-1.5-2-1.5-2-1.2-.8.1-.8.1-.8 1.4.1 2.2 1.5 2.2 1.5 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.7-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.8 1.3 1.9 1.3 3.2 0 4.6-2.7 5.6-5.3 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5A12 12 0 0012 .5z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/theres-%C3%B6stg%C3%A5rd-597330301/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 11.02 0H4.98zM3.5 8.98h3v11h-3v-11zM9 8.98h2.88v1.5h.04c.4-.8 1.38-1.64 2.84-1.64 3.03 0 3.6 2 3.6 4.6v6.54h-3v-5.8c0-1.38-.02-3.16-1.92-3.16-1.92 0-2.2 1.5-2.2 3.06v5.9H9v-11z"/>
              </svg>
            </a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
