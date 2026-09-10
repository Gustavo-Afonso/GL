import { Marquee } from "@/components/ui/marquee";
import { MARQUEE_ITEMS } from "@/lib/site-data";

export function TickerStrip() {
  return (
    <div className="relative border-y border-brand-blue/15 bg-ink-900/60 py-3.5">
      <Marquee pauseOnHover className="[--duration:32s] [--gap:2.5rem]">
        {MARQUEE_ITEMS.map((item) => (
          <span key={item} className="flex items-center gap-2.5 text-xs font-bold tracking-[0.18em] text-brand-muted">
            {item}
            <span aria-hidden="true" className="text-brand-blue-bright">
              ✦
            </span>
          </span>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
    </div>
  );
}
