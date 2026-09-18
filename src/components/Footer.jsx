import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-name">{profile.name}</p>
          <p className="footer-tag">Full Stack Developer · React · Node.js · PostgreSQL</p>
        </div>
        <div className="footer-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.mailUrl} target="_blank" rel="noreferrer">
            Email
          </a>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
      <p className="footer-meta">
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; Three.js.
      </p>
    </footer>
  );
}
