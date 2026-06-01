"use client";

import { useEffect, useRef, useState } from "react";
import { services } from "@/data/content";

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleCards = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleCards[0]) {
          setActiveIndex(Number(visibleCards[0].target.getAttribute("data-index")));
        }
      },
      {
        rootMargin: "-28% 0px -28% 0px",
        threshold: [0.1, 0.35, 0.6],
      }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const scrollToService = (index: number) => {
    cardRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="services" className="services-editorial" aria-labelledby="services-heading">
      <div className="services-editorial__wash" aria-hidden="true" />
      <div className="services-editorial__layout">
        <aside className="services-editorial__intro">
          <div>
            <p className="services-editorial__eyebrow">
              <span className="services-editorial__eyebrow-dot" />
              Services
            </p>
            <h2 id="services-heading">What I Do</h2>
            <div className="services-editorial__rule">
              <span />
            </div>
            <p className="services-editorial__lede">
              Strategic ideas. Creative execution.
              <br />
              Built to grow brands, engage audiences,
              <br />
              and deliver real results.
            </p>
          </div>

          <div className="services-editorial__controls" aria-label="Service navigation">
            <button
              type="button"
              aria-label="Previous service"
              disabled={activeIndex === 0}
              onClick={() => scrollToService(activeIndex - 1)}
            >
              <span>↑</span>
            </button>
            <button
              type="button"
              aria-label="Next service"
              disabled={activeIndex === services.length - 1}
              onClick={() => scrollToService(activeIndex + 1)}
            >
              <span>↓</span>
            </button>
          </div>
        </aside>

        <div className="services-editorial__cards">
          {services.map((service, index) => (
            <article
              key={service.number}
              ref={(card) => {
                cardRefs.current[index] = card;
              }}
              data-index={index}
              className={`services-editorial__stage ${
                activeIndex === index ? "is-active" : ""
              }`}
            >
              <div className="services-editorial__card">
                <div className="services-editorial__shape" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="services-editorial__card-top">
                  <span className="services-editorial__number">{service.number}</span>
                  <div className="services-editorial__progress">
                    <span style={{ width: `${((index + 1) / services.length) * 100}%` }} />
                  </div>
                  <span className="services-editorial__count">
                    {service.number} / {String(services.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="services-editorial__content">
                  <p className="services-editorial__micro-label">Creative practice</p>
                  <h3>{service.title}</h3>
                  <p className="services-editorial__description">{service.description}</p>
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
