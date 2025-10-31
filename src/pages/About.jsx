import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import aboutImage from "../assets/About Us Bright stage.jpg";
import "./About.css";
import { motion } from "framer-motion";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [key, setKey] = useState(0);
  const statsRef = useRef(null);

  // 👇 NEW: for repeating animation on scroll
  const aboutRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting); // Start animation when visible
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  // Counter observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) setKey((prev) => prev + 1);
      },
      { threshold: 0.1 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ padding: 0, width: "100%" }}>
      <section style={{ backgroundColor: "white", width: "100%" }}>
        <h1 className="section-heading"
          style={{ 
            textAlign: "center",
            padding: "2rem 0",
            fontSize: "2.5rem",
            color: "#333",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            
            
          }}
        >
          About Us
        </h1>

        {/* ---------- Image + Text Section ---------- */}
        <div
          ref={aboutRef}
          style={{
            display: "flex",
            width: "100%",
            flexDirection: window.innerWidth <= 768 ? "column" : "row",
          }}
        >
          <motion.img
            src={aboutImage}
            alt="About Bright Stage"
            initial={{ opacity: 0, scale: 0.9, x: -40 }}
            animate={animate ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.9, x: -40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              width: window.innerWidth <= 768 ? "100%" : "50%",
              objectFit: "cover",
            }}
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={animate ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              flex: 1,
              padding: "2rem",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            <p
              style={{
                color: "#333",
                lineHeight: 1.8,
                marginBottom: 24,
                fontSize: "1.1rem",
                letterSpacing: "0.3px",
              }}
            >
              <b>Bright Stage</b> is a <b>premium event management company</b> that brings ideas to
              life with <b>elegance, energy, and excellence.</b> The name <b>"Bright Stage"</b> symbolizes a space where moments shine just like a spotlight on a performer. It’s about <b>creating unforgettable experiences,</b> whether it's a <b>Beauty Pageant, Concerts, Corporate summit or cultural event.</b> The "Stage" represents success, celebration, and visibility, while "Bright" conveys <b>positivity, brilliance,</b> and high <b>standards.</b> We craft events that are not just well-organized but emotionally memorable where every person, brand, or idea gets their moment to shine.
            </p>

            <p
              style={{
                color: "#333",
                lineHeight: 1.8,
                marginBottom: 24,
                fontSize: "1.1rem",
                letterSpacing: "0.3px",
              }}
            >
              At Bright Stage, we don’t just organize events <b>we weave stories. Stories of love, culture, purpose & ambition.</b> Every stage we set, every light we shine, and every moment we craft is designed to make people feel special something real. From a CEO’s keynote to a bride’s big entry, from a cultural festival to a cause-driven campaign we transform visions into experiences that live on long after the applause fades.
            </p>
          </motion.div>
        </div>

{/* ---------- Vision & Mission Cards ---------- */}
<motion.div 
  className="cards-container"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }}
>
  <motion.div 
    className="info-card"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 150 }}
  >
    <h2>Our Vision</h2>
    <p>To illuminate every celebration with elegance, brilliance, and unforgettable experiences.</p>
  </motion.div>

  <motion.div 
    className="info-card"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 150 }}
  >
    <h2>Our Mission</h2>
    <p>Crafting flawlessly executed events where every moment shines, every story captivates, and memories last a lifetime.</p>
  </motion.div>
</motion.div>


        {/* ---------- Stats Counter Section ---------- */}
        <div className="stats-section">
          
          <h2>Event Management Services That Turn Ideas into Reality</h2>

          <div className="stats-container" ref={statsRef}>
            <div className="stat-item">
              <h3>{isVisible && <CountUp key={key} start={0} end={33} duration={2.5} />}</h3>
              <p>Year Legacy</p>
            </div>

            <div className="stat-item">
              <h3>
                {isVisible && <CountUp key={key} start={0} end={10} duration={2.5} suffix="k" />}
              </h3>
              <p>Experiences Created</p>
            </div>

            <div className="stat-item">
              <h3>
                {isVisible && <CountUp key={key} start={0} end={50} duration={2.5} suffix="+" />}
              </h3>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
