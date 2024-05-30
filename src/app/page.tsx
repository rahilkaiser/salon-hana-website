import {Hero} from "@/components/sections/hero/Hero";
import {NextUIProvider} from "@nextui-org/react";
import {StickyNavbar} from "@/components/core/navbar/StickyNavbar";
import {Intro} from "@/components/sections/intro/Intro";
import {BeautySection} from "@/components/sections/beauty-section/BeautySection";
import {TreatmentSection} from "@/components/sections/treatment-section/TreatmentSection";

export default function Home() {
    return (
        <NextUIProvider>

            <main>

                <StickyNavbar/>
                <Hero/>
                <Intro/>
                <BeautySection/>
                <TreatmentSection/>
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
