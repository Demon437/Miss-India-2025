import React from 'react';
import ShinyText from '../components/ShinyText';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Corporate Events',
            description: 'From conferences to team building, we create professional atmospheres that inspire collaboration and success.',
            icon: '🏢',
            features: [
                'Conference Management',
                'Award Ceremonies',
                'Team Building Events',
                'Product Launches'
            ]
        },
        {
            id: 2,
            title: 'Celebrations',
            description: 'Turn your special moments into unforgettable memories with our bespoke celebration services.',
            icon: '🎉',
            features: [
                'Wedding Ceremonies',
                'Anniversary Parties',
                'Birthday Celebrations',
                'Graduation Events'
            ]
        },
        {
            id: 3,
            title: 'Entertainment Events',
            description: 'Create spectacular shows and performances that leave lasting impressions.',
            icon: '🎭',
            features: [
                'Music Concerts',
                'Theater Productions',
                'Fashion Shows',
                'Cultural Festivals'
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#1b3521]" id="services">
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-oldGold-500 via-korma-500 to-oldGold-500 bg-clip-text text-transparent font-display">
                            Our Services
                        </h1>
                        <ShinyText
                            text="Crafting Excellence in Every Event"
                            speed={3}
                            className="text-2xl font-bold italic text-oldGold-400"
                        />
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map(service => (
                            <div
                                key={service.id}
                                className="bg-[#f2f1da]/10 backdrop-blur-sm rounded-lg p-8 transform transition-all duration-300 hover:scale-105 hover:bg-[#f2f1da]/20"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-2xl font-bold text-oldGold-500 mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-ecruWhite-500 mb-6">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="text-ecruWhite-500/80 flex items-center"
                                        >
                                            <span className="text-oldGold-500 mr-2">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16">
                        <button
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className="bg-oldGold-500 text-[#1b3521] px-8 py-3 rounded-full font-bold hover:bg-oldGold-600 transition-colors duration-300"
                        >
                            Book Your Event
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;