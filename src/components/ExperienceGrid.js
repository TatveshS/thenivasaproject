"use client";

import { motion } from "framer-motion";
import { Wifi, Waves, Trees, Map, Users } from "lucide-react";

const experiences = [
    {
        icon: <Wifi size={24} />,
        title: "Remote Work Setup",
        description: "Calm work environment with fast internet."
    },
    {
        icon: <Waves size={24} />,
        title: "Beach Lifestyle",
        description: <><a href="https://share.google/8OIfcFxoEYkB5UFah" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary transition-colors">Agonda beach</a> just 400 meters away.</>
    },
    {
        icon: <Trees size={24} />,
        title: "Nature & Wildlife",
        description: "Forests, birds and waterfalls around you."
    },
    {
        icon: <Map size={24} />,
        title: "Weekend Adventures",
        description: "Treks, heritage trails and hidden waterfalls."
    },
    {
        icon: <Users size={24} />,
        title: "Community Living",
        description: "Evening conversations, meetups and friendships."
    }
];

export default function ExperienceGrid() {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-[#F8F5F0]">
            {/* Subtle Plus Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(circle, #3D6F69 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="uppercase tracking-[0.3em] text-[10px] font-bold text-primary mb-4">
                        The Experience
                    </p>
                    <h2 className="font-display text-4xl md:text-6xl text-foreground font-bold leading-tight">
                        What Life Looks Like<br />
                        <span className="italic font-normal">At Nivasa</span>
                    </h2>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6">
                    {experiences.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className="bg-[#F3EFE9] p-8 rounded-[2rem] w-full sm:w-[220px] flex flex-col items-center text-center shadow-sm border border-foreground/[0.03]"
                        >
                            <div className="bg-foreground/[0.05] p-4 rounded-full text-primary mb-6">
                                {item.icon}
                            </div>
                            <h3 className="font-display text-xl font-bold mb-3 leading-tight">{item.title}</h3>
                            <p className="text-foreground/70 text-sm font-light leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
