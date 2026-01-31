import { useEffect } from 'react';
import Hero from '../components/ui/Hero';
// import ProjectCard from '../components/ui/ProjectCard';

// const sampleProjects = [
//   { id: 'p1', title: 'Portfolio site', description: 'This site — built with React + Vite', tech: ['React', 'TypeScript'] },
// ];

export default function Home() {
  useEffect(() => {
    document.title = "Theres Östgård"; // här sätter du titeln för fliken
  }, []);

  return (
    <section>
      <Hero />

      {/* <section className="projects-preview">
        <h2>Selected projects</h2>
        <div className="projects-grid">
          {sampleProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section> */}
    </section>
  );
}
