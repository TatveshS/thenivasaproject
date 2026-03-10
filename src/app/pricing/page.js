"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

import RoomCarousel from "@/components/RoomCarousel";

const pricingTiers = [
    {
        title: "The New Moon",
        price: "₹12,000",
        period: "/week",
        features: [
            { text: "7 Days Workspace Access", available: true },
            { text: "All Nivasa Amenities Included", available: true },
            { text: "24/7 High-Speed Internet", available: true },
            { text: "Organic Goan Meals Included", available: true },
            { text: "Add on weekend trips", available: true }
        ],
        buttonText: "Book New Moon",
        highlighted: false
    },
    {
        title: "The Full Moon",
        price: "₹36,000",
        period: "/month",
        features: [
            { text: "28 Days Workspace Access", available: true },
            { text: "All Nivasa Amenities Included", available: true },
            { text: "24/7 High-Speed Internet", available: true },
            { text: "Exclusive Networking Events", available: true },
            { text: "Free weekend trips", available: true },
            { text: "Organic Goan Meals Included", available: true }
        ],
        buttonText: "Book Full Moon",
        highlighted: true
    },
    {
        title: "The Half Knight",
        price: "₹18,000",
        period: "/14 days",
        features: [
            { text: "14 Days Workspace Access", available: true },
            { text: "All Nivasa Amenities Included", available: true },
            { text: "24/7 High-Speed Internet", available: true },
            { text: "Organic Goan Meals Included", available: true },
            { text: "Add on weekend trips", available: true }
        ],
        buttonText: "Book The Knight",
        highlighted: false
    }
];

