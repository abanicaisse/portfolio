"use client";

import React, { forwardRef, useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollHighlight } from "@/components/ui/scroll-highlight";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { cn } from "@/components/ui/utils";

export const Contact = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
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
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={ref}
      id="contact"
      className={cn("relative py-12 md:py-24 overflow-hidden", className)}
      {...props}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-brand rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 mb-6">
            <MessageSquare size={16} className="text-brand" />
            <span className="text-sm">Get In Touch</span>
          </div>

          <h2 className="text-5xl md:text-6xl mb-6 leading-[130%]">
            Let&apos;s Work{" "}
            <ScrollHighlight color="yellow" delay={300}>
              Together
            </ScrollHighlight>
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
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand to-green-500 p-0.5 mb-4">
                <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                  <Mail size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl mb-2">Email Me</h3>
              <p className="text-white/60 mb-3">I respond within 24 hours</p>
              <Link
                href="mailto:abawandjovunicaise@gmail.com"
                className="text-brand hover:underline"
              >
                abawandjovunicaise@gmail.com
              </Link>
            </div>

            {/* Phone Card */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 mb-4">
                <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                  <Phone size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl mb-2">Call Me</h3>
              <p className="text-white/60 mb-3">Mon-Fri from 9am to 8pm</p>
              <Link
                href="tel:+256757679518"
                className="text-brand hover:underline"
              >
                +256 (757) 679-518
              </Link>
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
              <p className="text-brand">Kampala, UG</p>
            </div>

            {/* Social Links */}
            {/* <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-xl mb-4">Connect With Me</h3>
              <div className="flex gap-3">
                <Link
                  href="https://github.com/abanicaisse"
                  target="_blank"
                  className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-brand hover:text-black hover:border-brand transition-all"
                >
                  <Github size={20} />
                </Link>
                <Link
                  href="https://linkedin.com/in/abanicaisse"
                  target="_blank"
                  className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-brand hover:text-black hover:border-brand transition-all"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href="https://x.com/abanicaisse"
                  target="_blank"
                  className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-brand hover:text-black hover:border-brand transition-all"
                >
                  <Twitter size={20} />
                </Link>
                <Link
                  href="mailto:abawandjovunicaise@gmail.com"
                  target="_blank"
                  className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-brand hover:text-black hover:border-brand transition-all"
                >
                  <Mail size={20} />
                </Link>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="h-fit lg:col-span-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
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
                    className="w-full h-14 px-6 rounded-2xl bg-white/5 border border-white/20 backdrop-blur-sm focus:outline-none focus:border-brand transition-colors"
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
                    className="w-full h-14 px-6 rounded-2xl bg-white/5 border border-white/20 backdrop-blur-sm focus:outline-none focus:border-brand transition-colors"
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
                <Select
                  value={formData.subject}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, subject: value }))
                  }
                  required
                >
                  <SelectTrigger
                    id="subject"
                    className="w-full text-base h-14 data-[size=default]:h-14 px-6 rounded-2xl bg-white/5 border border-white/20 backdrop-blur-sm focus:ring-0 focus-visible:ring-0 focus:ring-offset-0 focus:border-brand focus-visible:border-brand focus:outline-none transition-colors"
                  >
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-950 border border-white/10 text-white/90 rounded-2xl shadow-xl shadow-black/50 p-2">
                    <SelectItem
                      value="project"
                      className="cursor-pointer focus:bg-white/10 focus:text-white rounded-xl py-2.5 px-4 transition-colors outline-none hover:outline-none"
                    >
                      New Project
                    </SelectItem>
                    <SelectItem
                      value="collaboration"
                      className="cursor-pointer focus:bg-white/10 focus:text-white rounded-xl py-2.5 px-4 transition-colors outline-none hover:outline-none"
                    >
                      Collaboration
                    </SelectItem>
                    <SelectItem
                      value="job"
                      className="cursor-pointer focus:bg-white/10 focus:text-white rounded-xl py-2.5 px-4 transition-colors outline-none hover:outline-none"
                    >
                      Job Opportunity
                    </SelectItem>
                    <SelectItem
                      value="other"
                      className="cursor-pointer focus:bg-white/10 focus:text-white rounded-xl py-2.5 px-4 transition-colors outline-none hover:outline-none"
                    >
                      Other
                    </SelectItem>
                  </SelectContent>
                </Select>
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
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/20 backdrop-blur-sm focus:outline-none focus:border-brand transition-colors resize-none"
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
        <div className="mt-16 backdrop-blur-xl bg-gradient-to-r from-brand/10 to-purple-500/10 border border-white/20 rounded-3xl p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-3 h-3 bg-brand rounded-full animate-pulse"></span>
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
});

Contact.displayName = "Contact";
