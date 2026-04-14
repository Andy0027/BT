import React from "react";
import CloudNetworkBackground from "../components/CloudNetworkBackground";
import ScrollAnimation from "../components/ScrollAnimation";
import { ContainerScroll } from "../components/ContainerScroll";
import { Typewriter } from "react-simple-typewriter";
import AssetCard from "../components/cards/AssetCard";
import { MdCloudQueue, MdStorage, MdNetworkCheck } from "react-icons/md";
import { IoCodeSlashOutline } from "react-icons/io5";
import { SiWebauthn } from "react-icons/si";
import Pie from "../chart/Pie";
import Marquee from "react-fast-marquee";
import { toolitems } from "../data/Alldata";
import AOS from "aos";
import "aos/dist/aos.css";
import style from "../styles/home.module.css";
import About from "../components/About";
import { BarChart } from "../chart/BarChart";
import { GradientChart } from "../chart/GradientChart";
import { LineChart } from "../chart/LineChart";
import SoftwareSolution from "../components/SoftwareSolution";
import Newsletter from "../components/Newsletter";
import db from "../assets/images/Brilliant-Technologies-cloud-dashboard.jpeg";
import hero from "../assets/images/bg.jpg";
import Switchbutton from "../components/SwitchButton";
import Cybersecurity from "../components/CyberSecurity";
import Testimonial from "../components/Testimonial";
import CTA from "../components/CTA";
import { Link } from "react-router-dom";

import HeroInfraVisual from "../components/HeroInfraVisual";

