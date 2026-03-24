import React, { forwardRef } from "react";
import { Code2, Sparkles, Terminal } from "lucide-react";
import { ScrollHighlight } from "@/components/ui/scroll-highlight";
import { cn } from "@/components/ui/utils";

export const About = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id="about"
        className={cn("relative py-24 md:py-32 pb-12 md:pb-24", className)}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand rounded-full blur-[150px] opacity-10"></div>
        </div>

        <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left  */}
            <div className="relative md:sticky md:top-24 h-fit md:max-h-[calc(100vh-6rem)] md:overflow-y-auto scrollbar-hide">
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand rounded-full blur-[100px] opacity-20"></div>

                <div className="relative space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                    <Sparkles size={16} className="text-brand" />
                    <span className="text-sm">Why Choose Me</span>
                  </div>

                  <h3 className="text-3xl">
                    My Work{" "}
                    <ScrollHighlight color="white" delay={300}>
                      Process
                    </ScrollHighlight>
                  </h3>

                  <div className="space-y-4">
                    <div className="backdrop-blur-sm bg-black/30 border border-white/10 rounded-2xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-brand/20 border border-brand/30 flex items-center justify-center flex-shrink-0">
                          <span className="text-brand">01</span>
                        </div>
                        <div>
                          <h4 className="mb-2">Plan & Coordinate</h4>
                          <p className="text-sm text-white/60">
                            Lead development timelines, conduct sprint planning,
                            and coordinate cross-functional teams using Agile
                            methodologies.
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
                          <h4 className="mb-2">Build & Optimize</h4>
                          <p className="text-sm text-white/60">
                            Develop frontend with React/Next.js, build backend
                            APIs with NestJS/Express, manage state with Zustand,
                            and optimize for performance.
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
                          <h4 className="mb-2">Deploy & Maintain</h4>
                          <p className="text-sm text-white/60">
                            Deploy on AWS or Coolify, implement CI/CD pipelines,
                            and ensure code quality through reviews and testing.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Scrollable Content */}
            <div className="space-y-8 pb-4">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 mb-6">
                  <Code2 size={16} className="text-brand" />
                  <span className="text-sm">About Me</span>
                </div>

                <h2 className="text-5xl md:text-6xl mb-6 leading-[130%]">
                  Frontend{" "}
                  <ScrollHighlight color="white" delay={300}>
                    Engineer
                  </ScrollHighlight>{" "}
                  & Team Lead
                </h2>

                <p className="text-lg text-white/70 mb-6 leading-[170%]">
                  With{" "}
                  <strong className="text-brand">5+ years of experience</strong>{" "}
                  building high quality applications for the web and mobile, and
                  my strong communication skills, I bring both technical
                  expertise and leadership to every project.
                </p>

                <p className="text-white/60 mb-8 leading-[170%]">
                  I specialize in frontend development with{" "}
                  <strong>React/Next.js</strong> and <strong>TypeScript</strong>
                  , creating user-friendly, responsive, high-performance and
                  scalable web applications. I also build backend solutions
                  using <strong>NestJS</strong> and <strong>Express</strong> for
                  full-stack projects.
                </p>

                <p className="text-white/60 mb-8 leading-[170%]">
                  My core expertise lies in the <strong>React ecosystem</strong>
                  . I&apos;ve spent years mastering <strong>Next.js</strong> to
                  deliver lightning-fast applications using Server Side
                  Rendering (SSR) and Static Site Generation (SSG). I obsess
                  over web vitals, bundle sizes, and rendering patterns to
                  ensure users have the smoothest possible experience.
                </p>

                <p className="text-white/60 mb-8 leading-[170%]">
                  Recently, I have expanded my scope to the backend to become a
                  truly <strong>product-focused engineer</strong>. I build
                  robust APIs using <strong>NestJS</strong> and{" "}
                  <strong>Express</strong>, allowing me to own features from the
                  database schema (using Prisma or TypeORM) all the way to the
                  UI component. This full-stack perspective helps me write
                  better frontend code that anticipates backend constraints.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6">
                    <Sparkles className="text-purple-400 mb-3" size={28} />
                    <h4 className="mb-2">Performance Optimization</h4>
                    <p className="text-sm text-white/60">
                      Achieved 30% load time improvements through code
                      optimization
                    </p>
                  </div>
                  <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 transition-colors hover:bg-white/10">
                    <Terminal className="text-purple-400 mb-3" size={28} />
                    <h4 className="mb-2 font-semibold text-white">
                      System Architecture
                    </h4>
                    <p className="text-sm text-white/60">
                      Designed scalable monorepos and microservices handling
                      high-volume traffic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
);

About.displayName = "About";
