"use client";
import { useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Toast from "@/components/ui/Toast";

const SOCIALS = [
  { label: "Behance", href: "https://behance.net/habarugjohnson" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/habarugira-johnson" },
  { label: "Instagram", href: "https://www.instagram.com/johnson.haba/" },
  { label: "Vimeo", href: "https://vimeo.com/user224099636" },
  { label: "WhatsApp", href: "https://wa.me/250785232415" },
];

const EMAIL = "habarugirajohnson@gmail.com";
const PHONE = "+250785232415";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for older browsers
      const el = document.createElement("input");
      el.value = EMAIL;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send.");
      }
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please email directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Toast message="Email copied!" visible={copied} />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 bg-[var(--background)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <RevealOnScroll>
            <span className="block text-xs tracking-[0.25em] uppercase text-[var(--muted)] mb-6">
              Contact
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.92] mb-8 max-w-4xl">
              Let&apos;s build something clear, creative, and memorable.
            </h1>
            <p className="text-[var(--muted)] text-lg max-w-xl leading-relaxed">
              Open to digital marketing projects, creative direction, video production,
              brand identity work, and UI/UX design.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pb-24 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <div className="space-y-12">
            {/* Email */}
            <RevealOnScroll>
              <div className="border-t border-[var(--border)] pt-10">
                <span className="block text-xs tracking-[0.25em] uppercase text-[var(--muted)] mb-4">
                  Email
                </span>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-xl font-medium hover:text-[var(--accent)] transition-colors"
                  >
                    {EMAIL}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="text-xs tracking-[0.15em] uppercase border border-[var(--border)] px-3 py-1.5 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
                    aria-label="Copy email address"
                  >
                    {copied ? "Copied ✓" : "Copy"}
                  </button>
                </div>
              </div>
            </RevealOnScroll>

            {/* Phone */}
            <RevealOnScroll>
              <div className="border-t border-[var(--border)] pt-10">
                <span className="block text-xs tracking-[0.25em] uppercase text-[var(--muted)] mb-4">
                  Phone
                </span>
                <a
                  href={`tel:${PHONE}`}
                  className="text-xl font-medium hover:text-[var(--accent)] transition-colors"
                >
                  {PHONE}
                </a>
              </div>
            </RevealOnScroll>

            {/* Location */}
            <RevealOnScroll>
              <div className="border-t border-[var(--border)] pt-10">
                <span className="block text-xs tracking-[0.25em] uppercase text-[var(--muted)] mb-4">
                  Based in
                </span>
                <p className="text-xl font-medium">Kigali, Rwanda</p>
                <p className="text-sm text-[var(--muted)] mt-1">Available for remote projects worldwide</p>
              </div>
            </RevealOnScroll>

            {/* Social links */}
            <RevealOnScroll>
              <div className="border-t border-[var(--border)] pt-10">
                <span className="block text-xs tracking-[0.25em] uppercase text-[var(--muted)] mb-6">
                  Find me on
                </span>
                <div className="flex flex-col gap-4">
                  {SOCIALS.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between border-b border-[var(--border)] pb-4 hover:border-[var(--accent)] transition-colors duration-200"
                    >
                      <span className="text-base font-medium">{label}</span>
                      <span className="text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all duration-200">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: Form */}
          <RevealOnScroll delay={150}>
            <div className="border-t border-[var(--border)] pt-10">
              <span className="block text-xs tracking-[0.25em] uppercase text-[var(--muted)] mb-8">
                Send a message
              </span>

              {sent ? (
                <div className="p-8 border border-[var(--accent)] bg-[var(--accent-soft)]">
                  <p className="text-lg font-bold mb-2">Message received!</p>
                  <p className="text-sm text-[var(--muted)]">
                    Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs tracking-[0.15em] uppercase text-[var(--muted)] mb-2">
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="w-full border border-[var(--border)] bg-transparent px-4 py-3 text-sm focus:border-[var(--foreground)] focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs tracking-[0.15em] uppercase text-[var(--muted)] mb-2">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="w-full border border-[var(--border)] bg-transparent px-4 py-3 text-sm focus:border-[var(--foreground)] focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs tracking-[0.15em] uppercase text-[var(--muted)] mb-2">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                      className="w-full border border-[var(--border)] bg-transparent px-4 py-3 text-sm focus:border-[var(--foreground)] focus:outline-none transition-colors"
                      placeholder="Project type or enquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs tracking-[0.15em] uppercase text-[var(--muted)] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className="w-full border border-[var(--border)] bg-transparent px-4 py-3 text-sm focus:border-[var(--foreground)] focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-600">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-[var(--foreground)] text-[var(--background)] text-sm tracking-[0.15em] uppercase px-6 py-4 hover:bg-[var(--accent)] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? "Sending…" : "Send Message →"}
                  </button>
                </form>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </>
  );
}
