import React from "react";
import "./ClientsSection.css";

/**
 * ClientsSection
 * - Shows client logos in a responsive grid
 * - Logos are grayscale by default and become colored on hover / focus
 *
 * Props:
 * - logos: [{ src, alt, href? }]  // if not provided, replace placeholders with real assets
 */
export default function ClientsSection({ logos }) {
  const defaultLogos = [
    { src: "/assets/clients/client-1.png", alt: "Client 1" },
    { src: "/assets/clients/client-2.png", alt: "Client 2" },
    { src: "/assets/clients/client-3.png", alt: "Client 3" },
    { src: "/assets/clients/client-4.png", alt: "Client 4" },
    { src: "/assets/clients/client-5.png", alt: "Client 5" },
    { src: "/assets/clients/client-6.png", alt: "Client 6" },
  ];

  const items = logos && logos.length ? logos : defaultLogos;

  return (
    <section className="clients-section" aria-labelledby="clients-heading">
      <div className="container">
        <h2 id="clients-heading" className="clients-title">
          Our Clients
        </h2>
        <p className="clients-sub">
          Trusted by brands that partnered with BrightStage
        </p>

        <ul className="clients-grid" role="list">
          {items.map((logo, i) => {
            const content = (
              <img
                src={logo.src}
                alt={logo.alt || `Client ${i + 1}`}
                className="client-logo"
                loading="lazy"
                width="160"
                height="80"
              />
            );

            return (
              <li className="client-item" key={i}>
                {logo.href ? (
                  <a
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="client-link"
                    aria-label={`Visit ${logo.alt || "client"} website`}
                  >
                    {content}
                  </a>
                ) : (
                  <div className="client-link" tabIndex={0}>
                    {content}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
