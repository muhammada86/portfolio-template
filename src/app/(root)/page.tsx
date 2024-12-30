import ContactMe from "./components/ContactMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import FloatingSVGs from "./components/FloatingSVGs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsPortfolio from "./components/ProjectsPortfolio";
import SkillsSection from "./components/SkillsSection";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <FloatingSVGs />
      <Header />
      <HeroSection />
      {/* <AboutMe /> */}
      <SkillsSection />
      <Experience />
      <ProjectsPortfolio />
      <Education />
      <ContactMe />
      <Footer />
    </main>
  );
}
