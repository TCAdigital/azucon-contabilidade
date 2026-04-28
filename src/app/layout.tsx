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
  keywords: "contabilidade, contador, MEI, PJ, imposto de renda, nova granada, abertura de empresa",
  authors: [{ name: "Azucon Contabilidade" }],
  openGraph: {
    title: "Azucon Contabilidade | Soluções Contábeis em Nova Granada",
    description: "Soluções contábeis inteligentes e personalizadas para o seu negócio crescer com segurança fiscal.",
    url: "https://azucon.com.br",
    siteName: "Azucon Contabilidade",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Azucon Contabilidade - Soluções para o Futuro",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azucon Contabilidade | Soluções Contábeis em Nova Granada",
    description: "Soluções contábeis inteligentes e personalizadas para o seu negócio crescer com segurança fiscal.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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

