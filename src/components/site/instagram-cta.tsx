import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { InstagramIcon } from "./brand-icons";
import { INSTAGRAM_URL } from "@/lib/site-data";

export function InstagramCta({
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
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={
        {
          "--pulse-color": "#dd2a7b",
          "--duration": "2.6s",
          "--distance": "14px",
        } as CSSProperties
      }
      className={cn(
        "group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-[linear-gradient(135deg,#f58529_0%,#dd2a7b_50%,#8134af_75%,#515bd4_100%)] font-bold text-white shadow-[0_8px_30px_rgba(221,42,123,.4)] transition-transform duration-200 hover:-translate-y-0.5",
        size === "lg" ? "px-9 py-[18px] text-[17px]" : "px-6 py-3 text-sm",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 animate-pulse rounded-[inherit]"
      />
      <span className="relative z-10 flex items-center gap-2.5">
        <InstagramIcon className="size-[1.1em] shrink-0" />
        {children}
      </span>
    </a>
  );
}
