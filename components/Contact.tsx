"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionReveal from "@/components/ui/SectionReveal";
import { SOCIAL_LINKS } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [sendCount, setSendCount] = useState(() => {
    if (typeof window === "undefined") return 0;
    return parseInt(sessionStorage.getItem("contact_sends") ?? "0", 10);
  });

  const SESSION_LIMIT = 5;
  const limitReached = sendCount >= SESSION_LIMIT;

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (limitReached) return;
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setLoading(true);
    setApiError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        setApiError(data.error ?? "Failed to send. Please try again.");
      } else {
        const newCount = sendCount + 1;
        sessionStorage.setItem("contact_sends", String(newCount));
        setSendCount(newCount);
        setSent(true);
      }
    } catch {
      setApiError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-[76px] px-5 md:px-7 bg-bg1">
      <div className="max-w-[1280px] mx-auto flex flex-wrap gap-14">
        <div className="flex-1 min-w-0 basis-[420px]">
          <SectionReveal>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="font-sora font-extrabold text-[30px] md:text-[46px] text-ivory mb-[18px]">
              Have a problem worth solving?
            </h2>
            <p className="font-manrope text-[17px] leading-relaxed text-ivory-muted mb-8">
              Let&apos;s build something meaningful.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <div className="flex flex-col gap-3.5 mb-7">
              <a href="mailto:asimsaleem.net@gmail.com" className="font-manrope text-[15px] text-ivory-dim flex items-center gap-2.5 hover:text-gold transition-colors">
                <span className="text-gold">✉</span>asimsaleem.net@gmail.com
              </a>
              <a href="tel:+923435071032" className="font-manrope text-[15px] text-ivory-dim flex items-center gap-2.5 hover:text-gold transition-colors">
                <span className="text-gold">☎</span>+92 343 5071032
              </a>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.12}>
            <div className="flex flex-wrap gap-2.5">
              {SOCIAL_LINKS.map(({ label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11.5px] text-ivory-dim border border-ivory/15 px-4 py-2.5 rounded-full hover:border-gold/60 hover:text-gold transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </SectionReveal>
        </div>

        <SectionReveal delay={0.08} className="flex-1 min-w-[300px] basis-[380px]">
          {limitReached && !sent ? (
            <div className="h-full min-h-[280px] flex flex-col items-center justify-center text-center rounded-[18px] border border-ivory/10 bg-white/[0.03] p-10">
              <div className="text-5xl text-ivory-ghost mb-4">⊘</div>
              <h3 className="font-sora font-bold text-lg text-ivory mb-2">Limit Reached</h3>
              <p className="font-manrope text-sm text-ivory-muted">
                You&apos;ve sent {SESSION_LIMIT} messages this session. Please reach out again later or email directly.
              </p>
            </div>
          ) : sent ? (
            <div className="h-full min-h-[280px] flex flex-col items-center justify-center text-center rounded-[18px] border border-gold/35 bg-gold/5 p-10">
              <div className="text-4xl text-gold mb-3.5">✓</div>
              <h3 className="font-sora font-bold text-lg text-ivory mb-2">Message received</h3>
              <p className="font-manrope text-sm text-ivory-faint">I&apos;ll get back to you within 24 hours.</p>
              {sendCount < SESSION_LIMIT && (
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 font-mono text-xs text-gold/80 hover:text-gold underline underline-offset-2 transition-colors"
                >
                  Send another ({SESSION_LIMIT - sendCount} remaining)
                </button>
              )}
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-4 p-[30px] rounded-[18px] bg-bg2 border border-ivory/[0.08]">
              <div>
                <label className="font-mono text-[10.5px] tracking-wide uppercase text-ivory-ghost block mb-2">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-3.5 py-3 rounded-[10px] bg-bg0 border border-ivory/10 text-ivory font-manrope text-sm placeholder-ivory-ghost/60 focus:outline-none focus:border-gold/60 transition-colors"
                />
                {errors.name && <p className="font-mono text-xs text-rust mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="font-mono text-[10.5px] tracking-wide uppercase text-ivory-ghost block mb-2">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  className="w-full px-3.5 py-3 rounded-[10px] bg-bg0 border border-ivory/10 text-ivory font-manrope text-sm placeholder-ivory-ghost/60 focus:outline-none focus:border-gold/60 transition-colors"
                />
                {errors.email && <p className="font-mono text-xs text-rust mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="font-mono text-[10.5px] tracking-wide uppercase text-ivory-ghost block mb-2">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  placeholder="Tell me about your project or challenge..."
                  className="w-full px-3.5 py-3 rounded-[10px] bg-bg0 border border-ivory/10 text-ivory font-manrope text-sm placeholder-ivory-ghost/60 focus:outline-none focus:border-gold/60 transition-colors resize-y"
                />
                {errors.message && <p className="font-mono text-xs text-rust mt-1">{errors.message}</p>}
              </div>

              {apiError && <p className="font-mono text-xs text-rust">{apiError}</p>}

              <button
                type="submit"
                disabled={loading || limitReached}
                className="mt-1.5 py-[15px] rounded-full bg-gold border-none text-bg0 font-sora font-bold text-[13px] tracking-wide uppercase transition-colors hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </SectionReveal>
      </div>
    </section>
  );
}
