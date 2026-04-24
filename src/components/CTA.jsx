import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import FuturisticGridBackground from './FuturisticGridBackground'

const StatCard = ({ value, label, delay = 0, widthClass = "w-full" }) => (
    <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay }}
        viewport={{ once: true }}
        className={`${widthClass} group relative`}
    >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-primary to-blue-soft rounded-[2rem] blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative h-full bg-white/5 backdrop-blur-2xl border border-white/10 p-6 rounded-[2rem] flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-2 hover:bg-white/10">
            <motion.span 
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: delay + 0.2 }}
                className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl"
            >
                {value}
            </motion.span>
            <p className="text-blue-subtle/80 text-xs md:text-sm text-center mt-3 font-medium tracking-wide">
                {label}
            </p>
            
            {/* Corner Decorative Element */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-primary animate-pulse" />
        </div>
    </motion.div>
);

const CTA = () => {
    return (
        <div className="px-6 md:px-12 py-8">
            <section className="relative overflow-hidden py-14 rounded-[3rem] bg-[#030b1a] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                {/* Premium Futuristic Grid Background */}
                <FuturisticGridBackground />
                
                <div className="container mx-auto px-6 md:px-12 relative z-20">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        {/* Left Column: Messaging */}
                        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
                            >
                                Infrastructure, <span className="text-blue-primary">Security, Innovation</span>
                            </motion.h2>
                            
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-primary/10 border border-blue-primary/20 mb-6"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-primary animate-pulse" />
                                <span className="text-blue-soft font-semibold tracking-wider text-[10px] sm:text-xs uppercase">Performance You Can Trust</span>
                            </motion.div>

                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-base md:text-lg text-blue-subtle/70 leading-relaxed mb-8 max-w-xl"
                            >
                                We're Experts, and Here's the Proof. Join <span className="text-white font-semibold">500+ enterprises</span> scaling their critical cloud infrastructure with total confidence.
                            </motion.p>
                            
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <Link to="/contact">
                                    <button className="group relative px-8 py-4 bg-blue-primary text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(46,94,153,0.6)] text-sm sm:text-base">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-primary to-[#3b76bb] transition-transform duration-300 group-hover:scale-105" />
                                        <span className="relative z-10 flex items-center gap-2">
                                            Get Started
                                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </span>
                                    </button>
                                </Link>
                            </motion.div>
                        </div>

                        {/* Right Column: Interactive Stats Stack */}
                        <div className="w-full lg:w-5/12 flex flex-col gap-6">
                            <StatCard 
                                value="99.9%" 
                                label="Uptime Guarantee" 
                                delay={0.2}
                                widthClass="w-full lg:w-[80%]" 
                            />
                            <StatCard 
                                value="24/7" 
                                label="Monitoring & Support" 
                                delay={0.4}
                                widthClass="w-full" 
                            />
                            <StatCard 
                                value="500+" 
                                label="Global Deployments" 
                                delay={0.6}
                                widthClass="w-full lg:w-[85%]" 
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CTA