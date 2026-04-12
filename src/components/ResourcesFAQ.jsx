import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { resourcesfaq } from "../data/Alldata";

const ResourcesFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-10 lg:py-20 relative z-40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
          <div className="w-full md:w-1/2">
            <h2 className="text-[#0D2440] text-base font-bold uppercase tracking-widest">
              FAQs
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl pr-0 md:pr-8 leading-tight font-bold py-4 text-[#0D2440]">
              Frequently Asked Questions
            </h2>
            <h3 className="text-base leading-7 text-gray-600 font-medium">
              Find quick answers to common questions about our insights and consulting services. 
              Looking for specialized advice? Reach out to our expert team.
            </h3>
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            {resourcesfaq.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-bold text-[#0D2440]">
                    {faq.heading}
                  </span>
                  <div className={`p-1 rounded-full transition-all duration-300 ${openIndex === index ? 'bg-blue-primary text-white rotate-180 shadow-md' : 'bg-gray-100 text-[#0D2440]'}`}>
                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <div
                  className={`px-6 transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-[500px] py-5 opacity-100" : "max-h-0 py-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {faq.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesFAQ;
