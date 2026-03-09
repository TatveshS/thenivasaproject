"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Tejas Sheldekar",
        role: "Software Developer — Pune",
        image: "/testimonials/tejas.jpg",
        text: "Working remotely full-time, I’m always looking for environments where I can stay focused without feeling isolated. NIVÀSA was exactly that. The workspace was quiet, the internet was reliable, and the overall atmosphere naturally encouraged deep work. Being able to take short walks to the beach after long coding sessions helped me reset and stay productive. What stood out most was the community — everyone there was working on something meaningful, which made the experience even better.",
        rating: 5
    },
    {
        name: "Omar",
        role: "Creative Professional",
        image: "/testimonials/omar.png",
        text: "Tremendous retreat! The rooms were comfortable and the food felt like proper home-cooked meals. The property is peaceful and full of greenery, with happy animals around which adds to the atmosphere. Everything you need is there — warm showers, cool AC rooms, and the beach just a short walk away. What impressed me most was how much the team genuinely cares about the safety and well-being of guests. Easily one of the best-priced retreats for the experience you get. Highly recommended.",
        rating: 5
    },
    {
        name: "Priyansh Deshmukh",
        role: "Software Developer — Bangalore",
        image: "/testimonials/priyansh.jpg",
        text: "I came to NIVÀSA to take a break from the constant noise of Bangalore while continuing my remote work. The environment here makes it surprisingly easy to stay focused during the week. Mornings are calm, the workspace is comfortable, and evenings by the beach help you unwind. It quickly started to feel like a small community rather than just a place to stay. If you work remotely and want a peaceful place to reset without pausing your work, NIVÀSA is a great experience.",
        rating: 5
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-24 px-6 bg-sage/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="uppercase tracking-[0.3em] text-[10px] font-bold text-primary mb-4">
                        Community Voice
                    </p>
                    <h2 className="font-display text-4xl md:text-6xl text-foreground font-bold leading-tight">
                        What Does Our Tribe<br />
                        <span className="italic font-normal">Say About Us?</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-background p-8 rounded-[2.5rem] shadow-sm border border-foreground/5 hover:shadow-xl transition-all duration-500"
                        >
                            <div className="flex gap-1 mb-6 text-accent">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={14} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-foreground/80 italic font-light mb-8 leading-relaxed">
                                "{t.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <h4 className="font-bold text-sm">{t.name}</h4>
                                    <p className="text-[10px] text-foreground/40 uppercase tracking-widest">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
