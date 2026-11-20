import type { WorkItem } from "@/lib/site";

const dir = "/images/projects/sadja";

export const sadja: WorkItem = {
  slug: "sadja-website",
  shortName: "Sadja",
  monogram: "Sj",
  accent: 2,
  status: "Live",
  role: "Lead engineer · Full stack",
  label: "Company website · CMS migration",
  title: "Sadja WebSolutions website",
  summary:
    "The rebuild of Sadja's own website, from WordPress to Next.js 16 and Payload CMS. Three languages, seven markets, 197 migrated posts and 542 redirects, so every old link still lands somewhere useful.",
  metric: "542",
  metricCaption: "Redirects from WordPress",
  stack: ["Next.js", "Payload CMS", "PostgreSQL", "TypeScript", "Tailwind CSS", "Docker"],
  year: "2026",
  cover: {
    src: `${dir}/cover.webp`,
    alt: "The Sadja home page, Uganda's partner for websites, apps and digital growth, with the French version in front",
    width: 1440,
    height: 1174,
  },
  logo: { src: `${dir}/logo.png`, fit: "cover" },
  detail: {
    headline: ["From WordPress to ", "Next.js", ", without losing the links."],
    intro:
      "Sadja WebSolutions is a software and digital agency in Kampala, and its website is where most new clients find it. The old site ran on WordPress with Elementor. I led the rebuild on Next.js 16 with Payload CMS: I designed the architecture, built the CMS, the routing for three languages and seven markets, and the migration that moved every post, author, image and URL across.",
    preview: "sadjawebsolutions.com · Home, live",
    client: "Sadja WebSolutions · in-house",
    team: "Lead engineer, with the Sadja team",
    duration: "Aug – Nov 2026",
    context:
      "The brief was a faster site the team could edit without a developer, in English, French and Swahili, for clients across East and Central Africa. The catch was search: years of blog posts and service pages already ranked, and a migration that broke their URLs would throw that away. I wrote the technical spec first, set up the project, the CMS and the locale routing, wrote the WordPress migration and the redirect map, and built most of the pages from the Figma designs.",
    responsibilities: ["Architecture & spec", "Payload CMS", "i18n routing", "WordPress migration", "Redirects & SEO", "Page builds"],
    highlights: [
      {
        title: "Every old link still works",
        body: "542 explicit 301 redirects from a map kept in the repo and checked in CI. 329 of the 363 WordPress URLs land on their own new page in one hop.",
      },
      {
        title: "Three languages, seven markets",
        body: "English, French and Swahili for Uganda, Tanzania, DR Congo, Kenya, Rwanda, Nigeria and Gabon, with translated slugs, reciprocal hreflang, and local currency and phone numbers.",
      },
      {
        title: "Content moved, not retyped",
        body: "Scripts moved 197 posts from Elementor HTML into the CMS editor, with their images, authors and categories. Old WordPress passwords still log in.",
      },
      {
        title: "Pages served without the database",
        body: "Pages are built static and refresh hourly. Publishing in the CMS clears exactly the pages it affects, and the build passes in CI with no database at all.",
      },
      {
        title: "Enquiries land in Zoho",
        body: "Every form creates a Zoho Desk ticket, and new prospects become CRM leads after the visitor gets a response. If delivery fails, the form keeps what they typed.",
      },
      {
        title: "Accessible in both themes",
        body: "A contrast pass took axe from 225 failures to zero across six key pages, in light and dark mode.",
      },
    ],
    facts: [
      { value: "542", label: "Redirects from WordPress" },
      { value: "197", label: "Posts migrated" },
      { value: "3 × 7", label: "Languages × markets" },
      { value: "61", label: "Service pages" },
    ],
    links: [{ label: "Visit sadjawebsolutions.com", href: "https://sadjawebsolutions.com" }],
    hero: {
      src: `${dir}/hero.webp`,
      alt: "The Sadja home page between the French version and the portfolio grid",
      width: 2880,
      height: 1088,
    },
    architecture: {
      summary:
        "One Next.js app with Payload CMS running inside it, on PostgreSQL and Redis, shipped as a single Docker image on Coolify. Media lives in Cloudflare R2, and enquiries go to Zoho.",
      nodes: [
        {
          name: "Website",
          tech: "Next.js 16 · React 19 · Tailwind CSS 4",
          points: [
            "One catch-all route; a proxy maps every public URL to its locale, market and page",
            "Static pages that refresh hourly, cleared on publish by cache tag",
            "Analytics loaded only after consent, without making pages dynamic",
          ],
          link: "Same process, no HTTP hop",
        },
        {
          name: "Payload CMS",
          tech: "Payload 3 · PostgreSQL · Lexical",
          points: [
            "Pages, services, blog, authors, projects, countries, media and form submissions",
            "Fields localized in English, French and Swahili",
            "SEO, redirects and form plugins, image sizes generated into R2 on upload",
          ],
          link: "Enquiries and chat",
        },
        {
          name: "Integrations",
          tech: "Zoho Desk · Zoho CRM · SalesIQ",
          points: [
            "Forms create a Desk ticket and a CRM lead",
            "A SalesIQ chat assistant on Claude with signed webhooks and a 4.5-second deadline",
            "Spam guard: honeypot, minimum fill time and per-IP limits",
          ],
        },
      ],
    },
    decisions: [
      {
        title: "Run the CMS inside the site",
        body: "The brief named Strapi in a separate service. Payload runs inside the Next.js app instead: one container, typed collections, and no network hop between the site and its content. I pinned its version exactly, because it ships breaking changes in minor releases.",
        impact: "One image and one deploy for the site and the CMS.",
      },
      {
        title: "Keep redirects in a file, not a table",
        body: "The redirect map is a file in the repo, compiled into the Next.js config and validated in CI. It can't drift, and it doesn't depend on the database being up.",
        impact: "Old URLs keep working even if the CMS is down.",
      },
      {
        title: "Put the locale and market in the cache key",
        body: "Every page renders internally at /locale/market/slug, so each variant is cached on its own. Language detection only suggests a switch and never redirects, so search engines always see the same page at the same URL.",
        impact: "Each variant caches and ranks on its own URL.",
      },
      {
        title: "Resize images once, at upload",
        body: "The server is a small VM. Payload generates every image size into R2 when a file is uploaded, and a custom loader serves those files, so the server never resizes images on a request.",
        impact: "No image processing on the server at request time.",
      },
    ],
    gallery: [
      {
        src: `${dir}/home-wide.webp`,
        alt: "Sadja home page: Uganda's partner for websites, apps and digital growth",
        width: 1800,
        height: 844,
        caption: "Home",
        wide: true,
      },
      {
        src: `${dir}/french-wide.webp`,
        alt: "The French home page: Votre partenaire web, apps & digital en Ouganda",
        width: 1800,
        height: 844,
        caption: "The same page in French",
        wide: true,
      },
      {
        src: `${dir}/services-wide.webp`,
        alt: "Innovative digital solutions: custom web design and app development cards",
        width: 1800,
        height: 844,
        caption: "Services on the home page",
        wide: true,
      },
      {
        src: `${dir}/reviews.webp`,
        alt: "Recognized for excellence: ratings on Clutch, Google, Trustpilot, DesignRush, GoodFirms and Sortlist",
        width: 920,
        height: 884,
        caption: "Review platforms",
      },
      {
        src: `${dir}/contact-form.webp`,
        alt: "Contact form that asks what the message is about, so it reaches the right team",
        width: 920,
        height: 884,
        caption: "Contact form, delivered to Zoho Desk",
      },
      {
        src: `${dir}/service-page-wide.webp`,
        alt: "Website design and development service page with a video and client logos",
        width: 1800,
        height: 844,
        caption: "One of 61 service pages",
        wide: true,
      },
      {
        src: `${dir}/portfolio-wide.webp`,
        alt: "Portfolio grid with K-Life, Hariss, Sunseed and other projects",
        width: 1800,
        height: 844,
        caption: "Portfolio",
        wide: true,
      },
      {
        src: `${dir}/blog-wide.webp`,
        alt: "Blog with search and topic filters",
        width: 1800,
        height: 844,
        caption: "Blog, migrated from WordPress",
        wide: true,
      },
      {
        src: `${dir}/ten-day-wide.webp`,
        alt: "Launch your business: the website in 10 days offer page",
        width: 1800,
        height: 844,
        caption: "The 10-day website offer",
        wide: true,
      },
    ],
    stackGroups: [
      { label: "Site", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Framer Motion"] },
      { label: "CMS & data", items: ["Payload 3", "PostgreSQL 16", "Redis", "Cloudflare R2", "Zod"] },
      { label: "Integrations", items: ["Zoho Desk", "Zoho CRM", "Zoho SalesIQ", "Claude API", "GA4"] },
      { label: "Delivery", items: ["Docker", "Coolify", "GitHub Actions", "node:test"] },
    ],
  },
};
