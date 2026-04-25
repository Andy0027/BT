import React from 'react';
import { motion } from 'framer-motion';

const DisciplineCard = ({ number, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="flex flex-col items-start text-left"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 rounded-full bg-blue-900/40 border border-blue-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.3)]">
        <span className="text-blue-400 font-bold text-sm">{number}</span>
      </div>
      <h3 className="text-white font-bold text-xl">{title}</h3>
    </div>
    <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
      {description}
    </p>
  </motion.div>
);

const OperatingPartner = () => {
  return (
    <div className="w-full bg-[#020817] py-24 border-y border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            Why Brilliant Technologies
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight tracking-tight"
          >
            An operating partner, <span className="text-blue-400">not a vendor.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg sm:text-xl leading-relaxed"
          >
            Four disciplines, one team. We stand behind the infrastructure we build with measurable outcomes — and the engineering depth to defend them.
          </motion.p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-8 border-t border-white/5 relative">
          {/* Subtle background glow behind grid */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-40 bg-blue-600/5 blur-[100px] pointer-events-none" />

          <DisciplineCard
            number="01"
            title="Architect"
            description="We design infrastructure around your workloads — not the other way around. Reference blueprints, sized for your reality."
            delay={0.2}
          />
          <DisciplineCard
            number="02"
            title="Migrate"
            description="Lift, refactor or rebuild. We move workloads with zero-downtime playbooks, governed by automation and policy."
            delay={0.5}
          />
          <DisciplineCard
            number="03"
            title="Operate"
            description="A 24/7 SOC and reliability practice runs alongside your team — measured against SLAs that actually matter."
            delay={0.8}
          />
          <DisciplineCard
            number="04"
            title="Optimize"
            description="Continuous performance, cost and security tuning. We treat infrastructure as a living product."
            delay={1.1}
          />
        </div>
      </div>
    </div>
  );
};

export default OperatingPartner;
