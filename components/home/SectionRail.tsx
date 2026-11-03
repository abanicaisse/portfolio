"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { SectionMeta } from "@/lib/site";

interface SectionRailProps {
  sections: SectionMeta[];
}

const TICKS = 40;

/**
 * Wide-screen section index (right gutter) and a scroll ruler on the edge.
 * Both are navigation aids layered on top of the normal page flow.
 */
export function SectionRail({ sections }: SectionRailProps) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.4;
      let current = 0;
      sections.forEach((section, i) => {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= line) current = i;
      });
      setActive(current);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [sections]);

  const past = sections.slice(0, active);
  const current = sections[active];
  const upcoming = sections.slice(active + 1);
  const percent = Math.round(progress * 100);

  return (
    <>
      <nav
        aria-label="Sections"
        className="pointer-events-none fixed inset-y-12 right-8 z-40 hidden w-[200px] flex-col justify-between py-4 text-right rail:flex"
      >
        <ul className="pointer-events-auto flex flex-col items-end">
          {past.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="font-display text-[11px] font-semibold uppercase leading-[1.35] tracking-[0.06em] text-ink-faint font-wide hover:text-ink"
              >
                {section.label}
              </a>
            </li>
          ))}
          {current && (
            <li className="mt-1.5">
              <a
                key={current.id}
                href={`#${current.id}`}
                aria-current="location"
                className="block whitespace-nowrap font-display text-lg font-bold uppercase leading-none tracking-[0.02em] text-ink-strong font-wide"
              >
                <span className="sr-only">{current.label}</span>
                <span aria-hidden="true">
                  {current.label.split("").map((letter, i) => (
                    <span key={`${letter}-${i}`} className="rail-letter" style={{ "--i": i }}>
                      {letter === " " ? " " : letter}
                    </span>
                  ))}
                </span>
              </a>
            </li>
          )}
        </ul>
        <ul className="pointer-events-auto flex flex-col items-end">
          {upcoming.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="font-display text-[11px] font-semibold uppercase leading-[1.35] tracking-[0.06em] text-ink-faint font-wide hover:text-ink"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div aria-hidden="true" className="pointer-events-none fixed bottom-0 right-0 top-12 z-40 hidden w-3 lg:block">
        {Array.from({ length: TICKS + 1 }, (_, i) => (
          <span
            key={i}
            className={cn("absolute right-0 h-px bg-line-strong", i % 4 === 0 ? "w-3" : "w-1.5")}
            style={{ top: `${(i / TICKS) * 100}%` }}
          />
        ))}
        <span
          className="absolute right-0 h-px w-6 bg-brand-ink transition-[top] duration-150"
          style={{ top: `${progress * 100}%` }}
        >
          <span className="hud-label absolute -top-4 right-0 !text-[9px] text-brand-ink">{percent}%</span>
        </span>
      </div>
    </>
  );
}
