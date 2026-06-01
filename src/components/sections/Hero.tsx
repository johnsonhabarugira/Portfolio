"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SERVICES = [
  "Brand Strategy",
  "Creative Content",
  "Visual Storytelling",
  "Art Direction",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section) return;

    const tagline = section.querySelector<HTMLElement>(".hero-tagline");
    const services = section.querySelectorAll<HTMLElement>(".hero-service");
    const note = section.querySelector<HTMLElement>(".hero-note");

    const run = () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      if (tagline) tl.fromTo(tagline, { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.12);
      if (services.length) tl.fromTo(services, { y: 34, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.08 }, 0.2);
      if (image) tl.fromTo(image, { scale: 1.12, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5 }, 0.25);
      if (note) tl.fromTo(note, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.75 }, 0.55);
    };

    const w = window as Window & { __siteLoaded?: boolean };
    if (w.__siteLoaded) {
      run();
    } else {
      window.addEventListener("site:loaded", run, { once: true });
      return () => window.removeEventListener("site:loaded", run);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-screen bg-[var(--background)] overflow-hidden"
    >
      <h1 className="sr-only">HABARUGIRA Johnson</h1>

      <div className="mx-auto grid min-h-screen w-full max-w-[1920px] items-end gap-8 px-4 pb-8 pt-[clamp(11rem,24vw,16rem)] md:px-8 lg:grid-cols-[minmax(320px,0.82fr)_minmax(420px,1.18fr)] lg:px-10">
          <div className="order-2 flex flex-col self-start lg:order-1 lg:pb-2">
            <div className="overflow-hidden">
              <span
                className="hero-tagline block max-w-md text-[0.7rem] font-semibold uppercase text-[var(--muted)]"
                style={{ opacity: 0 }}
              >
                Kigali-based multidisciplinary creative
              </span>
            </div>

            <div className="mt-3">
              {SERVICES.map((service) => (
                <div key={service} className="overflow-hidden">
                  <p
                    className="hero-service font-serif text-[2.2rem] leading-[0.95] text-[var(--foreground)] md:text-[3.1rem] lg:text-[4.05rem] xl:text-[4.55rem]"
                    style={{ opacity: 0 }}
                  >
                    {service}
                  </p>
                </div>
              ))}
            </div>

            <p className="hero-note mt-7 max-w-sm text-sm leading-relaxed text-[var(--muted)] md:text-base" style={{ opacity: 0 }}>
              Strategy, design, film, and digital campaigns shaped into clear brand stories.
            </p>
          </div>

          <div ref={imageRef} className="order-1 relative lg:order-2" style={{ opacity: 0 }}>
            <div className="relative ml-auto aspect-[5/4] w-full overflow-hidden bg-[#dedede] lg:w-[min(100%,680px)]">
              <Image
                src="/me.jpg"
                alt="HABARUGIRA Johnson — Kigali-based multidisciplinary creative"
                fill
                priority
                className="object-cover object-[center_10%] grayscale transition-all duration-700 hover:grayscale-0"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
            <div aria-hidden="true" className="absolute -left-12 top-0 hidden flex-col items-center text-xl font-black leading-none text-[var(--foreground)] lg:flex">
              <span className="rotate-[-58deg] text-[0.75rem] uppercase">Digital</span>
              <span className="mt-4">↓</span>
              <span>↓</span>
            </div>
          </div>
      </div>
    </section>
  );
}
