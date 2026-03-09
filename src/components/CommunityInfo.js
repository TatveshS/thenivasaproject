"use client";

import { motion } from "framer-motion";

export default function CommunityInfo() {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-[#F8F5F0]">
            {/* Subtle Plus Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(circle, #3D6F69 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <p className="uppercase tracking-[0.4em] text-[10px] font-bold text-primary/80">
                            WHAT IS NIVASA
                        </p>

                        <h2 className="font-display text-5xl md:text-7xl text-foreground font-bold leading-[1.1]">
                            This Is Not A Homestay.<br />
                            <span className="italic font-normal">This Is A Community.</span>
                        </h2>

                        <div className="space-y-6 text-foreground/80 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                            <p>
                                The Nivasa Project is a work-from-Goa community where engineers, creators and builders live together for a month.
                            </p>
                            <p>
                                Instead of staying in crowded hostels or working alone from cafes, you live with ambitious people who want to build, explore and grow together.
                            </p>
                            <p className="text-primary italic font-medium">
                                Work during the weekdays. Explore Goa on the weekends.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column: Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-[16/10] md:aspect-square overflow-hidden rounded-[2.5rem] shadow-2xl">
                            <img
                                src="/community/hero.png"
                                alt="Nivasa Community"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Aesthetic decorative element (subtle circle) */}
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-accent/20 rounded-full -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
