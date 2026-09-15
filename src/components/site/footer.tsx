import Image from "next/image";
import { InstagramIcon } from "./brand-icons";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-brand-blue/20 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4.5 px-5 max-sm:flex-col max-sm:text-center">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Equipe GL" width={36} height={36} className="size-9 object-contain" />
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
