"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ThemeChoice = "light" | "dark" | "system";

const choices: { value: ThemeChoice; label: string; icon: LucideIcon }[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "Auto", icon: Monitor },
];

const nextChoice: Record<ThemeChoice, ThemeChoice> = {
  system: "light",
  light: "dark",
  dark: "system",
};

function isThemeChoice(value: string | undefined): value is ThemeChoice {
  return value === "light" || value === "dark" || value === "system";
}

function useThemeChoice() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const current: ThemeChoice = mounted && isThemeChoice(theme) ? theme : "system";
  return { current, setTheme, mounted };
}

/** Single nav cell that cycles Auto → Light → Dark. */
export function ThemeCycleButton({ className }: { className?: string }) {
  const { current, setTheme } = useThemeChoice();
  const active = choices.find((c) => c.value === current) ?? choices[2];
  const upcoming = choices.find((c) => c.value === nextChoice[current]) ?? choices[0];
  const Icon = active.icon;

  return (
    <button
      type="button"
      onClick={() => setTheme(upcoming.value)}
      aria-label={`Theme: ${active.label}. Switch to ${upcoming.label}`}
      title={`Theme: ${active.label}`}
      className={cn(
        "flex w-12 items-center justify-center border-l border-line text-ink-muted transition-colors hover:bg-invert-bg hover:text-invert-fg",
        className,
      )}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}

/** Explicit three-way control for the footer and mobile menu. */
export function ThemeSegmented({ className }: { className?: string }) {
  const { current, setTheme } = useThemeChoice();

  return (
    <div
      role="group"
      aria-label="Colour theme"
      className={cn("inline-flex border border-line", className)}
    >
      {choices.map(({ value, label, icon: Icon }) => {
        const checked = current === value;
        return (
          <button
            key={value}
            type="button"
            aria-pressed={checked}
            onClick={() => setTheme(value)}
            className={cn(
              "hud-label flex items-center gap-1.5 px-2.5 py-1.5 transition-colors",
              checked
                ? "bg-invert-bg text-invert-fg"
                : "text-ink-faint hover:text-ink",
            )}
          >
            <Icon className="h-3 w-3" aria-hidden="true" />
            {label}
          </button>
        );
      })}
    </div>
  );
}
