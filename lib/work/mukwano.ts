import type { WorkItem } from "@/lib/site";

const dir = "/images/projects/mukwano";

export const mukwano: WorkItem = {
  slug: "mukwano",
  shortName: "Mukwano",
  monogram: "Mk",
  accent: 3,
  status: "Live",
  role: "Lead frontend engineer",
  label: "Corporate site · Catalogue",
  title: "Mukwano Group",
  summary:
    "The corporate site and product catalogue for Mukwano Group: seven divisions and 25 consumer brands, from Nomi and Roki to Sunseed. Editors run all of it from Strapi, and every change is live in seconds.",
  metric: "25",
  metricCaption: "Brands, one catalogue",
  stack: ["Next.js", "Strapi 5", "Tailwind", "Redis", "Docker"],
  year: "2025 — 2026",
  cover: {
    src: `${dir}/cover.webp`,
    alt: "The Mukwano home page with the Sunseed hero, tilted over green hills",
    width: 1440,
    height: 1174,
  },
  logo: { src: `${dir}/logo.webp`, fit: "contain" },
  detail: {
    headline: ["Beyond products, ", "into digital", "."],
    intro:
      "Mukwano is the Ugandan manufacturing group behind household names like Nomi, Roki, Supa and Sunseed, with divisions in agriculture, plastics, logistics and an inland container depot. I led the frontend of its new website: a server-rendered catalogue, brand and division pages, and a content model that lets the marketing team run the whole site.",
    preview: "Mukwano · Home, catalogue and product pages",
    client: "Mukwano Industries · Sadja WebSolutions",
    team: "Frontend lead, team of 2",
    duration: "11 months",
    context:
      "The site serves very different people: shoppers looking for a product, distributors looking for a depot, B2B clients for logistics and plastics, job seekers, and investors reading about ESG. Content is shared across pages: one product appears in the catalogue, on its brand page and on the home page. Every publish had to update all of them at once, without rebuilding the site or hitting the CMS on every visit.",
    responsibilities: ["Frontend lead", "UI engineering", "Content model", "Caching strategy", "Performance"],
    highlights: [
      {
        title: "A catalogue built for browsing",
        body: "Nine categories in the business's own order, multi-select filters, instant search and infinite scroll that brings shoppers back to the same spot.",
      },
      {
        title: "Live in seconds, cached for a day",
        body: "Pages are served from cache, and a publish in Strapi refreshes exactly the pages that show the changed content, including every page that embeds it.",
      },
      {
        title: "Light pages, heavy imagery",
        body: "Images ship as AVIF and WebP sized per device with a year-long cache, only interactive parts hydrate, and the map and chat load when needed. First paint in 0.9 s on desktop.",
      },
      {
        title: "Product pages with personality",
        body: "Each product page takes its background colour from the product photo, and related products match by type first, then by brand.",
      },
      {
        title: "Find a distributor",
        body: "An interactive map with street, light and satellite views that fits itself to the depots editors add in the CMS.",
      },
      {
        title: "Ready to scale out",
        body: "A shared Redis cache lets several instances serve and revalidate the same pages, and edge rules stop scanners and injection attempts before they reach the app.",
      },
    ],
    facts: [
      { value: "25", label: "Brands in one catalogue" },
      { value: "36", label: "Content types editors control" },
      { value: "96", label: "Lighthouse accessibility · mobile" },
      { value: "0.9 s", label: "First paint · desktop" },
    ],
    links: [{ label: "Visit mukwano.com", href: "https://mukwano.com" }],
    hero: {
      src: `${dir}/hero.webp`,
      alt: "Mukwano: Beyond products, into digital, with the new site on a laptop and a product banner",
      width: 2880,
      height: 1088,
    },
    architecture: {
      summary:
        "Every page is a server component, cached for a day as a safety net. Freshness comes from CMS webhooks, not timers, and a shared Redis cache keeps every instance in step.",
      nodes: [
        {
          name: "Visitors",
          tech: "Shoppers · distributors · B2B · job seekers",
          points: [
            "Catalogue, brand, division, careers and ESG pages",
            "Only filters, carousels, the map, the media viewer and forms run in the browser",
            "Edge rules block scanners, path probes and injection patterns",
          ],
          link: "Optimised images, cached for a year",
        },
        {
          name: "Next.js app",
          tech: "Next.js · React · Tailwind · Framer Motion",
          points: [
            "One data layer with caching, tags and graceful failure",
            "Long collections fetched page by page in parallel",
            "CMS data mapped into typed products, brands and locations",
          ],
          link: "REST, with webhooks back for revalidation",
        },
        {
          name: "Strapi CMS",
          tech: "Strapi 5 · 36 content types · 98 components",
          points: [
            "Each endpoint returns exactly the fields its page renders",
            "Flexible page blocks with shared SEO settings",
            "Sitemap and robots generated from published content",
          ],
          link: "Database and storage",
        },
        {
          name: "Infrastructure",
          tech: "PostgreSQL · Cloudflare R2 · Redis",
          points: [
            "Media on Cloudflare R2, served from the assets domain",
            "Redis-backed page cache shared across instances",
            "Hardened Docker image deployed on Coolify",
          ],
        },
      ],
    },
    decisions: [
      {
        title: "Revalidation that follows the content",
        body: "A product appears on its own page, its brand page, the catalogue and the home page. The webhook knows those relationships, so one publish refreshes every affected page and nothing else.",
        impact: "Editors never see stale content, and the CMS is not hit on every visit.",
      },
      {
        title: "Timers as a safety net only",
        body: "Because webhooks deliver freshness, pages can stay cached for 24 hours. The timer only matters if a webhook is ever missed.",
        impact: "Most visits are served straight from cache.",
      },
      {
        title: "One cache layer, not two",
        body: "Early pages used a hand-built Redis layer alongside Next.js's own cache, which made invalidation unreliable. I moved every read onto the native fetch cache and kept Redis as the shared store behind it.",
        impact: "One tag clears content everywhere, on every instance.",
      },
      {
        title: "The CMS shapes its own responses",
        body: "Each Strapi endpoint declares exactly which relations and fields it returns, trimmed to what the page renders.",
        impact: "Smaller payloads, simpler frontend code and stable, cacheable URLs.",
      },
      {
        title: "A content model that can evolve",
        body: "The home page reads both the new structured fields and the older flexible blocks, so the schema could change while editors kept publishing.",
        impact: "No content freeze and no re-entry during redesigns.",
      },
      {
        title: "Scroll position that survives navigation",
        body: "Going back to the catalogue used to reset the list. The infinite scroll now restores the loaded products and page in one step, and resets cleanly when filters change.",
        impact: "Shoppers return exactly where they left off, even deep in a long list.",
      },
    ],
    gallery: [
      {
        src: `${dir}/overview-wide.webp`,
        alt: "Mukwano pages tilted over green hills, with the Sunseed hero in the centre",
        width: 1800,
        height: 844,
        caption: "Home: rotating brand heroes",
        wide: true,
      },
      {
        src: `${dir}/approach-a.webp`,
        alt: "The Mukwano divisions list: agriculture, logistics, plastics and personal care",
        width: 920,
        height: 884,
        caption: "Divisions",
      },
      {
        src: `${dir}/approach-b.webp`,
        alt: "Mukwano Fresh Deals and Everyday Essentials sections",
        width: 920,
        height: 884,
        caption: "Fresh deals and everyday essentials",
      },
      {
        src: `${dir}/approach-wide.webp`,
        alt: "Overview of Mukwano page layouts side by side",
        width: 1800,
        height: 844,
        caption: "One page system across the group",
        wide: true,
      },
      {
        src: `${dir}/experience-a.webp`,
        alt: "The Roki cooking oil brand page and product detail",
        width: 920,
        height: 884,
        caption: "Brand page to product detail",
      },
      {
        src: `${dir}/experience-b.webp`,
        alt: "Related products and promotional banners on a Mukwano product page",
        width: 920,
        height: 884,
        caption: "Related products",
      },
      {
        src: `${dir}/experience-wide.webp`,
        alt: "The Roki Cooking Oil product card with a chef on a yellow background",
        width: 1800,
        height: 844,
        caption: "Product detail, coloured by the product itself",
        wide: true,
      },
      {
        src: `${dir}/identity-a.webp`,
        alt: "The Mukwano brands grid on a laptop",
        width: 920,
        height: 884,
        caption: "25 brands",
      },
      {
        src: `${dir}/identity-b.webp`,
        alt: "The Mukwano product catalogue on a laptop",
        width: 920,
        height: 884,
        caption: "The catalogue",
      },
      {
        src: `${dir}/identity-wide.webp`,
        alt: "The Mukwano manufacturing page on a laptop",
        width: 1800,
        height: 844,
        caption: "Driven by innovation, connected by purpose",
        wide: true,
      },
    ],
    stackGroups: [
      {
        label: "Frontend",
        items: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn/ui", "Framer Motion"],
      },
      {
        label: "Features",
        items: ["React Leaflet", "ColorThief", "React Hook Form", "Markdown rendering", "GA4"],
      },
      {
        label: "CMS",
        items: ["Strapi 5", "PostgreSQL", "Cloudflare R2"],
      },
      {
        label: "Platform",
        items: ["Redis", "Docker", "Coolify", "Cloudflare"],
      },
    ],
  },
};
