import React from "react";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "Building Scalable Web Applications with Modern Architecture",
    excerpt:
      "Learn how to design and implement scalable web applications using microservices, serverless functions, and cloud infrastructure.",
    date: "Nov 28, 2025",
    readTime: "8 min read",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzY0NzA3NDM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-[#BFFF0A] to-green-500",
    featured: true,
  },
  {
    title: "The Future of Frontend Development: What to Expect in 2026",
    excerpt:
      "Exploring upcoming trends in frontend development including AI-assisted coding, new frameworks, and performance optimization techniques.",
    date: "Nov 25, 2025",
    readTime: "6 min read",
    category: "Trends",
    image:
      "https://images.unsplash.com/photo-1716436329475-4c55d05383bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjQ3NDU3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Mastering TypeScript: Advanced Patterns and Best Practices",
    excerpt:
      "Deep dive into advanced TypeScript patterns, generics, utility types, and how to write type-safe code that scales.",
    date: "Nov 20, 2025",
    readTime: "10 min read",
    category: "Tutorial",
    image:
      "https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY0NzMxMzAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Optimizing React Performance: A Comprehensive Guide",
    excerpt:
      "Practical strategies for improving React application performance including memoization, code splitting, and lazy loading.",
    date: "Nov 15, 2025",
    readTime: "12 min read",
    category: "Performance",
    image:
      "https://images.unsplash.com/photo-1623281185000-6940e5347d2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBkZXNrfGVufDF8fHx8MTc2NDc2MjMzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Building Accessible Web Applications: A Developer's Guide",
    excerpt:
      "Understanding web accessibility standards and implementing WCAG guidelines to create inclusive digital experiences.",
    date: "Nov 10, 2025",
    readTime: "7 min read",
    category: "Accessibility",
    image:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2NDczOTc3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    title: "State Management in 2025: Beyond Redux",
    excerpt:
      "Comparing modern state management solutions including Zustand, Jotai, and React Query for different use cases.",
    date: "Nov 5, 2025",
    readTime: "9 min read",
    category: "State Management",
    image:
      "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0Njc2NDE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-pink-500 to-rose-500",
  },
];

export function Blog() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <section id="blog" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[150px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 mb-6">
            <BookOpen size={16} className="text-[#BFFF0A]" />
            <span className="text-sm">Blog & Articles</span>
          </div>

          <h2 className="text-5xl md:text-6xl mb-6">
            Latest{" "}
            <span className="bg-white text-black px-3 inline-block">
              Thoughts
            </span>{" "}
            &
          </h2>
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="bg-[#BFFF0A] text-black px-3 inline-block">
              Community
            </span>{" "}
            Contributions
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
                <div className="relative h-80 md:h-auto overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${featuredPost.gradient} opacity-20`}
                  ></div>

                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 rounded-full bg-[#BFFF0A] text-black text-sm flex items-center gap-2">
                      <TrendingUp size={14} />
                      Featured Article
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl mb-4">
                    {featuredPost.title}
                  </h3>

                  <p className="text-white/70 mb-6">{featuredPost.excerpt}</p>

                  <Button
                    variant="ghost"
                    className="group inline-flex items-center gap-2 text-[#BFFF0A] hover:gap-4 transition-all hover:bg-transparent h-auto p-0"
                  >
                    Read Full Article
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post, index) => (
            <div
              key={index}
              className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-20`}
                ></div>
              </div>

              {/* Post Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-xl mb-3 group-hover:text-[#BFFF0A] transition-colors">
                  {post.title}
                </h3>

                <p className="text-white/60 mb-4 text-sm">{post.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-white/50">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Button variant="outline">View All Articles</Button>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-20 backdrop-blur-xl bg-gradient-to-br from-[#BFFF0A]/10 to-purple-500/10 border border-white/20 rounded-3xl p-12 text-center">
          <h3 className="text-3xl md:text-4xl mb-4">
            Subscribe to My{" "}
            <span className="bg-white text-black px-3 inline-block">
              Newsletter
            </span>
          </h3>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Get the latest articles, tutorials, and insights delivered straight
            to your inbox. No spam, unsubscribe anytime.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm focus:outline-none focus:border-[#BFFF0A] transition-colors"
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
