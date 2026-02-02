import "./about.css";
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  const skills: string[] = t('about.skills', { returnObjects: true }) as string[];

  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-image-wrapper">
          <img src="/images/Profileimage.jpg" alt={t('about.title')} />
        </div>
        <h1>{t('about.title')}</h1>
        <p>{t('about.intro1')}</p>
        <p>{t('about.intro2')}</p>
        <p>{t('about.intro3')}</p>
        <h2>{t('about.skillsTitle')}</h2>
        <div className="skills-list">
          {skills.map((skill, i) => (
            <span className="skill-chip" key={i}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
