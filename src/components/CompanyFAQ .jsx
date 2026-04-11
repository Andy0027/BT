import React, { useState } from "react";
import { companyfaq } from "../data/Alldata";
import { TiArrowDown, TiArrowUp } from "react-icons/ti";

function CompanyFAQ() {
  const [show, Setshow] = useState(false);

  const toggleFAQ = (index) => {
    Setshow(show === index ? null : index);
  };

  return (
    <div
      className="lg:mt-9 h-full flex flex-col lg:flex-row gap-6 px-4 sm:px-6 md:px-0 relative z-40 lg:py-20 py-10 w-full"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Left Column */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-base text-blue-soft">FAQs</h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl pr-0 md:pr-8 leading-tight font-bold py-4">
          Got a question? Get your answer
        </h2>
        <h3 className="text-base leading-7 text-[#94949e]">
          Quick answers to questions you may have. Can't find what you're
          looking for?
        </h3>
      </div>

      {/* Right Column - Accordion */}
      <div
        className="w-full lg:w-1/2 py-7 px-4 sm:px-6 md:px-8 rounded-md bg-navy-main border border-[#FFFFFF0D]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="space-y-4">
          {companyfaq.map((item, index) => (
            <div key={index} className="rounded-lg p-4">
              <button
                className="w-full text-left text-base font-semibold flex text-[#94949e] hover:text-white justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                {item.heading}
                <span className="text-2xl sm:text-3xl">
                  {show === index ? <TiArrowUp /> : <TiArrowDown />}
                </span>
              </button>
              {show === index && (
                <p className="mt-2 text-[#94949e] text-sm">{item.paragraph}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompanyFAQ;