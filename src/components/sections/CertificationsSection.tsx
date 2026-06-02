"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const certificates = [
  {
    src: "/Cert/Coursera%2017JXB9CFI93Q.pdf",
    className: "certifications__paper--one",
  },
  {
    src: "/Cert/Coursera%20DRQNVM17KJ6C.pdf",
    className: "certifications__paper--two",
  },
  {
    src: "/Cert/Coursera%20IO37PO4C0I8W.pdf",
    className: "certifications__paper--three",
  },
  {
    src: "/Cert/Coursera%20LFQF7IM1QTA0.pdf",
    className: "certifications__paper--four",
  },
];

function CertificatePreview({ src }: { src: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const renderCertificate = async () => {
      const pdfjs = await import("pdfjs-dist");
      pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

      const document = await pdfjs.getDocument(src).promise;
      const page = await document.getPage(1);
      const viewport = page.getViewport({ scale: 1.65 });
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");

      if (!canvas || !context || cancelled) return;

      canvas.width = viewport.width;
      canvas.height = viewport.height;
      await page.render({ canvas, canvasContext: context, viewport }).promise;

      if (!cancelled) setLoaded(true);
    };

    renderCertificate().catch(() => {
      if (!cancelled) setLoaded(false);
    });

    return () => {
      cancelled = true;
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      className={`certifications__canvas ${loaded ? "is-loaded" : ""}`}
      aria-hidden="true"
    />
  );
}

export default function CertificationsSection() {
  return (
    <section id="certifications" className="certifications" aria-labelledby="certifications-heading">
      <div className="certifications__layout">
        <div className="certifications__intro">
          <p className="certifications__eyebrow">
            <span />
            Certifications
          </p>
          <h2 id="certifications-heading">
            Certified.
            <br />
            Always Learning.
          </h2>
          <p className="certifications__lede">
            A collection of professional certifications that reflect my
            commitment to growth, excellence, and staying ahead.
          </p>
          <div className="certifications__meta">
            <i />
            <span>04 professional certificates</span>
          </div>
        </div>

        <div className="certifications__gallery" aria-label="Professional certificate previews">
          <span className="certifications__gallery-note">Selected credentials / 2026</span>
          <span className="certifications__pin" aria-hidden="true" />
          {certificates.map((certificate, index) => (
            <a
              key={certificate.src}
              href={certificate.src}
              target="_blank"
              rel="noopener noreferrer"
              className={`certifications__paper ${certificate.className}`}
              style={{ "--paper-order": index } as CSSProperties}
              aria-label={`Open certificate ${index + 1} of ${certificates.length}`}
            >
              <CertificatePreview src={certificate.src} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
