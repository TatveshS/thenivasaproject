"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(18, 24, 23, 0.4), rgba(18, 24, 23, 0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsWPVOLKYLkCiJPsfkq1XrHO2iyV5kd5G6VRMX-qm31XOWUKyrf0EHfDvGDhXQK_QpRLjA_8Fhsb1m8trqgB3yq66Wjxhmx4gbboT4Cc7o-zYyFC-JF89Ntpz8OQjgHPa-w3gU0tBJa8uht85hzSqR0XeVqINOYs35iATlptWOwvl8k65UbkOqq0DYxFmApJnJGJZhAUjROb2T4_kPaxGVlun8NnleNqra5aGnZku3P9TMD0w2QqKaJ3u7rmlIfxf2WsESyRfn2Q')`
                }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="uppercase tracking-[0.3em] text-xs font-bold mb-6 opacity-90"
                >
                    <a
                        href="https://share.google/8OIfcFxoEYkB5UFah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline underline-offset-4"
                    >
                        Heaven on Earth, Agonda, Goa
                    </a>
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8"
                >
                    Work From Paradise.<br />
                    <span className="italic font-normal">Build, Work & Live.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-xl mx-auto text-lg md:text-xl opacity-90 font-light leading-relaxed mb-10"
                >
                    A curated remote work community in Agonda, Goa for builders, engineers, and creators who want to work from nature.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/apply"
                        className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 transition-all group"
                    >
                        <MessageCircle size={20} className="fill-current" />
                        Book Now
                    </Link>
                    <Link href="/community" className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all group">
                        Explore the Community
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>

            {/* Hero simple scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            >
                <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </section>
    );
}
