import React from "react";
import { Code2, Sparkles, Zap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#BFFF0A] rounded-full blur-[150px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#BFFF0A] rounded-full blur-[100px] opacity-20"></div>

              <div className="relative space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                  <Sparkles size={16} className="text-[#BFFF0A]" />
                  <span className="text-sm">Why Choose Me</span>
                </div>

                <h3 className="text-3xl">
                  My Work{" "}
                  <span className="bg-white text-black px-3 inline-block">
                    Process
                  </span>
                </h3>

                <div className="space-y-4">
                  <div className="backdrop-blur-sm bg-black/30 border border-white/10 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#BFFF0A]/20 border border-[#BFFF0A]/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#BFFF0A]">01</span>
                      </div>
                      <div>
                        <h4 className="mb-2">Discovery</h4>
                        <p className="text-sm text-white/60">
                          Deep dive into your project requirements and goals to
                          create the perfect solution.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="backdrop-blur-sm bg-black/30 border border-white/10 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-400">02</span>
                      </div>
                      <div>
                        <h4 className="mb-2">Develop</h4>
                        <p className="text-sm text-white/60">
                          Build with cutting-edge tech stack and best practices
                          for optimal performance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="backdrop-blur-sm bg-black/30 border border-white/10 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-400">03</span>
                      </div>
                      <div>
                        <h4 className="mb-2">Deliver</h4>
                        <p className="text-sm text-white/60">
                          Launch your project with ongoing support and
                          optimization.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 mb-6">
                <Code2 size={16} className="text-[#BFFF0A]" />
                <span className="text-sm">About Me</span>
              </div>

              <h2 className="text-5xl md:text-6xl mb-6">
                Trusted{" "}
                <span className="bg-white text-black px-3 inline-block">
                  Partner
                </span>{" "}
                for Your Digital Success
              </h2>

              <p className="text-xl text-white/70 mb-6">
                Building the world&apos;s best digital experiences for over a
                decade. Your trusted partner for strategy, design, and
                development.
              </p>

              <p className="text-white/60 mb-8">
                I specialize in creating high-performance web applications that
                not only look stunning but deliver exceptional user experiences.
                From concept to deployment, I handle every aspect of development
                with precision and creativity.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6">
                  <Zap className="text-[#BFFF0A] mb-3" size={28} />
                  <h4 className="mb-2">Fast Performance</h4>
                  <p className="text-sm text-white/60">
                    Optimized code for lightning-fast load times
                  </p>
                </div>
                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6">
                  <Sparkles className="text-purple-400 mb-3" size={28} />
                  <h4 className="mb-2">Clean Code</h4>
                  <p className="text-sm text-white/60">
                    Maintainable and scalable solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
