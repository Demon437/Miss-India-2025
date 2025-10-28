import React, { useRef, useEffect, useState } from 'react';
import Hls from 'hls.js';

export default function LivePlayer({ src, poster }) {
    const videoRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // only start loading when visible
        if (!isVisible) return;

        // HLS support fallback
        if (Hls.isSupported() && src.endsWith('.m3u8')) {
            const hls = new Hls({
                lowLatencyMode: true,
                // smaller buffer to reduce initial wait; adjust if stalling
                maxBufferLength: 15,
                maxMaxBufferLength: 30,
                // enable ABR to switch down on poor networks
                capLevelOnFPSDrop: true,
                startLevel: -1,
            });
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
    }, [src, isVisible]);

    useEffect(() => {
        const node = videoRef.current;
        if (!node) return;
        if ("IntersectionObserver" in window) {
            const io = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setIsVisible(true);
                });
            }, { rootMargin: '200px 0px' });
            io.observe(node);
            return () => io.disconnect();
        } else {
            setIsVisible(true);
        }
    }, []);

    return (
        <div className="live-player">
            {loading && <div className="player-spinner">Loading…</div>}
            <video
                ref={videoRef}
                poster={poster}
                controls
                playsInline
                preload="none"
                muted
                onCanPlay={() => setLoading(false)}
                onCanPlayThrough={() => setLoading(false)}
                style={{ width: '100%', height: 'auto', display: loading ? 'none' : 'block' }}
            />
        </div>
    );
}