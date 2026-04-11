import React from 'react';
import { MdOutlinePrivacyTip, MdOutlineSettingsInputComponent } from 'react-icons/md';
import { FaChartLine, FaRegHandshake } from 'react-icons/fa';
import { SiTicktick } from 'react-icons/si';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import partnerImg from '../assets/images/partnerImg.jpg';
import PartnerFAQ from '../components/PartnerFAQ';
import SolutionsCard from '../components/cards/SolutionsCard';

function Partner() {
  return (
    <>
      <div className="min-h-screen bg-navy-main py-10 px-6 lg:py-20  sm:px-6 md:px-12 lg:px-32 text-white">

        {/* Gradient Background Circle */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-[800px] h-[800px] bg-gradient-radial from-blue-primary/40 via-navy-main to-navy-main rounded-full blur-3xl opacity-60" />
        </div>

        {/* Hero Section */}
        <div className="w-full py-20 flex flex-col lg:flex-row gap-10 items-center relative z-40" data-aos="fade-up" data-aos-duration="300">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-relaxed text-center lg:text-left">
              Grow Your Business <span className='block lg:pt-3'></span> With Brilliant Technologies
            </h2>
            <h3 className="text-base text-center lg:text-left sm:text-lg lg:pr-16 pt-7 text-[#94949e]">
              At Brilliant Technologies, we foster a global ecosystem of leading security technology resellers, managed service providers.
            </h3>
          </div>
          <div className="w-full lg:w-1/2 border-4 border-[#FFFFFF0D] rounded-xl relative z-50">
            <img src={partnerImg} alt="Partner" className="rounded-xl w-full h-auto object-cover" />
          </div>
        </div>

        {/* Partnership Cards Section */}
        <div className="relative z-40">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl sm:text-3xl font-bold" data-aos="fade-up" data-aos-duration="400">
              Our Partnership Approach
            </h2>
            <h3 className="text-base sm:text-lg py-3 text-[#94949e]" data-aos="fade-up" data-aos-duration="500">
              Our partnership approach is built on mutual trust, respect, and a
              <br className="hidden sm:block" /> shared commitment to excellence.
            </h3>
          </div>

          <div className="lg:mt-9 px-2 w-full relative z-40">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-16">
              <SolutionsCard
                title="Partner-Led Growth Strategy"
                para="We believe that by working together, we can unlock new revenue streams."
                icon={<FaChartLine />}
                data-aos="fade-up"
                data-aos-duration="1000"
              />
              <SolutionsCard
                title="Strategic Technology Alliances"
                para="We forge strategic technology alliances to drive innovation."
                icon={<FaRegHandshake />}
                data-aos="fade-up"
                data-aos-duration="1200"
              />
              <SolutionsCard
                title="Cybersecurity Service Partners"
                para="We collaborate with leading cybersecurity service providers."
                icon={<MdOutlinePrivacyTip />}
                data-aos="fade-up"
                data-aos-duration="1500"
              />
              <SolutionsCard
                title="Consulting Partnerships"
                para="Our consulting partnerships enable us to deliver end-to-end solutions."
                icon={<SiTicktick />}
                data-aos="fade-up"
                data-aos-duration="1000"
              />
              <SolutionsCard
                title="Brilliant Technologies Research"
                para="As the industry leader in vulnerability management."
                icon={<FaMagnifyingGlass />}
                data-aos="fade-up"
                data-aos-duration="1200"
              />
              <SolutionsCard
                title="Anticipate Threats with Context"
                para="Our solution combines real-time threat intelligence."
                icon={<MdOutlineSettingsInputComponent />}
                data-aos="fade-up"
                data-aos-duration="1500"
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="lg:mt-16">
          <PartnerFAQ />
        </section>
      </div>
    </>
  );
}

export default Partner;