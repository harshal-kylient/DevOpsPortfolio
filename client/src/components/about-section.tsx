import { motion } from "framer-motion";
import { Code, FolderSync, Container, Cloud } from "lucide-react";

const AboutSection = () => {
  const approaches = [
    {
      icon: Code,
      title: "Infrastructure as Code",
      description: "Everything versioned",
      color: "text-blue-400"
    },
    {
      icon: FolderSync,
      title: "Automated CI/CD",
      description: "Build, test, and deploy",
      color: "text-green-400"
    },
    {
      icon: Container,
      title: "Container First",
      description: "Dockerize & orchestrate",
      color: "text-orange-400"
    },
    {
      icon: Cloud,
      title: "Cloud-Native",
      description: "Scalable & resilient",
      color: "text-blue-400"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="font-mono text-blue-400">{'>'}</span> About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a Computer Science Engineer with a strong focus on DevOps, Cloud Infrastructure, and Automation. 
              From backend engineering to designing production-ready CI/CD pipelines, I thrive at the intersection 
              of code, cloud, and containers.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I kickstarted my journey at Infocepts, building robust backend with Java and integration with SQL Server. 
              At Variant.ai, I shifted gears to architect and automate scalable, secure VPC environments on AWS. 
              Today, at Kylient Technologies, I craft the design of battle-tested CI/CD pipelines using Jenkins, 
              Docker, and Kubernetes—bringing infrastructure to life with precision and resilience.
            </p>

            {/* My Approach */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-6 text-green-400 font-mono">// My Approach</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {approaches.map((approach, index) => {
                  const IconComponent = approach.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="glassmorphism p-4 rounded-lg tech-card"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <IconComponent className={`${approach.color} mb-2 h-6 w-6`} />
                      <p className="font-semibold">{approach.title}</p>
                      <p className="text-sm text-gray-400">{approach.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Cloud infrastructure and network topology diagram" 
              className="rounded-xl shadow-2xl w-full" 
            />
            
            {/* Overlay stats */}
            {/* <motion.div 
              className="absolute -bottom-6 -right-6 glassmorphism p-6 rounded-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            > */}
              {/* <div className="text-center">
                <div className="text-3xl font-bold text-green-400">1+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div> */}
            {/* </motion.div> */}
            <motion.div 
              className="absolute -top-6 -left-6 glassmorphism p-6 rounded-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">10+</div>
                <div className="text-sm text-gray-400">Projects Deployed</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
