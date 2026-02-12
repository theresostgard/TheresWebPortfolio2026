import ProjectCard from "../components/ui/ProjectCard";
import { useTranslation } from 'react-i18next'

const projectsMeta = [
  { id: "p1", tech: ["React Native", "TypeScript", "CSS"], link: "https://github.com/theresostgard/MultiplicationApp" },
  { id: "p2", tech: ["C#", ".NET", "Spectre.Console", "EF Core","SQL Server"], link: "https://github.com/theresostgard/ConsoleUtilityHub" },
  { id: "p3", tech: ["C#", ".NET", "Azure OpenAI", "CSS"], link: "https://github.com/theresostgard/ChatterBox" },
  { id: "p4", tech: ["TypeScript", "API", "React", "Chart.js", "CSS"], link: "https://github.com/theresostgard/scb-charts" },
  { id: "p6", tech: ["React", "TypeScript", "CSS", "Vite"], link: "https://github.com/theresostgard/TheresWebPortfolio2026" },
  {id: "p7", tech: ["C#", ".NET", "API", "RESTful"], link: "https://github.com/theresostgard/AdAPI"}
];

export default function Projects() {
  const { t } = useTranslation();

  const localized = projectsMeta.map(p => ({
    ...p,
    title: t(`projects.items.${p.id}.title`),
    description: t(`projects.items.${p.id}.description`)
  }));

  return (
    <section className="projects-section">
      <h1 className="projects-title">{t('projects.title')}</h1>
      <div className="projects-grid">
        {localized.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}


