import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Accent, Section, SectionIntro } from "@/components/shared/Section";
import { socials, work } from "@/lib/site";

const github = socials.find((s) => s.label === "GitHub");

export function WorkSection() {
  return (
    <Section id="work" index="01" eyebrow="Selected work" note="2023 — Now">
      <SectionIntro
        title={
          <>
            Things I&apos;ve <Accent>shipped</Accent>.
          </>
        }
        lede="A few products I led or built, and what changed because of them."
        aside={
          <Link
            href="/projects"
            className="hud-label flex items-center gap-1.5 text-ink-muted hover:text-ink"
          >
            All projects
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        }
      />

      <div data-reveal-group className="grid gap-px border-t border-line bg-line md:grid-cols-2">
        {work.map((item, i) => (
          <article key={item.slug} data-reveal className="group flex flex-col bg-surface">
            <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-2.5 md:px-8">
              <p className="hud-label text-ink-muted">{item.label}</p>
              <p className="hud-label text-ink-faint">{String(i + 1).padStart(2, "0")}</p>
            </div>

            <div className="relative flex aspect-[16/9] w-full flex-col items-center justify-center overflow-hidden bg-surface-sunken">
              <span
                aria-hidden="true"
                className="absolute inset-0 opacity-60 [background-image:linear-gradient(hsl(var(--line))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--line))_1px,transparent_1px)] [background-size:32px_32px]"
              />
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand-solid transition-transform duration-500 group-hover:scale-x-100" />
              <p className="relative font-display text-6xl font-semibold tracking-[-0.04em] text-ink-strong transition-transform duration-500 ease-out group-hover:-translate-y-1 sm:text-7xl">
                {item.metric}
              </p>
              <p className="hud-label relative mt-3 text-brand-ink">{item.metricCaption}</p>
              <span aria-hidden="true" className="tick left-2 top-2 opacity-60" />
              <span aria-hidden="true" className="tick bottom-2 right-2 opacity-60" />
              <p className="hud-label absolute bottom-3 left-4 text-ink-faint">{item.year}</p>
            </div>

            <div className="flex flex-1 flex-col px-6 py-6 md:px-8">
              <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-ink-strong">
                {item.title}
              </h3>
              <p className="mt-2 max-w-xl leading-relaxed text-ink-muted">{item.summary}</p>
              <ul aria-label="Stack" className="mt-5 flex flex-wrap gap-1.5">
                {item.stack.map((tech) => (
                  <li key={tech} className="hud-label border border-line px-2 py-1 text-ink-faint">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}

        {github && (
          <a
            data-reveal
            href={github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-6 bg-surface px-6 py-6 md:col-span-2 md:px-8"
          >
            <div>
              <p className="font-display text-2xl font-medium tracking-[-0.02em] text-ink-strong">
                More on GitHub
              </p>
              <p className="mt-1 text-ink-muted">Side projects, experiments and open-source contributions.</p>
            </div>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-line-strong text-ink transition-colors group-hover:bg-invert-bg group-hover:text-invert-fg">
              <ArrowUpRight className="h-6 w-6" aria-hidden="true" />
            </span>
          </a>
        )}
      </div>
    </Section>
  );
}
