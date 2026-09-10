import { WhatsAppIcon } from "./brand-icons";
import { WHATSAPP_URL } from "@/lib/site-data";

export function FloatingWhatsapp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-4.5 bottom-4.5 z-90 flex size-14 items-center justify-center rounded-full bg-gradient-to-b from-brand-whatsapp-bright to-brand-whatsapp shadow-[0_10px_30px_rgba(37,211,102,.45)] sm:hidden"
    >
      <WhatsAppIcon className="size-6.5 text-ink-950" />
    </a>
  );
}
