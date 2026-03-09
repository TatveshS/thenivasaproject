"use client";

import { motion } from "framer-motion";

export default function PhilosophySection() {
    return (
        <section className="py-24 px-6 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[9/12] lg:aspect-auto lg:h-[700px]"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Monstera leaf - biophilic philosophy"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <p className="uppercase tracking-[0.3em] text-[10px] font-bold text-accent">
                            Our Philosophy
                        </p>
                        <h2 className="font-display text-5xl md:text-7xl text-foreground font-bold leading-tight">
                            Building The<br />
                            <span className="italic font-normal">New Way.</span>
                        </h2>
                        <div className="space-y-6 text-foreground/80 text-lg font-light leading-relaxed max-w-xl">
                            <p>
                                We believe that productivity isn't found in sterile offices or fluorescent lights. It's found at the intersection of focused work and deep connection with the natural world.
                            </p>
                            <p>
                                Nivasa is designed on the principles of biophilic living—integrating natural elements into our architecture and our daily rhythms to reduce stress and spark creativity.
                            </p>
                            <p className="text-primary italic font-medium pt-4">
                                "The breath of life is found in the stillness between the waves."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
