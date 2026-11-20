import { marqueeItems } from "@/lib/site";

function Track({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="marquee-track items-center">
      {marqueeItems.map((item) => (
        <li key={item} className="hud-label flex items-center whitespace-nowrap px-6 py-3 text-ink-muted">
          <span aria-hidden="true" className="mr-6 text-brand-ink">
            ▪
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Clients and teams I have built for, scrolling under the hero. */
export function Marquee() {
  return (
    <div className="flex border-y border-line" role="region" aria-label="Clients and teams">
      <p className="hud-label flex shrink-0 items-center border-r border-line bg-surface px-6 py-3 text-ink">
        Built for
      </p>
      <div className="marquee min-w-0 flex-1">
        <Track />
        <Track hidden />
      </div>
    </div>
  );
}
