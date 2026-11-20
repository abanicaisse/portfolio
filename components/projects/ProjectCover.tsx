import Image from "next/image";
import type { ProjectImage } from "@/lib/site";
import { cn } from "@/lib/utils";

interface ProjectCoverProps {
  cover: ProjectImage;
  metric: string;
  metricCaption: string;
  sizes: string;
  className?: string;
}

/** Cover art for a project card, with the headline number pinned to a corner. */
export function ProjectCover({ cover, metric, metricCaption, sizes, className }: ProjectCoverProps) {
  return (
    <div className={cn("relative overflow-hidden bg-surface-sunken", className)}>
      <Image
        src={cover.src}
        alt={cover.alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <p className="absolute bottom-3 right-3 flex items-baseline gap-2 border border-line bg-surface/85 px-2.5 py-1.5 backdrop-blur-md">
        <span className="font-display text-lg font-semibold leading-none tracking-[-0.03em] text-ink-strong">
          {metric}
        </span>
        <span className="hud-label text-brand-ink">{metricCaption}</span>
      </p>
    </div>
  );
}
