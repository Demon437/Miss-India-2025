// ...existing code...
import React, { useRef } from "react";
import showreel from "../assets/15 sec website showreel.mp4";
import VariableProximity from "./VariableProximity";

export default function Hero() {
    const containerRef = useRef(null);

    return (
        <section style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
            {/* Background video as a cover backdrop */}
            <video
                src={showreel}
                autoPlay
                muted
                loop
                playsInline
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 0,
                }}
                aria-hidden="true"
            />

            {/* Dark transparent overlay with centered heading, subheading and CTA */}
            <div
                ref={containerRef}
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2rem",
                    zIndex: 1,
                }}
            >
                <div style={{ textAlign: "center", color: "#fff", maxWidth: "1200px", padding: "0 1rem" }}>
                    <h1
                        style={{
                            margin: 0,
                            fontWeight: "700",
                        }}
                    >
                        <VariableProximity
                            label={"Crafted Events, Classy Celebrations, Timeless Memories"}
                            className={"hero-proximity"}
                            fromFontVariationSettings={"'wght' 400, 'opsz' 9"}
                            toFontVariationSettings={"'wght' 1000, 'opsz' 40"}
                            containerRef={containerRef}
                            radius={140}
                            falloff="linear"
                            style={{
                                display: "inline-block",
                                fontSize: "clamp(1.5rem, 4.5vw, 3rem)",
                                lineHeight: 1.1,
                            }}
                        />
                    </h1>

                    <p
                        style={{
                            marginTop: "0.75rem",
                            marginBottom: "1.5rem",
                            fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
                            opacity: 0.95,
                        }}
                    >
                        Where every detail turns into a magical experience.
                    </p>

                    <a
                        href="#discover"
                        aria-label="Discover more about our events"
                        style={{
                            display: "inline-block",
                            padding: "0.75rem 1.25rem",
                            borderRadius: "6px",
                            fontWeight: 600,
                            color: "#fff",
                            backgroundColor: "#d6ac45",
                            boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
                            textDecoration: "none",
                            transition: "transform 150ms ease, filter 150ms ease",
                            cursor: "pointer",
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = "translateY(-3px)";
                            e.currentTarget.style.filter = "brightness(0.95)";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.filter = "brightness(1)";
                        }}
                    >
                        Discover More
                    </a>
                </div>
            </div>
        </section>
    );
}
// ...existing code...
