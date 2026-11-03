"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type OrbitCard =
  | { kind: "metric"; head: string; value: string; caption: string }
  | { kind: "code"; head: string; lines: string[] }
  | { kind: "terminal"; head: string; lines: string[] }
  | { kind: "swatch"; head: string; value: string }
  | { kind: "check"; head: string; items: string[] }
  | { kind: "badge"; head: string; value: string; caption: string };

const cards: OrbitCard[] = [
  { kind: "metric", head: "Telex", value: "−30%", caption: "Load time" },
  { kind: "code", head: "ship.ts", lines: ["const ship = (pr: PR) =>", "  review(pr).then(merge);"] },
  { kind: "terminal", head: "zsh", lines: ["$ pnpm build", "✓ Compiled successfully"] },
  { kind: "swatch", head: "Brand", value: "#AEA3E7" },
  { kind: "metric", head: "STEMSEL", value: "200+", caption: "Students" },
  { kind: "check", head: "Definition of done", items: ["Types", "Tests", "a11y", "Review"] },
  { kind: "badge", head: "Contrast", value: "AA", caption: "Both themes" },
  { kind: "code", head: "tsconfig.json", lines: ['"strict": true,', '"noImplicitAny": true'] },
  { kind: "terminal", head: "git", lines: ["$ git commit -m", '  "feat: orbit hero"'] },
  { kind: "metric", head: "Kampala", value: "UTC+3", caption: "0.35° N · 32.58° E" },
  { kind: "metric", head: "Telex", value: "1 wk", caption: "Ahead of deadline" },
  { kind: "code", head: "page.tsx", lines: ["export default async function", "  Page() { /* server */ }"] },
  { kind: "badge", head: "Rendering", value: "RSC", caption: "Server first" },
];

const RING_COUNT = 7;
const MOBILE_CARD_LIMIT = 7;

