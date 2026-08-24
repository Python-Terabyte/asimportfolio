import { NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-forest border-t border-cream/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-jost font-medium text-2xl text-cream tracking-[0.1em] mb-1">
              <span className="text-amber text-base">&#10022;</span>
              MAS<span className="text-amber">.</span>
            </div>
            <p className="font-cormorant text-base text-cream/75">
              BI Architect · Fintech Strategist · ACMA
            </p>
          </div>
          <nav>
            <ul className="flex flex-wrap gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-jost font-medium text-xs text-cream/75 hover:text-amber transition-colors tracking-widest uppercase"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="font-mono text-xs text-cream/65">
            © 2026 Muhammad Asim Saleem · ACMA · BI Architect · Available Globally
          </p>
          <p className="font-mono text-xs text-cream/60">
            Islamabad, Pakistan · Open to Remote & Relocation
          </p>
        </div>
      </div>
    </footer>
  );
}
