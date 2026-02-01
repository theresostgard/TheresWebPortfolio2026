import { Link } from 'react-router-dom'
import './hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">Theres - fullstack .NET developer</h1>
        <p className="hero-sub">I build digital solutions with a variety of technologies.</p>
        <p>
          <Link to="/projects" className="hero-btn">View projects</Link>
        </p>
      </div>
    </section>
  )
}
