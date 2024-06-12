import React from 'react';
import Image from 'next/image';
import {HeroText} from "@/components/sections/hero/components/HeroText";

export const Hero: React.FC = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 rounded-lg">
                    <Image
                        src="/images/flipped-bg.jpg"
                        alt="Beauty Salon"
                        layout="fill"
                        objectFit="cover"
                        priority={true}
                    />

            </div>
            <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
            <HeroText/>
        </section>
    );
};