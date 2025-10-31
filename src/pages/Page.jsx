import React, { useRef, useEffect, useState } from "react";

const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "gallery", label: "Gallery & Updates" },
    { id: "clients", label: "Our Customers" },
    { id: "team", label: "Meet the Team" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
];

export default function Page() {
    const refs = {
        home: useRef(null),
        about: useRef(null),
        services: useRef(null),
        gallery: useRef(null),
        clients: useRef(null),
        team: useRef(null),
        testimonials: useRef(null),
        contact: useRef(null),
    };

    const [active, setActive] = useState("home");
    const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

    const scrollTo = (key) => {
        refs[key].current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    useEffect(() => {
        const observerOptions = { root: null, rootMargin: "0px 0px -40% 0px", threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }
            });
        }, observerOptions);

        Object.values(refs).forEach((r) => {
            if (r.current) observer.observe(r.current);
        });

        return () => observer.disconnect();
    }, []);

    const handleContactChange = (e) => {
        const { name, value } = e.target;
        setContactForm((s) => ({ ...s, [name]: value }));
    };

    const handleContactSubmit = (e) => {
        e.preventDefault();
        // placeholder behavior wire to backend/CMS later
        alert(`Thanks, ${contactForm.name || "there"} we'll get back to ${contactForm.email || "you"}.`);
        setContactForm({ name: "", email: "", message: "" });
    };

    const styles = {
        page: { fontFamily: "Inter, system-ui, Arial, sans-serif", color: "#222", lineHeight: 1.5, background: "#fff" },
        skip: { position: "absolute", left: -9999, top: "auto", width: 1, height: 1, overflow: "hidden" },
        ribbon: {
            position: "sticky",
            top: 0,
            zIndex: 50,
            background: "#fff",
            borderBottom: "1px solid #eee",
            boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
        },
        nav: { maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", padding: "12px 20px" },
        brand: { fontWeight: 700, marginRight: 20 },
        navList: { display: "flex", gap: 8, listStyle: "none", margin: 0, padding: 0, marginLeft: "auto" },
        navItem: {},
        navButton: {
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "8px 12px",
            borderRadius: 6,
            color: "#333",
        },
        navButtonActive: {
            background: "#111827",
            color: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        },
        main: { maxWidth: 1200, margin: "0 auto", padding: "24px 20px" },
        hero: { display: "grid", gap: 16, marginBottom: 36, gridTemplateColumns: "1fr", alignItems: "start" },
        heroInner: { maxWidth: 760 },
        title: { margin: "8px 0 4px", fontSize: 34 },
        lead: { color: "#444", marginBottom: 12 },
        ctaRow: { display: "flex", gap: 8, marginTop: 8 },
        primaryBtn: { background: "#111827", color: "#fff", border: "none", padding: "10px 14px", borderRadius: 8, cursor: "pointer" },
        ghostBtn: { background: "transparent", border: "1px solid #ddd", padding: "10px 14px", borderRadius: 8, cursor: "pointer" },
        heroVideo: { marginTop: 8 },
        video: { width: "100%", height: "auto", borderRadius: 8, background: "#000" },
        section: { padding: "40px 0", borderTop: "1px solid #f0f0f0" },
        galleryGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 },
        card: { margin: 0 },
        cardImg: { width: "100%", height: "auto", borderRadius: 6, display: "block" },
        cardCaption: { fontSize: 13, color: "#555", marginTop: 8 },
        clientsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12, alignItems: "center" },
        clientCard: { display: "flex", alignItems: "center", justifyContent: "center", padding: 12, background: "#fff", borderRadius: 8, border: "1px solid #f3f3f3" },
        clientLogo: { maxWidth: "100%", height: "auto", objectFit: "contain" },
        teamGrid: { display: "flex", gap: 12, flexWrap: "wrap" },
        teamCard: { width: 200, textAlign: "center" },
        teamImg: { width: "100%", borderRadius: 8, marginBottom: 8 },
        testGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 },
        testCard: { padding: 16, background: "#fafafa", borderRadius: 8 },
        contactForm: { display: "grid", gap: 8, maxWidth: 640 },
        label: { display: "flex", flexDirection: "column", fontSize: 14, color: "#333" },
        input: { padding: 10, borderRadius: 6, border: "1px solid #e6e6e6", marginTop: 6 },
        footer: { textAlign: "center", padding: 20, color: "#666", borderTop: "1px solid #f0f0f0" },
    };

    return (
        <div style={styles.page}>
            <a href="#main" style={styles.skip}>Skip to content</a>

            <header style={styles.ribbon}>
                <nav style={styles.nav} aria-label="Top navigation">
                    <div style={styles.brand}>Bright Stage</div>
                    <ul style={styles.navList}>
                        {navItems.map((n) => (
                            <li key={n.id} style={styles.navItem}>
                                <button
                                    style={{
                                        ...styles.navButton,
                                        ...(active === n.id ? styles.navButtonActive : {}),
                                    }}
                                    aria-current={active === n.id ? "true" : undefined}
                                    onClick={() => scrollTo(n.id)}
                                >
                                    {n.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <main id="main" style={styles.main}>
                <section ref={refs.home} id="home" style={styles.hero}>
                    <div style={styles.heroInner}>
                        <h1 style={styles.title}>BrightStage Crafted Events, Classy Celebrations</h1>
                        <p style={styles.lead}>
                            Timeless memories, premium experiences. Scroll to explore our services and work.
                        </p>
                        <div style={styles.ctaRow}>
                            <button style={styles.primaryBtn} onClick={() => scrollTo("services")}>Our Services</button>
                            <button style={styles.ghostBtn} onClick={() => scrollTo("gallery")}>View Gallery</button>
                        </div>
                    </div>

                    <div style={styles.heroVideo}>
                        <VisibilityVideo
                            src="/assets/intro.mp4"
                            poster="https://via.placeholder.com/1200x600?text=Intro+Video+Placeholder"
                            style={styles.video}
                        />
                    </div>
                </section>

                <section ref={refs.about} id="about" style={styles.section}>
                    <h2>About Us</h2>
                    <p>
                        Story-driven About page showcasing BrightStage's journey, experience and legacy. We design premium, elegant events and deliver polished experiences.
                    </p>
                </section>

                <section ref={refs.services} id="services" style={styles.section}>
                    <h2>Services</h2>
                    <ul>
                        <li>Event Planning & Execution</li>
                        <li>Venue Design & Styling</li>
                        <li>Audio/Visual & Production</li>
                        <li>MICE & Corporate Events</li>
                    </ul>
                </section>

                <section ref={refs.gallery} id="gallery" style={styles.section}>
                    <h2>Gallery & Updates</h2>
                    <p>Editable section for photos, videos and announcements (CMS-friendly).</p>
                    <div style={styles.galleryGrid}>
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <figure key={i} style={styles.card}>
                                <img
                                    alt={`Event ${i}`}
                                    src={`https://via.placeholder.com/400x300?text=Event+${i}`}
                                    style={styles.cardImg}
                                />
                                <figcaption style={styles.cardCaption}>Event {i} short note</figcaption>
                            </figure>
                        ))}
                    </div>
                </section>

                <section ref={refs.clients} id="clients" style={styles.section}>
                    <h2>Our Customers</h2>
                    <p>Client logos and featured events.</p>
                    <div style={styles.clientsGrid}>
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} style={styles.clientCard}>
                                <img alt={`Client ${i}`} src={`https://via.placeholder.com/180x80?text=Client+${i}`} style={styles.clientLogo} />
                            </div>
                        ))}
                    </div>
                </section>

                <section ref={refs.team} id="team" style={styles.section}>
                    <h2>Meet the Team</h2>
                    <p>Showcase BrightStage leadership and creative team in a people-first design.</p>
                    <div style={styles.teamGrid}>
                        {["Lead Planner", "Creative Director", "Production Head"].map((role, idx) => (
                            <div key={idx} style={styles.teamCard}>
                                <img
                                    alt={role}
                                    src={`https://via.placeholder.com/200?text=${encodeURIComponent(role)}`}
                                    style={styles.teamImg}
                                />
                                <strong>{role}</strong>
                                <p>Short bio and role description.</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section ref={refs.testimonials} id="testimonials" style={styles.section}>
                    <h2>Testimonials</h2>
                    <div style={styles.testGrid}>
                        {[
                            "Lively snippets, short client testimonial.",
                            "Very professional and elegant experience.",
                        ].map((t, i) => (
                            <blockquote key={i} style={styles.testCard}>
                                {t}
                            </blockquote>
                        ))}
                    </div>
                </section>

                <section ref={refs.contact} id="contact" style={styles.section}>
                    <h2>Contact</h2>
                    <p>Contact form or CMS-managed contact details can be placed here.</p>

                    <form onSubmit={handleContactSubmit} style={styles.contactForm}>
                        <label style={styles.label}>
                            Name
                            <input name="name" value={contactForm.name} onChange={handleContactChange} style={styles.input} />
                        </label>

                        <label style={styles.label}>
                            Email
                            <input name="email" value={contactForm.email} onChange={handleContactChange} style={styles.input} type="email" />
                        </label>

                        <label style={styles.label}>
                            Message
                            <textarea name="message" value={contactForm.message} onChange={handleContactChange} style={{ ...styles.input, minHeight: 100 }} />
                        </label>

                        <div style={{ display: "flex", gap: 8 }}>
                            <button type="submit" style={styles.primaryBtn}>Send Message</button>
                            <button type="button" style={styles.ghostBtn} onClick={() => setContactForm({ name: "", email: "", message: "" })}>Reset</button>
                        </div>
                    </form>

                    <address style={{ marginTop: 16 }}>
                        <strong>Bright Stage</strong>
                        <br />
                        hello@brightstage.example
                    </address>
                </section>
            </main>

            <footer style={styles.footer}>
                © {new Date().getFullYear()} Bright Stage Elegant events & timeless memories.
            </footer>
        </div>
    );
}

function VisibilityVideo({ src, poster, style }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        if ("IntersectionObserver" in window) {
            const io = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setVisible(true);
                });
            }, { rootMargin: '200px 0px' });
            io.observe(node);
            return () => io.disconnect();
        } else {
            setVisible(true);
        }
    }, []);

    return (
        <video
            ref={ref}
            src={visible ? src : undefined}
            poster={poster}
            style={style}
            controls
            muted
            loop
            playsInline
            preload="none"
        >
            Your browser does not support the video tag.
        </video>
    );
}

