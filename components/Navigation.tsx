"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl">
            <span className="text-white">ABA</span>
            <span className="text-[#BFFF0A]">.NICAISSE</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Button
              variant="ghost"
              size="auto"
              onClick={() => scrollToSection("home")}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              size="auto"
              onClick={() => scrollToSection("about")}
            >
              About
            </Button>
            <Button
              variant="ghost"
              size="auto"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </Button>
            <Button
              variant="ghost"
              size="auto"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              size="auto"
              onClick={() => scrollToSection("blog")}
            >
              Blog
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Button
              variant="ghost"
              size="auto"
              onClick={() => scrollToSection("home")}
              className="justify-start text-left"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              size="auto"
              onClick={() => scrollToSection("about")}
              className="justify-start text-left"
            >
              About
            </Button>
            <Button
              variant="ghost"
              size="auto"
              onClick={() => scrollToSection("skills")}
              className="justify-start text-left"
            >
              Skills
            </Button>
            <Button
              variant="ghost"
              size="auto"
              onClick={() => scrollToSection("projects")}
              className="justify-start text-left"
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              size="auto"
              onClick={() => scrollToSection("blog")}
              className="justify-start text-left"
            >
              Blog
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="justify-start text-left"
            >
              Contact
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
