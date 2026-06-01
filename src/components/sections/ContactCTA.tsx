import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function ContactCTA() {
  return (
    <section className="py-24 md:py-40 bg-[var(--foreground)] text-[var(--background)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <RevealOnScroll>
          <span className="block text-xs tracking-[0.25em] uppercase text-[var(--background)]/40 mb-6">
            Let&apos;s connect
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.92] mb-12 max-w-4xl">
            Let&apos;s build something clear, creative, and memorable.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--background)] text-sm tracking-[0.12em] uppercase px-8 py-4 hover:bg-[var(--background)] hover:text-[var(--foreground)] transition-all duration-200"
            >
              Start a Project
              <span className="animate-arrow-float">→</span>
            </Link>
            <a
              href="mailto:habarugirajohnson@gmail.com"
              className="inline-flex items-center gap-2 border border-[var(--background)]/30 text-sm tracking-[0.12em] uppercase px-8 py-4 hover:border-[var(--background)] transition-all duration-200"
            >
              habarugirajohnson@gmail.com
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
