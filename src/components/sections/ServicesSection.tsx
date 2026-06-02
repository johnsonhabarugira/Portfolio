"use client";

import { useState } from "react";
import { services } from "@/data/content";

const serviceKinds = [
  "Strategy",
  "Campaigns",
  "Identity",
  "Production",
  "Editorial",
  "Design",
  "Animation",
  "Digital product",
  "Growth",
  "Messaging",
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="services-index" aria-labelledby="services-heading">
      <div className="services-index__layout">
        <header className="services-index__header">
          <div>
            <p className="services-index__eyebrow">
              <span />
              Services
            </p>
            <h2 id="services-heading">What I Do</h2>
          </div>

          <div className="services-index__summary">
            <p>
              From the first idea to the final frame, I shape clear creative work
              that helps brands move with purpose.
            </p>
            <span>{String(services.length).padStart(2, "0")} capabilities</span>
          </div>
        </header>

        <div className="services-index__list">
          {services.map((service, index) => (
            <article
              key={service.number}
              className={`services-index__item ${activeIndex === index ? "is-active" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              tabIndex={0}
            >
              <span className="services-index__number">{service.number}</span>
              <div className="services-index__title">
                <h3>{service.title}</h3>
                <span>{serviceKinds[index]}</span>
              </div>
              <p className="services-index__description">{service.description}</p>
              <span className="services-index__arrow" aria-hidden="true">
                <i />
                <b>→</b>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
