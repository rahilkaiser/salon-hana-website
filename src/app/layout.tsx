import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";
import {StickyNavbar} from "@/components/core/navbar/StickyNavbar";
import SmoothScrollContainer from "@/components/core/smooth-scrollbar-container/SmoothScrollContainer";
import Section from "@/components/core/section-component/SectionComponent";
import {Footer} from "@/components/sections/footer/Footer";
import {CartInfo} from "@/components/core/cart-info/CartInfo";

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
    <html lang="de">
      <body className={inter.className}>
      <NextUIProvider>
        <header className="sticky top-0 z-20"><StickyNavbar/></header>
        <main className="font-serif">
          <SmoothScrollContainer>
            {children}
          </SmoothScrollContainer>
        </main>
        <footer>
          <Section id={"footer"} noSlide><Footer/></Section>
        </footer>
      </NextUIProvider>
      </body>
    </html>
  );
}
