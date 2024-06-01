import React from 'react';
import Image from 'next/image';
import {HeroText} from "@/components/sections/hero/components/HeroText";

export const Hero: React.FC = () => {
    return (
        <section className="relative h-screen flex items-center justify-center">
            <div className="absolute inset-0 overflow-hidden rounded-lg">
                <Image
                    src="/images/background.png"
                    alt="Beauty Salon"
                    layout="fill"  // Use 'fill' to make the image cover the designated area
                    objectFit="cover"  // Ensures the image covers the div completely
                    priority={true}  // Ensures the image is preloaded on the server
                />
            </div>
            <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
            <HeroText/>
        </section>
    );
};