import SectionTitle from "@/components/core/section-title/SectionTitle";
import React from "react";
import ServiceCard from "@/components/core/service-card/ServiceCard";

export const BeautyPackages = () => {

    const services = [
        {
            id: 1,
            category: "Augenbehandlungen",
            name: "Wimpernlifting + Browlifting",
            duration: "1 hr.",
            price: "90,00 €",
            imageUrl: "/images/sugaring.jpg"
        },
        {
            id: 2,
            category: "Augenbehandlungen",
            name: "Wimpernlifting + Browlifting inkl. färben",
            duration: "1 hr.",
            price: "100,00 €",
            imageUrl: "/images/sugaring.jpg"
        },
        {
            id: 3,
            category: "Augenbehandlungen",
            name: "Wimpernlifting + Browlifting inkl. färben",
            duration: "1 hr.",
            price: "100,00 €",
            imageUrl: "/images/sugaring.jpg"
        },
    ];


    return (
        <div className="mx-auto max-w-screen-lg bg-white flex flex-col justify-center text-center p-8 space-y-8 mt-12">
            <SectionTitle title="Beauty Pakete"/>
            <div>
                <div className="flex flex-col items-center space-y-4">
                    <h3 className="text-2xl font-serif">Sugaring (Haarentfernung)</h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-10">
                    <ServiceCard service={services[0]}/>
                    <ServiceCard service={services[1]}/>
                    <ServiceCard service={services[2]}/>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center space-y-4">
                    <h3 className="text-2xl font-serif">Wimpern & Brauen</h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-10">
                    <ServiceCard service={services[0]}/>
                    <ServiceCard service={services[1]}/>
                    <ServiceCard service={services[2]}/>
                </div>
                <div className="py-12 mx-auto">
                    <a href="/"
                      className="bg-white inline-block px-8 py-3 border-black border text-sm rounded hover:bg-primary hover:border-primary hover:text-white transition duration-300 capitalize font-bold">
                    Alle Beauty Pakete
                </a></div>
            </div>

        </div>
    );
};
