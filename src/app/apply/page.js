"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ApplyPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        profession: "",
        workType: "",
        month: "",
        stayPlan: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Full name is required";
        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Please enter a valid email";
        }
        if (!form.phone.trim()) newErrors.phone = "Phone number is required";
        if (!form.city.trim()) newErrors.city = "City is required";
        if (!form.profession.trim()) newErrors.profession = "Profession is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const message = `*New NIVĀSA Application*

*Name:* ${form.name}
*Email:* ${form.email}
*Phone:* ${form.phone}
*City:* ${form.city}
*Profession:* ${form.profession}
*Remote Work Type:* ${form.workType || "Not specified"}
*Preferred Month:* ${form.month || "Not specified"}
*Stay Plan:* ${form.stayPlan || "Not specified"}

*Why NIVĀSA:*
${form.message || "Not provided"}`;

        const encoded = encodeURIComponent(message);
        window.open(`https://wa.me/917066195446?text=${encoded}`, "_blank");
    };

    const inputClass = (field) =>
        `w-full bg-foreground/[0.03] border ${errors[field] ? "border-red-400 ring-1 ring-red-400" : "border-foreground/[0.08] focus:border-primary focus:ring-1 focus:ring-primary"} rounded-2xl p-4 text-sm transition-all outline-none`;

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-gradient-to-b from-copper/20 via-background to-background">
                <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="uppercase tracking-[0.4em] text-[10px] font-bold text-accent mb-6"
                    >
                        Application
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-4xl md:text-7xl font-bold mb-6"
                    >
                        Join <span className="text-accent italic">NIVÀSA.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-foreground/60 font-light max-w-xl mx-auto leading-relaxed"
                    >
                        Fill out the form below and we'll connect with you on WhatsApp to take your application forward.
                    </motion.p>
                </div>

                {/* Decorative */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
                    <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-copper/30 blur-[120px] rounded-full" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-primary/20 blur-[100px] rounded-full" />
                </div>
            </section>

            {/* Form */}
            <section className="pb-32 relative z-10">
                <motion.form
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    onSubmit={handleSubmit}
                    className="max-w-2xl mx-auto px-6 space-y-6"
                >
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-1">
                                Full Name <span className="text-red-400">*</span>
                            </label>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                type="text"
                                placeholder="Your full name"
                                className={inputClass("name")}
                            />
                            {errors.name && <p className="text-red-400 text-xs ml-1">{errors.name}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-1">
                                Email Address <span className="text-red-400">*</span>
                            </label>
                            <input
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                type="email"
                                placeholder="you@example.com"
                                className={inputClass("email")}
                            />
                            {errors.email && <p className="text-red-400 text-xs ml-1">{errors.email}</p>}
                        </div>
                    </div>

                    {/* Phone & City */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-1">
                                Phone Number <span className="text-red-400">*</span>
                            </label>
                            <input
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                type="tel"
                                placeholder="+91 XXXXX XXXXX"
                                className={inputClass("phone")}
                            />
                            {errors.phone && <p className="text-red-400 text-xs ml-1">{errors.phone}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-1">
                                City <span className="text-red-400">*</span>
                            </label>
                            <input
                                name="city"
                                value={form.city}
                                onChange={handleChange}
                                type="text"
                                placeholder="Where are you from?"
                                className={inputClass("city")}
                            />
                            {errors.city && <p className="text-red-400 text-xs ml-1">{errors.city}</p>}
                        </div>
                    </div>

                    {/* Profession & Work Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-1">
                                Profession <span className="text-red-400">*</span>
                            </label>
                            <input
                                name="profession"
                                value={form.profession}
                                onChange={handleChange}
                                type="text"
                                placeholder="What do you do?"
                                className={inputClass("profession")}
                            />
                            {errors.profession && <p className="text-red-400 text-xs ml-1">{errors.profession}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-1">
                                Remote Work Type
                            </label>
                            <select
                                name="workType"
                                value={form.workType}
                                onChange={handleChange}
                                className="w-full bg-foreground/[0.03] border border-foreground/[0.08] focus:border-primary focus:ring-1 focus:ring-primary rounded-2xl p-4 text-sm transition-all outline-none appearance-none cursor-pointer"
                            >
                                <option value="">Select type</option>
                                <option value="Job">Job</option>
                                <option value="Freelancer">Freelancer</option>
                                <option value="Founder">Founder</option>
                            </select>
                        </div>
                    </div>

                    {/* Preferred Month */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-1">
                            Preferred Month
                        </label>
                        <div className="flex flex-wrap gap-3">
                            {["May", "June", "July", "August", "September"].map((m) => (
                                <button
                                    key={m}
                                    type="button"
                                    onClick={() => setForm((prev) => ({ ...prev, month: m }))}
                                    className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all border ${
                                        form.month === m
                                            ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                                            : "bg-foreground/[0.03] border-foreground/[0.08] hover:border-primary hover:text-primary"
                                    }`}
                                >
                                    {m}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Stay Plan */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-1">
                            Stay Plan
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { id: "full-moon", name: "The Full Moon", desc: "28 Days · ₹36,000/month" },
                                { id: "half-knight", name: "The Half Knight", desc: "14 Days · ₹18,000/14 days" },
                            ].map((plan) => (
                                <button
                                    key={plan.id}
                                    type="button"
                                    onClick={() => setForm((prev) => ({ ...prev, stayPlan: plan.name }))}
                                    className={`p-5 rounded-2xl text-left transition-all border ${
                                        form.stayPlan === plan.name
                                            ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                                            : "bg-foreground/[0.03] border-foreground/[0.08] hover:border-primary"
                                    }`}
                                >
                                    <p className="font-bold text-sm">{plan.name}</p>
                                    <p className={`text-xs mt-1 ${form.stayPlan === plan.name ? "text-white/70" : "text-foreground/40"}`}>{plan.desc}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Why NIVÀSA */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-1">
                            Why do you want to join NIVÀSA?
                        </label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Tell us about yourself, what you're working on, and why NIVÀSA interests you..."
                            className="w-full bg-foreground/[0.03] border border-foreground/[0.08] focus:border-primary focus:ring-1 focus:ring-primary rounded-2xl p-4 text-sm transition-all outline-none min-h-[140px] resize-none"
                        />
                    </div>

                    {/* Submit */}
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all flex items-center justify-center gap-3"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.453 3.484 1.328 5.016l-1.406 5.141 5.266-1.375c1.484.813 3.156 1.25 4.781 1.25 5.516 0 10-4.484 10-10s-4.484-9.984-10-9.984zm6.047 14.125c-.25.703-1.453 1.281-2 1.344-.547.063-1.219.094-1.938-.141-2.906-1.031-4.75-3.859-4.891-4.047-.141-.188-1.125-1.484-1.125-2.828 0-1.344.703-2 1.016-2.313a.684.684 0 01.5-.234c.188 0 .375 0 .531.016.172.016.391-.063.609.453.234.547.781 1.922.844 2.063.078.141.125.313.031.5-.094.188-.141.313-.281.469-.141.156-.297.344-.422.469-.141.141-.297.297-.125.594.172.297.766 1.266 1.641 2.047.188.172.359.281.547.344.297.094.469.078.656-.109.188-.188.797-.922 1.016-1.234.219-.313.438-.25.719-.156.297.094 1.844.875 2.156 1.031.313.156.516.234.594.359.078.125.078.719-.172 1.422z" />
                        </svg>
                        Submit Application via WhatsApp
                    </motion.button>

                    <p className="text-[10px] text-center text-foreground/40 italic mt-4">
                        Your application will be sent as a WhatsApp message. This helps us maintain a curated community of remote builders.
                    </p>
                </motion.form>
            </section>

            <Footer />
        </main>
    );
}
