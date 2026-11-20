import type { WorkItem } from "@/lib/site";

const dir = "/images/projects/genie-sante";

export const genieSante: WorkItem = {
  slug: "genie-sante",
  shortName: "Génie Santé",
  monogram: "Gs",
  accent: 3,
  status: "Shipped",
  role: "Lead engineer · Web platform",
  label: "Health platform · Web app",
  title: "Génie Santé",
  summary:
    "Web platform for a digital health startup in the DR Congo: AI symptom checks, doctor consultations and mobile money payments. I led the build: the French marketing site, onboarding and seven role dashboards in one Next.js 16 app, deployed on every merge.",
  metric: "7",
  metricCaption: "Role dashboards",
  stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack", "Docker"],
  year: "2026",
  cover: {
    src: `${dir}/cover.webp`,
    alt: "The Génie Santé home page, Votre santé, notre intelligence, with the patient app on a phone in front",
    width: 1440,
    height: 1174,
  },
  logo: { src: `${dir}/logo.png`, fit: "contain" },
  detail: {
    headline: ["Seven dashboards, ", "one", " Next.js app."],
    intro:
      "Génie Santé gives people in the Democratic Republic of Congo a free AI symptom check and a route to a certified doctor, by web, mobile app, WhatsApp, or a USSD code on phones without internet. At Sadja WebSolutions I led the build of its web platform: the French marketing site, sign-up and onboarding for seven account types, and dashboards for patients, doctors, hospitals, schools, insurers, labs and the Génie Santé team.",
    preview: "Génie Santé · Patient dashboard and mobile app",
    client: "Génie Santé RDC · Sadja WebSolutions",
    team: "2 engineers, I led",
    duration: "7 weeks · Feb – Mar 2026",
    context:
      "The design covered a public site, an onboarding flow per account type and a dashboard for every role, all in French, with payments by M-Pesa, Airtel Money and Orange Money. I set up the project and the delivery pipeline, then built the marketing site, sign-up, student onboarding and the admin and doctor dashboards. A second engineer built the patient and hospital dashboards, and I reviewed and merged every pull request.",
    responsibilities: ["Tech lead", "Project setup", "CI/CD & Docker", "Marketing site", "Onboarding", "Dashboards", "Code review"],
    highlights: [
      {
        title: "Seven roles, one app",
        body: "Patients, doctors, hospitals, schools, insurers, labs and admins each get their own layout and navigation, built from one shared set of components.",
      },
      {
        title: "Built for how people pay there",
        body: "Checkout and wallet flows for M-Pesa, Airtel Money and Orange Money, and doctor payouts to mobile money.",
      },
      {
        title: "A symptom check in four steps",
        body: "Patients describe what they feel in a guided four-step flow and get a result with an urgency level, then a doctor if they need one.",
      },
      {
        title: "Onboarding that survives a reload",
        body: "The nine-step student sign-up verifies the phone by one-time code, asks for a guardian and consent, and keeps progress if the page reloads.",
      },
      {
        title: "Every merge deploys itself",
        body: "CI checks formatting, lint and the build on every pull request. Merging to main deploys through Coolify and reports the result on the commit.",
      },
      {
        title: "One way to build a form",
        body: "A single form hook on TanStack Form, with fields registered once and Zod schemas that return errors in French.",
      },
    ],
    facts: [
      { value: "85", label: "Pages and routes" },
      { value: "7", label: "Role dashboards" },
      { value: "326", label: "Components" },
      { value: "7 wks", label: "First commit to full platform" },
    ],
    links: [],
    hero: {
      src: `${dir}/hero.webp`,
      alt: "The Génie Santé patient dashboard between two phones showing the mobile site and the patient app",
      width: 2880,
      height: 1088,
    },
    architecture: {
      summary:
        "One Next.js 16 app with three route groups: the public site, onboarding, and the role dashboards. Pages are Server Components unless they need interaction. The screens run on typed sample data, and the TanStack Query client is set up for the API to plug in.",
      nodes: [
        {
          name: "Marketing site",
          tech: "Next.js 16 · React 19 · Tailwind CSS 4",
          points: [
            "Services, pricing per plan and billing period, pages for doctors, institutions and enterprises",
            "Scroll-driven How it works and an infinite team carousel in Framer Motion",
            "Sign-up with seven account types",
          ],
          link: "Sign-up leads into onboarding",
        },
        {
          name: "Onboarding and dashboards",
          tech: "App Router · TanStack · shadcn/ui",
          points: [
            "A layout and navigation per role, one component set",
            "Symptom analysis, doctors, medications, vaccinations, nearby clinics on a Leaflet map, wallet",
            "Doctor consultations, admin revenue and payouts, hospital pre-triage",
          ],
          link: "Built into one Docker image",
        },
        {
          name: "Delivery",
          tech: "GitHub Actions · Docker · Coolify",
          points: [
            "Format, lint and build on every pull request, labelled pass or fail",
            "Multi-stage Alpine image running the standalone Next.js server as a non-root user",
            "Merge to main triggers Coolify and writes the deploy status back to the commit",
          ],
        },
      ],
    },
    decisions: [
      {
        title: "One app with a layout per role",
        body: "Seven audiences could have meant seven apps. Route groups separate the public site from the dashboards, and each role gets its own layout, while all of them share one component set, one build and one deploy.",
        impact: "85 routes from one codebase.",
      },
      {
        title: "Put the design system in the repo",
        body: "Design-system pages inside the app document the tokens, form fields and components, and the contributor guide points people and AI coding agents to them before they build a screen.",
        impact: "Screens from both engineers use the same parts.",
      },
      {
        title: "Make deploys visible in GitHub",
        body: "After a merge, the workflow triggers Coolify, polls its API for up to ten minutes and sets the commit status to pending, then success or failure. Deploys run one at a time and are never cancelled halfway.",
        impact: "Every commit on main shows whether it is live.",
      },
      {
        title: "One lockfile for Mac and Alpine",
        body: "Native binaries failed to install in the Alpine production image. I configured pnpm to resolve binaries for both glibc and musl and regenerated the lockfile.",
        impact: "Laptops and production install the same dependencies.",
      },
    ],
    gallery: [
      {
        src: `${dir}/home-wide.webp`,
        alt: "Génie Santé home page: Votre santé, notre intelligence, with download links and the app preview",
        width: 1800,
        height: 844,
        caption: "Marketing site, in French",
        wide: true,
      },
      {
        src: `${dir}/mobile-home.webp`,
        alt: "The Génie Santé site on a phone held in a hand",
        width: 920,
        height: 884,
        caption: "Mobile site design",
      },
      {
        src: `${dir}/mobile-dashboard.webp`,
        alt: "The patient app home screen with a health chart and recent activity, on a phone",
        width: 920,
        height: 884,
        caption: "Patient app design",
      },
      {
        src: `${dir}/roles-wide.webp`,
        alt: "Sign-up screen with account types: patient, family, doctor, student, school, hospital and enterprise",
        width: 1800,
        height: 844,
        caption: "Sign-up: seven account types",
        wide: true,
      },
      {
        src: `${dir}/student-wide.webp`,
        alt: "Student onboarding welcome step: Accès santé étudiant",
        width: 1800,
        height: 844,
        caption: "Student onboarding, nine steps",
        wide: true,
      },
      {
        src: `${dir}/patient-wide.webp`,
        alt: "Patient dashboard with a new analysis banner, health chart, recent diagnoses and doctor search",
        width: 1800,
        height: 844,
        caption: "Patient dashboard",
        wide: true,
      },
      {
        src: `${dir}/doctor-wide.webp`,
        alt: "Doctor dashboard with patients today, queue, AI suggestions and the day's schedule",
        width: 1800,
        height: 844,
        caption: "Doctor dashboard: queue with AI suggestions",
        wide: true,
      },
      {
        src: `${dir}/consult-wide.webp`,
        alt: "Consultation screen with patient info, AI analysis, actions and a chat with the patient",
        width: 1800,
        height: 844,
        caption: "Consultation: patient file, AI analysis and chat",
        wide: true,
      },
      {
        src: `${dir}/admin-wide.webp`,
        alt: "Admin dashboard with active users, analyses, doctors, revenue, top conditions and recent activity",
        width: 1800,
        height: 844,
        caption: "Admin dashboard",
        wide: true,
      },
      {
        src: `${dir}/hospital-wide.webp`,
        alt: "Hospital dashboard with incoming pre-triaged patients and ward load",
        width: 1800,
        height: 844,
        caption: "Hospital dashboard: pre-triage and ward load",
        wide: true,
      },
      {
        src: `${dir}/wallet-wide.webp`,
        alt: "Patient wallet with balance, top-up and withdraw, and transactions including an M-Pesa top-up",
        width: 1800,
        height: 844,
        caption: "Wallet with mobile money top-ups",
        wide: true,
      },
    ],
    stackGroups: [
      { label: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "Framer Motion"] },
      { label: "Data & forms", items: ["TanStack Query", "TanStack Form", "TanStack Table", "Zod", "Zustand", "Recharts", "Leaflet"] },
      { label: "Delivery", items: ["Docker", "GitHub Actions", "Coolify", "Husky", "commitlint"] },
    ],
  },
};
