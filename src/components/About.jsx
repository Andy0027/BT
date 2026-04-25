import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import computer from '../assets/images/computer.png';
import cyber from '../assets/images/cyber-security.png';
import orm from '../assets/images/orm.png';
import orm1 from '../assets/images/orm1.png';
import computer1 from '../assets/images/computer1.png';
import security from '../assets/images/security.png';

const About = () => {
  const [selected, setSelected] = useState(1);

  const services = [
    {
      id: 1,
      title: "Cloud Infrastructure",
      heading: "Performance, Scalability, and Global Reach",
      description:
        "Deploy and manage your cloud infrastructure with enterprise-grade reliability and seamless scaling.",
      img1: orm1,
      img: orm,
    },
    {
      id: 2,
      title: "Security Solutions",
      heading: "Identity, Encryption, and Advanced Protection",
      description:
        "Safeguard your digital assets with advanced security protocols and real-time threat detection.",
      img: security,
      img1: cyber,
    },
    {
      id: 3,
      title: "DevOps Services",
      heading: "CI/CD, Automation, and System Optimization",
      description:
        "Accelerate your development lifecycle with automated deployments and expert system optimization.",
      img: computer1,
      img1: computer,
    },
  ];

  return (
    <div className="bg-transparent py-16 max-w-[1400px] mx-auto px-6 lg:px-8 w-full">
      <div className="flex flex-col gap-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-6 text-white">
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl text-blue-400 py-5 font-semibold" data-aos="fade-up" data-aos-duration="1300">
              Future-Ready Technology Architecture
            </h2>
            <h3
              className="text-lg sm:text-2xl pt-4 text-white"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Your Dedicated Cloud Partner.
            </h3>
          </div>
          <div className="w-full lg:w-1/2">
            <p
              className="text-sm sm:text-base text-slate-400 leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              We work alongside your team to ensure your infrastructure is 
              optimized, secure, and future-ready. Brilliant Technologies 
              provides the expertise and enterprise-grade tools to drive 
              your digital transformation with confidence.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="flex flex-col lg:flex-row gap-10"   data-aos="fade-up"
              data-aos-duration="1300">
          {/* Service List */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-4">
              {services.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelected(item.id)}
                  className={`border-l-4 p-4 flex items-center gap-4 transition-all duration-300 rounded-md w-full text-left ${
                    selected === item.id
                      ? "border-blue-400 bg-blue-400/10"
                      : "border-transparent"
                  } hover:bg-blue-400/5`}
                >
                  <div className="w-12 h-12 p-2.5 rounded-full bg-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    {item.id === 1 && (
                      <svg className="w-full h-full text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    )}
                    {item.id === 2 && (
                      <svg className="w-full h-full text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                    {item.id === 3 && (
                      <svg className="w-full h-full text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </div>
                  <h2
                    className={`text-base sm:text-lg ${
                      selected === item.id ? "text-white font-bold" : "text-white/40"
                    }`}
                  >
                    {item.title}
                  </h2>
                </button>
              ))}
            </div>
          </div>

          {/* Animated Service Details */}
          <div className="w-full lg:w-1/2">
            <div className="relative min-h-[220px] sm:min-h-[250px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                  className="absolute w-full"
                >
                  <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                    {services.find((s) => s.id === selected)?.heading}
                  </h2>
                  <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
                    {services.find((s) => s.id === selected)?.description}
                  </p>
                  <div className="flex gap-6 mt-8">
                    {selected === 1 && (
                      <>
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-400 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-400 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-400 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </>
                    )}
                    {selected === 2 && (
                      <>
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-400 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-400 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                        </svg>
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-400 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </>
                    )}
                    {selected === 3 && (
                      <>
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-400 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-400 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-400 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;