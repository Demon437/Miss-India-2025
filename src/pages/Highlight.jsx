import React from "react";
import destWedding from "../assets/Destination Weddings 3.jpg";
import corp from "../assets/BS Corporate 2.jpg";
import talent1 from "../assets/BS Talent 1.png";
import talent2 from "../assets/BS Talent 2.jpg";

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

export default function Highlight() {
  return (
    <section
      aria-labelledby="highlight-heading"
      style={{
        padding: "3rem 1rem",
        background: "#fff",
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
            gridAutoRows: "1fr", // <-- ensure each grid cell / row gets equal height
          }}
        >
          {cards.map((c) => (
            <article
              key={c.title}
              role="listitem"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "0.75rem",
                padding: "1.25rem",
                borderRadius: 12,
                background: "#f8f8f8",
                boxShadow: "0 4px 14px rgba(15,15,15,0.06)",
                transition: "transform 150ms ease, box-shadow 150ms ease",
                cursor: "default",
                height: "100%", // <-- fill the grid row so all cards match height
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(15,15,15,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 14px rgba(15,15,15,0.06)";
              }}
            >
              <img
                src={c.img}
                alt={c.alt}
                // fixed rendered size so all cards show same image height
                style={{
                  width: 200,           // enforce consistent width (px)
                  height: 180,          // enforce consistent height (px)
                  borderRadius: 8,
                  objectFit: "cover",   // crop to fit the frame
                  flex: "0 0 auto",
                  display: "block",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                }}
              />

              <h3 style={{ margin: "0.4rem 0 0 0", fontSize: "1.05rem", color: "#111" }}>{c.title}</h3>
              <p style={{ margin: "0.4rem 0 0 0", color: "#555", fontSize: ".95rem" }}>{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
