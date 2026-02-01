import "./contact.css"

export default function Contact() {
  return (
    <main className="container contact-page" id="main">
      <header className="contact-hero">
        <h1>Contact</h1>
        <p className="lead">I'd love to hear about your project, ideas or questions, or do you have a job offer? — send a message and I'll get back to you shortly.</p>
      </header>

      <section className="contact-grid">
        <aside className="contact-info">
          <h2>Get in touch</h2>
          <p>Prefer email? Send a note to <a href="mailto:theresb88@gmail.com">theresb88@gmail.com</a>.</p>
          <ul>
            <li><strong>Phone:</strong> +46 70 242 41 87</li>
            <li><strong>Location:</strong> Hudiksvall, Sweden</li>
          </ul>
        </aside>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
          <label className="field">
            <span className="label-text">Name</span>
            <input name="name" required />
          </label>

          <label className="field">
            <span className="label-text">Email</span>
            <input name="email" type="email" required />
          </label>

          <label className="field">
            <span className="label-text">Message</span>
            <textarea name="message" rows={6} required />
          </label>

          <div className="actions">
            <button type="submit" className="btn primary">Send message</button>
          </div>
        </form>
      </section>
    </main>
  )
}
