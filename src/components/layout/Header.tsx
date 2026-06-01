"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const logoRef = useRef<HTMLAnchorElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    let raf = 0;
    let wasScrolled = false;

    const setLogoProgress = (progress: number) => {
      const logo = logoRef.current;
      if (!logo) return;

      logo.style.setProperty("--logo-line", String(0.78 + 0.14 * progress));
      logo.style.setProperty("--logo-scale-x", String(0.78 + 0.22 * progress));
      logo.style.setProperty("--logo-scale", String(1 - 0.84 * progress));
    };

    const handler = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        const nextProgress = Math.max(0, Math.min((window.scrollY - 192) / 170, 1));
        const nextScrolled = window.scrollY > 8;

        if (nextScrolled !== wasScrolled) {
          wasScrolled = nextScrolled;
          setScrolled(nextScrolled);
        }

        setLogoProgress(isHome && !menuOpen ? nextProgress : 1);
        raf = 0;
      });
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler, { passive: true });

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [isHome, menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const onNavEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { scale: 1.12, duration: 0.35, ease: "power4.out", transformOrigin: "left center" });
  };
  const onNavLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.35, ease: "power4.out" });
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-[100] overflow-visible">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            height: "calc(100% + 92px)",
            backdropFilter: "blur(18px) saturate(150%)",
            WebkitBackdropFilter: "blur(18px) saturate(150%)",
            background:
              "linear-gradient(to bottom, color-mix(in srgb, var(--background) 54%, transparent) 0%, color-mix(in srgb, var(--background) 28%, transparent) 55%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, #000 0%, #000 48%, rgba(0,0,0,0.7) 70%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 48%, rgba(0,0,0,0.7) 70%, transparent 100%)",
            opacity: scrolled || menuOpen ? 1 : 0.92,
            transition: "opacity 0.25s ease",
          }}
        />

        <div className="relative mx-auto flex h-16 max-w-[1920px] items-center justify-between px-4 md:px-8 lg:px-10">
          <Link
            ref={logoRef}
            href="/"
            className="site-logo absolute left-4 md:left-8 lg:left-10"
            aria-label="HABARUGIRA Johnson — Home"
          >
            <span>HABARUGIRA</span>
            <span>JOHNSON</span>
          </Link>

          <div className="ml-auto flex items-center gap-5">
            <Link
              href="/about"
              aria-label="About HABARUGIRA Johnson"
              className="relative h-8 w-8 overflow-hidden rounded-full transition-opacity duration-300 hover:opacity-80"
              style={{ opacity: scrolled ? 1 : 0, pointerEvents: scrolled ? "auto" : "none", transition: "opacity 0.35s ease" }}
            >
              <Image
                src="/me.jpg"
                alt="HABARUGIRA Johnson"
                fill
                className="object-cover object-top"
                sizes="32px"
                priority
              />
            </Link>
            <Link
              href="/contact"
              className="touch-loop hidden h-8 overflow-hidden text-sm font-black uppercase leading-none sm:inline-flex"
              style={{ letterSpacing: "0" }}
              aria-label="Get in touch"
            >
              <span className="touch-loop__track" aria-hidden="true">
                <span>Get in touch&nbsp; →→</span>
                <span>Get in touch&nbsp; →→</span>
              </span>
            </Link>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="relative z-[101] flex h-8 w-8 flex-col items-end justify-center gap-[6px]"
            >
              <span className={`block h-[2px] bg-[var(--foreground)] transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-[8px]" : "w-6"}`} />
              <span className={`block h-[2px] bg-[var(--foreground)] transition-all duration-300 ${menuOpen ? "opacity-0 w-4" : "w-4"}`} />
              <span className={`block h-[2px] bg-[var(--foreground)] transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-[8px]" : "w-5"}`} />
            </button>
          </div>
        </div>
      </header>

      <div
        aria-hidden={!menuOpen}
        className={`menu-panel fixed right-4 top-16 z-[99] flex flex-col px-6 py-8 transition-all duration-300 md:right-8 lg:right-10 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav aria-label="Main navigation" className="flex flex-col gap-2">
          {NAV.map(({ label, href }, i) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              onMouseEnter={onNavEnter}
              onMouseLeave={onNavLeave}
              className={`font-bold tracking-tight inline-block ${
                pathname === href ? "text-[var(--accent)]" : "text-[var(--foreground)]"
              }`}
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.75rem)",
                lineHeight: 1.1,
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                transform: menuOpen ? "translateY(0)" : "translateY(14px)",
                opacity: menuOpen ? 1 : 0,
                transition: `opacity 0.4s ease ${i * 60}ms, transform 0.4s ease ${i * 60}ms`,
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 flex flex-col gap-2 pt-6">
          <span className="text-[0.65rem] font-semibold uppercase text-[var(--muted)]">Get in touch</span>
          <a
            href="mailto:habarugirajohnson@gmail.com"
            className="text-sm font-semibold text-[var(--foreground)] transition-opacity hover:opacity-60"
          >
            habarugirajohnson@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}
