import { TrendingUp } from "lucide-react";
import type { ProjectDecision } from "@/lib/site";
import { cn } from "@/lib/utils";

interface ProjectDecisionsProps {
  decisions: ProjectDecision[];
}

export function ProjectDecisions({ decisions }: ProjectDecisionsProps) {
  return (
    <ol data-reveal-group className="grid gap-px border-t border-line bg-line md:grid-cols-2">
      {decisions.map((decision, i) => (
        <li
          key={decision.title}
          data-reveal
          className={cn(
            "flex flex-col bg-surface p-6 md:p-8",
            decisions.length % 2 === 1 && i === decisions.length - 1 && "md:col-span-2",
          )}
        >
          <p className="hud-label text-brand-ink">Decision {String(i + 1).padStart(2, "0")}</p>
          <h3 className="mt-4 text-balance font-display text-2xl font-medium leading-tight tracking-[-0.02em] text-ink-strong">
            {decision.title}
          </h3>
          <p className="mt-3 leading-relaxed text-ink-muted">{decision.body}</p>
          <p className="mt-auto flex items-start gap-2.5 pt-6 text-sm font-medium leading-relaxed text-ink">
            <TrendingUp aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-ink" />
            {decision.impact}
          </p>
        </li>
      ))}
    </ol>
  );
}
