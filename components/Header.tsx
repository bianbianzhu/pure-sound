import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b ${isScrolled ? 'bg-white border-gray-200 py-4' : 'bg-white/95 backdrop-blur-sm border-transparent py-6'
        }`}
    >
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-5 relative">
            <div className="absolute inset-0 text-[#D9281C]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="miter">
                <polyline points="2 6 12 16 22 6"></polyline>
              </svg>
            </div>
          </div>
          <span className="text-lg font-bold tracking-wider uppercase group-hover:text-[#D9281C] transition-colors">Sencor</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12 text-xs font-bold uppercase tracking-widest">
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#D9281C] transition-colors">
            Audio Systems
            <ChevronDown size={14} />
          </div>
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
          <div className="flex flex-col items-end leading-tight hover:text-[#D9281C] transition-colors cursor-pointer">
            <span>About Sencor</span>
            <span className="text-gray-400">Service & Support</span>
          </div>
          <div className="flex flex-col items-end leading-tight hover:text-[#D9281C] transition-colors cursor-pointer">
            <span>Search</span>
            <span className="text-gray-400">Where to buy</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-6 flex flex-col gap-6 text-sm font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-[#D9281C]">Audio Systems</a>
          <a href="#" className="hover:text-[#D9281C]">About Sencor</a>
          <a href="#" className="hover:text-[#D9281C]">Service & Support</a>
          <a href="#" className="hover:text-[#D9281C]">Where to Buy</a>
          <div className="flex items-center gap-2 pt-4 border-t border-gray-100 text-gray-500">
            <Search size={16} />
            <span>Search</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;