import { profile, coreStack } from "../data.js";
import { TechIcon, techTitle, techHex } from "../lib/techIcons.jsx";
import { useTilt } from "../lib/hooks.js";

export default function Hero() {
  // Whole visual tilts toward the cursor (3D parallax). Reduced-motion safe.
  const tilt = useTilt({ max: 8 });

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" /> Full Stack Developer
          </p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-title gradient-text">
            React <span>·</span> Node.js <span>·</span> PostgreSQL
          </p>
          <p className="hero-tagline">{profile.tagline}</p>

          <ul className="hero-stack" aria-label="Core stack">
            {coreStack.map((t) => (
              <li
                key={t}
                className="hero-chip"
                title={techTitle(t)}
                style={{ "--brand": techHex(t) || "var(--teal)" }}
              >
                <TechIcon name={t} className="chip-svg" />
                <span>{techTitle(t)}</span>
              </li>
            ))}
          </ul>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View projects
            </a>
            <a className="btn btn-ghost" href={profile.resumeUrl} download>
              <DownloadIcon /> Download CV
            </a>
          </div>

          <div className="hero-links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <Arrow />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub <Arrow />
            </a>
            <span className="hero-loc">📍 {profile.location}</span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true" {...tilt}>
          <div className="orbit">
            <div className="orbit-photo">
              <img src={profile.heroPhoto} alt="" loading="eager" decoding="async" />
            </div>
          </div>
        </div>
      </div>

      <a className="hero-scroll" href="#skills" aria-label="Scroll to skills">
        <span />
      </a>
    </section>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
    </svg>
  );
}
