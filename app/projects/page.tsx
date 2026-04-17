"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/components/ui/utils";

// Mock Data targeting a developer/engineering portfolio aesthetic
const PROJECTS = [
  {
    id: 1,
    title: "EchoLayer",
    icon: "⚡",
    description:
      "Enterprise-grade log management and causality detection engine. Processes high-throughput streams to identify incident root causes.",
    techStack: ["Go", "React", "Kafka", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    link: "/projects/echolayer",
    span: "col-span-1 md:col-span-2",
    aspect: "aspect-[16/9] md:aspect-[21/9]",
  },
  {
    id: 2,
    title: "CanvasSync",
    icon: "🔄",
    description:
      "Real-time collaborative whiteboarding environment with conflict-free replicated data types (CRDTs) for offline-first syncing.",
    techStack: ["Next.js", "WebSockets", "CRDTs", "Redis"],
    image:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2000&auto=format&fit=crop",
    link: "/projects/canvassync",
    span: "col-span-1",
    aspect: "aspect-square md:aspect-[4/3]",
  },
  {
    id: 3,
    title: "DataOrchestrator",
    icon: "🕸️",
    description:
      "Autonomous data orchestration pipeline built to handle distributed rate limits, scheduling, and dynamic DOM rendering at scale.",
    techStack: ["Python", "FastAPI", "Playwright", "Celery"],
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&auto=format&fit=crop",
    link: "/projects/data-orchestrator",
    span: "col-span-1",
    aspect: "aspect-square md:aspect-[4/3]",
  },
  {
    id: 4,
    title: "CloudGraph",
    icon: "☁️",
    description:
      "Serverless infrastructure visualization tool. Generates real-time architectural diagrams directly from AWS and GCP account states.",
    techStack: ["TypeScript", "AWS SDK", "React Flow", "Terraform"],
    image:
      "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=2000&auto=format&fit=crop",
    link: "/projects/cloudgraph",
    span: "col-span-1 md:col-span-2",
    aspect: "aspect-video md:aspect-[21/9]",
  },
  {
    id: 5,
    title: "Nexus Storefront",
    icon: "🛍️",
    description:
      "Headless e-commerce progressive web app featuring sub-second page loads, edge caching, and a robust GraphQL data layer.",
    techStack: ["Next.js", "GraphQL", "Tailwind", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
    link: "/projects/nexus",
    span: "col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    id: 6,
    title: "Robi_x CLI",
    icon: "🦀",
    description:
      "Blazing fast terminal utility for scaffolding monolithic architectures and managing micro-frontend monorepos deployment.",
    techStack: ["Rust", "WASM", "CLI", "Shell"],
    image:
      "https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?q=80&w=2000&auto=format&fit=crop",
    link: "/projects/robix",
    span: "col-span-1",
    aspect: "aspect-[4/3]",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Subtle Cross/Dot Background representing technical grid aesthetic */}
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.080] z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Hero Header Area */}
        <div className="relative z-10 mb-12 sm:mb-20">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-white/70">
              Selected Work
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              A collection of scalable applications, distributed systems, and
              performant web interfaces. Engineered with a focus on clean
              architecture, optimized mechanics, and immersive user experiences.
            </p>
          </div>
        </div>

        {/* Grid Container — 1px border aesthetic representing rigid wireframes */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-neutral-800/40 border border-neutral-800/40 rounded-3xl overflow-hidden p-[1px]">
          {PROJECTS.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              className={cn(
                "group relative bg-[#0a0a0a] flex flex-col p-4 sm:p-6 transition-colors hover:bg-[#0c0c0c]",
                project.span,
              )}
            >
              {/* Cinematic Image Container */}
              <div
                className={cn(
                  "relative w-full overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800/50 mb-5 sm:mb-6",
                  project.aspect,
                )}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.04]"
                />
              </div>

              {/* Developer / Tech-Themed Typography */}
              <div className="flex flex-col flex-1 text-left px-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm select-none">{project.icon}</span>
                  <h3 className="text-lg sm:text-xl font-medium tracking-tight text-white group-hover:text-brand transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-light max-w-full mb-4">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono text-neutral-400 bg-neutral-900 border border-neutral-800/50 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner accent for tech aesthetic */}
              <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none hidden md:block">
                <div className="absolute top-4 right-4 w-1.5 h-1.5 border-t border-r border-brand"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Accent/Grid Lines at Bottom */}
        <div className="relative z-10 mt-16 sm:mt-24 pt-8 border-t border-neutral-800/50 flex justify-between items-center text-xs text-neutral-600 font-mono uppercase tracking-widest">
          <span>// End of Index</span>
          <Link
            href="https://github.com/abanicaisse"
            target="_blank"
            className="flex items-center gap-2 group cursor-pointer hover:text-brand transition-colors"
          >
            View My Github{" "}
            <ArrowRight
              size={12}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
