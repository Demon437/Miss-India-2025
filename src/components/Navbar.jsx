import React, { useState } from "react";
import logoImg from "../assets/WhatsApp Image 2025-10-15 at 14.51.55_3ae3ffed.jpg";

const Navnbar = ({ scrollToSection }) => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full flex items-center justify-between py-4 px-10 bg-white shadow-sm relative">

            {/* Logo */}
            <div className="flex items-center gap-2">
                <img src={logoImg} alt="Logo" className="w-12 h-12 object-cover rounded-md" />
                <div>
                    <h1 className="text-xl font-bold leading-none tracking-widest">
                        BRIGHT
                    </h1>
                    <p className="text-xs -mt-1 tracking-wide">STAGE</p>
                    <div className="w-1 h-6 bg-yellow-500 mt-1"></div>
                </div>
            </div>

            {/* Menu */}
            <ul className="hidden md:flex items-center space-x-12 text-lg font-medium text-black">
                <li className="cursor-pointer hover:text-gray-600 transition" onClick={() => scrollToSection('home')}>Home</li>
                <li className="cursor-pointer hover:text-gray-600 transition" onClick={() => scrollToSection('services')}>Services</li>
                <li className="cursor-pointer hover:text-gray-600 transition" onClick={() => scrollToSection('about')}>About</li>
                <li className="cursor-pointer hover:text-gray-600 transition" onClick={() => scrollToSection('contact')}>Contact</li>
            </ul>

            {/* More Button */}
            <button
                onClick={() => setOpen(!open)}
                className="border border-black py-1 px-4 rounded-lg text-lg font-medium flex items-center gap-1 hover:bg-black hover:text-white transition"
            >
                More <span>▼</span>
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute right-10 top-20 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                    <button
                        onClick={() => scrollToSection('clients')}
                        className="w-full text-left px-4 py-2 text-black hover:bg-gray-100"
                    >
                        Clients
                    </button>
                    <button
                        onClick={() => scrollToSection('team')}
                        className="w-full text-left px-4 py-2 text-black hover:bg-gray-100"
                    >
                        Team
                    </button>
                    <button
                        onClick={() => scrollToSection('testimonials')}
                        className="w-full text-left px-4 py-2 text-black hover:bg-gray-100"
                    >
                        Testimonials
                    </button>
                    <button
                        onClick={() => scrollToSection('commitment')}
                        className="w-full text-left px-4 py-2 text-black hover:bg-gray-100"
                    >
                        Commitment
                    </button>
                </div>
            )}

        </nav>
    );
};

export default Navnbar;
