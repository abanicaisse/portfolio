import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Accent, Section, SectionIntro } from "@/components/shared/Section";
import { capabilities } from "@/lib/site";

export function CapabilitiesSection() {
  return (
    <Section id="capabilities" index="02" eyebrow="Capabilities" note="Web · Mobile · Backend">
      <SectionIntro
        title={
          <>
            What I <Accent>do</Accent>.
          </>
        }
        lede="I can take a product from idea to launch on my own, or lead the team that builds it."
      />

      <ol data-reveal-group className="grid gap-px border-t border-line bg-line md:grid-cols-2">
        {capabilities.map((item, i) => (
          <li key={item.title} data-reveal className="flex flex-col bg-surface">
            <div className="flex flex-1 flex-col p-6 md:p-10">
              <p className="hud-label text-ink-faint">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-6 font-display text-3xl font-medium leading-[1.05] tracking-[-0.03em] text-ink-strong">
                {item.title}
              </h3>
              <p className="mt-3 max-w-md text-lg leading-relaxed text-ink">{item.pitch}</p>
              <ul className="mt-6 flex flex-col gap-2.5">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 leading-relaxed text-ink-muted">
                    <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-brand-ink" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={item.proof.href}
              className="group flex items-end justify-between gap-6 border-t border-line bg-surface-sunken px-6 py-5 transition-colors hover:bg-surface md:px-10"
            >
              <span className="flex items-baseline gap-4">
                <span className="font-display text-4xl font-semibold leading-none tracking-[-0.04em] text-ink-strong">
                  {item.proof.value}
                </span>
                <span>
                  <span className="block text-sm text-ink">{item.proof.label}</span>
                  <span className="hud-label mt-1 block text-ink-faint">{item.proof.project}</span>
                </span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-ink-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
              />
            </Link>
          </li>
        ))}
      </ol>
    </Section>
  );
}
