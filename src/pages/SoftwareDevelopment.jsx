import React from "react";
import desk from "../assets/images/softwarebg1.jpg";
import graph from "../assets/images/graph.png";
import { MdDone } from "react-icons/md";
import SolutionsCard from "../components/cards/SolutionsCard";
import { CiSettings } from "react-icons/ci";
import { VscServerProcess } from "react-icons/vsc";
import { LiaBezierCurveSolid } from "react-icons/lia";
import { GoFileCode } from "react-icons/go";
import { GiWavyChains } from "react-icons/gi";
import { MdOutlineDatasetLinked } from "react-icons/md";
import SoftwareFAQ from "../components/SoftwareFAQ ";
import { SolutionsChart } from "../chart/SolutionsChart";
import { Link } from "react-router-dom";

function SoftwareDevelopment() {
  return (
    <>
      <div className="h-auto flex flex-col px-6 sm:px-6 md:px-12 lg:px-32 pt-[7%] py-12 bg-navy-main text-white relative">
        <div className="absolute inset-0 flex justify-center">
          <div className="w-[1000px] h-[800px] bg-gradient-radial from-blue-primary/40 via-navy-main to-navy-main rounded-full blur-3xl opacity-90" />
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center relative z-40 w-full pt-10">
          <h2 className="text-white text-3xl sm:text-4xl py-4 font-bold text-center" data-aos="fade-up" data-aos-duration="300">
            Your Vision, Our Code – Built Just for You
          </h2>
          <h2 className="text-base sm:text-lg text-center text-[#c9c9d2] pt-2 px-4 sm:px-20" data-aos="fade-up" data-aos-duration="300">
            We don’t just develop software—we create solutions that fit your business like a glove.
          </h2>

          <div className="w-full rounded-md p-2 mt-12 border border-[#646470] nav" data-aos="fade-up" data-aos-duration="500">
            <div className="bg-navy-main flex flex-col lg:flex-row items-center gap-10 md:gap-20 p-6 md:p-14 rounded-md">
              <div className="w-full lg:w-1/2" data-aos="fade-up" data-aos-duration="800">
                <h2 className="text-base text-blue-soft uppercase tracking-wide">Built Solutions</h2>
                <h2 className="text-3xl sm:text-4xl py-7 font-bold">Custom-Built for You <span className="lg:block">Engineered for Success</span></h2>
                <h3 className="text-base text-[#c9c9d2]">
                  We don’t believe in one-size-fits-all. Our software solutions are secure, scalable, and built to perform.
                </h3>
                <div className="mt-7">
                    <Link to="../contact">
                    <button className="text-black py-2 px-4 font-medium bg-white rounded-lg">Get started today</button>
                    </Link>
                  </div>
              </div>
              <div className="w-full lg:w-1/2" data-aos="fade-up" data-aos-duration="900">
                <img src={desk} alt="" className="w-full rounded-lg h-auto bg-cover bg-no-repeat" />
              </div>
            </div>
          </div>
        </div>

        {/* Box 1 */}
        <div className="w-full flex flex-col lg:flex-row mt-10 lg:mt-20 lg:gap-10 gap-1 relative z-20">
          <div className="w-full lg:w-1/2 py-8">
            <h2 className="text-base text-blue-soft uppercase tracking-wide" data-aos="fade-up" data-aos-duration="1200">
              We Build Exactly What You Need
            </h2>
            <h2 className="text-2xl text-white py-5 font-bold" data-aos="fade-up" data-aos-duration="1300">
              No Templates. Just Tailor-Made Brilliance
            </h2>
            <h3 className="text-base pr-4 text-[#94949e]" data-aos="fade-up" data-aos-duration="1400">
              Your business is unique, and your software should be too.
            </h3>
            <ul className="mt-9 leading-6 ">
              {[
                { title: "Customized solutions", desc: "Fully tailored software, built from scratch to fit your needs" },
                { title: "No generic templates", desc: "No bloated features—only what truly benefits your business." },
                { title: "Brilliant results", desc: "Scalable architecture that grows as you do." }
              ].map((item, index) => (
                <li key={index} className="py-2" data-aos="fade-right" data-aos-duration={`${1200 + index * 200}`}>
                  <span className="flex gap-2 items-center">
                    <MdDone size={20} />
                    <h2 className="text-md font-medium text-[#FFFFFF]">{item.title}</h2>
                  </span>
                  <h3 className="pl-7 text-[#94949e]">{item.desc}</h3>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/2 bg-navy-main p-6 md:p-14 rounded-md">
            <div className="w-full h-full rounded-md bg-[#ffffff0d]" data-aos="fade-up" data-aos-duration="1300">
              <div className="pt-10 px-5">{<SolutionsChart />}</div>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="w-full flex flex-col lg:flex-row lg:mt-32 mt-12 lg:gap-20 gap-4  relative z-20">
          <div className="w-full lg:w-1/2 bg-navy-main p-6 md:p-14 rounded-md">
            <div className="w-full h-full rounded-md bg-[#ffffff0d]" data-aos="fade-up" data-aos-duration="1300">
              <div className="text-white flex flex-col p-4 rounded-2xl">
                <div className="flex flex-col sm:flex-row gap-10 mt-8 justify-center items-center">
                  <img src={graph} alt="" data-aos="fade-up" data-aos-duration="1400" />
                  <div className="space-y-1 text-sm w-full">
                    {[
                      { label: "Positive", color: "bg-blue-primary", percent: "50.8%" },
                      { label: "Others", color: "bg-gray-300", percent: "59.8%" },
                      { label: "Negative", color: "bg-gray-500", percent: "17.77%" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="flex items-center">
                          <span className={`w-3 h-3 rounded-full ${item.color} mr-2`} /> {item.label}
                        </span>
                        <span>{item.percent}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12 py-8">
            <h2 className="text-base text-blue-soft uppercase tracking-wide" data-aos-duration="1200" data-aos="fade-up">
              Seamless User Experience, Every Time
            </h2>
            <h2 className="text-2xl text-white py-5 font-bold" data-aos="fade-up" data-aos-duration="1300">
              Because Great Software Feels Effortless
            </h2>
            <h3 className="text-base text-[#94949e]" data-aos="fade-up" data-aos-duration="1400">
              We build software that’s not just powerful but also intuitive.
            </h3>
            <ul className="text-sm mt-9 leading-6">
              {[
                { title: "Intuitive design", desc: "Intuitive interfaces designed for maximum ease of use." },
                { title: "Constant improvement", desc: "Lightning-fast performance for smooth interactions." },
                { title: "Seamless user experience", desc: "Sleek, modern designs that keep users engaged." }
              ].map((item, index) => (
                <li key={index} className="py-3" data-aos="fade-right" data-aos-duration={`${1200 + index * 200}`}>
                  <span className="flex gap-2 items-center">
                    <MdDone size={20} />
                    <h2 className="text-md font-medium text-[#FFFFFF]">{item.title}</h2>
                  </span>
                  <p className="pl-7 text-[#94949e]">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Grid Section */}
        <section>
          <div className="w-full flex flex-col items-center relative z-40 mt-12 lg:mt-32">
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-center px-4 sm:px-16" data-aos="fade-up" data-aos-duration="1300">
              Unified platform integrating all essential features for seamless functionality
            </h2>
            <h3 className="text-base sm:text-lg text-center leading-6 pt-7 text-[#94949e]" data-aos="fade-up" data-aos-duration="1400">
              Discover a range of meticulously crafted solutions to drive your <br className="hidden sm:block" /> business growth.
            </h3>
            <div className="mt-9 w-full relative z-40">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 pt-6 lg:pt-16">
                <SolutionsCard title="Scalability optimization" para="Our scalability solutions analyze your current infrastructure." icon={<CiSettings />} />
                <SolutionsCard title="Process automation" para="Streamline your workflows and reduce manual tasks." icon={<VscServerProcess />} />
                <SolutionsCard title="Solid planning" para="Get free access to our global partner network." icon={<LiaBezierCurveSolid />} />
                <SolutionsCard title="Training and development" para="Enhance employee skills and boost performance." icon={<GoFileCode />} />
                <SolutionsCard title="Supply chain optimization" para="Leverage data analytics and predictive algorithms." icon={<GiWavyChains />} />
                <SolutionsCard title="Data integration" para="Unify data sets for real-time insights and decisions." icon={<MdOutlineDatasetLinked />} />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <SoftwareFAQ />
        </section>
      </div>
    </>
  );
}

export default SoftwareDevelopment;