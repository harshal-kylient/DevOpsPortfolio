import { motion } from "framer-motion";
import { ExternalLink, Lock, Archive, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "CMI-Construction-CRM",
      description: "A web-based CRM system tailored for the construction industry, enabling teams to manage leads, clients, estimates, inventory, vendors, teams, and documentation—all in one platform.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      imageAlt: "CI/CD pipeline development and automation workflow",
      tech: ["AWS", "MySQL", "Docker", "Nginx", "Jenkins"],
      techColors: {
        "AWS": "text-orange-400",
        "MySQL": "text-blue-400",
        "Docker": "text-blue-400",
        "Nginx": "text-green-400",
        "Jenkins": "text-orange-400"
      },
      link: "https://testcmi-nest.kylient.com/",
      linkText: "Live Demo",
      icon: ExternalLink,
      gradient: "from-blue-500 to-green-500"
    },
    {
      title: "Cloudfin Insights",
      description: "Serverless financial data pipeline using Lambda, RDS, Glue & QuickSight for real-time analytics and business intelligence.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      imageAlt: "Cloud computing infrastructure with data analytics visualization",
      tech: ["QuickSight", "Glue", "Lambda", "RDS", "S3"],
      techColors: {
        "QuickSight": "text-orange-400",
        "Glue": "text-blue-400",
        "Lambda": "text-green-400",
        "RDS": "text-blue-400",
        "S3": "text-orange-400"
      },
      linkText: "Private Project",
      icon: Lock,
      gradient: "from-green-500 to-blue-500"
    },
    {
      title: "Trykart Cloud Deployment",
      description: "Deployed Angular + Spring Boot app with AWS EC2, RDS, CloudFront & load balancing for high availability and performance.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      imageAlt: "DevOps automation and deployment pipeline visualization",
      tech: ["AWS", "Angular", "Java", "Spring Boot"],
      techColors: {
        "AWS": "text-orange-400",
        "Angular": "text-red-400",
        "Java": "text-blue-400",
        "Spring Boot": "text-green-400"
      },
      linkText: "Archived",
      icon: Archive,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Malware Detection ML",
      description: "Web application to detect malware using Random Forest ML model with real-time threat analysis and reporting capabilities.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      imageAlt: "Machine learning and cloud computing infrastructure for cybersecurity",
      tech: ["Flask", "Python", "ML"],
      techColors: {
        "Flask": "text-green-400",
        "Python": "text-blue-400",
        "ML": "text-orange-400"
      },
      linkText: "Academic Project",
      icon: GraduationCap,
      gradient: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="font-mono text-green-400">{'>'}</span> Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-orange-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                className="glassmorphism p-8 rounded-xl tech-card group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <img 
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-48 object-cover rounded-lg mb-4" 
                  />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-mono text-green-400 mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline" 
                        className={`glassmorphism border-gray-600 ${project.techColors[tech]} font-mono`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {project.link ? (
                  <Button
                    onClick={() => window.open(project.link, "_blank")}
                    className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 transition-opacity`}
                  >
                    <IconComponent className="mr-2 h-4 w-4" />
                    {project.linkText}
                  </Button>
                ) : (
                  <Button
                    disabled
                    className="bg-gray-600 cursor-not-allowed"
                  >
                    <IconComponent className="mr-2 h-4 w-4" />
                    {project.linkText}
                  </Button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
