import { motion } from "framer-motion";
import { Rocket, Shield, Database } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Kylient Software Solutions Pvt Ltd",
      period: "April 2025 – Present",
      logo: "https://harshal-jadhav.site/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkylient.5af8df7f.jpg&w=96&q=75",
      description: [
        "Designing and implementing battle-tested CI/CD pipelines",
        "Container orchestration with Docker and Kubernetes",
        "Infrastructure automation and optimization"
      ],
      icons: [Rocket, Rocket, Rocket],
      colors: ["text-green-400", "text-blue-400", "text-green-400"],
      status: "current"
    },
    {
      title: "Cloud Engineer Intern",
      company: "Variant.ai",
      period: "July 2024 – Jan 2025",
      logo: "https://harshal-jadhav.site/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvariant.a66d7109.jpg&w=96&q=75",
      description: [
        "Architected scalable VPC environments on AWS",
        "Implemented security best practices and automation",
        "Cloud infrastructure monitoring and optimization"
      ],
      icons: [Rocket, Shield, Rocket],
      colors: ["text-orange-400", "text-green-400", "text-blue-400"],
      status: "completed"
    },
    {
      title: "Software Engineer Intern",
      company: "Infocepts",
      period: "Jan 2024 – July 2024",
      logo: "https://harshal-jadhav.site/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finfocepts.d0088dc2.jpg&w=96&q=75",
      description: [
        "Built robust backend systems with Java",
        "SQL Server integration and optimization",
        "Full-stack development and API design"
      ],
      icons: [Rocket, Database, Rocket],
      colors: ["text-blue-400", "text-green-400", "text-orange-400"],
      status: "completed"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "current" ? "bg-green-400" : "bg-blue-400";
  };

  return (
    <section id="experience" className="py-20 bg-black/20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="font-mono text-blue-400">{'>'}</span> Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-green-400 to-orange-400"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex items-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className={`absolute left-6 w-5 h-5 ${getStatusColor(exp.status)} rounded-full border-4 border-gray-900`}
                  animate={exp.status === "current" ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="ml-20 glassmorphism p-8 rounded-xl flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-green-400">{exp.title}</h3>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                      <p className="text-gray-400 font-mono">{exp.period}</p>
                    </div>
                    <img 
                      src={exp.logo}
                      alt={`${exp.company} logo`} 
                      className="w-16 h-16 rounded-lg" 
                    />
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    {exp.description.map((desc, descIndex) => {
                      const IconComponent = exp.icons[descIndex];
                      return (
                        <motion.li 
                          key={descIndex}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 + descIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <IconComponent className={`${exp.colors[descIndex]} mr-2 mt-1 h-4 w-4 flex-shrink-0`} />
                          {desc}
                        </motion.li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
