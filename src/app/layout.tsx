import type { Metadata } from "next";
import { Saira_Condensed, Inter, Caveat } from "next/font/google";
import "./globals.css";

const sairaCondensed = Saira_Condensed({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const siteUrl = "https://equipegl.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Equipe GL — Seja um Parceiro",
  description:
    "Faça parte de um grupo de criadores que ganha junto. Jogos de qualidade, suporte dedicado e as melhores oportunidades do mercado.",
  openGraph: {
    title: "Equipe GL — Seja um Parceiro",
    description:
      "Faça parte de um grupo de criadores que ganha junto. Jogos de qualidade, suporte dedicado e as melhores oportunidades do mercado.",
    url: siteUrl,
    siteName: "Equipe GL",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Equipe GL — Seja um Parceiro",
    description:
      "Faça parte de um grupo de criadores que ganha junto. Jogos de qualidade, suporte dedicado e as melhores oportunidades do mercado.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${sairaCondensed.variable} ${inter.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
