export default function Contact() {
  return (
    <section>
      <h1>Contact</h1>
      <p>If you'd like to work together, send me a message.</p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Name
          <input name="name" />
        </label>
        <label>
          Email
          <input name="email" type="email" />
        </label>
        <label>
          Message
          <textarea name="message" />
        </label>
        <button type="submit" className="btn">Send</button>
      </form>
    </section>
  )
}
