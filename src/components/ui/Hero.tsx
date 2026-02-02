import { Link } from 'react-router-dom'
import './hero.css'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">{t('hero.title')}</h1>
        <p className="hero-sub">{t('hero.subtitle')}</p>
        <p>
          <Link to="/projects" className="hero-btn">{t('hero.cta')}</Link>
        </p>
      </div>
    </section>
  )
}
