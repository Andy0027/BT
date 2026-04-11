import React from "react";
import desk from "../assets/images/orm_bg.jpg";
import graph from "../assets/images/graph.png";
import { MdDone } from "react-icons/md";
import SolutionsCard from "../components/cards/SolutionsCard";
import ORMFAQ from "../components/ORMFAQ ";
import { MdOutlineVerified } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { SiCrowdsource } from "react-icons/si";
import { FaConnectdevelop } from "react-icons/fa";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function ORM() {
  const data = [
    { name: "Authenticity", value: 48345 },
    { name: "Consistency", value: 47000 },
    { name: "Accountability", value: 45798 },
    { name: "Quality", value: 45798 },
  ];

  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <>
      <div className="h-auto flex flex-col  px-6 sm:px-6 md:px-16 lg:px-32 pt-[7%] py-12 bg-navy-main text-white relative">
        {/* Banner */}
        <section>
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[1000px] h-[800px] bg-gradient-radial from-blue-primary/40 via-navy-main to-navy-main rounded-full blur-3xl opacity-90" />
          </div>

          <div className="flex flex-col  items-center relative z-40 w-full pt-10">
            <h2 className="text-white text-3xl sm:text-4xl py-4 font-bold text-center" data-aos="fade-up" data-aos-duration="300">
              Reputation Management Services for a Digital World
            </h2>
            <h2 className="text-base sm:text-lg text-center text-[#c9c9d2] pt-2" data-aos="fade-up" data-aos-duration="300">
              Take control of your digital narrative with reputation management
              solutions <br className="hidden sm:block" />
              that boost visibility and build trust.
            </h2>

            <div className="w-full rounded-md p-2 mt-12 border border-[#646470] nav" data-aos="fade-up" data-aos-duration="500">
              <div className="bg-navy-main flex flex-col p-6 sm:flex-col    lg:flex-row lg:items-center gap-10 lg:gap-20  lg:p-14 rounded-md ">
                <div className="w-full sm:w-full  lg:w-1/2 h-full" data-aos="fade-up" data-aos-duration="800">
                  <h2 className="text-base text-blue-soft  uppercase tracking-wide">Increases Credibility</h2>
                  <h2 className="text-3xl sm:text-4xl py-7 font-bold">In the digital age, reputation is the ultimate differentiator</h2>
                  <h3 className="text-base text-[#c9c9d2]">
                    At Brilliant Technologies, we understand the significance of maintaining a
                    positive online reputation. In today's digital landscape, a
                    single negative review or comment can impact our credibility
                    and bottom line.
                  </h3>
                  <div className="mt-7">
                    <Link to="../contact">
                    <button className="text-black py-2 px-4 font-medium bg-white rounded-lg">Get started today</button>
                    </Link>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 h-full border-4 rounded-lg border-navy-main transition-colors" data-aos="fade-up" data-aos-duration="900">
                  <img src={desk} alt="" className="w-full rounded-lg lg:h-72 bg-cover bg-no-repeat" />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="w-full flex flex-col lg:flex-row lg:mt-20 mt-7 gap-10 relative z-20">
            <div className="w-full lg:w-1/2 py-8">
              <h2 className="text-base text-blue-soft uppercase tracking-wide" data-aos="fade-up" data-aos-duration="1200">Reputation Repair</h2>
              <h2 className="text-2xl text-white py-5 font-bold" data-aos="fade-up" data-aos-duration="1300">
                Suppress Negative Google Results and Shine Online
              </h2>
              <h3 className="text-base text-[#94949e]" data-aos="fade-up" data-aos-duration="1400">
                Our expert team helps suppress harmful content, ensuring your online presence shines.
              </h3>

              <ul className="mt-9 leading-6">
                {[
                  { title: "Long-term results", desc: "Achieve lasting reputation improvements" },
                  { title: "Expert support", desc: "Partner with reputation management experts" },
                  { title: "Protect your brand", desc: "Safeguard your brand online with proactive protection" },
                ].map((item, index) => (
                  <li key={index} className={index !== 0 ? "py-4" : ""} data-aos="fade-right" data-aos-duration={`${1200 + index * 200}`}>
                    <span className="flex gap-2 items-center">
                      <MdDone size={20} />
                      <h2 className="text-md font-medium text-[#FFFFFF]">{item.title}</h2>
                    </span>
                    <h3 className="pl-7 text-[#94949e]">{item.desc}</h3>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full lg:w-1/2 bg-navy-main border border-[#FFFFFF0D] p-6 md:p-14 rounded-md">
              <div className="w-full h-full rounded-md bg-[#ffffff0d]" data-aos="fade-up" data-aos-duration="1300">
                <div className="text-white flex flex-col p-4 rounded-2xl">
                  <div className="flex flex-col sm:flex-col lg:flex-row lg:pt-16  gap-10 mt-8 justify-center items-center">
                    <img src={graph} alt="" data-aos="fade-up" data-aos-duration="1400" />
                    <div className="space-y-1 text-sm w-full">
                      {[
                        { label: "Positive", color: "bg-blue-primary", percent: "50.8%" },
                        { label: "Others", color: "bg-gray-300", percent: "59.8%" },
                        { label: "Negative", color: "bg-gray-500", percent: "17.77%" },
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
          </div>

          {/* Section 3 */}
          <div className="w-full flex flex-col-reverse lg:flex-row mt-4 lg:mt-32 gap-20 relative z-20">
            <div className="w-full lg:w-1/2 bg-navy-main border border-[#FFFFFF0D] p-6 md:p-14 rounded-md">
              <div className="w-full h-full rounded-md bg-[#ffffff0d]" data-aos="fade-up" data-aos-duration="1300">
                <div className="text-white flex flex-col py-16 px-6 rounded-2xl">
                  <h2 className="text-lg font-semibold mb-6">Brand Integrity Matters:</h2>
                  {data.map((item, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">{item.name}</span>
                        <span className="text-sm font-medium">{item.value.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-800 h-4 rounded">
                        <div
                          className="bg-blue-primary h-4 rounded"
                          style={{ width: `${(item.value / maxValue) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 pl-0 lg:pl-12 py-8">
              <h2 className="text-base text-blue-soft uppercase tracking-wide" data-aos="fade-up" data-aos-duration="1200">Brand Integrity</h2>
              <h2 className="text-2xl text-white py-5 font-bold" data-aos="fade-up" data-aos-duration="1300">
                Align Your Brand Promise with a Stellar Reputation
              </h2>
              <h3 className="text-base text-[#94949e]" data-aos="fade-up" data-aos-duration="1400">
                Align your brand promise with a stellar reputation to build trust and loyalty.
              </h3>

              <ul className="text-sm mt-9 leading-6">
                {[
                  {
                    title: "Build trust and loyalty",
                    desc: "Consistency between promise and reputation fosters strong relationships.",
                  },
                  {
                    title: "Establish credibility",
                    desc: "A strong reputation reinforces your brand's promise and expertise.",
                  },
                  {
                    title: "Drive business success",
                    desc: "Aligning promise and reputation drives customer loyalty, retention, and growth.",
                  },
                ].map((item, index) => (
                  <li key={index} className={index !== 0 ? "py-3" : ""} data-aos="fade-right" data-aos-duration={`${1200 + index * 200}`}>
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
        </section>

        {/* Grid section */}
        <section>
          <div className="w-full flex flex-col items-center relative z-40 mt-14 lg:mt-32">
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-center px-4 sm:px-8" data-aos="fade-up" data-aos-duration="1300">
              Manage your online presence with confidence using our advanced<br className="hidden sm:block" /> Reputation Management Services
            </h2>
            <h3 className="text-base sm:text-lg text-center leading-6 pt-7 text-[#94949e]" data-aos="fade-up" data-aos-duration="1400">
              Protect and promote your online reputation with our <br className="hidden sm:block" /> expert management solutions
            </h3>

            <div className="mt-9 w-full relative z-40">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 pt-16 lg:pr-1 sm:pr-12 lg:pt-14">
                <SolutionsCard
                  title="Reputation Audit"
                  para="Analyze, protect, and promote your online reputation with our customized strategies"
                  icon={<MdOutlineVerified />}
                />
                <SolutionsCard
                  title="Brand Asset Building"
                  para="We identify and optimize your online assets, creating a framework for posting positive content."
                  icon={<FaRegBuilding />}
                />
                <SolutionsCard
                  title="Cross-Channel Reviews"
                  para="Cross-channel reviews Collecting feedback from social media, reviews, and e-commerce sites."
                  icon={<SiCrowdsource />}
                />
                <SolutionsCard
                  title="Content Development"
                  para="We create optimized content to strengthen your online presence and dominate Google searches."
                  icon={<FaConnectdevelop />}
                />
                <SolutionsCard
                  title="Media Publishing"
                  para="We publish your content on top sites, boosting visibility and amplifying your brand message."
                  icon={<MdOutlinePublishedWithChanges />}
                />
                <SolutionsCard
                  title="Awareness Campaigns"
                  para="We amplify your brand through multi-channel promotion, reaching the widest audience possible."
                  icon={<IoPeopleOutline />}
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <ORMFAQ />
        </section>
      </div>
    </>
  );
}

export default ORM;