/** Deterministic pseudo-random so server and client markup match. */
function seeded(i: number) {
  const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function CardBody({ card }: { card: OrbitCard }) {
  switch (card.kind) {
    case "metric":
      return (
        <div className="px-3 py-2.5">
          <p className="font-display text-[28px] font-semibold leading-none tracking-tight text-ink-strong">
            {card.value}
          </p>
          <p className="hud-label mt-2 !text-[9px] text-ink-faint">{card.caption}</p>
        </div>
      );
    case "code":
    case "terminal":
      return (
        <pre
          className={cn(
            "overflow-hidden px-3 py-2.5 font-mono text-[10px] leading-[1.6]",
            card.kind === "terminal" ? "bg-invert-bg text-invert-fg" : "text-ink-muted",
          )}
        >
          {card.lines.map((line) => (
            <span key={line} className="block whitespace-pre">
              {line}
            </span>
          ))}
        </pre>
      );
    case "swatch":
      return (
        <div className="flex items-end gap-2 p-2.5">
          <span className="h-12 w-12 bg-brand" />
          <span className="h-12 w-6 bg-brand-ink" />
          <span className="h-12 w-3 bg-brand-fg" />
          <span className="hud-label ml-auto !text-[9px] text-ink-faint">{card.value}</span>
        </div>
      );
    case "check":
      return (
        <ul className="grid grid-cols-2 gap-x-3 gap-y-1 px-3 py-2.5">
          {card.items.map((item) => (
            <li key={item} className="hud-label flex items-center gap-1.5 !text-[9px] text-ink-muted">
              <span className="h-2 w-2 bg-brand-solid" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "badge":
      return (
        <div className="flex items-center gap-3 px-3 py-2.5">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand-solid font-display text-sm font-semibold text-ink-strong">
            {card.value}
          </span>
          <span className="hud-label !text-[9px] text-ink-faint">{card.caption}</span>
        </div>
      );
  }
}

export function OrbitField() {
  const rootRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const ringRefs = useRef<(SVGCircleElement | null)[]>([]);
  const arcRefs = useRef<(SVGCircleElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hovered = useRef<number | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const svg = svgRef.current;
    if (!root || !svg) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const state = {
      w: 0,
      h: 0,
      pointerX: 0,
      pointerY: 0,
      cx: 0,
      cy: 0,
      time: 0,
      visible: true,
      progress: cards.map((_, i) => i / cards.length),
      angles: cards.map((_, i) => seeded(i) * Math.PI * 2),
    };

    const resize = () => {
      const rect = root.getBoundingClientRect();
      state.w = rect.width;
      state.h = rect.height;
      svg.setAttribute("viewBox", `0 0 ${rect.width} ${rect.height}`);
      if (!state.cx) {
        state.cx = rect.width / 2;
        state.cy = rect.height / 2;
      }
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(root);

    const onPointer = (e: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      state.pointerX = (e.clientX - rect.left) / rect.width - 0.5;
      state.pointerY = (e.clientY - rect.top) / rect.height - 0.5;
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    const visibility = new IntersectionObserver(([entry]) => {
      state.visible = entry.isIntersecting;
    });
    visibility.observe(root);

    const draw = () => {
      const { w, h } = state;
      const minDim = Math.min(w, h);
      const unit = Math.max(0.6, Math.min(1, w / 1100));

      // Ease the vanishing point toward the pointer
      const targetX = w / 2 + state.pointerX * w * 0.08;
      const targetY = h / 2 + state.pointerY * h * 0.08;
      state.cx += (targetX - state.cx) * 0.05;
      state.cy += (targetY - state.cy) * 0.05;

      // Rings drift away from the vanishing point, so they read as a tunnel
      for (let k = 0; k < RING_COUNT; k++) {
        const r = minDim * 0.18 * Math.pow(1.42, k);
        const lag = k / RING_COUNT;
        const x = state.cx + (w / 2 - state.cx) * lag * 2.2;
        const y = state.cy + (h / 2 - state.cy) * lag * 2.2;
        const ring = ringRefs.current[k];
        const arc = arcRefs.current[k];
        ring?.setAttribute("cx", String(x));
        ring?.setAttribute("cy", String(y));
        ring?.setAttribute("r", String(r));
        if (arc) {
          arc.setAttribute("cx", String(x));
          arc.setAttribute("cy", String(y));
          arc.setAttribute("r", String(r));
          const turn = (state.time * (k % 2 ? -4 : 6) + k * 47) % 360;
          arc.setAttribute("transform", `rotate(${turn} ${x} ${y})`);
        }
      }

      cards.forEach((_, i) => {
        const el = cardRefs.current[i];
        if (!el) return;
        const p = state.progress[i];
        const depth = 0.3 + Math.pow(p, 1.5) * 1.35;
        const radius = minDim * (0.1 + p * 0.82);
        const angle = state.angles[i] + p * 1.1;
        const x = state.cx + Math.cos(angle) * radius * 1.35;
        const y = state.cy + Math.sin(angle) * radius;
        const fade = smoothstep(0, 0.14, p) * (1 - smoothstep(0.86, 1, p));
        const isHovered = hovered.current === i;
        const scale = depth * unit * (isHovered ? 1.7 : 1);

        el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`;
        // On narrow screens the cards share space with the copy, so keep them quiet.
        const crowding = w < 768 ? 0.45 : 1;
        el.style.opacity = String(isHovered ? 1 : fade * crowding);
        el.style.zIndex = isHovered ? "30" : String(Math.round(p * 20));
        el.style.filter = p < 0.25 && !isHovered ? `blur(${(0.25 - p) * 10}px)` : "none";
      });
    };

    if (reduceMotion) {
      draw();
      return () => {
        resizeObserver.disconnect();
        visibility.disconnect();
        window.removeEventListener("pointermove", onPointer);
      };
    }

    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!state.visible || document.hidden) return;
      state.time += dt;
      state.progress = state.progress.map((p, i) =>
        hovered.current === i ? p : (p + dt * 0.028) % 1,
      );
      draw();
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibility.disconnect();
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return (
    <div ref={rootRef} aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <svg ref={svgRef} className="absolute inset-0 h-full w-full" fill="none">
        {Array.from({ length: RING_COUNT }, (_, k) => (
          <g key={k}>
            <circle
              ref={(node) => {
                ringRefs.current[k] = node;
              }}
              className={k === 2 ? "stroke-ink-faint/50" : "stroke-line-strong/70"}
              strokeWidth={k === 2 ? 1.25 : 1}
            />
            <circle
              ref={(node) => {
                arcRefs.current[k] = node;
              }}
              pathLength={100}
              strokeDasharray="14 86"
              strokeLinecap="round"
              strokeWidth={1.5}
              className={cn(
                "stroke-transparent",
                ["dark:stroke-orbit-1", "dark:stroke-orbit-2", "dark:stroke-orbit-3", "dark:stroke-orbit-4"][k % 4],
                k % 3 === 0 && "stroke-brand/60",
              )}
            />
          </g>
        ))}
      </svg>

      {cards.map((card, i) => (
        <div
          key={`${card.head}-${i}`}
          ref={(node) => {
            cardRefs.current[i] = node;
          }}
          onPointerEnter={() => {
            hovered.current = i;
          }}
          onPointerLeave={() => {
            hovered.current = null;
          }}
          style={{ opacity: 0 }}
          className={cn(
            "absolute left-0 top-0 w-[184px] origin-center border border-line bg-surface-raised shadow-[0_18px_40px_-18px_hsl(var(--ink-strong)/0.35)] transition-[filter] will-change-transform",
            i >= MOBILE_CARD_LIMIT && "hidden md:block",
          )}
        >
          <div className="flex items-center justify-between border-b border-line px-3 py-1.5">
            <span className="hud-label !text-[9px] text-ink-muted">{card.head}</span>
            <span className="flex gap-1">
              <span className="h-1.5 w-1.5 bg-line-strong" />
              <span className="h-1.5 w-1.5 bg-line-strong" />
            </span>
          </div>
          <CardBody card={card} />
        </div>
      ))}
    </div>
  );
}
