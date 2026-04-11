import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ss from "../assets/images/ss.png";
import softwaresecurity from "../assets/images/softwaresecurity.png";
import sw from "../assets/images/sw.png";
import app from "../assets/images/app.png";
import api from "../assets/images/api.png";
import cloud from "../assets/images/cloud.png";

AOS.init();

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-[#E7F0FA] shadow-md rounded-xl py-6 px-5 sm:py-8 sm:px-7 flex flex-col items-start border border-[#2E5E991A] hover:border-[#2E5E994D] transition-all duration-300">
    <div className="text-blue-primary p-2 text-4xl mb-4 shadow-lg rounded-xl bg-white/50 border border-blue-primary/20">
      <img src={icon} width={25} />
    </div>
    <h3 className="text-lg sm:text-xl font-bold mb-2 text-navy-main">{title}</h3>
    <p className="text-[#4A4A52] font-medium text-sm sm:text-base leading-relaxed pr-4">{description}</p>
  </div>
);

const SoftwareSolution = () => {
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

  return (
    <div className="software_bg px-6 sm:px-10 md:px-20 lg:px-32 py-1">
      <div data-aos="fade-up" data-aos-duration="3000">
        <div className="flex flex-col items-center text-center">
          <h2
            className="text-navy-main text-2xl sm:text-4xl font-bold pt-3 pb-3"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Flexible Cloud Solutions for Every Business
          </h2>
          <h2
            className="text-lg sm:text-2xl font-semibold text-navy-main pt-2"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            From Startups to Enterprises, our Infrastructure Adapts to Your Needs.
          </h2>
          <p
            className="text-[#61616b] text-base sm:text-lg font-normal text-center pt-5 lg:py-4 sm:px-10 lg:px-32"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Scale effortlessly, deploy globally, and stay secure with Brilliant Technologies' 
            enterprise-grade cloud infrastructure. We provide the foundation for your digital growth.
          </p>
        </div>
      </div>

      <div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-7">
          <div data-aos="fade-up" data-aos-duration="1000">
            <ServiceCard
              icon={cloud}
              title="Virtual Servers"
              description="High-performance compute instances with flexible configurations and on-demand scalability."
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1200">
            <ServiceCard
              icon={sw}
              title="Container Deployment"
              description="Seamless Kubernetes and Docker orchestration to simplify your application lifecycle."
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1400">
            <ServiceCard
              icon={ss}
              title="System Optimization"
              description="Continuous performance tuning and resource management to keep your infrastructure running lean."
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1600">
            <ServiceCard
              icon={app}
              title="DevOps Support"
              description="Expert guidance and automated tools to accelerate your development and deployment pipelines."
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1800">
            <ServiceCard
              icon={api}
              title="API Hosting"
              description="Optimized environments for modern APIs, ensuring low latency and high reliability."
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <ServiceCard
              icon={softwaresecurity}
              title="Database Management"
              description="Managed SQL and NoSQL databases designed to handle growing data needs effortlessly."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareSolution;