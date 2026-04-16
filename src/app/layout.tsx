import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Azucon Contabilidade | Soluções Contábeis em Nova Granada",
  description: "Azucon Contabilidade - Soluções contábeis personalizadas em Nova Granada. Abertura de empresa, MEI, Imposto de Renda, Folha de Pagamento.",
  keywords: "contabilidade, contador, MEI, PJ, imposto de renda, nova granada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${outfit.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}

