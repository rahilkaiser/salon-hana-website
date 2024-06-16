import SectionTitle from "@/components/core/section-title/SectionTitle";
import React from "react";
import ServiceCard from "@/components/core/service-card/ServiceCard";
import Link from "next/link";

export const FavServices = () => {

    const handleButtonClick = () => {
        console.log("WORKS")
    }

    const services = [
        {
            id: 1,
            category: "Haarentfernung",
            name: "Damen Sugaring - Intim",
            duration: "30 min",
            price: "38,00 €",
            imageUrl: "/images/sugaring.jpg"
        },
        {
            id: 2,
            category: "Wimpern & Brauen",
            name: "Augenbrauen zupfen",
            duration: "15 min",
            price: "15,00 €",
            imageUrl: "/images/sugaring.jpg"
        },
        {
            id: 3,
            category: "Wimpern & Brauen",
            name: "Augenbrauen färben",
            duration: "15 min",
            price: "15,00 €",
            imageUrl: "/images/sugaring.jpg"
        },
        {
            id: 4,
            category: "Wimpern & Brauen",
            name: "Wimpern färben",
            duration: "15 min",
            price: "15,00 €",
            imageUrl: "/images/sugaring.jpg"
        },
        {
            id: 5,
            category: "Haarentfernung",
            name: "Dauerhafte Haarentfernung",
            duration: "15 min",
            price: "40,00 €",
            imageUrl: "/images/sugaring.jpg"
        },
    ];


    return (
        <div className="mx-auto max-w-screen-lg bg-white flex flex-col justify-center text-center p-8 space-y-8 pt-12">
            <SectionTitle title="Beliebte Services"/>
            <div>
                <div
                    className="flex flex-col md:flex-row justify-center md:justify-between space-y-8 md:space-y-0 md:space-x-8">
                    <div className="flex-1">
                        <ServiceCard service={services[0]}/>
                    </div>
                    <div className="flex-1">
                        <ServiceCard service={services[1]}/>
                    </div>
                    <div className="flex-1">
                        <ServiceCard service={services[2]}/>
                    </div>
                </div>
            </div>
            <div>
                <div
                    className="flex flex-col md:flex-row justify-center md:justify-between space-y-8 md:space-y-0 md:space-x-8">
                    <div className="flex-1">
                        <ServiceCard service={services[3]}/>
                    </div>
                    <div className="flex-1">
                    <ServiceCard service={services[4]}/>
                    </div>
                </div>
                <div className="py-14 mx-auto">
                    <Link prefetch href={'/services'}
                        className="bg-white inline-block px-8 py-3 border-black border text-sm rounded hover:bg-primary hover:border-primary hover:text-white transition duration-300 capitalize font-bold">
                        Alle Services
                    </Link>
                </div>
            </div>

        </div>
    )
        ;
};
