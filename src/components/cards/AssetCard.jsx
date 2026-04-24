import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function AssetCard({ title, para, icon, btnText = "Explore More", index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="group relative h-full"
    >
      {/* Outer glow layer */}
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/40 via-blue-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      {/* Card */}
      <div className="relative h-full rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0d1f3c] via-[#0f2548] to-[#091830] flex flex-col min-h-[380px] p-8 shadow-[0_8px_40px_rgba(0,0,0,0.4)] group-hover:shadow-[0_16px_60px_rgba(46,94,153,0.3)] transition-all duration-500 group-hover:-translate-y-2">

        {/* Top shimmer line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

        {/* Radial glow from top-left */}
        <div className="absolute -top-12 -left-12 w-40 h-40 rounded-full bg-blue-primary/20 blur-3xl group-hover:bg-blue-primary/35 transition-all duration-700" />

        {/* Icon blob */}
        <div className="relative mb-7 shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-primary to-blue-soft flex items-center justify-center shadow-[0_4px_20px_rgba(46,94,153,0.5)] group-hover:shadow-[0_6px_30px_rgba(46,94,153,0.7)] transition-all duration-500 group-hover:scale-110">
            <span className="text-white text-3xl">
              {icon}
            </span>
          </div>
          {/* Dot accent */}
          <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h2 className="text-xl font-bold text-white mb-3 tracking-tight leading-snug">
            {title}
          </h2>
          <p className="text-blue-200/60 text-sm font-normal leading-relaxed">
            {para}
          </p>
        </div>

        {/* Arrow CTA */}
        <div className="mt-8">
          <Link
            to="../contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
          >
            {btnText}
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="inline-block"
            >
              →
            </motion.span>
          </Link>
        </div>

        {/* Bottom shimmer line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

export default AssetCard;
