import { Accent, Section, SectionIntro } from "@/components/shared/Section";
import { cn } from "@/lib/utils";
import { stack, stackGroupLabels, type StackGroup } from "@/lib/site";

const groupStyles: Record<StackGroup, { bar: string; tile: string }> = {
  frontend: { bar: "bg-orbit-1", tile: "bg-orbit-1/25" },
  backend: { bar: "bg-orbit-2", tile: "bg-orbit-2/25" },
  infra: { bar: "bg-orbit-3", tile: "bg-orbit-3/25" },
  quality: { bar: "bg-orbit-4", tile: "bg-orbit-4/25" },
};

const groups = Object.keys(stackGroupLabels) as StackGroup[];

export function StackSection() {
  return (
    <Section id="stack" index="03" eyebrow="Stack" note="TypeScript, end to end">
      <SectionIntro
        title={
          <>
            Tools I <Accent>reach for</Accent>.
          </>
        }
        lede="Mostly TypeScript, front to back. I pick boring, well-documented tools and go deep on them."
        aside={
          <ul aria-label="Legend" className="flex flex-wrap gap-x-4 gap-y-2">
            {groups.map((group) => (
              <li key={group} className="hud-label flex items-center gap-1.5 text-ink-faint">
                <span aria-hidden="true" className={cn("h-2 w-2", groupStyles[group].bar)} />
                {stackGroupLabels[group]}
              </li>
            ))}
          </ul>
        }
      />

      <ul
        data-reveal-group
        className="grid grid-cols-2 gap-px border-t border-line bg-line sm:grid-cols-4 lg:grid-cols-8"
      >
        {stack.map((item) => (
          <li
            key={item.name}
            data-reveal
            className="group relative flex items-center gap-3 bg-surface px-4 py-4 sm:flex-col sm:px-3 sm:py-6 sm:text-center md:py-8"
          >
            <span
              aria-hidden="true"
              className={cn(
                "absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                groupStyles[item.group].bar,
              )}
            />
            <span
              aria-hidden="true"
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center border border-line font-display text-base font-semibold text-ink-strong transition-transform duration-300 ease-out group-hover:-translate-y-1 sm:h-14 sm:w-14 sm:text-xl",
                groupStyles[item.group].tile,
              )}
            >
              {item.code}
            </span>
            <span className="text-sm font-medium text-ink">
              {item.name}
              <span className="sr-only">, {stackGroupLabels[item.group]}</span>
            </span>
          </li>
        ))}
        <li data-reveal className="col-span-full bg-surface px-6 py-5 text-center md:px-10">
          <p className="hud-label text-ink-faint">
            Also: Expo · MongoDB · RabbitMQ · Coolify · Vercel · Swagger · Agile/Scrum
          </p>
        </li>
      </ul>
    </Section>
  );
}
