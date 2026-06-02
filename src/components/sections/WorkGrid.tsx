"use client";

import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { getFeaturedProjects } from "@/data/projects";
import { useEffect, useRef } from "react";

export default function WorkGrid() {
  const featured = getFeaturedProjects();
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!section || !viewport || !track) return;

    let raf = 0;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const maxY = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / maxY, 0), 1);
      const maxX = Math.max(track.scrollWidth - viewport.clientWidth, 0);
      track.style.transform = `translate3d(${-maxX * progress}px, 0, 0)`;
      raf = 0;
    };

    const requestUpdate = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[185vh] bg-[var(--background)]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-20">
        <div className="mx-auto w-full max-w-[1920px] px-4 md:px-8 lg:px-10">
          {/* Header */}
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <RevealOnScroll>
              <span className="mb-2 block text-[0.65rem] font-semibold uppercase text-[var(--muted)]">
                Selected Work
              </span>
              <h2 className="text-3xl font-bold leading-none tracking-tight md:text-4xl lg:text-5xl">
                Projects &amp;<br />Case Studies
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 border-b border-[var(--foreground)] pb-0.5 text-sm uppercase transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                All Work →
              </Link>
            </RevealOnScroll>
          </div>

          <div ref={viewportRef} className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex w-max gap-px bg-[var(--border)] will-change-transform"
            >
              {featured.map((project, i) => (
                <RevealOnScroll key={project.slug} delay={i * 80} className="shrink-0">
                  <Link
                    href={`/work/${project.slug}`}
                    className="group relative block w-[78vw] max-w-[25rem] shrink-0 overflow-hidden bg-[var(--background)] md:w-[26rem]"
                    aria-label={`View ${project.title} case study`}
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-[var(--border)]">
                      {project.behanceEmbedUrl ? (
                        <iframe
                          src={project.behanceEmbedUrl}
                          title={`${project.title} Behance preview`}
                          className="pointer-events-none absolute inset-0 h-full w-full"
                          allow="clipboard-write"
                          referrerPolicy="strict-origin-when-cross-origin"
                          loading="lazy"
                          aria-hidden="true"
                          tabIndex={-1}
                        />
                      ) : project.videoEmbedUrl ? (
                        <iframe
                          src={`${project.videoEmbedUrl}&background=1&autoplay=1&muted=1&loop=1`}
                          title={`${project.title} video preview`}
                          className="pointer-events-none absolute left-1/2 top-1/2 h-full w-[138%] -translate-x-1/2 -translate-y-1/2 scale-[1.04]"
                          allow="autoplay; fullscreen; picture-in-picture"
                          aria-hidden="true"
                          tabIndex={-1}
                        />
                      ) : project.coverImage.startsWith("/images/fp/") ? (
                        <Image
                          src={project.coverImage}
                          alt=""
                          fill
                          sizes="(max-width: 768px) 78vw, 26rem"
                          className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-soft)] to-[var(--border)] transition-transform duration-700 group-hover:scale-105" />
                      )}

                      <span className="absolute left-4 top-4 bg-[var(--background)]/90 px-2.5 py-1 text-[10px] uppercase backdrop-blur-sm">
                        {project.category}
                      </span>

                      <div className="absolute inset-0 flex items-center justify-center bg-[var(--foreground)]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="text-sm uppercase text-[var(--background)]">
                          View →
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="border-t border-[var(--border)] p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-base font-bold leading-tight transition-colors duration-200 group-hover:text-[var(--accent)] md:text-lg">
                            {project.title}
                          </h3>
                          <p className="mt-1 text-xs text-[var(--muted)]">
                            {project.client} · {project.year}
                          </p>
                        </div>
                        <span className="mt-1 shrink-0 text-[var(--muted)] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[var(--accent)]">
                          →
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.disciplines.slice(0, 3).map((d) => (
                          <span
                            key={d}
                            className="border border-[var(--border)] px-2 py-0.5 text-[10px] uppercase text-[var(--muted)]"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
