"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Icon, type IconName } from "./icon";

const STAT_CARDS: {
  icon: IconName;
  label: string;
  render: React.ReactNode;
}[] = [
  {
    icon: "users",
    label: "movimentados com jogos de habilidade",
    render: (
      <>
        +<NumberTicker value={7} className="text-brand-blue-bright" /> DÍGITOS
      </>
    ),
  },
  {
    icon: "gamepad",
    label: "ativos na plataforma",
    render: (
      <>
        <NumberTicker value={3} className="text-brand-blue-bright" /> JOGOS
      </>
    ),
  },
  {
    icon: "rocket",
    label: "todos os meses",
    render: "NOVOS JOGOS",
  },
  {
    icon: "shield",
    label: "com suporte total",
    render: "PARCERIA DE CONFIANÇA",
  },
];

export function Stats() {
  return (
    <section aria-label="Números da plataforma" className="py-8">
      <div className="mx-auto max-w-6xl px-5">
        <BlurFade inView>
          <div className="grid grid-cols-2 gap-y-7 rounded-[18px] border border-brand-blue/25 bg-ink-850 px-5 py-10 md:grid-cols-4 md:gap-y-0">
            {STAT_CARDS.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2.5 border-brand-blue-bright/15 px-4 text-center md:border-l md:first:border-l-0"
              >
                <span className="flex size-11 items-center justify-center rounded-full border border-brand-blue/25 bg-brand-blue/10 text-brand-blue-bright">
                  <Icon name={stat.icon} className="size-5" />
                </span>
                <p className="font-display text-[clamp(22px,2.6vw,30px)] font-extrabold text-brand-blue-bright italic [text-shadow:0_0_16px_rgba(0,168,255,.4)] [font-variant-numeric:tabular-nums]">
                  {stat.render}
                </p>
                <p className="max-w-[16ch] text-[13px] text-brand-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
