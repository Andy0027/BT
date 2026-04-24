import React from 'react';
import { motion } from 'framer-motion';

const FuturisticGridBackground = () => {
    return (
        <div className="absolute inset-0 bg-[#030b1a] overflow-hidden">
            {/* Base Grid Layer */}
            <div 
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(to right, #1E90FF 1px, transparent 1px), 
                                     linear-gradient(to bottom, #1E90FF 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            {/* SVG Layer for Intersection Glows */}
            <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#00C2FF" stopOpacity="0" />
                    </radialGradient>
                </defs>
                
                {/* Generate intersection dots - sampling a few to avoid too many DOM nodes */}
                {Array.from({ length: 15 }).map((_, i) => (
                    Array.from({ length: 10 }).map((_, j) => (
                        <motion.circle
                            key={`${i}-${j}`}
                            cx={i * 120 + 30}
                            cy={j * 120 + 30}
                            r="1.5"
                            fill="url(#dotGlow)"
                            animate={{
                                opacity: [0.2, 0.6, 0.2],
                                r: [1.2, 2, 1.2]
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: Math.random() * 5
                            }}
                        />
                    ))
                ))}
            </svg>

            {/* Layered Lighting - Top-Right Glow */}
            <div 
                className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, #1E90FF 0%, transparent 70%)'
                }}
            />

            {/* Layered Lighting - Center-Right Glow */}
            <div 
                className="absolute top-1/2 -translate-y-1/2 -right-20 w-[800px] h-[500px] rounded-full blur-[150px] opacity-25 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, #00C2FF 0%, transparent 70%)'
                }}
            />

            {/* Dark Gradient Overlay for Left Side Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#030b1a] via-[#030b1a]/60 to-transparent pointer-events-none" />
            
            {/* Subtle Noise Texture for Depth */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none scale-150" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
        </div>
    );
};

export default FuturisticGridBackground;
