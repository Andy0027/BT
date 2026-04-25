import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, Globe, Database, Network } from 'lucide-react';

const ArchitectureLayers = () => {
  const capabilities = [
    {
      icon: <Layers className="text-blue-400" size={20} />,
      title: "Composable infrastructure layers"
    },
    {
      icon: <Cpu className="text-blue-400" size={20} />,
      title: "Workload-aware scheduling"
    },
    {
      icon: <Globe className="text-blue-400" size={20} />,
      title: "Sovereign and regional deployments"
    }
  ];

  const stackLayers = [
    { 
      name: "SOFTWARE", color: "bg-blue-400/20", border: "border-blue-400/40", delay: 0.1,
      statLabel: "API Requests", statValue: "4.2B/mo", progress: "100%", accent: "bg-blue-300"
    },
    { 
      name: "COMPUTE", color: "bg-blue-500/20", border: "border-blue-500/40", delay: 0.2,
      statLabel: "Active Nodes", statValue: "1,240", progress: "85%", accent: "bg-blue-400"
    },
    { 
      name: "STORAGE", color: "bg-indigo-500/20", border: "border-indigo-500/40", delay: 0.3,
      statLabel: "I/O Operations", statValue: "2.4M/s", progress: "92%", accent: "bg-indigo-400"
    },
    { 
      name: "NETWORK", color: "bg-blue-600/20", border: "border-blue-600/40", delay: 0.4,
      statLabel: "Global Bandwidth", statValue: "14 Tbps", progress: "78%", accent: "bg-blue-500"
    }
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-transparent">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div className="relative z-10 flex flex-col items-start text-left">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-6"
          >
            Architecture
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1] mb-8"
          >
            A platform built in <br />
            layers, designed for <br />
            <span className="text-blue-400">harmony.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-xl leading-relaxed mb-12"
          >
            Compute, storage, network and security — composed into a single coherent fabric. 
            Each layer independently elastic, collectively orchestrated.
          </motion.p>

          <div className="flex flex-col gap-4 w-full max-w-md">
            {capabilities.map((cap, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-default"
              >
                <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 transition-transform group-hover:scale-110">
                  {cap.icon}
                </div>
                <span className="text-white font-medium text-sm md:text-base">{cap.title}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column - 3D Stack Visual */}
        <div className="relative h-[600px] w-full flex items-center justify-center perspective-2000">
          <div className="relative w-full max-w-lg aspect-square flex flex-col items-center justify-center mt-56">
            {stackLayers.reverse().map((layer, i) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, y: 100, rotateX: 45, rotateZ: -35 }}
                whileInView={{ opacity: 1, y: i * -75, rotateX: 60, rotateZ: -35 }}
                transition={{ duration: 1, delay: layer.delay, ease: "easeOut" }}
                className={`absolute w-[300px] md:w-[420px] h-[220px] md:h-[260px] ${layer.color} border-2 ${layer.border} rounded-2xl shadow-2xl backdrop-blur-md flex flex-col items-start p-5 md:p-6`}
                style={{ 
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5), inset 0 0 20px rgba(59, 130, 246, 0.2)',
                    zIndex: i
                }}
              >
                 <span className="text-white/90 text-sm font-bold tracking-[0.2em]">{layer.name}</span>
                 
                 {/* Real Data Metrics */}
                 <div className="mt-auto w-full flex flex-col gap-2 pb-2">
                    <div className="flex justify-between items-center text-xs text-white/80 font-medium">
                        <span>{layer.statLabel}</span>
                        <span className="text-white font-bold tracking-wide">{layer.statValue}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: layer.progress }}
                           transition={{ duration: 1.5, delay: layer.delay + 0.5 }}
                           className={`h-full ${layer.accent}`}
                        />
                    </div>
                 </div>

                 {/* Inner glow lines */}
                 <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none" />
              </motion.div>
            ))}

            {/* Floating Labels */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute top-1/4 -right-10 flex items-center gap-3"
                >
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-white/80 text-xs font-bold tracking-widest uppercase">Compute</span>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 }}
                    className="absolute bottom-1/3 -left-10 flex items-center gap-3"
                >
                    <span className="text-white/80 text-xs font-bold tracking-widest uppercase">Storage</span>
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-10 right-1/4 flex items-center gap-3"
                >
                    <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                    <span className="text-white/80 text-xs font-bold tracking-widest uppercase">Network</span>
                </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureLayers;
