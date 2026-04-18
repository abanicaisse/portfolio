import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";

import { ParallaxSection } from "@/components/ui/parallax-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
      </main>

      <ParallaxSection delay={0.1}>
        <About />
      </ParallaxSection>

      <ParallaxSection delay={0.1}>
        <Skills />
      </ParallaxSection>

      <ParallaxSection delay={0.1}>
        <Projects />
      </ParallaxSection>

      <ParallaxSection delay={0.1}>
        <Blog />
      </ParallaxSection>

      <ParallaxSection delay={0.1}>
        <Contact />
      </ParallaxSection>
    </div>
  );
}
