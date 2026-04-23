import React, { useState, useEffect } from 'react';
import {
  Menu, X, ChevronDown,
  Server, HardDrive, Globe2,
  ScanSearch, KeyRound, FileCheck2,
  Cpu, Cloud, Layers3,
  ClipboardCheck, BarChart2, Wrench,
  LayoutDashboard, Webhook, GitBranch
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import finalLogo from '../assets/images/Brilliant_Technologies_logo_design__2_-removebg-preview.png'

const menuData = [
  {
    title: "Cloud Infrastructure",
    path: "/cloud-infrastructure",
    subItems: [
      { icon: <Server size={18}/>, name: "Scalable Compute", desc: "Elastic virtual instances for any workload", path: "/cloud-infrastructure" },
      { icon: <HardDrive size={18}/>, name: "Object Storage", desc: "Highly available data storage solutions", path: "/cloud-infrastructure" },
      { icon: <Globe2 size={18}/>, name: "Global Networking", desc: "Low-latency private connectivity worldwide", path: "/cloud-infrastructure" }
    ]
  },
  {
    title: "Cybersecurity",
    path: "/cybersecurity",
    subItems: [
      { icon: <ScanSearch size={18}/>, name: "Threat Detection", desc: "AI-powered real-time security monitoring", path: "/cybersecurity" },
      { icon: <KeyRound size={18}/>, name: "Zero-Trust Access", desc: "Identity-centric security architecture", path: "/cybersecurity" },
      { icon: <FileCheck2 size={18}/>, name: "Compliance Shield", desc: "Enterprise-grade regulation adherence", path: "/cybersecurity" }
    ]
  },
  {
    title: "IaaS Solutions",
    path: "/solutions",
    subItems: [
      { icon: <Cpu size={18}/>, name: "Bare Metal", desc: "Dedicated high-performance hardware", path: "/solutions" },
      { icon: <Cloud size={18}/>, name: "Hybrid Cloud", desc: "Seamless cross-environment integration", path: "/solutions" },
      { icon: <Layers3 size={18}/>, name: "GPU Clusters", desc: "High-density compute for AI workloads", path: "/solutions" }
    ]
  },
  {
    title: "ORM",
    path: "/orm",
    subItems: [
      { icon: <ClipboardCheck size={18}/>, name: "Operational Readiness", desc: "Pre-deployment audit and validation", path: "/orm" },
      { icon: <BarChart2 size={18}/>, name: "Reliability Metrics", desc: "Real-time system health visualization", path: "/orm" },
      { icon: <Wrench size={18}/>, name: "Stability Protocol", desc: "Automated fault-tolerance systems", path: "/orm" }
    ]
  },
  {
    title: "Software Development",
    path: "/software-development",
    subItems: [
      { icon: <LayoutDashboard size={18}/>, name: "App Architecture", desc: "Scalable enterprise software design", path: "/software-development" },
      { icon: <Webhook size={18}/>, name: "API Engineering", desc: "Robust and secure interface services", path: "/software-development" },
      { icon: <GitBranch size={18}/>, name: "DevOps Automation", desc: "Integrated CI/CD and orchestration", path: "/software-development" }
    ]
  }
];

const dropdownVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.22, ease: [0.23, 1, 0.32, 1] }
  },
  exit: {
    opacity: 0, y: 8, scale: 0.96,
    transition: { duration: 0.15, ease: "easeIn" }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -6 },
  visible: i => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.07, duration: 0.25, ease: "easeOut" }
  })
};

