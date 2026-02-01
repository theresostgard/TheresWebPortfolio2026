import "./projectCard.css";

type Project = {
  id: string;
  title: string;
  description?: string;
  tech?: string[];
  link?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const headingId = `project-title-${project.id}`;

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
              aria-label={`View ${project.title} repository on GitHub`}
            >
              View project on GitHub
            </a>
          </div>
        )}
      </div>

    </article>
  );
}
