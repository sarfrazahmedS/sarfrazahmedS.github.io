import { profile, aboutParagraphs, education } from "../data.js";
import Reveal from "./Reveal.jsx";
import { useTilt } from "../lib/hooks.js";

export default function About() {
  const tilt = useTilt({ max: 12 });
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">04 — Profile</span>
          <h2 className="section-title">About</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-media">
            <div className="about-photo glass" {...tilt}>
              <img
                src={profile.heroPhoto}
                alt={`${profile.name}, Full Stack Developer`}
                width="420"
                height="560"
                loading="lazy"
                decoding="async"
              />
              <div className="about-photo-glow" aria-hidden="true" />
              {/* Subtle healthcare-tech pulse motif */}
              <svg className="about-pulse" viewBox="0 0 240 40" aria-hidden="true">
                <path d="M0 20h70l8-14 10 28 8-14h18l6-8 6 16 5-8h96" />
              </svg>
            </div>
            <ul className="about-facts">
              <li>
                <span className="fact-k">Based in</span>
                <span className="fact-v">{profile.location}</span>
              </li>
              <li>
                <span className="fact-k">Focus</span>
                <span className="fact-v">Healthcare platforms</span>
              </li>
              <li>
                <span className="fact-k">Education</span>
                <span className="fact-v">B.CS — {education.year}</span>
              </li>
            </ul>
          </Reveal>

          <Reveal className="about-copy" delay={90}>
            {aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="about-cta">
              <a className="btn btn-primary" href="#contact">
                Let&apos;s work together
              </a>
              <a className="btn btn-ghost" href={profile.resumeUrl} download>
                Download CV
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
