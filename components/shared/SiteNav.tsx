"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Menu, X } from "lucide-react";
import { LogoMark } from "@/components/shared/LogoMark";
import { ThemeCycleButton, ThemeSegmented } from "@/components/shared/ThemeToggle";
import { ctaVariants } from "@/components/ui/cta";
import { cn } from "@/lib/utils";
import { profile, socials } from "@/lib/site";

interface NavLink {
  label: string;
  href: string;
  match: (pathname: string) => boolean;
}

const links: NavLink[] = [
  { label: "Home", href: "/", match: (p) => p === "/" },
  { label: "Work", href: "/#work", match: () => false },
  { label: "Experience", href: "/#experience", match: () => false },
  { label: "Projects", href: "/projects", match: (p) => p.startsWith("/projects") },
  { label: "Writing", href: "/blog", match: (p) => p.startsWith("/blog") },
];

const github = socials.find((s) => s.label === "GitHub");

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky left-0 top-0 z-50 w-full border-b border-line bg-surface/95 backdrop-blur-sm">
      <a
        href="#main"
        className="hud-label sr-only bg-brand px-3 py-2 text-brand-fg focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[60]"
      >
        Skip to content
      </a>
      <div className="flex h-12 items-stretch justify-between">
        <div className="flex min-w-0 items-stretch">
          <Link
            href="/"
            aria-label={`${profile.name}, home`}
            className="flex items-center border-r border-line px-4 text-ink-strong transition-opacity hover:opacity-70 sm:px-5"
          >
            <LogoMark />
          </Link>
          <nav aria-label="Main" className="hidden lg:flex">
            <ul className="flex h-full items-stretch">
              {links.map((link) => {
                const active = link.match(pathname);
                return (
                  <li key={link.href} className="flex items-stretch">
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "hud-label group flex h-full items-center whitespace-nowrap px-2.5",
                        active ? "text-ink" : "text-ink-muted hover:text-ink",
                      )}
                    >
                      <span
                        className={cn(
                          "px-1.5 py-0.5 group-hover:bg-invert-bg group-hover:text-invert-fg",
                          active && "bg-invert-bg text-invert-fg",
                        )}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="flex shrink-0 items-stretch">
          <p className="hud-label hidden items-center px-4 text-ink-faint xl:flex">
            <span aria-hidden="true" className="mr-2 inline-block h-1.5 w-1.5 animate-pulse bg-brand" />
            Open to new work
          </p>
          {github && (
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hidden w-12 items-center justify-center border-l border-line text-ink-muted transition-colors hover:bg-invert-bg hover:text-invert-fg md:flex"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
          <ThemeCycleButton />
          <Link
            href="/#contact"
            className={cn(
              ctaVariants({ variant: "brand" }),
              "hidden h-full border-l border-line px-5 md:inline-flex",
            )}
          >
            Get in touch
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="flex w-12 items-center justify-center border-l border-line text-ink-muted transition-colors hover:bg-invert-bg hover:text-invert-fg lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-surface lg:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="grid gap-px bg-line">
            {links.map((link) => (
              <li key={link.href} className="bg-surface">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={link.match(pathname) ? "page" : undefined}
                  className="flex items-center justify-between px-5 py-4 font-display text-xl font-medium tracking-tight text-ink-strong hover:bg-surface-sunken"
                >
                  {link.label}
                  <span aria-hidden="true" className="hud-label text-ink-faint">
                    ↗
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line px-5 py-4">
          <ThemeSegmented />
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className={ctaVariants({ variant: "brand" })}
          >
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}
