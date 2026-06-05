import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Inter } from "next/font/google";
import "./globals.css";

// Fuente para títulos principales - transmite elegancia y lujo
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

// Fuente para navegación y subtítulos - moderna y profesional
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

// Fuente para párrafos - máxima legibilidad
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Visual Elyon | Diseño, Branding y Soluciones Digitales",
  description: "Impulsamos tu marca con diseño, creatividad y tecnología. Branding, diseño gráfico, marketing digital y desarrollo web profesional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0c1f2c] text-[#f4f4f2]">
        {children}
      </body>
    </html>
  );
}