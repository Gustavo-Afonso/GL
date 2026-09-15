"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { InstagramIcon } from "./brand-icons";
import { NAV_LINKS, INSTAGRAM_URL } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.href)).filter(
      (el): el is HTMLElement => el !== null
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-100 flex h-[76px] items-center border-b border-brand-blue/15 bg-ink-950/70 backdrop-blur-md transition-shadow",
        scrolled && "shadow-[0_8px_30px_rgba(0,0,0,.35)]"
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-5">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="Equipe GL, início">
          <Image src="/logo.png" alt="Equipe GL" width={44} height={44} className="size-11 object-contain" priority />
        </a>

        <nav
          id="main-nav"
          className={cn(
            "max-md:fixed max-md:inset-x-0 max-md:top-[76px] max-md:max-h-0 max-md:overflow-hidden max-md:border-b max-md:border-brand-blue/25 max-md:bg-ink-950 max-md:transition-[max-height] max-md:duration-300",
            open && "max-md:max-h-[420px]"
          )}
          aria-label="Navegação principal"
        >
          <ul className="flex items-center gap-8 max-md:flex-col max-md:items-start max-md:gap-0 max-md:px-5 max-md:pt-2 max-md:pb-5">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="max-md:w-full">
                <a
                  href={`#${link.href}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "relative block py-1.5 text-sm font-semibold text-brand-muted transition-colors hover:text-white max-md:w-full max-md:border-b max-md:border-white/5 max-md:py-3.5",
                    "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-brand-blue after:to-brand-blue-bright after:shadow-[0_0_8px_rgba(0,168,255,.7)] after:transition-transform after:duration-200 max-md:after:hidden",
                    active === link.href && "text-white after:scale-x-100"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-brand-blue-bright to-brand-blue-deep px-[22px] py-3 text-sm font-bold text-ink-950 shadow-[0_4px_20px_rgba(46,155,255,.4)] transition-transform hover:-translate-y-0.5 max-md:hidden"
        >
          <InstagramIcon className="size-[1.1em]" />
          FAZER PARTE
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex size-[42px] items-center justify-center rounded-[10px] border border-brand-blue/25 text-white md:hidden"
        >
          {open ? <X className="size-[22px]" /> : <Menu className="size-[22px]" />}
        </button>
      </div>
    </header>
  );
}
