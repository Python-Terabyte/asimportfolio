import type { Metadata } from "next";
import { Jost, Cormorant_Garamond, DM_Mono } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Asim Saleem — BI Architect & Fintech Consultant",
  description:
    "ACMA-qualified BI Architect and Fintech Strategist. Built financial intelligence systems serving 200K+ businesses across 190+ countries. Available for consulting, BI architecture, fintech integration, and Virtual CFO services globally.",
  keywords:
    "BI Architect, Business Intelligence, Fintech Consultant, Virtual CFO, Data Pipelines, Power BI, QuickBooks Integration, ACMA, Financial Analytics, Muhammad Asim Saleem",
  authors: [{ name: "Muhammad Asim Saleem" }],
  openGraph: {
    title: "Muhammad Asim Saleem — BI Architect & Fintech Consultant",
    description:
      "ACMA-qualified BI Architect and Fintech Strategist. Built financial intelligence systems serving 200K+ businesses across 190+ countries.",
    type: "website",
    url: "https://muhammadasimsaleem.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Asim Saleem — BI Architect & Fintech Consultant",
    description:
      "ACMA-qualified BI Architect and Fintech Strategist. Built financial intelligence systems serving 200K+ businesses across 190+ countries.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} ${cormorant.variable} ${dmMono.variable}`}>
      <body className="antialiased bg-cream text-ink font-cormorant">
        {children}
      </body>
    </html>
  );
}
