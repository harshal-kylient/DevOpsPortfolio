import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Solutions Architect – Associate",
      issuer: "ExcelR",
      icon: "🏆",
      link: "https://portfolio-harshal.s3.ap-south-1.amazonaws.com/AWS-Harshal+Santosh+Jadhav.pdf",
      gradient: "from-orange-500 to-yellow-500",
      color: "text-orange-400"
    },
    {
      title: "Spring Boot 3, Spring 6 & Hibernate",
      issuer: "Udemy",
      icon: "🌱",
      link: "https://www.udemy.com/certificate/UC-2502f57a-8daf-4460-ad52-2ce316aa84dd/",
      gradient: "from-green-500 to-green-400",
      color: "text-green-400"
    },
    {
      title: "Analyze Data with SQL",
      issuer: "Codecademy",
      icon: "📊",
      link: "https://www.codecademy.com/profiles/Harshal___________Jadhav/certificates/5cafb2d937090210d7df3652",
      gradient: "from-blue-500 to-blue-400",
      color: "text-blue-400"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-black/20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="font-mono text-orange-400">{'>'}</span> Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="glassmorphism p-8 rounded-xl text-center tech-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className={`w-20 h-20 bg-gradient-to-r ${cert.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-3xl">{cert.icon}</span>
              </motion.div>
              <h3 className={`text-xl font-bold mb-4 ${cert.color}`}>{cert.title}</h3>
              <p className="text-gray-400 mb-4">Issued by: {cert.issuer}</p>
              <Button
                onClick={() => window.open(cert.link, "_blank")}
                className={`bg-gradient-to-r ${cert.gradient} hover:opacity-90 transition-opacity w-full`}
              >
                <Award className="mr-2 h-4 w-4" />
                View Credential
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
