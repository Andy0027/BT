import React from 'react';
import { MdOutlinePrivacyTip, MdOutlineSettingsInputComponent } from 'react-icons/md';
import { FaChartLine, FaRegHandshake } from 'react-icons/fa';
import { SiTicktick } from 'react-icons/si';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import partnerImg from '../assets/images/partnerImg.jpg';
import SolutionsCard from '../components/cards/SolutionsCard';
import { Link } from 'react-router-dom';
import PartnerFAQ from '../components/PartnerFAQ';

function Partner() {
  return (
    <>
      <div className="h-auto flex flex-col px-6 sm:px-6 md:px-16 lg:px-32 pt-32 py-12 bg-[#E7F0FA] text-[#0D2440] relative">
        
        {/* Decorative Background */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="w-[1000px] h-[800px] bg-gradient-radial from-blue-primary/20 via-[#E7F0FA] to-[#E7F0FA] rounded-full blur-3xl opacity-90" />
        </div>

        {/* Hero Section */}
        <div className="w-full py-16 flex flex-col lg:flex-row gap-12 items-center relative z-40" data-aos="fade-up" data-aos-duration="600">
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl font-semibold text-[#0D2440] leading-tight">
               Stronger Partnerships.<br />
               Smarter Growth.<br />
               Real Impact.
            </h1>
            <h3 className="text-base sm:text-lg lg:pr-16 pt-8 text-gray-600 font-medium leading-relaxed">
              <span className="block text-[#0D2440] font-bold mb-2">Grow Together with Brilliant Technologies.</span>
              Build powerful partnerships that unlock new opportunities, accelerate innovation, and drive mutual success 
              in a rapidly evolving digital landscape.
            </h3>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
               <Link to="/become-a-partner" className="px-8 py-4 bg-blue-primary text-white rounded-full font-bold border border-blue-primary/50 shadow-lg shadow-blue-primary/20 hover:shadow-blue-primary/40 hover:-translate-y-1 transition-all duration-300">
                  Become a Partner
               </Link>
                <Link to="/contact" className="px-8 py-4 border-2 border-blue-primary text-blue-primary rounded-full font-bold hover:bg-blue-primary hover:text-white hover:shadow-lg hover:shadow-blue-primary/20 transition-all duration-300 text-center">
                   Book a Demo
                </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative z-50 group" data-aos="zoom-in" data-aos-duration="1000">
             <div className="absolute -inset-4 bg-blue-primary/10 rounded-[2rem] blur-2xl pointer-events-none group-hover:bg-blue-primary/20 transition-all duration-500" />
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-white p-2">
                <img src={partnerImg} alt="Partner" className="rounded-xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" />
             </div>
          </div>
        </div>

        {/* Metrics Strip */}
        <div className="bg-white rounded-2xl p-8 md:p-14 shadow-xl w-full mt-10 border border-gray-50 relative z-40" data-aos="fade-up" data-aos-duration="800">
          <ul className="flex flex-col sm:flex-row justify-between text-center gap-10 sm:gap-4 lg:gap-0">
            {[
              { count: "50+", label: "Active Partners" },
              { count: "1000+", label: "Projects Delivered" },
              { count: "Global", label: "Partner Network" },
              { count: "99.9%", label: "Reliability Commitment" },
            ].map((item, i) => (
              <li key={i} className="flex flex-col items-center flex-1 lg:border-r border-gray-100 last:border-r-0 px-4">
                <span className="text-2xl md:text-4xl font-semibold text-blue-primary mb-2">{item.count}</span>
                <span className="text-gray-500 font-semibold uppercase tracking-wider text-[10px] md:text-xs">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Partnership Cards Section */}
        <div className="relative z-40 mt-28 lg:mt-40">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h2 className="text-[#0D2440] font-bold uppercase tracking-widest text-sm mb-4" data-aos="fade-up">
              COLLABORATION MODEL
            </h2>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0D2440]" data-aos="fade-up" data-aos-duration="400">
              Our Partnership Philosophy
            </h2>
            <p className="text-base sm:text-lg mt-6 text-gray-600 font-medium" data-aos="fade-up" data-aos-duration="500">
              We believe great partnerships are built on trust, transparency, and shared success — not just transactions.
            </p>
          </div>

          <div className="lg:mt-9 px-0 w-full relative z-40">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-16 items-stretch">
              <SolutionsCard
                title="Growth-Driven Partnerships"
                para="We collaborate to unlock new revenue streams and scalable business opportunities."
                icon={<FaChartLine />}
                theme="light"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
              <SolutionsCard
                title="Strategic Technology Alliances"
                para="Partnering with forward-thinking companies to build innovative and future-ready solutions."
                icon={<FaRegHandshake />}
                theme="light"
                data-aos="fade-up"
                data-aos-duration="1200"
              />
              <SolutionsCard
                title="Cloud & Infrastructure Partners"
                para="Work with us to deliver reliable, scalable, and high-performance cloud solutions."
                icon={<MdOutlineSettingsInputComponent />}
                theme="light"
                data-aos="fade-up"
                data-aos-duration="1400"
              />
              <SolutionsCard
                title="Consulting & Integration Partners"
                para="Deliver end-to-end digital transformation with expert consulting and seamless implementation."
                icon={<SiTicktick />}
                theme="light"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
              <SolutionsCard
                title="Innovation & Research Collaboration"
                para="Continuously evolving through shared insights, R&D, and emerging technologies."
                icon={<FaMagnifyingGlass />}
                theme="light"
                data-aos="fade-up"
                data-aos-duration="1200"
              />
              <SolutionsCard
                title="Security & Compliance Partners"
                para="Ensure enterprise-grade security, compliance, and risk management across all solutions."
                icon={<MdOutlinePrivacyTip />}
                theme="light"
                data-aos="fade-up"
                data-aos-duration="1400"
              />
            </div>
          </div>
        </div>

        {/* High Impact Benefits Strip */}
        <section className="relative z-40 mt-20 lg:mt-32">
          <div className="bg-[#0D2440] rounded-[2rem] p-10 md:p-16 shadow-2xl overflow-hidden relative border border-white/5">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-soft/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-5xl font-semibold text-white mb-12" data-aos="fade-up">
                Why Partner with <span className="text-blue-soft">Brilliant Technologies?</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {[
                  "Access to enterprise-grade solutions",
                  "Dedicated partner support & onboarding",
                  "Co-marketing and growth opportunities",
                  "Scalable and future-ready offerings",
                  "Transparent and long-term collaboration",
                  "Proven track record of excellence"
                ].map((point, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-primary flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                      {idx + 1}
                    </div>
                    <span className="text-lg text-gray-200 font-medium text-left">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-16" data-aos="fade-up" data-aos-delay="600">
                <Link to="/become-a-partner" className="px-10 py-5 bg-white text-[#0D2440] rounded-full font-bold shadow-xl hover:-translate-y-1 hover:shadow-white/10 transition-all duration-300">
                   Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="lg:mt-32">
          <PartnerFAQ />
        </section>
      </div>
    </>
  );
}

export default Partner;