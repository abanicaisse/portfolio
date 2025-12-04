"use client";

import React, { useState } from "react";
import {
  Code,
  Database,
  Layout,
  Smartphone,
  Cloud,
  GitBranch,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend Development",
    color: "from-[#BFFF0A] to-green-400",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vue.js",
      "Angular",
    ],
  },
  {
    icon: Database,
    title: "Backend Development",
    color: "from-purple-500 to-pink-500",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express", "Django"],
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    color: "from-blue-500 to-cyan-400",
    skills: [
      "Figma",
      "Adobe XD",
      "Responsive Design",
      "Prototyping",
      "Design Systems",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    color: "from-orange-500 to-red-500",
    skills: [
      "React Native",
      "Flutter",
      "iOS",
      "Android",
      "Progressive Web Apps",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    color: "from-teal-500 to-emerald-500",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Vercel", "Netlify"],
  },
  {
    icon: GitBranch,
    title: "Tools & Workflow",
    color: "from-yellow-500 to-orange-400",
    skills: ["Git", "GitHub", "VS Code", "Jira", "Agile", "Scrum"],
  },
];

export function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % Math.max(1, skillCategories.length - 2)
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.max(1, skillCategories.length - 2)) %
        Math.max(1, skillCategories.length - 2)
    );
  };

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[150px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 mb-6">
            <Code size={16} className="text-[#BFFF0A]" />
            <span className="text-sm">Tech Stack</span>
          </div>

          <h2 className="text-5xl md:text-6xl mb-6">
            My{" "}
            <span className="bg-white text-black px-3 inline-block">
              Extensive
            </span>{" "}
            List of Skills
          </h2>

          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Building cutting-edge solutions with the latest technologies and
            best practices
          </p>
        </div>

        {/* Skills Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} p-0.5 mb-6`}
                >
                  <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                    <Icon size={28} className="text-white" />
                  </div>
                </div>

                <h3 className="text-2xl mb-4">{category.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Carousel - Mobile */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} p-0.5 mb-6`}
                      >
                        <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                          <Icon size={28} className="text-white" />
                        </div>
                      </div>

                      <h3 className="text-2xl mb-4">{category.title}</h3>

                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="icon-outline"
              size="icon"
              onClick={prevSlide}
              aria-label="Previous skill"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="icon-outline"
              size="icon"
              onClick={nextSlide}
              aria-label="Next skill"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        {/* Additional Tech Stack Display */}
        <div className="mt-16 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl mb-2">Technologies I Work With Daily</h3>
            <p className="text-white/60">
              Constantly learning and adapting to new tools
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Node.js",
              "Python",
              "Docker",
              "AWS",
              "PostgreSQL",
              "MongoDB",
              "Git",
              "Figma",
              "Tailwind CSS",
            ].map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 hover:border-[#BFFF0A]/50 hover:bg-white/20 transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
