import React, { useEffect } from 'react';
import ShinyText from '../components/ShinyText';

const About = () => {
    // Handle smooth scrolling
    useEffect(() => {
        if (window.location.hash === '#about') {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="min-h-screen bg-[#1b3521]" id="about">
            <section className="py-16 bg-[#d6ac45] text-ecruWhite-500">
                <div className="container mx-auto px-4 max-w-6xl">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-oldGold-500 via-korma-500 to-oldGold-500 bg-clip-text text-transparent font-display">
                            About Bright Stage
                        </h1>
                        <ShinyText
                            text="Where Excellence Meets Experience"
                            speed={3}
                            className="text-2xl font-bold italic text-oldGold-400"
                        />
                    </div>

                    {/* Company Overview */}
                    <div className="bg-[#f2f1da] rounded-2xl p-8 mb-12 border border-oldGold-500/30">
                        <div className="prose prose-lg max-w-none text-dark">
                            <p className="mb-6 text-lg">
                                Bright Stage is a premium event management company specializing in
                                <span className="font-bold text-oldGold-400"> Crafted Events, Classy Celebrations, and Timeless Memories</span>.
                                We transform ordinary occasions into extraordinary experiences through meticulous planning and
                                flawless execution.
                            </p>
                        </div>
                    </div>

                    {/* Our Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-[#f2f1da] rounded-2xl p-8 border border-oldGold-500/30">
                            <h3 className="text-2xl font-bold mb-4 text-oldGold-400">Corporate Events</h3>
                            <ul className="list-disc list-inside text-dark">
                                <li>Conferences</li>
                                <li>Team Building</li>
                                <li>Product Launches</li>
                                <li>Award Ceremonies</li>
                            </ul>
                        </div>

                        <div className="bg-[#f2f1da] rounded-2xl p-8 border border-oldGold-500/30">
                            <h3 className="text-2xl font-bold mb-4 text-oldGold-400">Entertainment</h3>
                            <ul className="list-disc list-inside text-dark">
                                <li>Music Concerts</li>
                                <li>Fashion Shows</li>
                                <li>Cultural Events</li>
                                <li>Beauty Pageants</li>
                            </ul>
                        </div>

                        <div className="bg-[#f2f1da] rounded-2xl p-8 border border-oldGold-500/30">
                            <h3 className="text-2xl font-bold mb-4 text-oldGold-400">Special Occasions</h3>
                            <ul className="list-disc list-inside text-dark">
                                <li>Weddings</li>
                                <li>Anniversaries</li>
                                <li>Birthday Parties</li>
                                <li>Social Gatherings</li>
                            </ul>
                        </div>
                    </div>

                    {/* Vision & Mission */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[#f2f1da] rounded-2xl p-8 border border-oldGold-500/30">
                            <h3 className="text-3xl font-bold mb-6 text-oldGold-400 font-display">Vision</h3>
                            <p className="text-lg italic text-dark">
                                "To illuminate every celebration with elegance, brilliance, and unforgettable experiences."
                            </p>
                        </div>

                        <div className="bg-[#f2f1da] rounded-2xl p-8 border border-oldGold-500/30">
                            <h3 className="text-3xl font-bold mb-6 text-oldGold-400 font-display">Mission</h3>
                            <p className="text-lg italic text-dark">
                                "Crafting flawlessly executed events where every moment shines, every story captivates,
                                and memories last a lifetime."
                            </p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16">
                        <button
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className="bg-oldGold-500 text-[#1b3521] px-8 py-3 rounded-full font-bold hover:bg-oldGold-600 transition-colors duration-300"
                        >
                            Plan Your Event
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;