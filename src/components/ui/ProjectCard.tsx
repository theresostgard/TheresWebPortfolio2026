import "./projectCard.css";
type Project = {
  id: string;
  title: string;
  description?: string;
  tech?: string[];
  link?: string;
  image?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
<article className="project-card">
  {project.image && (
    <div className="project-media">
      <img src={project.image} alt={project.title} />
    </div>
  )}
  <div className="project-body">
    <h3 className="project-title">{project.title}</h3>
    {project.description && <p className="project-summary">{project.description}</p>}
    {project.tech && (
      <div className="tech-list">
        {project.tech.map((t, i) => (
          <span className="tech" key={i}>{t}</span>
        ))}
      </div>
    )}
    {project.link && (
      <div className="project-actions">
        <a className="btn" href={project.link} target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      </div>
    )}
  </div>
</article>

  );
}
