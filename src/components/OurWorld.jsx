import React from "react";
import corporateImg2 from "../assets/BS Corporate 2.jpg";
import talentImg2 from "../assets/BS Talent 2.jpg";
import weddings1 from "../assets/BS Weddings 1.jpg";
import corporateImg1 from "../assets/BS Corporate 1.jpg";

const OurWorld = () => {
    const sections = [
        {
            title: "Corporate Excellence",
            subtitle: "Business with a Human Touch",
            desc: "Conferences don’t have to be boring, and product launches don’t have to be predictable. We create corporate experiences that are polished yet personal, strategic yet memorable.",
            points: [
                "Leadership Retreats & Strategy Summits",
                "Annual Meets & Townhalls",
                "Dealer Conferences & Partner Engagements",
                "Product Launches & Brand Showcases",
                
            ],
            image: corporateImg2,
        },
        {
            title: "Talent & Entertainment",
            subtitle: "Where Creativity Takes Center Stage",
            desc: "A stage is more than wood and lights — it’s a launchpad for talent. We craft arenas where performers shine, artists connect, and audiences can’t stop cheering.",
            points: [
                "Beauty Pageants & Fashion Extravaganzas",
                "Music Concerts, Dance & Theatre Nights",
                "Art Exhibitions, Open Mics & Cultural Evenings",
               
            ],
            image: talentImg2,
        },
        {
            title: "Weddings & Celebrations",
            subtitle: "Turning “I Do” into “Wow”",
            desc: "Love stories deserve stages as grand as the emotions behind them. Whether it’s a destination wedding by the sea or a sparkling anniversary gala, we make celebrations unforgettable.",
            points: [
                "Destination Weddings & Royal Celebrations",
                "Designer Décor & Show-Stopping Bridal Entries",
                "Engagements, Anniversaries & Family Galas",
                "Celebrity Acts & Full Wedding Planning",
               
            ],
            image: weddings1,
        },
        {
            title: "Government & Cultural Grandeur",
            subtitle: "Tradition Meets Transformation",
            desc: "From festivals that echo heritage to public ceremonies that mark history, we give communities not just events, but memories they proudly belong to.",
            points: [
                "State-Sponsored Ceremonies & National Events",
                "Cultural Festivals, Lok Utsavs & Awareness Campaigns",
                "Melas, Trade Expos & Record-Making Events",
                
            ],
            image: corporateImg1,
        },
    ];

    return (
        <section className="bg-white py-16 px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
                Our World of Experiences
            </h2>

            <div className="space-y-20">
                {sections.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Image */}
                        <div className="md:w-1/2 w-full">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="rounded-2xl shadow-lg w-full object-cover h-[350px]"
                            />
                        </div>

                        {/* Content */}
                        <div className="md:w-1/2 w-full">
                            <h3 className="text-2xl font-bold text-gray-800">
                                {item.title}
                            </h3>
                            <p className="italic text-gray-500 mb-3">{item.subtitle}</p>
                            <p className="text-gray-700 mb-4 leading-relaxed">{item.desc}</p>
                            <ul className="space-y-2 text-gray-700 list-disc list-inside">
                                {item.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurWorld;
