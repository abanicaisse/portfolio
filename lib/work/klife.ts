import type { WorkItem } from "@/lib/site";

const dir = "/images/projects/klife";

export const klife: WorkItem = {
  slug: "klife",
  shortName: "KLife",
  monogram: "Kl",
  accent: 1,
  status: "Live",
  role: "Lead engineer · Full stack",
  label: "Mobile app · Live events",
  title: "KLife fitness app",
  summary:
    "Krystal Water's fitness app and the live results system behind the Kampala Cancer Run. iOS and Android app, web admin and a real-time NestJS backend, designed and built end to end.",
  metric: "7 wks",
  metricCaption: "Figma to app stores",
  stack: ["Expo", "React Native", "NestJS", "PostgreSQL", "Redis", "Next.js"],
  year: "2026",
  cover: {
    src: `${dir}/cover.webp`,
    alt: "The KLife Choose Activity screen on a phone in a jeans pocket",
    width: 1440,
    height: 1174,
  },
  logo: { src: `${dir}/logo.png`, fit: "cover" },
  detail: {
    headline: ["Every kilometre, ", "ranked live", " on race day."],
    intro:
      "KLife is Krystal Water's fitness app. Every day, people use it to track runs, walks and rides, join challenges and keep their streaks going. On race day it becomes the timing system: each runner's phone measures their race, and results update live for runners, organisers and spectators. I designed the architecture and built every part of it.",
    preview: "KLife · Mobile app, admin and live leaderboard",
    client: "Krystal Water · Sadja WebSolutions",
    team: "Solo, from design to release",
    duration: "7 weeks",
    context:
      "The client arrived with a 51-screen design and a fixed date: the Rotary Kampala Cancer Run 2026, over 21, 10 and 5 km. The real work was turning a phone into a timing device people could trust. GPS drops between buildings, Android kills apps in the background, and runners lose signal at the worst moments. The results also had to be fair: someone who cuts the course must never beat someone who ran it. I owned every layer, from the database schema to the App Store release.",
    responsibilities: ["System architecture", "Mobile app", "Real-time backend", "Admin & web", "DevOps & releases"],
    highlights: [
      {
        title: "Results organisers can trust",
        body: "Rankings reward runners who followed the official course, not only the fastest clock, and physically impossible GPS points are rejected on the server.",
      },
      {
        title: "Live leaderboards that scale",
        body: "Standings refresh every three seconds for everyone watching. Each board is computed once and shared, so cost grows with boards, not spectators.",
      },
      {
        title: "Accurate in poor coverage",
        body: "When GPS weakens, distance falls back to the step counter and motion sensors, then hands back to GPS when the signal returns.",
      },
      {
        title: "A run is never lost",
        body: "Tracking continues with the screen off or the app killed, shows on the lock screen and Dynamic Island, and every workout is queued until the server confirms it.",
      },
      {
        title: "Native speed",
        body: "Animations and charts run on the UI thread with Reanimated and Skia, long lists are virtualised, and cached data appears instantly on launch, even offline.",
      },
      {
        title: "One console for the event",
        body: "Registrations, kit pickup points, live results, announcements by push, SMS and email, moderation and a verifiably fair prize draw, in one admin.",
      },
    ],
    facts: [
      { value: "7 wks", label: "Figma to app stores" },
      { value: "3 s", label: "Live leaderboard refresh" },
      { value: "3", label: "Platforms: iOS, Android, web" },
      { value: "100", label: "Lighthouse accessibility · web" },
    ],
    links: [{ label: "Visit klife.ug", href: "https://klife.ug" }],
    hero: {
      src: `${dir}/hero.webp`,
      alt: "KLife marketing site on a laptop with the mobile app beside it: Live Healthier. Move Together.",
      width: 2880,
      height: 1088,
    },
    architecture: {
      summary:
        "Three applications, one backend image. Phones talk to a NestJS API over REST and WebSockets. The same image also runs as a worker, which keeps GPS processing, notifications and scheduled jobs away from the requests runners are waiting on.",
      nodes: [
        {
          name: "Mobile app",
          tech: "Expo · React Native · TypeScript",
          points: [
            "Clear layers: screens, hooks, actions and a typed API client, with every response validated",
            "Offline cache on device, credentials in the secure keychain",
            "Native modules for background GPS, Live Activities and SMS code autofill",
          ],
          link: "REST and WebSockets",
        },
        {
          name: "Admin & public web",
          tech: "Next.js · TanStack Query, Table and Form",
          points: [
            "A backend-for-frontend keeps admin tokens on the server, never in the browser",
            "Public registration portal, live leaderboard and shareable activity pages",
            "Universal links that open shared runs and groups straight in the app",
          ],
          link: "Server-side proxy",
        },
        {
          name: "API",
          tech: "NestJS · 200+ endpoints · role-based access",
          points: [
            "Rate limiting, authentication and permissions applied to every route",
            "GPS points validated and written to Redis, never blocking on the database",
            "WebSocket rooms fanned out across instances through Redis",
          ],
          link: "Queues and streams",
        },
        {
          name: "Worker",
          tech: "Same image, worker role",
          points: [
            "Streams GPS data into PostgreSQL in bulk",
            "Delivers push, email and SMS campaigns from a queue",
            "Runs the event, challenge and streak schedules",
          ],
          link: "Database, cache and storage",
        },
        {
          name: "Data",
          tech: "PostgreSQL · Redis · Cloudflare R2",
          points: [
            "Relational model covering users, workouts, events, challenges and groups",
            "Redis sorted sets for leaderboards and sessions",
            "Media uploaded straight from the device to object storage",
          ],
        },
      ],
    },
    decisions: [
      {
        title: "A custom backend instead of a hosted one",
        body: "The client first proposed self-hosted Supabase. Live rankings needed a separate write path for GPS data, Redis, WebSocket broadcast and background workers, so I made the case for NestJS and PostgreSQL, documented the trade-offs and built it.",
        impact: "Full control over the real-time path, authentication and hosting, with no vendor lock-in.",
      },
      {
        title: "Keep the database off the hot path",
        body: "Incoming GPS points are validated, written to Redis and streamed to a worker that saves them to PostgreSQL in bulk. The API never waits on the database while people are running.",
        impact: "Fast responses at peak load, and a database that sees a few large writes instead of thousands of small ones.",
      },
      {
        title: "Rank by the course, not just the clock",
        body: "Testing showed that a time-only ranking let someone run any 5 km and beat runners who followed the route. I encoded the full rule (finished, checkpoints missed, time, coverage) into a single sortable score.",
        impact: "Fair results, ranked identically in Redis, PostgreSQL and the app.",
      },
      {
        title: "Compute only what someone is watching",
        body: "A leaderboard is recalculated only while someone has it open, and everyone watching shares the same snapshot.",
        impact: "Server cost stays flat as spectators join on race day.",
      },
      {
        title: "Separate API and worker roles",
        body: "One Docker image runs as either an API or a worker. Requests and WebSockets scale independently from queues, schedules and GPS processing, and only one role runs migrations.",
        impact: "Race-day traffic does not compete with background work, and deploys are safe to repeat.",
      },
      {
        title: "Secure sessions that survive bad signal",
        body: "Refresh tokens rotate on every use and a replayed token revokes the session. Runners often lose signal mid-refresh, so the app refreshes early, shares one refresh across parallel requests, and the server allows a short grace window.",
        impact: "Strong session security without signing anyone out mid-run.",
      },
    ],
    gallery: [
      {
        src: `${dir}/tracking-wide.webp`,
        alt: "Five KLife screens showing an activity from choosing a run to the completed summary",
        width: 1800,
        height: 845,
        caption: "Live tracking, from choosing an activity to the session summary",
        wide: true,
      },
      {
        src: `${dir}/overview-b.webp`,
        alt: "A completed KLife run around Kampala on a phone, next to two runners",
        width: 920,
        height: 883,
        caption: "Session summary with the snapped route",
      },
      {
        src: `${dir}/events-b.webp`,
        alt: "A runner on a track holding a phone showing KLife's run completed screen",
        width: 920,
        height: 884,
        caption: "Run completed, ready to share",
      },
      {
        src: `${dir}/events-wide.webp`,
        alt: "The public Rotary Run 2026 leaderboard with a podium and ranked runners",
        width: 1800,
        height: 845,
        caption: "The public live leaderboard",
        wide: true,
      },
      {
        src: `${dir}/approach-a.webp`,
        alt: "A hand holding a phone showing KLife's Explore tab with workouts and meal plans",
        width: 920,
        height: 883,
        caption: "Explore: workouts and meal plans",
      },
      {
        src: `${dir}/approach-b.webp`,
        alt: "Two KLife onboarding screens: Every kilometre counts and Move Without Limits",
        width: 920,
        height: 883,
        caption: "Onboarding",
      },
      {
        src: `${dir}/identity-wide.webp`,
        alt: "The KLife admin dashboard with Cancer Run registrations beside the mobile app",
        width: 1800,
        height: 845,
        caption: "Admin: registrations and live operations",
        wide: true,
      },
      {
        src: `${dir}/experience-a.webp`,
        alt: "A runner in a Cancer Run vest holding up a phone with KLife",
        width: 920,
        height: 883,
        caption: "Built for race day",
      },
      {
        src: `${dir}/events-a.webp`,
        alt: "A runner checking a completed KLife session on a phone at the track",
        width: 920,
        height: 884,
        caption: "Results right after the run",
      },
      {
        src: `${dir}/outcome-onboarding.webp`,
        alt: "KLife splash and onboarding screens in sequence",
        width: 1800,
        height: 845,
        caption: "App opening: splash to onboarding",
        wide: true,
      },
    ],
    stackGroups: [
      {
        label: "Mobile",
        items: ["Expo", "React Native", "expo-router", "Reanimated", "Skia", "TanStack Query", "Zustand", "Zod", "MMKV"],
      },
      {
        label: "Web",
        items: ["Next.js", "React", "Tailwind", "TanStack Table & Form", "Recharts", "Google Maps"],
      },
      {
        label: "Backend",
        items: ["NestJS", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Socket.io"],
      },
      {
        label: "Infra",
        items: ["Docker", "Coolify", "Cloudflare R2", "EAS Build & Update", "PostHog"],
      },
    ],
  },
};
