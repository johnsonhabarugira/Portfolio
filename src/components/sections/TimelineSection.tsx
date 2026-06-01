"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { timeline } from "@/data/content";

const timelineVisuals = [
  { src: "/IMG_2195.PNG", position: "50% 32%" },
  { src: "/me.jpg", position: "50% 42%" },
  { src: "/IMG_2195.PNG", position: "50% 57%" },
  { src: "/me.jpg", position: "50% 54%" },
];

export default function TimelineSection() {
  const dragStartRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = timeline.length - 1;

  const showChapter = (index: number) => {
    setActiveIndex(Math.min(maxIndex, Math.max(0, index)));
  };

  const startDrag = (clientX: number) => {
    dragStartRef.current = clientX;
  };

  const endDrag = (clientX: number) => {
    const dragStart = dragStartRef.current;
    dragStartRef.current = null;
    if (dragStart === null || Math.abs(clientX - dragStart) < 42) return;
    showChapter(activeIndex + (clientX < dragStart ? 1 : -1));
  };

  return (
    <section id="experience" className="evolution" aria-labelledby="evolution-heading">
      <div className="evolution__story">
        <div className="evolution__sticky">
          <header className="evolution__header">
            <p>Experience timeline</p>
            <i />
            <span>{String(activeIndex + 1).padStart(2, "0")} / 04</span>
          </header>

          <div className="evolution__intro">
            <h2 id="evolution-heading">Creative<br />Evolution</h2>
            <p>A timeline of ideas, systems, and stories shaped through design leadership, craft, and cultural impact.</p>
          </div>

          <div className="evolution__controls" aria-label="Timeline navigation">
            <button
              type="button"
              aria-label="Previous chapter"
              disabled={activeIndex === 0}
              onClick={() => showChapter(activeIndex - 1)}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next chapter"
              disabled={activeIndex === maxIndex}
              onClick={() => showChapter(activeIndex + 1)}
            >
              →
            </button>
          </div>

          <div
            className="evolution__stage"
            onPointerDown={(event) => startDrag(event.clientX)}
            onPointerUp={(event) => endDrag(event.clientX)}
            onPointerCancel={() => {
              dragStartRef.current = null;
            }}
          >
            {timeline.map((item, index) => {
              const visual = timelineVisuals[index];
              const offset = index - activeIndex;

              return (
                <article
                  key={item.year}
                  className={`evolution__chapter ${offset === 0 ? "is-active" : ""}`}
                  style={{ "--offset": offset } as React.CSSProperties}
                >
                  <div className="evolution__chapter-top">
                    <span>Chapter {String(index + 1).padStart(2, "0")}</span>
                    <i />
                    <b />
                  </div>
                  <p className="evolution__year">{item.year}</p>
                  <h3>{item.title}</h3>
                  <div className="evolution__image">
                    <Image
                      src={visual.src}
                      alt=""
                      fill
                      sizes="(max-width: 760px) 74vw, 28rem"
                      style={{ objectPosition: visual.position }}
                    />
                  </div>
                  <p className="evolution__caption">{item.description}</p>
                </article>
              );
            })}
          </div>

          <div className="evolution__rail" aria-hidden="true">
            {timeline.map((item, index) => (
              <button
                type="button"
                key={item.year}
                className={activeIndex === index ? "is-active" : ""}
                aria-label={`Show ${item.year} chapter`}
                onClick={() => showChapter(index)}
              >
                <i />
                {item.year}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
