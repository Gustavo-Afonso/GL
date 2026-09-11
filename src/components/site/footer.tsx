import { CrownIcon, InstagramIcon } from "./brand-icons";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-brand-blue/20 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4.5 px-5 max-sm:flex-col max-sm:text-center">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-full border border-brand-blue-bright/45 bg-[radial-gradient(circle_at_32%_28%,#16223f,#060a16)]">
            <CrownIcon className="size-[22px] text-brand-blue-bright" />
          </span>
          <strong className="font-display text-base font-extrabold italic">EQUIPE GL</strong>
        </div>

        <p className="text-center text-[13px] text-brand-dim">© 2026 Equipe GL. Todos os direitos reservados.</p>

        <div className="flex flex-col items-end gap-2 max-sm:items-center">
          <span className="text-[11px] tracking-[0.2em] text-brand-dim uppercase">Segue a gente</span>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[13.5px] font-semibold"
          >
            <InstagramIcon className="size-[18px] text-brand-blue-bright" />
            {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </footer>
  );
}
