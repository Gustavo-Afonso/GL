"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Icon } from "./icon";
import { VANTAGENS } from "@/lib/site-data";

export function Vantagens() {
  return (
    <section id="vantagens" className="py-14 md:py-22" aria-labelledby="vantagens-title">
      <div className="mx-auto max-w-6xl px-5">
        <BlurFade inView className="mb-11 max-w-xl">
          <AnimatedGradientText
            colorFrom="#ff5fb8"
            colorTo="#2e9bff"
            speed={0.8}
            className="text-xs font-bold tracking-[0.35em] uppercase"
          >
            Vantagens de ser um parceiro
          </AnimatedGradientText>
          <h2
            id="vantagens-title"
            className="mt-3.5 text-balance font-display text-[clamp(28px,3.6vw,42px)] leading-[1.02] font-extrabold uppercase italic"
          >
            Mais oportunidades <span className="text-brand-blue-bright">para você</span>
          </h2>
        </BlurFade>

        <div className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
          {VANTAGENS.map((item, i) => (
            <BlurFade key={item.title} inView delay={i * 0.06}>
              <div className="flex h-full flex-col gap-3.5 rounded-2xl border border-brand-blue/25 bg-ink-850 px-6 py-6.5 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand-blue-bright/55 hover:shadow-[0_0_30px_rgba(46,155,255,.15)]">
                <span className="flex size-11.5 items-center justify-center rounded-xl border border-brand-blue/25 bg-brand-blue/10 text-brand-blue-bright">
                  <Icon name={item.icon} className="size-5.5" />
                </span>
                <h3 className="text-[14.5px] font-extrabold tracking-[0.03em] uppercase">{item.title}</h3>
                <p className="text-sm leading-relaxed text-brand-muted">{item.desc}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
