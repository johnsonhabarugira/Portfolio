import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import LenisProvider from "@/components/ui/LenisProvider";
import PreloaderWrapper from "@/components/ui/PreloaderWrapper";
import AgentationWrapper from "@/components/ui/AgentationWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HABARUGIRA Johnson — Digital Marketing & Visual Communication Portfolio",
    template: "%s | HABARUGIRA Johnson",
  },
  description:
    "Portfolio of HABARUGIRA Johnson, Kigali-based Digital Marketing Specialist, Visual Communicator, Photographer, Videographer, Designer, and UI/UX creative.",
  keywords: [
    "HABARUGIRA Johnson",
    "digital marketing Rwanda",
    "visual communication",
    "photographer Kigali",
    "videographer Rwanda",
    "graphic designer Kigali",
    "UI UX designer Rwanda",
    "motion graphics",
    "brand strategy Africa",
    "creative director Kigali",
  ],
  authors: [{ name: "HABARUGIRA Johnson" }],
  creator: "HABARUGIRA Johnson",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://habarugirajohnson.com",
    siteName: "HABARUGIRA Johnson",
    title: "HABARUGIRA Johnson — Digital Marketing & Visual Communication Portfolio",
    description:
      "Portfolio of HABARUGIRA Johnson, Kigali-based multidisciplinary creative specialising in digital marketing, visual communication, photography, video, and UI/UX.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "HABARUGIRA Johnson Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HABARUGIRA Johnson — Digital Marketing & Visual Communication",
    description:
      "Kigali-based Digital Marketing Specialist, Visual Communicator, Photographer, Videographer, Designer, and UI/UX creative.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "HABARUGIRA Johnson",
  jobTitle: "Digital Marketing Specialist & Multidisciplinary Creative",
  url: "https://habarugirajohnson.com",
  email: "habarugirajohnson@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Kigali", addressCountry: "RW" },
  sameAs: [
    "https://behance.net/habarugjohnson",
    "https://linkedin.com/in/habarugirajohnson",
    "https://instagram.com/habarugirajohnson",
  ],
  knowsAbout: [
    "Digital Marketing",
    "Visual Communication",
    "Photography",
    "Videography",
    "Graphic Design",
    "Motion Graphics",
    "UI/UX Design",
    "Brand Strategy",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <LenisProvider>
          <PreloaderWrapper />
          <CustomCursor />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <AgentationWrapper />
        </LenisProvider>
      </body>
    </html>
  );
}
