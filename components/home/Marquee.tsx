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

export function Marquee() {
  return (
    <div className="marquee border-t border-line" role="region" aria-label="Focus areas">
      <Track />
      <Track hidden />
    </div>
  );
}
