import React, { useState } from "react";
import logoImage from "../assets/WhatsApp Image 2025-10-15 at 14.51.55_3ae3ffed.jpg";

const NAV_ITEMS = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Explore", id: "services" },
  { name: "Femina", id: "femina" },
  { name: "Contact", id: "contact" },
];

const Header = ({ onLogoClick, onNavigateSection }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    } else if (typeof onNavigateSection === "function") {
      // give parent a chance to handle cross-route/remote navigation
      onNavigateSection(sectionId);
    }
    setIsMobileOpen(false);
  };

  const handleLogo = (e) => {
    e && e.preventDefault();
    if (typeof onLogoClick === "function") {
      onLogoClick();
      return;
    }
    // default fallback: scroll to top of page
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      // ignore
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-[#d4af37]/20">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* 🟡 Logo */}
          <button
            onClick={handleLogo}
            className="flex items-center gap-3 focus:outline-none"
            aria-label="Go to home"
          >
            <img
              src={logoImage}
              alt="BRIGHT STAGE Logo"
              className="h-16 w-auto object-contain cursor-pointer"
            />
          </button>

          {/* 🟡 Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-3">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  if (item.id === "femina") {
                    if (typeof onNavigateSection === "function") {
                      onNavigateSection("form");
                    } else {
                      scrollToSection(item.id);
                    }
                    setIsMobileOpen(false);
                  } else {
                    scrollToSection(item.id);
                  }
                }}
                className={
                  "relative text-black font-medium tracking-wide px-4 py-2 rounded-full text-sm uppercase transition-all duration-300 hover:text-white hover:shadow-md hover:bg-gradient-to-r hover:from-[#d4af37] hover:to-[#f7e08c]"
                }
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* 🟡 Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-black hover:text-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((v) => !v)}
          >
            {isMobileOpen ? (
              // ❌ Close icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              // 🍔 Hamburger icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* 🟡 Mobile Menu */}
        {isMobileOpen && (
          <div className="md:hidden mt-2 rounded-lg border border-[#d4af37]/20 bg-white shadow-lg overflow-hidden">
            <div className="flex flex-col py-2 text-black">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    if (item.id === "femina") {
                      if (typeof onNavigateSection === "function") {
                        onNavigateSection("form");
                      } else {
                        scrollToSection(item.id);
                      }
                    } else {
                      scrollToSection(item.id);
                    }
                  }}
                  className="px-4 py-3 text-left hover:bg-[#d4af37]/20 hover:text-[#b8860b]"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
