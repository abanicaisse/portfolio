"use client";

import React, { forwardRef } from "react";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/components/ui/utils";

export const Footer = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      className={cn(
        "relative border-t border-white/10 overflow-hidden",
        className,
      )}
      {...props}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand rounded-full blur-[150px] opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-2xl mb-4 block hover:opacity-80 transition-opacity"
            >
              <span className="text-white">ABA</span>
              <span className="text-brand">.NICAISSE</span>
            </Link>
            <p className="text-white/60 mb-6 max-w-sm">
              Frontend Development • Mobile Apps • Backend Development • UI/UX
              Design • Consulting
            </p>
            <div className="flex gap-3">
              <Link
                href="https://github.com/abanicaisse"
                target="_blank"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-brand hover:text-brand transition-all"
              >
                <Github size={18} />
              </Link>
              <Link
                href="https://linkedin.com/in/abanicaisse"
                target="_blank"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-brand hover:text-brand transition-all"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="https://x.com/abanicaisse"
                target="_blank"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-brand hover:text-brand transition-all"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="mailto:abawandjovunicaise@gmail.com"
                target="_blank"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-brand hover:text-brand transition-all"
              >
                <Mail size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white/60 hover:text-brand transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-white/60 hover:text-brand transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  className="text-white/60 hover:text-brand transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-white/60 hover:text-brand transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white/60 hover:text-brand transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-white/60 hover:text-brand transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-3">
              <li className="text-white/60">Web Development</li>
              <li className="text-white/60">Mobile Apps</li>
              <li className="text-white/60">UI/UX Design</li>
              <li className="text-white/60">Consulting</li>
              <li className="text-white/60">Code Review</li>
              <li className="text-white/60">Training</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm flex flex-col xs:flex-row xs:items-center gap-2 mb-4 md:mb-0">
              <span className="flex items-center gap-2">
                <span className="">&copy; {currentYear}</span>
                <span>Made with </span>
                <Heart size={14} className="text-brand fill-brand" /> by
                <Link
                  href="https://github.com/abanicaisse"
                  target="_blank"
                  className="text-brand hover:underline transition-colors"
                >
                  Aba Nicaisse
                </Link>
              </span>
            </p>

            <Button
              variant="icon-outline"
              size="auto"
              onClick={scrollToTop}
              className="w-10 h-10 hover:border-brand hover:text-brand"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
