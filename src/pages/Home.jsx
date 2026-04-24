import React from "react";
import CloudNetworkBackground from "../components/CloudNetworkBackground";
import ScrollAnimation from "../components/ScrollAnimation";
import { ContainerScroll } from "../components/ContainerScroll";
import AssetCard from "../components/cards/AssetCard";
import { MdCloudQueue, MdStorage, MdNetworkCheck } from "react-icons/md";
import { IoCodeSlashOutline } from "react-icons/io5";
import { SiWebauthn } from "react-icons/si";
import Pie from "../chart/Pie";
import Marquee from "react-fast-marquee";
import { toolitems } from "../data/Alldata";
import AOS from "aos";
import "aos/dist/aos.css";
import style from "../styles/home.module.css";
import About from "../components/About";
import { BarChart } from "../chart/BarChart";
import { GradientChart } from "../chart/GradientChart";
import { LineChart } from "../chart/LineChart";
import SoftwareSolution from "../components/SoftwareSolution";
import Newsletter from "../components/Newsletter";
import db from "../assets/images/cloud-dashboard.jpeg";
import hero from "../assets/images/bg.jpg";
import Switchbutton from "../components/SwitchButton";
import Cybersecurity from "../components/CyberSecurity";
import Testimonial from "../components/Testimonial";
import CTA from "../components/CTA";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import HeroInfraVisual from "../components/HeroInfraVisual";
import assetCompute from "../assets/images/asset_compute.png";
import assetStorage from "../assets/images/asset_storage.png";
import assetNetwork from "../assets/images/asset_network.png";
import assetAutoscaling from "../assets/images/CloudOptimization.png";
import assetHA from "../assets/images/HighAvailability.png";
import assetBackup from "../assets/images/Cloud security and data backup system.png";
import assetMonitoring from "../assets/images/Futuristic cloud management dashboard display.png";

