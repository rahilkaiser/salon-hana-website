"use client"
import SectionTitle from "@/components/core/section-title/SectionTitle";
import ImageCard from "@/components/core/image-card/ImageCard";
import CustomButton from "@/components/core/custom-button/CustomButton";
import React from "react";
import ServiceCard from "@/components/core/service-card/ServiceCard";

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
        <div className="mx-auto max-w-screen-lg bg-white flex flex-col justify-center text-center p-8 space-y-8 mt-12">
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

                {/*grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10 */}
                <div
                    className="flex flex-col md:flex-row justify-center md:justify-between space-y-8 md:space-y-0 md:space-x-8">
                    <div className="flex-1">
                        <ServiceCard service={services[3]}/>
                    </div>
                    <div className="flex-1">
                    <ServiceCard service={services[4]}/>
                    </div>
                </div>
                <div className="py-12 mx-auto">
                    <CustomButton text="Alle Services" clicked={handleButtonClick}/>
                </div>
        </div>

</div>
)
    ;
};
