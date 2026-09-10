import { CrownIcon, InstagramIcon } from "./brand-icons";

export function Footer() {
  return (
    <footer className="border-t border-brand-blue/20 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4.5 px-5 max-sm:flex-col max-sm:text-center">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-full border border-brand-blue-bright/45 bg-[radial-gradient(circle_at_32%_28%,#16223f,#060a16)]">
            <CrownIcon className="size-[22px] text-brand-blue-bright" />
          </span>
          <span className="text-[13px] leading-tight">
            <strong className="block font-display text-base font-extrabold italic">EQUIPE GL</strong>
            <span className="text-brand-dim">IDL DIGITAL</span>
          </span>
        </div>

        <p className="text-center text-[13px] text-brand-dim">© 2026 IDL Digital. Todos os direitos reservados.</p>

        <div className="flex flex-col items-end gap-2 max-sm:items-center">
          <span className="text-[11px] tracking-[0.2em] text-brand-dim uppercase">Segue a gente</span>
          <a
            href="https://instagram.com/idldigital.site"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[13.5px] font-semibold"
          >
            <InstagramIcon className="size-[18px] text-brand-blue-bright" />
            @idldigital.site
          </a>
        </div>
      </div>
    </footer>
  );
}
