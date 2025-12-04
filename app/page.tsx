import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
      </main>
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}
