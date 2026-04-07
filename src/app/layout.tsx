import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

const lato = Lato({ weight: ["400", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XandZap | Desenvolvedor Frontend",
  description: "Portfólio de Alexandre Roberto — Desenvolvedor Frontend especializado em React, TypeScript e Next.js, criando experiências digitais modernas e de alto desempenho.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={lato.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
