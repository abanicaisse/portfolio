"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function ProjectDetail() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#0a0a0a] text-white pt-32 pb-32 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated Dot Background matching the global index */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isHovering ? 0 : 0.2,
            backgroundImage: `radial-gradient(circle, hsl(76 100% 52%) 1.5px, transparent 1.5px)`,
            backgroundSize: "32px 32px",
            WebkitMaskImage: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
            maskImage: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 z-10">
        {/* Top Navigation */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-500 hover:text-brand transition-colors mb-16 uppercase"
        >
          <ArrowLeft size={14} />
          Back to Index
        </Link>

        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-3">
              EchoLayer
            </h1>
            <p className="text-lg text-neutral-400 font-light">
              Developer & AppSec Information Platform
            </p>
          </div>
          <div className="flex flex-col md:text-right gap-1 text-xs font-mono uppercase tracking-wider text-neutral-500">
            <span>Product, UI/UX</span>
            <span>2022-2023</span>
          </div>
        </header>

        {/* Massive Hero Image Section -> mimicking the bright colored rectangle */}
        <div className="w-full bg-[#1d4ed8] rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[21/9] flex items-center justify-center p-8 md:p-16 mb-16 relative group border border-blue-500/20">
          {/* Simulate the browser window inside */}
          <div className="relative w-full max-w-3xl aspect-[16/10] bg-white rounded-lg shadow-2xl overflow-hidden border border-neutral-200/20 transform group-hover:scale-[1.02] transition-transform duration-700 ease-out">
            {/* Window Header */}
            <div className="h-6 bg-neutral-100 border-b border-neutral-200 flex items-center px-3 gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <div className="relative w-full h-[calc(100%-1.5rem)] bg-neutral-50">
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"
                alt="Product Screenshot"
                fill
                className="object-cover opacity-90 mix-blend-multiply"
              />
            </div>
          </div>
        </div>

        {/* Overview & Metadata Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-24 mb-24">
          <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-8">
            <p className="text-neutral-300 text-lg sm:text-xl leading-relaxed font-light">
              EchoLayer streamlines incident management and information routing
              for developers, enhancing efficiency in resolving code issues
              promptly and bolstering application security.
            </p>

            <div className="pl-4 border-l-2 border-brand/50 flex flex-col gap-4">
              <p className="text-neutral-400 text-sm leading-loose">
                It manages threads of incident management and information
                routing to help devs spend time on the right choices... it
                manages a realm of branching code issues, saving time by
                resolving issues and application security.
              </p>
              <p className="text-neutral-500 text-xs font-mono uppercase tracking-widest">
                This is a limited case study. Please contact me for more
                details.
              </p>
            </div>

            <ul className="text-sm text-neutral-400 space-y-4 border-l-2 border-brand/50 pl-4 mt-2">
              <li className="flex gap-3">
                <span className="text-brand">↓</span> Collaborated closely with
                developers to grasp their immediate requirements, delivering
                assets...
              </li>
              <li className="flex gap-3">
                <span className="text-brand">↓</span> Designed platform assets
                from zero to one using an agile framework...
              </li>
              <li className="flex gap-3">
                <span className="text-brand">↓</span> Sole designer enabling
                EchoLayer index and collaborated with the head of product...
              </li>
            </ul>
          </div>

          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-10 text-sm">
            <div>
              <h3 className="text-white font-medium mb-3">Contribution</h3>
              <p className="text-neutral-400 leading-relaxed font-light">
                Research, Branding, UI/UX Design, Prototyping, Frontend
                Development
              </p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-3">Website</h3>
              <a
                href="#"
                className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors group"
              >
                echolayer.com
                <ArrowUpRight
                  size={14}
                  className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                />
              </a>
            </div>

            <div>
              <h3 className="text-white font-medium mb-3">Duration</h3>
              <p className="text-neutral-400 leading-relaxed font-light">
                Development: 6 months
                <br />
                Total Engagement: 11 months
              </p>
            </div>
          </div>
        </div>

        {/* Bento Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {/* Card 1 */}
          <div className="bg-neutral-900 border border-neutral-800/50 rounded-2xl p-8 flex flex-col gap-8 group hover:bg-neutral-800/50 transition-colors">
            <h3 className="text-lg font-medium text-white leading-relaxed">
              Code blocks are challenging to locate when broken. Our product, a
              manual code annotator, enhances discoverability by imbuing info in
              each block.
            </h3>
            <div className="relative aspect-[4/3] w-full rounded-lg bg-[#0a0a0a] border border-neutral-800 overflow-hidden mt-auto shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"
                alt="Code block UI"
                fill
                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-neutral-900 border border-neutral-800/50 rounded-2xl p-8 flex flex-col group hover:bg-neutral-800/50 transition-colors">
            <h3 className="text-lg font-medium text-neutral-300 mb-auto leading-relaxed">
              Engineer discussions revealed the non-scalable burden of manual
              updates to identify code blocks costing over a staggering...
            </h3>
            <div className="mt-16">
              <div className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-4">
                $500,000{" "}
                <span className="text-3xl lg:text-4xl inline-block -translate-y-2 opacity-50 grayscale transition-transform duration-300 group-hover:-rotate-12">
                  📉
                </span>
              </div>
              <p className="text-xs sm:text-sm font-mono text-neutral-500 uppercase tracking-widest leading-relaxed">
                annually in labor, and even more with larger companies.
              </p>
            </div>
          </div>
        </div>

        {/* Full-width Highlight Section (The Blue Banner in the example) */}
        <div className="w-full bg-[#1d4ed8] rounded-[2rem] p-8 md:p-16 mb-24 text-center border border-blue-500/20">
          <h4 className="text-blue-200 font-medium mb-6 tracking-wide text-sm md:text-base">
            Recognizing this opportunity, we aimed to reduce costs and deliver
            value:
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white max-w-4xl mx-auto leading-tight tracking-tight mb-16">
            How might we design a product with automated ownership at every
            level?
          </h2>
          <div className="relative w-full max-w-5xl mx-auto shadow-2xl rounded-xl aspect-[16/9] overflow-hidden bg-white">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
              alt="UI Exploration"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Masonry / Image Stack simulating the UI grids at the bottom */}
        <div className="space-y-6 sm:space-y-12">
          <div className="w-full aspect-[4/3] md:aspect-[16/9] bg-neutral-900 rounded-2xl border border-neutral-800/50 overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
              alt="Dashboard View 1"
              fill
              className="object-cover opacity-60 hover:opacity-100 transition-opacity duration-700"
            />
          </div>

          <div className="w-full aspect-[4/3] md:aspect-[16/9] bg-neutral-900 rounded-2xl border border-neutral-800/50 overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2000&auto=format&fit=crop"
              alt="Dashboard View 2"
              fill
              className="object-cover opacity-60 hover:opacity-100 transition-opacity duration-700"
            />
          </div>
        </div>

        {/* Footer Accent Lines */}
        <div className="relative z-10 mt-32 pt-8 border-t border-neutral-800/50 flex justify-between items-center text-xs text-neutral-600 font-mono uppercase tracking-widest">
          <span>{`// Case Study End`}</span>
          <Link
            href="/projects"
            className="flex items-center gap-2 group hover:text-brand transition-colors cursor-pointer"
          >
            Back to Index
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
