import Image from "next/image";
import { Accent, Section, SectionIntro } from "@/components/shared/Section";
import { cn } from "@/lib/utils";
import { stack, stackGroupLabels, type StackGroup } from "@/lib/site";

const groupStyles: Record<StackGroup, { bar: string }> = {
  frontend: { bar: "bg-orbit-1" },
  backend: { bar: "bg-orbit-2" },
  infra: { bar: "bg-orbit-3" },
};

const groups = Object.keys(stackGroupLabels) as StackGroup[];

export function StackSection() {
  return (
    <Section id="stack" index="04" eyebrow="Stack" note="TypeScript, device to database">
      <SectionIntro
        title={
          <>
            The stack I <Accent>ship with</Accent>.
          </>
        }
        lede="TypeScript on every layer, from the React Native app to the NestJS API."
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
        className="grid grid-cols-2 gap-px border-t border-line bg-line sm:grid-cols-3 lg:grid-cols-6"
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
              className="relative h-10 w-10 shrink-0 overflow-hidden rounded-[22%] bg-white shadow-[0_6px_14px_hsl(var(--ink-strong)/0.18)] transition-transform duration-300 ease-out group-hover:-translate-y-1 sm:h-14 sm:w-14"
            >
              <Image src={item.logo} alt="" fill unoptimized className="object-contain p-[18%]" />
            </span>
            <span className="text-sm font-medium text-ink">
              {item.name}
              <span className="sr-only">, {stackGroupLabels[item.group]}</span>
            </span>
          </li>
        ))}
        <li data-reveal className="col-span-full bg-surface px-6 py-5 text-center md:px-10">
          <p className="hud-label text-ink-faint">
            Also: Zustand · Zod · BullMQ · Framer Motion · Vercel · Jest
          </p>
        </li>
      </ul>
    </Section>
  );
}
