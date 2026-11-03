"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface RailSection {
  id: string;
  label: string;
}

const TICKS = 40;

/** Every element with an id and a data-rail-label becomes a rail entry. */
function collectSections(): RailSection[] {
  return Array.from(document.querySelectorAll<HTMLElement>("[data-rail-label][id]")).map((el) => ({
    id: el.id,
    label: el.dataset.railLabel ?? el.id,
  }));
}

/**
 * Wide-screen section index (right gutter) and a scroll ruler on the edge.
 * Mounted once in the layout; it rescans the page's sections on every route.
 */
export function SectionRail() {
  const pathname = usePathname();
  const [sections, setSections] = useState<RailSection[]>([]);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const found = collectSections();
    setSections(found);

    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.4;
      let current = 0;
      found.forEach((section, i) => {
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
  }, [pathname]);

  const past = sections.slice(0, active);
  const current = sections[active];
  const upcoming = sections.slice(active + 1);
  const percent = Math.round(progress * 100);

  const minor =
    "block font-display text-[13px] font-semibold uppercase leading-[1.45] tracking-[0.06em] text-ink-faint font-wide transition-colors duration-300 hover:text-ink";

  return (
    <>
      {sections.length > 1 && (
        <nav
          aria-label="Sections"
          className="pointer-events-none fixed inset-y-12 right-8 z-40 hidden w-[220px] flex-col justify-between py-5 text-right rail:flex"
        >
          <ul className="pointer-events-auto flex flex-col items-end">
            {past.map((section) => (
              <li key={section.id} className="rail-item">
                <a href={`#${section.id}`} className={minor}>
                  {section.label}
                </a>
              </li>
            ))}
            {current && (
              <li className="mt-2">
                <a
                  key={`${pathname}-${current.id}`}
                  href={`#${current.id}`}
                  aria-current="location"
                  className="block whitespace-nowrap font-display text-[22px] font-bold uppercase leading-none tracking-[0.01em] text-ink-strong font-wide"
                >
                  <span className="sr-only">{current.label}</span>
                  <span aria-hidden="true" className="rail-word">
                    {current.label.split("").map((letter, i) => (
                      <span key={`${letter}-${i}`} className="rail-letter" style={{ "--i": i }}>
                        {letter === " " ? "\u00A0" : letter}
                      </span>
                    ))}
                  </span>
                </a>
              </li>
            )}
          </ul>
          <ul className="pointer-events-auto flex flex-col items-end">
            {upcoming.map((section) => (
              <li key={section.id} className="rail-item">
                <a href={`#${section.id}`} className={minor}>
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div aria-hidden="true" className="pointer-events-none fixed bottom-0 right-0 top-12 z-40 hidden w-3 lg:block">
        {Array.from({ length: TICKS + 1 }, (_, i) => (
          <span
            key={i}
            className={cn("absolute right-0 h-px bg-line-strong", i % 4 === 0 ? "w-3" : "w-1.5")}
            style={{ top: `${(i / TICKS) * 100}%` }}
          />
        ))}
        <span
          className="absolute right-0 h-px w-6 bg-brand-ink transition-[top] duration-300 ease-out"
          style={{ top: `${progress * 100}%` }}
        >
          <span className="hud-label absolute -top-4 right-0 !text-[9px] text-brand-ink">{percent}%</span>
        </span>
      </div>
    </>
  );
}
