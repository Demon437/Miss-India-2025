import React from "react";

export default function About() {
    return (
        <main style={{ padding: 28, fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}>
            <section aria-labelledby="about-heading" style={{ maxWidth: 1100, margin: "0 auto" }}>
                <h1 id="about-heading" style={{ fontSize: 32, marginBottom: 12 }}>About Bright-Stage</h1>

                <p style={{ color: "#556", lineHeight: 1.7, marginBottom: 24 }}>
                    Bright-Stage crafts memorable events and digital experiences — from product launches to curated cultural shows.
                    We blend creative direction, production expertise and data-led planning to deliver moments that connect with audiences.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 20, alignItems: "start" }}>
                    <div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                            <article style={{ background: "#fff", padding: 18, borderRadius: 12, boxShadow: "0 10px 30px rgba(10,20,30,0.06)", border: "1px solid rgba(10,20,30,0.03)" }}>
                                <h2 style={{ margin: "0 0 8px 0", fontSize: 18 }}>Our Vision</h2>
                                <p style={{ margin: 0, color: "#444", lineHeight: 1.6 }}>
                                    To be the studio that turns ideas into immersive experiences — uplifting audiences and creating lasting impact.
                                </p>
                            </article>

                            <article style={{ background: "#fff", padding: 18, borderRadius: 12, boxShadow: "0 10px 30px rgba(10,20,30,0.06)", border: "1px solid rgba(10,20,30,0.03)" }}>
                                <h2 style={{ margin: "0 0 8px 0", fontSize: 18 }}>Our Mission</h2>
                                <p style={{ margin: 0, color: "#444", lineHeight: 1.6 }}>
                                    Deliver beautifully executed events through strategic storytelling, flawless production, and measurable outcomes.
                                </p>
                            </article>
                        </div>

                        <div style={{ marginTop: 18 }}>
                            <h3 style={{ margin: "0 0 10px 0" }}>What we do</h3>
                            <ul style={{ margin: 0, paddingLeft: 18, color: "#444", lineHeight: 1.7 }}>
                                <li>Product launches & brand experiences</li>
                                <li>Corporate conferences & summits</li>
                                <li>Live shows, cultural events & performances</li>
                                <li>Creative direction, stage design & AV production</li>
                            </ul>
                        </div>
                    </div>

                    <aside style={{ background: "#f8fbff", padding: 18, borderRadius: 12, border: "1px solid rgba(10,20,30,0.03)" }}>
                        <h3 style={{ marginTop: 0 }}>Why choose us</h3>
                        <p style={{ color: "#444", lineHeight: 1.6 }}>
                            Experienced producers, creative-first approach, and a client-focused process — we make complex events look effortless.
                        </p>

                        <div style={{ marginTop: 12, display: "grid", gap: 8 }}>
                            <div style={{ background: "#fff", padding: 10, borderRadius: 8, boxShadow: "0 6px 18px rgba(10,20,30,0.04)" }}>
                                <strong>End-to-end production</strong>
                                <div style={{ fontSize: 13, color: "#666" }}>Concept → Design → Execute</div>
                            </div>

                            <div style={{ background: "#fff", padding: 10, borderRadius: 8, boxShadow: "0 6px 18px rgba(10,20,30,0.04)" }}>
                                <strong>Trusted partners</strong>
                                <div style={{ fontSize: 13, color: "#666" }}>Vetted vendors & reliable crew</div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    );
}
