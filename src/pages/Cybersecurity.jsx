import React from "react";
import desk from "../assets/images/cybersecurity.jpeg";
import { MdAutoGraph, MdDone } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { GrCloudSoftware, GrShieldSecurity } from "react-icons/gr";
import { MdOutlineLockPerson } from "react-icons/md";
import { LiaUserLockSolid } from "react-icons/lia";
import SolutionsCard from "../components/cards/SolutionsCard";
import CyberFAQ from "../components/CyberFAQ";
import { LineChart } from "../chart/LineChart";
import { CyberGradientChart } from "../chart/CyberGradientChart ";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";

function Cybersecurity() {
  return (
    <div className="h-auto flex flex-col px-6 sm:px-6 md:px-16 lg:px-32 pt-[7%] py-12 bg-[#E7F0FA] text-[#0D2440] relative">
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[1000px] h-[800px] bg-gradient-radial from-blue-primary/20 via-[#E7F0FA] to-[#E7F0FA] rounded-full blur-3xl opacity-90" />
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center relative z-40 w-full pt-10 text-center">
        <h1 className="text-3xl sm:text-5xl font-semibold text-[#0D2440] max-w-4xl" data-aos="fade-up" data-aos-duration="1000">
          Secure Your Digital Ecosystem with Confidence
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mt-6 max-w-3xl leading-relaxed font-medium" data-aos="fade-up" data-aos-duration="1200">
          Cyber threats evolve every second. We deliver intelligent, proactive, and enterprise-grade security solutions 
          that keep your systems protected, resilient, and always one step ahead.
        </p>

        <div className="w-full mt-12 bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 text-left" data-aos="fade-up" data-aos-duration="500">
          <div className="bg-white flex flex-col lg:flex-row items-center gap-10 lg:gap-20 p-6 sm:p-10 lg:p-16">
            <div className="w-full lg:w-1/2" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-base text-[#0D2440] font-bold uppercase tracking-wide">INTELLIGENT SECURITY</h2>
              <h2 className="text-3xl sm:text-4xl py-7 font-bold text-[#0D2440]">Proactive Defense for a Threat-Driven World</h2>
              <h3 className="text-base text-gray-600">
                We don’t just react—we predict, prevent, and neutralize threats using advanced monitoring, AI-driven detection, and real-time response systems.
              </h3>
              <div className="mt-7">
                <Link to="../contact">
                  <button className="group flex items-center gap-2 text-white py-3 px-8 font-bold bg-blue-primary border border-blue-primary/50 shadow-xl shadow-blue-primary/20 hover:bg-white hover:text-blue-primary hover:border-white hover:shadow-2xl transition-all duration-300 rounded-full transform hover:-translate-y-1">
                    Secure Your Business
                    <HiArrowNarrowRight className="text-xl transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 rounded-lg transition-colors" data-aos="fade-up" data-aos-duration="900">
              <img src={desk} alt="Enterprise Security Visualization" className="w-full rounded-xl lg:h-80 object-cover shadow-2xl border border-white/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Zero Trust Section */}
      <div className="w-full flex flex-col lg:flex-row lg:mt-20 mt-10 gap-10 relative z-20">
        <div className="w-full lg:w-1/2 py-8">
          <h2 className="text-base text-[#0D2440] font-semibold uppercase tracking-wide" data-aos="fade-up" data-aos-duration="1200">
            ZERO-TRUST SECURITY
          </h2>
          <h2 className="text-2xl text-[#0D2440] py-5 font-semibold" data-aos="fade-up" data-aos-duration="1300">
            AI-Driven Threat Detection & Real-Time Monitoring
          </h2>
          <h3 className="text-base pr-4 text-gray-600" data-aos="fade-up" data-aos-duration="1400">
            Our zero-trust architecture ensures every user, device, and interaction is continuously verified—eliminating vulnerabilities before they can be exploited.
          </h3>

          <ul className="mt-9 leading-6 space-y-8">
            {[
              {
                title: "Multi-Layer Authentication (MFA)",
                desc: "Strong identity verification across all access points",
              },
              {
                title: "Granular Access Control (RBAC)",
                desc: "Limit access based on roles and permissions",
              },
              {
                title: "Continuous Verification",
                desc: "Real-time validation of users and systems",
              },
            ].map((item, idx) => (
              <li key={idx} data-aos="fade-right" data-aos-duration={`${1200 + idx * 200}`}>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 bg-blue-primary/10 p-1 rounded-md">
                    <MdDone size={18} className="text-blue-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-[#0D2440]">{item.title}</h2>
                    <p className="text-base text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-14" data-aos="fade-up" data-aos-duration="1300">
           {/* Chart container with white background for visibility */}
          <div className="w-full h-full rounded-2xl bg-white shadow-xl p-8 border border-gray-100">
             <CyberGradientChart />
          </div>
        </div>
      </div>

      {/* Data Protection Section */}
      <div className="w-full flex flex-col-reverse lg:flex-row lg:mt-32 mt-10 gap-20 relative z-20">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-14" data-aos="fade-up" data-aos-duration="1300">
           <div className="w-full h-full rounded-2xl bg-white shadow-xl p-8 border border-gray-100">
              <LineChart  />
           </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-12 py-8">
          <h2 className="text-base text-[#0D2440] font-semibold uppercase tracking-wide" data-aos="fade-up" data-aos-duration="1200">
            DATA SECURITY & RESILIENCE
          </h2>
          <h2 className="text-2xl text-[#0D2440] py-5 font-semibold" data-aos="fade-up" data-aos-duration="1300">
            Enterprise Cloud Security Architecture
          </h2>
          <h3 className="text-base text-gray-600" data-aos="fade-up" data-aos-duration="1400">
            From encryption to recovery, we ensure your data remains protected, accessible, and compliant—no matter the threat landscape.
          </h3>

          <ul className="mt-9 leading-6 space-y-8">
            {[
              {
                title: "Advanced Encryption Standards",
                desc: "Protect data at rest and in transit",
              },
              {
                title: "Automated Backup & Recovery",
                desc: "Instant recovery with minimal downtime",
              },
              {
                title: "Compliance-Ready Frameworks",
                desc: "Built to meet global security standards",
              },
            ].map((item, idx) => (
              <li key={idx} data-aos="fade-right" data-aos-duration={`${1200 + idx * 200}`}>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 bg-blue-primary/10 p-1 rounded-md">
                    <MdDone size={18} className="text-blue-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#0D2440]">{item.title}</h2>
                    <p className="text-base text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Grid Section */}
      <section>
        <div className="w-full flex flex-col items-center relative z-40 lg:mt-32 mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-[#0D2440] text-center px-4 sm:px-16" data-aos="fade-up" data-aos-duration="1300">
            Comprehensive Cybersecurity Solutions
          </h2>
          <h3 className="text-base sm:text-lg text-center leading-6 pt-7 text-gray-600" data-aos="fade-up" data-aos-duration="1400">
            A complete suite of security services designed to protect your infrastructure, applications, and digital assets.
          </h3>

          <div className="lg:mt-9 w-full relative z-40">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 pt-16">
              <SolutionsCard
                title="Threat Detection & Response"
                para="Real-time monitoring and rapid response to emerging threats."
                icon={<MdAutoGraph />}
                theme="light"
              />
              <SolutionsCard
                title="Cloud & Infrastructure Security"
                para="Secure your cloud environments, networks, and systems."
                icon={<GrCloudSoftware />}
                theme="light"
              />
              <SolutionsCard
                title="Application Security"
                para="Identify and eliminate vulnerabilities in your applications."
                icon={<CiGlobe />}
                theme="light"
              />
              <SolutionsCard
                title="Data Protection & Privacy"
                para="Ensure confidentiality and integrity of sensitive data."
                icon={<MdOutlineLockPerson />}
                theme="light"
              />
              <SolutionsCard
                title="Security Consulting"
                para="Expert guidance to strengthen your security posture."
                icon={<LiaUserLockSolid />}
                theme="light"
              />
              <SolutionsCard
                title="Endpoint Protection"
                para="Secure devices across your organization with advanced monitoring."
                icon={<GrShieldSecurity />}
                theme="light"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip Section */}
      <section className="relative z-40 mt-20 lg:mt-32">
        <div className="bg-[#0D2440] rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10 text-center">
            {[
              { label: "Threat Detection Accuracy", value: "99.99%" },
              { label: "Security Monitoring", value: "24/7" },
              { label: "Incidents Prevented Monthly", value: "500+" },
              { label: "Compliance", value: "Enterprise-Grade" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-4" data-aos="zoom-in" data-aos-delay={idx * 100}>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-soft mb-2">{stat.value}</h2>
                <p className="text-gray-400 text-sm md:text-base font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <CyberFAQ />
      </section>
    </div>
  );
}

export default Cybersecurity;