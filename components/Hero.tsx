import React from "react";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
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

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm bg-white/5">
              <span className="w-2 h-2 bg-[#BFFF0A] rounded-full animate-pulse"></span>
              <span className="text-sm">Available for new projects</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl">
                I&apos;ve been{" "}
                <span className="bg-white text-black px-4 inline-block">
                  Developing
                </span>
              </h1>
              <h1 className="text-6xl md:text-7xl lg:text-8xl">
                Websites since{" "}
                <span className="bg-[#BFFF0A] text-black px-4 inline-block">
                  2018
                </span>
              </h1>
            </div>

            <p className="text-xl text-white/70 max-w-lg">
              I&apos;m a full-stack web developer passionate about creating
              elegant solutions that make a difference. Let&apos;s build
              something amazing together.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-white text-black rounded-full hover:bg-[#BFFF0A] transition-all duration-300 flex items-center gap-2">
                View My Work
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button className="px-8 py-4 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
                Schedule a Call
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-8">
              <span className="text-sm text-white/50">FOLLOW ME</span>
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
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-6">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl mb-2">150+</div>
              <div className="text-white/60">Projects Completed</div>
            </div>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl mb-2">50+</div>
              <div className="text-white/60">Happy Clients</div>
            </div>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl mb-2">7+</div>
              <div className="text-white/60">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
