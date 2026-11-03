import Link from "next/link";
import { LogoMark } from "@/components/shared/LogoMark";
import { ThemeSegmented } from "@/components/shared/ThemeToggle";
import { profile, socials } from "@/lib/site";

const siteLinks = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/projects" },
  { label: "Writing", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1120px] border-x border-line">
        <div className="grid gap-px bg-line md:grid-cols-4 lg:grid-cols-[2fr_1fr_1fr]">
          <div className="bg-surface p-6 md:col-span-4 md:p-10 lg:col-span-1">
            <LogoMark className="h-8 text-ink-strong" />
            <p className="mt-4 max-w-xs leading-relaxed text-ink-muted">
              {profile.role} in {profile.location}. Building for the web since 2023.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="hud-label mt-6 inline-block break-all text-ink-faint hover:text-ink"
            >
              {profile.email}
            </a>
          </div>
          <nav aria-label="Site" className="bg-surface p-6 md:col-span-2 md:p-8 lg:col-span-1">
            <p className="hud-label text-ink-faint">Site</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ink-muted hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Elsewhere" className="bg-surface p-6 md:col-span-2 md:p-8 lg:col-span-1">
            <p className="hud-label text-ink-faint">Elsewhere</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {socials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-muted hover:text-ink"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-4 border-t border-line px-6 py-4 md:flex-row md:items-center md:justify-between md:px-10">
          <p className="hud-label text-ink-faint">
            © {year} {profile.name}
          </p>
          <ThemeSegmented />
          <p className="hud-label text-ink-faint">Built with Next.js &amp; Payload</p>
        </div>
      </div>
    </footer>
  );
}
