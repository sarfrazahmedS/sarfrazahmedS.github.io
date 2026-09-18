import { experience, education } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">02 — Journey</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-note">
            Building production healthcare software, end to end.
          </p>
        </Reveal>

        <div className="timeline">
          {experience.map((job) => (
            <Reveal className="timeline-item" key={job.company}>
              <span className="timeline-node" aria-hidden="true" />
              <div className="timeline-card glass">
                <div className="timeline-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="company">{job.company}</p>
                  </div>
                  <span className="period">{job.period}</span>
                </div>
                <p className="context">{job.context}</p>
                <ul className="timeline-bullets">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          <Reveal className="timeline-item">
            <span className="timeline-node timeline-node-edu" aria-hidden="true" />
            <div className="timeline-card glass education">
              <div className="timeline-head">
                <div>
                  <h3>{education.degree}</h3>
                  <p className="company">{education.school}</p>
                </div>
                <span className="period">{education.year}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
