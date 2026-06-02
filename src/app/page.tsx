import Hero from "@/components/sections/Hero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import WorkGrid from "@/components/sections/WorkGrid";
import CertificationsSection from "@/components/sections/CertificationsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <WorkGrid />
      <MarqueeStrip reverse />
      <CertificationsSection />
      <TimelineSection />
      <ContactCTA />
    </>
  );
}
