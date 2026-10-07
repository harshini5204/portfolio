export const profile = {
  name: "Harshini B",
  role: "Software Development Engineer",
  location: "India",
  email: "bharshini2004@gmail.com",
  phone: "+91-9345282089",
  github: "https://github.com/harshini5204",
  githubHandle: "harshini5204",
  linkedin: "https://www.linkedin.com/in/harshini5204/",
  resume: "/Harshini_B.pdf",
  headline:
    "Building reliable, scalable web applications and the systems behind them.",
  summary:
    "Full-stack software engineer with production experience across React, TypeScript, Node.js, and PostgreSQL. I design frontend architecture, ship REST APIs, and work through tenant isolation, authorization, and data modeling — not only the UI layer.",
};

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#mindset", label: "Mindset" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Journey" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export const stackLayers = [
  {
    id: "browser",
    label: "Browser",
    detail: "Rendering, events, and the surface users actually interact with.",
  },
  {
    id: "runtime",
    label: "JavaScript runtime",
    detail: "How async work, state, and the event loop shape application behavior.",
  },
  {
    id: "frontend",
    label: "Frontend",
    detail: "Typed React systems, reusable UI, and data-fetching that stay maintainable.",
  },
  {
    id: "network",
    label: "Network / API",
    detail: "Contracts, auth, and the request path between client and service.",
  },
  {
    id: "backend",
    label: "Backend",
    detail: "Express services, validation, and business rules behind the dashboard.",
  },
  {
    id: "database",
    label: "Database",
    detail: "Schemas, relations, and queries that keep product data consistent.",
  },
  {
    id: "infra",
    label: "Infrastructure",
    detail: "Storage, environments, and the operational pieces that get a feature to production.",
  },
];

export const experience = [
  {
    company: "QuarkSek Technologies",
    role: "Associate Software Development Engineer",
    period: "May 2025 – Present",
    current: true,
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "React Query",
      "React Hook Form",
      "Zod",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "AWS S3",
    ],
    points: [
      "Build and ship production React and TypeScript applications, translating Figma designs into reusable UI systems.",
      "Deliver end-to-end features spanning database schema design, REST APIs, frontend implementation, and AWS S3 integration.",
      "Designed and implemented multi-tenant architecture for tenant isolation and scalable onboarding.",
      "Developed backend APIs for Cloud Security Assessment and Multi-Tenancy modules.",
      "Implemented application-wide rate limiting and security controls ahead of production launch.",
      "Designed database schemas and integration APIs for JIRA synchronization and delivered a working proof-of-concept.",
      "Led UI redesign work across multiple user roles to improve consistency across the platform.",
      "Wrote technical documentation, API specifications, and onboarding guides for new engineers.",
      "Mentored junior engineers through code reviews, architecture discussions, and API design sessions.",
      "Received a Spot Award for high-impact production features and platform improvements, including the Pengate application release.",
    ],
  },
  {
    company: "QuarkSek Technologies",
    role: "Software Development Engineer Intern",
    period: "April 2024 – April 2025",
    current: false,
    technologies: [
      "React.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Prisma",
    ],
    points: [
      "Built reusable React and TypeScript UI components that contributed to 2+ internal product features shipped to production.",
      "Developed Express.js backend services and integrated REST APIs with PostgreSQL through Prisma.",
      "Participated in Agile sprint planning and peer code reviews.",
    ],
  },
];

export const featuredProject = {
  title: "Real-time ECG monitoring",
  repo: "ecg-monitor-project",
  href: "https://github.com/harshini5204/ecg-monitor-project",
  live: null,
  stack: {
    frontend: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "Chart.js"],
    backend: ["Node.js", "Express.js", "WebSockets", "Prisma", "PostgreSQL"],
  },
  problem:
    "Clinical-style ECG data needs to be observed live, associated with a patient and session, and stored so traces can be reviewed after a session ends.",
  architecture: [
    "ECG sample stream",
    "WebSocket",
    "Express service",
    "Prisma + PostgreSQL",
    "React + TypeScript",
    "Chart.js visualization",
  ],
  implementation: [
    "Split the system into a Vite React client and an Express TypeScript server.",
    "Model patients, ECG sessions, and per-lead samples in PostgreSQL with Prisma.",
    "Push live samples over WebSockets while persisting session data through the API layer.",
    "Render waveforms in the browser with Chart.js and keep client state in Zustand.",
  ],
  challenges: [
    "Keeping the live waveform in sync with a stream of samples rather than a static chart.",
    "Relating patients, sessions, and high-volume sample rows without losing queryability.",
    "Separating real-time transport (WebSockets) from persisted REST/data access (Prisma).",
  ],
  solution:
    "A full-stack monitor: the server owns sessions and persistence; the client subscribes to the stream and plots leads as they arrive.",
  result:
    "A working client/server prototype for patient-scoped ECG sessions with stored samples and live visualization.",
};

