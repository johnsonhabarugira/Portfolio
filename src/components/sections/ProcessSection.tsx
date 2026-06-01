"use client";

import { type CSSProperties, useEffect, useRef } from "react";
import { processSteps } from "@/data/content";

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("process-in-view");
          observer.disconnect();
        }
      },
      { threshold: 0.22 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="process-section py-24 md:py-32 bg-[var(--foreground)] text-[var(--background)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="process-heading">
          <div className="process-mask flex items-center gap-4 mb-16">
            <span className="process-heading-part text-xs uppercase text-[var(--background)]/50">
              Process
            </span>
            <div className="h-px flex-1 bg-[var(--background)]/20" />
          </div>
          <div className="process-mask mb-20">
            <h2 className="process-heading-part text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none">
              How I Work
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--background)]/10">
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              className="process-card-mask"
              style={{ "--card-delay": `${i * 0.18}s` } as CSSProperties}
            >
              <div className="process-card group p-8 lg:p-10 bg-[var(--foreground)] border border-[var(--background)]/10 hover:bg-[var(--accent)] transition-colors duration-500">
                <span className="process-card-part text-xs uppercase text-[var(--background)]/40 group-hover:text-[var(--background)]/60">
                  {step.number}
                </span>
                <h3 className="process-card-part mt-4 mb-4 text-2xl md:text-3xl font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="process-card-part text-sm leading-relaxed text-[var(--background)]/60 group-hover:text-[var(--background)]/80">
                  {step.description}
                </p>

                <div className="process-card-part mt-8 text-[var(--background)]/30 group-hover:text-[var(--background)] group-hover:translate-x-2 transition-all duration-500 text-xl">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
