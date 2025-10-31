import React from 'react';

const Footer = ({ onNavigateSection }) => {
    const go = (sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) {
            const headerHeight = 64;
            const y = el.offsetTop - headerHeight;
            window.scrollTo({ top: y, behavior: 'smooth' });
        } else if (typeof onNavigateSection === 'function') {
            onNavigateSection(sectionId);
        }
    };

    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Bright Stage</h3>
                        <p className="text-gray-400">
                            Illuminating events with creativity and precision. Your trusted partner for unforgettable experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><button onClick={() => go('home')} className="hover:text-gray-300">Home</button></li>
                            <li><button onClick={() => go('services')} className="hover:text-gray-300">Services</button></li>
                            <li><button onClick={() => go('about')} className="hover:text-gray-300">About Us</button></li>
                            <li><button onClick={() => go('contact')} className="hover:text-gray-300">Contact</button></li>
                        </ul>
                    </div>

                    {/* Services - Static */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-1 text-md leading-relaxed text-white-400">
                            <li><p className=" duration-200 cursor-default">Destination Weddings</p></li>
                            <li><p className="transition-colors duration-200 cursor-default">Designer Décor & Bridal Entries</p></li>
                            <li><p className="transition-colors duration-200 cursor-default">Engagements & Anniversaries</p></li>
                            <li><p className="transition-colors duration-200 cursor-default">Family Galas & Private Parties</p></li>
                            <li><p className="transition-colors duration-200 cursor-default">Celebrity Performances</p></li>
                            <li><p className="transition-colors duration-200 cursor-default">Wedding Planning & Coordination</p></li>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <p className="text-gray-400 mb-2">Email: team@brightstage.co.in</p>
                        <p className="text-gray-400 mb-2">Phone: +91 7000939353</p>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                            Address: Office Number 201, 25 F/A, Scheme No 94, Eastern Ring Road,<br />
                            Scheme 94 Sector FB, Indore, Madhya Pradesh, 452016, India
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-300"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="hover:text-gray-300"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                    <p className="text-gray-400">&copy; 2023 Bright Stage. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
