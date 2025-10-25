import React, { useEffect } from 'react';
import Form from '../components/Form';
import ShinyText from '../components/ShinyText'; // added import

const About = () => {
    // Add scroll handler function
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about-section');
        aboutSection?.scrollIntoView({ behavior: 'smooth' });
    };

    // Handle scroll if coming from navigation
    useEffect(() => {
        if (window.location.hash === '#about') {
            scrollToAbout();
        }
    }, []);

    return (
        <div className="min-h-screen bg-[#1b3521]">
            {/* Form Section */}


            {/* About Us Section */}
            <section className="py-16 bg-[#d6ac45] from-[#1b3521] to-[#2a4a2a] text-ecruWhite-500">
                {/* Company Header - Add onClick handler */}
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h1
                            className="text-5xl font-bold mb-4 bg-gradient-to-r from-oldGold-500 via-korma-500 to-oldGold-500 bg-clip-text text-transparent font-display cursor-pointer"
                            onClick={scrollToAbout}
                        >
                            Bright Stage
                        </h1>

                        <ShinyText
                            text={'"Crafted Events, Classy Celebrations, Timeless Memories"'}
                            speed={3}
                            className="text-2xl font-bold italic text-oldGold-400"
                        />
                    </div>

                    {/* About Us Content */}
                    <div className="bg-[#f2f1da] rounded-2xl p-8 mb-12 border border-oldGold-500/30">
                        <h2 className="text-4xl font-bold text-center mb-8 text-oldGold-400 font-display" id="about-section">
                            About Us
                        </h2>
                        <div className="prose prose-lg max-w-none text-dark leading-relaxed">
                            <p className="mb-6 text-lg">
                                Bright Stage is a premium event management company that brings ideas to life with{' '}
                                <span className="font-bold text-oldGold-400">elegance, energy, and excellence</span>.
                                The name "Bright Stage" symbolizes a space where moments shine just like a spotlight on a performer.
                                It's about creating{' '}
                                <span className="font-bold text-oldGold-400">unforgettable experiences</span>,
                                whether it's a Beauty Pageant, Concerts, Corporate summit or cultural event.
                                The "Stage" represents{' '}
                                <span className="font-bold text-oldGold-400">success, celebration, and visibility</span>,
                                while "Bright" conveys positivity, brilliance, and high standards.
                                We craft events that are not just well-organized but emotionally memorable where every person,
                                brand, or idea gets their moment to shine.
                            </p>
                            <p className="mb-6 text-lg">
                                At Bright Stage, we don't just organize events we weave stories.{' '}
                                <span className="font-bold text-oldGold-400">Stories of love, culture, purpose & ambition</span>.
                                Every stage we set, every light we shine, and every moment we craft is designed to make people
                                feel special something real. From a CEO's keynote to a bride's big entry, from a cultural festival
                                to a cause-driven campaign we transform visions into experiences that live on long after the applause fades.
                            </p>
                        </div>
                    </div>

                    {/* Vision and Mission */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Vision */}
                        <div className="bg-[#f2f1da] rounded-2xl p-8 border border-oldGold-500/30">
                            <h3 className="text-3xl font-bold mb-6 text-oldGold-400 font-display">
                                Vision:
                            </h3>
                            <p className="text-lg italic text-dark leading-relaxed">
                                "To illuminate every celebration with elegance, brilliance, and unforgettable experiences."
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-[#f2f1da] rounded-2xl p-8 border border-oldGold-500/30">
                            <h3 className="text-3xl font-bold mb-6 text-oldGold-400 font-display">
                                Mission:
                            </h3>
                            <p className="text-lg italic text-dark leading-relaxed">
                                "Crafting flawlessly executed events where every moment shines, every story captivates,
                                and memories last a lifetime."
                            </p>
                        </div>
                    </div>

                    {/* Additional decorative elements */}
                    <div className="text-center mt-16">
                        <div className="inline-block">
                            <div className="w-24 h-1 bg-gradient-to-r from-oldGold-500 to-korma-500 mx-auto mb-4"></div>
                            <div className="w-16 h-1 bg-gradient-to-r from-korma-500 to-oldGold-500 mx-auto"></div>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-6 bg-[#f2f1da] p-8 rounded-lg shadow-md border border-[#d6ac45]/30">

                    <h2 className="text-2xl font-bold text-center mb-6">Our World of Experiences</h2>
                    <p className="text-dark-800 mb-4 text-center">
                        Corporate Excellence – <span className="font-semibold">Business with a Human Touch</span>
                    </p>
                    <p className="text-dark-700 mb-6 font-bold">
                        Conferences don’t have to be boring, and product launches <br /> don’t have to be predictable. We create corporate experiences <br /> that are polished yet personal, strategic yet memorable.                    </p>

                    <ul className="list-disc list-inside space-y-2 text-dark-700">
                        <li>Leadership Retreats & Strategy Summits</li>
                        <li>Annual Meets & Townhalls</li>
                        <li>Dealer Conferences & Partner Engagements</li>
                        <li>Product Launches & Brand Showcases</li>
                    </ul>
                </div>


                <div className="max-w-5xl mx-auto px-6 bg-[#f2f1da] p-8 rounded-lg shadow-md border border-[#d6ac45]/30 mt-12">
                    <h2 className="text-2xl font-bold mb-4 text-center">
                        Talent & Entertainment – Where Creativity Takes Center Stage
                    </h2>
                    <p className="text-dark-700 mb-6 font-bold">
                        A stage is more than wood and lights — it’s a launchpad for talent. <br /> We craft arenas where performers shine, artists connect, and <br /> audiences can’t stop cheering.
                    </p>

                    <ul className="list-disc list-inside space-y-2 text-dark-700">
                        <li>Beauty Pageants & Fashion Extravaganzas</li>
                        <li>Music Concerts, Dance & Theatre Nights</li>
                        <li>Art Exhibitions, Open Mics & Cultural Evenings</li>
                    </ul>
                </div>


            </section>



        </div>
    );
};

export default About;
