import React, { useState } from "react";
import aboutimg from "../assets/images/software_development_team.png";
import SquareCard from "../components/cards/SquareCard";
import Newsletter from "../components/Newsletter";
import companybannner from "../assets/images/companybanner.png";
import CompanyFAQ from "../components/CompanyFAQ ";
import { CiDatabase } from "react-icons/ci";
import { FaRegFileCode } from "react-icons/fa";
import { AiOutlineNodeCollapse } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

const Company = () => {
  const [show, Setshow] = useState(false);
  const [selected, setSelected] = useState(1);

  const toggleCompany = (index) => {
    Setshow(show === index ? null : index);
  };

  const aboutdata = [
    {
      id: 1,
      title: "Mission",
      heading: "Empowering Businesses with Next-Gen Security & Technology",
      paragraph:
        "At Brilliant Technologies, our mission is to build cutting-edge cybersecurity and software solutions that empower businesses to operate fearlessly in a digital world.",
    },
    {
      id: 2,
      title: "Vision",
      heading: "A Safer, Smarter, and More Secure Digital Future",
      paragraph:
        "We envision a world sets the tone for the vision, establishing a sense of possibility and ambition. The phrase where businesses and individuals can thrive emphasizes the benefits of this future state, highlighting the positive impact on organizations and people",
    },
    {
      id: 3,
      title: "Values",
      heading: "Your Security, Our Responsibility",
      paragraph:
        "We believe technology should serve people, not the other way around. Our mission is to harness the power of innovation to make a meaningful difference in people's lives. We innovate to solve real problems that matter, from enhancing digital security to streamlining complex processes.",
    },
  ];

  return (
    <>
      <div className="h-auto flex flex-col px-6 sm:px-6 md:px-12 lg:px-32 pt-[7%] py-12 bg-navy-main text-white relative">
        <div className="absolute inset-0 flex justify-center">
          <div className="w-[1000px] h-[800px] bg-gradient-radial from-blue-primary/40 via-navy-main to-navy-main rounded-full blur-3xl opacity-90" />
        </div>

        <div className="flex flex-col items-center h-full relative z-40 pt-10">
          <h2
            className="text-white text-3xl sm:text-4xl md:text-5xl py-4 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="300"
          >
            Get to know us
          </h2>
          <h2
            className="text-base sm:text-lg text-center text-[#c9c9d2] pt-2 px-4 sm:px-20"
            data-aos="fade-up"
            data-aos-duration="300"
          >
            With a passion for technology and a commitment to excellence,
            <br className="hidden sm:block" /> we empower businesses to thrive in the digital landscape.
          </h2>

          <div className="mt-16 w-full rounded-md bg-navy-main shadow-md" data-aos="fade-up" data-aos-duration="500">
            <div className="flex flex-col lg:flex-row gap-7 px-6 sm:px-10 md:px-12 py-12">
              <div className="w-full lg:w-1/2">
                <h2 className="text-blue-soft">WHO WE ARE</h2>
                <h2 className="text-3xl sm:text-4xl py-3 font-bold">
                  Focused on People <span className="lg:block py-2">Driven by Innovation</span> Built for the Future
                </h2>
                <h3 className="text-[#94949e] text-base sm:text-lg mt-5">
                  At Brilliant Technologies, we believe technology should empower, not complicate.
                </h3>
              </div>
              <div className="w-full lg:w-1/2 md:pl-7">
                <div className="mx-auto">
                  <div className="flex flex-row  sm:flex-row justify-between bg-blue-primary/20 rounded-lg overflow-hidden">
                    {aboutdata.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setSelected(item.id)}
                        className={`py-[6px] px-4 sm:px-10 transition-all duration-300 ${
                          selected === item.id ? "bg-white" : ""
                        }`}
                      >
                        <h2 className={`text-md ${selected === item.id ? "text-black" : "text-[#A0A0A0]"}`}>
                          {item.title}
                        </h2>
                      </button>
                    ))}
                  </div>
                  <div className="mt-4">
                    <h2 className="text-lg py-2 font-semibold text-white">
                      {aboutdata.find((s) => s.id === selected)?.heading}
                    </h2>
                    <h3 className="text-base text-[#94949E] leading-relaxed">
                      {aboutdata.find((s) => s.id === selected)?.paragraph}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Banner Image */}
          <div className="w-full px-4 sm:px-12 mt-14 h-[50vh] sm:h-[70vh]">
            <img
              src={companybannner}
              alt="banner"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Counts */}
          <div className="companysado rounded-md px-4 sm:px-6 md:px-12 lg:px-32 py-16 shadow-lg w-full mt-12" data-aos="fade-up" data-aos-duration="800">
            <ul className="flex flex-col sm:flex-row justify-between text-center gap-6 sm:gap-0">
              {[
                { count: "5+", label: "Years of experience" },
                { count: "100%", label: "Privacy-Focused" },
                { count: "1000+", label: "Satisfied Businesses" },
                { count: "10x", label: "Faster Performance" },
              ].map((item, i) => (
                <li key={i} className="flex flex-col text-md">
                  <span className="text-4xl font-bold text-blue-soft">{item.count}</span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services Grid with Image */}
        <div className="lg:mt-28 mt-14 flex flex-col-reverse lg:flex-row gap-8 relative z-40">
          <div className="w-full lg:w-1/2">
            <h2 className="text-blue-soft" data-aos="fade-up" data-aos-duration="800">
              SERVICES AND SOLUTIONS
            </h2>
            <h2 className="text-3xl sm:text-4xl py-6 font-bold" data-aos="fade-up" data-aos-duration="900">
              Helping you grow in every stage
            </h2>
            <h3 className="text-[#94949e] text-base pr-2 sm:pr-14" data-aos="fade-up" data-aos-duration="1000">
              Elevate your brand to new heights ensuring your message reaches its full potential and captivates your audience.
            </h3>

            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <SquareCard
                title="Solid planning"
                para="Receive premium assistance from our global network."
                icon={<IoSettingsOutline />}
                data-aos="fade-up"
                data-aos-duration="1100"
              />
              <SquareCard
                title="Collaboration tools"
                para="Keep your strategic goals and planning in one place."
                icon={<AiOutlineNodeCollapse />}
                data-aos="fade-up"
                data-aos-duration="1200"
              />
              <SquareCard
                title="Data Protection"
                para="Define each stage of work to see what’s important."
                icon={<CiDatabase />}
                data-aos="fade-up"
                data-aos-duration="1300"
              />
              <SquareCard
                title="Software support"
                para="From the small stuff to the big picture, we organize work."
                icon={<FaRegFileCode />}
                data-aos="fade-up"
                data-aos-duration="1400"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2" data-aos="fade-up" data-aos-duration="800">
            <img
              src={aboutimg}
              alt="about"
              className="object-cover rounded-lg w-full  lg:h-full "
            />
          </div>
        </div>

        {/* FAQ Section */}
        <section className="lg:mt-12">
          <CompanyFAQ />
        </section>

        
        
      </div>
      {/* Newsletter Section */}
      <section>
          <Newsletter />
        </section>
    </>
  );
};

export default Company;