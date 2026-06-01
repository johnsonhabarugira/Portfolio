import type { Metadata } from "next";
import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import ContactCTA from "@/components/sections/ContactCTA";
import TimelineSection from "@/components/sections/TimelineSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "HABARUGIRA Johnson is a Kigali-based multidisciplinary creative specialising in digital marketing, visual communication, photography, video production, and UI/UX design.",
};

const STRENGTHS = [
  { label: "Strategy", description: "Business goals first, creative second. Every visual decision is grounded in a clear communication objective." },
  { label: "Storytelling", description: "Words and images working together to create meaning, build trust, and move audiences to act." },
  { label: "Visual Systems", description: "Coherent design languages that scale — from a single post to a full brand ecosystem." },
  { label: "Campaign Execution", description: "End-to-end production: brief → concept → shoot → edit → publish → measure." },
];

const SKILLS = [
  "Adobe Premiere Pro", "Adobe After Effects", "Adobe Photoshop",
  "Adobe Illustrator", "Adobe InDesign", "Figma", "Canva Pro",
  "DaVinci Resolve", "Final Cut Pro", "Meta Ads Manager",
  "Google Analytics", "YouTube Studio", "Notion", "CapCut",
];

const LANGUAGES = [
  { lang: "English", level: "Fluent" },
  { lang: "French", level: "Proficient" },
  { lang: "Kinyarwanda", level: "Native" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 bg-[var(--background)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <RevealOnScroll>
            <span className="block text-xs tracking-[0.25em] uppercase text-[var(--muted)] mb-6">
              About
            </span>
          </RevealOnScroll>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <RevealOnScroll delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] mb-8">
                  Multidisciplinary
                  <br />
                  Creative from
                  <br />
                  <span className="text-[var(--accent)]">Kigali</span>
                </h1>
              </RevealOnScroll>

              <RevealOnScroll delay={200}>
                <p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed mb-6 max-w-lg">
                  I&apos;m HABARUGIRA Johnson, a multidisciplinary creative from Kigali, Rwanda.
                  My work connects digital marketing, visual communication, design, photography,
                  video production, motion graphics, and UI/UX.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={300}>
                <p className="text-base text-[var(--muted)] leading-relaxed max-w-lg">
                  I help brands tell clearer stories, build trust, and create content that moves
                  people to act. Whether it&apos;s a digital campaign, a brand film, a UI system,
                  or a social media strategy — I bring the same level of creative rigour and
                  strategic thinking to every project.
                </p>
              </RevealOnScroll>
            </div>

            {/* Portrait */}
            <RevealOnScroll delay={200}>
              <div className="relative aspect-[3/4] bg-[var(--foreground)] overflow-hidden">
                <Image
                  src="/me.jpg"
                  alt="HABARUGIRA Johnson — Kigali, Rwanda"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute top-5 left-5 text-xs tracking-[0.2em] uppercase bg-[var(--background)]/90 px-3 py-1.5">
                  Kigali, RW
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <MarqueeStrip />

      {/* Background */}
      <section className="py-24 md:py-32 bg-[var(--background)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Education */}
            <RevealOnScroll>
              <div>
                <span className="block text-xs tracking-[0.25em] uppercase text-[var(--muted)] mb-6">
                  Education
                </span>
                <h3 className="text-xl font-bold mb-3">Bachelor in Business IT</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Specialisation in Digital Marketing and Visual Communication.
                  A foundation that combines technical systems thinking with
                  creative and strategic communication disciplines.
                </p>
              </div>
            </RevealOnScroll>

            {/* Experience */}
            <RevealOnScroll delay={100}>
              <div>
                <span className="block text-xs tracking-[0.25em] uppercase text-[var(--muted)] mb-6">
                  Experience
                </span>
                <h3 className="text-xl font-bold mb-3">Digital Marketing Specialist</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Lead creative campaigns and visual content production for Action College,
                  delivering multilingual marketing materials across English, French, and
                  Kinyarwanda — reaching students across East Africa.
                </p>
              </div>
            </RevealOnScroll>

            {/* Languages */}
            <RevealOnScroll delay={200}>
              <div>
                <span className="block text-xs tracking-[0.25em] uppercase text-[var(--muted)] mb-6">
                  Languages
                </span>
                <div className="space-y-4">
                  {LANGUAGES.map(({ lang, level }) => (
                    <div key={lang} className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                      <span className="font-medium text-sm">{lang}</span>
                      <span className="text-xs tracking-[0.15em] uppercase text-[var(--muted)]">{level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Creative Strengths */}
      <section className="py-24 bg-[var(--foreground)] text-[var(--background)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <RevealOnScroll>
            <span className="block text-xs tracking-[0.25em] uppercase text-[var(--background)]/40 mb-3">
              Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-none mb-16">
              Creative Strengths
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--background)]/10">
            {STRENGTHS.map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 80}>
                <div className="group p-8 bg-[var(--foreground)] hover:bg-[var(--accent)] transition-colors duration-300">
                  <h3 className="text-xl font-bold mb-3">{s.label}</h3>
                  <p className="text-sm text-[var(--background)]/60 group-hover:text-[var(--background)]/80 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <RevealOnScroll>
            <span className="block text-xs tracking-[0.25em] uppercase text-[var(--muted)] mb-3">
              Tools
            </span>
            <h2 className="text-4xl font-bold tracking-tight leading-none mb-12">
              Skills &amp; Software
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="text-sm tracking-wide border border-[var(--border)] px-4 py-2 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <TimelineSection />
      <ContactCTA />
    </>
  );
}
