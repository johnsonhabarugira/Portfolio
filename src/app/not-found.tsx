import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <div className="text-center px-6">
        <span className="block text-xs tracking-[0.25em] uppercase text-[var(--muted)] mb-6">
          Error 404
        </span>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">Not Found</h1>
        <p className="text-[var(--muted)] text-lg mb-10 max-w-sm mx-auto">
          This page doesn&apos;t exist. Let&apos;s get you back to something real.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[var(--foreground)] text-[var(--background)] text-sm tracking-[0.12em] uppercase px-6 py-3 hover:bg-[var(--accent)] transition-colors duration-200"
        >
          Back Home →
        </Link>
      </div>
    </section>
  );
}
