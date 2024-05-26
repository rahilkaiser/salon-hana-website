import {Hero} from "@/components/sections/hero/Hero";
import {NextUIProvider} from "@nextui-org/react";
import {StickyNavbar} from "@/components/core/navbar/StickyNavbar";
import {Intro} from "@/components/sections/intro/Intro";
import {BeautySection} from "@/components/sections/beauty-section/BeautySection";

export default function Home() {
    return (
        <NextUIProvider>

            <main className="relative w-full h-full">

                <StickyNavbar/>
                <Hero/>
                <Intro/>
                <BeautySection/>
                {/*<Beauty Programme für Gesicht und Körper mit videopopup/>*/}
                {/*<Behandlungen/>*/}
                {/*<Kundenmeinungen/>*/}
                {/*<Impressionen/>*/}
                {/*<Produkte/>*/}
                {/*<Aktuelles (Blog)/>*/}
                {/*Überzeugungstext*/}
                {/*Parallax Gesichtsbehandlung*/}
                {/*Breadcrums*/}
                {/*Kontakt mit Google Maps*/}

            </main>
        </NextUIProvider>
    );
}
