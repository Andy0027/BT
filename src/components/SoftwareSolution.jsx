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
  <div className="h-full bg-[#E7F0FA] group rounded-2xl py-8 px-7 flex flex-col items-start border border-navy-main/25 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(13,36,64,0.1)] transition-all duration-500 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-primary/5 rounded-full blur-2xl -z-0 group-hover:bg-blue-primary/10 transition-colors duration-500"></div>
    <div className="text-blue-primary p-3 mb-6 shadow-md rounded-xl bg-white border border-blue-primary/10 transform group-hover:scale-110 transition-transform duration-500">
      <img src={icon} width={28} className="relative z-10" />
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-bold mb-3 text-navy-main tracking-tight relative z-10">{title}</h3>
      <p className="text-[#4B5563] font-medium text-base leading-relaxed pr-2 relative z-10">{description}</p>
    </div>
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
            className="text-navy-main text-2xl sm:text-4xl font-semibold pt-3 pb-3"
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
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-7 items-stretch">
          <div className="h-full" data-aos="fade-up" data-aos-duration="1000">
            <ServiceCard
              icon={cloud}
              title="Virtual Servers"
              description="High-performance compute instances with flexible configurations and on-demand scalability."
            />
          </div>
          <div className="h-full" data-aos="fade-up" data-aos-duration="1200">
            <ServiceCard
              icon={sw}
              title="Container Deployment"
              description="Seamless Kubernetes and Docker orchestration to simplify your application lifecycle."
            />
          </div>
          <div className="h-full" data-aos="fade-up" data-aos-duration="1400">
            <ServiceCard
              icon={ss}
              title="System Optimization"
              description="Continuous performance tuning and resource management to keep your infrastructure running lean."
            />
          </div>
          <div className="h-full" data-aos="fade-up" data-aos-duration="1600">
            <ServiceCard
              icon={app}
              title="DevOps Support"
              description="Expert guidance and automated tools to accelerate your development and deployment pipelines."
            />
          </div>
          <div className="h-full" data-aos="fade-up" data-aos-duration="1800">
            <ServiceCard
              icon={api}
              title="API Hosting"
              description="Optimized environments for modern APIs, ensuring low latency and high reliability."
            />
          </div>
          <div className="h-full" data-aos="fade-up" data-aos-duration="2000">
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