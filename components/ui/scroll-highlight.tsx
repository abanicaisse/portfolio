"use client";

import { forwardRef, useEffect, useRef, useState, useCallback } from "react";
import { cn } from "./utils";

interface ScrollHighlightProps {
  children: React.ReactNode;
  color: "white" | "yellow";
  delay?: number;
  className?: string;
}

export const ScrollHighlight = forwardRef<
  HTMLSpanElement,
  ScrollHighlightProps
>(({ children, color, delay = 0, className }, forwardedRef) => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const setRefs = useCallback(
    (node: HTMLSpanElement | null) => {
      // Cleanup previous observer
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      // Set forwarded ref
      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else if (forwardedRef) {
        (
          forwardedRef as React.MutableRefObject<HTMLSpanElement | null>
        ).current = node;
      }

      // Setup new observer
      if (node) {
        observerRef.current = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsVisible(true);
              }
            });
          },
          {
            threshold: 0.1,
            rootMargin: "50px",
          }
        );
        observerRef.current.observe(node);
      }
    },
    [forwardedRef]
  );

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const bgColor = color === "yellow" ? "bg-[#BFFF0A]" : "bg-white";

  return (
    <span
      ref={setRefs}
      className={cn("relative inline-block px-3 text-black", className)}
    >
      <span className="relative z-10">{children}</span>
      <span
        className={cn(
          "absolute inset-0 origin-left transition-transform duration-700 ease-out",
          bgColor,
          isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
        )}
        style={{ transitionDelay: `${delay}ms` }}
      ></span>
    </span>
  );
});

ScrollHighlight.displayName = "ScrollHighlight";
