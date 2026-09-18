// Accurate, recognizable technology logos.
//
// Brand marks come from `simple-icons` (official single-path SVGs), imported
// by name so the bundler tree-shakes to only the icons actually used. Skills
// that have no real brand logo (REST APIs, RBAC, SaaS architecture, testing)
// fall back to a clean, purpose-built line glyph instead of a faked logo.

import {
  siReact,
  siTypescript,
  siJavascript,
  siHtml5,
  siCss3,
  siTailwindcss,
  siReactquery,
  siReactrouter,
  siVite,
  siNodedotjs,
  siExpress,
  siJsonwebtokens,
  siSocketdotio,
  siPuppeteer,
  siPostgresql,
  siMongodb,
  siPrisma,
  siGit,
  siGithub,
  siSubversion,
  siDocker,
  siClaude,
  siPython,
} from "simple-icons";

// Purpose-built generic glyphs (stroke style) for concepts without a logo.
const GENERIC = {
  api: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 8 4.5 12l4 4" />
      <path d="M15.5 8l4 4-4 4" />
      <path d="M13.2 6.5l-2.4 11" />
    </g>
  ),
  shield: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v5c0 4.2-2.9 7.5-7 9-4.1-1.5-7-4.8-7-9V6l7-3z" />
      <path d="M9 11.5l2 2 4-4" />
    </g>
  ),
  layers: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3.5 3 8l9 4.5L21 8l-9-4.5z" />
      <path d="M3.5 12 12 16.2 20.5 12" />
      <path d="M3.5 15.8 12 20l8.5-4.2" />
    </g>
  ),
  test: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6" />
      <path d="M10 3v5.2L5.6 16A2 2 0 0 0 7.4 19h9.2a2 2 0 0 0 1.8-3L14 8.2V3" />
      <path d="M8.2 14.2h7.6" />
    </g>
  ),
  chip: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 3v3M14 3v3M10 18v3M14 18v3M3 10h3M3 14h3M18 10h3M18 14h3" />
    </g>
  ),
};

// Resolve a free-text skill name to an icon. Order matters (most specific first).
function match(name) {
  const n = name.toLowerCase();
  if (n.includes("react query")) return { icon: siReactquery };
  if (n.includes("react router")) return { icon: siReactrouter };
  if (n.includes("react")) return { icon: siReact };
  if (n.includes("typescript")) return { icon: siTypescript };
  if (n.includes("javascript")) return { icon: siJavascript };
  if (n.includes("html")) return { icon: siHtml5 };
  if (n.includes("tailwind")) return { icon: siTailwindcss };
  if (n.includes("css")) return { icon: siCss3 };
  if (n.includes("vite")) return { icon: siVite };
  if (n.includes("node")) return { icon: siNodedotjs };
  if (n.includes("express")) return { icon: siExpress };
  if (n.includes("jwt")) return { icon: siJsonwebtokens };
  if (n.includes("socket")) return { icon: siSocketdotio };
  if (n.includes("puppeteer")) return { icon: siPuppeteer };
  if (n.includes("postgres")) return { icon: siPostgresql };
  if (n.includes("mongo")) return { icon: siMongodb };
  if (n.includes("prisma")) return { icon: siPrisma };
  if (n.includes("github")) return { icon: siGithub };
  if (n.includes("git")) return { icon: siGit };
  if (n.includes("svn") || n.includes("subversion")) return { icon: siSubversion };
  if (n.includes("docker")) return { icon: siDocker };
  if (n.includes("claude") || n.includes("anthropic")) return { icon: siClaude };
  if (n.includes("python")) return { icon: siPython };
  if (n.includes("rest")) return { generic: "api" };
  if (n.includes("rbac") || n.includes("auth")) return { generic: "shield" };
  if (n.includes("saas") || n.includes("multi-tenant") || n.includes("architecture"))
    return { generic: "layers" };
  if (n.includes("test")) return { generic: "test" };
  return { generic: "chip" };
}

/** Brand color for a skill, or null when it uses a generic glyph. */
export function techHex(name) {
  const m = match(name);
  return m.icon ? "#" + m.icon.hex : null;
}

/** Canonical brand title (e.g. "PostgreSQL"), or the original label for generics. */
export function techTitle(name) {
  const m = match(name);
  return m.icon ? m.icon.title : name;
}

/** Inline SVG logo for a skill. Monochrome (currentColor) by default. */
export function TechIcon({ name, className }) {
  const m = match(name);
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
    >
      {m.icon ? <path d={m.icon.path} /> : GENERIC[m.generic]}
    </svg>
  );
}
