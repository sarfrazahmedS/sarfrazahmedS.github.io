import { useState } from "react";
import { siWhatsapp, siLinkedin, siGithub, siGmail } from "simple-icons";
import { profile, formspreeEndpoint } from "../data.js";
import Reveal from "./Reveal.jsx";

const NOT_CONFIGURED = formspreeEndpoint.includes("YOUR_FORM_ID");

// Official single-path brand logo (simple-icons), tinted via currentColor.
function BrandIcon({ icon }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}

// Clean line-style download glyph for the résumé (no brand logo exists).
function DownloadGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
    </svg>
  );
}

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    // Until Formspree is configured, fall back to the visitor's email client (pre-filled).
    if (NOT_CONFIGURED) {
      const name = (data.get("name") || "").toString();
      const email = (data.get("email") || "").toString();
      const message = (data.get("message") || "").toString();
      const subject = encodeURIComponent(`Portfolio enquiry — ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      form.reset();
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="contact-head">
          <span className="section-kicker">05 — Contact</span>
          <h2 className="contact-title gradient-text">Let&apos;s build something great</h2>
          <p className="section-note">
            Have a role or a project in mind? Send a message below, or reach out directly — I usually
            reply within a day.
          </p>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-form-wrap glass">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input type="text" name="name" autoComplete="name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" autoComplete="email" required />
              </label>
              <label>
                Message
                <textarea name="message" rows="4" required />
              </label>

              {status === "sent" && (
                <p className="form-success">Thanks — your message was sent!</p>
              )}
              {status === "error" && (
                <p className="form-warning">Something went wrong. Please email me directly.</p>
              )}

              <button
                className="btn btn-primary btn-block"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </form>
          </Reveal>

          <Reveal className="contact-side" delay={90}>
            <a
              className="contact-link glass"
              style={{ "--brand": "#EA4335" }}
              href={profile.mailUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-link-ico"><BrandIcon icon={siGmail} /></span>
              <span>
                <strong>Email</strong>
                <em>{profile.email}</em>
              </span>
            </a>
            <a
              className="contact-link glass"
              style={{ "--brand": "#25D366" }}
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-link-ico"><BrandIcon icon={siWhatsapp} /></span>
              <span>
                <strong>WhatsApp</strong>
                <em>{profile.whatsappLabel}</em>
              </span>
            </a>
            <a
              className="contact-link glass"
              style={{ "--brand": "#0A66C2" }}
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-link-ico"><BrandIcon icon={siLinkedin} /></span>
              <span>
                <strong>LinkedIn</strong>
                <em>Connect with me</em>
              </span>
            </a>
            <a
              className="contact-link glass"
              style={{ "--brand": "#e6edf3" }}
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-link-ico"><BrandIcon icon={siGithub} /></span>
              <span>
                <strong>GitHub</strong>
                <em>See my code</em>
              </span>
            </a>
            <a className="contact-link glass" style={{ "--brand": "#7dd3fc" }} href={profile.resumeUrl} download>
              <span className="contact-link-ico"><DownloadGlyph /></span>
              <span>
                <strong>Résumé</strong>
                <em>Download PDF</em>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
