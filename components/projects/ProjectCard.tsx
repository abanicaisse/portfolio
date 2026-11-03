import type { WorkItem } from "@/lib/site";
import { ProjectMark } from "@/components/projects/ProjectMark";
import { accentFill } from "@/components/projects/accent";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: WorkItem;
  index: number;
}

const tag = "border border-line bg-surface-sunken px-1.5 py-px font-mono text-[10px] font-medium uppercase tracking-[0.1em]";

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article
      id={project.slug}
      data-reveal
      aria-labelledby={`${project.slug}-title`}
      className="group relative flex h-full flex-col bg-surface"
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
          accentFill[project.accent],
        )}
      />
      <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-3">
        <span className={cn("hud-label px-2 py-1 font-bold text-brand-fg", accentFill[project.accent])}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="hud-label truncate text-ink-faint">{project.label}</p>
      </div>

      <div className="relative flex aspect-[16/10] flex-col items-center justify-center overflow-hidden border-b border-line bg-surface-sunken">
        <span
          aria-hidden="true"
          className="absolute inset-0 opacity-60 [background-image:linear-gradient(hsl(var(--line))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--line))_1px,transparent_1px)] [background-size:32px_32px]"
        />
        <div className="relative flex flex-col items-center transition-transform duration-500 ease-out group-hover:scale-[1.04]">
          <p className="font-display text-6xl font-semibold tracking-[-0.04em] text-ink-strong sm:text-7xl">
            {project.metric}
          </p>
          <p className="hud-label mt-3 text-brand-ink">{project.metricCaption}</p>
        </div>
        <span aria-hidden="true" className="tick left-2 top-2 opacity-60" />
        <span aria-hidden="true" className="tick bottom-2 right-2 opacity-60" />
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 md:px-8 md:pb-8">
        <ProjectMark
          project={project}
          className="-mt-9 h-[72px] w-[72px] text-2xl transition-transform duration-300 ease-out group-hover:-translate-y-1"
        />
        <h3 id={`${project.slug}-title`} className="mt-4 font-display text-3xl font-medium leading-none tracking-[-0.03em] text-ink-strong">
          {project.title}
        </h3>
        <p className="mt-3 leading-relaxed text-ink-muted">{project.summary}</p>

        <ul aria-label="Details" className="mt-6 flex flex-wrap gap-1.5">
          <li className={cn(tag, "text-brand-ink")}>{project.status}</li>
          <li className={cn(tag, "text-brand-ink")}>{project.year}</li>
          {project.stack.map((tech) => (
            <li key={tech} className={cn(tag, "text-ink-muted")}>
              {tech}
            </li>
          ))}
        </ul>

        <p className="hud-label mt-auto pt-6 text-ink-faint">
          Role <span aria-hidden="true">·</span> <span className="text-ink-muted">{project.role}</span>
        </p>
      </div>
    </article>
  );
}
