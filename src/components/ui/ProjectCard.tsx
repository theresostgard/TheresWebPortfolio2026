type Project = {
  id: string
  title: string
  description?: string
  tech?: string[]
  link?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      {project.description && <p className="muted">{project.description}</p>}
      {project.tech && <p className="tech">{project.tech.join(' · ')}</p>}
      {project.link && (
        <p>
          <a href={project.link} target="_blank" rel="noreferrer">Live</a>
        </p>
      )}
    </article>
  )
}
