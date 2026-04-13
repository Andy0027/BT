import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { companyfaq } from "../data/Alldata";

const CompanyFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-16 bg-[#E7F0FA]">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
          <div className="w-full md:w-1/2">
            <h2 className="text-[#0D2440] text-base font-semibold uppercase tracking-widest">
              FAQs
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl pr-0 md:pr-8 leading-tight font-semibold py-4 text-[#0D2440]">
              Have Questions? We’ve Got Answers
            </h2>
            <h3 className="text-base leading-7 text-gray-600">
              Quick answers to common questions about Brilliant Technologies. 
              Can't find what you're looking for? Contact our support team.
            </h3>
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            {companyfaq.map((faq, index) => (
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
                  <div className={`p-1 rounded-full transition-transform duration-300 ${openIndex === index ? 'bg-blue-primary text-white rotate-180' : 'bg-gray-100 text-[#0D2440]'}`}>
                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <div
                  className={`px-6 transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-[500px] py-5 opacity-100" : "max-h-0 py-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
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

export default CompanyFAQ;