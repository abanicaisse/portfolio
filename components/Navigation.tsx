"use client";

import { forwardRef, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/components/ui/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export const Navigation = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id: string, href?: string) => {
    setMobileMenuOpen(false);
    const targetHref = href || (id === "home" ? "/" : `/#${id}`);

    if (pathname === "/") {
      if (targetHref.startsWith("/#")) {
        const elementId = targetHref.replace("/#", "");
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return;
        }
      } else if (targetHref === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }
    router.push(targetHref);
  };

  const navLinks = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "blog", label: "Blog", href: "/blog" },
  ];

  return (
    <nav
      ref={ref}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || mobileMenuOpen
          ? "backdrop-blur-md bg-black/70 border-b border-white/10 shadow-lg"
          : "bg-transparent border-transparent",
        className,
      )}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-medium tracking-tight hover:opacity-80 transition-opacity"
          >
            <span className="text-white">ABA</span>
            <span className="text-brand">.NICAISSE</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                size="sm"
                onClick={() => handleNavigation(link.id, link.href)}
                className="text-white/80 hover:text-white hover:bg-white/10 hover:rounded-full rounded-full transition-colors"
              >
                {link.label}
              </Button>
            ))}
            <Button
              variant="default"
              size="sm"
              onClick={() => handleNavigation("contact", "/#contact")}
              className="ml-2 font-medium"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:bg-white/10 rounded-full h-10 w-10 flex items-center justify-center transition-all"
            aria-label="Toggle menu"
          >
            <motion.div
              initial={false}
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-[100%] left-0 w-full overflow-hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="flex flex-col px-6 py-8 gap-6 min-h-[calc(100vh-73px)] justify-start">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.3 }}
                >
                  <button
                    onClick={() => handleNavigation(link.id, link.href)}
                    className="text-2xl font-medium text-white/80 hover:text-white hover:pl-2 transition-all duration-300 text-left w-full focus:outline-none"
                  >
                    {link.label}
                  </button>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.1 + navLinks.length * 0.1,
                  duration: 0.3,
                }}
                className="pt-6 mt-2 border-t border-white/10"
              >
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => handleNavigation("contact", "/#contact")}
                  className="w-full text-lg justify-center font-medium shadow-brand/20 shadow-lg hover:shadow-brand/40"
                >
                  Contact Me
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
});

Navigation.displayName = "Navigation";
