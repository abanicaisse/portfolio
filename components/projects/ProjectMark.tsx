import type { WorkItem } from "@/lib/site";
import { cn } from "@/lib/utils";
import { accentFill } from "@/components/projects/accent";

interface ProjectMarkProps {
  project: Pick<WorkItem, "monogram" | "accent">;
  className?: string;
}

/** App-icon style tile: the project's monogram on its accent colour. */
export function ProjectMark({ project, className }: ProjectMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden rounded-[22%] font-display font-semibold tracking-[-0.04em] text-brand-fg shadow-[0_6px_14px_hsl(var(--ink-strong)/0.28)]",
        accentFill[project.accent],
        className,
      )}
    >
      <span className="absolute inset-0 bg-gradient-to-b from-white/35 to-transparent" />
      <span className="relative">{project.monogram}</span>
    </span>
  );
}
