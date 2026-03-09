"use client";

import { motion } from "framer-motion";
import { Ticket } from "lucide-react";

export default function BookingSection() {
    const perks = [
        "AC stay", "Weekend trips", "Healthy Food",
        "Community events", "Fast Internet", "Work amenities"
    ];

    return (
        <section className="py-24 px-6 bg-[#E8E1D5] dark:bg-foreground/[0.03]">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-4xl md:text-5xl mb-4">Special Launch Offer</h2>
                    <p className="text-foreground/70 tracking-widest text-xs uppercase font-bold">Limited spots available for the first cohort</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-background p-8 md:p-12 rounded-[2rem] shadow-2xl border-4 border-dashed border-foreground/5 flex flex-col md:flex-row gap-12 items-center"
                >
                    {/* Ticket cutout effect (abstracted for premium feel) */}
                    <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#E8E1D5] dark:bg-[#121817] hidden md:block" />
                    <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#E8E1D5] dark:bg-[#121817] hidden md:block" />

                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-primary/10 p-2 rounded-full text-primary">
                                <Ticket size={24} />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-foreground/60">1 Month Experience</span>
                        </div>

                        <h3 className="font-display text-3xl md:text-4xl font-bold mb-6">
                            Work From Goa<br />Collective
                        </h3>

                        <div className="flex items-baseline gap-4 mb-8">
                            <span className="text-foreground/50 line-through text-xl">₹60,000</span>
                            <span className="text-5xl font-bold text-primary">₹36,000</span>
                        </div>

                        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                            {perks.map((perk) => (
                                <div key={perk} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    {perk}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-auto h-full flex flex-col justify-center">
                        <a href="/apply" className="w-full md:w-64 bg-primary text-white py-6 rounded-2xl font-bold dark:shadow-none shadow-[0_20px_40px_-10px_rgba(61,111,105,0.4)] hover:translate-y-[-4px] transition-all text-center block">
                            Book Your Stay
                        </a>
                        <p className="text-[10px] text-center mt-4 text-foreground/50 italic">Inclusive of all taxes and community fees</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
