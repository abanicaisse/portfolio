"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Link as LinkIcon,
  Check,
  Copy,
  Twitter,
  Linkedin,
} from "lucide-react";
import { notFound } from "next/navigation";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { cn } from "@/components/ui/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface BlogDetailProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  post: any; // Using any for payload post type simplicity here, or the proper generated type if available
}

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text", err);
    }
  };
  return (
    <button
      onClick={handleCopy}
      className="text-neutral-400 hover:text-white transition-colors p-1"
      aria-label="Copy code"
    >
      {copied ? <Check size={16} className="text-brand" /> : <Copy size={16} />}
    </button>
  );
};

export function BlogDetail({ post }: BlogDetailProps) {
  if (!post) {
    notFound();
  }

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

  const featuredImage =
    typeof post.featuredImage === "object" && post.featuredImage?.url
      ? post.featuredImage.url
      : "";

  let formattedDate = "Recent";
  if (post.publishedAt) {
    formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extractHeadings = (node: any): { id: string; title: string }[] => {
    let headings: { id: string; title: string }[] = [];
    if (node?.type === "heading" && node.tag === "h2") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const text = node?.children?.map((c: any) => c.text).join("") || "";
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      headings.push({ id, title: text });
    }
    if (node?.children) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      node.children.forEach((child: any) => {
        headings = [...headings, ...extractHeadings(child)];
      });
    }
    return headings;
  };

  const toc = post.content ? extractHeadings(post.content.root) : [];

  // Related posts: empty for now unless fetched
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const relatedPosts: any[] = [];

  // Track which heading is currently in view
  const [activeId, setActiveId] = useState<string>(toc[0]?.id ?? "");
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

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
          <span className="text-brand font-medium">{categoryName}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-neutral-400 max-w-4xl mb-12">
          {post.title}
        </h1>

        {/* Author Info */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8 lg:mb-12 border-b border-neutral-800 pb-4 sm:pb-8">
          <div className="flex items-center gap-2">
            <Image
              unoptimized
              src={authorAvatar}
              alt={authorName}
              width={40}
              height={40}
              className="rounded-full bg-neutral-800 object-cover"
            />
            <div className="font-medium">{authorName}</div>
          </div>
          <div className="text-sm text-neutral-500 mt-4 sm:mt-0">
            {formattedDate}
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
          <div className="flex-1 max-w-3xl lg:max-w-none mx-auto lg:mx-0 min-w-0 w-full relative shrink">
            {/* Hero Image */}
            {featuredImage && (
              <div className="mb-12 rounded-2xl overflow-hidden aspect-video relative border border-neutral-800 bg-neutral-900">
                <Image
                  unoptimized
                  src={featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-neutral-300 leading-relaxed mb-10 font-medium">
                {post.excerpt}
              </p>
            )}

            {/* Markdown Content */}
            <article
              className="prose prose-invert prose-neutral max-w-none 
              prose-headings:font-medium prose-headings:tracking-tight 
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
              prose-p:text-neutral-300 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-brand prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-a:underline-offset-4
              prose-li:text-neutral-300
              prose-blockquote:border-l-brand prose-blockquote:bg-neutral-900/50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-neutral-300
              prose-img:rounded-xl prose-img:border prose-img:border-neutral-800
              prose-hr:border-neutral-800
              prose-table:border-collapse prose-table:w-full prose-table:text-sm prose-td:border prose-td:border-neutral-800 prose-td:px-4 prose-td:py-3 prose-th:border prose-th:border-neutral-800 prose-th:bg-neutral-900/50 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-medium rounded-sm"
            >
              <RichText
                data={post.content}
                converters={({ defaultConverters }) => ({
                  ...defaultConverters,
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  heading: (props: any) => {
                    const { node, nodesToJSX } = props;
                    if (node.tag === "h2") {
                      const text =
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        node.children?.map((c: any) => c.text).join("") || "";
                      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                      return (
                        <h2 id={id}>{nodesToJSX({ nodes: node.children })}</h2>
                      );
                    }
                    return React.createElement(
                      node.tag,
                      {},
                      nodesToJSX({ nodes: node.children }),
                    );
                  },
                  blocks: {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    Code: (props: any) => {
                      const { node } = props;
                      const language = node.fields.language || "typescript";
                      const codeString = node.fields.code || "";
                      return (
                        <div className="relative group my-4 border border-neutral-800/80 rounded-xl overflow-hidden bg-[#1E1E1E] shadow-2xl w-full max-w-full">
                          <div className="flex items-center justify-between px-4 py-3 bg-[#181818] border-b border-neutral-800/80">
                            <div className="flex items-center gap-2 max-w-[calc(100%-40px)] overflow-hidden">
                              <div className="flex gap-1.5 shrink-0">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                              </div>
                              <span className="ml-2 text-[11px] text-neutral-400 font-mono tracking-widest uppercase truncate shrink-0">
                                {language}
                              </span>
                            </div>
                            <CopyButton text={codeString} />
                          </div>
                          <div className="overflow-x-auto w-full text-[13px] md:text-sm leading-relaxed p-4">
                            <SyntaxHighlighter
                              PreTag="div"
                              language={language}
                              style={vscDarkPlus}
                              customStyle={{
                                margin: 0,
                                padding: 0,
                                background: "transparent",
                              }}
                              codeTagProps={{
                                className: "font-mono",
                              }}
                            >
                              {codeString}
                            </SyntaxHighlighter>
                          </div>
                        </div>
                      );
                    },
                  },
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  upload: (props: any) => {
                    const { node } = props;
                    return (
                      <div className="block my-10 relative aspect-video w-full rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
                        <div
                          className="absolute inset-0 opacity-20"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                            backgroundSize: "16px 16px",
                          }}
                        />
                        <Image
                          unoptimized
                          src={node.value?.url || ""}
                          alt={node.value?.alt || "Article illustration"}
                          fill
                          className="object-cover"
                        />
                      </div>
                    );
                  },
                })}
              />
            </article>

            {/* Floating Share Button */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-neutral-900/90 backdrop-blur-md border border-neutral-800 px-6 py-3 rounded-full flex items-center gap-3 cursor-pointer hover:bg-neutral-800 hover:border-brand/50 transition-all group z-50">
                  <span className="text-sm font-medium group-hover:text-brand transition-colors">
                    Share
                  </span>
                  <LinkIcon
                    size={16}
                    className="text-neutral-400 group-hover:text-brand transition-colors"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="w-[95vw] max-w-md bg-[#0a0a0a] border-neutral-800 text-white rounded-2xl p-6 max-h-[90vh] overflow-y-auto">
                <DialogHeader className="mb-2 text-left">
                  <DialogTitle className="text-xl font-medium tracking-tight text-white mb-2">
                    Share this article
                  </DialogTitle>
                  <DialogDescription className="text-neutral-400 text-sm leading-relaxed">
                    Enjoyed the read? Share it with your network or copy the
                    link directly to your clipboard.
                  </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4 border-y border-neutral-800/60 my-4">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      post.title,
                    )}&url=${encodeURIComponent(pageUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row sm:flex-col items-center justify-center sm:justify-start gap-3 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 transition-all"
                  >
                    <Twitter size={20} className="text-neutral-300" />
                    <span className="text-sm sm:text-xs font-medium text-neutral-300">
                      Twitter / X
                    </span>
                  </a>

                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      pageUrl,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row sm:flex-col items-center justify-center sm:justify-start gap-3 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 transition-all"
                  >
                    <Linkedin size={20} className="text-neutral-300" />
                    <span className="text-sm sm:text-xs font-medium text-neutral-300">
                      LinkedIn
                    </span>
                  </a>

                  <a
                    href={`https://www.reddit.com/submit?url=${encodeURIComponent(
                      pageUrl,
                    )}&title=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row sm:flex-col items-center justify-center sm:justify-start gap-3 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 transition-all"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-neutral-300"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <line x1="9" y1="9" x2="9.01" y2="9"></line>
                      <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                    <span className="text-sm sm:text-xs font-medium text-neutral-300">
                      Reddit
                    </span>
                  </a>

                  <a
                    href={`https://news.ycombinator.com/submitlink?u=${encodeURIComponent(
                      pageUrl,
                    )}&t=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row sm:flex-col items-center justify-center sm:justify-start gap-3 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 transition-all"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-neutral-300"
                    >
                      <polyline points="4 14 12 4 20 14"></polyline>
                      <line x1="12" y1="4" x2="12" y2="20"></line>
                    </svg>
                    <span className="text-sm sm:text-xs font-medium text-neutral-300">
                      Hacker News
                    </span>
                  </a>
                </div>

                <div className="flex items-center gap-3 mt-2 min-w-0">
                  <div className="flex-1 min-w-0 bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-neutral-400 font-mono truncate select-all">
                    {pageUrl || "Loading..."}
                  </div>
                  <CopyButton text={pageUrl} />
                </div>
              </DialogContent>
            </Dialog>
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
