import React, { useEffect, useRef, useState } from "react";
import showreel from "../assets/website-showreel.mp4";
import logoImage from "../assets/WhatsApp_Image_2025-10-15_at_14.51.55_3ae3ffed-removebg-preview.png";
import VariableProximity from "./VariableProximity";

export default function Hero({ onNavigateSection }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isVisible) {
      video.muted = false;
      video
        .play()
        .catch((err) => console.log("Autoplay blocked:", err));
    } else {
      video.muted = true;
      video.pause();
    }
  }, [isVisible]);

  const menuItems = ["Home", "Explore", "Femina", "Team", "About Us", "Contact"];

  const handleNavClick = (label) => {
    const idMap = {
      "Home": "home",
      "About Us": "about",
      "Explore": "services",
      "Team": "team",
      "Contact": "contact",
    };
    if (label === "Femina") {
      if (typeof onNavigateSection === "function") onNavigateSection("form");
      return;
    }
    const sectionId = idMap[label];
    const element = sectionId ? document.getElementById(sectionId) : null;
    if (element) {
      const headerHeight = 64;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    } else if (typeof onNavigateSection === "function" && sectionId) {
      onNavigateSection(sectionId);
    }
  };

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* 🎥 Background video */}
      <video
        ref={videoRef}
        src={showreel}
        autoPlay
        loop
        playsInline
        preload="metadata"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* 🧭 Transparent Header */}
      <header
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "2rem",
          zIndex: 2,
          color: "#fff",
        }}
      >
        {/* Logo */}
        <img
          src={logoImage}
          alt="Bright Stage Logo"
          style={{
            width: "120px",
            height: "120px",
            objectFit: "contain",
            marginBottom: "1.0rem",
          }}
        />

     

        {/* Navigation Menu */}
        <nav>
          <ul
            style={{
              display: "flex",
              gap: "2.5rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                  style={{
                    color: hoveredIndex === index ? "#000" : "#fff",
                    textDecoration: "none",
                    fontSize: "1rem",
                    letterSpacing: "1px",
                    fontWeight: 500,
                    padding: "6px 14px",
                    borderRadius: "40px",
                    background:
                      hoveredIndex === index
                        ? "linear-gradient(90deg, #d6ac45, #f7e08c)"
                        : "transparent",
                    boxShadow:
                      hoveredIndex === index
                        ? "0 0 10px rgba(214,172,69,0.6)"
                        : "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* 🌟 Overlay content */}
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
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1200px" }}>
          <h1 style={{ margin: 0, fontWeight: "700" }}>
            <VariableProximity
              label="Crafted Events, Classy Celebrations, Timeless Memories"
              className="hero-proximity"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
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
