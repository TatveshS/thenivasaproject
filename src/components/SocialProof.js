"use client";

import { motion } from "framer-motion";

export default function SocialProof() {
    const companies = ["Google", "NVIDIA", "Qualcomm", "BitGo", "druva"];

    return (
        <section className="py-16 bg-foreground/[0.03] border-y border-foreground/[0.05]">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/60 mb-10">
                    Builders From Top Tech Companies Have Stayed With Us
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    {companies.map((company) => (
                        <motion.span
                            key={company}
                            whileHover={{ scale: 1.1, opacity: 0.8 }}
                            className="text-2xl md:text-3xl font-bold tracking-tight"
                        >
                            {company}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
}
