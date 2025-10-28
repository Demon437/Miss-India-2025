import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import destWedding from "../assets/Destination Weddings 3.jpg";
import corp from "../assets/BS Corporate 2.jpg";
import talent1 from "../assets/BS Talent 1.png";
import talent2 from "../assets/BS Talent 2.jpg";

const springConfig = {
  damping: 30,
  stiffness: 100,
  mass: 2
};

const cards = [
  {
    title: "Destination Weddings",
    img: destWedding,
    alt: "Destination wedding",
    desc: "Bespoke celebrations at dream locations — every moment crafted to perfection.",
  },
  {
    title: "Corporate Events",
    img: corp,
    alt: "Corporate event",
    desc: "Professional, polished events that reflect your brand and objectives.",
  },
  {
    title: "Concerts & Shows",
    img: talent1,
    alt: "Concert or show",
    desc: "High-energy productions with seamless production and crowd experiences.",
  },
  {
    title: "MICE Events",
    img: talent2,
    alt: "MICE event",
    desc: "Meetings, incentives, conferences and exhibitions with meticulous planning.",
  },
];

const Card = ({ title, img, alt, desc }) => {
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  const scale = useSpring(1, springConfig);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const rotateXValue = ((mouseY - height / 2) / height) * -10;
    const rotateYValue = ((mouseX - width / 2) / width) * 10;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseEnter = () => {
    scale.set(1.05);
  };

  const handleMouseLeave = () => {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      role="listitem"
      tabIndex="0"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "0.75rem",
        padding: "1.25rem",
        borderRadius: 12,
        background: "#f8f8f8",
        boxShadow: "0 6px 18px rgba(15,15,15,0.08), 0 2px 6px rgba(15,15,15,0.04)",
        height: "100%",
        transformStyle: "preserve-3d",
        perspective: "1000px",
        rotateX,
        rotateY,
        scale,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.img
        src={img}
        alt={alt}
        style={{
          width: 200,
          height: 180,
          borderRadius: 8,
          objectFit: "cover",
          flex: "0 0 auto",
          display: "block",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.06)",
          transformStyle: "preserve-3d",
          transform: "translateZ(20px)",
        }}
      />
      <motion.h3
        style={{
          margin: "0.4rem 0 0 0",
          fontSize: "1.05rem",
          color: "#111",
          transform: "translateZ(30px)"
        }}
      >
        {title}
      </motion.h3>
      <motion.p
        style={{
          margin: "0.4rem 0 0 0",
          color: "#555",
          fontSize: ".95rem",
          transform: "translateZ(25px)"
        }}
      >
        {desc}
      </motion.p>
    </motion.article>
  );
};

export default function Highlight() {
  return (
    <section
      aria-labelledby="highlight-heading"
      style={{
        padding: "3rem 1rem",
        background: "#d6ac45",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2
          id="highlight-heading"
          style={{
            fontSize: "1.5rem",
            margin: "0 0 1rem 0",
            textAlign: "center",
            color: "#111",
            fontWeight: "600",
          }}
        >
          Our Expertise
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#444",
            margin: "0 0 2rem 0",
            maxWidth: 850,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          We craft memorable experiences across a variety of event types — below are a few areas we
          specialise in.
        </p>

        <div
          role="list"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
            alignItems: "stretch",
            gridAutoRows: "1fr",
          }}
        >
          {cards.map((c) => (
            <Card key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
