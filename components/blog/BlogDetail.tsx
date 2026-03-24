"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Link as LinkIcon } from "lucide-react";
import { getPostBySlug, BLOG_POSTS } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { cn } from "@/components/ui/utils";

interface BlogDetailProps {
  slug: string;
}

export function BlogDetail({ slug }: BlogDetailProps) {
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Build TOC from ## headings
  const headings = post.content.match(/^##\s+(.*)/gm) || [];
  const toc = headings.map((h, index) => ({
    id: `heading-${index}`,
    title: h.replace(/^##\s+/, ""),
  }));

  // Related posts: same category, excluding current, max 3
  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== post.slug,
  ).slice(0, 3);

  // Track which heading is currently in view
  const [activeId, setActiveId] = useState<string>(toc[0]?.id ?? "");

  useEffect(() => {
    if (toc.length === 0) return;

    const OFFSET = 120; // px from top of viewport (accounts for fixed nav)

    const handleScroll = () => {
      const headingEls = toc
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      if (headingEls.length === 0) return;

      // Walk headings from bottom to top; pick the last one whose top
      // edge is at or above the offset threshold.
      let current = headingEls[0].id;
      for (const el of headingEls) {
        if (el.getBoundingClientRect().top <= OFFSET) {
          current = el.id;
        }
      }

      setActiveId(current);
    };

    // Small delay so ReactMarkdown has time to render h2s into the DOM
    const timer = setTimeout(() => {
      handleScroll(); // set initial active on mount
      window.addEventListener("scroll", handleScroll, { passive: true });
    }, 150);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post.slug]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center gap-2 text-sm text-neutral-500 mb-12">
          <Link href="/blog" className="hover:text-brand transition-colors">
            Blog
          </Link>
          <ArrowRight size={14} />
          <span className="text-brand font-medium">{post.category}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-neutral-400 max-w-4xl mb-12">
          {post.title}
        </h1>

        {/* Author Info */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8 lg:mb-12 border-b border-neutral-800 pb-4 sm:pb-8">
          <div className="flex items-center gap-2">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={40}
              height={40}
              className="rounded-full bg-neutral-800"
            />
            <div className="font-medium">{post.author.name}</div>
          </div>
          <div className="text-sm text-neutral-500 mt-4 sm:mt-0">
            {post.date}
          </div>
        </div>

        {/* Grid: TOC + Content */}
        <div className="flex flex-col lg:flex-row gap-16 relative">
          {/* TOC Sidebar */}
          <div className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-5">
                In this article
              </h4>
              <nav className="flex flex-col gap-1">
                {toc.map((item, i) => {
                  const isActive = activeId === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(item.id)?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                        setActiveId(item.id);
                      }}
                      className={cn(
                        "flex items-start gap-3 text-sm py-1.5 pl-4 border-l-2 transition-all duration-200",
                        isActive
                          ? "text-brand border-brand font-medium"
                          : "text-neutral-500 border-neutral-800 hover:text-neutral-300 hover:border-neutral-600",
                      )}
                    >
                      <span
                        className={cn(
                          "shrink-0 tabular-nums text-xs mt-0.5 transition-colors",
                          isActive ? "text-brand" : "text-neutral-700",
                        )}
                      >
                        {i + 1}.
                      </span>
                      <span className="leading-snug">{item.title}</span>
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 max-w-3xl lg:max-w-none mx-auto lg:mx-0">
            {/* Hero Image */}
            <div className="mb-12 rounded-2xl overflow-hidden aspect-video relative border border-neutral-800">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Markdown Content */}
            <article
              className="prose prose-invert prose-neutral max-w-none 
              prose-headings:font-medium prose-headings:tracking-tight 
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
              prose-p:text-neutral-300 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-brand prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-a:underline-offset-4
              prose-li:text-neutral-300"
            >
              <ReactMarkdown
                components={{
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
                  h2: ({ node, ...props }: any) => {
                    const id = toc.find((t) => t.title === props.children)?.id;
                    return <h2 id={id} {...props} />;
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </article>

            {/* Floating Share Button */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-neutral-900/90 backdrop-blur-md border border-neutral-800 px-6 py-3 rounded-full flex items-center gap-3 cursor-pointer hover:bg-neutral-800 hover:border-brand/50 transition-all group z-50">
              <span className="text-sm font-medium group-hover:text-brand transition-colors">
                Share
              </span>
              <LinkIcon
                size={16}
                className="text-neutral-400 group-hover:text-brand transition-colors"
              />
            </div>
          </div>
        </div>

        {/* ─── Related Articles ──────────────────────────────────── */}
        {relatedPosts.length > 0 && (
          <div className="mt-24 pt-16 border-t border-neutral-800">
            <h2 className="text-2xl font-medium tracking-tight mb-10">
              Related Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex flex-col gap-3"
                >
                  <h3 className="text-lg font-medium tracking-tight group-hover:text-brand transition-colors line-clamp-2 leading-snug">
                    {related.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-neutral-500 mt-auto">
                    <span>{related.date}</span>
                    <span className="w-1 h-1 rounded-full bg-neutral-700" />
                    <span>{related.category}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ─── Newsletter CTA ────────────────────────────────────── */}
        <div className="mt-20 rounded-2xl border border-neutral-800 bg-neutral-900/50 px-8 py-12 md:px-14 md:py-16 flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          {/* Text */}
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
              Newsletter
            </p>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-3">
              Get articles like this in your inbox
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              No spam, no noise. Just thoughtful writing on web development,
              design, and engineering — delivered when it matters.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:min-w-[360px]"
          >
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand transition-colors"
            />
            <button
              type="submit"
              className="shrink-0 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-brand hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
