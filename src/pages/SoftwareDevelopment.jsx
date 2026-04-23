import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Layers, Rocket, ShieldCheck, Zap } from 'lucide-react';
import SoftwareSolution from '../components/SoftwareSolution';

const SoftwareDevelopment = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-[#0D2440] text-white pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6 lg:px-32">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-primary/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-soft/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <motion.div 
          className="container mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-5xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-400"
            variants={itemVariants}
          >
            Software Development <br/> 
            <span className="text-3xl lg:text-5xl font-light italic text-blue-300">Engineering Excellence</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
            variants={itemVariants}
          >
            We build elite, high-performance software solutions tailored for the modern enterprise. 
            From architecture to deployment, we deliver precision-engineered digital products.
          </motion.p>

          <motion.div variants={itemVariants}>
            <button className="bg-blue-primary hover:bg-white hover:text-blue-primary text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-primary/30">
              Start Your Project
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section with Glassmorphism */}
      <section className="py-10 px-6 lg:px-32">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Lines of Code', value: '5M+' },
            { label: 'Projects Delivered', value: '250+' },
            { label: 'Expert Engineers', value: '45+' },
            { label: 'Uptime Guarantee', value: '99.9%' }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-[#0A1D33]">
        <div className="container mx-auto px-6 lg:px-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-8 relative">
                Our Core Expertise
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-blue-primary"></div>
              </h2>
              <div className="space-y-6">
                {[
                  { icon: <Code2 className="text-blue-400" />, title: 'Full-Stack Development', desc: 'End-to-end solutions using modern frameworks like React, Node.js, and Python.' },
                  { icon: <Layers className="text-blue-400" />, title: 'Microservices Architecture', desc: 'Scalable, decoupled systems designed for high availability and performance.' },
                  { icon: <Cpu className="text-blue-400" />, title: 'AI & Data Integration', desc: 'Infusing intelligent automation and advanced analytics into your core products.' }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex gap-6 p-6 rounded-2xl hover:bg-white/5 transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                  >
                    <div className="flex-shrink-0 bg-blue-primary/10 p-4 rounded-xl">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 bg-gradient-to-br from-blue-600 to-blue-900 rounded-3xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute bottom-6 left-6 font-bold text-xl italic uppercase tracking-widest opacity-50">Modern UI</div>
                </div>
                <div className="h-48 bg-white/5 rounded-3xl backdrop-blur-md border border-white/10 flex items-center justify-center p-6 text-center italic text-blue-200">
                  "Precision is the foundation of excellence."
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-48 bg-white/5 rounded-3xl backdrop-blur-md border border-white/10 flex items-center justify-center">
                  <Rocket className="w-16 h-16 text-blue-500 animate-bounce" />
                </div>
                <div className="h-64 bg-gradient-to-tr from-navy-lighter to-blue-800 rounded-3xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute bottom-6 left-6 font-bold text-xl italic uppercase tracking-widest opacity-50">Secure API</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reusing existing SoftwareSolution with additional styling */}
      <section className="py-20 bg-[#0D2440] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Enterprise Components</h2>
          <p className="text-gray-400 italic">Integrated modules for rapid deployment</p>
        </div>
        <SoftwareSolution />
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-32 text-center bg-gradient-to-t from-black to-transparent">
        <motion.div 
          className="max-w-4xl mx-auto bg-blue-primary/10 border border-blue-primary/20 p-16 rounded-[3rem] backdrop-blur-xl"
          whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
        >
          <Zap className="w-16 h-16 text-blue-400 mx-auto mb-8" />
          <h2 className="text-4xl font-bold mb-6">Ready to Engineer Your Future?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Let's build something extraordinary together. Our team is standing by to bring your technical vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-white text-blue-primary font-bold py-4 px-12 rounded-full hover:bg-blue-primary hover:text-white transition-all transform hover:scale-105">
              Consult with Experts
            </button>
            <button className="border border-white/20 text-white font-bold py-4 px-12 rounded-full hover:bg-white/10 transition-all">
              View Portfolio
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
