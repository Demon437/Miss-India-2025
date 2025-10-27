import React, { useEffect, useState, useRef } from "react";

// Update the color constants at the top
const DEFAULT_BG = "#1a2902";  // Dark green from logo
const DEFAULT_TEXT = "#ffd700"; // Gold from logo
const ACCENT_COLOR = "#d6ac45"; // Slightly darker gold for buttons/accents

const STORAGE_KEY = "bright_stage_gallery_v1";
const ANN_KEY = "bright_stage_announcements_v1";

function defaultData() {
    return {
        media: [
            // Example items (will be replaced when editing)
            { id: "m1", type: "image", src: "/placeholder1.jpg", title: "Event 1", date: "2025-10-01" },
            { id: "m2", type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Event 2 (video)", date: "2025-09-20" },
        ],
        announcements: [
            { id: "a1", text: "Welcome to the Gallery — check latest events!", date: "2025-10-10" },
        ],
    };
}

export default function Gallery({ isAdmin = true }) {
    const [data, setData] = useState(defaultData());
    const [editing, setEditing] = useState(false);
    const imageInputRef = useRef(null);
    const videoInputRef = useRef(null);

    useEffect(() => {
        const saved = loadFromStorage();
        if (saved) setData(saved);
    }, []);

    function loadFromStorage() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return null;
            return JSON.parse(raw);
        } catch {
            return null;
        }
    }

    function saveToStorage(next) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch (e) {
            console.warn("Failed saving gallery data", e);
        }
    }

    function addMedia(fileOrUrl, type = "image") {
        const id = "m" + Date.now();
        if (fileOrUrl instanceof File) {
            const src = URL.createObjectURL(fileOrUrl);
            const item = { id, type, src, title: fileOrUrl.name, date: new Date().toISOString().slice(0, 10) };
            updateData({ media: [item, ...data.media] });
        } else {
            // assume URL
            const item = { id, type, src: fileOrUrl, title: "", date: new Date().toISOString().slice(0, 10) };
            updateData({ media: [item, ...data.media] });
        }
    }

    function updateData(patch) {
        const next = { ...data, ...patch };
        // merge arrays if provided
        if (patch.media) {
            // Clean up any old object URLs before updating
            data.media.forEach(item => {
                if (item.src.startsWith('blob:')) {
                    URL.revokeObjectURL(item.src);
                }
            });
            next.media = patch.media;
        }
        if (patch.announcements) next.announcements = patch.announcements;
        setData(next);
        saveToStorage(next);
    }

    // Updated removeMedia function with cleanup
    function removeMedia(id) {
        const item = data.media.find(m => m.id === id);
        if (item && item.src.startsWith('blob:')) {
            URL.revokeObjectURL(item.src);
        }
        updateData({ media: data.media.filter((m) => m.id !== id) });
    }

    function addAnnouncement(text) {
        const ann = { id: "a" + Date.now(), text, date: new Date().toISOString().slice(0, 10) };
        updateData({ announcements: [ann, ...data.announcements] });
    }

    function removeAnnouncement(id) {
        updateData({ announcements: data.announcements.filter((a) => a.id !== id) });
    }

    // Small helper for file input
    function onFileInput(e, type = "image") {
        const file = e.target.files && e.target.files[0];
        if (file) addMedia(file, type);
        e.target.value = "";
    }

    return (
        <section
            className="gallery-section"
            style={{
                padding: 20,
                backgroundColor: '#f2f1da',
                color: DEFAULT_TEXT,
            }}
        >
            {/* Update button styles */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <h2 style={{ color: '#000000' }}>Gallery — Latest Events</h2>
                {isAdmin && (
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <button
                            onClick={() => setEditing((s) => !s)}
                            style={{
                                backgroundColor: ACCENT_COLOR,
                                color: DEFAULT_BG,
                                border: 'none',
                                padding: '8px 16px',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            {editing ? "Done" : "Edit"}
                        </button>

                        <input ref={imageInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => onFileInput(e, "image")} />
                        <button
                            type="button"
                            title="Upload image"
                            onClick={() => imageInputRef.current && imageInputRef.current.click()}
                            style={{
                                backgroundColor: ACCENT_COLOR,
                                color: DEFAULT_BG,
                                border: 'none',
                                padding: '8px 16px',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            Upload Image
                        </button>

                        <input ref={videoInputRef} type="file" accept="video/*" style={{ display: "none" }} onChange={(e) => onFileInput(e, "video")} />
                        <button
                            type="button"
                            title="Upload video"
                            onClick={() => videoInputRef.current && videoInputRef.current.click()}
                            style={{
                                backgroundColor: ACCENT_COLOR,
                                color: DEFAULT_BG,
                                border: 'none',
                                padding: '8px 16px',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            Upload Video
                        </button>
                    </div>
                )}
            </div>

            {/* Update media grid styles */}
            <div className="media-grid" style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: 12,
                marginBottom: 18,
            }}>
                {data.media.map((m) => (
                    <figure key={m.id} style={{
                        margin: 0,
                        position: "relative",
                        border: `1px solid ${ACCENT_COLOR}`,
                        borderRadius: '8px',
                        padding: 8,
                        backgroundColor: 'rgba(255,255,255,0.1)'
                    }}>
                        {m.type === "image" ? (
                            <div style={{ position: 'relative' }}>
                                <img
                                    src={m.src}
                                    alt={m.title || "media"}
                                    style={{ width: "100%", height: 140, objectFit: "cover", display: "block" }}
                                />
                                {editing && (
                                    <button
                                        onClick={() => removeMedia(m.id)}
                                        style={{
                                            position: 'absolute',
                                            top: 5,
                                            right: 5,
                                            background: 'rgba(255,0,0,0.7)',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '50%',
                                            width: '24px',
                                            height: '24px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        ×
                                    </button>
                                )}
                            </div>
                        ) : (
                            <div style={{ position: 'relative' }}>
                                <video
                                    src={m.src}
                                    controls
                                    preload="metadata"
                                    style={{ width: "100%", height: 140, objectFit: "cover", background: "#000" }}
                                />
                                {editing && (
                                    <button
                                        onClick={() => removeMedia(m.id)}
                                        style={{
                                            position: 'absolute',
                                            top: 5,
                                            right: 5,
                                            background: 'rgba(255,0,0,0.7)',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '50%',
                                            width: '24px',
                                            height: '24px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        ×
                                    </button>
                                )}
                            </div>
                        )}
                        <figcaption style={{
                            marginTop: 8,
                            display: "flex",
                            justifyContent: "space-between",
                            gap: 8,
                            color: "black"
                        }}>
                            <div style={{ flex: 1 }}>
                                {editing ? (
                                    <input
                                        value={m.title}
                                        placeholder="Title"
                                        onChange={(e) => updateMedia({ ...m, title: e.target.value })}
                                        style={{ width: "100%" }}
                                    />
                                ) : (
                                    <strong>{m.title || "Untitled"}</strong>
                                )}
                                <div style={{ fontSize: 12, color: "#666" }}>{m.date}</div>
                            </div>
                        </figcaption>
                    </figure>
                ))}
            </div>

            {/* Update announcements section */}
            <div className="announcements" style={{
                borderTop: `1px solid ${ACCENT_COLOR}`,
                paddingTop: 12
            }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3 style={{ margin: 0, color: '#000000' }}>Announcements</h3>
                    {isAdmin && editing && (
                        <AddAnnouncementForm onAdd={(text) => addAnnouncement(text)} />
                    )}
                </div>

                <ul style={{
                    paddingLeft: 16,
                    marginTop: 12,
                    color: '#000000',
                    backgroundColor: '#f2f1da',
                    padding: '15px',
                    borderRadius: '8px'
                }}>
                    {data.announcements.length === 0 && (
                        <li style={{ color: '#000000' }}>No announcements yet.</li>
                    )}
                    {data.announcements.map((a) => (
                        <li key={a.id} style={{ marginBottom: 8, display: "flex", justifyContent: "space-between", gap: 12 }}>
                            <div>
                                <div style={{ fontWeight: 600 }}>{a.text}</div>
                                <div style={{ fontSize: 12, color: "#666" }}>{a.date}</div>
                            </div>
                            {editing && (
                                <button
                                    onClick={() => removeAnnouncement(a.id)}
                                    aria-label="Delete announcement"
                                    style={{
                                        backgroundColor: ACCENT_COLOR,
                                        color: DEFAULT_BG,
                                        border: 'none',
                                        padding: '8px 20px',    // slightly wider to match request
                                        borderRadius: '4px',    // same radius as other buttons
                                        cursor: 'pointer',
                                        minWidth: 88,
                                        textAlign: 'center',
                                    }}
                                >
                                    Delete
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

/* Small inline component to add announcement */
function AddAnnouncementForm({ onAdd }) {
    const [val, setVal] = useState("");
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (!val.trim()) return;
                onAdd(val.trim());
                setVal("");
            }}
            style={{ display: "flex", gap: 8, alignItems: "center" }}
        >
            <input
                value={val}
                onChange={(e) => setVal(e.target.value)}
                placeholder="New announcement"
                style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: "black",
                    border: `1px solid ${ACCENT_COLOR}`,
                    padding: '6px 12px',
                    borderRadius: '4px'
                }}
            />
            <button
                type="submit"
                style={{
                    backgroundColor: ACCENT_COLOR,
                    color: DEFAULT_BG,
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Add
            </button>
        </form>
    );
}
