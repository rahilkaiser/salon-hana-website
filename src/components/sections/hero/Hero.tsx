import React from 'react';
import Image from 'next/image';
import {HeroText} from "@/components/sections/hero/components/HeroText";
import Parallax from "@/components/core/parallax/Parallax";

export const Hero: React.FC = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 rounded-lg">
                <Parallax>
                    <Image
                        src="/images/flipped-bg.jpg"
                        alt="Beauty Salon"
                        layout="fill"  // Use 'fill' to make the image cover the designated area
                        objectFit="cover"  // Ensures the image covers the div completely
                        priority={true}  // Ensures the image is preloaded on the server
                    />
                </Parallax>

            </div>
            <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
            <HeroText/>
        </section>
    );
};