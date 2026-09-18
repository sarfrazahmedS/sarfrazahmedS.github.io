import { skillGroups, softSkills } from "../data.js";
import { TechIcon, techTitle, techHex } from "../lib/techIcons.jsx";
import { useTilt } from "../lib/hooks.js";
import Reveal from "./Reveal.jsx";

function SkillTile({ name }) {
  const tilt = useTilt({ max: 14 });
  const hex = techHex(name);
  return (
    <li
      className="skill-tile"
      style={{ "--brand": hex || "var(--teal)" }}
      title={name}
      {...tilt}
    >
      <span className="skill-glow" aria-hidden="true" />
      <span className="skill-ico">
        <TechIcon name={name} className="tech-svg" />
      </span>
      <span className="skill-name">{techTitle(name)}</span>
    </li>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">01 — Toolkit</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-note">
            The stack I reach for to ship secure, multi-tenant healthcare software — hover any tile
            to bring it forward.
          </p>
        </Reveal>

        <div className="skills-groups">
          {skillGroups.map((group, gi) => (
            <Reveal className="skill-group glass" key={group.title} delay={gi * 70}>
              <h3 className="skill-group-title">{group.title}</h3>
              <ul className="skill-tiles">
                {group.items.map((item) => (
                  <SkillTile key={item} name={item} />
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="soft-skills">
          <h3>Soft skills</h3>
          <ul className="soft-list">
            {softSkills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
