"use client";
import { useEffect, useRef } from "react";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    document.body.style.overflow = "hidden";

    const MIN_DURATION = 3500;
    const startTime = performance.now();
    let displayedProgress = 0;
    let targetProgress = 0;
    let loadingDone = false;
    let rafId: number;

    function randomProgressLoop() {
      if (loadingDone) return;
      targetProgress = Math.min(targetProgress + Math.floor(Math.random() * 12) + 4, 88);
      setTimeout(randomProgressLoop, Math.random() * 600 + 400);
    }

    function animate() {
      if (!text) return;
      if (loadingDone && displayedProgress >= 99.5) {
        text.textContent = "100";
        const maxX = window.innerWidth - text.offsetWidth - 32;
        text.style.transform = `translateX(${maxX}px)`;
        cancelAnimationFrame(rafId);
        return;
      }
      displayedProgress += (targetProgress - displayedProgress) * 0.06;
      text.textContent = String(Math.floor(displayedProgress));
      const maxX = window.innerWidth - text.offsetWidth - 32;
      text.style.transform = `translateX(${Math.max(0, maxX * (displayedProgress / 100))}px)`;
      rafId = requestAnimationFrame(animate);
    }

    randomProgressLoop();
    setTimeout(() => { rafId = requestAnimationFrame(animate); }, 400);

    setTimeout(() => {
      loadingDone = true;
      targetProgress = 100;
      const elapsed = performance.now() - startTime;
      const remaining = Math.max(0, MIN_DURATION - elapsed);

      setTimeout(() => {
        document.body.style.overflow = "";
        container.style.transition = "transform 1.2s cubic-bezier(0.87, 0, 0.13, 1)";
        container.style.transform = "translateY(-100%)";
        (window as Window & { __siteLoaded?: boolean }).__siteLoaded = true;
        window.dispatchEvent(new Event("site:loaded"));
        setTimeout(onDone, 1200);
      }, remaining);
    }, 2000);

    return () => {
      cancelAnimationFrame(rafId);
      document.body.style.overflow = "";
    };
  }, [onDone]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 z-[9999] bg-[var(--background)]"
      style={{ willChange: "transform" }}
    >
      <div
        ref={textRef}
        className="absolute bottom-8 left-4 font-bold leading-none select-none text-[var(--foreground)]"
        style={{ fontSize: "clamp(80px, 10vw, 128px)", willChange: "transform", lineHeight: 1 }}
      >
        0
      </div>
    </div>
  );
}
