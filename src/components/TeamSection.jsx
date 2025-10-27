// ...existing code...
import React, { useState } from "react";

/**
 * TeamSection
 * - Shows team members with photo, name, position
 * - Click a member to open a modal with full bio (optional)
 *
 * Replace the placeholder photo URLs with your local images (e.g. import or /public paths).
 */
export default function TeamSection({ members }) {
    const sampleMembers = [
        {
            id: 1,
            name: "Aisha Khan",
            role: "Founder & CEO",
            photo: "https://via.placeholder.com/200x200.png?text=Aisha",
            bio: "Aisha leads product strategy and growth. 10+ years in design & startup leadership."
        },
        {
            id: 2,
            name: "Rohit Verma",
            role: "Lead Developer",
            photo: "https://via.placeholder.com/200x200.png?text=Rohit",
            bio: "Rohit architects our platform and leads the engineering team."
        },
        {
            id: 3,
            name: "Maya Singh",
            role: "Design Lead",
            photo: "https://via.placeholder.com/200x200.png?text=Maya",
            bio: "Maya crafts delightful user experiences and visual identity."
        }
    ];

    const list = members && members.length ? members : sampleMembers;
    const [active, setActive] = useState(null);

    return (
        <section aria-labelledby="team-heading" style={{ padding: 24 }}>
            <h2 id="team-heading" style={{ marginBottom: 16 }}>Meet the Team</h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: 16
                }}
            >
                {list.map((m) => (
                    <button
                        key={m.id}
                        onClick={() => setActive(m)}
                        style={{
                            textAlign: "left",
                            background: "#fff",
                            border: "1px solid #e6e6e6",
                            padding: 12,
                            borderRadius: 8,
                            cursor: "pointer"
                        }}
                        aria-haspopup="dialog"
                        aria-label={`Open bio for ${m.name}`}
                    >
                        <img
                            src={m.photo}
                            alt={m.name}
                            style={{
                                width: "100%",
                                height: 160,
                                objectFit: "cover",
                                borderRadius: 6,
                                marginBottom: 8
                            }}
                        />
                        <div style={{ fontWeight: 600 }}>{m.name}</div>
                        <div style={{ color: "#666", fontSize: 14 }}>{m.role}</div>
                    </button>
                ))}
            </div>

            {active && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${active.name} bio`}
                    onClick={() => setActive(null)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0,0,0,0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 20,
                        zIndex: 9999
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: "min(720px, 95%)",
                            background: "#fff",
                            borderRadius: 10,
                            padding: 20,
                            boxShadow: "0 8px 30px rgba(0,0,0,0.2)"
                        }}
                    >
                        <div style={{ display: "flex", gap: 16 }}>
                            <img
                                src={active.photo}
                                alt={active.name}
                                style={{ width: 140, height: 140, objectFit: "cover", borderRadius: 8 }}
                            />
                            <div>
                                <h3 style={{ margin: 0 }}>{active.name}</h3>
                                <p style={{ color: "#666", marginTop: 4 }}>{active.role}</p>
                                <p style={{ marginTop: 12 }}>{active.bio}</p>
                                <div style={{ marginTop: 12 }}>
                                    <button
                                        onClick={() => setActive(null)}
                                        style={{
                                            padding: "8px 12px",
                                            background: "#111",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: 6,
                                            cursor: "pointer"
                                        }}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
// ...existing code...