import React from "react";
import desk from "../assets/images/cyber_bg.jpg";
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

function Cybersecurity() {
  return (
    <div className="h-auto flex flex-col px-6 sm:px-6 md:px-12 lg:px-32 pt-[7%] py-12 bg-navy-main text-white relative">
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[1000px] h-[800px] bg-gradient-radial from-blue-primary/40 via-navy-main to-navy-main rounded-full blur-3xl opacity-90" />
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center relative z-40 w-full pt-10">
        <h2 className="text-white text-3xl sm:text-4xl py-4 font-bold text-center" data-aos="fade-up" data-aos-duration="300">
          We Lock Down Security, So You Can Power Up Your Business
        </h2>
        <h2 className="text-base sm:text-lg text-center text-[#c9c9d2] pt-2 px-4 sm:px-12 md:px-20" data-aos="fade-up" data-aos-duration="300">
          Cyber threats don’t wait, and neither should you. We deliver enterprise-grade protection, real-time threat defense, and zero-trust security—so your business stays unstoppable, no matter what.
        </h2>

        <div className="w-full rounded-md p-2 mt-12 border border-[#646470] nav" data-aos="fade-up" data-aos-duration="500">
          <div className="bg-navy-main flex flex-col lg:flex-row items-center gap-10 md:gap-20 p-6 md:p-14 rounded-md">
            <div className="w-full lg:w-1/2" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-base text-blue-soft uppercase tracking-wide">Cyber Shield</h2>
              <h2 className="text-3xl sm:text-4xl py-7 font-bold">Proactive Threat Defense<br />Stay ahead of cyber threats before they strike</h2>
              <h3 className="text-base text-[#c9c9d2]">
                We don’t just react to threats—we stop them in their tracks with AI-driven security and real-time monitoring.
              </h3>
              <div className="mt-7">
                    <Link to="../contact">
                    <button className="text-black py-2 px-4 font-medium bg-white rounded-lg">Get started today</button>
                    </Link>
                  </div>
            </div>
            <div className="w-full lg:w-1/2 border-4 rounded-lg border-navy-main transition-colors" data-aos="fade-up" data-aos-duration="900">
              <img src={desk} alt="" className="w-full rounded-lg h-auto bg-cover bg-no-repeat" />
            </div>
          </div>
        </div>
      </div>

      {/* Zero Trust Section */}
      <div className="w-full flex flex-col lg:flex-row lg:mt-20 mt-10 gap-1 lg:gap-10 relative z-20">
        <div className="w-full lg:w-1/2 py-8">
          <h2 className="text-base text-blue-soft uppercase tracking-wide" data-aos="fade-up" data-aos-duration="1200">
            Zero-Trust Architecture
          </h2>
          <h2 className="text-2xl text-white py-5 font-bold" data-aos="fade-up" data-aos-duration="1300">
            Because trust should be earned, not assumed
          </h2>
          <h3 className="text-base pr-4 text-[#94949e]" data-aos="fade-up" data-aos-duration="1400">
            Our zero-trust model ensures that every user, device, and request is verified before accessing your critical data.
          </h3>

          <ul className="mt-9 leading-6 ">
            {[
              {
                title: "Multi-Factor Authentication (MFA)",
                desc: "Secure access with Multi-Factor Authentication (MFA)",
              },
              {
                title: "Role-Based Access Control (RBAC)",
                desc: "Control access with precision using Role-Based Access Control",
              },
              {
                title: "Encrypted Data Exchange",
                desc: "Protect data in transit with Encrypted Data Exchange",
              },
            ].map((item, idx) => (
              <li key={idx} className={idx !== 0 ? "py-4" : ""} data-aos="fade-right" data-aos-duration={`${1200 + idx * 200}`}>
                <span className="flex gap-2 items-center">
                  <MdDone size={20} />
                  <h2 className="text-md font-medium text-[#FFFFFF]">{item.title}</h2>
                </span>
                <h3 className="pl-7 text-[#94949e]">{item.desc}</h3>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-1/2 bg-navy-main p-6 lg:p-14 rounded-md">
          <div className="w-full h-full rounded-md bg-[#ffffff0d]" data-aos="fade-up" data-aos-duration="1300">
            <div className="flex px-3  lg:pt-20 justify-center items-center lg:mt-8">
              <CyberGradientChart />
            </div>
          </div>
        </div>
      </div>

      {/* Data Protection Section */}
      <div className="w-full flex flex-col-reverse lg:flex-row lg:mt-32 mt-10 lg:gap-20  relative z-20">
        <div className="w-full lg:w-1/2 bg-navy-main p-6 md:p-14 rounded-md">
          <div className="w-full h-full rounded-md bg-[#ffffff0d]" data-aos="fade-up" data-aos-duration="1300">
            <div className="flex  lg:pt-20 px-3    mt-8">
              <LineChart  />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-12 py-8">
          <h2 className="text-base text-blue-soft uppercase tracking-wide" data-aos="fade-up" data-aos-duration="1200">
            End-to-End Data Protection
          </h2>
          <h2 className="text-2xl text-white py-5 font-bold" data-aos="fade-up" data-aos-duration="1300">
            Your data Fully protected Always
          </h2>
          <h3 className="text-base text-[#94949e]" data-aos="fade-up" data-aos-duration="1400">
            From encryption to backup recovery, we safeguard your most valuable digital assets from breaches and data loss.
          </h3>

          <ul className="text-sm mt-9 leading-6 ">
            {[
              {
                title: "Military-Grade Encryption",
                desc: "Secure data with unbreakable Military-Grade Encryption",
              },
              {
                title: "Automated Backups & Recovery",
                desc: "Safeguard data with Automated Backups & Recovery",
              },
              {
                title: "Compliance-Ready Security",
                desc: "Meet regulatory requirements with Compliance-Ready Security",
              },
            ].map((item, idx) => (
              <li key={idx} className={idx !== 0 ? "py-3" : ""} data-aos="fade-right" data-aos-duration={`${1200 + idx * 200}`}>
                <span className="flex gap-2 items-center">
                  <MdDone size={20} />
                  <h2 className="text-md font-medium text-[#FFFFFF]">{item.title}</h2>
                </span>
                <p className="pl-7  text-[#94949e]">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Grid Section */}
      <section>
        <div className="w-full flex flex-col items-center relative z-40 lg:mt-32 mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-center px-4 sm:px-16" data-aos="fade-up" data-aos-duration="1300">
            Defend Your Business Against Cyber Threats with <span className="lg:block">Our Proven Solutions</span> 
          </h2>
          <h3 className="text-base sm:text-lg text-center leading-6 pt-7 text-[#94949e]" data-aos="fade-up" data-aos-duration="1400">
            Safeguard your digital assets from cyber threats with our <br className="hidden sm:block" /> expert cybersecurity solutions
          </h3>

          <div className="lg:mt-9 w-full relative z-40">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 pt-16">
              <SolutionsCard
                title="Core Cybersecurity Services"
                para="Cybersecurity Services provide a foundational layer of protection, detecting, preventing, and responding to cyber threats."
                icon={<MdAutoGraph />}
              />
              <SolutionsCard
                title="Cloud & Network Security"
                para="This includes measures to secure cloud storage, applications, and infrastructure, as well as network devices, traffic, and data."
                icon={<GrCloudSoftware />}
              />
              <SolutionsCard
                title="Web & App Security"
                para="This includes measures to prevent hacking, data breaches, and other malicious activities that can compromise online security."
                icon={<CiGlobe />}
              />
              <SolutionsCard
                title="Specialized Digital Protection"
                para="Protect sensitive digital assets, data, and systems from cyber threats, ensuring confidentiality and integrity."
                icon={<MdOutlineLockPerson />}
              />
              <SolutionsCard
                title="Cybersecurity Consulting"
                para="Cybersecurity Consulting provides expert guidance to organizations to assess, improve, and maintain their cybersecurity posture."
                icon={<LiaUserLockSolid />}
              />
              <SolutionsCard
                title="Endpoint Detection"
                para="Endpoint Detection and Response (EDR) provides real-time threat detection and response for laptops, desktops, and mobile devices."
                icon={<GrShieldSecurity />}
              />
            </div>
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