function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full py-2 px-6 lg:py-2 lg:px-32 shadow-lg z-[9999] bg-[#0D2440] border-b border-[#FFFFFF0D]">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="h-10 md:h-12 w-32 md:w-48 flex items-center relative">
          <Link to="/" className="absolute left-[-32px] md:left-[-56px] top-1/2 -translate-y-1/2">
            <img src={finalLogo} alt="Brilliant Technologies" className="h-[110px] md:h-[156px] w-auto object-contain origin-left" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-1 text-base font-medium text-white h-16 items-center">
          {menuData.map((item, idx) => (
            <li
              key={idx}
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveDropdown(idx)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.path}
                className="px-4 py-2 rounded-lg hover:bg-white/5 transition-all flex items-center gap-1"
              >
                {item.title}
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === idx ? 'rotate-180 text-blue-400' : 'text-white/50'}`} />
              </Link>

              <AnimatePresence>
                {activeDropdown === idx && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-[calc(100%+4px)] left-1/2 -translate-x-1/2 w-[380px] rounded-2xl overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(20,60,120,0.98) 0%, rgba(10,40,90,0.98) 60%, rgba(5,25,60,0.98) 100%)',
                      border: '1px solid rgba(99,179,237,0.25)',
                      boxShadow: '0 8px 40px rgba(59,130,246,0.35), 0 0 0 1px rgba(99,179,237,0.1), inset 0 1px 0 rgba(255,255,255,0.08)'
                    }}
                  >
                    {/* Top glow bar */}
                    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60" />

                    <div className="p-5 grid gap-2">
                      {item.subItems.map((sub, i) => (
                        <motion.div
                          key={i}
                          custom={i}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <Link
                            to={sub.path}
                            className="flex items-center gap-4 p-3 rounded-xl group transition-all duration-200"
                            style={{ background: 'transparent' }}
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(59,130,246,0.15)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                          >
                            {/* Icon with muted theme-color background */}
                            <div
                              className="flex-shrink-0 p-2.5 rounded-xl transition-all duration-200 group-hover:scale-110"
                              style={{
                                background: 'rgba(237, 244, 252, 0.15)',
                                color: '#60A5FA',
                                boxShadow: '0 0 10px rgba(96,165,250,0.1)',
                                border: '1px solid rgba(237,244,252,0.1)'
                              }}
                            >
                              {sub.icon}
                            </div>


                            <div>
                              <div className="font-semibold text-white text-sm leading-tight mb-0.5 group-hover:text-blue-200 transition-colors">{sub.name}</div>
                              <div className="text-blue-300/60 text-xs leading-relaxed">{sub.desc}</div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    {/* Bottom glow bar */}
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link to="/contact" className="hidden lg:block">
          <button className="bg-blue-primary text-white font-bold py-2.5 px-8 rounded-full border border-blue-primary/50 shadow-lg shadow-blue-primary/10 hover:bg-white hover:text-blue-primary hover:border-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            Contact Us
          </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden rounded-lg py-4 mt-2 space-y-1 text-base text-left px-4 text-white overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(20,60,120,0.98), rgba(5,25,60,0.98))',
              border: '1px solid rgba(99,179,237,0.2)',
              boxShadow: '0 4px 30px rgba(59,130,246,0.2)'
            }}
          >
            {menuData.map((item, idx) => (
              <li key={idx} className="border-b border-white/5 last:border-0">
                <div
                  className="flex justify-between items-center py-3 px-2 cursor-pointer hover:bg-blue-500/10 rounded-lg transition-all"
                  onClick={() => setMobileExpanded(mobileExpanded === idx ? null : idx)}
                >
                  <Link to={item.path} className="font-semibold" onClick={e => e.stopPropagation()}>{item.title}</Link>
                  <ChevronDown size={16} className={`transition-transform text-blue-400 ${mobileExpanded === idx ? 'rotate-180' : ''}`} />
                </div>
                <AnimatePresence>
                  {mobileExpanded === idx && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-3 pb-3 space-y-2 overflow-hidden"
                    >
                      {item.subItems.map((sub, i) => (
                        <li key={i}>
                          <Link
                            to={sub.path}
                            className="flex items-center gap-3 p-2 rounded-lg text-blue-200 hover:text-white hover:bg-blue-500/10 transition-all text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="text-blue-400">{sub.icon}</span>
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
            <li className="pt-3">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <button className="bg-blue-primary text-white font-bold py-3 px-6 rounded-full w-full border border-blue-primary/50 shadow-lg hover:bg-white hover:text-blue-primary transition-all duration-300">
                  Contact Us
                </button>
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default MegaMenu;