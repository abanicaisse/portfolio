"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Marks [data-reveal] and [data-choreo] elements with [data-revealed] as they
 * enter the viewport. Siblings inside a [data-reveal-group] get a stagger index.
 * The CSS in globals.css does the animating; this only flips attributes.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (!root.hasAttribute("data-intro")) return;

    document.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
      group.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el, i) => {
        el.style.setProperty("--reveal-index", String(Math.min(i, 8)));
      });
    });

    const targets = document.querySelectorAll<HTMLElement>(
      "[data-reveal]:not([data-revealed]), [data-choreo]:not([data-revealed])",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-revealed", "");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    targets.forEach((el) => observer.observe(el));

    // Never leave content hidden if something above the fold was missed.
    const failsafe = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])")
        .forEach((el) => {
          if (el.getBoundingClientRect().top < window.innerHeight) {
            el.setAttribute("data-revealed", "");
          }
        });
    }, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [pathname]);

  return null;
}
