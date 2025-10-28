import React from "react";
import aboutImage from "../assets/ab.jpg";
import './About.css'; // Add this new CSS file

export default function About() {
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
                <div style={{ display: "flex", width: "100%", margin: 0 }}>
                    <img src={aboutImage} alt="About Bright Stage" style={{
                        width: "50%",
                        height: "500px",
                        objectFit: "cover"
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

                    <div className="card mission-card">
                        <h2>Our Mission</h2>
                        <p>"Crafting flawlessly executed events where every moment shines, every story captivates, and memories last a lifetime."</p>
                    </div>
                </div>

                <div className="stats-section">
                    <h2>Event Management Services That Turn Ideas into Reality</h2>
                    <div className="stats-container">
                        <div className="stat-item">
                            <h3>33</h3>
                            <p>Year Legacy</p>
                        </div>
                        <div className="stat-item">
                            <h3>10K</h3>
                            <p>Experiences Created</p>
                        </div>
                        <div className="stat-item">
                            <h3>50+</h3>
                            <p>Awards Won</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
