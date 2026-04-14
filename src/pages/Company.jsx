import React, { useState } from "react";
import aboutimg from "../assets/images/sleek-product.jpeg";
import SquareCard from "../components/cards/SquareCard";
import Newsletter from "../components/Newsletter";
import companybannner from "../assets/images/companybanner.png";
import CompanyFAQ from "../components/CompanyFAQ ";
import { CiDatabase } from "react-icons/ci";
import { FaRegFileCode } from "react-icons/fa";
import { AiOutlineNodeCollapse } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { CheckCircle, Target, Eye, Shield } from "lucide-react";

const Company = () => {
  const [selected, setSelected] = useState(1);

  const aboutdata = [
    {
      id: 1,
      title: "Mission",
      icon: <Target className="w-4 h-4" />,
      heading: "Empowering Growth with Scalable Technology",
      paragraph:
        "To empower businesses with scalable, secure, and future-ready technology solutions that drive real-world impact.",
    },
    {
      id: 2,
      title: "Vision",
      icon: <Eye className="w-4 h-4" />,
      heading: "A Global Leader in Digital Excellence",
      paragraph:
        "To become a global leader in digital transformation, known for innovation, reliability, and excellence.",
    },
    {
      id: 3,
      title: "Values",
      icon: <Shield className="w-4 h-4" />,
      heading: "Our Core Principles",
      paragraph: (
        <ul className="space-y-3 mt-4">
          {[
            "Customer-first mindset",
            "Innovation with purpose",
            "Transparency & trust",
            "Continuous improvement"
          ].map((val, i) => (
            <li key={i} className="flex items-center gap-3 text-[#0D2440] font-bold text-sm">
              <div className="p-1 bg-blue-primary/10 rounded-full text-blue-primary">
                <CheckCircle size={14} />
              </div>
              {val}
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <>
      <div className="h-auto flex flex-col px-6 sm:px-6 md:px-16 lg:px-32 pt-32 py-12 bg-[#E7F0FA] text-[#0D2440] relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="w-[1000px] h-[800px] bg-gradient-radial from-blue-primary/10 via-[#E7F0FA] to-[#E7F0FA] rounded-full blur-3xl opacity-70 animate-pulse transition-all duration-1000" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-soft/10 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-primary/5 rounded-full blur-[120px] -ml-40" />
        </div>

        <div className="flex flex-col items-center h-full relative z-40 pt-10 text-center">
          <h1
            className="text-3xl sm:text-5xl font-semibold text-[#0D2440] max-w-4xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Get to Know <span className="text-blue-primary font-black underline decoration-blue-primary/30 decoration-8 underline-offset-8">Brilliant Technologies</span>
          </h1>
          <p
            className="text-base sm:text-lg text-gray-600 mt-6 max-w-3xl leading-relaxed font-medium"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Driven by innovation and built on trust, we help businesses navigate the digital future with confidence, 
            clarity, and cutting-edge technology.
          </p>

          <div 
            className="mt-16 w-full rounded-[2.5rem] bg-white/70 backdrop-blur-3xl shadow-[0_32px_64px_-16px_rgba(46,94,153,0.1)] border border-white/80 overflow-hidden text-left relative group" 
            data-aos="fade-up" 
            data-aos-duration="800"
          >
            {/* Inner Decorative Glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-primary/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-primary/10 transition-colors duration-700" />
            
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 p-8 sm:p-12 lg:p-20 relative z-10">
              <div className="w-full lg:w-1/2">

                
                <h2 className="text-3xl sm:text-5xl font-semibold leading-[1.15] mb-8">
                  <span className="text-[#0D2440]">Built on </span>
                  <span className="text-blue-primary">Innovation</span><br />
                  <span className="text-[#0D2440]">Focused on </span>
                  <span className="text-blue-soft">People</span><br />
                  <span className="text-[#0D2440]">Designed for </span>
                  <span className="text-blue-primary/80">Future</span>
                </h2>
                
                <h3 className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium border-l-4 border-blue-primary/10 pl-6 py-2">
                  At Brilliant Technologies, we believe technology should simplify complexity, empower growth, and create meaningful impact. 
                  Our approach blends deep technical expertise with a human-first mindset.
                </h3>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="mx-auto">
                  <div className="relative flex flex-row justify-between bg-blue-subtle/50 p-1.5 rounded-2xl overflow-hidden border border-white/50 shadow-inner">
                    {aboutdata.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setSelected(item.id)}
                        className={`relative z-10 flex-1 py-3.5 px-3 sm:px-6 rounded-xl font-bold transition-all duration-500 flex items-center justify-center gap-2 ${
                          selected === item.id 
                            ? "text-[#0D2440]" 
                            : "text-[#0D2440]/40 hover:text-[#0D2440]/70"
                        }`}
                      >
                        {item.icon}
                        <span className="text-sm uppercase tracking-wider">{item.title}</span>
                      </button>
                    ))}
                    {/* Sliding Background Pill */}
                    <div 
                      className="absolute top-1 bottom-1 left-1.5 bg-white rounded-[0.8rem] shadow-md transition-all duration-500 ease-out z-0 border border-blue-primary/5"
                      style={{ 
                        width: 'calc(33.33% - 4px)',
                        transform: `translateX(${(selected - 1) * 100}%)`
                      }}
                    />
                  </div>
                  
                  <div className="mt-10 min-h-[200px]" key={selected} data-aos="fade-in">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0D2440] mb-5 tracking-tight">
                      {aboutdata.find((s) => s.id === selected)?.heading}
                    </h2>
                    <div className="text-base text-gray-600 leading-relaxed font-medium">
                      {aboutdata.find((s) => s.id === selected)?.paragraph}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Banner Image */}
          <div className="w-full px-0 sm:px-0 mt-14 h-[40vh] sm:h-[60vh] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={companybannner}
              alt="banner"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Counts */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 md:p-16 shadow-[0_32px_64px_-16px_rgba(46,94,153,0.08)] w-full mt-24 border border-white relative overflow-hidden group" data-aos="fade-up" data-aos-duration="800">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <ul className="flex flex-col sm:flex-row justify-between text-center gap-12 sm:gap-6 relative z-10">
              {[
                { count: "5+", label: "Years of Excellence" },
                { count: "100%", label: "Client-Centric Approach" },
                { count: "1000+", label: "Businesses Empowered" },
                { count: "10x", label: "Scalable Solutions" },
              ].map((item, i) => (
                <li key={i} className="flex flex-col items-center flex-1">
                  <span className="text-4xl md:text-6xl font-black text-[#0D2440] mb-3 tracking-tighter decoration-blue-primary decoration-4 underline-offset-8">
                    {item.count}
                  </span>
                  <span className="text-blue-primary font-black uppercase tracking-[0.2em] text-[10px] md:text-xs px-3 py-1 bg-blue-primary/5 rounded-full border border-blue-primary/10">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:mt-32 mt-20 flex flex-col-reverse lg:flex-row gap-12 relative z-40 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[#0D2440] font-bold uppercase tracking-widest text-sm" data-aos="fade-up" data-aos-duration="800">
              WHAT WE DO
            </h2>
            <h2 className="text-3xl sm:text-4xl py-6 font-semibold text-[#0D2440]" data-aos="fade-up" data-aos-duration="900">
              Enabling Growth at Every Stage
            </h2>
            <h3 className="text-gray-600 text-base leading-relaxed font-medium mb-10" data-aos="fade-up" data-aos-duration="1000">
              From strategy to execution, we partner with businesses to build, scale, and secure their digital presence.
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <SquareCard
                title="Strategic Planning"
                para="Align technology with your long-term business vision."
                icon={<IoSettingsOutline />}
                theme="light"
                data-aos="fade-up"
                data-aos-duration="1100"
              />
              <SquareCard
                title="Seamless Collaboration"
                para="Work smarter with integrated tools and workflows."
                icon={<AiOutlineNodeCollapse />}
                theme="light"
                data-aos="fade-up"
                data-aos-duration="1200"
              />
              <SquareCard
                title="Data Protection"
                para="Secure your systems with enterprise-grade safeguards."
                icon={<CiDatabase />}
                theme="light"
                data-aos="fade-up"
                data-aos-duration="1300"
              />
              <SquareCard
                title="Continuous Support"
                para="Reliable assistance to keep your operations running smoothly."
                icon={<FaRegFileCode />}
                theme="light"
                data-aos="fade-up"
                data-aos-duration="1400"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2" data-aos="zoom-in" data-aos-duration="1000">
            <div className="relative">
               <div className="absolute -inset-4 bg-blue-primary/10 rounded-3xl blur-2xl pointer-events-none" />
               <img
                src={aboutimg}
                alt="about"
                className="relative z-10 object-cover rounded-2xl w-full shadow-2xl"
              />
            </div>
          </div>
        </div>


        {/* Why Choose Us Strip */}
        <section className="relative z-40 mt-28 lg:mt-40">
          <div className="bg-[#0D2440] rounded-[2rem] p-10 md:p-16 shadow-2xl overflow-hidden relative border border-white/5">
            {/* Unique Decorative Element */}
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#79A7D3]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-blue-soft font-bold uppercase tracking-[0.3em] text-sm mb-4" data-aos="fade-up">
                  TRUST & EXPERTISE
                </h2>
                <h2 className="text-3xl md:text-5xl font-bold text-white" data-aos="fade-up" data-aos-delay="100">
                  Why Businesses Trust Us
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
                {[
                  {
                    title: "End-to-end expertise",
                    desc: "Comprehensive technology leadership from concept to launch.",
                    icon: "01"
                  },
                  {
                    title: "Scalable Solutions",
                    desc: "Future-ready systems built to grow with your ambitions.",
                    icon: "02"
                  },
                  {
                    title: "Dedicated Support",
                    desc: "Personalized consultation and reliable 24/7 assistance.",
                    icon: "03"
                  },
                  {
                    title: "Proven Track Record",
                    desc: "Delivering excellence across diverse global industries.",
                    icon: "04"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="group" data-aos="fade-up" data-aos-delay={idx * 150}>
                    <div className="text-3xl font-extrabold text-blue-soft mb-3 tracking-tighter transition-opacity">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 relative z-10 transition-colors duration-300 group-hover:text-blue-soft">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed relative z-10">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="lg:mt-20">
          <CompanyFAQ />
        </section>
      </div>
      {/* Newsletter Section */}
      <section>
          <Newsletter />
        </section>
    </>
  );
};

export default Company;