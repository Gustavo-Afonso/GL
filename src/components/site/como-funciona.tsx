"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { STEPS } from "@/lib/site-data";

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-14 md:py-22" aria-labelledby="como-title">
      <div className="mx-auto max-w-6xl px-5">
        <BlurFade inView className="mx-auto mb-14 max-w-xl text-center">
          <p className="text-xs font-bold tracking-[0.35em] text-brand-gold uppercase">Passo a passo</p>
          <h2
            id="como-title"
            className="mt-3.5 text-balance font-display text-[clamp(28px,3.6vw,42px)] leading-[1.02] font-extrabold uppercase italic"
          >
            Como <span className="text-brand-blue-bright">funciona</span>
          </h2>
        </BlurFade>

        <div className="relative grid gap-8 md:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute inset-x-[12.5%] top-8 hidden h-0.5 bg-gradient-to-r from-transparent via-brand-blue to-transparent md:block"
          />
          {STEPS.map((step, i) => (
            <BlurFade key={step.number} inView delay={i * 0.08}>
              <div className="flex flex-col items-center gap-3.5 px-4.5 text-center">
                <span className="relative z-[2] flex size-16 items-center justify-center rounded-full bg-gradient-to-b from-brand-blue-bright to-brand-blue-deep font-display text-[34px] font-extrabold text-ink-950 italic shadow-[0_0_0_6px_var(--color-ink-950),0_0_24px_rgba(46,155,255,.5)]">
                  {step.number}
                </span>
                <h3 className="text-[15px] font-bold">{step.title}</h3>
                <p className="max-w-[22ch] text-[13.5px] text-brand-muted">{step.desc}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