const faqs = [
    {
        question: "What is NIVÀSA?",
        answer: "NIVÀSA is a one-month live-and-work residency in Agonda, Goa, designed for remote professionals who want to work deeply while living closer to nature. It combines a calm workspace, private rooms, and a small community of like-minded residents."
    },
    {
        question: "Where is NIVÀSA located?",
        answer: "NIVÀSA is located in Agonda, South Goa, a quiet beach town known for its natural beauty and relaxed pace of life. The residency is within 1 km of the shoreline, allowing residents to easily walk to the beach."
    },
    {
        question: "Who is NIVÀSA designed for?",
        answer: "NIVÀSA is ideal for remote workers, freelancers, founders and startup builders, designers, developers, creators, and writers. It is built for people who want focus during the week and a slower rhythm of life."
    },
    {
        question: "How long can I stay at NIVÀSA?",
        answer: "NIVÀSA operates as a one-month residency. Residents commit to staying for a full month to maintain a stable community and allow everyone to settle into a focused routine."
    },
    {
        question: "What does a typical week at NIVÀSA look like?",
        answer: "Weekdays are designed for deep work and quiet productivity. Weekends include optional experiences such as nature treks, kayaking or beach swims, exploring local cafés and markets, and movie nights or open-mic evenings. The goal is to balance focused work with meaningful community experiences."
    },
    {
        question: "What facilities are available for remote work?",
        answer: "NIVÀSA provides everything needed for remote work, including high-speed Wi-Fi, dedicated workspace areas, quiet deep-work zones, comfortable private rooms, and a shared kitchen and dining space. The environment is designed to help residents work productively without distractions."
    },
    {
        question: "How can I apply or book a stay?",
        answer: "NIVÀSA accepts residents through a simple application process to ensure the community remains aligned. You can apply by filling out the application form on the website or contacting the team via email or phone. Available residency months currently include May, June, July, August, and September."
    },
    {
        question: "How reliable is the internet?",
        answer: "We provide high-speed internet with 24/7 electricity backup to ensure you're always connected and productive, even during power fluctuations."
    },
    {
        question: "Can I bring a team?",
        answer: "Absolutely! We have collaborative labs designed for teams of 4–6. Contact us for custom team pricing."
    }
];

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-32 overflow-hidden bg-gradient-to-b from-copper/20 via-background to-background">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="uppercase tracking-[0.4em] text-[10px] font-bold text-accent mb-6"
                    >
                        Find the Package
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-5xl md:text-8xl font-bold mb-12"
                    >
                        Choose Your <br /> <span className="text-accent italic">Experience.</span>
                    </motion.h1>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
                    <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-copper/30 blur-[120px] rounded-full" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-primary/20 blur-[100px] rounded-full" />
                </div>
            </section>

            {/* Pricing Tiers Section */}
            <section className="pb-32 relative z-10">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
                    {pricingTiers.map((tier, idx) => (
                        <motion.div
                            key={tier.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className={`p-10 md:p-14 rounded-[3rem] border transition-all duration-500 ${tier.highlighted
                                ? "bg-white shadow-[0_30px_60px_rgba(0,0,0,0.08)] border-transparent"
                                : "bg-white/40 backdrop-blur-md border-foreground/5 shadow-sm"
                                }`}
                        >
                            <p className="uppercase tracking-widest text-[10px] font-bold text-foreground/40 mb-2">Membership</p>
                            <h3 className="font-display text-3xl font-bold mb-6">{tier.title}</h3>
                            <div className="flex items-baseline gap-1 mb-10">
                                <span className="text-5xl font-bold">{tier.price}</span>
                                <span className="text-foreground/40 text-sm">{tier.period}</span>
                            </div>

                            <ul className="space-y-5 mb-12">
                                {tier.features.map((feature, fIdx) => (
                                    <li key={fIdx} className={`flex gap-3 text-sm font-medium items-center ${!feature.available ? "opacity-40" : ""}`}>
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${feature.available
                                            ? (tier.highlighted ? "bg-primary/10 text-primary" : "bg-foreground/5 text-foreground/40")
                                            : "bg-foreground/5 text-foreground/20"
                                            }`}>
                                            {feature.available ? (
                                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            ) : (
                                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            )}
                                        </div>
                                        <span className={!feature.available ? "line-through" : ""}>
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link href="/apply" className={`w-full py-5 rounded-2xl font-bold transition-all duration-300 text-center block ${tier.highlighted
                                ? "bg-primary text-white shadow-lg shadow-primary/30 hover:scale-[1.02]"
                                : "border-2 border-foreground/10 hover:border-primary hover:text-primary"
                                }`}>
                                {tier.buttonText}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Room Gallery Section */}
            <section className="pb-32 overflow-hidden bg-background">
                {/* <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                    <p className="uppercase tracking-[0.3em] text-[10px] font-bold text-accent mb-4">Your Retreat</p>
                    <h2 className="font-display text-4xl md:text-6xl font-bold">Accommodations</h2>
                </div> */}

                <RoomCarousel />
            </section>

            {/* A Community of Builders Section */}
            <section className="py-32 bg-primary text-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">A Community of <span className="italic text-copper-light">Builders.</span></h2>
                    <p className="text-white/80 text-lg leading-relaxed mb-12 font-medium">
                        Nivasa isn't just a place to stay; it's where founders, developers, and artists collaborate. Designed specifically for deep work, fast execution, and organic networking.
                    </p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-60">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold">200+</span>
                            <span className="text-[10px] uppercase tracking-widest font-bold">Happy Members</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold">15+</span>
                            <span className="text-[10px] uppercase tracking-widest font-bold">Countries</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 bg-foreground/5 backdrop-blur-sm">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="uppercase tracking-[0.3em] text-[10px] font-bold text-accent mb-4">Invitation</p>
                        <h2 className="font-display text-4xl md:text-5xl font-bold">Common Questions</h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <FAQItem key={idx} faq={faq} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function FAQItem({ faq }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white rounded-3xl p-8 cursor-pointer border border-foreground/5 shadow-sm hover:shadow-md transition-shadow"
        >
            <div className="flex justify-between items-center gap-4">
                <h4 className="font-bold text-lg md:text-xl pr-4">{faq.question}</h4>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-primary text-white rotate-45" : "bg-foreground/5"}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </div>
            </div>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-6 pt-6 border-t border-foreground/5 text-foreground/60 leading-relaxed font-medium"
                >
                    {faq.answer}
                </motion.div>
            )}
        </div>
    );
}
