import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const ctaVariants = cva(
  "inline-flex w-fit items-center justify-center gap-2 whitespace-nowrap rounded-none font-mono font-bold uppercase tracking-[0.12em] transition-[background-color,color,border-color,opacity] duration-150 disabled:pointer-events-none disabled:opacity-50 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        brand: "bg-brand-solid text-brand-solid-fg hover:bg-invert-bg hover:text-invert-fg",
        invert: "bg-invert-bg text-invert-fg hover:opacity-80",
        outline:
          "border border-line-strong bg-surface text-ink hover:border-transparent hover:bg-invert-bg hover:text-invert-fg",
      },
      size: {
        sm: "px-3 py-1.5 text-[11px] [&_svg]:h-3.5 [&_svg]:w-3.5",
        md: "h-12 px-6 text-[11px]",
      },
    },
    defaultVariants: {
      variant: "brand",
      size: "md",
    },
  },
);

export interface CtaProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ctaVariants> {
  asChild?: boolean;
}

export const Cta = React.forwardRef<HTMLButtonElement, CtaProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(ctaVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Cta.displayName = "Cta";
