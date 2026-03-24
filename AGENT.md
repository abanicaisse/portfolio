# AGENT.md

This file provides Guidance for AI coding agents working with code in this repository.

## Project Overview

- Name: Portfolio
- Framework: Next.js 15 (App Router) + React 18 + TypeScript 5
- Styling: Tailwind CSS, Radix UI Primitives, CSS variables in `app/globals.css`
- Animations: Framer Motion v12
- Icons: Lucide React

## Package Manager And Commands

**Strictly use `pnpm` as the default package manager.**

- Install dependencies: `pnpm install`
- Start development server: `pnpm run dev`
- Build for production: `pnpm run build`
- Start production server: `pnpm run start`
- Run linting: `pnpm run lint`

## High-Level Architecture

### Routing (App Router)

- `app/layout.tsx`: Root layout wrapping the entire application.
- `app/page.tsx`: Main landing entry point, composing various portfolio sections (Hero, About, Projects, etc.).
- `app/globals.css`: Global styles ensuring basic styling rules, Tailwind utilities, and theme CSS variables are injected.

## Folder Conventions

- `app/**`: Next.js App Router routes and layout composition.
- `components/ui/**`: Reusable, generic UI primitives (often derived from Radix UI / shadcn).
- `components/shared/**`: Reusable components that are shared across multiple different pages or domains of the application.
- `components/<page-name>/**`: Feature or page-specific UI components that belong strictly to a single page and its functionality.
- `lib/**`: Shared domain utility functions and helpers.

When adding new code or components:

- Put generic, reusable primitives in `components/ui`.
- Put shared, cross-page domains components in `components/shared`.
- Put specific UI blocks meant only for a distinct page in the relevant `components/<page-name>` folder.

## Coding Rules

### Clean Code & Comments

- Write clean, self-documenting code with descriptive variable and function names.
- **Avoid useless, generic, and overly verbose comments.** (e.g., do not add comments like `// This is a button` for a `<Button>` component).
- Only add comments where necessary to explain complex logic, "why" something is done a certain way, or non-obvious workarounds.

### TypeScript

- Keep strict typing throughout the project.
- **Strictly avoid `any`.** Do not use any casting, and avoid implicit or explicit `any` types at all costs.
- Properly follow TypeScript best practices by defining explicit interfaces/types for props, state, and function return values.

### React And Next.js

- **Default strictly to Server-Side Rendering (SSR).** Pages (`page.tsx`) should ALWAYS be server components.
- Recur to Client-Side implementations only when absolutely necessary (e.g. for hooks, browser APIs, or interactivity like Framer Motion).
- **NEVER make an entire page `"use client"`**. If an implementation requires client-side features, extract that specific interactive logic or UI into a separate client component file, and import it into your server-side page.
- Keep route-level pages focused purely on composing these smaller imported sections and performing server-side data fetches.

### Styling

- Reuse design tokens and semantic classes defined in `app/globals.css` and `tailwind.config.js`.
- **Colors**: **Never use arbitrary hex values (e.g., `[#BFFF0A]`)**. Instead, strictly use the defined theme color tokens. The primary neon accent color is defined as `--brand` and should be accessed via Tailwind classes like `bg-brand`, `text-brand`, `border-brand`.
- Ensure new components conform to the current design aesthetics. Use existing primitives where possible before writing custom one-offs.
- The project styling handles both light and dark modes via Next-Themes CSS variables. Always refer to semantic variables (e.g., `bg-background`, `text-foreground`, `bg-brand`) to maintain visual consistency across themes.
- For cases where the user asks for a color that is not defined in the theme, define it then use it.

### Animation Strategy

- **Framer Motion** (v12) is the primary engine for scroll-triggered reveals and staggered entrances.
- Pattern for scroll animations: `initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}`.
- Use variant orchestration (e.g., `staggerChildren: 0.1`) for coordinating list item popups.
- Standard Spring physics: `stiffness: 70`, `damping: 15`.
- Use `AnimatePresence` for elements that mount/unmount and need exit animations.
- Always add `"use client"` at the top of components utilizing Framer Motion hooks or components like `<motion.div>`.

## Linting And Quality

- Run `pnpm run lint` after substantial edits to ensure standard code quality.
- Do not fix unrelated files unless explicitly asked.
- Avoid introducing new dependencies unless necessary and fully justified.

## Change Scope And Safety

- Focus on making targeted, minimal edits consistent with the project's setup.
- Preserve existing animations (Framer Motion) and interactions unless tasked to optimize or redesign them.

## Recommended Agent Workflow

1. Read nearby route or component files before editing to understand context.
2. Identify whether the new component or logic belongs in `components/ui`, `components/shared`, `components/<page-name>`, `lib`, or `app`.
3. Implement exactly what is needed, focusing aggressively on strict TypeScript typing and `pnpm`.
4. Validate changes cautiously and document modifications.
