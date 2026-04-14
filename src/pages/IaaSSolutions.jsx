import React from "react";
import desk from "../assets/images/system-visualization.jpeg";
import cloudOpt from "../assets/images/dashboard-interface.jpeg";
import highAvail from "../assets/images/cpu-usage.jpeg";
import { MdDone } from "react-icons/md";
import SolutionsCard from "../components/cards/SolutionsCard";
import IaaSFAQ from "../components/IaaSFAQ";
import { MdOutlineVerified } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { SiCrowdsource } from "react-icons/si";
import { FaConnectdevelop } from "react-icons/fa";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";

function IaaSSolutions() {
  return (
    <>
      <div className="h-auto flex flex-col  px-6 sm:px-6 md:px-16 lg:px-32 pt-32 py-12 bg-[#E7F0FA] text-[#0D2440] relative">
        {/* Banner */}
        <section>
          <div className="absolute inset-0 flex justify-center pointer-events-none">
            <div className="w-[1000px] h-[800px] bg-gradient-radial from-blue-primary/20 via-[#E7F0FA] to-[#E7F0FA] rounded-full blur-3xl opacity-90" />
          </div>

          <div className="flex flex-col  items-center relative z-40 w-full pt-10 text-center">
            <h1 className="text-3xl sm:text-5xl font-semibold text-[#0D2440] max-w-4xl" data-aos="fade-up" data-aos-duration="1000">
              Scalable Cloud Infrastructure Built for Performance
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mt-6 max-w-2xl leading-relaxed" data-aos="fade-up" data-aos-duration="1200">
              Deploy, manage, and scale your infrastructure with confidence. 
              Our IaaS solutions give you complete control, flexibility, and reliability—without the complexity.
            </p>

            <div className="w-full mt-12 bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 text-left" data-aos="fade-up" data-aos-duration="500">
              <div className="flex flex-col p-6 sm:p-10 lg:flex-row lg:items-center gap-10 lg:gap-20  lg:p-16">
                <div className="w-full sm:w-full  lg:w-1/2 h-full" data-aos="fade-up" data-aos-duration="800">
                  <h2 className="text-base text-[#0D2440] uppercase tracking-wide">CLOUD POWER</h2>
                  <h2 className="text-3xl sm:text-4xl py-7 font-bold text-[#0D2440]">Infrastructure That Scales With Your Business</h2>
                  <h3 className="text-base text-gray-600">
                    From startups to enterprises, we provide secure, high-performance cloud environments designed to handle dynamic workloads and rapid growth.
                  </h3>
                  <div className="mt-7">
                    <Link to="../contact">
                      <button className="group flex items-center gap-2 text-white py-3 px-8 font-bold bg-blue-primary border border-blue-primary/50 shadow-xl shadow-blue-primary/20 hover:bg-white hover:text-blue-primary hover:border-white hover:shadow-2xl transition-all duration-300 rounded-full transform hover:-translate-y-1">
                        Get Started Today
                        <HiArrowNarrowRight className="text-xl transition-transform group-hover:translate-x-1" />
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 h-full rounded-lg transition-colors" data-aos="fade-up" data-aos-duration="900">
                  <img src={desk} alt="Infrastructure Visualization" className="w-full rounded-xl lg:h-80 object-cover shadow-2xl border border-white/20" />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="w-full flex flex-col lg:flex-row lg:mt-20 mt-7 gap-10 relative z-20">
            <div className="w-full lg:w-1/2 py-8">
              <h2 className="text-base text-[#0D2440] uppercase tracking-wide" data-aos="fade-up" data-aos-duration="1200">BUILT FOR MODERN INFRASTRUCTURE</h2>
              <h2 className="text-2xl text-[#0D2440] py-5 font-bold" data-aos="fade-up" data-aos-duration="1300">
                No Limitations. Just Powerful Cloud Control
              </h2>

              <ul className="mt-9 leading-6 space-y-8">
                {[
                  { 
                    title: "On-demand scalability",
                    desc: "Instantly scale resources up or down based on workload demands."
                  },
                  { 
                    title: "Flexible infrastructure",
                    desc: "Customize compute, storage, and networking as per your needs."
                  },
                  { 
                    title: "High performance",
                    desc: "Optimized infrastructure ensuring low latency and fast processing."
                  },
                ].map((item, index) => (
                  <li key={index} data-aos="fade-right" data-aos-duration={`${1200 + index * 200}`}>
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

            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8" data-aos="fade-up" data-aos-duration="1300">
              <img src={cloudOpt} alt="Cloud Optimization" className="w-full h-auto max-w-sm lg:max-w-md rounded-xl shadow-2xl border border-gray-100" />
            </div>
          </div>

          {/* Section 3 */}
          <div className="w-full flex flex-col-reverse lg:flex-row mt-4 lg:mt-32 gap-20 relative z-20">
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8" data-aos="fade-up" data-aos-duration="1300">
              <img src={highAvail} alt="High Availability" className="w-full h-auto max-w-sm lg:max-w-md rounded-xl shadow-2xl border border-gray-100" />
            </div>

            <div className="w-full lg:w-1/2 pl-0 lg:pl-12 py-8">
              <h2 className="text-base text-[#0D2440] uppercase tracking-wide" data-aos="fade-up" data-aos-duration="1200">SEAMLESS OPERATIONS, ALWAYS</h2>
              <h2 className="text-2xl text-[#0D2440] py-5 font-semibold" data-aos="fade-up" data-aos-duration="1300">
                Highly Scalable Compute Solutions
              </h2>
              <h3 className="text-base text-gray-600" data-aos="fade-up" data-aos-duration="1400">
                Our intuitive cloud management tools simplify deployment, monitoring, and scaling—so your team can focus on growth, not maintenance.
              </h3>

              <ul className="mt-9 leading-6 space-y-8">
                {[
                  {
                    title: "Centralized dashboard",
                    desc: "Monitor all infrastructure in one place."
                  },
                  {
                    title: "Automated provisioning",
                    desc: "Launch servers and environments in seconds."
                  },
                ].map((item, index) => (
                  <li key={index} data-aos="fade-right" data-aos-duration={`${1200 + index * 200}`}>
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
        </section>

        {/* Grid section */}
        <section>
          <div className="w-full flex flex-col items-center relative z-40 mt-14 lg:mt-32">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0D2440] leading-tight text-center px-4 sm:px-8" data-aos="fade-up" data-aos-duration="1300">
              Build and scale with confidence using our advanced<br className="hidden sm:block" /> Enterprise Cloud Services
            </h2>
            <h3 className="text-base sm:text-lg text-center leading-6 pt-7 text-gray-600" data-aos="fade-up" data-aos-duration="1400">
              Power your applications with reliable, scalable, and secure infrastructure services.
            </h3>

            <div className="mt-9 w-full relative z-40">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 pt-16 lg:pr-1 sm:pr-12 lg:pt-14">
                <SolutionsCard
                  title="Compute Services"
                  para="High-performance virtual machines tailored for your workloads."
                  icon={<FaConnectdevelop />}
                  theme="light"
                />
                <SolutionsCard
                  title="Storage Solutions"
                  para="Secure and scalable storage with fast access and redundancy."
                  icon={<FaRegBuilding />}
                  theme="light"
                />
                <SolutionsCard
                  title="Networking & Load Balancing"
                  para="Ensure smooth traffic distribution and minimal downtime."
                  icon={<SiCrowdsource />}
                  theme="light"
                />
                <SolutionsCard
                  title="Auto Scaling"
                  para="Automatically adjust resources based on demand."
                  icon={<MdOutlineVerified />}
                  theme="light"
                />
                <SolutionsCard
                  title="Disaster Recovery"
                  para="Built-in backup and recovery for business continuity."
                  icon={<MdOutlinePublishedWithChanges />}
                  theme="light"
                />
                <SolutionsCard
                  title="Security & Compliance"
                  para="Enterprise-grade security with industry compliance standards."
                  icon={<IoPeopleOutline />}
                  theme="light"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <IaaSFAQ />
        </section>
      </div>
    </>
  );
}

export default IaaSSolutions;