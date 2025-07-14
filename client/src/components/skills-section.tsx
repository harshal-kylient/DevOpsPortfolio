import { color, motion } from "framer-motion";
import { FaDocker, FaAws, FaJenkins, FaPython, FaJava, FaCode, FaSearchDollar, FaDollarSign, FaGit } from "react-icons/fa";
import { SiGithubactions, SiKubernetes, SiMysql, SiTerraform } from "react-icons/si";
import { Cloud, Settings, Code, BarChart3, Server, Search, Zap, Wrench, Bot, Feather } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    { icon: FaAws, name: "AWS", color: "text-blue-400" },
    { icon: Cloud, name: "Azure", color: "text-blue-400" },
    { icon: FaGit, name: "Git", color: "text-red-400"},
    { icon: FaDocker, name: "Docker", color: "text-green-400" },
    { icon: SiKubernetes, name: "Kubernetes", color: "text-green-400" },
    { icon: FaJenkins, name: "Jenkins", color: "text-green-400" },
    { icon: SiGithubactions, name: "Gihtub Actions", color: "text-black-400"},
    { icon: SiTerraform, name: "Terraform", color: "text-green-400" },
    { icon: FaPython, name: "Python", color: "text-orange-400" },
    { icon: FaJava, name: "Java", color: "text-orange-400" },
    { icon: FaDollarSign, name: "Bash Scripting", color: "text-orange-400" },
    { icon: SiMysql, name: "SQL", color: "text-orange-400" }
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

      {/* Combined Skills & Tools Grid */}
<motion.div 
  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  {[...skills, ...tools].map((item, index) => {
    const IconComponent = item.icon;
    return (
      <motion.div
        key={index}
        className="glassmorphism p-4 rounded-lg text-center tech-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <IconComponent className={`${item.color} mx-auto mb-2 h-8 w-8`} />
        <p className="text-sm font-mono">{item.name}</p>
      </motion.div>
    );
  })}
</motion.div>
    </div>
    </section>
  );
};

export default SkillsSection;