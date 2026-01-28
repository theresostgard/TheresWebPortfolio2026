export default function Skills() {
  const skills = ['React', 'TypeScript', 'CSS', 'Accessibility', 'Testing', 'Vite']
  return (
    <section>
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((s) => (
          <li key={s} className="skill">{s}</li>
        ))}
      </ul>
    </section>
  )
}
