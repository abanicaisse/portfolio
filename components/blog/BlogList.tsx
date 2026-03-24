"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/components/ui/utils";

import {
  BLOG_POSTS,
  BlogPost,
  BlogCategory,
  getFeaturedPost,
  // getPostsByCategory,
} from "@/lib/blog-data";

export function BlogList() {
  const [activeCategory, setActiveCategory] = useState<
    BlogCategory | "All posts"
  >("All posts");
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const featuredPost = getFeaturedPost();

  // Get unique categories from actual posts in the data
  const availableCategories: (BlogCategory | "All posts")[] = [
    "All posts",
    ...(Array.from(
      new Set(BLOG_POSTS.map((post) => post.category)),
    ) as BlogCategory[]),
  ];

  // Always show all non-featured posts for grid, filtered by category
  const displayedPosts: BlogPost[] =
    activeCategory === "All posts"
      ? BLOG_POSTS.filter((p) => !p.featured)
      : BLOG_POSTS.filter((p) => p.category === activeCategory);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-32">
        {/* Featured Post Hero - always visible */}
        {featuredPost && (
          <div className="mb-4">
            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <div
                ref={heroRef}
                className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-6 bg-neutral-900 border border-neutral-800"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Dot grid - white base dots, always visible */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Brand-colored dot layer — only revealed around cursor via mask */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                  style={{
                    opacity: isHovering ? 1 : 0,
                    backgroundImage: `radial-gradient(circle, hsl(76 100% 52%) 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                    WebkitMaskImage: `radial-gradient(ellipse 20% 30% at ${mousePos.x}% ${mousePos.y}%, black 0%, transparent 100%)`,
                    maskImage: `radial-gradient(ellipse 20% 30% at ${mousePos.x}% ${mousePos.y}%, black 0%, transparent 100%)`,
                  }}
                />

                {/* Subtle default glow on dots when not hovering */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    opacity: isHovering ? 0 : 1,
                    backgroundImage: `radial-gradient(circle, hsl(76 100% 52% / 0.6) 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                    WebkitMaskImage: `radial-gradient(ellipse 45% 40% at 50% 55%, black 0%, transparent 100%)`,
                    maskImage: `radial-gradient(ellipse 45% 40% at 50% 55%, black 0%, transparent 100%)`,
                    transition: "opacity 0.5s",
                  }}
                />

                {/* Hero Content */}
                <div className="absolute inset-0 flex flex-col justify-center p-12 md:p-20 z-10">
                  <h1 className="text-4xl md:text-6xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-white/70 max-w-2xl mb-auto">
                    {featuredPost.title}
                  </h1>
                </div>

                {/* Author + Date */}
                <div className="absolute bottom-6 left-6 md:bottom-12 md:left-20 flex items-center justify-between right-6 md:right-20 z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-neutral-700">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        width={32}
                        height={32}
                      />
                    </div>
                    <span className="text-sm font-medium text-neutral-300">
                      {featuredPost.author.name}
                    </span>
                  </div>
                  <div className="text-sm text-neutral-400">
                    {featuredPost.date}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Categories Bar */}
        <div className="flex items-center gap-8 overflow-x-auto no-scrollbar border-b border-neutral-800/50 pb-4 mb-12 mt-12">
          {availableCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "whitespace-nowrap text-sm font-medium transition-colors hover:text-brand pb-4 -mb-[17px] border-b-2",
                activeCategory === category
                  ? "text-brand border-brand"
                  : "text-neutral-500 border-transparent",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {displayedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col"
            >
              <h3 className="text-xl font-medium tracking-tight mb-2 group-hover:text-brand transition-colors line-clamp-2">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-neutral-500 mt-auto">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-neutral-700" />
                <span>{post.category}</span>
              </div>
            </Link>
          ))}
        </div>

        {displayedPosts.length === 0 && (
          <div className="text-center py-20 text-neutral-500">
            No posts found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
