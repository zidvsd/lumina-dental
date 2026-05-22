import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumina | Dental Excellence & Hospitality",
  description:
    "Experience a sanctuary of wellness where advanced technology meets hospitality-driven serenity. Your journey to a radiant smile starts in silence.",
  keywords: [
    "Lumina Dental",
    "cosmetic dentistry",
    "Invisalign",
    "dental whitening",
    "luxury dental clinic",
    "London dentist",
  ],
  openGraph: {
    title: "Lumina | Dental Excellence & Hospitality",
    description:
      "Experience a sanctuary of wellness where advanced technology meets hospitality-driven serenity.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
