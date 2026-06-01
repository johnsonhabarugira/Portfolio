const SOCIALS = [
  { label: "Behance", href: "https://behance.net/habarugjohnson" },
  { label: "LinkedIn", href: "https://linkedin.com/in/habarugirajohnson" },
  { label: "Instagram", href: "https://instagram.com/habarugirajohnson" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      {/* Arrow marquee strip */}
      <div className="border-b border-[var(--border)] overflow-hidden py-3">
        <div className="marquee-wrap">
          <div className="animate-marquee flex gap-8 text-xs tracking-[0.2em] uppercase text-[var(--muted)]">
            {Array(12).fill("→ HABARUGIRA JOHNSON").map((t, i) => (
              <span key={i} className="shrink-0">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-sm font-bold tracking-[0.15em] uppercase">HABARUGIRA JOHNSON</p>
          <p className="text-xs text-[var(--muted)] mt-1">
            Digital Marketing · Visual Communication · Creative Direction
          </p>
        </div>

        <div className="flex items-center gap-6">
          {SOCIALS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 text-xs tracking-wide uppercase text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              {label}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <p className="text-xs text-[var(--muted)]">© 2026</p>
          <a
            href="#top"
            className="text-xs tracking-[0.15em] uppercase border border-[var(--border)] px-3 py-1.5 hover:border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-200"
            aria-label="Back to top"
          >
            ↑ Top
          </a>
        </div>
      </div>
    </footer>
  );
}
