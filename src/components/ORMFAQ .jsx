import React, { useState } from "react";
import { ormfaq } from "../data/Alldata";
import { TiArrowDown, TiArrowUp } from "react-icons/ti";

function ORMFAQ() {
  const [show, Setshow] = useState(null);

  const toggleFAQ = (index) => {
    Setshow(show === index ? null : index);
  };

  return (
    <div
      className="lg:mt-12 mt-14 h-full flex flex-col lg:flex-row gap-8  relative z-40 lg:py-16 px-4 md:px-0 w-full"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
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

      <div
        className="w-full lg:w-1/2 py-6 px-4 rounded-md bg-navy-main border border-[#FFFFFF0D]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="space-y-4">
          {ormfaq.map((item, index) => (
            <div key={index} className="rounded-lg p-4">
              <button
                className="w-full text-left text-base font-semibold flex text-[#94949e] hover:text-white justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                {item.heading}
                <span className="text-2xl">
                  {show === index ? <TiArrowUp /> : <TiArrowDown />}
                </span>
              </button>
              {show === index && (
                <p className="mt-2 text-[#94949e] text-sm leading-6">
                  {item.paragraph}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ORMFAQ;