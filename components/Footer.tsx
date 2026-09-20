import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-10 px-5 md:px-7 bg-bg0 border-t border-ivory/[0.07]">
      <div className="max-w-[1280px] mx-auto flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/asim.png"
            alt="Asim"
            width={38}
            height={38}
            className="w-[38px] h-[38px] rounded-full object-cover object-top border-[1.5px] border-gold"
          />
          <div className="font-mono text-[11px] text-ivory-ghost">
            © 2026 Muhammad Asim Saleem · ACMA · CEO &amp; Director, Quasar Technologies
          </div>
        </div>
        <div className="font-mono text-[11px] text-ivory-ghost">Islamabad, Pakistan · Remote &amp; Relocation</div>
      </div>
    </footer>
  );
}
