"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#BFFF0A] rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 mb-6">
            <MessageSquare size={16} className="text-[#BFFF0A]" />
            <span className="text-sm">Get In Touch</span>
          </div>

          <h2 className="text-5xl md:text-6xl mb-6">
            Let&apos;s Start a{" "}
            <span className="bg-white text-black px-3 inline-block">
              Project
            </span>
          </h2>
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="bg-[#BFFF0A] text-black px-3 inline-block">
              Together
            </span>
          </h2>

          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I&apos;d love to hear
            from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Email Card */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#BFFF0A] to-green-500 p-0.5 mb-4">
                <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                  <Mail size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl mb-2">Email Me</h3>
              <p className="text-white/60 mb-3">
                I&apos;ll respond within 24 hours
              </p>
              <a
                href="mailto:hello@developer.com"
                className="text-[#BFFF0A] hover:underline"
              >
                hello@developer.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 mb-4">
                <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                  <Phone size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl mb-2">Call Me</h3>
              <p className="text-white/60 mb-3">Mon-Fri from 9am to 6pm</p>
              <a
                href="tel:+1234567890"
                className="text-[#BFFF0A] hover:underline"
              >
                +1 (234) 567-890
              </a>
            </div>

            {/* Location Card */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 p-0.5 mb-4">
                <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                  <MapPin size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl mb-2">Location</h3>
              <p className="text-white/60 mb-3">Available for remote work</p>
              <p className="text-[#BFFF0A]">San Francisco, CA</p>
            </div>

            {/* Social Links */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-xl mb-4">Connect With Me</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#BFFF0A] hover:text-black hover:border-[#BFFF0A] transition-all"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#BFFF0A] hover:text-black hover:border-[#BFFF0A] transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#BFFF0A] hover:text-black hover:border-[#BFFF0A] transition-all"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#BFFF0A] hover:text-black hover:border-[#BFFF0A] transition-all"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-3xl mb-6">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2 text-white/80"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/20 backdrop-blur-sm focus:outline-none focus:border-[#BFFF0A] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 text-white/80"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/20 backdrop-blur-sm focus:outline-none focus:border-[#BFFF0A] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm mb-2 text-white/80"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/20 backdrop-blur-sm focus:outline-none focus:border-[#BFFF0A] transition-colors"
                >
                  <option value="" className="bg-black">
                    Select a subject
                  </option>
                  <option value="project" className="bg-black">
                    New Project
                  </option>
                  <option value="collaboration" className="bg-black">
                    Collaboration
                  </option>
                  <option value="job" className="bg-black">
                    Job Opportunity
                  </option>
                  <option value="other" className="bg-black">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm mb-2 text-white/80"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/20 backdrop-blur-sm focus:outline-none focus:border-[#BFFF0A] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                variant="default"
                className="group w-full md:w-auto"
              >
                Send Message
                <Send
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </Button>
            </form>
          </div>
        </div>

        {/* Availability Banner */}
        <div className="mt-16 backdrop-blur-xl bg-gradient-to-r from-[#BFFF0A]/10 to-purple-500/10 border border-white/20 rounded-3xl p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-3 h-3 bg-[#BFFF0A] rounded-full animate-pulse"></span>
            <h3 className="text-2xl">Currently Available for New Projects</h3>
          </div>
          <p className="text-white/70">
            I&apos;m currently accepting new freelance projects and full-time
            opportunities. Let&apos;s build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
}
