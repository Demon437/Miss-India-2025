import React, { useRef, useEffect, useState } from 'react';
import Hls from 'hls.js';

export default function LivePlayer({ src, poster }) {
    const videoRef = useRef(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // HLS support fallback
        if (Hls.isSupported() && src.endsWith('.m3u8')) {
            const hls = new Hls({ lowLatencyMode: true });
            hls.loadSource(src);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                video.play().catch(() => { });
            });
            return () => hls.destroy();
        } else {
            video.src = src;
            video.load();
            video.play().catch(() => { });
        }
    }, [src]);

    return (
        <div className="live-player">
            {loading && <div className="player-spinner">Loading…</div>}
            <video
                ref={videoRef}
                poster={poster}
                controls
                playsInline
                preload="metadata"
                onCanPlay={() => setLoading(false)}
                onCanPlayThrough={() => setLoading(false)}
                style={{ width: '100%', height: 'auto', display: loading ? 'none' : 'block' }}
            />
        </div>
    );
}