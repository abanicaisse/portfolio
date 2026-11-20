import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { WorkSection } from "@/components/home/WorkSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { StackSection } from "@/components/home/StackSection";
import { WritingSection } from "@/components/home/WritingSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <WorkSection />
      <CapabilitiesSection />
      <ExperienceSection />
      <StackSection />
      <WritingSection />
      <ContactSection />
    </>
  );
}
