"use client";

import { forwardRef, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "./utils";

interface ParallaxSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const ParallaxSection = forwardRef<HTMLDivElement, ParallaxSectionProps>(
  ({ children, delay = 0, className }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
        transition={{
          duration: 0.7,
          delay: delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={cn("", className)}
      >
        {children}
      </motion.div>
    );
  }
);

ParallaxSection.displayName = "ParallaxSection";
