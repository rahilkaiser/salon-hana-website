import {Hero} from "@/components/sections/hero/Hero";
import {NextUIProvider} from "@nextui-org/react";
import {StickyNavbar} from "@/components/core/navbar/StickyNavbar";
import {Intro} from "@/components/sections/intro/Intro";
import {BeautySection} from "@/components/sections/beauty-section/BeautySection";
import {TreatmentSection} from "@/components/sections/treatment-section/TreatmentSection";
import {BeautyPackages} from "@/components/sections/beauty-packages/BeautyPackages";
import SmoothScrollContainer from "@/components/core/smooth-scrollbar-container/SmoothScrollContainer";
import {Testimonials} from "@/components/sections/testemonials/Testimonials";
import {TreatmentEndingSection} from "@/components/sections/treatment-ending-section/TreatmentEndingSection";
import {Footer} from "@/components/sections/footer/Footer";


export default function Home() {
    return (
        <NextUIProvider>


            <main className="font-serif">
                <header><StickyNavbar/></header>


                <SmoothScrollContainer>
                    <section><Hero/></section>
                    <section><Intro/></section>
                    <section><BeautySection/></section>
                    <section><TreatmentSection/></section>
                    <section><BeautyPackages/></section>
                    <section><Testimonials/></section>
                    <section><TreatmentEndingSection/></section>
                    {/*<section><Testimonials/></section>*/}
                    <section><Footer/></section>
                </SmoothScrollContainer>


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
