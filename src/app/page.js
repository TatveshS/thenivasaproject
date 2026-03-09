import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CommunityInfo from "@/components/CommunityInfo";
import SocialProof from "@/components/SocialProof";
import AgondaCarousel from "@/components/AgondaCarousel";
import Gallery from "@/components/Gallery";
import ExperienceGrid from "@/components/ExperienceGrid";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CommunityInfo />
      <SocialProof />
      <AgondaCarousel />
      <Gallery />
      <ExperienceGrid />
      <BookingSection />
      <Footer />

      {/* Floating Action Button (Premium touch) */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href="/apply"
          className="bg-primary text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform hover:shadow-primary/40"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.453 3.484 1.328 5.016l-1.406 5.141 5.266-1.375c1.484.813 3.156 1.25 4.781 1.25 5.516 0 10-4.484 10-10s-4.484-9.984-10-9.984zm6.047 14.125c-.25.703-1.453 1.281-2 1.344-.547.063-1.219.094-1.938-.141-2.906-1.031-4.75-3.859-4.891-4.047-.141-.188-1.125-1.484-1.125-2.828 0-1.344.703-2 1.016-2.313a.684.684 0 01.5-.234c.188 0 .375 0 .531.016.172.016.391-.063.609.453.234.547.781 1.922.844 2.063.078.141.125.313.031.5-.094.188-.141.313-.281.469-.141.156-.297.344-.422.469-.141.141-.297.297-.125.594.172.297.766 1.266 1.641 2.047.188.172.359.281.547.344.297.094.469.078.656-.109.188-.188.797-.922 1.016-1.234.219-.313.438-.25.719-.156.297.094 1.844.875 2.156 1.031.313.156.516.234.594.359.078.125.078.719-.172 1.422z" />
          </svg>
        </a>
      </div>
    </main>
  );
}
