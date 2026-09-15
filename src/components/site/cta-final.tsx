"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { InstagramCta } from "./instagram-cta";
import { PHONE_CHECKLIST } from "@/lib/site-data";

export function CtaFinal() {
  return (
    <section className="py-14 md:py-22" aria-labelledby="cta-final-title">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:gap-14 md:grid-cols-[1.05fr_.95fr]">
        <div className="flex flex-col items-start gap-4.5">
          <BlurFade inView>
            <p className="text-xs font-bold tracking-[0.35em] text-brand-gold uppercase">Equipe GL</p>
          </BlurFade>
          <BlurFade inView delay={0.05}>
            <h2
              id="cta-final-title"
              className="text-balance font-display text-[clamp(30px,4vw,46px)] leading-[1.02] font-extrabold uppercase italic"
            >
              Faça parte <span className="text-brand-blue-bright">da Equipe GL</span>
            </h2>
          </BlurFade>
          <BlurFade inView delay={0.1}>
            <p className="max-w-[52ch] text-base text-brand-muted">
              Conecte-se a um grupo de criadores que já está fazendo a diferença no mercado de jogos
              de habilidade. Aqui você tem estrutura, suporte e oportunidades reais de crescimento.
            </p>
          </BlurFade>
          <BlurFade inView delay={0.15}>
            <div>
              <InstagramCta>QUERO ENTRAR NO GRUPO →</InstagramCta>
              <p className="mt-3 text-[13px] text-brand-dim">Você será direcionado para o Instagram</p>
            </div>
          </BlurFade>
          <BlurFade inView delay={0.2}>
            <p className="mt-2.5 rotate-[-3deg] font-script text-[clamp(18px,2.4vw,26px)] leading-[1.15] font-bold text-[#7ec4ff] [text-shadow:0_0_20px_rgba(46,155,255,.45)]">
              Criadores de hoje,
              <br />
              resultados de amanhã
            </p>
          </BlurFade>
        </div>

        <BlurFade inView delay={0.1} className="flex justify-center max-md:order-first">
          <div className="w-[min(300px,88%)] rounded-[38px] border border-brand-blue-bright/30 bg-[linear-gradient(160deg,#141c33,#070a14)] p-4 shadow-[0_0_0_1px_rgba(46,155,255,.1),0_30px_70px_rgba(0,0,0,.55),0_0_50px_rgba(46,155,255,.18)]">
            <div className="flex flex-col gap-4 rounded-[26px] border border-brand-blue/18 bg-ink-950 px-5 py-6.5">
              <Image src="/logo.png" alt="Equipe GL" width={52} height={52} className="mx-auto size-13 object-contain" />

              <ul className="mt-1 flex flex-col gap-2.5">
                {PHONE_CHECKLIST.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[13px] font-semibold text-brand-muted">
                    <Check className="size-4 shrink-0 text-brand-blue-bright" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
