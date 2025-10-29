// ...existing code...
import React, { useEffect, useRef, useState } from "react";
import showreel from "../assets/website-showreel.mp4";
import VariableProximity from "./VariableProximity";

export default function Hero({ onDiscoverMore }) {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = videoRef.current;
        if (!node) return;
        if ("IntersectionObserver" in window) {
            const io = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setIsVisible(true);
                        }
                    });
                },
                { rootMargin: "200px 0px" }
            );
            io.observe(node);
            return () => io.disconnect();
        } else {
            setIsVisible(true);
        }
    }, []);

    return (
        <section style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
            {/* Background video as a cover backdrop */}
            <video
                ref={videoRef}
                src={isVisible ? showreel : undefined}
                autoPlay={isVisible}
                muted
                loop
                playsInline
                preload="none"
                poster="/assets/placeholder-dark.jpg"
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

                
                </div>
            </div>
        </section>
    );
}
// ...existing code...
