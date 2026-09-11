import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { TickerStrip } from "@/components/site/ticker-strip";
import { Games } from "@/components/site/games";
import { Stats } from "@/components/site/stats";
import { Vantagens } from "@/components/site/vantagens";
import { ComoFunciona } from "@/components/site/como-funciona";
import { Faq } from "@/components/site/faq";
import { CtaFinal } from "@/components/site/cta-final";
import { Footer } from "@/components/site/footer";
import { FloatingInstagram } from "@/components/site/floating-instagram";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TickerStrip />
        <Games />
        <Stats />
        <Vantagens />
        <ComoFunciona />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <FloatingInstagram />
    </>
  );
}
