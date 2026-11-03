import type { WorkItem } from "@/lib/site";
import { ProjectMark } from "@/components/projects/ProjectMark";
import { accentFill } from "@/components/projects/accent";
import { cn } from "@/lib/utils";

interface ProjectPreviewProps {
  project: WorkItem;
}

/**
 * Stand-in for a product screenshot: a browser frame on the blueprint grid,
 * with the project's headline number and key facts.
 */
export function ProjectPreview({ project }: ProjectPreviewProps) {
  const [lead, ...rest] = project.detail.facts;

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-sunken sm:aspect-video">
      <span
        aria-hidden="true"
        className="absolute inset-0 opacity-70 [background-image:linear-gradient(hsl(var(--line))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--line))_1px,transparent_1px)] [background-size:40px_40px]"
      />

      <div className="absolute inset-x-4 bottom-0 top-6 flex flex-col border border-b-0 border-line-strong bg-surface shadow-[0_40px_80px_-40px_hsl(var(--ink-strong)/0.45)] sm:inset-x-[8%] sm:top-[9%]">
        <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
          </span>
          <span className="hud-label truncate text-ink-faint">{project.title}</span>
        </div>

        <div className="grid flex-1 grid-cols-[auto_1fr] overflow-hidden">
          <div className="hidden w-14 flex-col items-center gap-3 border-r border-line py-4 sm:flex md:w-16">
            <ProjectMark project={project} className="h-8 w-8 text-xs md:h-9 md:w-9 md:text-sm" />
            {[0, 1, 2, 3].map((i) => (
              <span key={i} aria-hidden="true" className={cn("h-6 w-6 border border-line", i === 0 && "bg-surface-sunken")} />
            ))}
          </div>

          <div className="flex min-w-0 flex-col gap-4 p-4 md:gap-6 md:p-8">
            <div className="flex items-end justify-between gap-4">
              <div className="min-w-0">
                <p className="hud-label text-brand-ink">{lead.label}</p>
                <p className="mt-2 font-display text-5xl font-semibold leading-none tracking-[-0.04em] text-ink-strong md:text-7xl">
                  {lead.value}
                </p>
              </div>
              <span className={cn("hud-label hidden px-2 py-1 font-bold text-brand-fg sm:inline", accentFill[project.accent])}>
                {project.status}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-px border border-line bg-line">
              {rest.map((fact) => (
                <div key={fact.label} className="min-w-0 bg-surface p-3 md:p-4">
                  <p className="font-display text-xl font-semibold tracking-[-0.03em] text-ink-strong md:text-3xl">
                    {fact.value}
                  </p>
                  <p className="hud-label mt-1 truncate !text-[9px] text-ink-faint md:!text-[10px]">{fact.label}</p>
                </div>
              ))}
            </div>

            <div aria-hidden="true" className="hidden flex-1 items-end gap-2 md:flex">
              {[38, 62, 48, 80, 56, 92, 70, 100, 64, 86, 74, 96].map((h, i) => (
                <span
                  key={i}
                  className={cn("flex-1", i % 4 === 3 ? accentFill[project.accent] : "bg-line-strong/60")}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <span aria-hidden="true" className="tick left-2 top-2 opacity-60" />
      <span aria-hidden="true" className="tick right-2 top-2 opacity-60" />
    </div>
  );
}
