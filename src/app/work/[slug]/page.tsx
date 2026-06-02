import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects, getProjectBySlug } from "@/data/projects";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.intro,
    openGraph: {
      title: `${project.title} | HABARUGIRA Johnson`,
      description: project.intro,
      images: [{ url: project.coverImage, alt: project.title }],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const nextProject = project.nextProject
    ? projects.find((p) => p.slug === project.nextProject)
    : null;
  const prevProject = project.prevProject
    ? projects.find((p) => p.slug === project.prevProject)
    : null;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 bg-[var(--background)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <RevealOnScroll>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-10 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
              All Work
            </Link>
          </RevealOnScroll>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <RevealOnScroll delay={100}>
              <span className="block text-xs tracking-[0.25em] uppercase text-[var(--muted)] mb-4">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[0.95]">
                {project.title}
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Client", value: project.client },
                  { label: "Year", value: project.year },
                  { label: "Role", value: project.role },
                  { label: "Category", value: project.category },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <span className="block text-xs tracking-[0.2em] uppercase text-[var(--muted)] mb-1">
                      {label}
                    </span>
                    <span className="block text-sm font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <RevealOnScroll>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 mb-20">
          {project.behanceEmbedUrl ? (
            <div className="relative aspect-[404/316] overflow-hidden bg-[var(--border)]">
              <iframe
                src={project.behanceEmbedUrl}
                title={`${project.title} Behance project`}
                className="absolute inset-0 h-full w-full"
                allow="clipboard-write"
                referrerPolicy="strict-origin-when-cross-origin"
                loading="lazy"
                allowFullScreen
              />
            </div>
          ) : project.videoEmbedUrl ? (
            <div className="relative aspect-video overflow-hidden bg-[var(--foreground)]">
              <iframe
                src={project.videoEmbedUrl}
                title="Inclusion in Motion | Fitness Point Rwanda Breaking Barriers Through Fitness"
                className="absolute inset-0 h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="relative aspect-[16/7] bg-[var(--border)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-soft)] via-[var(--border)] to-[var(--background)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs tracking-[0.2em] uppercase text-[var(--muted)]">
                  Cover Image — {project.title}
                </span>
              </div>
            </div>
          )}
        </div>
      </RevealOnScroll>

      {/* Body */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Disciplines */}
        <RevealOnScroll>
          <div className="border-t border-[var(--border)] py-12 mb-12">
            <span className="block text-xs tracking-[0.25em] uppercase text-[var(--muted)] mb-6">
              Disciplines
            </span>
            <div className="flex flex-wrap gap-2">
              {project.disciplines.map((d) => (
                <span
                  key={d}
                  className="text-xs tracking-[0.12em] uppercase border border-[var(--border)] px-3 py-1.5 text-[var(--muted)]"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Intro */}
        <RevealOnScroll>
          <div className="border-t border-[var(--border)] py-12 mb-12 grid lg:grid-cols-[200px_1fr] gap-8">
            <span className="text-xs tracking-[0.25em] uppercase text-[var(--muted)] pt-1">
              Overview
            </span>
            <p className="text-xl md:text-2xl leading-relaxed font-light max-w-3xl">
              {project.intro}
            </p>
          </div>
        </RevealOnScroll>

        {/* Challenge + Solution */}
        <div className="grid md:grid-cols-2 gap-px bg-[var(--border)] mb-12">
          {[
            { label: "Challenge", text: project.challenge },
            { label: "Solution", text: project.solution },
          ].map(({ label, text }) => (
            <RevealOnScroll key={label}>
              <div className="bg-[var(--background)] p-8 md:p-12">
                <span className="block text-xs tracking-[0.25em] uppercase text-[var(--muted)] mb-4">
                  {label}
                </span>
                <p className="text-base leading-relaxed text-[var(--foreground)]">{text}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Gallery */}
        {project.galleryImages.length > 0 && (
          <RevealOnScroll>
            <div className="border-t border-[var(--border)] py-12 mb-12">
              <span className="block text-xs tracking-[0.25em] uppercase text-[var(--muted)] mb-8">
                Visual Direction
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
                {project.galleryImages.map((src, index) => (
                  <div key={src} className="group relative aspect-[4/5] overflow-hidden bg-[var(--border)]">
                    <Image
                      src={src}
                      alt={`${project.title} visual ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        )}

        {/* Results */}
        <RevealOnScroll>
          <div className="border-t border-[var(--border)] py-12 mb-20">
            <span className="block text-xs tracking-[0.25em] uppercase text-[var(--muted)] mb-8">
              Results
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.results.map((r, i) => (
                <div key={i} className="flex items-start gap-4 p-6 border border-[var(--border)]">
                  <span className="text-[var(--accent)] text-lg mt-0.5 shrink-0">→</span>
                  <p className="text-sm leading-relaxed">{r}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Next / Prev navigation */}
      <nav
        aria-label="Project navigation"
        className="border-t border-[var(--border)] bg-[var(--background)]"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-2 divide-x divide-[var(--border)]">
          {prevProject ? (
            <Link
              href={`/work/${prevProject.slug}`}
              className="group py-10 pr-8 flex flex-col gap-2 hover:bg-[var(--accent-soft)] transition-colors duration-200 -ml-6 pl-6"
            >
              <span className="text-xs tracking-[0.2em] uppercase text-[var(--muted)] group-hover:-translate-x-1 transition-transform duration-200">
                ← Previous
              </span>
              <span className="font-bold text-lg leading-tight">{prevProject.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/work/${nextProject.slug}`}
              className="group py-10 pl-8 flex flex-col items-end gap-2 hover:bg-[var(--accent-soft)] transition-colors duration-200 -mr-6 pr-6"
            >
              <span className="text-xs tracking-[0.2em] uppercase text-[var(--muted)] group-hover:translate-x-1 transition-transform duration-200">
                Next →
              </span>
              <span className="font-bold text-lg leading-tight text-right">{nextProject.title}</span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </>
  );
}
