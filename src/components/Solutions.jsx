import React from "react";
import desk from "../assets/images/bannerbg2.png";
import { TiTick } from "react-icons/ti";
import graph from "../assets/images/graph.png";
import SolutionsCard from "./cards/SolutionsCard";
import { MdAutoGraph, MdDone } from "react-icons/md";
import { IoCodeSlashOutline } from "react-icons/io5";
import { SiWebauthn } from "react-icons/si";

const Solutions = () => {
  return (
    <>
      <div className=" h-auto flex flex-col px-32 pt-[7%] py-12  bg-navy-main text-white relative ">
        <div className="absolute inset-0 flex   justify-center">
          <div className="w-[1000px] h-[800px] bg-gradient-radial from-blue-primary/40 via-navy-main to-navy-main rounded-full blur-3xl opacity-90" />
        </div>
        <div className=" flex flex-col items-center   relative z-40 w-full pt-10">
          <h2 className="text-white text-4xl py-4 font-bold text-center" data-aos="fade-up"
     data-aos-duration="300">
            Reputation Management Services for a Digital World
          </h2>
          <h2 className="text-lg text-center text-[#c9c9d2] pt-2" data-aos="fade-up"
     data-aos-duration="300">
            Take control of your digital narrative with reputation management
            solutions
            <br /> that boost visibility and build trust.
          </h2>

          <div className=" h-full w-full rounded-md p-2 mt-12 border border-[#646470] nav " data-aos="fade-up"  data-aos-duration="500">
            <div className="h-full w-full bg-navy-main flex gap-32 p-14   rounded-md" >
              <div className="w-[50%]  h-full" data-aos="fade-up"
     data-aos-duration="800">
                <h2 className="text-base text-blue-soft uppercase tracking-wide">
                  Increases Credibility
                </h2>
                <h2 className="text-4xl py-7 font-bold pr-0">
                  In the digital age, reputation is the ultimate differentiator
                </h2>
                <h3 className="text-base  text-[#c9c9d2]">
                  At Brilliant Technologies, we understand the significance of maintaining a
                  positive online reputation. In today's digital landscape, a
                  single negative review or comment can impact our credibility
                  and bottom line. That's why we prioritize online reputation
                  management and other online platforms to ensure our brand is
                  represented accurately and favorably
                </h3>
                <div className=" mt-7">
                  <button className="text-black py-2 px-4 font-medium bg-white rounded-lg">
                    Get started today{" "}
                  </button>
                </div>
              </div>
              <div className="w-[60%]  h-full" data-aos="fade-up" data-aos-duration="900">
                <img
                  src={desk}
                  alt=""
                  className="w-full  rounded-lg h-full bg-cover bg-no-repeat"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex mt-20 gap-10  relative z-20  ">
          <div className="w-1/2 h-full py-8">
            <h2 className="text-base  text-blue-soft uppercase tracking-wide" data-aos="fade-up" data-aos-duration="1200">Reputation Repair</h2>
            <h2 className="text-2xl text-white py-5 font-bold" data-aos="fade-up" data-aos-duration="1300">
            Suppress Negative Google Results and Shine Online
            </h2>
            <h3 className="text-base pr-12 text-[#94949e]" data-aos="fade-up" data-aos-duration="1400">
            Our expert team helps suppress harmful content, ensuring your online presence shines. Restore your reputation, rebuild trust, and rise above the noise
            </h3>

            <ul className=" mt-9 leading-6 pl-3">
              <li data-aos="fade-right" data-aos-duration="1200">
                <span className="flex gap-2 items-center">
                    <MdDone size={20}/>
                  <h2 className=" text-md font-medium text-[#FFFFFF]">Long-term results</h2>
                </span>
                <h3 className="pl-7 text-[#94949e]">
                Achieve lasting reputation improvements
                </h3>
              </li>
              <li className="py-4" data-aos="fade-right" data-aos-duration="1400">
                <span className="flex gap-2 items-center">
                    <MdDone size={20}/>
                  <h2 className=" text-md font-medium text-[#FFFFFF]">Expert support</h2>
                </span>
                <h3 className="pl-7 text-[#94949e]">
                Partner with reputation management experts
                </h3>
              </li>
              <li data-aos="fade-right" data-aos-duration="1600">
              <span className="flex gap-2 items-center">
                <MdDone size={20}/>
                  <h2 className=" text-md font-medium text-[#FFFFFF]">Protect your brand</h2>
                </span>
                <h3 className="pl-7 text-[#94949e]">
                Safeguard your brand online with proactive protection
                </h3>
              </li>
            </ul>
          </div>
          <div className="w-1/2 h-[] bg-navy-main border border-[#FFFFFF0D] p-14 rounded-md">
            <div className=" w-full h-full rounded-md bg-[#ffffff0d] " data-aos="fade-up" data-aos-duration="1300">
              <div className=" text-white flex flex-col  p-4 rounded-2xl ">
                <div className="flex gap-10 mt-8 justify-center items-center">
                  <img src={graph} alt="" data-aos="fade-up" data-aos-duration="1400"/>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center justify-between" data-aos="fade-up" data-aos-duration="1400">
                      <span className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-blue-primary mr-2" />{" "}
                        Positive
                      </span>
                      <span>50,8%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-gray-300 mr-2" />{" "}
                        Others
                      </span>
                      <span>59,8%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-gray-500 mr-2" />{" "}
                        Negative
                      </span>
                      <span>17,77%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex mt-32 gap-20 relative z-20   ">
          <div className="w-1/2 h-[] bg-navy-main border border-[#FFFFFF0D] p-14 rounded-md">
            <div className=" w-full h-full rounded-md bg-[#ffffff0d] " data-aos="fade-up" data-aos-duration="1300">
              <div className=" text-white flex flex-col  p-4 rounded-2xl ">
                <h2 className="text-lg font-semibold mb-4"></h2>
                <div className="flex gap-10 mt-8 justify-center items-center">
                  <img src={graph} alt="" data-aos="fade-up" data-aos-duration="1400"/>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-blue-primary mr-2" />{" "}
                        Positive
                      </span>
                      <span>50,8%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-gray-300 mr-2" />{" "}
                        Others
                      </span>
                      <span>59,8%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-gray-500 mr-2" />{" "}
                        Negative
                      </span>
                      <span>17,77%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full pl-12 py-8">
          <h2 className="text-base  text-blue-soft uppercase tracking-wide" data-aos="fade-up" data-aos-duration="1200">Brand Integrity</h2>
          <h2 className="text-2xl text-white py-5 font-bold" data-aos="fade-up" data-aos-duration="1300">
            Align Your Brand Promise with a Stellar Reputation
            </h2>
            <h3 className="text-base pr-12 text-[#94949e]" data-aos="fade-up" data-aos-duration="1400">
            Align your brand promise with a stellar reputation to build trust and loyalty, and reflect your values online.
            </h3>

            <ul className="text-sm mt-9 leading-6 pl-3">
            <li data-aos="fade-right" data-aos-duration="1200">
              <span className="flex gap-2 items-center">
                <MdDone size={20}/>
                  <h2 className="text-md font-medium text-[#FFFFFF]">Build trust and loyalty</h2>
                </span>
                <p className="pl-7 text-[#94949e]">
                Consistency between promise and reputation fosters strong relationships.
                </p>
              </li>
              <li className="py-3"data-aos="fade-right" data-aos-duration="1400">
              <span className="flex gap-2 items-center">
                <MdDone size={20}/>
                  <h2 className="text-md font-medium text-[#FFFFFF]">Establish credibility</h2>
                </span>
                <p className="pl-7 text-[#94949e]">
                A strong reputation reinforces your brand's promise and expertise.
                </p>
              </li>
              <li data-aos="fade-right" data-aos-duration="1600">
              <span className="flex gap-2 items-center">
              <MdDone size={20}/>
                  <h2 className="text-md font-medium text-[#FFFFFF]">Drive business success</h2>
                </span>
                <p className="pl-7 text-[#94949e]">
                Aligning promise and reputation drives customer loyalty, retention, and growth.
                </p>
              </li>
            </ul>
          </div>
        </div>


        {/* grid section */}
        <section>
          <div className="w-full flex flex-col items-center relative z-40 mt-32">
            <h2 className="text-3xl font-bold leading-tight text-center px-16"  data-aos="fade-up" data-aos-duration="1300">
            Manage your online presence with confidence using our advanced reputation management services
            </h2>
            <h3 className="text-lg text-center leading-6 pt-7 text-[#94949e]"  data-aos="fade-up" data-aos-duration="1400">
            Protect and promote your online reputation with our <br/>expert management solutions
            </h3>

            <div className="mt-9 h-full  relative z-40 w-full">
              <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-14 pt-16 lg:pt-14">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <SolutionsCard
                    title="Reputation Audit"
                    para="We analyze your online reputation, identify threats, and create a customized strategy to protect and promote your brand."
                    icon={<MdAutoGraph />}
                  />
                </div>
                <div data-aos="fade-up" data-aos-duration="1200">
                  <SolutionsCard
                    title="Brand Asset Building"
                    para="We identify and optimize your online assets, creating a framework for posting positive content and building your online presence."
                    icon={<IoCodeSlashOutline />}
                  />
                </div>
                <div data-aos="fade-up" data-aos-duration="1500">
                  <SolutionsCard
                    title="Cross-Channel Reviews"
                    para="Get a 360º view of your brand with our AI-driven platform, combining internal and external data from hundreds of sources."
                    icon={<SiWebauthn />}
                  />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <SolutionsCard
                    title="Content Development"
                    para="We create optimized content to strengthen your online presence and dominate Google searches."
                    icon={<MdAutoGraph />}
                  />
                </div>
                <div data-aos="fade-up" data-aos-duration="1200">
                  <SolutionsCard
                    title="Media Publishing"
                    para="We publish your content on top sites, boosting visibility and amplifying your brand message."
                    icon={<IoCodeSlashOutline />}
                  />
                </div>
                <div data-aos="fade-up" data-aos-duration="1500">
                  <SolutionsCard
                    title="Awareness Campaigns"
                    para="We amplify your brand through multi-channel promotion, reaching the widest audience possible."
                    icon={<SiWebauthn />}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


          {/* faq   */}
      
      </div>
    </>
  );
};

export default Solutions;
