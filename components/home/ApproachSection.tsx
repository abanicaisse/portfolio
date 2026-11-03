import { Accent, Section, SectionIntro } from "@/components/shared/Section";
import { principles } from "@/lib/site";

export function ApproachSection() {
  return (
    <Section id="approach" index="04" eyebrow="Approach" note="How I work">
      <SectionIntro
        title={
          <>
            Fewer surprises, <Accent>better</Accent> software.
          </>
        }
        lede="I lead teams the way I write code: small steps, clear owners, nothing left implicit."
      />

      <div data-reveal-group className="grid gap-px border-t border-line bg-line md:grid-cols-3">
        {principles.map((item) => (
          <article key={item.key} data-reveal className="bg-surface p-6 md:p-8">
            <p className="hud-label text-ink-faint">{item.key}</p>
            <h3 className="mt-6 font-display text-2xl font-medium tracking-[-0.02em] text-ink-strong">
              {item.title}
            </h3>
            <p className="mt-2 leading-relaxed text-ink-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
