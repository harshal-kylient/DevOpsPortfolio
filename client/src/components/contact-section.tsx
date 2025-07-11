import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "harshalj257@gmail.com",
      link: "mailto:harshalj257@gmail.com",
      gradient: "from-blue-500 to-green-500"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com/in/harshal-jadhav",
      gradient: "from-green-500 to-orange-500"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "Check my repositories",
      link: "https://github.com/harshaljadhav",
      gradient: "from-orange-500 to-blue-500"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Network topology and infrastructure connections" 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="font-mono text-green-400">{'>'}</span> Let's Connect!
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  className="glassmorphism p-6 rounded-xl tech-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-full flex items-center justify-center`}>
                      <IconComponent className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{info.title}</h3>
                      <a 
                        href={info.link} 
                        className="text-blue-400 hover:text-green-400 transition-colors"
                        target={info.link.startsWith("mailto") ? "_self" : "_blank"}
                        rel={info.link.startsWith("mailto") ? "" : "noopener noreferrer"}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="glassmorphism p-8 rounded-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-gray-800/50 border-gray-600 focus:ring-blue-400 focus:border-blue-400"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-gray-800/50 border-gray-600 focus:ring-blue-400 focus:border-blue-400"
                  placeholder="your.email@domain.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="bg-gray-800/50 border-gray-600 focus:ring-blue-400 focus:border-blue-400"
                  placeholder="Let's discuss your project..."
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white glassmorphism"
            onClick={() => window.open("https://portfolio-harshal.s3.ap-south-1.amazonaws.com/Harshal+Jadhav+Resume.pdf", "_blank")}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
          <Button
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
            onClick={() => window.open("mailto:harshalj257@gmail.com", "_self")}
          >
            <Mail className="mr-2 h-4 w-4" />
            Send Email
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