function Home() {
  AOS.init();

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

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <main>
        {/* video */}
        <section className="bg-navy-main relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <CloudNetworkBackground />
      </div>

      <div className={`${style.video_bg} relative z-10 flex flex-col justify-center items-center h-screen text-center px-4 pt-16 pb-16 gap-12`}>
        <div data-aos="fade-down" data-aos-duration="1000">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style={{fontWeight: 500, color: "rgb(220, 220, 225)"}} >
            Power Your <span className="text-blue-primary">Infrastructure</span> with <br className="hidden sm:block" /> Reliable Cloud Solutions
          </h2>
        </div>

        <div className="w-full max-w-2xl" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="500">
          <HeroInfraVisual />
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl leading-tight font-bold mb-8">
            Deploy Faster, <span className="text-blue-primary">Scale Smarter</span><br className="hidden sm:block" />
            Stay Secure with <span className="text-blue-primary">Enterprise Cloud</span>
          </h2>
         <Link to="contact">
          <button className="text-base sm:text-lg md:text-xl rounded-full text-white border border-white/20 bg-blue-primary/10 backdrop-blur-sm px-8 py-3 hover:bg-white hover:text-blue-primary hover:border-white hover:shadow-2xl transition-all duration-300 font-bold tracking-wide">
            Get Started
          </button>
         </Link>
        </div>
      </div>
    </section>


    <section className="relative overflow-hidden bg-navy-main pt-20 md:pt-0">
      <div className="relative w-full h-auto min-h-[500px] md:min-h-[600px] flex items-center">
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-primary/5 via-transparent to-transparent opacity-50" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-primary/5 rounded-full blur-[100px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-primary/5 rounded-full blur-[100px] -ml-64 -mb-64" />
        
        
        <div className="relative z-10 w-full px-6 sm:px-16 lg:px-32 text-white py-20 md:py-0">
          <div className="flex flex-col lg:flex-row lg:gap-12 items-center lg:items-start text-center lg:text-left">
            {/* Left Side */}
            <div className="w-full lg:w-3/5">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6"
                data-aos="fade-up"
                data-aos-duration="500"
              >
               Complete Control Over Your Cloud Infrastructure
              </h1>
            </div>

            {/* Right Side */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center lg:pt-10">
              <h2
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-10"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                Monitor, manage, and scale your infrastructure in real-time with powerful and intuitive dashboards.
              </h2>
              <div
                className="flex justify-center lg:justify-start"
                data-aos="fade-up"
                data-aos-duration="700"
              >
               <Link to="contact" className="w-full sm:w-fit">
                <button className="bg-white text-[#0D2440] px-10 py-4 rounded-full w-full font-bold border border-white/80 shadow-lg hover:shadow-2xl hover:bg-blue-primary hover:text-white hover:border-blue-primary transition-all duration-300 text-lg">
                  Launch Platform
                </button>
               </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DB Image Section */}
      <div
        className={`${style.db_image} px-4 sm:px-8 md:px-0 mt-6 md:mt-0`}
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <img
          src={db}
          className="rounded-lg  w-full max-w-screen-xl mx-auto"
          alt="dashboard"
        />
      </div>

      <div className={style.gradient}></div>
    </section>
    {/* your digital */}
    <section className="bg-blue-light-1 py-20 md:py-28 px-4 sm:px-8 md:px-16 h-auto">
      <div className="text-center text-navy-main">
        <h1 className="hidden md:block font-semibold text-2xl sm:text-3xl lg:text-4xl leading-tight text-navy-main">
          Your Digital{" "}
          <span className="block sm:inline">
            <Typewriter
              words={["Presence", "Infrastructure"]}
              loop={true}
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
            />
          </span> <span className="block sm:inline">Is Your Asset</span>
        </h1>
        <h1 className="block md:hidden font-semibold text-2xl sm:text-3xl lg:text-4xl leading-tight text-navy-main">
          Your Digital Presence Is Your Asset
        </h1>
        <p
          className="text-[#4B5563] text-sm sm:text-md md:text-lg lg:text-xl pt-6 md:pt-10 font-medium max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Scalable, Secure, and High-Performance IaaS Solutions
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 pt-12 px-2 md:pt-16">
        <div data-aos="fade-up" data-aos-duration="1000">
          <AssetCard
            title="Cloud Compute"
            para="Deploy virtual machines with flexible configurations and on-demand scalability."
            icon={<MdCloudQueue />}
            btnText="Explore More"
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="1200">
          <AssetCard
            title="Storage Solutions"
            para="Secure and scalable storage designed to handle growing data needs effortlessly."
            icon={<MdStorage />}
            btnText="Explore More"
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
          <AssetCard
            title="Network Infrastructure"
            para="High-performance networking with low latency and reliable connectivity."
            icon={<MdNetworkCheck />}
            btnText="Explore More"
          />
        </div>
      </div>

      <div className="pt-14 flex flex-col items-center overflow-hidden">
        <h2 className="text-[#94949e] text-sm sm:text-base font-medium mb-6 uppercase tracking-[0.2em]" data-aos="fade-up">
          Trusted Cloud Technologies
        </h2>
        <div className={`${style.marqueeBg} w-full pt-4`}>
          <div data-aos="zoom-out-up" data-duration="100">
            <Marquee>
              <div className="flex gap-6 sm:gap-8 md:gap-11">
                {toolitems.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center px-4 sm:px-6 transition-all duration-300 grayscale hover:grayscale-0"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-8 sm:w-10 transition-all duration-300"
                    />
                    <h2 className="text-sm sm:text-lg px-2 font-semibold transition-all duration-300 text-[#64748B]">
                      {item.name}
                    </h2>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>






    {/* Infrastructure Capabilities */}
    <section className=" z-50  relative" style={{backgroundImage: "linear-gradient(180deg, #F1F7FE 0%, #E7F0FA 100%)"}}>
      <div className="text-center px-8 sm:px-6 md:px-10 lg:px-32">
        <h1
          className="font-medium text-2xl sm:text-3xl lg:text-5xl text-navy-main"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Infrastructure Capabilities
        </h1>
        <p
          className="text-[#4B5563] text-base sm:text-lg font-normal pt-6 sm:pt-8 lg:py-4 lg:px-32"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Built for Performance, Security & Scale. Our enterprise-grade 
          infrastructure solutions empower you with total control and reliability.
        </p>
      </div>

          <div className="pt-14 pb-10 sm:pt-12   lg:pt-16 px-5 sm:px-6 md:px-10 lg:px-32  capabilities_bg">
            
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-6  lg:gap-10">
              <div data-aos="fade-up" data-aos-duration="1000">
                <ScrollAnimation
                  title="Enable"
                  spanTitle="Auto Scaling"
                  para="Automatically scale resources based on traffic demands, ensuring performance and cost-efficiency."
                  chartItem={<Pie />}
                />
              </div>
              <div data-aos="fade-up" data-aos-duration="1300">
                <ScrollAnimation
                  title="Ensure"
                  spanTitle="High Availability"
                  para="Maximize uptime with distributed infrastructure and multi-region deployment strategies."
                  chartItem={<BarChart />}
                />
              </div>
              <div data-aos="fade-up" data-aos-duration="1500">
                <ScrollAnimation
                  title="Automated"
                  spanTitle="Data Backup"
                  para="Secure your critical data with automated incremental and full backup solutions across all regions."
                  chartItem={<GradientChart />}
                />
              </div>
              <div data-aos="fade-up" data-aos-duration="1700">
                <ScrollAnimation
                  title="Real-time"
                  spanTitle="Monitoring & Analytics"
                  para="Gain deep insights into your system performance with advanced real-time monitoring and analytics."
                  chartItem={<LineChart />}
                />
              </div>
            </div>
          </div>
    </section>


    <section>
      <SoftwareSolution />
    </section>
    <section>
      <Cybersecurity />
    </section>

    <section>
      <About />
    </section>


    <section className="px-6 sm:px-10 lg:px-32 py-10">
      <CTA />
    </section>
    <section>
      <Testimonial />
    </section>
    <section>
      <Newsletter />
    </section>
    <section>
      <Switchbutton />
    </section>
  </main>
  );
}

export default Home;