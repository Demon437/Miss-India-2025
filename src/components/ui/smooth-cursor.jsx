"use client"
import React, { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function SmoothCursor() {
    const cursor = useRef(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const springConfig = { damping: 25, stiffness: 300 }
    const springX = useSpring(x, springConfig)
    const springY = useSpring(y, springConfig)

    useEffect(() => {
        const moveCursor = (e) => {
            x.set(e.clientX)
            y.set(e.clientY)
        }
        window.addEventListener("mousemove", moveCursor)
        return () => window.removeEventListener("mousemove", moveCursor)
    }, [x, y])

    return (
        <motion.div
            ref={cursor}
            className="fixed top-0 left-0 z-[9999] w-6 h-6 rounded-full bg-[#d6ac45]/70 mix-blend-multiply pointer-events-none"
            style={{
                x: springX,
                y: springY,
                translateX: "-50%",
                translateY: "-50%",
            }}
        />
    )
}
