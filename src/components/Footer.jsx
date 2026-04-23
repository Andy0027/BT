import { FaXTwitter } from "react-icons/fa6";
import { MdLocationOn, MdEmail } from "react-icons/md";

import { company, legal, resources, solutions } from "../data/footerdata";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo_transparent.png'
import finalLogo from '../assets/images/Brilliant_Technologies_logo_design__2_-removebg-preview.png'

const Footer = () => {
  return (
    <footer className="bg-[#0D2440] text-white px-6 py-12 md:px-32 border-t border-[#FFFFFF0D]">
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
    </footer>
  );
};

export default Footer;