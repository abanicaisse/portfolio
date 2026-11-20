import type { WorkItem } from "@/lib/site";

const dir = "/images/projects/hariss-international";

export const hariss: WorkItem = {
  slug: "hariss-international",
  shortName: "Hariss",
  monogram: "Hi",
  accent: 2,
  status: "Live",
  role: "Lead engineer · Full stack",
  label: "Corporate site · Recruitment",
  title: "Hariss International",
  summary:
    "A new digital home for the maker of Riham, Oner and Sky View: a fast, editor-run Next.js site on Strapi 5, with a recruitment platform built in for HR.",
  metric: "96",
  metricCaption: "Lighthouse performance",
  stack: ["Next.js", "Strapi 5", "TanStack", "PostgreSQL", "Cloudflare R2"],
  year: "2026",
  cover: {
    src: `${dir}/cover.webp`,
    alt: "The Hariss International home page, What's Up campaign, on a desktop monitor",
    width: 1440,
    height: 1174,
  },
  logo: { src: `${dir}/logo.svg`, fit: "cover" },
  detail: {
    headline: ["Great brands, one ", "digital home", "."],
    intro:
      "Hariss International is the Ugandan food and beverage maker behind Riham, Oner, Sky View and other brands enjoyed across East Africa. I built its new website and the platform behind it: a brand-led site the marketing team runs on its own, and a recruitment system where HR publishes roles, reviews candidates and exports shortlists.",
    preview: "Hariss International · Home, brands and stories",
    client: "Hariss International · Sadja WebSolutions",
    team: "Lead engineer, with Sadja's design team",
    duration: "6 months",
    context:
      "The design is built around large product photography and motion, and it had to keep that quality after handover, with marketing editing every word and image. HR wanted to stop running hiring through email without taking on another system to maintain. And the site had to stay fast and online through content changes, CMS deploys and form spam.",
    responsibilities: ["Architecture", "Frontend", "CMS & content model", "Recruitment platform", "SEO & performance"],
    highlights: [
      {
        title: "Fast on every screen",
        body: "Server-rendered pages, AVIF and WebP imagery and tag-based caching: 96 Lighthouse performance on desktop, a 1.1 s largest paint and zero layout shift.",
      },
      {
        title: "Changes live in seconds",
        body: "Publishing in the CMS refreshes only the pages that use that content. Editors see their change right away, and nothing else is rebuilt.",
      },
      {
        title: "Online when the CMS isn't",
        body: "Every section has a fallback and failed reads are never cached, so a CMS restart or outage never shows a visitor a broken page.",
      },
      {
        title: "Hiring, built into the platform",
        body: "HR posts roles, screens and shortlists candidates, and exports to Excel or a full archive of CVs from a private dashboard on the careers subdomain.",
      },
      {
        title: "A design editors can't break",
        body: "Every field is sized to the layout and every image slot checks the file as it is picked. Marketing edits freely and the pages keep their polish.",
      },
      {
        title: "Built to be found",
        body: "100 Lighthouse SEO. Editors control titles, descriptions and structured data per page, and the sitemap follows each page's indexing settings.",
      },
    ],
    facts: [
      { value: "96", label: "Lighthouse performance · desktop" },
      { value: "1.1 s", label: "Largest paint · desktop" },
      { value: "100", label: "Lighthouse SEO" },
      { value: "0", label: "Layout shift" },
    ],
    links: [{ label: "Visit harissint.com", href: "https://harissint.com" }],
    hero: {
      src: `${dir}/hero.webp`,
      alt: "The Hariss website on a laptop held over a sky background: Great Brands, One Digital Home",
      width: 2880,
      height: 1088,
    },
    architecture: {
      summary:
        "Strapi is the single source of truth for marketing content and for hiring. Next.js renders on the server, caches every read under a tag, and lets the CMS decide when that tag goes stale.",
      nodes: [
        {
          name: "Visitors & HR",
          tech: "Public site · careers subdomain · HR dashboard",
          points: [
            "Brand, story, sustainability and careers pages for the public",
            "Careers move to their own subdomain with a single setting",
            "The HR dashboard is private, never cached and never indexed",
          ],
          link: "Edge proxy: caching rules, host routing, session refresh",
        },
        {
          name: "Next.js app",
          tech: "Next.js · React · TanStack Query & Form · Zod",
          points: [
            "Pages fetch on the server and hand their data to interactive sections without a second request",
            "One cached, tagged data layer for every CMS read",
            "Server Actions for applications and every HR operation",
          ],
          link: "REST, with webhooks back for revalidation",
        },
        {
          name: "Strapi CMS",
          tech: "Strapi 5 · 29 content types · custom recruitment API",
          points: [
            "Each endpoint returns exactly the data its page needs",
            "Recruitment API with HR-only access rules",
            "Expired roles unpublish themselves on a schedule",
          ],
          link: "Database, storage and email",
        },
        {
          name: "Infrastructure",
          tech: "PostgreSQL · Cloudflare R2 · Microsoft 365",
          points: [
            "Media on Cloudflare R2, optimised per device by Next.js",
            "Transactional email through the client's Microsoft 365 tenant",
            "Both apps deployed on Coolify, with PostgreSQL alongside",
          ],
        },
      ],
    },
    decisions: [
      {
        title: "Never cache a failure",
        body: "The CMS restarts on every deploy. Failed reads now skip the cache, the last good version keeps serving, and any page that had to fall back retries within a minute instead of an hour.",
        impact: "Deploys and CMS downtime are invisible to visitors.",
      },
      {
        title: "Revalidate by content, not by timer",
        body: "Every read is cached under a tag for its content type. A CMS webhook clears exactly those tags when something is published, with a timer only as a backstop.",
        impact: "Instant updates for editors, with almost every request served from cache.",
      },
      {
        title: "One source of truth for hiring",
        body: "I weighed a separate database for the HR platform and chose to extend Strapi with a custom recruitment API instead, so jobs and candidates live in one place.",
        impact: "No sync jobs, no duplicated data, one system for the client to run.",
      },
      {
        title: "One identity for CMS and HR",
        body: "HR signs in with their CMS accounts, so blocking a user or resetting a password applies everywhere. Tokens are sealed in an encrypted, server-only cookie and refreshed at the edge.",
        impact: "Access is managed in one place, and no token is ever exposed to browser code.",
      },
      {
        title: "Applications that always arrive",
        body: "Files are verified by their real format, duplicate submissions are blocked, failed attempts clean up after themselves, and each application is stored in the CMS and emailed to HR.",
        impact: "Every candidate reaches HR, even if one channel fails.",
      },
      {
        title: "A layout that scales to any monitor",
        body: "The design is built in relative units against its 1520 px canvas, and the root size grows with the viewport above that. One rule scales the whole site on large displays.",
        impact: "The design keeps its proportions from laptop to large monitor, with no extra breakpoints to maintain.",
      },
    ],
    gallery: [
      {
        src: `${dir}/overview-wide.webp`,
        alt: "Several Hariss pages side by side: home, brands, about and sustainability",
        width: 1800,
        height: 844,
        caption: "Home, brands, about and sustainability",
        wide: true,
      },
      {
        src: `${dir}/identity-b.webp`,
        alt: "The Hariss hero: A world of brands, Home of Quality Brands",
        width: 920,
        height: 884,
        caption: "A world of brands",
      },
      {
        src: `${dir}/experience-a.webp`,
        alt: "The Hariss brands grid open on a laptop",
        width: 920,
        height: 884,
        caption: "The brand catalogue",
      },
      {
        src: `${dir}/challenge-wide.webp`,
        alt: "The visitor navigation and user-flow map for the Hariss site",
        width: 1800,
        height: 844,
        caption: "Visitor navigation and user flows, mapped before the build",
        wide: true,
      },
      {
        src: `${dir}/approach-a.webp`,
        alt: "The Oner brand page on a phone over green ridges",
        width: 920,
        height: 884,
        caption: "Brand pages on mobile",
      },
      {
        src: `${dir}/approach-b.webp`,
        alt: "The Hariss snacks hero, Sweeten Every Moment, on a phone lying on grass",
        width: 920,
        height: 884,
        caption: "Snacks hero on mobile",
      },
      {
        src: `${dir}/story-wide.webp`,
        alt: "The Hariss journey timeline from 1999, with a Riham biscuit pack",
        width: 1800,
        height: 844,
        caption: "Our journey, managed by editors",
        wide: true,
      },
      {
        src: `${dir}/identity-a.webp`,
        alt: "Type specimen for Aptos Narrow on the Hariss blue",
        width: 920,
        height: 884,
        caption: "Typography",
      },
      {
        src: `${dir}/experience-b.webp`,
        alt: "A Hariss story about Oner Pineapple on a laptop",
        width: 920,
        height: 884,
        caption: "Stories and articles",
      },
      {
        src: `${dir}/impact-wide.webp`,
        alt: "The Hariss sustainability section: Better Business, Better Tomorrow",
        width: 1800,
        height: 844,
        caption: "Sustainability",
        wide: true,
      },
    ],
    stackGroups: [
      {
        label: "Frontend",
        items: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn/ui", "Framer Motion"],
      },
      {
        label: "Data & forms",
        items: ["TanStack Query", "TanStack Form", "TanStack Table", "Zod", "Tiptap"],
      },
      {
        label: "CMS",
        items: ["Strapi 5", "PostgreSQL", "Cloudflare R2"],
      },
      {
        label: "Platform",
        items: ["Microsoft Graph", "Encrypted sessions (JWE)", "Coolify", "GitHub Actions"],
      },
    ],
  },
};
