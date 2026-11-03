export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export type WorkStatus = "Live" | "Shipped" | "Ongoing";
export type OrbitAccent = 1 | 2 | 3 | 4;

export interface WorkItem {
  slug: string;
  label: string;
  monogram: string;
  shortName: string;
  accent: OrbitAccent;
  status: WorkStatus;
  role: string;
  title: string;
  summary: string;
  metric: string;
  metricCaption: string;
  stack: string[];
  year: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
}

export type StackGroup = "frontend" | "backend" | "infra" | "quality";

export interface StackItem {
  name: string;
  code: string;
  group: StackGroup;
}

export interface Principle {
  key: string;
  title: string;
  body: string;
}

export interface SectionMeta {
  id: string;
  label: string;
}

export const profile = {
  name: "Aba Nicaisse",
  wordmark: "NICAISSE",
  role: "Frontend Engineer",
  location: "Kampala, Uganda",
  timezone: "UTC+3",
  email: "abawandjovunicaise@gmail.com",
  bio: "Frontend engineer based in Kampala. I lead frontend at Sadja WebSolutions, building React and Next.js products from schema to screen.",
} as const;

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/abanicaisse", handle: "@abanicaisse" },
  { label: "LinkedIn", href: "https://linkedin.com/in/abanicaisse", handle: "in/abanicaisse" },
  { label: "X", href: "https://x.com/abanicaisse", handle: "@abanicaisse" },
];

export const homeSections: SectionMeta[] = [
  { id: "top", label: profile.wordmark },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "approach", label: "Approach" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

export const work: WorkItem[] = [
  {
    slug: "telex-admin",
    shortName: "Telex",
    monogram: "Tx",
    accent: 1,
    status: "Shipped",
    role: "Frontend lead",
    label: "Dashboard",
    title: "Telex admin dashboard",
    summary:
      "Admin console for the Telex messaging platform. Led a team of five frontend engineers and shipped a week ahead of schedule with zero critical bugs.",
    metric: "−30%",
    metricCaption: "Load time",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    year: "2024",
  },
  {
    slug: "stemsel-ide",
    shortName: "STEMSEL",
    monogram: "St",
    accent: 2,
    status: "Shipped",
    role: "Frontend engineer",
    label: "Developer tool",
    title: "STEMSEL online IDE",
    summary:
      "Browser IDE students use to program STEMSEL IoT chips. Worked on the editor and UI, and trimmed its loading time.",
    metric: "200+",
    metricCaption: "Active users",
    stack: ["JavaScript", "IoT", "Web"],
    year: "2023",
  },
  {
    slug: "sadja-client-platforms",
    shortName: "Sadja",
    monogram: "Sd",
    accent: 3,
    status: "Ongoing",
    role: "Lead frontend engineer",
    label: "Client work",
    title: "Client platforms at Sadja",
    summary:
      "Web apps, dashboards and APIs for clients, delivered on schedule. I own timelines, code review and deployment.",
    metric: "5+",
    metricCaption: "Projects led",
    stack: ["Next.js", "Zustand", "Node.js", "Docker"],
    year: "2025 —",
  },
  {
    slug: "portfolio",
    shortName: "Portfolio",
    monogram: "Nc",
    accent: 4,
    status: "Live",
    role: "Design & build",
    label: "This site",
    title: "This portfolio",
    summary:
      "Next.js App Router with Payload CMS on Postgres. Server-rendered by default, with light, dark and auto themes.",
    metric: "RSC",
    metricCaption: "Server first",
    stack: ["Next.js", "Payload", "Postgres", "Vercel"],
    year: "2026",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Lead Frontend Engineer",
    company: "Sadja WebSolutions",
    location: "Kampala",
    period: "2025 — Now",
    summary:
      "Lead frontend across 5+ client projects. Own timelines, code review, testing and deploys on AWS and Coolify.",
  },
  {
    role: "Frontend Team Lead",
    company: "HNG Tech",
    location: "Remote",
    period: "2024",
    summary:
      "Led five engineers building the Telex admin dashboard. Cut load time by 30% and shipped a week early.",
  },
  {
    role: "IoT / Frontend Engineer",
    company: "STEMSEL Foundation",
    location: "Remote",
    period: "2023",
    summary:
      "Built features for an online IDE used by 200+ students to program IoT chips, working across three time zones.",
  },
];

export const stack: StackItem[] = [
  { name: "TypeScript", code: "Ts", group: "frontend" },
  { name: "React", code: "Re", group: "frontend" },
  { name: "Next.js", code: "Nx", group: "frontend" },
  { name: "React Native", code: "Rn", group: "frontend" },
  { name: "Tailwind CSS", code: "Tw", group: "frontend" },
  { name: "Zustand", code: "Zu", group: "frontend" },
  { name: "Node.js", code: "No", group: "backend" },
  { name: "NestJS", code: "Ne", group: "backend" },
  { name: "Express", code: "Ex", group: "backend" },
  { name: "PostgreSQL", code: "Pg", group: "backend" },
  { name: "Prisma", code: "Pr", group: "backend" },
  { name: "Redis", code: "Rd", group: "backend" },
  { name: "Docker", code: "Dk", group: "infra" },
  { name: "AWS", code: "Aw", group: "infra" },
  { name: "GitHub Actions", code: "Ga", group: "infra" },
  { name: "Jest", code: "Je", group: "quality" },
];

export const stackGroupLabels: Record<StackGroup, string> = {
  frontend: "Frontend",
  backend: "Backend",
  infra: "Infra",
  quality: "Quality",
};

export const principles: Principle[] = [
  {
    key: "A",
    title: "Small, reviewed changes",
    body: "Short feedback loops beat big reveals. Ten reviewed pull requests over one heroic one.",
  },
  {
    key: "B",
    title: "Performance is a feature",
    body: "I measure before I optimise, and Core Web Vitals are part of done.",
  },
  {
    key: "C",
    title: "Clear over clever",
    body: "Readable code, written-down decisions, and updates non-engineers can follow.",
  },
];

export const marqueeItems: string[] = [
  "Next.js App Router",
  "Accessible by default",
  "Type-safe end to end",
  "Design systems",
  "Performance budgets",
  "Code review",
  "CI/CD",
  "Team leadership",
];
