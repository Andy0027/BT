import { FaXTwitter } from "react-icons/fa6";
import { MdLocationOn, MdEmail } from "react-icons/md";

import { company, legal, resources, solutions } from "../data/footerdata";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo_transparent.png'
import finalLogo from '../assets/images/Brilliant_Technologies_logo_design__2_-removebg-preview.png'

const Footer = () => {
  return (
    <footer className="bg-[#0D2440] text-white py-12 border-t border-[#FFFFFF0D] w-full">
      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-8">
      {/* Horizontal Newsletter Section */}
      <div className="mb-16 pb-12 border-b border-white/10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Stay Ahead of the Cloud</h2>
            <p className="text-blue-subtle/60 text-sm md:text-base">
              Get the latest architectural strategies and infrastructure insights delivered weekly.
            </p>
          </div>
          
          {/* Right: Input Group */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <div className="relative w-full sm:w-[350px]">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="w-full bg-white text-[#0D2440] rounded-full px-6 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-lg"
              />
            </div>
            <button className="group relative overflow-hidden bg-blue-600 border border-blue-500 hover:bg-white hover:border-white text-white hover:text-blue-600 font-extrabold px-10 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 uppercase tracking-wider text-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Subscribe
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Branding Section */}
        <div className="flex flex-col items-center md:items-start -mt-4 md:-mt-8">

          <div className="h-20 md:h-28 overflow-hidden flex items-center relative -ml-10 md:-ml-14">
            <Link to="/" className="inline-block transform scale-x-[1.15]">
              <img 
                src={finalLogo} 
                alt="Brilliant Technologies" 
                className="h-52 md:h-80 w-auto object-contain origin-left"
              />
            </Link>
          </div>

          <div className="-mt-4 md:-mt-6 mb-2 text-center md:text-left relative z-10">
            <p className="text-blue-200 font-bold text-lg tracking-tight whitespace-nowrap">
              Powering Digital Growth
            </p>
          </div>

          <div className="text-center md:text-left w-full pt-2">
            <h3 className="text-lg font-semibold mb-3">Get in Touch —</h3>
            <div className="space-y-1.5">
              <div className="flex items-center md:items-start justify-center md:justify-start gap-2 text-gray-300 text-sm hover:text-white transition group">
                <MdLocationOn className="text-blue-400 group-hover:text-blue-300 transition-colors flex-shrink-0 mt-0.5" />
                <span>12810 Hillcrest Road, Dallas, TX 75230</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 text-sm hover:text-white transition group">
                <MdEmail className="text-blue-400 group-hover:text-blue-300 transition-colors flex-shrink-0" />
                <a href="mailto:support@brilliantweb.us" className="hover:text-blue-300 transition">
                  support@brilliantweb.us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions */}
        <div className="lg:pl-10">
          <h3 className="text-lg font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2 text-sm">
            {solutions.map((item) => (
              <li key={item.name}>
                <Link to={item.to} className="text-gray-300 hover:text-white transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="lg:pl-10">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            {company.map((item) => (
              <li key={item.name}>
                <Link to={item.to} className="text-gray-300 hover:text-white transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="lg:pl-10">
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            {resources.map((item) => (
              <li key={item.name}>
                <Link to={item.to} className="text-gray-300 hover:text-white transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="lg:pl-10">
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            {legal.map((item) => (
              <li key={item.name}>
                <Link to={item.to} className="text-gray-300 hover:text-white transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 pt-8 border-t border-[#FFFFFF0D] flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Brilliant Technologies. All rights reserved.
        </p>
        
        {/* Social Links */}
        <div className="flex gap-6">
          <Link to="#" className="text-gray-400 hover:text-white transition">
            <FaXTwitter size={20} />
          </Link>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;