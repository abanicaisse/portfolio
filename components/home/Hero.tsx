import Link from "next/link";
import { ArrowDownRight, Github } from "lucide-react";
import { OrbitField } from "@/components/home/OrbitField";
import { ctaVariants } from "@/components/ui/cta";
import { profile, socials } from "@/lib/site";

const github = socials.find((s) => s.label === "GitHub");

const letterGlow = {
  textShadow:
    "0 0 0.6vw hsl(var(--surface) / 0.92), 0 0.25vw 2.4vw hsl(var(--surface) / 0.78), 0 0.4vw 5vw hsl(var(--surface) / 0.55)",
};

function Wordmark() {
  return (
    <div className="relative w-full" style={{ containerType: "inline-size" }}>
      <div
        aria-hidden="true"
        className="absolute -inset-x-[6%] -inset-y-[34%]"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          maskImage: "radial-gradient(closest-side, black 45%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(closest-side, black 45%, transparent 100%)",
        }}
      />
      <p
        aria-label={profile.name}
        className="pointer-events-auto relative select-none whitespace-pre font-display font-wide leading-none text-ink-strong [perspective:600px]"
        style={{ fontWeight: 750, fontSize: "15.6cqw" }}
      >
        {profile.wordmark.split("").map((letter, i) => (
          <span
            key={`${letter}-${i}`}
            aria-hidden="true"
            className="wm-letter"
            style={{ ...letterGlow, "--i": i }}
          >
            {letter}
          </span>
        ))}
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" data-section className="relative">
      <div className="relative flex min-h-[calc(100svh-3rem)] flex-col">
        <OrbitField />

        <div className="pointer-events-none relative z-40 mx-auto flex w-full max-w-[1120px] flex-1 flex-col items-center justify-center px-6 py-16 md:px-10">
          <div
            data-reveal-group
            className="relative flex w-full max-w-2xl flex-col items-center text-center"
          >
            <div
              aria-hidden="true"
              className="absolute"
              style={{
                inset: "-88px -128px",
                background: "radial-gradient(closest-side, hsl(var(--surface) / 0.78), transparent)",
              }}
            />

            <Wordmark />

            <h1
              data-reveal
              className="relative mt-8 font-display text-3xl font-medium leading-[1.05] tracking-[-0.03em] text-ink-strong sm:text-4xl"
            >
              Frontend engineer{" "}
              <span className="font-serif font-normal italic text-ink-muted">for the web.</span>
            </h1>

            <p data-reveal className="relative mt-4 max-w-md text-lg leading-relaxed text-ink-muted">
              {profile.bio}
            </p>

            <div
              data-reveal
              className="pointer-events-auto relative mt-7 flex w-full max-w-sm flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:justify-center"
            >
              <Link href="/#work" className={ctaVariants({ variant: "brand", className: "w-full sm:w-fit" })}>
                <ArrowDownRight aria-hidden="true" />
                See the work
              </Link>
              <Link href="/#contact" className={ctaVariants({ variant: "outline", className: "w-full sm:w-fit" })}>
                Get in touch
              </Link>
            </div>

            <p data-reveal className="pointer-events-auto relative mt-6 text-balance leading-relaxed text-ink-muted">
              I also write about the work.{" "}
              <Link
                href="/blog"
                className="text-ink underline decoration-line-strong underline-offset-4 hover:decoration-current"
              >
                Read the blog
              </Link>
              .
            </p>

            <div
              data-reveal
              className="pointer-events-auto relative mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
            >
              {github && (
                <a
                  href={github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hud-label flex items-center gap-1.5 text-ink-faint hover:text-ink"
                >
                  <Github className="h-3.5 w-3.5" aria-hidden="true" />
                  {github.handle}
                </a>
              )}
              <p className="hud-label text-ink-faint">
                {profile.location} · {profile.timezone}
              </p>
              <p className="hud-label text-ink-faint">Open to remote roles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
