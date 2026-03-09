"use client";

import { motion } from "framer-motion";

export default function CommunityHero() {
    return (
        <section className="relative pt-32 h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-copper/80 to-[#FFDAB9]/40">
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="uppercase tracking-[0.4em] text-[10px] font-bold text-foreground/60 mb-8"
                >
                    The Nivasa Collective
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-display text-6xl md:text-8xl lg:text-9xl leading-[1.1] text-foreground font-bold mb-8"
                >
                    A Tribe Of<br />
                    <span className="italic font-normal">Builders.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/70 font-light leading-relaxed mb-10"
                >
                    Where the ambition of modern engineering meets the serenity of Agonda's nature.
                    A space for creators, engineers, and digital nomads to build the future together.
                </motion.p>
            </div>

            {/* Subtle aesthetic element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(circle, var(--color-primary) 1px, transparent 1px)`, backgroundSize: '60px 60px' }}>
            </div>
        </section>
    );
}
