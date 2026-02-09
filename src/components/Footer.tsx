import React from 'react'
import { useTranslation } from 'react-i18next'
import './ui/footer.css'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="site-footer" aria-label={t('footer.ariaLabel')}>
      <div className="container footer-inner">
        <div className="footer-left">
          <p className="copyright">© Theres Östgård {new Date().getFullYear()}</p>
          <address className="contact">
            <a href="mailto:theresb88@gmail.com">theresb88@gmail.com</a>

          </address>
        </div>

        <div className="footer-right">
        
          <button
            className="back-to-top"
            type="button"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            aria-label={t('footer.backToTop')}
            title={t('footer.backToTop')}
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 6v12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.5 10.5L12 5l5.5 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
