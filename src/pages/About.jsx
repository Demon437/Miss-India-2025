import React, { useEffect, useRef, useState } from "react";
import CountUp from 'react-countup';
import aboutImage from "../assets/About Us Bright stage.jpg";
import './About.css'; // Add this new CSS file

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const [key, setKey] = useState(0); // Add this new state
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Toggle visibility based on intersection
                setIsVisible(entry.isIntersecting);
                // Increment key when section becomes visible to force re-render
                if (entry.isIntersecting) {
                    setKey(prev => prev + 1);
                }
            },
            { threshold: 0.1 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    return (
        <main style={{
            padding: 0,
            fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
            width: "100%"
        }}>
            <section aria-labelledby="about-heading" style={{
                width: "100%",
                margin: "0",
                backgroundColor: "white",
                padding: "0",
                borderRadius: "0"
            }}>
                <h1 style={{
                    textAlign: "center",
                    padding: "2rem 0",
                    fontSize: "2.5rem",
                    color: "#333",
                    fontFamily: "'Playfair Display', serif",
                    margin: "0",
                    fontWeight: 700
                }}>About Us</h1>
                <div style={{ display: "flex", width: "100%", margin: 0 }}>
                    <img src={aboutImage} alt="About Bright Stage" style={{
                        width: "50%",
                        height: "auto", // Changed from fixed 500px to auto
                        objectFit: "cover",
                        alignSelf: "center" // Added to vertically align with content
                    }} />
                    <div style={{
                        flex: 1,
                        padding: "2rem",
                        fontFamily: "'Playfair Display', serif" // Add this elegant font
                    }}>
                        <p style={{
                            color: "#333",
                            lineHeight: 1.8,
                            marginBottom: 24,
                            fontSize: "1.1rem",
                            fontWeight: 400,
                            letterSpacing: "0.3px"
                        }}>
                            Bright Stage is a premium event management company that brings ideas to life with elegance, energy, and excellence. The name "Bright Stage" symbolizes a space where moments shine just like a spotlight on a performer. It's about creating unforgettable experiences, whether it's a Beauty Pageant, Concerts, Corporate summit or cultural event. The "Stage" represents success, celebration, and visibility, while "Bright" conveys positivity, brilliance, and high standards. We craft events that are not just well-organized but emotionally memorable where every person, brand, or idea gets their moment to shine.
                        </p>
                        <p style={{
                            color: "#333",
                            lineHeight: 1.8,
                            marginBottom: 24,
                            fontSize: "1.1rem",
                            fontWeight: 400,
                            letterSpacing: "0.3px"
                        }}>
                            At Bright Stage, we don't just organize events we weave stories. Stories of love, culture, purpose & ambition. Every stage we set, every light we shine, and every moment we craft is designed to make people feel special something real. From a CEO's keynote to a bride's big entry, from a cultural festival to a cause-driven campaign we transform visions into experiences that live on long after the applause fades.
                        </p>
                    </div>
                </div>

                <div className="cards-container">
                    <div className="card vision-card">
                        <h2>Our Vision</h2>
                        <p>"To illuminate every celebration with elegance, brilliance, and unforgettable experiences."</p>
                    </div>

                    <div className="card mission-card ">
                        <h2>Our Mission</h2>
                        <p>"Crafting flawlessly executed events where every moment shines, every story captivates, and memories last a lifetime."</p>
                    </div>
                </div>

                <div className="stats-section">
                    <h2>Event Management Services That Turn Ideas into Reality</h2>
                    <div className="stats-container" ref={statsRef}>
                        <div className="stat-item">
                            <h3>
                                {isVisible && (
                                    <CountUp key={key} start={0} end={33} duration={2.5} />
                                )}
                            </h3>
                            <p>Year Legacy</p>
                        </div>
                        <div className="stat-item">
                            <h3>
                                {isVisible && (
                                    <CountUp key={key} start={0} end={10} duration={2.5} suffix="K" />
                                )}
                            </h3>
                            <p>Experiences Created</p>
                        </div>
                        <div className="stat-item">
                            <h3>
                                {isVisible && (
                                    <CountUp key={key} start={0} end={50} duration={2.5} suffix="+" />
                                )}
                            </h3>
                            <p>Awards Won</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
