import React from "react";
import desk from "../assets/images/a-sleek-ai-software-interface-displayed-_VMSgjMN6S0yw6N5AlGwejg_4FPdo5GcQDyuW-iLCeedkA_sd.jpeg";
import cloudOpt from "../assets/images/CloudOptimization.png";
import highAvail from "../assets/images/HighAvailability.png";
import { MdDone } from "react-icons/md";
import SolutionsCard from "../components/cards/SolutionsCard";
import CloudFAQ from "../components/CloudFAQ";
import { MdOutlineVerified } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { SiCrowdsource } from "react-icons/si";
import { FaConnectdevelop } from "react-icons/fa";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";

function CloudInfrastructure() {
  return (
    <>
      <div className="h-auto flex flex-col  px-6 sm:px-6 md:px-16 lg:px-32 pt-[7%] py-12 bg-[#E7F0FA] text-[#0D2440] relative">
        {/* Banner */}
        <section>
          <div className="absolute inset-0 flex justify-center pointer-events-none">
            <div className="w-[1000px] h-[800px] bg-gradient-radial from-blue-primary/20 via-[#E7F0FA] to-[#E7F0FA] rounded-full blur-3xl opacity-90" />
          </div>

          <div className="flex flex-col  items-center relative z-40 w-full pt-10">
            <div className="w-full mt-6 bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100" data-aos="fade-up" data-aos-duration="500">
              <div className="flex flex-col p-6 sm:p-10 lg:flex-row lg:items-center gap-10 lg:gap-20  lg:p-16">
                <div className="w-full sm:w-full  lg:w-1/2 h-full" data-aos="fade-up" data-aos-duration="800">
                  <h2 className="text-base text-[#0D2440] uppercase tracking-wide">CLOUD INFRASTRUCTURE</h2>
                  <h2 className="text-3xl sm:text-4xl py-7 font-bold text-[#0D2440]">Cloud Infrastructure Built for Performance &amp; Scale</h2>
                  <h3 className="text-base text-gray-600">
                    Empower your business with secure, scalable, and high-performance cloud infrastructure designed to handle modern workloads effortlessly.
                  </h3>
                  <div className="mt-7">
                    <Link to="../contact">
                      <button className="group flex items-center gap-2 text-white py-3 px-8 font-semibold bg-blue-primary hover:bg-[#1a3a5a] transition-all duration-300 shadow-xl hover:shadow-blue-primary/30 rounded-full transform hover:-translate-y-0.5">
                        Get Started Today
                        <HiArrowNarrowRight className="text-xl transition-transform group-hover:translate-x-1" />
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 h-full rounded-lg transition-colors" data-aos="fade-up" data-aos-duration="900">
                  <img src={desk} alt="Brilliant Cloud Control" className="w-full rounded-xl lg:h-80 object-cover shadow-2xl border border-white/20" />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="w-full flex flex-col lg:flex-row lg:mt-20 mt-7 gap-10 relative z-20">
            <div className="w-full lg:w-1/2 py-8">
              <h2 className="text-base text-[#0D2440] uppercase tracking-wide" data-aos="fade-up" data-aos-duration="1200">INFRASTRUCTURE OPTIMIZATION</h2>
              <h2 className="text-2xl text-[#0D2440] py-5 font-bold" data-aos="fade-up" data-aos-duration="1300">
                Optimize Resource Utilization & Maximize Efficiency
              </h2>
              <h3 className="text-base text-gray-600" data-aos="fade-up" data-aos-duration="1400">
                Our intelligent infrastructure ensures optimal resource allocation, reducing waste while maintaining peak performance across all environments.
              </h3>

              <ul className="mt-9 leading-6">
                {[
                  { title: "Efficient resource allocation" },
                  { title: "Cost optimization strategies" },
                  { title: "Real-time performance tuning" },
                ].map((item, index) => (
                  <li key={index} className={index !== 0 ? "py-4" : ""} data-aos="fade-right" data-aos-duration={`${1200 + index * 200}`}>
                    <span className="flex gap-2 items-center">
                      <div className="mt-1 bg-blue-primary/10 p-1 rounded-md">
                        <MdDone size={18} className="text-blue-primary" />
                      </div>
                      <h2 className="text-md font-medium text-[#0D2440]">{item.title}</h2>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center" data-aos="fade-up" data-aos-duration="1300">
              <img src={cloudOpt} alt="Cloud Optimization" className="w-full h-auto rounded-xl shadow-2xl border border-gray-100" />
            </div>
          </div>

          {/* Section 3 */}
          <div className="w-full flex flex-col-reverse lg:flex-row mt-4 lg:mt-32 gap-20 relative z-20">
            <div className="w-full lg:w-1/2 flex items-center justify-center" data-aos="fade-up" data-aos-duration="1300">
              <img src={highAvail} alt="High Availability" className="w-full h-auto rounded-xl shadow-2xl border border-gray-100" />
            </div>

            <div className="w-full lg:w-1/2 pl-0 lg:pl-12 py-8">
              <h2 className="text-base text-[#0D2440] uppercase tracking-wide" data-aos="fade-up" data-aos-duration="1200">HIGH AVAILABILITY</h2>
              <h2 className="text-2xl text-[#0D2440] py-5 font-bold" data-aos="fade-up" data-aos-duration="1300">
                Ensure Maximum Uptime Across All Systems
              </h2>
              <h3 className="text-base text-gray-600" data-aos="fade-up" data-aos-duration="1400">
                Our distributed cloud architecture guarantees reliability with minimal downtime and seamless failover mechanisms.
              </h3>

              <ul className="text-sm mt-9 leading-6">
                {[
                  {
                    title: "Multi-region deployment",
                  },
                  {
                    title: "Load balancing systems",
                  },
                  {
                    title: "Failover & redundancy",
                  },
                ].map((item, index) => (
                  <li key={index} className={index !== 0 ? "py-3" : ""} data-aos="fade-right" data-aos-duration={`${1200 + index * 200}`}>
                    <span className="flex gap-2 items-center">
                      <div className="mt-1 bg-blue-primary/10 p-1 rounded-md">
                        <MdDone size={18} className="text-blue-primary" />
                      </div>
                      <h2 className="text-md font-medium text-[#0D2440]">{item.title}</h2>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Grid section */}
        <section>
          <div className="w-full flex flex-col items-center relative z-40 mt-14 lg:mt-32">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0D2440] leading-tight text-center px-4 sm:px-8" data-aos="fade-up" data-aos-duration="1300">
              Build and scale with confidence using our advanced<br className="hidden sm:block" /> Enterprise Cloud Services
            </h2>
            <h3 className="text-base sm:text-lg text-center leading-6 pt-7 text-gray-600" data-aos="fade-up" data-aos-duration="1400">
              Deploy, scale, and manage your infrastructure with our <br className="hidden sm:block" /> robust cloud solutions
            </h3>

            <div className="mt-9 w-full relative z-40">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 pt-16 lg:pr-1 sm:pr-12 lg:pt-14">
                <SolutionsCard
                  title="Cloud Deployment"
                  para="Deploy scalable infrastructure in minutes with full flexibility."
                  icon={<MdOutlineVerified />}
                  theme="light"
                />
                <SolutionsCard
                  title="Virtual Machines"
                  para="Run high-performance compute instances on demand."
                  icon={<FaConnectdevelop />}
                  theme="light"
                />
                <SolutionsCard
                  title="Storage Solutions"
                  para="Secure and scalable storage for growing data needs."
                  icon={<FaRegBuilding />}
                  theme="light"
                />
                <SolutionsCard
                  title="Network Management"
                  para="High-speed, low-latency networking for seamless connectivity."
                  icon={<SiCrowdsource />}
                  theme="light"
                />
                <SolutionsCard
                  title="Backup & Recovery"
                  para="Automated backups and disaster recovery solutions."
                  icon={<MdOutlinePublishedWithChanges />}
                  theme="light"
                />
                <SolutionsCard
                  title="Monitoring & Analytics"
                  para="Real-time insights into system performance and usage."
                  icon={<IoPeopleOutline />}
                  theme="light"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <CloudFAQ />
        </section>
      </div>
    </>
  );
}

export default CloudInfrastructure;