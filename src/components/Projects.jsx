import { projects, projectsNote } from "../data.js";
import { TechIcon, techTitle, techHex } from "../lib/techIcons.jsx";
import { useTilt } from "../lib/hooks.js";
import Reveal from "./Reveal.jsx";

function ProjectCard({ project }) {
  const tilt = useTilt({ max: 6 });
  return (
    <article className="project-card glass" {...tilt}>
      <span className="project-sheen" aria-hidden="true" />
      {project.watermark && (
        <span className="project-watermark" aria-hidden="true">
          {project.watermark}
        </span>
      )}
      <div className="project-body">
        <div className="project-top">
          <span className="project-badge" title="Proprietary client work">
            <LockIcon /> Client work
          </span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
      </div>
      <ul className="project-tags">
        {project.tags.map((t) => (
          <li
            key={t}
            className="project-tag"
            title={techTitle(t)}
            style={{ "--brand": techHex(t) || "var(--teal)" }}
          >
            <TechIcon name={t} className="tag-svg" />
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">03 — Selected work</span>
          <h2 className="section-title">Project Highlights</h2>
          <p className="section-note">{projectsNote}</p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="project-reveal">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}
