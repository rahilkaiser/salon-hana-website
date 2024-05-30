"use client";

import React from "react";
import ImageCard from "@/components/core/image-card/ImageCard";
import CustomButton from "@/components/core/custom-button/CustomButton";
import SectionTitle from "@/components/core/section-title/SectionTitle";

export const TreatmentSection: React.FC = () => {
    const handleButtonClick = () => {
        alert("Mehr über uns clicked!");
    };

    return (
        <div className="mx-auto max-w-screen-lg bg-white flex flex-col justify-center text-center p-8 space-y-8 mt-12">
            <SectionTitle title="Dienstleistungen" />
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8 pt-10">
                <ImageCard
                    imageUrl="https://mlvj6gh278jg.i.optimole.com/cb:-M3q.40215/w:726/h:522/q:90/f:best/https://www.beautycarezuerich.ch/wp-content/uploads/2022/10/gesichtsbehandlungen-facial.jpg"
                    title="Gesichtsbehandlung"
                />
                <ImageCard
                    imageUrl="https://mlvj6gh278jg.i.optimole.com/cb:-M3q.40215/w:726/h:522/q:90/f:best/https://www.beautycarezuerich.ch/wp-content/uploads/2022/07/microneedling.jpg"
                    title="Microneedling"
                />
                <ImageCard
                    imageUrl="https://mlvj6gh278jg.i.optimole.com/cb:-M3q.40215/w:726/h:522/q:90/f:best/https://www.beautycarezuerich.ch/wp-content/uploads/2022/07/hydrafacial.jpg"
                    title="Hydrafacial"
                />
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8">
                <ImageCard
                    imageUrl="https://mlvj6gh278jg.i.optimole.com/cb:-M3q.40215/w:726/h:522/q:90/f:best/https://www.beautycarezuerich.ch/wp-content/uploads/2022/07/permanent-make-up.jpg"
                    title="Permanent Make-up"
                />
                <ImageCard
                    imageUrl="https://mlvj6gh278jg.i.optimole.com/cb:-M3q.40215/w:726/h:522/q:90/f:best/https://www.beautycarezuerich.ch/wp-content/uploads/2022/07/endermologie.jpg"
                    title="Endermologie Anti-Cellulite"
                />
                <ImageCard
                    imageUrl="https://mlvj6gh278jg.i.optimole.com/cb:-M3q.40215/w:726/h:522/q:90/f:best/https://www.beautycarezuerich.ch/wp-content/uploads/2023/10/wimpern-start.jpg"
                    title="Wimpern & Brauen"
                />
            </div>
            <div className="w-22 pt-14 mx-auto">
                <CustomButton text="Alle Dienstleistungen" onClick={handleButtonClick} />
            </div>
        </div>
    );
};
