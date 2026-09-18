// Central place for all real profile data.
// Edit values here to update content across the whole site.
//
// NOTE: Everything here is factual profile content. The redesign only
// rephrases existing facts (see `aboutParagraphs`) — no new companies,
// projects, metrics or claims were invented.

const base = import.meta.env.BASE_URL;

export const profile = {
  name: "Sarfraz Ahmed",
  title: "Full Stack Developer — React / Node.js / PostgreSQL",
  location: "Karachi, Pakistan",
  email: "sarfrazahmed181@gmail.com",
  // Opens the Gmail compose window (not the OS default mail app).
  mailUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=sarfrazahmed181@gmail.com",
  phone: "0302-9414886",
  // WhatsApp: PK number in international wa.me format (0302… -> 92302…).
  whatsapp: "https://wa.me/923029414886",
  whatsappLabel: "+92 302 9414886",
  linkedin: "https://www.linkedin.com/in/sarfraz-ahmed-725625140",
  github: "https://github.com/sarfrazahmedS",
  summary:
    "Full-stack developer building HIPAA-aware, multi-tenant healthcare platforms — role-based portals, clinical workflows, PDF reporting, and billing screens.",
  // Short punchy line for the hero.
  tagline:
    "I build secure, HIPAA-aware healthcare platforms — from role-based clinical portals to branded PDF reporting engines.",
  photo: `${base}profile.jpg`,
  // Transparent-background cut-out used for the frameless floating hero 3D.
  heroPhoto: `${base}profile2.png`,
  resumeUrl: `${base}Sarfraz-Ahmed-CV.pdf`,
};

// Compact "core stack" shown in the hero (subset of the full skills list).
export const coreStack = ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker"];

// Professionally rewritten bio for the About section.
// Same facts as `summary` + `experience` + `education` — nothing new added.
export const aboutParagraphs = [
  "I'm a full-stack developer based in Karachi, focused on HIPAA-aware, multi-tenant healthcare platforms. At niXaam LLC I build the systems clinics run on — electronic health records, patient management, and everyday clinic operations — where correctness, access control and clarity matter as much as speed.",
  "My work spans the whole stack: role-based portals for doctors, patients, admins, branches and staff in React and TypeScript with server-side RBAC; Node.js and Express APIs backed by PostgreSQL; and a WYSIWYG PDF reporting engine that renders branded, multi-page clinical documents. I care about secure authentication, database-level guarantees, and performance under real clinical load.",
  "I pair daily with Claude Code as a hands-on collaborator for feature scoping, refactors, database migrations and code review — shipping reviewed, well-documented commits. I hold a Bachelor of Computer Science from Sir Syed University of Engineering & Technology.",
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "React Query", "React Router", "Vite"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "RBAC", "Puppeteer (PDF)", "Socket.IO"],
  },
  {
    title: "Database",
    items: ["PostgreSQL (triggers, views, stored procs)", "MongoDB", "Prisma"],
  },
  {
    title: "Tools & Ops",
    items: ["Git", "SVN", "Docker basics", "Multi-tenant SaaS architecture", "Automated test suites"],
  },
  {
    title: "AI-Assisted Development",
    items: ["Claude Code (Anthropic) — daily pair-programmer for feature scoping, refactors, DB migrations, code review"],
  },
];

export const experience = [
  {
    role: "React Developer",
    company: "niXaam LLC",
    period: "April 2026 – Present",
    context: "Multi-tenant healthcare SaaS: EHR platform, patient management system, clinic operations.",
    bullets: [
      "Built role-based portals (doctor / patient / admin / branch / staff) in React + TypeScript with server-side RBAC.",
      "Designed a WYSIWYG PDF report template engine per branch, handling multi-page pagination, headers/footers, watermarks and signatures.",
      "Delivered secure authentication with database-level constraints and advisory locks, supporting flexible login by username or email.",
      "Optimized PDF generation performance and fixed access-control gaps in clinical record views.",
      "Migrated multiple clinical document types onto a single unified PDF service for consistent branded output.",
      "Paired daily with Claude Code (Anthropic) — feature scoping, refactors, migrations, code review — shipping reviewed, well-documented commits.",
    ],
  },
];

export const projects = [
  {
    title: "Healthcare Data Integration Bot",
    watermark: "ECW",
    tags: ["Python", "Node.js", "PostgreSQL", "Docker"],
    description:
      "A production-hardened data ingestion service that pulls patient, encounter, and insurance records from a third-party EHR system into a multi-tenant Postgres store — per-client credentials, cron scheduling, resumable runs, retry with exponential backoff, and failure alerting.",
  },
  {
    title: "Patient Management System",
    watermark: "PMS",
    tags: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL"],
    description:
      "A clinic management system covering patient registration, prescription workflows, medicine ↔ disease mapping, PDF/print prescriptions, shipment integration for medicine delivery, and follow-up reminders — with role-based access and reporting.",
  },
  {
    title: "Electronic Health Records Platform",
    watermark: "XEHR",
    tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Puppeteer"],
    description:
      "A full EHR platform with multi-role portals (Doctor, Patient, Admin, Branch, Staff, Frontdesk), a telehealth console with AI-assisted clinical drafts, a unified PDF template engine for clinical documents, envelope-encrypted patient records, MFA, and audit logging.",
  },
];

export const projectsNote =
  "These projects are part of ongoing employer client work at niXaam LLC. Source code is proprietary and not published — the summaries above use permission-safe, non-confidential descriptions.";

export const softSkills = ["Problem Solving", "Teamwork & Collaboration", "Communication", "Quick Learner"];

export const education = {
  degree: "Bachelor of Computer Science",
  school: "Sir Syed University of Engineering & Technology, Karachi",
  year: "2018",
};

// Formspree endpoint for the contact form.
// Create a free account at https://formspree.io, make a new form, and
// replace "YOUR_FORM_ID" below with the ID Formspree gives you.
export const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID";
