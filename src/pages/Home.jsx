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
import db from "../assets/images/Futuristic cloud management dashboard display.png";
import hero from "../assets/images/bg.jpg";
import Switchbutton from "../components/SwitchButton";
import Cybersecurity from "../components/CyberSecurity";
import Testimonial from "../components/Testimonial";
import CTA from "../components/CTA";
import { Link } from "react-router-dom";

// ..
AOS.init();

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
    {/* <div>
      <ContainerScroll titleComponent={<h1 className="text-4xl font-bold">Your Title Here</h1>}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rf6eeEPP1jJiQzkINQJKYr7cFLRm9LSWhw&s" alt="Description" className="w-full h-auto" />
      </ContainerScroll>
    </div> */}

        {/* video */}
        <section className="bg-navy-main relative h-[100vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <CloudNetworkBackground />
      </div>

      <div className={`${style.video_bg} relative z-10 flex flex-col justify-between items-center h-screen text-center px-4 pt-28 gap-[105px] pb-10 `}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl pt-12" style={{fontWeight: 500, color: "rgb(188, 186, 186)"}} >
          Power Your <span className="text-blue-primary">Infrastructure</span> with <br className="hidden sm:block" /> Reliable Cloud Solutions
        </h2>

        <div className="">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl leading-tight font-semibold">
            Deploy Faster, <span className="text-blue-primary">Scale Smarter</span><br className="hidden sm:block" />
            Stay Secure with <span className="text-blue-primary">Enterprise Cloud</span>
          </h2>
         <Link to="contact">
         <button className="text-base sm:text-lg md:text-xl rounded-md text-white mt-6 border-2 border-blue-primary px-6 py-2 hover:bg-blue-primary hover:shadow-[0_0_15px_rgba(46,94,153,0.5)] transition-all duration-300">
            Get Started
          </button>
         </Link>
        </div>
      </div>
    </section>


    <section className={style.hero_section}>
      <div className={style.hero_bg}>
        <img src={hero} className="w-full object-cover h-auto" />

        <div className="absolute top-24 md:top-36 left-0 w-full px-4 sm:px-16 lg:px-32 text-white">
          <div className="flex flex-col lg:flex-row lg:gap-8">
            {/* Left Side */}
            <div className="w-full md:full lg:w-3/4">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl pt-5 leading-relaxed md:leading-tight font-bold"
                data-aos="fade-up"
                data-aos-duration="500"
              >
               Complete Control Over Your Cloud Infrastructure
              </h1>
            </div>

            {/* Right Side */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between lg:pl-16">
              <h2
                className="text-sm sm:text-base md:text-lg text-[#c9c9d2]"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                Monitor, manage, and scale your infrastructure in real-time with powerful and intuitive dashboards.
              </h2>
              <div
                className="mt-6 md:mt-10"
                data-aos="fade-up"
                data-aos-duration="700"
              >
               <Link to="contact">
               <button className="bg-white text-[#0D2440] px-6 py-3 rounded-md w-full sm:w-fit font-semibold hover:bg-blue-subtle transition-colors">
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
    <section className="bg-[#0D2440] py-20 md:py-28 px-4 sm:px-8 md:px-16 h-auto">
      <div className="text-center text-[#F7F7F8]">
        <h1 className="hidden md:block font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight">
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
        <h1 className="block md:hidden font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight">
          Your Digital Presence Is Your Asset
        </h1>
        <p
          className="text-[#94949e] text-sm sm:text-md md:text-lg lg:text-xl pt-6 md:pt-10 font-semibold max-w-2xl mx-auto"
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
        <h2 className="text-[#94949e] text-sm sm:text-base font-semibold mb-6 uppercase tracking-[0.2em]" data-aos="fade-up">
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
                    <h2 className="text-sm sm:text-lg px-2 font-semibold transition-all duration-300 text-[#94949e]">
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






    {/* Reputation Defender */}
    <section className=" z-50  relative" style={{backgroundImage: "linear-gradient(180deg, #0D2440 0%, #2E5E99, #E7F0FA 100%)"}}>
      <div className="text-center px-8 sm:px-6 md:px-10 lg:px-32">
        <h1
          className="font-bold text-2xl sm:text-3xl lg:text-5xl text-[#fff]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Infrastructure Capabilities
        </h1>
        <p
          className="text-[#fff] text-base sm:text-lg font-normal pt-6 sm:pt-8 lg:py-4 lg:px-32"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Built for Performance, Security & Scale. Our enterprise-grade 
          infrastructure solutions empower you with total control and reliability.
        </p>
      </div>

          <div className="pt-14 pb-10 sm:pt-12   lg:pt-16 px-5 sm:px-6 md:px-10 lg:px-32  reputation_bg">
            
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


    <section  className="hidden lg:block">
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