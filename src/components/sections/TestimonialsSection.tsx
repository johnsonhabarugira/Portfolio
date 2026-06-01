import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { testimonials } from "@/data/content";

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--accent-soft)] border-y border-[var(--border)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <RevealOnScroll>
          <span className="block text-xs tracking-[0.25em] uppercase text-[var(--muted)] mb-3">
            Client Words
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-none mb-16">
            What Clients Say
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--border)]">
          {testimonials.map((t, i) => (
            <RevealOnScroll key={i} delay={i * 100}>
              <div className="bg-[var(--accent-soft)] p-8 md:p-10 flex flex-col justify-between gap-8 h-full">
                <div>
                  <span className="block text-5xl text-[var(--accent)] font-bold leading-none mb-6 select-none" aria-hidden="true">
                    &ldquo;
                  </span>
                  <p className="text-base md:text-lg leading-relaxed text-[var(--foreground)]">
                    {t.quote}
                  </p>
                </div>

                <div className="border-t border-[var(--border)] pt-6">
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-[var(--muted)] mt-0.5 tracking-wide">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
