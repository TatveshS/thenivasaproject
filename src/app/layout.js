import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: {
    default: "NIVÀSA | Work From Home Community in Goa | Remote Work & Co-Living in Agonda",
    template: "%s | NIVÀSA - Work From Goa",
  },
  description:
    "NIVÀSA is a curated work from home community in Agonda, South Goa. A premium WFH stay, co-living space & remote work retreat for freelancers, founders, developers and creators. Live, work & build from paradise.",
  keywords: [
    "work from home in Goa",
    "WFH in Goa",
    "WFH stay in Goa",
    "WFH hostel in Goa",
    "remote work Goa",
    "co-living Goa",
    "co-working Goa",
    "work from Goa",
    "workation Goa",
    "digital nomad Goa",
    "remote work community India",
    "work from home community Goa",
    "live and work in Goa",
    "work retreat Goa",
    "coliving space Agonda",
    "remote work stay Agonda",
    "work from beach Goa",
    "freelancer stay Goa",
    "startup community Goa",
    "remote workers Goa",
    "work from home hostel Goa",
    "Agonda co-living",
    "South Goa remote work",
    "Nivasa Goa",
    "Nivasa Project",
    "work from paradise",
    "remote work residency India",
    "one month stay Goa",
    "deep work retreat India",
  ],
  authors: [{ name: "The Nivasa Project" }],
  creator: "The Nivasa Project",
  publisher: "The Nivasa Project",
  metadataBase: new URL("https://thenivasa.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thenivasa.com",
    siteName: "NIVÀSA - The Nivasa Project",
    title: "NIVÀSA | Work From Home Community in Goa | Remote Work & Co-Living",
    description:
      "A curated work from home community in Agonda, South Goa. Premium WFH stay, co-living & remote work retreat for freelancers, founders and creators.",
    images: [
      {
        url: "/thenivasaproject/community/hero.png",
        width: 1200,
        height: 630,
        alt: "NIVÀSA - Work From Home Community in Agonda, Goa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NIVÀSA | Work From Home Community in Goa",
    description:
      "A curated WFH stay & co-living space in Agonda, South Goa for remote workers, freelancers, founders and creators.",
    images: ["/thenivasaproject/community/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
  category: "Travel & Remote Work",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "NIVÀSA - The Nivasa Project",
    description:
      "A curated work from home community and co-living space in Agonda, South Goa for remote workers, freelancers, founders and creators.",
    url: "https://thenivasa.com",
    image: "/thenivasaproject/community/hero.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Agonda",
      addressRegion: "South Goa",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "15.0448",
      longitude: "74.0154",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "High-Speed Internet", value: true },
      { "@type": "LocationFeatureSpecification", name: "Dedicated Workspace", value: true },
      { "@type": "LocationFeatureSpecification", name: "Private Rooms", value: true },
      { "@type": "LocationFeatureSpecification", name: "Community Kitchen", value: true },
      { "@type": "LocationFeatureSpecification", name: "Beach Access", value: true },
    ],
    priceRange: "₹18,000 - ₹36,000",
    telephone: "+917066195446",
    sameAs: [],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is NIVÀSA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NIVÀSA is a one-month live-and-work residency in Agonda, Goa, designed for remote professionals who want to work deeply while living closer to nature.",
        },
      },
      {
        "@type": "Question",
        name: "Where is NIVÀSA located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NIVÀSA is located in Agonda, South Goa, a quiet beach town known for its natural beauty. The residency is within 1 km of the shoreline.",
        },
      },
      {
        "@type": "Question",
        name: "Who is NIVÀSA designed for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NIVÀSA is ideal for remote workers, freelancers, founders, startup builders, designers, developers, creators, and writers who want focus during the week and a slower rhythm of life.",
        },
      },
      {
        "@type": "Question",
        name: "How long can I stay at NIVÀSA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NIVÀSA operates as a one-month residency. Residents commit to staying for a full month to maintain a stable community.",
        },
      },
      {
        "@type": "Question",
        name: "What facilities are available for remote work at NIVÀSA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NIVÀSA provides high-speed Wi-Fi, dedicated workspace areas, quiet deep-work zones, comfortable private rooms, and a shared kitchen and dining space.",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
