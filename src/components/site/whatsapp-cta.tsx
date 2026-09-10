import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./brand-icons";
import { WHATSAPP_URL } from "@/lib/site-data";

export function WhatsappCta({
  children,
  className,
  size = "lg",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "lg" | "md";
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={
        {
          "--bg": "#25d366",
          "--pulse-color": "#25d366",
          "--duration": "2.6s",
          "--distance": "14px",
        } as CSSProperties
      }
      className={cn(
        "group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-(--bg) font-bold text-ink-950 shadow-[0_8px_30px_rgba(37,211,102,.35)] transition-transform duration-200 hover:-translate-y-0.5",
        size === "lg" ? "px-9 py-[18px] text-[17px]" : "px-6 py-3 text-sm",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 animate-pulse rounded-[inherit] bg-inherit"
      />
      <span className="relative z-10 flex items-center gap-2.5">
        <WhatsAppIcon className="size-[1.15em] shrink-0" />
        {children}
      </span>
    </a>
  );
}
