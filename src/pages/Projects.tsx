import ProjectCard from "../components/ui/ProjectCard";

const projects = [
  {
    id: "p1",
    title: "Multiplication App",
    description: "A multiplication practice app with a playful UI.",
    tech: ["React Native", "TypeScript", "CSS"],
    link: "https://github.com/theresostgard/MultiplicationApp"
  },
  {
    id: "p2",
    title: "ConsoleUtilityHub",
    description: "A modular console application with various utilities like Calculator, Shapes and Rock Paper Scissors.",
    tech: ["C#", "EF Core", "SQL Server", "Spectre.Console"],
    link: "https://github.com/theresostgard/ConsoleUtilityHub"
  },
  {
    id: "p3",
    title: "ChatterBox",
    description: "A basic customer support chat bot web application.",
    tech: ["MVC", "C#", "CSS", "Azure", "ASP.NET"],
    link: "https://github.com/theresostgard/ChatterBox"
  },
  {
    id: "p4",
    title: "SCB Charts",
    description: "Scalable web application displaying data from Statistics Sweden with interactive charts.",
    tech: ["TypeScript", "API", "React", "Chart.js", "CSS"],
    link: "https://github.com/theresostgard/scb-charts"
  },
  {
    id: "p5",
    title: "ElevatorSimulator",
    description: "A simulation of an elevator system in a high-rise building.",
    tech: ["C#", "Clean Architecture", "SQL Server", "EF Core", "React", "TypeScript"],
    link: "https://github.com/theresostgard/SkrapanElevatorSimulator"
  }
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h1 className="projects-title">Projects</h1>

      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
