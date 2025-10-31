import React, { useRef, useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import destWedding from "../assets/Destination Weddings 3.jpg";
import corp from "../assets/BS Corporate 2.jpg";
import talent1 from "../assets/BS Talent 1.png";
import talent2 from "../assets/BS Talent 2.jpg";

const springConfig = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

const cards = [
  {
    title: "Destination Weddings",
    img: destWedding,
    alt: "Destination wedding",
    desc: "Bespoke celebrations at dream locations  every moment crafted to perfection.",
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
    desc: "High energy productions with seamless production and crowd experiences.",
  },
  {
    title: "MICE Events",
    img: talent2,
    alt: "MICE event",
    desc: "Meetings, incentives, conferences and exhibitions with meticulous planning.",
  },
];

// Lazy image loader (for performance)
const LazyImage = ({ src, alt, style }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "150px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <motion.img
      ref={ref}
      src={
        visible
          ? src
          : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
      }
      alt={alt}
      loading="lazy"
      decoding="async"
      style={style}
    />
  );
};

const Card = ({ title, img, alt, desc, index, onCardClick }) => {
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

  const handleMouseEnter = () => scale.set(1.05);
  const handleMouseLeave = () => {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
     onClick={() => onCardClick(title)}
      role="listitem"
      tabIndex="0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      viewport={{ once: false, amount: 0.3 }} // 🔥 Repeat every time it enters view
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "0.75rem",
        padding: "1.25rem",
        borderRadius: 12,
  background: "linear-gradient(135deg, #fffef8, #fdf6e6)",
        boxShadow:
          "0 6px 18px rgba(15,15,15,0.08), 0 2px 6px rgba(15,15,15,0.04)",
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
      <LazyImage
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
          transform: "translateZ(30px)",
        }}
      >
        {title}
      </motion.h3>
      <motion.p
        style={{
          margin: "0.4rem 0 0 0",
          color: "#555",
          fontSize: ".95rem",
          transform: "translateZ(25px)",
        }}
      >
        {desc}
      </motion.p>
    </motion.article>
  );
};

export default function Highlight({ onCardSelect } ) {
  return (
    <section
      aria-labelledby="highlight-heading"
      style={{
        padding: "3rem 1rem",
        background: "#d6ac45",

      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        style={{ maxWidth: 1200, margin: "0 auto" }}
      >
        <h2 className="section-heading"
          id="Services"
          style={{
            fontSize: "2.0rem",
            margin: "0 0 1rem 0",
            textAlign: "center",
            color: "#111",
            fontWeight: "700",
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
          We craft memorable experiences across a variety of event types  below are a few areas we
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
          {cards.map((c, index) => (
            <Card key={c.title} {...c} index={index}  onCardClick={onCardSelect}/>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
