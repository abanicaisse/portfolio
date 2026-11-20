import Image from "next/image";
import type { WorkItem } from "@/lib/site";
import { cn } from "@/lib/utils";
import { accentFill } from "@/components/projects/accent";

interface ProjectMarkProps {
  project: Pick<WorkItem, "monogram" | "accent" | "logo">;
  className?: string;
}

const tile =
  "relative flex shrink-0 items-center justify-center overflow-hidden rounded-[22%] shadow-[0_6px_14px_hsl(var(--ink-strong)/0.28)]";

/** App-icon style tile: the product's own icon, or its monogram on the accent colour. */
export function ProjectMark({ project, className }: ProjectMarkProps) {
  const { logo } = project;

  if (logo) {
    return (
      <span aria-hidden="true" className={cn(tile, logo.fit === "contain" && "bg-white", className)}>
        <Image
          src={logo.src}
          alt=""
          fill
          sizes="112px"
          unoptimized={logo.src.endsWith(".svg")}
          className={logo.fit === "contain" ? "object-contain p-[7%]" : "object-cover"}
        />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className={cn(
        tile,
        "font-display font-semibold tracking-[-0.04em] text-brand-fg",
        accentFill[project.accent],
        className,
      )}
    >
      <span className="absolute inset-0 bg-gradient-to-b from-white/35 to-transparent" />
      <span className="relative">{project.monogram}</span>
    </span>
  );
}
