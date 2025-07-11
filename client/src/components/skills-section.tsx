import { motion } from "framer-motion";
import { Cloud, Settings, Code, BarChart3, Server, Search, Zap, Wrench, Bot, Feather } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      color: "text-blue-400",
      skills: [
        { name: "AWS", level: 90 },
        { name: "Azure", level: 75 },
        { name: "Google Cloud", level: 70 }
      ]
    },
    {
      title: "DevOps Tools",
      icon: Settings,
      color: "text-green-400",
      skills: [
        { name: "Docker", level: 95 },
        { name: "Kubernetes", level: 85 },
        { name: "Jenkins", level: 90 },
        { name: "Terraform", level: 80 }
      ]
    },
    {
      title: "Programming",
      icon: Code,
      color: "text-orange-400",
      skills: [
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "Shell Scripting", level: 90 },
        { name: "SQL", level: 85 }
      ]
    }
  ];

  const tools = [
    { icon: BarChart3, name: "Grafana", color: "text-orange-400" },
    { icon: Zap, name: "Prometheus", color: "text-blue-400" },
    { icon: Search, name: "ELK Stack", color: "text-green-400" },
    { icon: Server, name: "NGINX", color: "text-orange-400" },
    { icon: Feather, name: "Apache", color: "text-blue-400" },
    { icon: Bot, name: "Ansible", color: "text-green-400" }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="font-mono text-orange-400">{'>'}</span> Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                className="glassmorphism p-8 rounded-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className={`text-2xl font-bold mb-6 font-mono ${category.color} flex items-center`}>
                  <IconComponent className="mr-2 h-6 w-6" />
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">{skill.name}</span>
                        <span className="text-green-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="skill-progress rounded-full h-2"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: 0.5 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tools Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <motion.div
                key={index}
                className="glassmorphism p-4 rounded-lg text-center tech-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <IconComponent className={`${tool.color} mx-auto mb-2 h-8 w-8`} />
                <p className="text-sm font-mono">{tool.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
