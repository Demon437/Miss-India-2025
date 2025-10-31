// ...existing code...
import React from "react";

/**
 * Testimonials
 * - Shows 2–3 short video testimonials + text testimonials (name + review)
 * - Replace sample video src with /public paths (e.g. /videos/t1.mp4) or import local files
 * - Clean, premium look (soft shadow, rounded corners, subtle background)
 */
export default function Testimonials({ videos, reviews }) {
    const sampleVideos = videos && videos.length ? videos : [
        { id: 1, src: "/videos/testimonial1.mp4", poster: "https://via.placeholder.com/600x340.png?text=Client+1" },
        { id: 2, src: "/videos/testimonial2.mp4", poster: "https://via.placeholder.com/600x340.png?text=Client+2" },
        { id: 3, src: "/videos/testimonial3.mp4", poster: "https://via.placeholder.com/600x340.png?text=Client+3" }
    ];

    const sampleReviews = reviews && reviews.length ? reviews : [
        { id: 1, name: "Nikhil Sharma", text: "Bright-Stage transformed our website  results exceeded expectations." },
        { id: 2, name: "Priya Rao", text: "Outstanding design and fast delivery. Highly recommended." },
        { id: 3, name: "Arjun Mehta", text: "Professional team, clear communication, excellent outcomes." }
    ];

    return (
        <section
            aria-labelledby="testimonials-heading"
            style={{
                padding: 28,
                background: "linear-gradient(180deg, #ffffff 0%, #f6f9fc 100%)",
            }}
        >
            <h2 id="testimonials-heading" style={{ margin: "0 0 20px 0" }}>What clients say</h2>

            <div
                style={{
                    display: "grid",
                    gap: 20,
                    gridTemplateColumns: "1.15fr 0.85fr",
                    alignItems: "start",
                }}
            >
                {/* Videos column */}
                <div style={{ display: "grid", gap: 14 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
                        {sampleVideos.slice(0, 3).map((v) => (
                            <figure key={v.id} style={{ margin: 0, borderRadius: 12, overflow: "hidden", boxShadow: "0 10px 30px rgba(15,15,15,0.08)", background: "#000" }}>
                                <video
                                    src={v.src}
                                    poster={v.poster}
                                    controls
                                    playsInline
                                    style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
                                />
                            </figure>
                        ))}
                    </div>

                    <p style={{ margin: 0, color: "#444" }}>
                        Short video testimonials from happy clients authentic, concise, and powerful. Use /public/videos/your-file.mp4 or import files.
                    </p>
                </div>

                {/* Text testimonials column */}
                <aside style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {sampleReviews.map((r) => (
                        <div key={r.id} style={{
                            background: "#fff",
                            padding: 16,
                            borderRadius: 12,
                            boxShadow: "0 8px 24px rgba(15,15,15,0.06)",
                            border: "1px solid rgba(15,15,15,0.03)"
                        }}>
                            <p style={{ margin: "0 0 8px 0", color: "#222" }}>{r.text}</p>
                            <div style={{ fontSize: 13, color: "#666", fontWeight: 600 }}>{r.name}</div>
                        </div>
                    ))}
                </aside>
            </div>
        </section>
    );
}
