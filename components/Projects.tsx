"use client";

import React, { useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Modern E-Commerce Platform",
    category: "Full Stack",
    description:
      "A complete e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzY0NzA3NDM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    gradient: "from-[#BFFF0A] to-green-500",
  },
  {
    title: "Mobile Fitness App",
    category: "Mobile",
    description:
      "Cross-platform fitness tracking app with workout plans, nutrition tracking, and social features.",
    image:
      "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0Njc2NDE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React Native", "Firebase", "TypeScript"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    category: "Web App",
    description:
      "Real-time analytics platform with AI-driven insights and predictive analytics for business intelligence.",
    image:
      "https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY0NzMxMzAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "Python", "TensorFlow", "D3.js"],
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "SaaS Project Management Tool",
    category: "Full Stack",
    description:
      "Collaborative project management platform with team communication, task tracking, and time management.",
    image:
      "https://images.unsplash.com/photo-1716436329475-4c55d05383bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjQ3NDU3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Vue.js", "Express", "MongoDB", "Socket.io"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Real Estate Marketplace",
    category: "Web App",
    description:
      "Property listing platform with virtual tours, advanced search filters, and integrated booking system.",
    image:
      "https://images.unsplash.com/photo-1623281185000-6940e5347d2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBkZXNrfGVufDF8fHx8MTc2NDc2MjMzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "GraphQL", "AWS", "Mapbox"],
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    title: "Social Media Platform",
    category: "Full Stack",
    description:
      "Modern social networking app with real-time messaging, content sharing, and community features.",
    image:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2NDczOTc3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "PostgreSQL", "Redis", "AWS"],
    gradient: "from-pink-500 to-rose-500",
  },
];

const categories = ["All", "Full Stack", "Web App", "Mobile"];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#BFFF0A] rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 mb-6">
            <Eye size={16} className="text-[#BFFF0A]" />
            <span className="text-sm">Portfolio</span>
          </div>

          <h2 className="text-5xl md:text-6xl mb-6">
            Take a look at the{" "}
            <span className="bg-white text-black px-3 inline-block">
              latest
            </span>
          </h2>
          <h2 className="text-5xl md:text-6xl mb-6">
            projects I&apos;ve{" "}
            <span className="bg-[#BFFF0A] text-black px-3 inline-block">
              done
            </span>
          </h2>

          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
            From startups to enterprise solutions, here are some of my recent
            works
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-white text-black border-white"
                    : "border-white/20 hover:border-white/50 hover:bg-white/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#BFFF0A] transition-colors">
                    <ExternalLink size={20} />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#BFFF0A] transition-colors">
                    <Github size={20} />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl mb-3">{project.title}</h3>

                <p className="text-white/60 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full bg-black/50 border border-white/10 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-white text-black rounded-full hover:bg-[#BFFF0A] transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
