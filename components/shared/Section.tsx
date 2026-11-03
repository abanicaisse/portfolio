import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  index?: string;
  eyebrow?: string;
  note?: string;
  /** Label in the section rail. Defaults to the eyebrow; sections with neither stay off the rail. */
  railLabel?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Bordered column with a drawn top rule, corner ticks and a sticky
 * "01 / Label" eyebrow. Every home section shares this frame.
 */
export function Section({ id, index, eyebrow, note, railLabel, className, children }: SectionProps) {
  const headingId = `${id}-label`;
  const rail = railLabel ?? eyebrow;

  return (
    <section
      id={id}
      data-choreo
      data-section
      data-rail-label={rail}
      aria-labelledby={eyebrow ? headingId : undefined}
      className={cn("relative", className)}
    >
      <span
        aria-hidden="true"
        data-draw-rule
        className="absolute inset-x-0 top-0 h-px origin-left bg-line"
      />
      <div className="relative mx-auto max-w-[1120px] border-x border-line">
        <span aria-hidden="true" data-draw-tick className="tick tick-half -left-[6px] -top-[5px] z-[31]" />
        <span aria-hidden="true" data-draw-tick className="tick tick-half -right-[6px] -top-[5px] z-[31]" />
        {eyebrow && (
          <div className="sticky top-12 z-30 border-b border-line bg-surface/70 backdrop-blur-md">
            <div className="flex items-center justify-between gap-4 px-6 py-3 md:px-10">
              <p id={headingId} className="hud-label text-ink-muted">
                {index && (
                  <>
                    <span className="text-ink-faint">{index}</span>
                    <span aria-hidden="true" className="mx-2 text-ink-faint">
                      /
                    </span>
                  </>
                )}
                {eyebrow}
              </p>
              {note && <p className="hud-label hidden text-ink-faint sm:block">{note}</p>}
            </div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

interface SectionIntroProps {
  title: ReactNode;
  lede?: ReactNode;
  aside?: ReactNode;
  /** Page heroes render the title as the page's h1. */
  as?: "h1" | "h2";
  children?: ReactNode;
}

export function SectionIntro({ title, lede, aside, as: Heading = "h2", children }: SectionIntroProps) {
  return (
    <div className="flex flex-col gap-6 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-10 md:py-20">
      <div className="min-w-0">
        <Heading
          data-reveal
          className="max-w-3xl text-balance font-display text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-ink-strong sm:text-5xl md:text-6xl"
        >
          {title}
        </Heading>
        {lede && (
          <p data-reveal className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
            {lede}
          </p>
        )}
        {children}
      </div>
      {aside && <div data-reveal className="shrink-0">{aside}</div>}
    </div>
  );
}

/** The serif italic accent word used inside display headings. */
export function Accent({ children, tone = "ink" }: { children: ReactNode; tone?: "ink" | "brand" }) {
  return (
    <span className={cn("font-serif font-normal italic", tone === "brand" && "text-brand-ink")}>
      {children}
    </span>
  );
}
