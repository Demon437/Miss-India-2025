import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/WhatsApp Image 2025-10-15 at 14.51.55_3ae3ffed.jpg'

const Header = ({ onLogoClick, onNavigateSection }) => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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
    setIsMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white from-ecruWhite-500 via-oldGold-300 to-ecruWhite-500 backdrop-blur-md bg-opacity-95 shadow-lg border-b border-oldGold-500/20">
      <div className="container mx-auto px-4 py-1">
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
                className="h-16 w-auto object-contain cursor-pointer"
              />
            </button>
          </div>

          {/* Navigation Links - Desktop */}
         <nav className="hidden md:flex items-center space-x-2">
  {[
    { name: "Home", id: "home" },
        { name: "About Us", id: "about" },
    { name: "Explore", id: "services" },
    { name: "Femina", id: "femina" },
    { name: "Contact", id: "contact" },
  ].map((item) => (
    <button
      key={item.name}
      onClick={() => scrollToSection(item.id)}
      className="
        relative text-dark font-medium tracking-wide
        px-3 py-1.5 rounded-full text-sm uppercase
        transition-all duration-300
        hover:text-white hover:shadow-md
        hover:bg-gradient-to-r hover:from-[#d4af37] hover:to-[#b8860b]
        cursor-pointer
      "
    >
      {item.name}
    </button>
  ))}
</nav>


          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-celtic-500 hover:text-oldGold-500 focus:outline-none focus:ring-2 focus:ring-oldGold-500"
            aria-label="Open menu"
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((v) => !v)}
          >
            {isMobileOpen ? (
              // Close icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              // Hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {/* Mobile Menu Panel */}
        {isMobileOpen && (
          <div className="md:hidden mt-2 rounded-lg border border-oldGold-500/20 bg-white shadow-lg overflow-hidden">
            <div className="flex flex-col py-2">
              <button
                onClick={() => scrollToSection('home')}
                className="text-celtic-500 text-left px-4 py-3 hover:bg-oldGold-500/10"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-celtic-500 text-left px-4 py-3 hover:bg-oldGold-500/10"
              >
                Expertise
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-celtic-500 text-left px-4 py-3 hover:bg-oldGold-500/10"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-celtic-500 text-left px-4 py-3 hover:bg-oldGold-500/10"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;