import { ArrowDown } from "lucide-react";
import type { ProjectArchitecture as Architecture } from "@/lib/site";

interface ProjectArchitectureProps {
  architecture: Architecture;
}

/** The system drawn as stacked layers, with the protocol between each pair on the connector. */
export function ProjectArchitecture({ architecture }: ProjectArchitectureProps) {
  return (
    <ol data-reveal-group className="border-t border-line">
      {architecture.nodes.map((node, i) => (
        <li key={node.name} data-reveal>
          <div className="grid gap-px bg-line md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            <div className="flex gap-4 bg-surface p-6 md:p-8">
              <span className="hud-label flex h-8 w-8 shrink-0 items-center justify-center border border-line-strong text-ink">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-ink-strong">{node.name}</h3>
                <p className="mt-1.5 font-mono text-xs leading-relaxed text-brand-ink">{node.tech}</p>
              </div>
            </div>
            <ul className="flex flex-col gap-2 bg-surface p-6 md:p-8">
              {node.points.map((point) => (
                <li key={point} className="flex gap-3 leading-relaxed text-ink-muted">
                  <span aria-hidden="true" className="mt-[0.6em] h-1 w-1 shrink-0 bg-line-strong" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {node.link && (
            <div className="relative flex items-center gap-3 border-y border-line bg-surface-sunken px-6 py-2.5 md:px-8">
              <ArrowDown aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-brand-ink" />
              <p className="hud-label truncate text-ink-muted">{node.link}</p>
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
