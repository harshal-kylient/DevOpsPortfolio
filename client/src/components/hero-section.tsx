import { motion } from "framer-motion";
import { Download, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingElements from "./floating-elements";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="DevOps infrastructure network diagram" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Floating Elements */}
      <FloatingElements />

      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        {/* Profile Image */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://harshal-jadhav.site/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIMG_20250528_112932.f8103ba1.jpg&w=3840&q=75" 
            alt="Harshal Jadhav" 
            className="w-32 h-32 rounded-full mx-auto border-4 border-blue-400 shadow-2xl animate-glow" 
          />
        </motion.div>

        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="font-mono text-blue-400">$</span> Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Harshal Jadhav
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-mono">
            DevOps & Cloud Engineer <span className="text-orange-400">|</span>{" "}
            CI/CD • Kubernetes • AWS • Docker • Jenkins
          </p>

          {/* Pipeline Animation */}
          <motion.div 
            className="relative mt-8 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-4">
              <div className="glassmorphism p-2 rounded-lg">
                <span className="text-blue-400 text-lg">💻</span>
              </div>
              <div className="w-16 h-1 bg-gray-700 relative overflow-hidden rounded">
                <div className="pipeline-flow"></div>
              </div>
              <div className="glassmorphism p-2 rounded-lg">
                <span className="text-green-400 text-lg">⚙️</span>
              </div>
              <div className="w-16 h-1 bg-gray-700 relative overflow-hidden rounded">
                <div className="pipeline-flow" style={{ animationDelay: "0.5s" }}></div>
              </div>
              <div className="glassmorphism p-2 rounded-lg">
                <span className="text-orange-400 text-lg">🚀</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-2 font-mono">Build → Test → Deploy</p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 px-8 py-4 text-lg font-semibold"
            >
              <FolderOpen className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            <Button
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg font-semibold glassmorphism"
              onClick={() => window.open("https://portfolio-harshal.s3.ap-south-1.amazonaws.com/Harshal+Jadhav+Resume.pdf", "_blank")}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
