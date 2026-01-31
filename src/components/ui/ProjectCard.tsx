import "./projectCard.css";
type Project = {
  id: string;
  title: string;
  description?: string;
  tech?: string[];
  link?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>

        <p className="project-summary">{project.description}</p>

        <div className="tech-list">
          {project.tech?.map(t => (
            <span key={t} className="tech">{t}</span>
          ))}
        </div>

        <div className="project-actions">
          <a className="btn" href={project.link} target="_blank" rel="noreferrer">
            View on GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
