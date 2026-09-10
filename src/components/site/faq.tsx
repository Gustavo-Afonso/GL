"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/ui/blur-fade";
import { FAQ_ITEMS } from "@/lib/site-data";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-14 md:py-22" aria-labelledby="faq-title">
      <div className="mx-auto max-w-6xl px-5">
        <BlurFade inView className="mx-auto mb-11 max-w-xl text-center">
          <p className="text-xs font-bold tracking-[0.35em] text-brand-gold uppercase">Dúvidas frequentes</p>
          <h2
            id="faq-title"
            className="mt-3.5 text-balance font-display text-[clamp(28px,3.6vw,42px)] leading-[1.02] font-extrabold uppercase italic"
          >
            Perguntas e <span className="text-brand-blue-bright">respostas</span>
          </h2>
        </BlurFade>

        <div className="mx-auto flex max-w-[760px] flex-col gap-3.5">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <BlurFade key={item.question} inView delay={i * 0.05}>
                <div className="overflow-hidden rounded-[14px] border border-brand-blue/25 bg-ink-850">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5.5 py-5 text-left text-[15.5px] font-bold"
                  >
                    {item.question}
                    <ChevronDown
                      className={cn(
                        "size-4.5 shrink-0 text-brand-blue-bright transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5.5 pb-5 text-[14.5px] leading-relaxed text-brand-muted">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
