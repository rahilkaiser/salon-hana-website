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
import Section from "@/components/core/section-component/SectionComponent";
import {FavServices} from "@/components/sections/fav-services/FavServices";


export default function Home() {
    return (
        <NextUIProvider>


            <main className="font-serif">
                <header className="sticky top-0 z-50"><StickyNavbar/></header>

                <SmoothScrollContainer>
                    <Section id={"hero"} noSlide><Hero/></Section>
                    <Section id={"intro"}><Intro/></Section>
                    <Section id={"beauty-section"} noSlide><BeautySection/></Section>
                    <Section id={"treatment-section"}><TreatmentSection/></Section>
                    <Section id={"fav-services"} noSlide><FavServices/></Section>

                    <Section id={"beauty-packages"} noSlide><BeautyPackages/></Section>
                    <Section id={"testimonials"}><Testimonials/></Section>
                    <Section id={"treatment-ending-section"} noSlide><TreatmentEndingSection/></Section>
                    <Section id={"footer"} noSlide><Footer/></Section>
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