export const otherProjects = [
  {
    title: "Automated penetration testing web app",
    stack: ["Next.js", "TypeScript", "Node.js", "OWASP ZAP", "Nmap"],
    points: [
      "Full-stack app that automates vulnerability scanning through OWASP ZAP and Nmap.",
      "Backend services orchestrate scan requests and generate vulnerability reports.",
      "Responsive Next.js dashboard with role-based views so non-technical users can trigger scans and review findings.",
    ],
    github: null,
    live: null,
  },
  {
    title: "E-Buddy e-commerce platform",
    stack: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    points: [
      "Vendor dashboards for product management, order tracking, and sales analytics.",
      "REST APIs for product, order, and user management.",
      "Responsive storefront and dashboard UI with Tailwind CSS.",
    ],
    github: null,
    live: null,
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Zustand",
      "React Query",
      "React Hook Form",
      "Zod",
      "Radix UI",
      "shadcn/ui",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "WebSockets"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "Prisma", "SQL", "MongoDB"],
  },
  {
    title: "Cloud & tooling",
    items: ["AWS S3", "Git", "GitHub", "Docker", "Postman", "Figma"],
  },
  {
    title: "Engineering",
    items: [
      "Multi-tenancy",
      "RBAC",
      "Authentication & authorization",
      "API design",
      "Database design",
      "Rate limiting",
      "System design",
    ],
  },
];

export const journey = [
  {
    title: "Professional development",
    body: "SDE intern at QuarkSek, then Associate SDE — shipping production features in an Agile team.",
  },
  {
    title: "Frontend engineering",
    body: "Typed React systems, design-to-code from Figma, and reusable UI across product roles.",
  },
  {
    title: "Full-stack development",
    body: "Owning a feature from schema and REST API through client implementation and S3 integration.",
  },
  {
    title: "Real-time applications",
    body: "ECG monitor: WebSocket streams, session persistence, and live Chart.js visualization.",
  },
  {
    title: "Backend & database engineering",
    body: "Prisma/PostgreSQL modeling, multi-tenant APIs, rate limiting, and integration proofs of concept.",
  },
  {
    title: "System design",
    body: "Thinking in layers — isolation, auth, API contracts, and how data moves through a product.",
  },
  {
    title: "DSA & interview preparation",
    body: "Strengthening algorithms, JavaScript fundamentals, and how browsers and backends actually behave.",
  },
];

export const githubRepos = [
  {
    name: "ecg-monitor-project",
    description:
      "Full-stack real-time ECG monitor with a React client and Express/Prisma server.",
    technology: "TypeScript",
    interesting:
      "WebSocket sample stream, PostgreSQL persistence for patients/sessions/samples, and live Chart.js traces.",
    href: "https://github.com/harshini5204/ecg-monitor-project",
    live: null,
  },
];

export const learning = [
  {
    title: "Data structures & algorithms",
    body: "Problem-solving patterns used in interviews and in production debugging.",
  },
  {
    title: "System design",
    body: "How to reason about APIs, data stores, isolation, and failure modes.",
  },
  {
    title: "Backend engineering",
    body: "Deeper service design on top of Node, Express, and relational modeling.",
  },
  {
    title: "JavaScript fundamentals",
    body: "Runtime behavior, async model, and language mechanics that leak into every layer.",
  },
  {
    title: "Browser internals",
    body: "Rendering, networking, and what the client is actually doing with your code.",
  },
  {
    title: "Web architecture",
    body: "Request paths, contracts, and the seams between frontend, API, and data.",
  },
];

export const education = {
  degree: "B.Tech in Artificial Intelligence & Data Science (Honours)",
  school: "Kamaraj College of Engineering and Technology",
  period: "2021 – 2025",
  note: "CGPA: 8.9 / 10",
};
