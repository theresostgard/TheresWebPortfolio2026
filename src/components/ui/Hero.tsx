import { Link } from 'react-router-dom'
import './hero.css'
import bg from '../../assets/background-image.jpg'

export default function Hero() {
  return (
    <section className="hero">
      <img src={bg} className="hero-bg" alt="Background" />
      <div className="hero-inner">
        <h1 className="hero-title">Hello — I'm Theres</h1>
        <p className="hero-sub">I build modern, accessible web experiences.</p>
        <p>
          <Link to="/projects" className="btn">View projects</Link>
        </p>
      </div>
    </section>
  )
}
