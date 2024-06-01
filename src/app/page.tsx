import {Hero} from "@/components/sections/hero/Hero";
import {NextUIProvider} from "@nextui-org/react";
import {StickyNavbar} from "@/components/core/navbar/StickyNavbar";
import {Intro} from "@/components/sections/intro/Intro";
import {BeautySection} from "@/components/sections/beauty-section/BeautySection";
import {TreatmentSection} from "@/components/sections/treatment-section/TreatmentSection";
import {BeautyPackages} from "@/components/sections/beauty-packages/BeautyPackages";
import SmoothScrollContainer from "@/components/core/smooth-scrollbar-container/SmoothScrollContainer";

export default function Home() {
    return (
        <NextUIProvider>
            <main>
                <StickyNavbar/>
                <SmoothScrollContainer>
                    <section><Hero/></section>
                    <section><Intro/></section>
                    <section><BeautySection/></section>
                    <section><TreatmentSection/></section>
                    <section><BeautyPackages/></section>
                </SmoothScrollContainer>



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
