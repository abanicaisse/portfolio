import type { WorkItem } from "@/lib/site";

const dir = "/images/projects/telex";

export const telex: WorkItem = {
  slug: "telex",
  shortName: "Telex",
  monogram: "Tx",
  accent: 1,
  status: "Shipped",
  role: "Frontend team lead",
  label: "Admin dashboard · Marketing site",
  title: "Telex, now Zedu",
  summary:
    "Real-time event alerts for engineering teams, built at HNG. I led five frontend engineers on the admin dashboard and worked on the marketing site. Shipped a week early with zero critical bugs.",
  metric: "−30%",
  metricCaption: "Load time",
  stack: ["Next.js", "React", "Tailwind CSS"],
  year: "2024",
  cover: {
    src: `${dir}/cover-dashboard-v2.webp`,
    alt: "The Telex admin dashboard overview with notification counts, channel metrics and an invite dialog in front",
    width: 1440,
    height: 1174,
  },
  logo: { src: `${dir}/logo.png`, fit: "cover" },
  detail: {
    headline: ["The admin console that shipped a week ", "early", "."],
    intro:
      "Telex started at HNG as a real-time notification platform for engineering teams. Builds, errors, sign-ups and server events from connected apps land in chat-style channels, with AI summaries on top. In summer 2024 I led the five-person frontend team that built its admin dashboard: the console where a workspace tracks its event health, manages members and roles, configures webhooks and apps, and handles billing. I also worked on the public marketing site. Telex has since grown into Zedu, a team workspace on web, iOS and Android.",
    preview: "Telex · Admin dashboard, 2024",
    client: "HNG Tech · Telex (now Zedu)",
    team: "Led 5 frontend engineers",
    duration: "Jun – Aug 2024",
    context:
      "HNG runs on short, fixed deadlines, and the dashboard had to be ready for the Telex launch. I owned the frontend plan for the admin console, split the work across five engineers, and kept everyone moving with daily stand-ups, sprint planning and code review on every pull request. Each week I reported progress to programme leadership, while writing features myself.",
    responsibilities: ["Team lead", "Admin dashboard", "Marketing site", "API integration", "Performance", "Code review"],
    highlights: [
      {
        title: "A week ahead of schedule",
        body: "The admin dashboard went out seven days before the deadline, with every planned screen in place.",
      },
      {
        title: "30% faster loads",
        body: "I profiled the dashboard's first load and removed what delayed it, so admins reach working screens sooner.",
      },
      {
        title: "Zero critical bugs at launch",
        body: "Code review on every pull request and careful API handling kept launch-blocking bugs out of production.",
      },
      {
        title: "The whole workspace in one console",
        body: "Event health, members and invites, roles and permissions, webhooks, connected apps and billing, behind one navigation.",
      },
      {
        title: "Five engineers, one codebase",
        body: "Shared components and conventions, plus a refactor early on, kept screens from five people consistent and easy to change.",
      },
      {
        title: "Every request has a clear state",
        body: "Each call to the Telex API shows loading, empty and error states, so admins always know what the console is doing.",
      },
    ],
    facts: [
      { value: "−30%", label: "Load time" },
      { value: "5", label: "Engineers led" },
      { value: "0", label: "Critical bugs at launch" },
      { value: "1 wk", label: "Ahead of deadline" },
    ],
    links: [
      { label: "Visit Zedu", href: "https://ziki.im" },
      { label: "The 2024 Telex site", href: "https://web.archive.org/web/20241110224039/https://telex.im/" },
    ],
    hero: {
      src: `${dir}/hero-dashboard.webp`,
      alt: "The Telex admin dashboard overview between the roles and permissions panel and the invite dialog",
      width: 2880,
      height: 1088,
    },
    architecture: {
      summary:
        "Two Next.js frontends on one API. The marketing site brings teams in, the product delivers their events, and the admin dashboard gives each workspace control over its members, integrations and plan.",
      nodes: [
        {
          name: "Marketing site",
          tech: "Next.js · Tailwind CSS",
          points: [
            "Explains real-time alerts with live product previews",
            "Optimised images through next/image",
            "Sign-up and trial calls to action on every section",
          ],
          link: "Sign-ups create workspaces",
        },
        {
          name: "Telex API",
          tech: "REST · Webhooks",
          points: [
            "Receives events from connected apps over webhooks",
            "Routes them into channels as real-time notifications",
            "Serves workspace data, members, webhooks and plans",
          ],
          link: "REST over HTTPS",
        },
        {
          name: "Admin dashboard",
          tech: "Next.js · React · Tailwind CSS",
          points: [
            "Overview of notifications, errors and channel health",
            "Members, invites, roles and permissions",
            "Webhooks with request history, connected apps and billing",
            "Loading, empty and error states on every request",
          ],
        },
      ],
    },
    decisions: [
      {
        title: "Measure the first load, then fix it",
        body: "Admins open the dashboard many times a day, so the first screen had to appear fast. I profiled the load and removed what was holding it back, then checked the gain.",
        impact: "Load time down 30%.",
      },
      {
        title: "Design the unhappy paths",
        body: "Every API call got explicit loading, empty and error handling instead of assuming success. A slow or failed request shows a clear message, never a broken screen.",
        impact: "Zero critical bugs at launch.",
      },
      {
        title: "Refactor early, not at the end",
        body: "With five people adding screens in parallel, I cleaned up the structure and set shared components before the codebase grew. New screens then reused the same pieces.",
        impact: "Faster reviews and consistent screens across the team.",
      },
      {
        title: "Run the team like a product team",
        body: "Daily stand-ups, sprint planning, review on every pull request and a weekly progress report to programme leadership. Problems surfaced in a day, not at the deadline.",
        impact: "Delivered a week ahead of schedule.",
      },
    ],
    gallery: [
      {
        src: `${dir}/dashboard-wide.webp`,
        alt: "Telex admin overview: total notifications, error notifications, team members, resolved notifications, a channel chart and an activity log",
        width: 1800,
        height: 844,
        caption: "Overview: events, errors and channel health at a glance",
        wide: true,
      },
      {
        src: `${dir}/invite.webp`,
        alt: "Invite people to this team dialog with an email and a Developer role",
        width: 920,
        height: 884,
        caption: "Invite teammates with a role",
      },
      {
        src: `${dir}/roles.webp`,
        alt: "User roles panel with administrator, guest, user, manager and project lead, and permission toggles",
        width: 920,
        height: 884,
        caption: "Roles with fine-grained permissions",
      },
      {
        src: `${dir}/members-wide.webp`,
        alt: "User management screen with member counts, search, role filter and the members table",
        width: 1800,
        height: 844,
        caption: "User management: members, roles and status",
        wide: true,
      },
      {
        src: `${dir}/webhooks-wide.webp`,
        alt: "Webhook detail with its URL and ongoing request history, status codes and retries",
        width: 1800,
        height: 844,
        caption: "Webhooks with full request history and retries",
        wide: true,
      },
      {
        src: `${dir}/apps.webp`,
        alt: "Slack connected to Telex with the list of Slack events it monitors",
        width: 920,
        height: 884,
        caption: "Connected apps and the events Telex watches",
      },
      {
        src: `${dir}/alerts.webp`,
        alt: "GitLab build events in a Telex channel: build passed and build in progress",
        width: 920,
        height: 884,
        caption: "Build and deploy events as they arrive",
      },
      {
        src: `${dir}/billing-wide.webp`,
        alt: "Billing screen with the current free plan and Basic, Advanced and Premium plans",
        width: 1800,
        height: 844,
        caption: "Plans and billing",
        wide: true,
      },
      {
        src: `${dir}/site-hero-wide.webp`,
        alt: "Telex marketing site hero: All your App Events in One Place",
        width: 1800,
        height: 844,
        caption: "Marketing site: hero with a live product preview",
        wide: true,
      },
      {
        src: `${dir}/zedu-today-wide.webp`,
        alt: "Zedu, the product Telex became, on a laptop and a phone",
        width: 1800,
        height: 844,
        caption: "Telex today, as Zedu on web and mobile",
        wide: true,
      },
    ],
    stackGroups: [
      { label: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "next/image"] },
      { label: "Integration", items: ["REST APIs", "Webhooks"] },
      { label: "Delivery", items: ["Git & GitHub", "Code review", "Agile sprints"] },
    ],
  },
};
