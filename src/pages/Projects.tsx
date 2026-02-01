import ProjectCard from "../components/ui/ProjectCard";


const projects = [
  {
    id: "p1",
    title: "Multiplication App",
    description: "A multiplication practice app with a playful UI. Focuses on learning through repetition and was a project to explore React Native.",
    tech: ["React Native", "TypeScript", "CSS"],
    link: "https://github.com/theresostgard/MultiplicationApp"
  },
  {
    id: "p2",
    title: "ConsoleUtilityHub",
    description: "A modular console application with various utilities like Calculator, Shapes and Rock Paper Scissors. Built with Spectre.Console for enhanced console UI.",
    tech: ["C#", ".NET", "Spectre.Console", "EF Core","SQL Server"],
    link: "https://github.com/theresostgard/ConsoleUtilityHub"
  },
  {
    id: "p3",
    title: "ChatterBox",
    description: "A basic customer support chat bot web application with requirements of persona on bot and limitations on what the bot will answer. Azure OpenAI is used for the bot functionality.",
    tech: ["C#", ".NET", "Azure OpenAI", "React", "TypeScript", "CSS"],
    link: "https://github.com/theresostgard/ChatterBox"
  },
  {
    id: "p4",
    title: "SCB Charts",
    description: "Scalable web application displaying data from Statistics Sweden with interactive charts. The assignment focused on API integration and data visualization.",
    tech: ["TypeScript", "API", "React", "Chart.js", "CSS"],
    link: "https://github.com/theresostgard/scb-charts"
  },
  {
    id: "p5",
    title: "ElevatorSimulator",
    description: "A simulation of an elevator system in a high-rise building. Demonstrates Clean Architecture principles in a .NET backend with a React frontend.",
    tech: ["C#", "Clean Architecture", "SQL Server", "EF Core", "React", "TypeScript"],
    link: "https://github.com/theresostgard/SkrapanElevatorSimulator"
  },
  {
    id: "p6",
    title: "Web Portfolio",
    description: "My personal portfolio website showcasing my projects and skills. Built with React, TypeScript, and Vite for a modern web development experience.",
    tech: ["React", "TypeScript", "CSS", "Vite"],
    link: "https://github.com/theresostgard/TheresWebPortfolio2026"
  }
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}


