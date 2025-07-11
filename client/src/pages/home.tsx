import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import EducationSection from "@/components/education-section";
import CertificationsSection from "@/components/certifications-section";
import ContactSection from "@/components/contact-section";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-black/40 py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400 font-mono">
            <span className="text-blue-400">$</span> Built with ❤️ by Harshal Jadhav |{" "}
            <span className="text-green-400">DevOps & Cloud Engineer</span> |{" "}
            <span className="text-orange-400">© 2024</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
