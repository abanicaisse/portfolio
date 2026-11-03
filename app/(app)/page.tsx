import { Hero } from "@/components/home/Hero";
import { WorkSection } from "@/components/home/WorkSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { StackSection } from "@/components/home/StackSection";
import { Marquee } from "@/components/home/Marquee";
import { ApproachSection } from "@/components/home/ApproachSection";
import { WritingSection } from "@/components/home/WritingSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkSection />
      <ExperienceSection />
      <StackSection />
      <Marquee />
      <ApproachSection />
      <WritingSection />
      <ContactSection />
    </>
  );
}
