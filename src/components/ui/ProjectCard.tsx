import "./projectCard.css";
import { useTranslation } from 'react-i18next';

type Project = {
  id: string;
  title: string;
  description?: string;
  tech?: string[];
  link?: string;
  actionLabelKey?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation();
  const headingId = `project-title-${project.id}`;
  const actionLabelKey = project.actionLabelKey ?? 'projects.viewRepo';

  return (
    <article className="project-card" aria-labelledby={headingId}>

      <div className="project-body">
        <h3 id={headingId} className="project-title">
          {project.title}
        </h3>

        {project.description && (
          <p className="project-summary">
            {project.description}
          </p>
        )}

        {project.tech && (
          <ul className="tech-list" aria-label="Technologies used">
            {project.tech.map((t, i) => (
              <li className="tech" key={i}>
                {t}
              </li>
            ))}
          </ul>
        )}

        {project.link && (
          <div className="project-actions">
            <a
              className="btn"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t(actionLabelKey, { title: project.title })}
            >
              {t(actionLabelKey)}
            </a>
          </div>
        )}
      </div>

    </article>
  );
}
