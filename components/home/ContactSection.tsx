import { ArrowUpRight, Mail } from "lucide-react";
import { CopyEmailButton } from "@/components/home/CopyEmailButton";
import { Accent, Section } from "@/components/shared/Section";
import { ctaVariants } from "@/components/ui/cta";
import { profile, socials } from "@/lib/site";

export function ContactSection() {
  return (
    <Section id="contact">
      <div className="flex flex-col items-center px-6 pb-14 pt-20 text-center md:pb-16 md:pt-28">
        <p className="hud-label text-ink-faint">
          {profile.location} · {profile.timezone} · Remote friendly
        </p>
        <h2
          data-reveal
          className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-ink-strong sm:text-6xl md:text-7xl"
        >
          Let&apos;s <Accent>talk</Accent>.
        </h2>
        <p data-reveal className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
          Open to frontend roles and a few freelance projects a year. I usually reply within a day.
        </p>
      </div>

      <div data-reveal-group className="grid gap-px border-t border-line bg-line md:grid-cols-2">
        <article data-reveal className="flex flex-col bg-surface">
          <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-2.5 md:px-10">
            <p className="hud-label text-ink">Email</p>
            <p className="hud-label text-ink-faint">Fastest</p>
          </div>
          <div className="flex flex-1 flex-col p-6 md:p-10">
            <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center border border-line text-brand-ink">
              <Mail className="h-4 w-4" />
            </span>
            <h3 className="mt-6 font-display text-3xl font-medium leading-[1.05] tracking-[-0.03em] text-ink-strong">
              Write to me directly.
            </h3>
            <p className="mt-3 max-w-md break-all leading-relaxed text-ink-muted">{profile.email}</p>
            <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row sm:flex-wrap">
              <a href={`mailto:${profile.email}`} className={ctaVariants({ variant: "brand", className: "w-full sm:w-fit" })}>
                <Mail aria-hidden="true" />
                Send an email
              </a>
              <CopyEmailButton email={profile.email} />
            </div>
          </div>
        </article>

        <article data-reveal className="flex flex-col bg-surface">
          <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-2.5 md:px-10">
            <p className="hud-label text-ink">Elsewhere</p>
            <p className="hud-label text-ink-faint">Profiles</p>
          </div>
          <ul className="flex flex-1 flex-col divide-y divide-line">
            {socials.map((social) => (
              <li key={social.href} className="flex-1">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-center justify-between gap-4 px-6 py-6 transition-colors hover:bg-surface-sunken md:px-10"
                >
                  <span>
                    <span className="block font-display text-2xl font-medium tracking-[-0.02em] text-ink-strong">
                      {social.label}
                    </span>
                    <span className="hud-label mt-1 block text-ink-faint">{social.handle}</span>
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-line-strong text-ink transition-colors group-hover:bg-invert-bg group-hover:text-invert-fg">
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
