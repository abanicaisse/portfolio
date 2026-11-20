import { hariss } from "@/lib/work/hariss";
import { klife } from "@/lib/work/klife";
import { mukwano } from "@/lib/work/mukwano";

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
  /** Shown on project cards in place of the metric tile. */
  cover?: ProjectImage;
  /** The product's own icon, shown in place of the monogram. */
  logo?: ProjectLogo;
  detail: ProjectDetail;
}

export interface ProjectLogo {
  src: string;
  /** "cover" for app-icon artwork that fills the tile; "contain" pads a wordmark on white. */
  fit: "cover" | "contain";
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface ProjectGalleryImage extends ProjectImage {
  /** Wide shots span the full gallery row; the rest pair up side by side. */
  wide?: boolean;
}

export interface ArchitectureNode {
  name: string;
  tech: string;
  points: string[];
  /** How this layer talks to the next one, drawn as the connector below it. */
  link?: string;
}

export interface ProjectArchitecture {
  summary: string;
  nodes: ArchitectureNode[];
}

export interface ProjectDecision {
  title: string;
  body: string;
  /** The result, in one line. */
  impact: string;
}

export interface StackGroupDetail {
  label: string;
  items: string[];
}

export interface ProjectFact {
  value: string;
  label: string;
}

export interface ProjectHighlight {
  title: string;
  body: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectDetail {
  /** Headline split so the middle word can take the accent. */
  headline: [before: string, accent: string, after: string];
  intro: string;
  /** Caption for the hero preview. */
  preview: string;
  client: string;
  team: string;
  duration: string;
  context: string;
  responsibilities: string[];
  highlights: ProjectHighlight[];
  facts: ProjectFact[];
  links: ProjectLink[];
  /** Full-width hero shot; falls back to the drawn preview. */
  hero?: ProjectImage;
  architecture?: ProjectArchitecture;
  decisions?: ProjectDecision[];
  gallery?: ProjectGalleryImage[];
  stackGroups?: StackGroupDetail[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
}

export type StackGroup = "frontend" | "backend" | "infra";

export interface StackItem {
  name: string;
  /** Official logo, rendered on a white tile like the project marks. */
  logo: string;
  group: StackGroup;
}

export interface Capability {
  title: string;
  /** What the client gets, in one sentence. */
  pitch: string;
  points: string[];
  /** A number from a shipped project that backs the claim. */
  proof: { value: string; label: string; project: string; href: string };
}

export const profile = {
  name: "Aba Nicaisse",
  wordmark: "NICAISSE",
  role: "Lead Software Engineer",
  location: "Kampala, Uganda",
  timezone: "UTC+3",
  email: "abawandjovunicaise@gmail.com",
  phone: "+256 757 679 518",
  phoneHref: "+256757679518",
  whatsapp: "https://wa.me/256757679518",
  bio: "Lead software engineer in Kampala. I design and build web apps, mobile apps and the backends behind them, with TypeScript, React, React Native and Node.js.",
} as const;

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/abanicaisse", handle: "@abanicaisse" },
  { label: "LinkedIn", href: "https://linkedin.com/in/abanicaisse", handle: "in/abanicaisse" },
  { label: "X", href: "https://x.com/abanicaisse", handle: "@abanicaisse" },
];

export const work: WorkItem[] = [
  klife,
  hariss,
  mukwano,
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
    detail: {
      headline: ["The admin console that shipped a week ", "early", "."],
      intro:
        "Telex needed one place to run its messaging platform: users, channels, integrations and billing. I led the five-person frontend team that built it.",
      preview: "Admin dashboard · Users and channels",
      client: "HNG Tech · Telex",
      team: "5 frontend engineers",
      duration: "8 weeks",
      context:
        "The console had to land before the platform launch, with a team that had never worked together. I split the work into small, reviewable slices, set the component conventions on day one and reviewed every pull request.",
      responsibilities: ["Team lead", "Code review", "Architecture", "Performance"],
      highlights: [
        { title: "One component system", body: "A shared set of typed table, form and dialog primitives, so five engineers built screens that looked like one." },
        { title: "30% faster loads", body: "Route-level code splitting, server-rendered shells and trimmed dependencies took 30% off the load time." },
        { title: "Zero critical bugs", body: "Typed API clients, review checklists and preview deploys on every branch kept regressions out of main." },
        { title: "Role-aware screens", body: "Navigation, actions and data scope adapt to the signed-in admin, checked on the server as well as in the UI." },
        { title: "Fast data tables", body: "Server-side pagination, filters and sorting kept large user and channel lists responsive." },
        { title: "Ahead of schedule", body: "Short pull requests and a clear definition of done got the console out a week before the deadline." },
      ],
      facts: [
        { value: "−30%", label: "Load time" },
        { value: "5", label: "Engineers led" },
        { value: "0", label: "Critical bugs at launch" },
        { value: "1 wk", label: "Ahead of deadline" },
      ],
      links: [],
    },
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
    detail: {
      headline: ["An IDE students can ", "program", " hardware with."],
      intro:
        "STEMSEL students write code in the browser and flash it to IoT chips on their desks. I worked on the editor and the interface around it, and made it load faster.",
      preview: "Online IDE · Editor and device panel",
      client: "STEMSEL Foundation",
      team: "Distributed, 3 time zones",
      duration: "1 year",
      context:
        "The IDE runs on school computers that are often old and on slow networks. Every feature had to stay light, and the interface had to make sense to students writing their first program.",
      responsibilities: ["Editor features", "UI", "Performance", "Async collaboration"],
      highlights: [
        { title: "Editor for beginners", body: "Clear errors, sensible defaults and a layout that keeps the code and the device side by side." },
        { title: "Lighter first load", body: "Deferred the heavy editor and device tooling until needed, so the IDE opens quickly on older machines." },
        { title: "Device feedback", body: "Connection and upload states are visible at every step, so students know what the chip is doing." },
        { title: "Works on school hardware", body: "Tested against low-end laptops and slow connections, not only a developer machine." },
        { title: "Three time zones", body: "Written specs and async reviews kept work moving across a team that rarely overlapped." },
        { title: "Used in classrooms", body: "More than 200 students use the IDE to program their STEMSEL chips." },
      ],
      facts: [
        { value: "200+", label: "Active students" },
        { value: "3", label: "Time zones" },
        { value: "IoT", label: "Chips programmed from the browser" },
        { value: "1 yr", label: "On the project" },
      ],
      links: [],
    },
  },
  {
    slug: "sadja-client-platforms",
    shortName: "Sadja",
    monogram: "Sd",
    accent: 3,
    status: "Ongoing",
    role: "Lead software engineer",
    label: "Client work",
    title: "Client platforms at Sadja",
    summary:
      "Web apps, dashboards and APIs for clients, delivered on schedule. I own timelines, code review and deployment.",
    metric: "5+",
    metricCaption: "Projects led",
    stack: ["Next.js", "Zustand", "Node.js", "Docker"],
    year: "2025 —",
    detail: {
      headline: ["Client platforms, delivered ", "on schedule", "."],
      intro:
        "At Sadja WebSolutions I lead engineering across client web apps, mobile apps and APIs, from the first estimate to the production deploy.",
      preview: "Client work · Dashboards and web apps",
      client: "Sadja WebSolutions",
      team: "Cross-functional, per client",
      duration: "2025 — Now",
      context:
        "Each client brings a different domain and deadline. I own the frontend plan, the timeline and the quality bar, so every project ships the same way: typed, reviewed and deployed with care.",
      responsibilities: ["Frontend lead", "Timelines", "Code review", "Deployment"],
      highlights: [
        { title: "Estimate to deploy", body: "I scope the frontend, plan the milestones and own delivery through to production." },
        { title: "Shared foundations", body: "A common Next.js setup, component library and conventions, so each new project starts ahead." },
        { title: "Predictable state", body: "Zustand stores with typed actions keep complex dashboards easy to reason about." },
        { title: "Reviewed, always", body: "Every change goes through review, with tests where the logic is worth protecting." },
        { title: "Containerised deploys", body: "Docker images deployed on AWS and Coolify, with preview environments for client sign-off." },
        { title: "On schedule", body: "Five-plus projects led and delivered against the dates agreed with each client." },
      ],
      facts: [
        { value: "5+", label: "Projects led" },
        { value: "100%", label: "Delivered on schedule" },
        { value: "2", label: "Hosting targets: AWS, Coolify" },
        { value: "2025", label: "Leading since" },
      ],
      links: [],
    },
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
    detail: {
      headline: ["A portfolio that is ", "built", " like a product."],
      intro:
        "This site. A Next.js App Router frontend with Payload CMS on Postgres, rendered on the server, with light, dark and auto themes.",
      preview: "This site · Home and orbit hero",
      client: "Personal",
      team: "Solo",
      duration: "Ongoing",
      context:
        "I wanted the portfolio to hold the same standard as client work: typed content, accessible contrast in both themes and as little client JavaScript as the design allows.",
      responsibilities: ["Design", "Frontend", "CMS", "Deployment"],
      highlights: [
        { title: "Server first", body: "React Server Components render every page. Only the orbit hero, theme toggle and share buttons hydrate." },
        { title: "Payload CMS", body: "Posts and media live in Payload on Postgres, edited from the built-in admin." },
        { title: "Three themes", body: "Light, dark and auto, driven by HSL tokens so every colour has a checked contrast pair." },
        { title: "AA contrast", body: "Brand purple is tuned per theme: 7.2:1 for fills in light mode, 8.5:1 for text in dark mode." },
        { title: "Motion with restraint", body: "Scroll reveals, the orbit field and the section rail all respect reduced-motion settings." },
        { title: "Typed end to end", body: "Strict TypeScript, generated Payload types and no any in the codebase." },
      ],
      facts: [
        { value: "RSC", label: "Server rendered" },
        { value: "3", label: "Themes" },
        { value: "AA", label: "Contrast, both themes" },
        { value: "0", label: "Uses of any" },
      ],
      links: [{ label: "View source", href: "https://github.com/abanicaisse/portfolio" }],
    },
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Lead Software Engineer",
    company: "Sadja WebSolutions",
    location: "Kampala",
    period: "May 2025 — Now",
    summary:
      "I lead engineering on the agency's client projects across web, mobile and backend, from architecture and estimates to code review, CI and deploys on AWS and Coolify. Shipped KLife for Krystal Water, and the Hariss International and Mukwano platforms.",
  },
  {
    role: "Frontend Team Lead",
    company: "HNG Tech",
    location: "Remote",
    period: "Jun — Aug 2024",
    summary:
      "Led five engineers building the admin dashboard for the Telex messaging platform. Cut load time by 30% and delivered a week before the deadline with zero critical bugs.",
  },
  {
    role: "IoT / Frontend Engineer",
    company: "STEMSEL Foundation",
    location: "Remote",
    period: "Jun — Aug 2023",
    summary:
      "Built features for a browser IDE that 200+ students use to program IoT chips, and cut its loading time by 10%, working across three time zones.",
  },
];

export const stack: StackItem[] = [
  { name: "TypeScript", logo: "/images/stack/typescript.svg", group: "frontend" },
  { name: "React & React Native", logo: "/images/stack/react.svg", group: "frontend" },
  { name: "Next.js", logo: "/images/stack/nextjs.svg", group: "frontend" },
  { name: "Expo", logo: "/images/stack/expo.svg", group: "frontend" },
  { name: "Tailwind CSS", logo: "/images/stack/tailwind.svg", group: "frontend" },
  { name: "TanStack Query", logo: "/images/stack/tanstack-query.svg", group: "frontend" },
  { name: "Node.js", logo: "/images/stack/nodejs.svg", group: "backend" },
  { name: "NestJS", logo: "/images/stack/nestjs.svg", group: "backend" },
  { name: "PostgreSQL", logo: "/images/stack/postgresql.svg", group: "backend" },
  { name: "Prisma", logo: "/images/stack/prisma.svg", group: "backend" },
  { name: "Redis", logo: "/images/stack/redis.svg", group: "backend" },
  { name: "Strapi", logo: "/images/stack/strapi.svg", group: "backend" },
  { name: "Socket.io", logo: "/images/stack/socketio.svg", group: "backend" },
  { name: "Docker", logo: "/images/stack/docker.svg", group: "infra" },
  { name: "AWS", logo: "/images/stack/aws.svg", group: "infra" },
  { name: "Coolify", logo: "/images/stack/coolify.svg", group: "infra" },
  { name: "Cloudflare", logo: "/images/stack/cloudflare.svg", group: "infra" },
  { name: "GitHub Actions", logo: "/images/stack/github-actions.svg", group: "infra" },
];

export const stackGroupLabels: Record<StackGroup, string> = {
  frontend: "Frontend",
  backend: "Backend",
  infra: "Infra",
};

export const capabilities: Capability[] = [
  {
    title: "Web platforms",
    pitch: "Websites and web apps that load fast, rank on Google, and that your team can update without calling a developer.",
    points: [
      "Next.js, rendered on the server for speed and SEO",
      "A CMS your marketing team can run on its own",
      "Changes live seconds after they are published",
    ],
    proof: { value: "96", label: "Lighthouse performance", project: "Hariss International", href: "/projects/hariss-international" },
  },
  {
    title: "Mobile apps",
    pitch: "iOS and Android apps from a single codebase that feel native and keep working when the network doesn't.",
    points: [
      "React Native and Expo, released to both stores",
      "Offline data, background tracking and push notifications",
      "Native touches: Live Activities, deep links, OTP autofill",
    ],
    proof: { value: "7 wks", label: "From Figma to the app stores", project: "KLife", href: "/projects/klife" },
  },
  {
    title: "Backends & real-time",
    pitch: "APIs and live features that stay fast under load, with security and data integrity built in from day one.",
    points: [
      "NestJS and Node.js APIs on PostgreSQL",
      "Redis, queues and WebSockets for live updates",
      "Secure sign-in, roles and rate limiting",
    ],
    proof: { value: "3 s", label: "Live leaderboard refresh on race day", project: "KLife", href: "/projects/klife" },
  },
  {
    title: "Technical leadership",
    pitch: "I can lead the build from the first estimate to launch day, and keep everyone informed along the way.",
    points: [
      "Architecture, estimates and delivery plans",
      "Code review, CI/CD and Docker deployments",
      "Clear updates for clients, in English or French",
    ],
    proof: { value: "1 wk", label: "Ahead of deadline, leading 5 engineers", project: "Telex", href: "/projects/telex-admin" },
  },
];

/** Clients and teams I have built for, shown in the strip under the hero. */
export const marqueeItems: string[] = [
  "Krystal Water",
  "Hariss International",
  "Mukwano Group",
  "Rotary Kampala Cancer Run",
  "Sadja WebSolutions",
  "HNG Tech · Telex",
  "STEMSEL Foundation",
];
