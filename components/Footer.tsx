"use client";

import React from "react";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#BFFF0A] rounded-full blur-[150px] opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl mb-4">
              <span className="text-white">DEV</span>
              <span className="text-[#BFFF0A]">.PORTFOLIO</span>
            </div>
            <p className="text-white/60 mb-6 max-w-sm">
              Crafting exceptional digital experiences through innovative design
              and cutting-edge development.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-[#BFFF0A] hover:text-[#BFFF0A] transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-[#BFFF0A] hover:text-[#BFFF0A] transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-[#BFFF0A] hover:text-[#BFFF0A] transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-[#BFFF0A] hover:text-[#BFFF0A] transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-white/60 hover:text-[#BFFF0A] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/60 hover:text-[#BFFF0A] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-white/60 hover:text-[#BFFF0A] transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-white/60 hover:text-[#BFFF0A] transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-white/60 hover:text-[#BFFF0A] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/60 hover:text-[#BFFF0A] transition-colors"
                >
                  Contact
                </a>
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
            <p className="text-white/60 text-sm flex items-center gap-2">
              © {currentYear} Developer Portfolio. Made with{" "}
              <Heart size={14} className="text-[#BFFF0A] fill-[#BFFF0A]" /> by
              You
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-white/60 hover:text-[#BFFF0A] transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-[#BFFF0A] transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>

            <Button
              variant="icon-outline"
              size="auto"
              onClick={scrollToTop}
              className="w-10 h-10 hover:border-[#BFFF0A] hover:text-[#BFFF0A]"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
