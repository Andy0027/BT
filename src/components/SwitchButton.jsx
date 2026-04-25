import React, { useState } from "react";
import blog1 from "../assets/images/Business-professional-with-cloud-computing-icon.jpeg";
import blog2 from "../assets/images/Monitoring-system-performance-in-the-server.jpeg";
import blog3 from "../assets/images/Coding-in-the-server.jpeg";
import imgReport1 from "../assets/images/cloud-security.jpeg";
import imgReport2 from "../assets/images/finance-analysis.jpeg";
import imgReport3 from "../assets/images/stacked-blocks.jpeg";

const Switchbutton = () => {
  const [isBlog, setIsBlog] = useState(true);

  return (
    <div className="bg-transparent w-full h-auto py-16 sm:py-20 border-t border-white/5 max-w-[1400px] mx-auto px-6 lg:px-8">
      <div className="flex flex-col items-center">
        <h1
          className="text-3xl sm:text-5xl text-center font-semibold tracking-tight text-white"
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{ fontFamily: 'Instrument Regular' }}
        >
          Expert Insights for the <span className="text-blue-400">Infinite Cloud</span>
        </h1>

        {/* Switch */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center py-8 gap-4 sm:gap-6"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <label className="text-xl sm:text-2xl font-medium text-white">Blog</label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              onChange={() => setIsBlog(!isBlog)}
            />
            <div className="group peer bg-blue-primary rounded-full duration-1000 after:duration-300 w-20 sm:w-24 h-10 sm:h-12 shadow-md after:content-[''] after:rounded-full after:absolute after:bg-white after:outline-none after:h-8 sm:after:h-10 after:w-8 sm:after:w-10 after:top-1 after:left-1 peer-checked:after:translate-x-10 sm:peer-checked:after:translate-x-12"></div>

          </label>
          <label className="text-xl sm:text-2xl font-medium text-white">Reports</label>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 pt-10">
          {(isBlog ? blogData : reportData).map((item, index) => (
            <div
              key={index}
              className="w-full h-auto bg-white/5 border border-white/10 rounded-lg p-5 shadow-sm hover:bg-white/10 transition-colors"
              data-aos="fade-up"
              data-aos-duration={`${1300 + index * 300}`}
            >
              <div className="w-full h-48 mb-4 bg-white/10 rounded-lg flex items-center justify-center p-2 border border-white/10">
                <img
                  src={item.image}
                  alt="Card"
                  className="max-w-full max-h-full object-contain rounded-md"
                />
              </div>
              <h1 className="text-white text-lg sm:text-xl font-semibold mb-2">
                {item.title}
              </h1>
              <p className="text-slate-400 text-sm sm:text-base font-light mb-2">
                {item.description}
              </p>
              <p className="text-blue-400 text-sm">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const blogData = [
  {
    title: "Cloud Computing Basics: A Guide for Modern Enterprise",
    description:
      "Understanding the fundamentals of IaaS, PaaS, and SaaS to power your business growth and digital transformation.",
    image: blog1,
    date: "April 11, 2026",
  },
  {
    title: "Infrastructure Scaling: Handling Peak Demands",
    description:
      "Strategies for seamless vertical and horizontal scaling to ensure your platform remains responsive during traffic spikes.",
    image: blog2,
    date: "April 11, 2026",
  },
  {
    title: "DevOps Best Practices: Accelerating Deployment Cycles",
    description:
      "Streamlining development and operations with automated CI/CD pipelines and expert system optimization.",
    image: blog3,
    date: "April 11, 2026",
  },
];

const reportData = [
  {
    title: "Infrastructure Optimization & Performance Review",
    description:
      "Leveraging automated resource management to minimize latency and maximize system reliability.",
    image: imgReport1,
    date: "April 11, 2026",
  },
  {
    title: "Analysis of Cloud Security Architecture & Threat Prevention",
    description:
      "Protecting multi-cloud environments with sophisticated IAM protocols and advanced encryption standards.",
    image: imgReport2,
    date: "April 11, 2026",
  },
  {
    title: "Impact Metrics: Cloud-Native Infrastructure Efficiency",
    description:
      "Detailed statistics demonstrating 99.9% uptime and significant reductions in operational overhead.",
    image: imgReport3,
    date: "April 11, 2026",
  },
];

export default Switchbutton;