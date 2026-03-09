import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommunityHero from "@/components/CommunityHero";
import PhilosophySection from "@/components/PhilosophySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Gallery from "@/components/Gallery";
import ExperienceGrid from "@/components/ExperienceGrid";
import CommunityCarousel from "@/components/CommunityCarousel";

import Link from "next/link";

export const metadata = {
    title: "Community | Remote Work & Co-Living Community in Agonda, Goa",
    description:
        "Meet the NIVÀSA tribe — a curated community of remote workers, freelancers, founders and creators living and working from Agonda, South Goa. Join the WFH community in Goa.",
    alternates: { canonical: "/community" },
    openGraph: {
        title: "NIVÀSA Community | Work From Home Community in Goa",
        description: "A tribe of builders, creators and remote workers living and working from paradise in Agonda, South Goa.",
        url: "https://thenivasa.com/community",
    },
};

export default function CommunityPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <CommunityHero />

            <CommunityCarousel />

            {/* You and Your Nivasa Section */}
            <section className="py-24 bg-foreground/[0.02]">
                <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                    <p className="uppercase tracking-[0.3em] text-[10px] font-bold text-primary mb-4">Your Experience</p>
                    <h2 className="font-display text-4xl md:text-6xl font-bold">You And Your Nivasa</h2>
                </div>
                <Gallery />
            </section>

            <ExperienceGrid />
            <PhilosophySection />
            <TestimonialsSection />

            {/* Join the Community CTA */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-display text-4xl md:text-6xl text-foreground font-bold mb-6">Join The Tribe.</h2>
                    <p className="text-foreground/60 font-light max-w-xl mx-auto leading-relaxed mb-10">
                        Ready to build the next big thing in paradise? Apply now and we'll reach out with everything you need to know.
                    </p>
                    <Link
                        href="/apply"
                        className="inline-block bg-primary text-white font-bold rounded-2xl px-12 py-5 hover:scale-[1.02] transition-all shadow-xl shadow-primary/10 text-lg"
                    >
                        Join the Community
                    </Link>
                    <p className="mt-8 text-[10px] text-foreground/30 uppercase tracking-[0.2em] font-bold">
                        Next cohort starts May 1st, 2026
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
