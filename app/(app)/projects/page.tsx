import type { Metadata } from "next";
import Link from "next/link";
import { Accessibility, ArrowUpRight, Code2, Gauge, GitPullRequest, Github, Mail, Server, ShieldCheck } from "lucide-react";
import { Accent, Section, SectionIntro } from "@/components/shared/Section";
import { ShareBar } from "@/components/shared/ShareBar";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectMark } from "@/components/projects/ProjectMark";
import { ctaVariants } from "@/components/ui/cta";
import { profile, socials, work } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Dashboards, developer tools and client platforms I have led or built.",
};

const github = socials.find((s) => s.label === "GitHub");

const standards = [
  { icon: Code2, title: "Typed end to end", body: "Strict TypeScript from the API schema to the component props." },
  { icon: Gauge, title: "Measured, then fast", body: "Profile first, then fix. Core Web Vitals are part of done." },
  { icon: Accessibility, title: "Accessible by default", body: "Keyboard paths, focus states and AA contrast in every theme." },
  { icon: GitPullRequest, title: "Small, reviewed changes", body: "Short pull requests and reviews that keep the main branch shippable." },
  { icon: Server, title: "Server first", body: "Render on the server, ship less JavaScript, hydrate only what moves." },
  { icon: ShieldCheck, title: "Handed over cleanly", body: "Written decisions and docs, so the next engineer is not guessing." },
];

export default function ProjectsPage() {
  return (
    <>
      <Section id="projects" index="01" eyebrow="Projects" note={`${work.length} projects · 2023 — Now`}>
        <div className="xl:flex xl:items-center xl:justify-between xl:gap-12">
          <SectionIntro
            as="h1"
            title={
              <>
                {work.length} projects. One <Accent tone="brand">standard</Accent>.
              </>
            }
            lede="Dashboards, developer tools and client platforms I have led or built, with the numbers that changed because of them."
          >
            <div data-reveal className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/#contact" className={ctaVariants({ variant: "brand", className: "w-full sm:w-fit" })}>
                <Mail aria-hidden="true" />
                Start a project
              </Link>
              {github && (
                <a
                  href={github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ctaVariants({ variant: "outline", className: "w-full sm:w-fit" })}
                >
                  <Github aria-hidden="true" />
                  Browse on GitHub
                </a>
              )}
            </div>
            <p data-reveal className="mt-4 max-w-xl leading-relaxed text-ink-muted">
              <span className="text-ink">Curious about a number?</span> Ask me about it. Each one has a story about
              the trade-offs behind it.
            </p>
            <div data-reveal>
              <ShareBar path="/projects" title={`Projects by ${profile.name}`} className="mt-6" />
            </div>
          </SectionIntro>

          <nav
            aria-label="Projects"
            data-reveal
            className="grid w-fit grid-cols-4 gap-x-3 gap-y-6 px-6 pb-14 sm:gap-x-5 md:px-10 xl:shrink-0 xl:grid-cols-2 xl:py-20"
          >
            {work.map((project) => (
              <a key={project.slug} href={`#${project.slug}`} className="group flex w-[72px] flex-col items-center gap-2 sm:w-20">
                <ProjectMark
                  project={project}
                  className="h-14 w-14 text-xl transition-transform duration-300 ease-out group-hover:-translate-y-1 sm:h-20 sm:w-20 sm:text-2xl"
                />
                <span className="text-center text-xs font-medium text-ink-muted group-hover:text-ink">
                  {project.shortName}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </Section>

      <Section id="lineup" index="02" eyebrow="The lineup" note="Newest work last">
        <div data-reveal-group className="grid gap-px bg-line sm:grid-cols-2">
          {work.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}

          {github && (
            <div
              data-reveal
              className="flex flex-col gap-8 bg-surface p-6 sm:col-span-2 md:flex-row md:items-end md:justify-between md:p-8"
            >
              <div>
                <p className="hud-label text-ink-faint">Next up</p>
                <h2 className="mt-4 font-display text-3xl font-medium leading-[1.05] tracking-[-0.03em] text-ink-strong">
                  More <Accent tone="brand">on GitHub</Accent>.
                </h2>
                <p className="mt-3 max-w-xl leading-relaxed text-ink-muted">
                  Side projects, experiments and open-source contributions live on my profile.
                </p>
              </div>
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaVariants({ variant: "invert", size: "sm", className: "shrink-0 self-start md:self-auto" })}
              >
                <Github aria-hidden="true" />
                {github.handle}
              </a>
            </div>
          )}
        </div>
      </Section>

      <Section id="standards" index="03" eyebrow="Standards" note="Shared by every project">
        <SectionIntro
          title={
            <>
              Built the <Accent tone="brand">careful</Accent> way.
            </>
          }
          lede="Every project, client or personal, is held to the same rules."
        />
        <ol data-reveal-group className="grid gap-px border-t border-line bg-line md:grid-cols-3">
          {standards.map((item, i) => (
            <li key={item.title} data-reveal className="bg-surface p-6 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-10 w-10 items-center justify-center border border-line text-brand-ink">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="hud-label text-ink-faint">{String(i + 1).padStart(2, "0")}</p>
              </div>
              <h3 className="mt-6 font-display text-2xl font-medium tracking-[-0.02em] text-ink-strong">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="start" railLabel="Start">
        <div className="flex flex-col items-center px-6 py-20 text-center md:py-28">
          <p className="hud-label text-ink-faint">{profile.location} · Remote</p>
          <h2
            data-reveal
            className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-ink-strong sm:text-6xl md:text-7xl"
          >
            Build it <Accent tone="brand">with me</Accent>.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            Have a product that needs a frontend lead? Tell me what you are building.
          </p>
          <Link href="/#contact" className={ctaVariants({ variant: "brand", className: "mt-10" })}>
            Get in touch
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </Section>
    </>
  );
}
