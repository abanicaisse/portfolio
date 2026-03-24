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
          "bg-white text-black rounded-full hover:bg-brand transition-all duration-300",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 rounded-full",
        outline:
          "border-2 border-white rounded-full bg-transparent text-white hover:bg-white hover:text-black transition-all duration-300",
        secondary:
          "rounded-full border border-white/20 bg-transparent text-white hover:border-white/50 hover:bg-white/5 transition-all duration-300",
        ghost:
          "text-white/80 hover:text-white transition-colors hover:bg-transparent",
        link: "text-brand hover:underline underline-offset-4 hover:bg-transparent",

        // Icon button variants
        icon: "rounded-full bg-white text-black hover:bg-brand transition-colors",
        "icon-outline":
          "rounded-full border border-white/20 hover:bg-white/10 transition-all",
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
