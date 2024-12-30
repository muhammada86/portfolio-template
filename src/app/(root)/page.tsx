import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import SkillsSection from "@/components/SkillsSection";
import Experience from "@/components/Experience";
import ProjectsPortfolio from "@/components/ProjectsPortfolio";
import Education from "@/components/Education";
import ContactMe from "@/components/ContactMe";
import FloatingSVGs from "@/components/FloatingSVGs";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <FloatingSVGs />
      <HeroSection />
      <AboutMe />
      <SkillsSection />
      <Experience />
      <ProjectsPortfolio />
      <Education />
      <ContactMe />
    </main>
  );
}
