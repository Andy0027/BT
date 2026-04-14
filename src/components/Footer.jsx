import { FaXTwitter } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
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
        <div>
          <Link to="/" className="inline-block mb-10 -ml-8 md:-ml-14">
            <img 
              src={finalLogo} 
              alt="Brilliant Technologies" 
              className="h-32 md:h-44 w-auto object-contain origin-left"
            />
          </Link>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Brilliant Technologies provides scalable, secure, and high-performance cloud infrastructure solutions for modern businesses.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-300 text-sm hover:text-white transition group">
              <MdLocationOn className="text-blue-400 group-hover:text-blue-300 transition-colors flex-shrink-0" />
              <span>12810 Hillcrest Road, Dallas, TX 75230</span>
            </div>
            <div className="flex items-center gap-2">
              <a href="mailto:support@brilliantweb.us" className="text-blue-400 text-sm hover:text-blue-300 hover:underline transition">
                support@brilliantweb.us
              </a>
            </div>
          </div>
        </div>

        {/* Solutions */}
        <div>
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

        {/* Resources */}
        <div>
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

        {/* Company Info */}
        <div>
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

        {/* Legal */}
        <div>
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

      {/* Bottom Bar */}
      <div className="border-t border-[#FFFFFF0D] mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-300">
          © 2026 Brilliant Technologies. All rights reserved.
        </p>
        <div className="flex gap-5 text-xl text-gray-300">
          <a href="#" className="hover:text-blue-soft transition">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;