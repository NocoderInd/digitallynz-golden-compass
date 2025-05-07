
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-white">
              Digitally<span className="text-golden">NZ</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#about" className="text-white hover:text-golden transition-colors">About</a>
            <a href="#services" className="text-white hover:text-golden transition-colors">Services</a>
            <a href="#portfolio" className="text-white hover:text-golden transition-colors">Portfolio</a>
            <a href="#contact" className="text-white hover:text-golden transition-colors">Contact</a>
            <Button className="golden-bg hover:opacity-90">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black">
            <div className="flex flex-col space-y-4 py-4">
              <a href="#about" className="text-white hover:text-golden px-4 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#services" className="text-white hover:text-golden px-4 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#portfolio" className="text-white hover:text-golden px-4 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
              <a href="#contact" className="text-white hover:text-golden px-4 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <div className="px-4 py-2">
                <Button className="golden-bg w-full" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
