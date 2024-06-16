import {Hero} from "@/components/sections/hero/Hero";
import {Intro} from "@/components/sections/intro/Intro";
import {BeautySection} from "@/components/sections/beauty-section/BeautySection";
import {TreatmentSection} from "@/components/sections/treatment-section/TreatmentSection";
import {BeautyPackages} from "@/components/sections/beauty-packages/BeautyPackages";
import {Testimonials} from "@/components/sections/testemonials/Testimonials";
import {TreatmentEndingSection} from "@/components/sections/treatment-ending-section/TreatmentEndingSection";
import Section from "@/components/core/section-component/SectionComponent";

export default function Home() {
    return (
        <>
            <Section id={"hero"} noSlide>
                <Hero/>
            </Section>
            <Section id={"intro"}>
                <Intro/>
            </Section>
            <Section id={"beauty-section"} noSlide>
                <BeautySection/>
            </Section>
            <Section id={"treatment-section"}>
                <TreatmentSection/>
            </Section>
            {/*<Section id={"fav-services"} noSlide><FavServices/></Section>*/}
            <Section id={"beauty-packages"} noSlide>
                <BeautyPackages/>
            </Section>
            <Section id={"testimonials"}>
                <Testimonials/>
            </Section>
            <Section id={"treatment-ending-section"} noSlide>
                <TreatmentEndingSection/>
            </Section>
        </>
    );
}
