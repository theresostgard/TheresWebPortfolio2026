import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log("SUCCESS:", result.text);
        setStatus(t('contact.success'));
        form.current?.reset();
      })
      .catch((error) => {
        console.error("ERROR:", error);
        setStatus(t('contact.error'));
      });
  };

  return (
    <main className="container contact-page" id="main">
      <header className="contact-hero">
        <h1>{t('contact.title')}</h1>
        <p className="lead">{t('contact.lead')}</p>
      </header>

      <section className="contact-grid">
        <aside className="contact-info">
          <h2>{t('contact.getInTouch')}</h2>
          <p dangerouslySetInnerHTML={{ __html: t('contact.emailNote', { email: '<a href="mailto:theresb88@gmail.com">theresb88@gmail.com</a>' }) }} />
          <ul>
            <li><strong>{t('contact.phone')}</strong> +46 70 242 41 87</li>
            <li><strong>{t('contact.location')}</strong> Hudiksvall, Sweden</li>
          </ul>
        </aside>

        <form ref={form} className="contact-form" onSubmit={sendEmail} aria-label="Contact form">
          <label className="field">
            <span className="label-text">{t('contact.labels.name')}</span>
            <input name="from_name" required />
          </label>

          <label className="field">
            <span className="label-text">{t('contact.labels.email')}</span>
            <input name="reply_to" type="email" required />
          </label>

          <label className="field">
            <span className="label-text">{t('contact.labels.message')}</span>
            <textarea name="message" rows={6} required />
          </label>

        <div className="actions">
  <button type="submit" className="btn primary">{t('contact.send')}</button>
</div>

{status && (
  <p 
    className={`status ${status === t('contact.success') ? "success" : "error"}`}
  >
    {status}
  </p>
)}

        </form>
      </section>
    </main>
  );
}
