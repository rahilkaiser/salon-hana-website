import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salon Hana - Beauty-Dienstleistungen in Berlin",
  description: "Besuchen Sie Salon Hana in Berlin für Sugaring, Waxing, Diodenlaser-Haarentfernung, Wimpernlifting, Browlifting, kosmetische Zahnaufhellung und mehr.",
  keywords: [
    "Salon Hana",
    "Schönheitssalon Berlin",
    "Sugaring Damen",
    "Sugaring Herren",
    "Waxing Gesicht",
    "dauerhafte Haarentfernung",
    "Diodenlaser",
    "Wimpernlifting",
    "Browlifting",
    "kosmetische Zahnaufhellung",
    "Gesichtsbehandlungen",
    "apparative Kosmetik",
    "Wimpernlifting + Browlifting",
    "Henna Brows",
    "Sugaring Arme",
    "Sugaring Beine",
    "Sugaring Intim",
    "Beauty Dienstleistungen Berlin",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.salonhana.de",
    title: "Salon Hana - Beauty-Dienstleistungen in Berlin",
    description: "Erleben Sie die vielfältigen Beauty-Dienstleistungen bei Salon Hana in Berlin. Von Sugaring und Waxing bis zu dauerhafter Haarentfernung und Wimpernlifting bieten wir alles für Ihre Schönheit.",
    images: [
      {
        url: "https://www.salonhana.de/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Salon Hana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@IhrTwitterHandle",
    title: "Salon Hana - Beauty-Dienstleistungen in Berlin",
    description: "Besuchen Sie Salon Hana in Berlin für erstklassige Beauty-Dienstleistungen wie Sugaring, Waxing, Wimpernlifting, und mehr.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
