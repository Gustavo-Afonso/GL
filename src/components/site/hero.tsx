"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Particles } from "@/components/ui/particles";
import { CrownIcon } from "./brand-icons";
import { Icon } from "./icon";
import { InstagramCta } from "./instagram-cta";
import { MICRO_BENEFITS } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-12 md:pt-[140px] md:pb-20" aria-labelledby="hero-title">
      <Particles
        className="absolute inset-0"
        quantity={70}
        color="#2e9bff"
        ease={60}
        size={0.5}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 md:gap-14 md:grid-cols-[1.05fr_.95fr]">
        <div className="flex flex-col items-start gap-4.5">
          <BlurFade inView>
            <p className="text-xs font-bold tracking-[0.35em] text-brand-gold uppercase">Equipe GL</p>
          </BlurFade>

          <BlurFade inView delay={0.05}>
            <h1
              id="hero-title"
              className="text-balance font-display text-[clamp(38px,5.2vw,64px)] leading-[0.98] font-extrabold tracking-wide uppercase italic"
            >
              Seja um{" "}
              <span className="text-brand-blue-bright [text-shadow:0_0_18px_rgba(0,168,255,.55),0_0_42px_rgba(46,155,255,.35)]">
                parceiro
              </span>{" "}
              da{" "}
              <span className="text-brand-blue-bright [text-shadow:0_0_18px_rgba(0,168,255,.55),0_0_42px_rgba(46,155,255,.35)]">
                Equipe GL
              </span>
            </h1>
          </BlurFade>

          <BlurFade inView delay={0.1}>
            <p className="max-w-[52ch] text-[17px] text-brand-muted">
              Faça parte de um grupo de criadores que ganha junto. Jogos de qualidade, suporte
              dedicado e as melhores oportunidades do mercado.
            </p>
          </BlurFade>

          <BlurFade inView delay={0.15}>
            <ul className="flex flex-wrap gap-6 pt-1.5">
              {MICRO_BENEFITS.map((item) => (
                <li key={item.label} className="flex items-center gap-2.5 text-sm font-semibold text-brand-muted">
                  <span className="flex size-8.5 shrink-0 items-center justify-center rounded-full border border-brand-blue/25 bg-brand-blue/10 text-brand-blue-bright">
                    <Icon name={item.icon} className="size-4" />
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </BlurFade>

          <BlurFade inView delay={0.2}>
            <div className="pt-2">
              <InstagramCta>QUERO FAZER PARTE AGORA →</InstagramCta>
              <p className="mt-3 text-[13px] text-brand-dim">Você será direcionado para o Instagram</p>
            </div>
          </BlurFade>
        </div>

        <BlurFade inView delay={0.1} className="relative flex min-h-[360px] items-center justify-center">
          <div
            aria-hidden="true"
            className="absolute aspect-square w-[min(480px,92%)] animate-halo-breathe rounded-full bg-[radial-gradient(circle,rgba(46,155,255,.38),rgba(46,155,255,.08)_55%,transparent_72%)] blur-[4px]"
          />
          <div
            role="img"
            aria-label="Emblema Equipe GL, coroa dourada sobre brasão azul"
            className="relative z-10 flex aspect-square w-[min(360px,78%)] items-center justify-center rounded-full border border-brand-blue-bright/40 bg-[radial-gradient(circle_at_34%_28%,#182543,#050810_72%)] shadow-[0_0_0_1px_rgba(46,155,255,.15),0_0_60px_rgba(46,155,255,.35),inset_0_0_40px_rgba(0,0,0,.6)] before:absolute before:inset-3.5 before:rounded-full before:border before:border-brand-blue-bright/28 before:content-['']"
          >
            <div className="flex flex-col items-center gap-1.5 text-center">
              <CrownIcon className="size-16 text-brand-blue-bright drop-shadow-[0_0_12px_rgba(0,168,255,.65)]" />
              <p className="font-display leading-[0.85] font-extrabold italic">
                <span className="block text-[34px] tracking-wide text-white">EQUIPE</span>
                <span className="block text-[52px] text-brand-blue-bright [text-shadow:0_0_22px_rgba(0,168,255,.7)]">
                  GL
                </span>
              </p>
              <span className="mt-1 h-px w-9 bg-brand-blue-bright/50" />
            </div>
          </div>
          <p className="absolute right-[2%] bottom-[2%] rotate-[-6deg] text-right font-script text-[clamp(18px,2.4vw,26px)] leading-[1.15] font-bold text-[#7ec4ff] [text-shadow:0_0_20px_rgba(46,155,255,.45)] max-md:static max-md:mt-2 max-md:rotate-[-3deg] max-md:text-left">
            Juntos
            <br />
            mais longe
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
