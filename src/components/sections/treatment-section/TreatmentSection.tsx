"use client"
import React from "react";
import ImageCard from "@/components/core/image-card/ImageCard";
import SectionTitle from "@/components/core/section-title/SectionTitle";
import CustomButton from "@/components/core/custom-button/CustomButton";

export const TreatmentSection: React.FC = () => {
    const handleButtonClick = () => {
        console.log("WORKS")
    }

    return (
        <div className="mx-auto max-w-screen-lg bg-white flex flex-col justify-center text-center p-8 space-y-8 mt-12">
            <SectionTitle title="Dienstleistungen" />
            {/* Grid layout for a uniform structure */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-10">
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
                    title="Waxing Gesicht"
                />
                <ImageCard
                    imageUrl="https://mlvj6gh278jg.i.optimole.com/cb:-M3q.40215/w:726/h:522/q:90/f:best/https://www.beautycarezuerich.ch/wp-content/uploads/2022/07/permanent-make-up.jpg"
                    title="Permanent Make-up"
                />
                <ImageCard
                    imageUrl="/images/sugaring.jpg"
                    title="Sugaring"
                />
                <ImageCard
                    imageUrl="https://mlvj6gh278jg.i.optimole.com/cb:-M3q.40215/w:726/h:522/q:90/f:best/https://www.beautycarezuerich.ch/wp-content/uploads/2023/10/wimpern-start.jpg"
                    title="Wimpern & Brauen"
                />
            </div>
            <div className="pt-10 mx-auto">
                <CustomButton text="Alle Dienstleistungen" clicked={handleButtonClick} />
            </div>
        </div>
    );
};
