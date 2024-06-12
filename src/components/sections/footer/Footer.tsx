import {Divider} from "@nextui-org/react";
import {BreadcrumbsSection} from "@/components/sections/footer/components/BreadcrumbsSection";
import {Hero} from "@/components/sections/hero/Hero";
import {Intro} from "@/components/sections/intro/Intro";
import {BeautySection} from "@/components/sections/beauty-section/BeautySection";
import {TreatmentSection} from "@/components/sections/treatment-section/TreatmentSection";
import {BeautyPackages} from "@/components/sections/beauty-packages/BeautyPackages";
import {Testimonials} from "@/components/sections/testemonials/Testimonials";
import {TreatmentEndingSection} from "@/components/sections/treatment-ending-section/TreatmentEndingSection";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
    return (
        <div className="mx-auto max-w-screen-lg bg-white flex flex-col justify-center  p-8 space-y-8 mt-4">
            <div className="border-t-3 border-gray-200 "></div>
            {/*<BreadcrumbsSection></BreadcrumbsSection>*/}
            <div className="flex-row justify-space-between">
                <a className="cursor-pointer hover:text-primary font-semibold pr-4 text-sm uppercase">Über uns</a>
                <a className="cursor-pointer hover:text-primary font-semibold pr-4 text-sm uppercase">Dienstleistungen</a>
                <a className="cursor-pointer hover:text-primary font-semibold pr-4 text-sm uppercase">Beautypackete</a>
                <a className="cursor-pointer hover:text-primary font-semibold pr-4 text-sm uppercase">Kontakt</a>
                <a className="cursor-pointer hover:text-primary font-semibold pr-4 text-sm uppercase">Impressum</a>
                <a className="cursor-pointer hover:text-primary font-semibold pr-4 text-sm uppercase">Datenschutz</a>
                <a className="cursor-pointer hover:text-primary font-semibold pr-4 text-sm uppercase">Cookie-Einstellungen</a>
            </div>
            <div></div>
            <div className="flex flex-row items-start justify-between w-full">
                <div className="flex flex-col">
                    <div className="font-semibold">Salon Hana</div>
                    <div className="py-0.5">Jungstraße 10</div>
                    <div className="py-0.5">10247 Berlin</div>
                    <div className="py-0.5">Tel. 0160 7785184</div>
                </div>
                <div className="flex flex-col">
                    <div className="font-semibold">Öffnungszeiten</div>
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <div className="py-0.5">Montag:</div>
                            <div className="py-0.5">Dienstag:</div>
                            <div className="py-0.5">Mittwoch:</div>
                            <div className="py-0.5">Donnerstag:</div>
                            <div className="py-0.5">Freitag:</div>
                        </div>
                        <div className="flex flex-col px-2">
                            <div className="py-0.5">10:00 - 15:00</div>
                            <div className="py-0.5">10:00 - 15:00</div>
                            <div className="py-0.5">10:00 - 15:00</div>
                            <div className="py-0.5">10:00 - 15:00</div>
                            <div className="py-0.5">10:00 - 15:00</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-start">
                    <div className="text-lg font-serif">
                        Folgen Sie uns
                    </div>
                    <div className="py-4">
                        <FontAwesomeIcon className="hover:text-primary cursor-pointer" icon={faInstagram} size="2x" />
                    </div>

                </div>
            </div>

            <div className="text-primary cursor-pointer">
                <FontAwesomeIcon icon={faArrowRight} size="1x" className="text-lg" /> <span className="text-sm">Nachricht schreiben</span>
            </div>
        </div>

    );
};

// <section><Hero/></section>
// <section><Intro/></section>
// <section><BeautySection/></section>
// <section><TreatmentSection/></section>
// <section><BeautyPackages/></section>
// <section><Testimonials/></section>
// <section><TreatmentEndingSection/></section>
// {/*<section><Testimonials/></section>*/
// }
// <section><Footer/></section>
