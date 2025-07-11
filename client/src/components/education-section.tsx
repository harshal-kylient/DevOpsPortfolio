import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "S B Jain Institute of Technology",
      period: "2020 – 2024",
      location: "Management and Research, Nagpur",
      icon: GraduationCap,
      gradient: "from-blue-500 to-green-500"
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Hadas Junior College",
      period: "2019 – 2020",
      location: "Nagpur",
      icon: School,
      gradient: "from-green-500 to-orange-500"
    },
    {
      degree: "Secondary School Certificate",
      institution: "Sheeladevi Public School",
      period: "2017 – 2018",
      location: "Nagpur",
      icon: BookOpen,
      gradient: "from-orange-500 to-blue-500"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="font-mono text-green-400">{'>'}</span> Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-orange-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <motion.div
                key={index}
                className="glassmorphism p-8 rounded-xl text-center tech-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${edu.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent className="text-2xl text-white h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-blue-400 font-semibold mb-2">{edu.institution}</p>
                <p className="text-gray-400 font-mono mb-4">{edu.period}</p>
                <p className="text-sm text-gray-300">{edu.location}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
