import type { WorkItem } from "@/lib/site";

const dir = "/images/projects/rans";

export const rans: WorkItem = {
  slug: "rans",
  shortName: "Rans",
  monogram: "Rs",
  accent: 4,
  status: "Live",
  role: "Lead engineer · Full stack",
  label: "Property platform · Rent management",
  title: "Rans Solutions",
  summary:
    "Uganda's property marketplace and rent management platform: listings, applications, leases, rent collection and owner reports. I lead the engineering and wrote most of the NestJS API, the Next.js marketplace, dashboards and admin console.",
  metric: "753",
  metricCaption: "API endpoints",
  stack: ["NestJS", "PostgreSQL", "Redis", "Next.js", "Typesense", "Expo"],
  year: "2025 — 2026",
  cover: {
    src: `${dir}/cover.webp`,
    alt: "The Rans home page, Find your perfect property, with a listing for a house in Kajjansi in front",
    width: 1440,
    height: 1174,
  },
  logo: { src: `${dir}/logo.png`, fit: "cover" },
  detail: {
    headline: ["Uganda's rentals, from ", "listing", " to rent receipt."],
    intro:
      "Rans is a property platform for Uganda, the first of its kind there. People search homes for rent and for sale, and landlords, property managers and agents run their tenancies on it: rental applications and screening, leases, rent collection, repairs and owner reports. I lead its engineering at Sadja WebSolutions and wrote most of the code: the NestJS API, the Next.js marketplace, the dashboards and the admin console. An Expo mobile app is in development.",
    preview: "Rans · Marketplace home, live",
    client: "Rans Property Solutions · Sadja WebSolutions",
    team: "Lead, 6 engineers contributed over time",
    duration: "Jun 2025 – present",
    context:
      "The platform has to serve a landlord with one house and a company managing many buildings, take rent by mobile money, card, bank or cash, and follow Uganda's tenancy law. I own the architecture and wrote around 90% of the API and the web app. Each major feature starts as a numbered design plan in the repo. Other engineers joined for shorter stretches, and I reviewed and merged their work.",
    responsibilities: ["System architecture", "Backend API", "Payments & ledger", "Web app", "Admin console", "Search", "Code review"],
    highlights: [
      {
        title: "Rent, from invoice to receipt",
        body: "The ledger generates what each tenant owes every night, sends reminders, flags overdue rent and issues receipts. Tenants pay by mobile money, card or bank through Pesapal, and landlords can record cash.",
      },
      {
        title: "Tenancy law, in code",
        body: "A signed lease above a rent threshold, rent increases capped at 10% a year with 60 days' notice, notice periods by payment frequency, and a late-rent process that escalates on day 21, 30 and 60.",
      },
      {
        title: "Instant search across 639 listings",
        body: "Typesense answers as people type and draws real area borders on the map. If it is slow or down, PostgreSQL answers instead.",
      },
      {
        title: "One console for the platform",
        body: "A 95-page admin console with scoped admin roles. Any route without a permission rule is open to the super admin only.",
      },
      {
        title: "Personal data masked by default",
        body: "Every response hides the middle of other people's emails and phone numbers unless the viewer has dealings with that person.",
      },
      {
        title: "Jobs you can watch",
        body: "31 scheduled jobs run in Kampala time. Each run is recorded, and a platform health page shows any job that missed its slot.",
      },
    ],
    facts: [
      { value: "753", label: "API endpoints" },
      { value: "227", label: "Web pages" },
      { value: "115", label: "Database entities" },
      { value: "31", label: "Scheduled jobs" },
    ],
    links: [{ label: "Visit ranssolutions.com", href: "https://www.ranssolutions.com" }],
    hero: {
      src: `${dir}/hero.webp`,
      alt: "The Rans home page between a house listing and rental listings in Royal Estate, Jinja",
      width: 2880,
      height: 1088,
    },
    architecture: {
      summary:
        "A Next.js app for the marketplace, dashboards and admin, on a NestJS API backed by PostgreSQL and Redis. Background work runs on BullMQ queues and cron jobs, search runs on Typesense, and files live in Cloudflare R2.",
      nodes: [
        {
          name: "Web app",
          tech: "Next.js 16 · React 19 · TanStack Query",
          points: [
            "Public marketplace: search, listings, agents, agencies, articles, careers",
            "Dashboards for tenants, landlords, agents, brokers and service providers",
            "95-page admin console",
            "Sessions refreshed a minute before they expire, JSON-LD and a live sitemap",
          ],
          link: "REST, Socket.IO and direct search",
        },
        {
          name: "API",
          tech: "NestJS 11 · PostgreSQL · Redis · BullMQ",
          points: [
            "50 feature modules, 115 entities, 753 endpoints",
            "Rent ledger, leases, late rent, inspections, repairs, owner reports",
            "Wallet ledger and Pesapal payments, with de-duplicated webhooks checked against Pesapal",
            "Socket.IO chat and an AI assistant that searches listings and books tours",
          ],
          link: "Changes synced after each commit",
        },
        {
          name: "Search and storage",
          tech: "Typesense · Cloudflare R2",
          points: [
            "Listing changes queued and bulk-imported into Typesense after the database commits",
            "A catch-up pass every 20 seconds picks up any write the queue missed",
            "Public and private buckets, private files served through signed URLs",
          ],
        },
      ],
    },
    decisions: [
      {
        title: "Money is a ledger, not a number",
        body: "Wallet balances change only through one ledger service. Amounts are integers in minor units, every posting carries an idempotency key, accounts are locked in id order so two payments never deadlock, and reversals are new entries, never edits. Every night a job rebuilds each balance from its entries and reports any difference.",
        impact: "Every balance traces back to the entries that made it.",
      },
      {
        title: "Put the tenancy rules in the platform",
        body: "Landlords should not have to know the notice periods or when a demand letter is due. The legal rules and the late-rent steps live in the backend as admin settings, so they can change once a lawyer confirms them.",
        impact: "Every tenant goes through the same process.",
      },
      {
        title: "Search that never goes blank",
        body: "Next.js runs server actions one at a time per tab, which queued every keystroke. Search now calls the API straight from the browser, cancels stale requests, and falls back to PostgreSQL for a minute whenever Typesense times out.",
        impact: "Results as people type, even during a search outage.",
      },
      {
        title: "Sessions the backend controls",
        body: "Refresh tokens are single-use. Replaying an old one ends the whole session, while two tabs refreshing at once count as one. Sessions expire after idle time and a 90-day cap, and sensitive actions ask for a second check.",
        impact: "Users see and end their sessions from settings.",
      },
    ],
    gallery: [
      {
        src: `${dir}/home-wide.webp`,
        alt: "Rans home page: Find your perfect property. Rent, buy, or sell with ease.",
        width: 1800,
        height: 844,
        caption: "The marketplace home",
        wide: true,
      },
      {
        src: `${dir}/rent-grid-wide.webp`,
        alt: "Homes for rent with filters for price, beds and baths, home type and more",
        width: 1800,
        height: 844,
        caption: "Homes for rent, with filters",
        wide: true,
      },
      {
        src: `${dir}/listings.webp`,
        alt: "Two rental listing cards in Royal Estate, Jinja, with prices in UGX",
        width: 920,
        height: 884,
        caption: "Listing cards, priced in UGX",
      },
      {
        src: `${dir}/locations.webp`,
        alt: "Browse by location: Wakiso, Kampala, Mukono, Mbale, Jinja and Hoima",
        width: 920,
        height: 884,
        caption: "Browse by location",
      },
      {
        src: `${dir}/listing-wide.webp`,
        alt: "A house for sale in Bweya Kajjansi with photos, price and agency fee",
        width: 1800,
        height: 844,
        caption: "Listing page for a house for sale",
        wide: true,
      },
      {
        src: `${dir}/rental-criteria-wide.webp`,
        alt: "Rental listing with apply and tour buttons, description, amenities and pet policy",
        width: 1800,
        height: 844,
        caption: "Rental listing: apply or request a tour",
        wide: true,
      },
      {
        src: `${dir}/how-it-works-wide.webp`,
        alt: "How Rans simplifies property management: search, schedule viewings, manage the transaction",
        width: 1800,
        height: 844,
        caption: "How it works",
        wide: true,
      },
      {
        src: `${dir}/management-wide.webp`,
        alt: "Property management services: tenant management, rent collection, maintenance and financial reporting",
        width: 1800,
        height: 844,
        caption: "Property management services",
        wide: true,
      },
      {
        src: `${dir}/articles-wide.webp`,
        alt: "Rans articles on land purchase risks, tenant rights and financial reporting for landlords",
        width: 1800,
        height: 844,
        caption: "Articles from the CMS",
        wide: true,
      },
    ],
    stackGroups: [
      { label: "Backend", items: ["NestJS 11", "TypeORM", "PostgreSQL", "Redis", "BullMQ", "Socket.IO"] },
      { label: "Web", items: ["Next.js 16", "React 19", "TanStack Query", "Auth.js", "Tailwind CSS 4", "Zustand"] },
      { label: "Search & infra", items: ["Typesense", "Cloudflare R2", "Pesapal", "Strapi", "Coolify", "GitHub Actions"] },
      { label: "Mobile", items: ["Expo SDK 54", "React Native", "Expo Router"] },
    ],
  },
};
