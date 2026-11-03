import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  index?: string;
  eyebrow?: string;
  note?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Bordered column with a drawn top rule, corner ticks and a sticky
 * "01 / Label" eyebrow. Every home section shares this frame.
 */
export function Section({ id, index, eyebrow, note, className, children }: SectionProps) {
  const headingId = `${id}-label`;

  return (
    <section
      id={id}
      data-choreo
      data-section
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
}

export function SectionIntro({ title, lede, aside }: SectionIntroProps) {
  return (
    <div className="flex flex-col gap-6 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-10 md:py-20">
      <div>
        <h2
          data-reveal
          className="max-w-3xl text-balance font-display text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-ink-strong sm:text-5xl md:text-6xl"
        >
          {title}
        </h2>
        {lede && (
          <p data-reveal className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
            {lede}
          </p>
        )}
      </div>
      {aside && <div data-reveal className="shrink-0">{aside}</div>}
    </div>
  );
}

/** The serif italic accent word used inside display headings. */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="font-serif font-normal italic">{children}</span>;
}
