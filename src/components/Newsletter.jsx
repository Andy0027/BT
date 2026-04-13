import React from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import bgImg from '../assets/images/Banner-bg.jpeg';

function Newsletter() {
  return (
    <div className="w-full h-auto py-10 px-6 sm:px-6 md:px-32 bg-[#E7F0FA] lg:py-28">
      <div
        className="relative bg-cover bg-center rounded-2xl py-12 px-4 sm:px-8 lg:py-20 flex flex-col items-center text-center lg:mt-12 shadow-2xl overflow-hidden brightness-[1.1]"
        style={{ backgroundImage: `url(${bgImg})` }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Overlay for legibility */}
        <div className="absolute inset-0 bg-navy-main/45 backdrop-blur-[1px]"></div>

        <div className="relative z-10 max-w-3xl w-full">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-snug"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Ready to Scale Your Infrastructure?
          </h2>

          <p
            className="text-[#E7F0FA] text-base sm:text-lg mt-6"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            Start building with Brilliant Technologies today.
          </p>

          <div className="w-full my-8" data-aos="fade-up" data-aos-duration="1800">
            <div className="flex items-center gap-3 bg-white rounded-xl p-2 max-w-md mx-auto shadow-lg">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-gray-600 bg-transparent outline-none w-full font-medium"
              />
                <Link to="/contact">
                  <button className="bg-navy-main text-white px-8 py-3 rounded-full border border-white/20 shadow-lg hover:bg-blue-primary hover:border-blue-primary/60 hover:shadow-blue-primary/30 transition-all duration-300 font-bold hidden lg:block">
                    Get Started
                  </button>
                <div className="block lg:hidden">
                  <FaRegArrowAltCircleRight size={35} className="mr-2 text-navy-main" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;