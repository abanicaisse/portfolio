import { cn } from "@/lib/utils";

/** "N" monogram: two posts and a diagonal, with the brand square as a full stop. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 32"
      aria-hidden="true"
      className={cn("h-6 w-auto", className)}
    >
      <path
        fill="currentColor"
        d="M0 32V0h8.4l13.2 18.6V0H30v32h-8.4L8.4 13.4V32z"
      />
      <rect x="33" y="25" width="7" height="7" className="fill-brand" />
    </svg>
  );
}
