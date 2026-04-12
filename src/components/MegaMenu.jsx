import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo_transparent.png'

function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full py-2 px-6 lg:py-2 lg:px-32 shadow-lg z-[9999] bg-[#0D2440] border-b border-[#FFFFFF0D]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-white flex items-center gap-2">
          <Link to="/">
            <img 
              src={logo} 
              alt="Brilliant Technologies" 
              className="h-10 md:h-12 w-auto object-contain scale-[2.5] md:scale-[3] origin-left"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 text-[15px] text-white">
          <li><Link to="/cloud-infrastructure">Cloud Infrastructure</Link></li>
          <li><Link to="/solutions">IaaS Solutions</Link></li>
          <li><Link to="/cybersecurity">Cybersecurity</Link></li>
          <li><Link to="/company">Company</Link></li>
          <li><Link to="/partner">Partners</Link></li>
          <li><Link to="/resources">Resources</Link></li>
        </ul>

        <Link to="/contact" className="hidden lg:block">
          <button className="bg-blue-primary hover:bg-blue-soft text-white font-semibold py-2 px-6 rounded-lg transition-colors">
            Contact Us
          </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden bg-[#0D2440] rounded-lg py-4  mt-2 space-y-4 text-sm text-left px-6 text-white border border-[#FFFFFF0D]">
          <li><Link to="/cloud-infrastructure" onClick={() => setIsOpen(false)}> Cloud Infrastructure</Link></li>
          <li><Link to="/solutions" onClick={() => setIsOpen(false)}>IaaS Solutions</Link></li>
          <li><Link to="/cybersecurity" onClick={() => setIsOpen(false)}>Cybersecurity</Link></li>
          <li><Link to="/company" onClick={() => setIsOpen(false)}>Company</Link></li>
          <li><Link to="/partner" onClick={() => setIsOpen(false)}>Partner</Link></li>
          <li><Link to="/resources" onClick={() => setIsOpen(false)}>Resources</Link></li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <button className="bg-blue-primary hover:bg-blue-soft text-white font-bold py-2 px-6 rounded-full w-full transition-colors">
                Contact Us
              </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default MegaMenu;