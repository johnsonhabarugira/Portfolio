import Hero from "@/components/sections/Hero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import WorkGrid from "@/components/sections/WorkGrid";
import ServicesSection from "@/components/sections/ServicesSection";
import TimelineSection from "@/components/sections/TimelineSection";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <WorkGrid />
      <MarqueeStrip reverse />
      <ServicesSection />
      <TimelineSection />
      <ContactCTA />
    </>
  );
}
