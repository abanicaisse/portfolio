/** @type {import('tailwindcss').Config} */
const token = (name) => `hsl(var(--${name}) / <alpha-value>)`;

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      navBreak: "930px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      rail: "1560px",
      "3xl": "1920px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        // Brand: #aea3e7 and its scale (see globals.css for the rationale)
        brand: {
          DEFAULT: token("brand"),
          ink: token("brand-ink"),
          fg: token("brand-fg"),
          solid: token("brand-solid"),
          "solid-fg": token("brand-solid-fg"),
          50: token("brand-50"),
          100: token("brand-100"),
          200: token("brand-200"),
          300: token("brand-300"),
          400: token("brand-400"),
          500: token("brand-500"),
          600: token("brand-600"),
          700: token("brand-700"),
          800: token("brand-800"),
          900: token("brand-900"),
          950: token("brand-950"),
        },
        surface: {
          DEFAULT: token("surface"),
          sunken: token("surface-sunken"),
          raised: token("surface-raised"),
        },
        ink: {
          DEFAULT: token("ink"),
          strong: token("ink-strong"),
          muted: token("ink-muted"),
          faint: token("ink-faint"),
        },
        line: {
          DEFAULT: token("line"),
          strong: token("line-strong"),
        },
        invert: {
          bg: token("invert-bg"),
          fg: token("invert-fg"),
        },
        code: {
          DEFAULT: token("code"),
          bar: token("code-bar"),
          line: token("code-line"),
          fg: token("code-fg"),
          muted: token("code-muted"),
        },
        orbit: {
          1: token("orbit-1"),
          2: token("orbit-2"),
          3: token("orbit-3"),
          4: token("orbit-4"),
        },

        // shadcn/ui primitives, mapped onto the tokens above
        border: token("border"),
        input: token("input"),
        ring: token("ring"),
        background: token("background"),
        foreground: token("foreground"),
        primary: {
          DEFAULT: token("primary"),
          foreground: token("primary-foreground"),
        },
        secondary: {
          DEFAULT: token("secondary"),
          foreground: token("secondary-foreground"),
        },
        destructive: {
          DEFAULT: token("destructive"),
          foreground: token("destructive-foreground"),
        },
        muted: {
          DEFAULT: token("muted"),
          foreground: token("muted-foreground"),
        },
        accent: {
          DEFAULT: token("accent"),
          foreground: token("accent-foreground"),
        },
        popover: {
          DEFAULT: token("popover"),
          foreground: token("popover-foreground"),
        },
        card: {
          DEFAULT: token("card"),
          foreground: token("card-foreground"),
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
