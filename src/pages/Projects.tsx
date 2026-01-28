import ProjectCard from '../components/ui/ProjectCard'

const projects = [
  { id: 'p1', title: 'Portfolio site', description: 'This site — built with React + Vite', tech: ['React', 'TypeScript'] },
]

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
