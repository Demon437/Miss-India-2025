import React, { useEffect, useRef, useState } from "react";
import showreel from "../assets/website-showreel.mp4";
import VariableProximity from "./VariableProximity";

export default function Hero() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // 👀 IntersectionObserver to detect hero visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 } // 50% hero visible then "visible"
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // 🎵 Control video play/pause and sound automatically
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible) {
      // when hero visible → unmute and play
      video.muted = false;
      video
        .play()
        .then(() => console.log("Video playing with sound"))
        .catch((err) => console.log("Autoplay blocked:", err));
    } else {
      // when hero out of view → mute and pause
      video.muted = true;
      video.pause();
    }
  }, [isVisible]);

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

      {/* 🔳 Overlay content */}
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
              className="hero-proximity "
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
