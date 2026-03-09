"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import BASE_PATH from "@/lib/basePath";

const agondaImages = [
    "/goa_and_beach/backwater.jpg",
    "/goa_and_beach/fontainhas.jpg",
    "/goa_and_beach/waterfall3.jpg",
    "/goa_and_beach/IMG_6219.jpg",
    "/goa_and_beach/waterfall1.jpg",
    "/goa_and_beach/IMG_6212.jpg",
    "/goa_and_beach/beach1.jpg",
    "/goa_and_beach/beach2.jpg",
    "/goa_and_beach/IMG_6220.jpg",
    "/goa_and_beach/hero.jpg",
    "/goa_and_beach/long_road.jpg",
    "/goa_and_beach/pink1.jpg",
    "/goa_and_beach/waterfall2.jpg",
    "/goa_and_beach/IMG_6216.jpg",
].map(p => `${BASE_PATH}${p}`);

const VISIBLE_RANGE = 2; // how many neighbors to show on each side

export default function AgondaCarousel() {
    const [active, setActive] = useState(0);
    const n = agondaImages.length;

    const prev = useCallback(() => setActive((a) => (a - 1 + n) % n), [n]);
    const next = useCallback(() => setActive((a) => (a + 1) % n), [n]);

    // Keyboard navigation
    useEffect(() => {
        const handler = (e) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [prev, next]);

    // Build visible items: active card ± VISIBLE_RANGE
    const items = [];
    for (let offset = -VISIBLE_RANGE; offset <= VISIBLE_RANGE; offset++) {
        const index = ((active + offset) % n + n) % n;
        items.push({ index, offset });
    }

    const getCardStyle = (offset) => {
        const abs = Math.abs(offset);
        // Values tuned for landscape 3D look
        const rotateY = offset * 42;           // inward tilt
        const translateX = offset * 320;        // spread
        const translateZ = abs === 0 ? 120 : -abs * 150; // center pops forward
        const scale = abs === 0 ? 1.15 : abs === 1 ? 0.85 : 0.65;
        const opacity = abs === 0 ? 1 : abs === 1 ? 0.75 : 0.45;
        const brightness = abs === 0 ? 1 : abs === 1 ? 0.7 : 0.4;
        const zOrder = VISIBLE_RANGE - abs;
        const blurAmount = abs === 0 ? 0 : abs === 1 ? 1 : 3;

        return {
            rotateY,
            translateX,
            translateZ,
            scale,
            opacity,
            brightness,
            zOrder,
            blurAmount,
        };
    };

    return (
        <section className="py-24 bg-background overflow-hidden flex flex-col items-center">
            {/* Heading */}
            <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
                <p className="uppercase tracking-[0.3em] text-[10px] font-bold text-accent mb-4">Location</p>
                <h2 className="font-display text-4xl md:text-6xl font-bold">
                    Agonda –{" "}
                    <span className="italic text-accent">Heaven on Earth</span>
                </h2>
            </div>

            {/* Coverflow stage with blurred backdrop effect */}
            <div className="relative w-full flex items-center justify-center min-h-[500px]">
                {/* Background blur "glow" for the active area */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-20 transition-all duration-1000"
                    style={{
                        background: `radial-gradient(circle at center, var(--color-primary, #3D6B5E) 0%, transparent 70%)`,
                        filter: 'blur(100px)',
                    }}
                />

                <div
                    className="relative flex items-center justify-center select-none w-full"
                    style={{ perspective: "1500px", height: 450 }}
                >
                    {items.map(({ index, offset }) => {
                        const {
                            rotateY,
                            translateX,
                            translateZ,
                            scale,
                            opacity,
                            brightness,
                            zOrder,
                            blurAmount,
                        } = getCardStyle(offset);

                        return (
                            <motion.div
                                key={index}
                                className="absolute cursor-pointer rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]"
                                onClick={() => {
                                    if (offset < 0) prev();
                                    else if (offset > 0) next();
                                }}
                                animate={{
                                    rotateY,
                                    x: translateX,
                                    z: translateZ,
                                    scale,
                                    opacity,
                                    filter: `brightness(${brightness}) blur(${blurAmount}px)`,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 26,
                                }}
                                style={{
                                    zIndex: zOrder,
                                    width: "min(600px, 80vw)",
                                    aspectRatio: "16/10",
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                <img
                                    src={agondaImages[index]}
                                    alt={`Goa ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    draggable={false}
                                />
                                {/* Active card label */}
                                {offset === 0 && (
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-10 py-8">
                                        <p className="text-white text-sm font-bold uppercase tracking-[0.4em]">
                                            Goa
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-10 mt-20">
                <button
                    onClick={prev}
                    className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-foreground/5 transition-all text-foreground/40 hover:text-foreground hover:scale-110 active:scale-95"
                    aria-label="Previous"
                >
                    <span className="text-xl">←</span>
                </button>

                {/* Dot indicators */}
                <div className="flex gap-3 px-4 py-2 bg-foreground/5 rounded-full backdrop-blur-sm">
                    {agondaImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className="transition-all duration-500 rounded-full"
                            style={{
                                width: i === active ? 32 : 8,
                                height: 8,
                                opacity: i === active ? 1 : 0.3,
                                background:
                                    i === active
                                        ? "var(--color-primary, #3D6B5E)"
                                        : "currentColor",
                            }}
                            aria-label={`Go to image ${i + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={next}
                    className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-foreground/5 transition-all text-foreground/40 hover:text-foreground hover:scale-110 active:scale-95"
                    aria-label="Next"
                >
                    <span className="text-xl">→</span>
                </button>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
