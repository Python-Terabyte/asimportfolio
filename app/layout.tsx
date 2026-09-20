import type { Metadata } from "next";
import { Sora, Manrope, Space_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Asim Saleem, ACMA — CEO & Founder",
  description:
    "CEO & Director of Quasar Technologies and Manager, External Execution at a fintech platform active in 190+ countries. ACMA-qualified operator building businesses, products, and financial technology.",
  keywords:
    "Muhammad Asim Saleem, ACMA, CEO, Founder, Quasar Technologies, Fintech, BI Architecture, Virtual CFO, Business Analyst, Product Manager, Ledgerly, BrandFox",
  authors: [{ name: "Muhammad Asim Saleem" }],
  openGraph: {
    title: "Muhammad Asim Saleem, ACMA — CEO & Founder",
    description:
      "I build businesses, products, and financial technology that turn complex problems into simple systems.",
    type: "website",
    url: "https://asimsaleem.online",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Asim Saleem, ACMA — CEO & Founder",
    description:
      "I build businesses, products, and financial technology that turn complex problems into simple systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable} ${spaceMono.variable}`}>
      <body className="antialiased bg-bg0 text-ivory font-manrope" style={{ fontOpticalSizing: "auto" }}>
        {children}
      </body>
    </html>
  );
}
