import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, Github, Mail } from "lucide-react";
import { Accent, Section } from "@/components/shared/Section";
import { ShareBar } from "@/components/shared/ShareBar";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectMark } from "@/components/projects/ProjectMark";
import { ProjectPreview } from "@/components/projects/ProjectPreview";
import { accentFill } from "@/components/projects/accent";
import { ctaVariants } from "@/components/ui/cta";
import { profile, socials, work } from "@/lib/site";
import { cn } from "@/lib/utils";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

const github = socials.find((s) => s.label === "GitHub");

const tag = "border border-line bg-surface-sunken px-1.5 py-px font-mono text-[10px] font-medium uppercase tracking-[0.1em]";

const grid =
  "absolute inset-0 opacity-60 [background-image:linear-gradient(hsl(var(--line))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--line))_1px,transparent_1px)] [background-size:28px_28px]";

function findProject(slug: string) {
  const index = work.findIndex((p) => p.slug === slug);
  return index === -1 ? null : { project: work[index], index };
}

export function generateStaticParams() {
  return work.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const found = findProject((await params).slug);
  if (!found) return {};
  const { project } = found;
  const headline = project.detail.headline.join("");
  return {
    title: `${project.shortName}: ${headline}`,
    description: project.detail.intro,
    openGraph: { title: `${project.title}: ${headline}`, description: project.summary, type: "article" },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const found = findProject((await params).slug);
  if (!found) notFound();

  const { project, index } = found;
  const { detail } = project;
  const [before, accent, after] = detail.headline;
  const number = String(index + 1).padStart(2, "0");
  const others = work.filter((p) => p.slug !== project.slug);
  const path = `/projects/${project.slug}`;

  const facts = [
    { label: "Client", value: detail.client },
    { label: "Role", value: project.role },
    { label: "Team", value: detail.team },
    { label: "Duration", value: detail.duration },
    { label: "Year", value: project.year },
    { label: "Status", value: project.status },
  ];

  return (
    <>
      <Section id="project" index="01" eyebrow={project.shortName} note={`${project.label} · ${project.status}`}>
        <div data-reveal-group className="flex flex-col items-center px-6 py-14 text-center md:px-10 md:py-20">
          <div data-reveal className="mb-6 flex flex-col items-center gap-5">
            <ProjectMark project={project} className="h-24 w-24 text-4xl md:h-28 md:w-28 md:text-[44px]" />
            <span className="flex items-center gap-3">
              <span className={cn("hud-label px-2 py-1 font-bold text-brand-fg", accentFill[project.accent])}>
                {number}
              </span>
              <span className="font-display text-2xl font-medium tracking-[-0.03em] text-ink-strong">
                {project.title}
              </span>
            </span>
          </div>

          <h1
            data-reveal
            className="max-w-4xl text-balance font-display text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-ink-strong sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {before}
            <Accent tone="brand">{accent}</Accent>
            {after}
          </h1>
          <p data-reveal className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            {detail.intro}
          </p>

          <div data-reveal className="mt-8 flex w-full flex-col items-center gap-6">
            <div className="flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center">
              <Link href="/#contact" className={ctaVariants({ variant: "brand", className: "w-full sm:w-fit" })}>
                <Mail aria-hidden="true" />
                Start a similar project
              </Link>
              {detail.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ctaVariants({ variant: "outline", className: "w-full sm:w-fit" })}
                >
                  {link.href.includes("github.com") ? <Github aria-hidden="true" /> : <ArrowUpRight aria-hidden="true" />}
                  {link.label}
                </a>
              ))}
              <Link href="/projects" className={ctaVariants({ variant: "outline", className: "w-full sm:w-fit" })}>
                All projects
              </Link>
            </div>
            <p className="hud-label text-ink-faint">
              {project.stack.join(" · ")} · {project.year}
            </p>
            <ShareBar path={path} title={`${project.title} by ${profile.name}`} />
          </div>
        </div>

        <figure className="border-t border-line">
          <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-2 md:px-10">
            <figcaption className="hud-label truncate text-ink-faint">{detail.preview}</figcaption>
            <p className="hud-label hidden shrink-0 text-ink-faint sm:block">Overview</p>
          </div>
          <ProjectPreview project={project} />
        </figure>
      </Section>

      <Section id="highlights" index="02" eyebrow="Highlights" note={project.label}>
        <div className="px-6 py-14 md:px-10 md:py-20">
          <h2
            data-reveal
            className="max-w-3xl font-display text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-ink-strong sm:text-5xl md:text-6xl"
          >
            What went <Accent tone="brand">into it</Accent>.
          </h2>
        </div>
        <ol data-reveal-group className="grid gap-px border-t border-line bg-line md:grid-cols-3">
          {detail.highlights.map((item, i) => (
            <li key={item.title} data-reveal className="bg-surface p-6 md:p-8">
              <p className="hud-label text-right text-ink-faint">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-6 font-display text-2xl font-medium tracking-[-0.02em] text-ink-strong">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="numbers" index="03" eyebrow="By the numbers" railLabel="Numbers" note="Measured, not guessed">
        <ul data-reveal-group className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {detail.facts.map((fact, i) => (
            <li key={fact.label} data-reveal className="flex flex-col bg-surface">
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-surface-sunken">
                <span aria-hidden="true" className={grid} />
                <p className="relative font-display text-6xl font-semibold tracking-[-0.04em] text-ink-strong">
                  {fact.value}
                </p>
              </div>
              <p className="flex items-center justify-between gap-4 border-t border-line px-6 py-3">
                <span className="hud-label text-ink-muted">{fact.label}</span>
                <span className="hud-label text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="engagement" index="04" eyebrow="The engagement" railLabel="Engagement" note={detail.client}>
        <div data-reveal className="grid gap-px bg-line lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)]">
          <div className="flex flex-col bg-surface p-6 md:p-10">
            <div className="flex items-center gap-3">
              <ProjectMark project={project} className="h-10 w-10 text-sm" />
              <p className="hud-label text-brand-ink">My role · {project.role}</p>
            </div>
            <h3 className="mt-6 font-display text-3xl font-medium leading-[1.05] tracking-[-0.03em] text-ink-strong sm:text-4xl">
              The brief and <Accent tone="brand">the bar</Accent>.
            </h3>
            <p className="mt-4 max-w-xl leading-relaxed text-ink-muted">{detail.context}</p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {detail.responsibilities.map((item) => (
                <li key={item} className="hud-label flex items-center gap-1.5 text-ink-muted">
                  <Check aria-hidden="true" className="h-3.5 w-3.5 text-brand-ink" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col bg-surface p-6 md:p-10">
            <p className="hud-label text-ink-faint">Project facts</p>
            <dl className="mt-4 border-t border-line">
              {facts.map((fact) => (
                <div key={fact.label} className="flex items-baseline justify-between gap-4 border-b border-line py-3">
                  <dt className="hud-label text-ink-faint">{fact.label}</dt>
                  <dd className="text-right text-sm text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="grid gap-px border-t border-line bg-line md:grid-cols-2">
          <div data-reveal className="flex flex-col bg-surface p-6 md:p-10">
            <p className="hud-label text-ink-faint">Stack</p>
            <h3 className="mt-4 font-display text-3xl font-medium leading-[1.05] tracking-[-0.03em] text-ink-strong sm:text-4xl">
              Built <Accent tone="brand">with</Accent>.
            </h3>
            <p className="mt-4 max-w-md leading-relaxed text-ink-muted">{project.summary}</p>
            <ul aria-label="Stack" className="mt-auto flex flex-wrap gap-1.5 pt-10">
              {project.stack.map((tech) => (
                <li key={tech} className={cn(tag, "text-ink-muted")}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal className="flex flex-col bg-surface p-6 md:p-10">
            <p className="hud-label text-ink-faint">Talk it through</p>
            <h3 className="mt-4 font-display text-3xl font-medium leading-[1.05] tracking-[-0.03em] text-ink-strong sm:text-4xl">
              Ask me <Accent tone="brand">anything</Accent>.
            </h3>
            <p className="mt-4 max-w-md leading-relaxed text-ink-muted">
              Every number on this page has trade-offs behind it. I am happy to walk through the decisions, the
              mistakes and what I would do differently.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className={ctaVariants({ variant: "invert", size: "sm" })}>
                <Mail aria-hidden="true" />
                Email me
              </a>
              {github && (
                <a
                  href={github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ctaVariants({ variant: "outline", size: "sm" })}
                >
                  <Github aria-hidden="true" />
                  {github.handle}
                </a>
              )}
            </div>
          </div>
        </div>
      </Section>

      <Section id="more" index="05" eyebrow="More work" note={`${others.length} more projects`}>
        <div className="flex flex-col gap-4 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-10 md:py-16">
          <h2
            data-reveal
            className="max-w-2xl font-display text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-ink-strong sm:text-5xl"
          >
            More from the <Accent tone="brand">lineup</Accent>.
          </h2>
          <Link href="/projects" className="hud-label flex items-center gap-1.5 text-ink-muted hover:text-ink">
            All projects
            <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div data-reveal-group className="grid gap-px border-t border-line bg-line md:grid-cols-3">
          {others.map((other) => (
            <ProjectCard key={other.slug} project={other} index={work.indexOf(other)} />
          ))}
        </div>
      </Section>

      <Section id="start" railLabel="Start">
        <div className="flex flex-col items-center px-6 py-20 text-center md:py-28">
          <p className="hud-label text-ink-faint">{profile.location} · Remote</p>
          <h2
            data-reveal
            className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-ink-strong sm:text-6xl md:text-7xl"
          >
            Build what&apos;s <Accent tone="brand">next</Accent>.
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
