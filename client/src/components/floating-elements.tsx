import { motion } from "framer-motion";
import { 
  Cloud, 
  Server, 
  Container, 
  GitBranch, 
  Settings, 
  Monitor 
} from "lucide-react";

const FloatingElements = () => {
  const elements = [
    { icon: Container, position: { top: "20%", left: "10%" }, delay: 0, color: "text-blue-400" },
    { icon: Cloud, position: { top: "30%", right: "15%" }, delay: 1, color: "text-orange-400" },
    { icon: Server, position: { bottom: "30%", left: "15%" }, delay: 2, color: "text-green-400" },
    { icon: GitBranch, position: { top: "60%", right: "10%" }, delay: 3, color: "text-purple-400" },
    { icon: Settings, position: { bottom: "40%", right: "20%" }, delay: 4, color: "text-yellow-400" },
    { icon: Monitor, position: { top: "40%", left: "5%" }, delay: 5, color: "text-pink-400" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => {
        const IconComponent = element.icon;
        return (
          <motion.div
            key={index}
            className="absolute glassmorphism p-3 rounded-lg"
            style={element.position}
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
          >
            <IconComponent className={`w-6 h-6 ${element.color}`} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingElements;
