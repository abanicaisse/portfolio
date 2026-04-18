"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/components/ui/utils";

export interface PayloadPost {
  slug: string;
  title: string;
  publishedAt?: string;
  category?: { name: string } | string | null;
  author?: { name: string; avatar?: { url?: string } } | string | null;
  featuredImage?: { url?: string } | string | null;
}

export function BlogList({
  initialPosts = [],
}: {
  initialPosts?: PayloadPost[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>("All posts");
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const [displayedCount, setDisplayedCount] = useState(24);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Normalize Payload posts to an easy-to-use shape
  const posts = initialPosts.map((post) => {
    const categoryName =
      typeof post.category === "object" && post.category?.name
        ? post.category.name
        : "Uncategorized";
    const authorName =
      typeof post.author === "object" && post.author?.name
        ? post.author.name
        : "Unknown Author";
    const authorAvatar =
      typeof post.author === "object" &&
      post.author?.avatar &&
      typeof post.author.avatar === "object" &&
      post.author.avatar.url
        ? post.author.avatar.url
        : "https://api.dicebear.com/7.x/avataaars/svg?seed=fallback";

    // Format date efficiently
    let formattedDate = "Recent";
    if (post.publishedAt) {
      formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    }

    return {
      slug: post.slug,
      title: post.title,
      category: categoryName,
      date: formattedDate,
      author: {
        name: authorName,
        avatar: authorAvatar,
      },
    };
  });

  // Featured Post is now dynamically the latest published article (index 0)
  const featuredPost = posts[0] || null;

  // Reset displayed count when category changes
  useEffect(() => {
    setDisplayedCount(24);
  }, [activeCategory]);

  // Get unique categories from actual posts in the data
  const availableCategories = [
    "All posts",
    ...Array.from(new Set(posts.map((post) => post.category))),
  ];

  // All posts for the current category
  const currentCategoryPosts =
    activeCategory === "All posts"
      ? posts.slice(1) // Exclude the latest (featured) post from "All posts"
      : posts.filter((p) => p.category === activeCategory);

  const displayedPosts = currentCategoryPosts.slice(0, displayedCount);
  const hasMore = currentCategoryPosts.length > displayedCount;

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    // Simulate network request loading state
    setTimeout(() => {
      setDisplayedCount((prev) => prev + 12);
      setIsLoadingMore(false);
    }, 600);
  };

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
                className="relative flex flex-col rounded-2xl overflow-hidden mb-6 bg-neutral-900 border border-neutral-800 min-h-[380px] sm:min-h-[450px] lg:aspect-[21/9]"
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

                {/* Hero Content Layer */}
                <div className="relative z-10 flex flex-col flex-1 p-6 sm:p-10 md:p-16 lg:p-20">
                  <div className="flex-1 flex flex-col justify-center py-6 sm:py-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-white/70 max-w-2xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
                      {featuredPost.title}
                    </h1>
                  </div>

                  {/* Author + Date */}
                  <div className="flex items-center justify-between mt-auto pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-neutral-700 shrink-0">
                        <Image
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          width={32}
                          height={32}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <span className="text-sm font-medium text-neutral-300">
                        {featuredPost.author.name}
                      </span>
                    </div>
                    <div className="text-sm text-neutral-400 shrink-0 ml-4">
                      {featuredPost.date}
                    </div>
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

        {hasMore && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              className={cn(
                "group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-neutral-700 bg-neutral-900 px-8 py-3 font-medium transition-all hover:bg-neutral-800 disabled:opacity-70 disabled:cursor-not-allowed",
              )}
            >
              {isLoadingMore ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin text-brand" />
                  <span className="text-neutral-300">Loading more...</span>
                </>
              ) : (
                <>
                  <span className="text-neutral-300 group-hover:text-white transition-colors">
                    Load more stories
                  </span>
                  <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-transparent via-brand/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
