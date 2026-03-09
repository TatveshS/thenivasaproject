"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import BASE_PATH from "@/lib/basePath";

const images = [
    "/community/DSC02692.jpg",
    "/community/IMG_0316.jpg",
    "/community/MARGAO%20(103).jpg",
    "/community/boat1.jpg",
    "/community/boat2.jpg",
    "/community/common%20area.png",
    "/community/IMG_3002.jpg",
    "/community/farm.jpg",
    "/community/hero.png",
    "/community/kitchen.png",
    "/community/IMG_2235.jpg",
    "/community/IMG_2304.jpg",
    "/community/IMG_3003.jpg",
    "/community/IMG_3004.jpg",
    "/community/IMG_3063.jpg",
    "/community/IMG_3066.jpg",
    "/community/IMG_3071.jpg",
    "/community/IMG_3076.jpg",
    "/community/IMG_3077.jpg",
    "/community/IMG_3080.jpg",
    "/community/IMG_4723.jpg",
    "/community/IMG_4725.jpg",
].map(p => `${BASE_PATH}${p}`);

const CARD_WIDTH = 624; // ~600px card + 24px gap

export default function CommunityCarousel() {
    const scrollRef = useRef(null);
    const { scrollXProgress } = useScroll({
        target: scrollRef,
        axis: "x"
    });

    const scroll = (dir) => {
        scrollRef.current?.scrollBy({
            left: dir * CARD_WIDTH,
            behavior: "smooth",
        });
    };

    return (
        <section className="py-24 overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <p className="uppercase tracking-[0.3em] text-[10px] font-bold text-accent mb-4">Gallery</p>
                <h2 className="font-display text-4xl md:text-6xl font-bold">Life At Nivasa</h2>
            </div>

            {/* Carousel track */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-16 px-6 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollBehavior: 'smooth' }}
            >
                {images.map((img, i) => (
                    <motion.div
                        key={i}
                        className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl snap-center shrink-0"
                        style={{ width: "min(600px, 80vw)" }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                    >
                        <img
                            src={img}
                            alt={`Life at Nivasa ${i + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Controls */}
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-8 mt-8">
                {/* Left arrow */}
                <button
                    onClick={() => scroll(-1)}
                    aria-label="Previous"
                    className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/40 hover:text-foreground hover:bg-foreground/5 hover:scale-110 active:scale-95 transition-all duration-200"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Progress bar + hint */}
                <div className="flex flex-col items-center gap-3">
                    <p className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold">
                        Swipe or click arrows to explore
                    </p>
                    <div className="w-32 h-1 bg-foreground/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-primary"
                            style={{ scaleX: scrollXProgress, transformOrigin: "left" }}
                        />
                    </div>
                </div>

                {/* Right arrow */}
                <button
                    onClick={() => scroll(1)}
                    aria-label="Next"
                    className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/40 hover:text-foreground hover:bg-foreground/5 hover:scale-110 active:scale-95 transition-all duration-200"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </section>
    );
}
