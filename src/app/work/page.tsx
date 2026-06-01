import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import ContactCTA from "@/components/sections/ContactCTA";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies and projects by HABARUGIRA Johnson — digital marketing campaigns, brand identities, video productions, photography, and UI/UX design work from Kigali, Rwanda.",
};

export default function WorkPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 bg-[var(--background)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <RevealOnScroll>
            <span className="block text-xs tracking-[0.25em] uppercase text-[var(--muted)] mb-6">
              Portfolio
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.92] mb-8">
              Work &amp;
              <br />
              Case Studies
            </h1>
            <p className="text-[var(--muted)] text-lg max-w-xl leading-relaxed">
              A selection of projects spanning digital marketing, visual content,
              branding, video, photography, and UI/UX.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <MarqueeStrip />

      {/* Project grid */}
      <section className="py-16 md:py-24 bg-[var(--background)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          {/* All projects */}
          <div className="divide-y divide-[var(--border)]">
            {projects.map((project, i) => (
              <RevealOnScroll key={project.slug} delay={i * 60}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-6 py-8 hover:bg-[var(--accent-soft)] -mx-4 px-4 transition-all duration-200 rounded-sm"
                  aria-label={`View ${project.title} case study`}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
                    {/* Number */}
                    <span className="text-xs tracking-[0.2em] uppercase text-[var(--muted)] w-8 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Thumbnail */}
                    <div className="relative w-20 h-14 bg-[var(--border)] overflow-hidden shrink-0 hidden md:block">
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-soft)] to-[var(--border)]" />
                    </div>

                    {/* Info */}
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-[var(--accent)] transition-colors duration-200">
                        {project.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-3 mt-1.5">
                        <span className="text-xs tracking-[0.15em] uppercase text-[var(--muted)]">
                          {project.client}
                        </span>
                        <span className="text-[var(--border)]">·</span>
                        <span className="text-xs tracking-[0.15em] uppercase text-[var(--muted)]">
                          {project.year}
                        </span>
                        <span className="text-[var(--border)]">·</span>
                        <span className="text-xs tracking-[0.12em] uppercase text-[var(--muted)] border border-[var(--border)] px-2 py-0.5">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <span className="text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-2 transition-all duration-200 text-lg shrink-0">
                    →
                  </span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
