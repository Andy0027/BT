import React from 'react';
import { Link } from 'react-router-dom';
import { resourcesGrid } from '../data/Alldata';
import ResourcesFAQ from '../components/ResourcesFAQ';
import bigCardImg from '../assets/images/software_development_team.png';

function Resources() {
  return (
    <>
      <div className="h-auto flex flex-col px-6 sm:px-6 md:px-16 lg:px-32 pt-[7%] py-12 bg-[#E7F0FA] text-[#0D2440] relative overflow-hidden">
        
        {/* Abstract Background Blur */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="absolute -top-24 right-0 w-[600px] h-[600px] bg-blue-primary/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 -left-48 w-[500px] h-[500px] bg-blue-soft/20 rounded-full blur-[100px]" />
        </div>

        {/* Hero Section */}
        <div className="w-full py-16 flex flex-col items-center text-center relative z-40" data-aos="fade-up" data-aos-duration="800">
           <span className="px-4 py-2 bg-blue-primary/10 text-blue-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-blue-primary/20">
              Technical Knowledge Center
           </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#0D2440] leading-[1.1] max-w-4xl mx-auto">
               Insights That Power Smarter <br className="hidden md:block" />
               <span className="text-blue-primary">Technology Decisions</span>
            </h1>
           <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-medium max-w-3xl mt-8 leading-relaxed">
              Explore our latest thinking on cloud infrastructure, cybersecurity, and scalable systems — 
              designed to help businesses build, optimize, and secure their digital future.
           </p>
        </div>

        {/* Section 1 - Featured Insights Grid */}
        <div className="relative z-40 mt-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourcesGrid.map((item, i) => (
              <div 
                key={i} 
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col"
                data-aos="fade-up" 
                data-aos-delay={i * 100}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2440]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-blue-primary" />
                    <span className="text-xs font-bold text-blue-primary uppercase tracking-tighter">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-medium text-[#0D2440] mb-4 group-hover:text-blue-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6 line-clamp-3">
                    {item.para}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2 - Knowledge Strip */}
        <section className="relative z-40 py-20 lg:py-32">
          <div className="bg-[#0D2440] rounded-[2.5rem] p-10 lg:p-20 relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
             <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                <div className="w-full lg:w-[40%] text-center lg:text-left">
                   <h2 className="text-base font-medium text-blue-soft uppercase tracking-widest mb-4">Domain Authority</h2>
                   <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight">Our Expertise <br className="hidden md:block" /> Covers</h2>
                </div>
                <div className="w-full lg:w-[60%]">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                      {[
                        "Cloud Infrastructure & Architecture",
                        "IaaS & Scalable Systems",
                        "Cybersecurity & Data Protection",
                        "DevOps & Automation",
                        "Performance Optimization",
                        "Disaster Recovery & Reliability"
                      ].map((expertise, idx) => (
                        <div key={idx} className="flex items-center gap-4 group" data-aos="fade-left" data-aos-delay={idx * 100}>
                           <div className="w-2 h-2 rounded-full bg-blue-soft group-hover:scale-150 transition-transform" />
                           <span className="text-lg text-gray-300 font-medium whitespace-nowrap">{expertise}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Section 3 - Featured Insight (Big Card Style) */}
        <section className="relative z-40 py-20">
           <div className="flex flex-col lg:flex-row gap-12 items-center bg-white rounded-[2rem] p-8 lg:p-16 shadow-xl border border-gray-50">
              <div className="w-full lg:w-1/2 relative group" data-aos="zoom-in">
                 <div className="absolute -inset-2 bg-blue-primary/20 rounded-[1.5rem] blur-xl group-hover:bg-blue-primary/30 transition-all duration-700 pointer-events-none" />
                 <img src={bigCardImg} alt="Future of Cloud" className="relative rounded-2xl w-full h-[400px] object-cover shadow-lg" />
              </div>
              <div className="w-full lg:w-1/2" data-aos="fade-left">
                 <span className="px-4 py-1.5 bg-blue-primary/10 text-blue-primary rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 inline-block">
                    Spotlight Insight
                 </span>
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#0D2440] leading-tight mb-8">
                    The Future of Cloud is <br />
                    <span className="text-blue-primary">Intelligent, Secure, and Scalable</span>
                 </h2>
                 <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed mb-10 pr-0 lg:pr-12">
                   Modern businesses require infrastructure that not only performs but adapts. 
                   From intelligent scaling to real-time threat detection, the next generation 
                   of cloud solutions is built to be resilient, efficient, and secure by design.
                 </p>
                 <Link to="/contact" className="px-10 py-5 bg-[#0D2440] text-white rounded-full font-bold border border-white/10 shadow-xl hover:bg-white hover:text-blue-primary hover:border-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inline-block text-center">
                    Book a Demo
                 </Link>
              </div>
           </div>
        </section>

        {/* Section 4 - Quick Insights (Short Lines) */}
        <section className="relative z-40 py-20 lg:py-32">
            <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl font-medium text-[#0D2440]">Quick Insights</h2>
              <div className="w-24 h-1.5 bg-blue-primary mx-auto mt-6 rounded-full" />
           </div>
           <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                "Auto-scaling reduces downtime during peak demand",
                "Real-time monitoring prevents performance bottlenecks",
                "Zero-trust security minimizes risk exposure",
                "Cloud optimization directly impacts operational costs",
                "Backup strategies define business continuity"
              ].map((insight, idx) => (
                <div key={idx} className="flex items-start gap-6 group" data-aos="fade-up" data-aos-delay={idx * 100}>
                   <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-blue-primary font-bold transition-all duration-300 group-hover:bg-blue-primary group-hover:text-white group-hover:-rotate-6">
                      0{idx + 1}
                   </div>
                   <p className="text-xl text-[#0D2440] font-medium leading-tight group-hover:text-blue-primary transition-colors pt-2">
                      {insight}
                   </p>
                </div>
              ))}
           </div>
        </section>

        {/* Section 5 - FAQ */}
        <ResourcesFAQ />

      </div>
    </>
  );
}

export default Resources;