function Home() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const totalServices = 3;
  const [activeCapIndex, setActiveCapIndex] = React.useState(0);
  const capAutoRotateInterval = 6000;

  const capabilities = [
    {
      title: "Enable",
      spanTitle: "Auto Scaling",
      para: "Automatically scale resources based on traffic demands, ensuring peak performance without over-provisioning.",
      img: assetAutoscaling,
      chart: <Pie />,
      accent: "#3B82F6"
    },
    {
      title: "Ensure",
      spanTitle: "High Availability",
      para: "Maximize uptime with distributed infrastructure that automatically routes traffic around failures.",
      img: assetHA,
      chart: <BarChart />,
      accent: "#10B981"
    },
    {
      title: "Automated",
      spanTitle: "Data Backup",
      para: "Secure your critical business data with automated, encrypted, and multi-region backup solutions.",
      img: assetBackup,
      chart: <GradientChart />,
      accent: "#F59E0B"
    },
    {
      title: "Real-time",
      spanTitle: "Monitoring",
      para: "Gain deep technical insights with advanced real-time monitoring and predictive performance analytics.",
      img: assetMonitoring,
      chart: <LineChart />,
      accent: "#8B5CF6"
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveCapIndex((prev) => (prev + 1) % capabilities.length);
    }, capAutoRotateInterval);
    return () => clearInterval(timer);
  }, [capabilities.length]);

  const autoRotateInterval = 6000;

  React.useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalServices);
    }, autoRotateInterval);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: "Cloud Compute",
      para: "Harness the power of resilient, scalable computing environments. Our next-gen instances provide the high-performance foundation required for complex workloads and rapid growth.",
      icon: <MdCloudQueue />,
      img: assetCompute,
    },
    {
      title: "Storage Solutions",
      para: "Secure, durable, and highly available storage architectures designed for massive data scale. Ensure your critical assets are protected with enterprise-grade encryption and redundancy.",
      icon: <MdStorage />,
      img: assetStorage,
    },
    {
      title: "Network Infrastructure",
      para: "Global-scale networking with ultra-low latency and unparalleled reliability. Connect your global deployments with a sophisticated, software-defined backbone built for the future.",
      icon: <MdNetworkCheck />,
      img: assetNetwork,
    }
  ];

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <main>
      <section className="bg-navy-main relative min-h-[700px] lg:h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <CloudNetworkBackground />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 pb-10 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 lg:mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.15]">
              Power Your <span className="text-blue-400">Infrastructure</span> <br className="hidden md:block" /> 
              with Next-Gen Cloud 
            </h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }} className="mt-4 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Deploy faster, scale smarter, and stay secure with enterprise-grade solutions built for the future of digital business.
            </motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 1, ease: "easeOut" }} className="w-full max-w-3xl mb-8 lg:mb-10 relative">
            <div className="absolute -inset-10 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
            <HeroInfraVisual />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="flex flex-col sm:flex-row gap-5 items-center justify-center">
            <Link to="contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="group relative px-10 py-4 bg-blue-primary text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Journey
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
                </span>
                <div className="absolute inset-0 border-2 border-white/0 rounded-full group-hover:border-white/20 transition-all duration-300" />
              </motion.button>
            </Link>
            <Link to="solutions">
              <motion.button whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.12)" }} whileTap={{ scale: 0.98 }} className="px-10 py-4 text-white font-bold rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:border-white/40 transition-all duration-300 group">
                 <span className="group-hover:text-blue-200 transition-colors">Explore Solutions</span>
              </motion.button>
            </Link>
          </motion.div>

          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 hidden lg:block">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-white rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-blue-light-1 py-12 lg:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(46,94,153,0.05),transparent)] pointer-events-none" />
        <div className="relative z-10 w-full px-6 sm:px-16 lg:px-32 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start text-navy-main">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8" data-aos="fade-right">
              Complete Control Over Your <span className="text-blue-primary">Cloud Infrastructure</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium" data-aos="fade-right" data-aos-delay="200">
              Monitor, manage, and scale your infrastructure in real-time with powerful and intuitive dashboards designed for total visibility and ease of use.
            </p>
            <div className="flex justify-center lg:justify-start" data-aos="fade-up">
              <Link to="contact" className="w-full sm:w-fit">
                <button className="bg-blue-primary text-white px-10 py-4 rounded-full w-full font-bold border border-blue-primary shadow-lg hover:shadow-2xl hover:bg-navy-main hover:text-white hover:border-navy-main transition-all duration-300 text-lg">
                  Launch Platform
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <div className="relative group cursor-zoom-in overflow-hidden rounded-xl border-2 border-white shadow-[0_30px_80px_rgba(8,112,184,0.15)]">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-primary/30 to-blue-soft/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-700 z-0" />
              <img src={db} className="relative w-full h-auto" alt="Infrastructure Dashboard" />
            </div>
          </div>
        </div>
      </section>

      {/* your digital — AUTO-ROTATING PREMIUM REDESIGN */}
      <section className="relative overflow-hidden py-12 md:py-16 px-4 sm:px-8 md:px-16" style={{ background: "linear-gradient(170deg, #F1F7FE 0%, #E7F0FA 100%)" }}>
        {/* Background decorative dark blue glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-navy-main/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-soft/5 rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.2]" style={{ backgroundImage: "radial-gradient(circle, #7BA4D0 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-10 px-4">
            <motion.div initial={{ opacity: 0, y: -16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-center mb-4">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-navy-main/10 bg-navy-main/5 text-navy-main text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
                Next-Gen Cloud Backbone
              </span>
            </motion.div>
            <h1 className="font-bold text-3xl sm:text-5xl text-navy-main mb-6">
              Your Digital Presence & <span className="text-blue-primary">Infrastructure</span> Is Your Asset
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">Scalable, Secure, and High-Performance IaaS Solutions.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              {services.map((item, idx) => (
                <div key={idx} onClick={() => setActiveIndex(idx)} className={`group cursor-pointer relative p-6 rounded-2xl border transition-all duration-500 ${activeIndex === idx ? "bg-white border-blue-primary/20 shadow-2xl shadow-blue-primary/20" : "border-transparent hover:bg-white/40"}`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${activeIndex === idx ? "bg-blue-primary text-white scale-110 shadow-lg shadow-blue-primary/40" : "bg-navy-main/5 text-navy-main"}`}>{item.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-xl font-bold transition-colors duration-500 ${activeIndex === idx ? "text-navy-main" : "text-navy-main/40"}`}>{item.title}</h3>
                      {activeIndex === idx && (
                        <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="text-gray-600 text-base leading-relaxed pr-4">{item.para}</motion.p>
                      )}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-navy-main/5 rounded-full overflow-hidden">
                    {activeIndex === idx && (
                      <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: autoRotateInterval / 1000, ease: "linear" }} className="h-full bg-blue-primary" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-7 relative h-[300px] sm:h-[350px]">
              <AnimatePresence mode="wait">
                <motion.div key={activeIndex} initial={{ opacity: 0, scale: 0.95, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} exit={{ opacity: 0, scale: 1.05, x: -20 }} transition={{ duration: 0.8 }} className="absolute inset-0">
                  <div className="relative h-full rounded-[2.5rem] overflow-hidden border border-navy-main/10 shadow-2xl shadow-navy-main/10 group">
                    <img src={services[activeIndex].img} alt={services[activeIndex].title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2000ms]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-main/60 via-transparent to-transparent opacity-40" />
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-6 left-6 p-4 rounded-xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-primary/10 flex items-center justify-center text-blue-primary">{services[activeIndex].icon}</div>
                        <div>
                          <p className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em]">Status</p>
                          <p className="text-navy-main font-bold text-sm">Peak Efficiency</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Powered By Section */}
      <section className="py-12 bg-[#0a1a30] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #7BA4D0 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center overflow-hidden">
            <p className="text-white/90 text-sm font-bold uppercase tracking-[0.5em] mb-8">Infrastructure Powered By</p>
            <div className="w-full">
              <Marquee gradient={true} gradientColor={[10, 26, 48]} gradientWidth={100} speed={40}>
                <div className="flex gap-16 mx-10">
                  {toolitems.map((item) => (
                    <div key={item.name} className="flex items-center gap-4 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group cursor-pointer">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center p-3 group-hover:bg-white/40 transition-all duration-300 shadow-xl shadow-black/20 backdrop-blur-sm">
                        <img src={item.img} alt={item.name} className="w-full h-full object-contain filter drop-shadow-sm" />
                      </div>
                      <span className="text-base font-bold text-white group-hover:text-blue-300 transition-colors duration-300 whitespace-nowrap">{item.name}</span>
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 bg-[#F1F7FE]">
        {/* Background Decorative Mesh */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-primary/5 rounded-full blur-[150px] -z-0" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy-main/5 rounded-full blur-[120px] -z-0" />
        <div className="container mx-auto px-6 relative z-20">
          <div className="text-center mb-16 max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-navy-main text-2xl sm:text-4xl lg:text-5xl font-bold mb-6 whitespace-nowrap"
              >
                Advanced Infrastructure Built for the <span className="text-blue-primary">Infinite Cloud</span>
              </motion.h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                Built for Performance, Security & Scale. Our enterprise-grade infrastructure 
                solutions empower you with total control and reliability.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32 min-h-[500px]">
             {/* Left Column: Text Stack */}
             <div className="w-full lg:w-5/12 relative h-[400px] perspective-1000">
                <AnimatePresence>
                  {capabilities.map((cap, idx) => {
                    // Logic to determine position in the stack relative to activeCapIndex
                    const position = (idx - activeCapIndex + capabilities.length) % capabilities.length;
                    
                    if (position > 2) return null; // Show only top 3 cards in stack

                    return (
                      <motion.div
                        key={idx}
                        style={{ zIndex: 10 - position }}
                        initial={{ opacity: 0, x: -50, scale: 0.8 }}
                        animate={{
                          opacity: 1 - position * 0.3,
                          x: position * 40,
                          y: position * 20,
                          scale: 1 - position * 0.05,
                          filter: `blur(${position * 2}px)`
                        }}
                        exit={{ opacity: 0, x: 200, scale: 0.8, rotate: 10 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="absolute inset-0 cursor-pointer"
                        onClick={() => setActiveCapIndex(idx)}
                      >
                        <div className={`h-full p-10 rounded-[2.5rem] border shadow-2xl flex flex-col justify-center transition-all duration-500 ${position === 0 ? "bg-white border-blue-primary/30" : "bg-white/60 backdrop-blur-2xl border-navy-main/10"}`}>
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg`} style={{ backgroundColor: `${cap.accent}20`, color: cap.accent }}>
                             {position === 0 && <motion.div layoutId="accent-blob" className="absolute w-20 h-20 bg-blue-primary/10 rounded-full blur-2xl" />}
                             <div className="relative z-10 text-2xl">
                               {idx === 0 && <MdCloudQueue />}
                               {idx === 1 && <MdNetworkCheck />}
                               {idx === 2 && <MdStorage />}
                               {idx === 3 && <MdStorage />} 
                             </div>
                          </div>
                          <h3 className="text-3xl font-bold text-navy-main mb-6">
                            {cap.title} <span style={{ color: cap.accent }}>{cap.spanTitle}</span>
                          </h3>
                          <p className="text-gray-600 text-lg leading-relaxed">
                            {cap.para}
                          </p>
                          
                          {/* Progress Line for the auto-rotation */}
                          {position === 0 && (
                            <div className="mt-10 h-1 bg-navy-main/5 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                key={activeCapIndex}
                                transition={{ duration: capAutoRotateInterval / 1000, ease: "linear" }}
                                className="h-full"
                                style={{ backgroundColor: cap.accent }}
                              />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
             </div>

             {/* Right Column: Visual Stack */}
             <div className="w-full lg:w-6/12 relative h-[450px]">
                <AnimatePresence>
                  {capabilities.map((cap, idx) => {
                    const position = (idx - activeCapIndex + capabilities.length) % capabilities.length;
                    
                    if (position > 2) return null;

                    return (
                      <motion.div
                        key={idx}
                        style={{ zIndex: 10 - position }}
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{
                          opacity: 1 - position * 0.4,
                          x: -position * 60,
                          y: -position * 30,
                          scale: 1 - position * 0.1,
                          rotate: position * -2
                        }}
                        exit={{ opacity: 0, x: -200, scale: 1.1, rotate: -10 }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="absolute inset-0"
                      >
                        <div className={`relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border transition-all duration-500 flex items-center justify-center p-12 ${position === 0 ? "bg-white border-white" : "bg-white/40 backdrop-blur-2xl border-white/40"}`}>
                          <div className="absolute inset-0 bg-gradient-to-tr from-navy-main/5 via-transparent to-transparent opacity-30" />
                          
                          {/* Main Chart Visual */}
                          <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="w-full h-full flex items-center justify-center"
                          >
                             <div className="w-full h-full flex items-center justify-center">
                               {cap.chart}
                             </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
             </div>
          </div>
        </div>
      </section>

      <SoftwareSolution />
      <Cybersecurity />
      <About />
      <section className="px-6 sm:px-10 lg:px-32 py-16"><CTA /></section>
      <Switchbutton />
      <Testimonial />
      <Newsletter />
    </main>
  );
}

export default Home;