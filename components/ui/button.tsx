import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Default ShadCN variants (updated for portfolio theme)
        default:
          "bg-brand-solid text-brand-solid-fg hover:bg-invert-bg hover:text-invert-fg transition-colors duration-150",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 rounded-full",
        outline:
          "border border-line-strong bg-surface text-ink hover:border-transparent hover:bg-invert-bg hover:text-invert-fg transition-colors duration-150",
        secondary:
          "border border-line bg-transparent text-ink hover:border-line-strong hover:bg-surface-sunken transition-colors duration-150",
        ghost:
          "text-ink-muted hover:text-ink transition-colors hover:bg-transparent",
        link: "text-brand-ink hover:underline underline-offset-4 hover:bg-transparent",

        // Icon button variants
        icon: "bg-brand-solid text-brand-solid-fg hover:bg-invert-bg hover:text-invert-fg transition-colors",
        "icon-outline":
          "border border-line text-ink hover:bg-surface-sunken transition-colors",
      },
      size: {
        default: "px-8 py-4 h-auto",
        sm: "px-6 py-2 h-auto",
        lg: "px-10 py-5 h-auto",
        icon: "w-12 h-12 p-0",
        auto: "h-auto p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
