import React from "react";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollHighlight } from "@/components/ui/scroll-highlight";
import { cn } from "@/components/ui/utils";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function Blog({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const payload = await getPayload({ config: configPromise });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result = await payload.find({
    collection: "posts",
    depth: 2,
    limit: 10,
    where: {
      status: {
        equals: "published",
      },
    },
    sort: "-publishedAt",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blogPosts = result.docs as any[];

  // Find the single featured post (latest one because of the sort)
  const featuredPost = blogPosts.find((post) => post.featured);
  // All other posts that are NOT the exact featured post we just picked
  const regularPosts = blogPosts
    .filter((post) => post.id !== featuredPost?.id)
    .slice(0, 6); // Limit to a sensible number

  // Helper to safely get image URL
  const getImageUrl = (imageField: any) => {
    if (imageField && typeof imageField === "object" && imageField.url) {
      return imageField.url;
    }
    // Fallback if no featured image
    return "https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzY0NzA3NDM2fDA&ixlib=rb-4.1.0&q=80&w=1080";
  };

  // Helper to format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return "Recent";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Note: Assuming Payload posts have these fields: title, excerpt, publishedAt, category (object with name), featuredImage, readTime (optional/computed), slug
  // gradient and readTime can be hardcoded/placeholder if not in CMS
  const getCategoryName = (category: any) => {
    return category?.name || "Article";
  };

  return (
    <section
      id="blog"
      className={cn("relative py-12 md:py-24 overflow-hidden", className)}
      {...props}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[150px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 mb-6">
            <BookOpen size={16} className="text-brand" />
            <span className="text-sm">Blog & Articles</span>
          </div>

          <h2 className="text-5xl md:text-6xl mb-6 leading-[130%]">
            Latest from my{" "}
            <ScrollHighlight color="yellow" delay={300}>
              Blog
            </ScrollHighlight>{" "}
          </h2>

          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Sharing knowledge, insights, and experiences from the world of web
            development
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Image */}
                <div className="relative h-80 md:h-auto overflow-hidden block">
                  <Link href={`/blog/${featuredPost.slug || featuredPost.id}`}>
                    <Image
                      src={getImageUrl(featuredPost.featuredImage)}
                      alt={featuredPost.title || "Featured Post"}
                      fill
                      className="object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-brand to-green-500 opacity-20`}
                    ></div>

                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 rounded-full bg-brand text-black text-sm flex items-center gap-2">
                        <TrendingUp size={14} />
                        Featured Article
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm">
                      {getCategoryName(featuredPost.category)}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <span className="hidden sm:flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(featuredPost.publishedAt)}
                      </span>
                      <span className="hidden min-[330px]:flex items-center gap-1">
                        <Clock size={14} />5 min read{" "}
                        {/* Placeholder if no readTime field */}
                      </span>
                    </div>
                  </div>

                  <Link href={`/blog/${featuredPost.slug || featuredPost.id}`}>
                    <h3 className="text-3xl md:text-4xl mb-4 hover:text-brand transition-colors">
                      {featuredPost.title}
                    </h3>
                  </Link>

                  <p className="text-white/70 mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  <Button
                    asChild
                    variant="ghost"
                    className="group inline-flex items-center gap-2 text-brand hover:gap-4 transition-all hover:bg-transparent h-auto p-0"
                  >
                    <Link
                      href={`/blog/${featuredPost.slug || featuredPost.id}`}
                    >
                      Read Full Article
                      <ArrowRight
                        size={20}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post, index) => {
            const predefinedGradients = [
              "from-purple-500 to-pink-500",
              "from-blue-500 to-cyan-400",
              "from-orange-500 to-red-500",
              "from-teal-500 to-emerald-500",
              "from-pink-500 to-rose-500",
              "from-indigo-500 to-blue-500",
            ];
            const gradient =
              predefinedGradients[index % predefinedGradients.length];

            return (
              <Link
                href={`/blog/${post.slug || post.id}`}
                key={post.id || index}
                className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 flex flex-col"
              >
                {/* Post Image */}
                <div className="relative h-48 overflow-hidden shrink-0">
                  <Image
                    src={getImageUrl(post.featuredImage)}
                    alt={post.title || "Blog Post"}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20`}
                  ></div>
                </div>

                {/* Post Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs">
                      {getCategoryName(post.category)}
                    </span>
                  </div>

                  <h3 className="text-xl mb-3 group-hover:text-brand transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-white/60 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between text-xs text-white/50 pt-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {formatDate(post.publishedAt)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />5 min read
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-20 backdrop-blur-xl bg-gradient-to-br from-brand/10 to-purple-500/10 border border-white/20 rounded-3xl py-12 px-8 text-center">
          <h3 className="text-3xl md:text-4xl mb-4 leading-[130%]">
            Subscribe to My{" "}
            <ScrollHighlight color="yellow" delay={300}>
              Newsletter
            </ScrollHighlight>
          </h3>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Get the latest articles, tutorials, and insights delivered straight
            to your inbox. No spam, unsubscribe anytime.
          </p>
          <div className="max-w-md mx-auto flex flex-col xs:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm focus:outline-none focus:border-brand transition-colors"
            />
            <Button variant="default" className="whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
