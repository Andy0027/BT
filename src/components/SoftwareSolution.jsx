import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { 
  Cloud, 
  Container, 
  Settings, 
  Terminal, 
  Code, 
  Database 
} from "lucide-react";

const ServiceCard = ({ icon, title, description, index }) => (
  <div className="h-full min-h-[300px] w-[380px] mx-4 group relative flex">
    {/* Animated Glowing Blob Background */}
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-primary/20 to-navy-main/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    
    <div className="flex-1 bg-white/5 backdrop-blur-xl group rounded-3xl p-8 flex flex-col items-start border border-white/10 hover:border-blue-400/30 hover:bg-white/10 transition-all duration-500 relative overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-400/10">
      
      {/* Icon Section with Animated Ring */}
      <div className="relative mb-8">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-4 bg-blue-primary/5 rounded-full blur-xl group-hover:bg-blue-primary/15 transition-colors duration-500"
        />
        <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/10 border border-white/10 shadow-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 text-blue-400">
          {icon}
        </div>
      </div>

      <div className="relative z-10 flex-1 w-full">
        <h3 className="text-xl font-bold mb-4 text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-400 font-medium text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const SoftwareSolution = () => {
  const solutions = [
    { icon: <Cloud size={32} />, title: "Virtual Servers", description: "High-performance compute instances with flexible configurations and on-demand scalability." },
    { icon: <Container size={32} />, title: "Container Deployment", description: "Seamless Kubernetes and Docker orchestration to simplify your application lifecycle." },
    { icon: <Settings size={32} />, title: "System Optimization", description: "Continuous performance tuning and resource management to keep your infrastructure running lean." },
    { icon: <Terminal size={32} />, title: "DevOps Support", description: "Expert guidance and automated tools to accelerate your development and deployment pipelines." },
    { icon: <Code size={32} />, title: "API Hosting", description: "Optimized environments for modern APIs, ensuring low latency and high reliability." },
    { icon: <Database size={32} />, title: "Database Management", description: "Managed SQL and NoSQL databases designed to handle growing data needs effortlessly." }
  ];

  return (
    <section className="relative py-16 bg-transparent overflow-hidden">
      {/* Atmospheric Background Decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-primary/5 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy-main/5 rounded-full blur-[120px] -z-0" />
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto text-center mb-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="h-px w-8 bg-blue-primary/30" />
            <span className="text-blue-primary font-bold text-xs uppercase tracking-widest">Enterprise Solutions</span>
            <div className="h-px w-8 bg-blue-primary/30" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-3xl sm:text-5xl font-bold mb-4 whitespace-nowrap"
          >
            Flexible Cloud <span className="text-blue-400">Solutions</span> for Every Business
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-4xl mx-auto"
          >
            From Startups to Enterprises, our infrastructure adapts to your needs. 
          </motion.p>
        </div>

        {/* Horizontal Auto-Scrolling Marquee */}
        <div className="w-full overflow-hidden">
          <Marquee speed={35} pauseOnHover={true} gradient={true} gradientColor={[2, 8, 23]} gradientWidth={200}>
            <div className="flex py-10 px-4">
              {solutions.map((item, idx) => (
                <ServiceCard key={idx} {...item} index={idx} />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSolution;