import { NavLink } from 'react-router-dom'
import './header.css'
import ThemeToggle from './ui/ThemeToggle'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="logo">YourName</NavLink>
        <nav className="main-nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
