import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  // Miljövariabler från .env.local
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    // Debug: visa exakt vad som skickas
    const formData = new FormData(form.current);
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log("SUCCESS:", result.text);
        setStatus("Message sent successfully!");
        form.current?.reset();
      })
      .catch((error) => {
        console.error("ERROR:", error);
        setStatus("Failed to send message. See console for details.");
      });
  };

  return (
    <main className="container contact-page" id="main">
      <header className="contact-hero">
        <h1>Contact</h1>
        <p className="lead">
          I'd love to hear about your project, ideas or questions, or do you have a job offer? — send a message and I'll get back to you shortly.
        </p>
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

        <form ref={form} className="contact-form" onSubmit={sendEmail} aria-label="Contact form">
          <label className="field">
            <span className="label-text">Name</span>
            <input name="from_name" required />
          </label>

          <label className="field">
            <span className="label-text">Email</span>
            <input name="reply_to" type="email" required />
          </label>

          <label className="field">
            <span className="label-text">Message</span>
            <textarea name="message" rows={6} required />
          </label>

        <div className="actions">
  <button type="submit" className="btn primary">Send message</button>
</div>

{status && (
  <p 
    className={`status ${status.includes("successfully") ? "success" : "error"}`}
  >
    {status}
  </p>
)}

        </form>
      </section>
    </main>
  );
}
