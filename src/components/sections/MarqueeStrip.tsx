"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { marqueeItems } from "@/data/content";

interface Props {
  items?: string[];
  className?: string;
  reverse?: boolean;
}

export default function MarqueeStrip({ items = marqueeItems, className = "", reverse = false }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const doubled = [...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let lastScrollPos = window.pageYOffset;
    let isScrollingDown = !reverse;

    const tween = gsap.to(track, {
      xPercent: -50,
      repeat: -1,
      duration: 30,
      ease: "linear",
    });
    tween.totalProgress(0.5);
    if (reverse) tween.timeScale(-1);

    function updateDirection(currentPos: number) {
      const scrollingDown = currentPos > lastScrollPos;
      if (scrollingDown !== isScrollingDown) {
        tween.timeScale(reverse ? (scrollingDown ? -1 : 1) : (scrollingDown ? 1 : -1));
        isScrollingDown = scrollingDown;
      }
      lastScrollPos = currentPos;
    }

    let touchStartY = 0;
    const onWheel = () => updateDirection(window.pageYOffset);
    const onTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };
    const onTouchMove = (e: TouchEvent) => {
      updateDirection(lastScrollPos + (touchStartY - e.touches[0].clientY));
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      tween.kill();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [reverse]);

  return (
    <section
      aria-hidden="true"
      className={`border-y border-[var(--foreground)] overflow-hidden bg-[var(--background)] py-3 ${className}`}
    >
      <div
        ref={trackRef}
        className="inline-flex items-center gap-7"
        style={{ whiteSpace: "nowrap" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="shrink-0 text-[3.5rem] font-black leading-none uppercase text-[var(--foreground)] md:text-[5.5rem] lg:text-[7rem]"
          >
            {item}
            <span className="inline-block mx-5 text-[var(--foreground)]">
              {reverse ? "←" : "→"}
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
