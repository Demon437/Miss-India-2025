import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/WhatsApp Image 2025-10-15 at 14.51.55_3ae3ffed.jpg'

const Header = ({ onLogoClick, onNavigateSection }) => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    } else if (typeof onNavigateSection === 'function') {
      onNavigateSection(sectionId);
    }
    setIsMoreOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white from-ecruWhite-500 via-oldGold-300 to-ecruWhite-500 backdrop-blur-md bg-opacity-95 shadow-lg border-b border-oldGold-500/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={(e) => {
                if (e && e.preventDefault) e.preventDefault();
                if (typeof onLogoClick === 'function') onLogoClick();
              }}
              className="flex items-center gap-3 focus:outline-none"
              aria-label="Go to sections"
            >
              <img
                src={logoImage}
                alt="BRIGHT STAGE Logo"
                className="h-12 w-auto object-contain cursor-pointer"
              />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-celtic-500 hover:text-oldGold-500 transition-colors duration-300 font-medium px-3 py-1 rounded-lg hover:bg-oldGold-500/10"
            >
              Home
            </button>
           
            <button
              onClick={() => scrollToSection('services')}
              className="text-celtic-500 hover:text-oldGold-500 transition-colors duration-300 font-medium px-3 py-1 rounded-lg hover:bg-oldGold-500/10"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-celtic-500 hover:text-oldGold-500 transition-colors duration-300 font-medium px-3 py-1 rounded-lg hover:bg-oldGold-500/10"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-celtic-500 hover:text-oldGold-500 transition-colors duration-300 font-medium px-3 py-1 rounded-lg hover:bg-oldGold-500/10"
            >
              Contact
            </button>

            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="text-celtic-500 hover:text-oldGold-500 transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-oldGold-500/10 flex items-center"
              >
                More ▼
              </button>

              {isMoreOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-oldGold-500/20">
                  <button
                    onClick={() => scrollToSection('clients')}
                    className="w-full text-left px-4 py-2 text-celtic-500 hover:text-oldGold-500 hover:bg-oldGold-500/10"
                  >
                    Clients
                  </button>
                  <button
                    onClick={() => scrollToSection('team')}
                    className="w-full text-left px-4 py-2 text-celtic-500 hover:text-oldGold-500 hover:bg-oldGold-500/10"
                  >
                    Team
                  </button>
                  <button
                    onClick={() => scrollToSection('testimonials')}
                    className="w-full text-left px-4 py-2 text-celtic-500 hover:text-oldGold-500 hover:bg-oldGold-500/10"
                  >
                    Testimonials
                  </button>
                  <button
                    onClick={() => scrollToSection('commitment')}
                    className="w-full text-left px-4 py-2 text-celtic-500 hover:text-oldGold-500 hover:bg-oldGold-500/10"
                  >
                    Commitment
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;