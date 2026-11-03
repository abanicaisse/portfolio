import { Accent, Section, SectionIntro } from "@/components/shared/Section";
import { experience } from "@/lib/site";

export function ExperienceSection() {
  return (
    <Section id="experience" index="02" eyebrow="Experience" note="Kampala · Remote">
      <SectionIntro
        title={
          <>
            Where I&apos;ve <Accent>worked</Accent>.
          </>
        }
      />

      <ol data-reveal-group className="grid gap-px border-t border-line bg-line">
        {experience.map((item) => (
          <li
            key={`${item.company}-${item.period}`}
            data-reveal
            className="group grid gap-3 bg-surface px-6 py-7 transition-colors hover:bg-surface-sunken md:grid-cols-[10rem_1fr_1.4fr] md:gap-8 md:px-10"
          >
            <p className="hud-label pt-1 text-ink-faint">{item.period}</p>
            <div>
              <h3 className="font-display text-xl font-medium tracking-[-0.02em] text-ink-strong">
                {item.role}
              </h3>
              <p className="mt-1 text-ink-muted">
                {item.company}
                <span aria-hidden="true" className="mx-2 text-ink-faint">
                  ·
                </span>
                {item.location}
              </p>
            </div>
            <p className="leading-relaxed text-ink-muted">{item.summary}</p>
          </li>
        ))}
      </ol>

      <div className="flex flex-col gap-1 border-t border-line px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-10">
        <p className="hud-label text-ink-faint">BSc Software Engineering · Cavendish University Uganda · 2025</p>
        <p className="hud-label text-ink-faint">French · English (C2)</p>
      </div>
    </Section>
  );
}
