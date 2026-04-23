"use client";

import { useState } from "react";
import { ExternalLink, Globe, Mail, Phone, User, Code2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionReveal from "@/components/ui/SectionReveal";

const engagements = ["Freelance", "Retainer", "Advisory", "Full-time", "Remote", "Relocation"];

const subjects = [
  "Consulting Enquiry",
  "Full-time Role",
  "Partnership",
  "Other",
];

const socialLinks = [
  { label: "LinkedIn", icon: User, url: "https://linkedin.com/in/muhammad-a-501087209" },
  { label: "GitHub", icon: Code2, url: "https://github.com/Python-Terabyte" },
  { label: "Metric Profile", icon: ExternalLink, url: "https://metricapp.co/about.html" },
  { label: "Live App", icon: Globe, url: "https://web.metricapp.co/login" },
];

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
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-teal/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-teal-light/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <SectionReveal>
              <SectionLabel>Contact</SectionLabel>
              <h2 className="font-jost font-light text-4xl md:text-5xl text-ink mb-5 leading-tight uppercase tracking-wide">
                Let&apos;s Build<br />
                <span className="text-teal text-teal-glow italic font-cormorant font-semibold normal-case">Something Real</span>
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
                  <div className="p-2 border border-teal/20 bg-teal/5">
                    <Mail size={16} className="text-teal" />
                  </div>
                  <span className="font-cormorant text-base text-ink/95 group-hover:text-teal transition-colors">
                    asimsaleem.net@gmail.com
                  </span>
                </a>
                <a
                  href="tel:+923435071032"
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2 border border-teal/20 bg-teal/5">
                    <Phone size={16} className="text-teal" />
                  </div>
                  <span className="font-cormorant text-base text-ink/95 group-hover:text-teal transition-colors">
                    +92 343 5071032
                  </span>
                </a>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="flex gap-3 mb-8">
                {socialLinks.map(({ label, icon: Icon, url }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="p-3 border border-ink/15 text-ink/75 hover:border-teal/50 hover:text-teal transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div>
                <p className="font-mono text-xs text-ink/70 mb-3 tracking-wider">OPEN TO</p>
                <div className="flex flex-wrap gap-2">
                  {engagements.map((e) => (
                    <span
                      key={e}
                      className="font-mono text-xs px-3 py-1.5 border border-teal/20 text-teal/60 bg-teal/5"
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
              <div className="h-full flex flex-col items-center justify-center border border-teal/30 bg-teal/5 p-10 text-center">
                <div className="font-cormorant text-teal text-5xl mb-4 italic">✓</div>
                <h3 className="font-jost font-light text-xl text-ink mb-2 uppercase tracking-wider">Message Sent</h3>
                <p className="font-cormorant text-base text-ink/85">I&apos;ll get back to you within 24 hours.</p>
                {sendCount < SESSION_LIMIT && (
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 font-mono text-xs text-teal/60 hover:text-teal underline underline-offset-2 transition-colors"
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
                    className="w-full bg-white border border-ink/10 text-ink font-cormorant text-base px-4 py-3 focus:outline-none focus:border-teal/50 transition-colors placeholder-ink/30"
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
                    className="w-full bg-white border border-ink/10 text-ink font-cormorant text-base px-4 py-3 focus:outline-none focus:border-teal/50 transition-colors placeholder-ink/30"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="font-mono text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="font-mono text-xs text-ink/75 font-medium tracking-wider block mb-2">SUBJECT</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-white border border-ink/10 text-ink font-cormorant text-base px-4 py-3 focus:outline-none focus:border-teal/50 transition-colors"
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
                    className="w-full bg-white border border-ink/10 text-ink font-cormorant text-base px-4 py-3 focus:outline-none focus:border-teal/50 transition-colors resize-none placeholder-ink/30"
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
                  className="btn-teal-fill w-full py-4 border border-teal text-teal font-jost font-light text-sm tracking-widest uppercase hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
