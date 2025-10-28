import React from 'react';

const Footer = () => {
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
                            <li><a href="/" className="hover:text-gray-300">Home</a></li>
                            <li><a href="/events" className="hover:text-gray-300">Events</a></li>
                            <li><a href="/services" className="hover:text-gray-300">Services</a></li>
                            <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-1 text-md leading-relaxed">
                            <li><a href="/weddings" className="hover:text-gray-300 transition-colors duration-200">Destination Weddings</a></li>
                            <li><a href="/decor" className="hover:text-gray-300 transition-colors duration-200">Designer Décor & Bridal Entries</a></li>
                            <li><a href="/events" className="hover:text-gray-300 transition-colors duration-200">Engagements & Anniversaries</a></li>
                            <li><a href="/parties" className="hover:text-gray-300 transition-colors duration-200">Family Galas & Private Parties</a></li>
                            <li><a href="/celebrity" className="hover:text-gray-300 transition-colors duration-200">Celebrity Performances</a></li>
                            <li><a href="/planning" className="hover:text-gray-300 transition-colors duration-200">Wedding Planning & Coordination</a></li>
                        </ul>

                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <p className="text-gray-400 mb-2">Email: missmp@brightstage.co.in</p>
                        <p className="text-gray-400 mb-4">Phone:+91 7000939353</p>
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
