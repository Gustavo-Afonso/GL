"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { GamePhoto } from "./game-photo";
import { GAMES } from "@/lib/site-data";

export function Games() {
  return (
    <section id="jogos" className="py-14 md:py-22" aria-labelledby="jogos-title">
      <div className="mx-auto max-w-6xl px-5">
        <BlurFade inView className="mb-11 max-w-xl">
          <p className="text-xs font-bold tracking-[0.35em] text-brand-gold uppercase">Catálogo</p>
          <h2
            id="jogos-title"
            className="mt-3.5 text-balance font-display text-[clamp(28px,3.6vw,42px)] leading-[1.02] font-extrabold uppercase italic"
          >
            Jogos para <span className="text-brand-blue-bright">divulgar</span>
          </h2>
          <p className="mt-3.5 max-w-[60ch] text-[15.5px] text-brand-muted">
            Três jogos de habilidade prontos para o seu público, com novos lançamentos todos os meses.
          </p>
        </BlurFade>

        <div className="grid gap-6 md:grid-cols-3">
          {GAMES.map((game, i) => (
            <BlurFade key={game.id} inView delay={i * 0.08}>
              <article className="group relative aspect-[4/5] overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1">
                <BorderBeam
                  size={90}
                  duration={7}
                  delay={i * 1.5}
                  colorFrom="#2e9bff"
                  colorTo="#00a8ff"
                />
                <GamePhoto variant={game.variant} alt={`${game.name} — ${game.category}`} priority={i === 0} />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/5 transition-colors duration-300 group-hover:from-ink-950/95"
                />

                <div className="absolute inset-0 flex flex-col justify-end gap-3 px-6 pb-6">
                  <h3 className="font-display text-[26px] font-extrabold tracking-wide text-white italic">
                    {game.name}
                  </h3>
                  <p className="-mt-2.5 text-sm text-brand-muted">{game.desc}</p>
                  <a
                    href="#faq"
                    className="mt-1 inline-flex w-fit items-center gap-2 rounded-full border border-brand-blue-bright/55 bg-ink-950/40 px-5 py-[11px] text-sm font-bold text-brand-blue-bright backdrop-blur-sm transition-[background,box-shadow] hover:bg-brand-blue/25 hover:shadow-[0_0_22px_rgba(46,155,255,.35)]"
                  >
                    JOGAR AGORA →
                  </a>
                </div>
              </article>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
