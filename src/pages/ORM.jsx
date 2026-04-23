import React from 'react';
import { motion } from 'framer-motion';
import { Activity, BarChart3, Bell, Eye, Settings, Shield, Terminal, TrendingUp } from 'lucide-react';

const ORM = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const cardVariants = {
    hover: {
      y: -10,
      rotateX: 5,
      rotateY: 5,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-[#0D2440] text-white pt-24 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-primary/30 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-soft/20 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/4"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-32 flex flex-col items-center justify-center text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-10"
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-300 text-xs font-bold tracking-[0.2em] uppercase"
          >
            Elite Operational Excellence
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl lg:text-8xl font-black mb-8 tracking-tighter"
          >
            ORM <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-600 italic">SYSTEMS</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-2xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed mb-12"
          >
            <span className="text-white font-medium italic">Optimization & Reliability Management.</span> <br/>
            Engineered for zero-latency operations and absolute predictability in distributed environments.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex gap-4 justify-center">
            <button className="bg-white text-navy-main font-black py-4 px-12 rounded-lg hover:bg-blue-primary hover:text-white transition-all transform hover:-translate-y-1 shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
              ACCESS CONSOLE
            </button>
            <button className="bg-transparent border border-white/20 text-white font-bold py-4 px-12 rounded-lg hover:bg-white/5 transition-all">
              VIEW ARCHITECTURE
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Real-time Grid Section */}
      <section className="py-20 px-6 lg:px-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Activity />, title: 'Latency Monitoring', desc: 'Real-time heartbeat analysis across global nodes with microsecond precision.', color: 'blue' },
            { icon: <TrendingUp />, title: 'Auto-Scaling Logic', desc: 'Predictive resource allocation based on neural-network traffic forecasting.', color: 'purple' },
            { icon: <Terminal />, title: 'Kernel Optimization', desc: 'Low-level tuning for maximum throughput and minimal instruction cycles.', color: 'cyan' },
            { icon: <Shield />, title: 'Resilience Testing', desc: 'Automated chaos engineering to ensure 100% system fault tolerance.', color: 'green' },
            { icon: <Eye />, title: 'Deep Observability', desc: 'Full-stack trace visibility from the user click to the machine register.', color: 'orange' },
            { icon: <Settings />, title: 'Adaptive Config', desc: 'Self-healing configurations that adapt to environmental shifts dynamically.', color: 'red' }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              className="group p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-blue-400/50 transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                {React.cloneElement(feature.icon, { size: 120 })}
              </div>
              <div className="bg-blue-primary/20 p-4 rounded-xl inline-block mb-6 text-blue-400 group-hover:bg-blue-primary group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="py-32 bg-black/40 relative z-10 border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-32 flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square w-full max-w-[500px]"
            >
              <div className="absolute inset-0 border-[3px] border-blue-400/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-4 border-[2px] border-blue-primary/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-10 border border-white/40 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <BarChart3 className="w-32 h-32 text-blue-400 opacity-50" />
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_white]"></div>
            </motion.div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 italic">The Philosophy of Predictability.</h2>
            <p className="text-xl text-gray-300 mb-10 font-light">
              We treat software as a physical system. ORM isn't just management—it's the mathematical guarantee that your infrastructure performs exactly as anticipated, regardless of scale or volatility.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-blue-300 border-b border-white/10 pb-4">
                <span className="font-mono text-2xl">01</span>
                <span className="font-bold tracking-widest uppercase">Deterministic Execution</span>
              </div>
              <div className="flex items-center gap-4 text-blue-300 border-b border-white/10 pb-4">
                <span className="font-mono text-2xl">02</span>
                <span className="font-bold tracking-widest uppercase">Atomic Reliability</span>
              </div>
              <div className="flex items-center gap-4 text-blue-300 border-b border-white/10 pb-4">
                <span className="font-mono text-2xl">03</span>
                <span className="font-bold tracking-widest uppercase">Global Consistency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Console CTA */}
      <section className="py-32 px-6 lg:px-32 text-center group">
        <motion.div 
          className="max-w-[1200px] mx-auto overflow-hidden rounded-[4rem] border border-white/10 relative"
          whileInView={{ y: [40, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-blue-900/40 opacity-50"></div>
          <div className="relative py-24 px-8">
            <Bell className="w-16 h-16 text-blue-400 mx-auto mb-8 animate-pulse" />
            <h2 className="text-5xl lg:text-7xl font-black mb-6">READY FOR <br/> ELEVATED CONTROL?</h2>
            <p className="text-2xl text-blue-200/60 mb-12 italic max-w-2xl mx-auto">JOIN THE ELITE TIER OF INFRASTRUCTURE MANAGEMENT.</p>
            <button className="px-20 py-6 bg-blue-primary text-white text-xl font-black rounded-2xl hover:scale-105 transition-transform shadow-[0_0_50px_rgba(59,130,246,0.3)]">
              DEPLOY ORM NOW
            </button>
          </div>
        </motion.div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm italic">
        Elite Optimization Protocol v2.4.0 — Brilliant Technologies
      </footer>
    </div>
  );
};

export default ORM;
