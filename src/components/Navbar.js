"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on route change / resize
    useEffect(() => {
        const close = () => setMenuOpen(false);
        window.addEventListener("resize", close);
        return () => window.removeEventListener("resize", close);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-foreground/10 py-3"
                    : "bg-transparent py-5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="font-display text-2xl font-bold tracking-tight text-primary">
                            The Nivasa Project
                        </Link>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Desktop links */}
                        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            <Link href="/community" className="hover:text-primary transition-colors">Community</Link>
                            <Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
                        </div>

                        {/* Join Now — visible on sm+ */}
                        <Link href="/apply" className="hidden sm:block bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                            Join Now
                        </Link>

                        {/* Hamburger — visible on <md */}
                        <button
                            onClick={() => setMenuOpen((v) => !v)}
                            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full hover:bg-foreground/5 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <span className={`block w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
                            <span className={`block w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 mt-1 ${menuOpen ? "-rotate-45 -translate-y-[2px]" : ""}`} />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile menu overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-8 flex flex-col md:hidden"
                    >
                        <nav className="flex flex-col gap-2">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/community", label: "Community" },
                                { href: "/pricing", label: "Pricing" },
                                { href: "/apply", label: "Apply" },
                            ].map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="block py-4 text-2xl font-display font-bold text-foreground hover:text-primary transition-colors border-b border-foreground/5"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <div className="mt-auto pb-12">
                            <Link
                                href="/apply"
                                onClick={() => setMenuOpen(false)}
                                className="block w-full bg-primary text-white py-4 rounded-2xl font-bold text-center text-lg shadow-xl shadow-primary/20"
                            >
                                Join Now
                            </Link>
                            <p className="text-[10px] text-center text-foreground/30 uppercase tracking-[0.2em] font-bold mt-4">
                                Next cohort starts May 1st, 2026
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
