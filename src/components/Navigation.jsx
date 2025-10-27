import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1b3521]/90 backdrop-blur-sm py-2' : 'bg-transparent py-4'
            }`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="text-oldGold-500 text-2xl font-bold font-display">
                        Bright Stage
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-ecruWhite-500 hover:text-oldGold-500 transition-colors"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-ecruWhite-500 hover:text-oldGold-500 transition-colors"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('services')}
                            className="text-ecruWhite-500 hover:text-oldGold-500 transition-colors"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollToSection('gallery')}
                            className="text-ecruWhite-500 hover:text-oldGold-500 transition-colors"
                        >
                            Gallery
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-ecruWhite-500 hover:text-oldGold-500 transition-colors"
                        >
                            Contact
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-ecruWhite-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;