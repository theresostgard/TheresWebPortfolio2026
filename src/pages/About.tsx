import "./about.css";


export default function About() {
  const skills = [
    ".NET", "C#", "EF Core", "SQL Server",
    "React", "React Native", "TypeScript", "CSS", "Responsive Design", "Accessibility",
    "Agile Workflows", "Mentoring", "Collaboration", "Problem-Solving"
  ];

  return (
    <section className="about-section">
      <div className="about-content">
            <div className="about-image-wrapper">
      <img src="/images/Profileimage.jpg" alt="Me" />
    </div>
        <h1>About Me</h1>
      <p>
        I'm a full-stack .NET developer with hands-on experience building web and mobile applications using React, TypeScript, and React Native.
      </p>
      <p>
        My background as a teacher has given me strong communication skills and the ability to understand users’ needs, collaborate effectively with teams, and turn complex problems into intuitive, maintainable solutions.
      </p>
      <p>
        I enjoy crafting well-structured code and creating interfaces that are both functional and user-friendly.
      </p>
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill, i) => (
            <span className="skill-chip" key={i}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
