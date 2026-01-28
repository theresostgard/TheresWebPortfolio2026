import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">Hello — I'm Theres</h1>
      <p className="hero-sub">I build modern, accessible web experiences.</p>
      <p>
        <Link to="/projects" className="btn">View projects</Link>
      </p>
    </section>
  )
}
