import React from "react";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen lg:min-h-full lg:h-screen lg:max-h-[950px] flex items-center justify-center pt-20 lg:pt-10 overflow-hidden"
    >
      {/* Gradient Orbs Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#BFFF0A] rounded-full blur-[150px] opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-[150px] opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-10"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 pt-5 md:pt-10 pb-20 relative z-10">
        <div className="w-full gap-12 justify-start items-center">
          {/* Tagline */}
          <div className="space-y-8 sm:space-y-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm bg-white/5">
              <span className="w-2 h-2 bg-[#BFFF0A] rounded-full animate-pulse"></span>
              <span className="text-sm">Available for new projects</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl">
                A{" "}
                <span className="bg-white text-black px-4 inline-block">
                  Trusted
                </span>
                Developer
              </h1>
              <h1 className="text-6xl md:text-7xl lg:text-8xl">
                for All Your{" "}
                <span className="bg-[#BFFF0A] text-black px-4 inline-block">
                  Web
                </span>
                Projects
              </h1>
            </div>

            <div className="w-fit flex flex-col-reverse sm:flex-row sm:items-center gap-16 sm:gap-6 py-4 sm:mt-16">
              {/* Social Links */}
              <div className="w-fit flex flex-col items-start gap-4 sm:-rotate-90 sm:-ml-14">
                <span className="text-sm text-white/50">@ABANICAISSE</span>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>

              {/* BIO */}
              <div className="w-fit flex flex-col gap-6">
                <p className="text-xl text-white/70 max-w-lg">
                  I&apos;m a full-stack developer who likes building not only
                  elegant but scalable and performant web applications.
                  Let&apos;s build something amazing together.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button variant="default" className="group">
                    View My Work
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Button>
                  <Button variant="outline">Schedule a Call</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
