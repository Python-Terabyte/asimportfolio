"use client";

import { useState } from "react";
import { Mail, Phone, User, Code2, ExternalLink, Globe } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionReveal from "@/components/ui/SectionReveal";
import { SOCIAL_LINKS } from "@/lib/data";

const engagements = ["Freelance", "Retainer", "Advisory", "Full-time", "Remote", "Relocation"];

const subjects = [
  "Consulting Enquiry",
  "Full-time Role",
  "Partnership",
  "Other",
];

type LucideIcon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
const iconMap: Record<string, LucideIcon> = {
  User, Code2, ExternalLink, Globe,
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: subjects[0], message: "" });
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
    <section id="contact" className="relative py-24 bg-panel-mid overflow-hidden">
      {/* Subtle background orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-amber/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-rust/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <SectionReveal>
              <SectionLabel>Contact</SectionLabel>
              <h2 className="font-cormorant font-bold text-3xl md:text-4xl text-ink mb-5 leading-[1.15]">
                Let&apos;s Build{" "}
                <span className="text-forest italic font-semibold">Something Real</span>
              </h2>
              <p className="font-cormorant text-lg text-ink/90 mb-8 leading-relaxed">
                Open to freelance consulting, retainers, global remote, and relocation.
                If you&apos;re building something that needs real financial intelligence, let&apos;s talk.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:asimsaleem.net@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-forest">
                    <Mail size={16} className="text-amber" />
                  </div>
                  <span className="font-cormorant text-base text-ink/95 group-hover:text-forest transition-colors">
                    asimsaleem.net@gmail.com
                  </span>
                </a>
                <a
                  href="tel:+923435071032"
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-forest">
                    <Phone size={16} className="text-amber" />
                  </div>
                  <span className="font-cormorant text-base text-ink/95 group-hover:text-forest transition-colors">
                    +92 343 5071032
                  </span>
                </a>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="flex gap-3 mb-8">
                {SOCIAL_LINKS.map(({ label, icon, url }) => {
                  const Icon = iconMap[icon];
                  return (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={label}
                      className="p-3 rounded-full border border-ink/15 text-ink/75 hover:border-amber/60 hover:text-forest transition-all duration-200"
                    >
                      {Icon && <Icon size={18} />}
                    </a>
                  );
                })}
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div>
                <p className="font-mono text-xs text-ink/70 mb-3 tracking-wider">OPEN TO</p>
                <div className="flex flex-wrap gap-2">
                  {engagements.map((e) => (
                    <span
                      key={e}
                      className="font-mono text-xs px-3 py-1.5 rounded-full border border-amber/30 text-ink/75 bg-amber/8"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right: form */}
          <SectionReveal delay={0.1}>
            {limitReached && !sent ? (
              <div className="h-full flex flex-col items-center justify-center border border-ink/10 bg-ink/5 p-10 text-center">
                <div className="font-cormorant text-ink/30 text-5xl mb-4">⊘</div>
                <h3 className="font-jost font-light text-xl text-ink mb-2 uppercase tracking-wider">Limit Reached</h3>
                <p className="font-cormorant text-base text-ink/85">You&apos;ve sent {SESSION_LIMIT} messages this session. Please reach out again later or email directly.</p>
              </div>
            ) : sent ? (
              <div className="h-full flex flex-col items-center justify-center rounded-2xl border border-amber/40 bg-amber/8 p-10 text-center">
                <div className="font-cormorant text-forest text-5xl mb-4 italic">✓</div>
                <h3 className="font-jost font-light text-xl text-ink mb-2 uppercase tracking-wider">Message Sent</h3>
                <p className="font-cormorant text-base text-ink/85">I&apos;ll get back to you within 24 hours.</p>
                {sendCount < SESSION_LIMIT && (
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 font-mono text-xs text-forest/70 hover:text-forest underline underline-offset-2 transition-colors"
                  >
                    Send another ({SESSION_LIMIT - sendCount} remaining)
                  </button>
                )}
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label className="font-mono text-xs text-ink/75 font-medium tracking-wider block mb-2">NAME</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white border border-ink/10 text-ink font-cormorant text-base px-4 py-3 focus:outline-none focus:border-amber/60 transition-colors placeholder-ink/30"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="font-mono text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="font-mono text-xs text-ink/75 font-medium tracking-wider block mb-2">EMAIL</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white border border-ink/10 text-ink font-cormorant text-base px-4 py-3 focus:outline-none focus:border-amber/60 transition-colors placeholder-ink/30"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="font-mono text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="font-mono text-xs text-ink/75 font-medium tracking-wider block mb-2">SUBJECT</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-white border border-ink/10 text-ink font-cormorant text-base px-4 py-3 focus:outline-none focus:border-amber/60 transition-colors"
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-mono text-xs text-ink/75 font-medium tracking-wider block mb-2">MESSAGE</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full bg-white border border-ink/10 text-ink font-cormorant text-base px-4 py-3 focus:outline-none focus:border-amber/60 transition-colors resize-none placeholder-ink/30"
                    placeholder="Tell me about your project or challenge..."
                  />
                  {errors.message && <p className="font-mono text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                {apiError && (
                  <p className="font-mono text-xs text-red-500">{apiError}</p>
                )}
                <button
                  type="submit"
                  disabled={loading || limitReached}
                  className="btn-amber-fill w-full py-4 rounded-full border border-amber text-forest font-jost font-semibold text-sm tracking-widest uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending…" : `Send Message`}
                </button>
              </form>
            )}
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
