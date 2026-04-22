import { NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-teal-dark border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
          <div>
            <div className="font-jost font-light text-2xl text-white tracking-[0.15em] uppercase mb-1">
              MAS<span className="text-teal-light">.</span>
            </div>
            <p className="font-cormorant text-base text-white/40">
              BI Architect · Fintech Strategist · ACMA
            </p>
          </div>
          <nav>
            <ul className="flex flex-wrap gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-jost font-light text-xs text-white/40 hover:text-teal-light transition-colors tracking-widest uppercase"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="font-mono text-xs text-white/25">
            © 2026 Muhammad Asim Saleem · ACMA · BI Architect · Available Globally
          </p>
          <p className="font-mono text-xs text-white/20">
            Islamabad, Pakistan · Open to Remote & Relocation
          </p>
        </div>
      </div>
    </footer>
  );
}
