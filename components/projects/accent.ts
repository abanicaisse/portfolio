import type { OrbitAccent } from "@/lib/site";

/** Static class names so Tailwind can see every accent. Orbit fills always take dark text. */
export const accentFill: Record<OrbitAccent, string> = {
  1: "bg-orbit-1",
  2: "bg-orbit-2",
  3: "bg-orbit-3",
  4: "bg-orbit-4",
};
