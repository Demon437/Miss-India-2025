import React from "react";
import { motion } from "framer-motion";
import corporateImg2 from "../assets/BS Corporate 2.jpg";
import talentImg2 from "../assets/BS Talent 2.jpg";
import weddings1 from "../assets/BS Weddings 1.jpg";
import corporateImg1 from "../assets/BS Corporate 1.jpg";
import csrImg from "../assets/BS CSR.jpg";
import brightStage from "../assets/Nikita_Porwal_Miss_India_2024_1729591164015_1729591173305.webp";
import "./About.css";
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
            title: "Beauty Pageants & Fashion Shows",
            subtitle: "Where elegance meets excellence.",
            desc: "",
            points: [
                "Corporate Events & Brand Launches — Strategic, engaging, unforgettable.",
                "Celebrity & Entertainment Acts — Star power that amplifies every stage.",
                "Weddings & Celebrations — Crafted with class, emotion, and detail.",
                "Private Parties & Family Galas — Intimate, stylish, and memorable.",
                "Cultural & CSR Events — Celebrating heritage. Inspiring change.",
            ],
            image: brightStage,
        },
        {
            title: "Talent & Entertainment",
            subtitle: "Where Creativity Takes Center Stage",
            desc: "A stage is more than wood and lights it’s a launchpad for talent. We craft arenas where performers shine, artists connect, and audiences can’t stop cheering.",
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
        {
            title: "CSR & Educational Impact",
            subtitle: "Events That Matter",
            desc: "When purpose meets creativity, impact multiplies. We help brands and organizations make their good work unforgettable through events that touch lives.",
            points: [
                "NGO Collaborations & Fundraising Galas",
                "Youth Festivals & Educational Seminars",
                "Green Drives, Sustainability Programs & Awareness Campaigns",
            ],
            image: csrImg,
        },

        
    ];

    return (
        <section className=" py-16 px-6 md:px-12" style={{
            background: "linear-gradient(135deg, #fffef8, #fdf6e6)"
        }}>



            {/* Section Heading */}
            <motion.h2
                className="text-3xl md:text-4xl font-semibold text-center mb-12 section-heading"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                Our World of Experiences
            </motion.h2>

            {/* Section Blocks */}
            <div className="space-y-20">
                {sections.map((item, index) => (
                    <motion.div
                        id={item.title.replace(/\s+/g, "-").toLowerCase()}
                        key={index}
                        className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        {/* Image */}
                        <motion.div

                            className="md:w-1/2 w-full"
                            initial={{ scale: 0.95, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                className="rounded-2xl shadow-xl w-full object-cover h-[350px]"
                            />



                            
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            className="md:w-1/2 w-full"
                            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                            <p className="italic text-gray-500 mb-3">{item.subtitle}</p>
                            <p className="text-gray-700 mb-4 leading-relaxed">{item.desc}</p>
                            <ul className="space-y-2 text-gray-700 list-disc list-inside">
                                {item.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Final Message Section */}
            <motion.div
                className="text-center max-w-3xl mx-auto mt-20 space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <p className="text-lg text-gray-700 leading-relaxed">
                    Because the best events don’t just entertain they inspire change.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Bright Stage is more than an event company  we are memory architects, emotion curators, and experience storytellers.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Wherever there’s a stage, we’ll make sure your story shines.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    With Bright Stage, every partnership is a promise of excellence, creativity, and memories that last forever.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-medium text-yellow-700">
                    Partnering with Bright Stage means your brand won’t just be seen it will be celebrated. Together, let’s create events that amplify visibility, engage audiences, and leave a lasting brand impression.
                </p>
            </motion.div>
        </section>
    );
};

export default OurWorld;
