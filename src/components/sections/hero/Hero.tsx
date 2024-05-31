'use client'
import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
    const textVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                damping: 20,
                stiffness: 100,
                delay: custom * 0.2, // each element will have incremental delay
            }
        }),
    };


    return (
        <section className="relative h-screen flex items-center justify-center">
            <div className="absolute inset-0 overflow-hidden rounded-lg">
                <Image
                    src="/images/background.png"
                    alt="Beauty Salon"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
            <div className="relative z-10 text-center text-white px-6 md:px-12 lg:px-24">
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    custom={0} // No delay for the first element
                    variants={textVariants}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif">
                    Salon Hana
                </motion.h1>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    custom={1} // Delay for the second element
                    variants={textVariants}
                    className="text-xl md:text-2xl lg:text-3xl font-light mb-8 font-serif">
                    Beauty-Dienstleistungen in Berlin
                </motion.p>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    custom={2} // Further delay for the third element
                    variants={textVariants}
                    className="text-base md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 font-serif">
                    Entdecken Sie bei Salon Hana in Berlin ein umfangreiches Angebot an Beauty-Dienstleistungen – von Sugaring und Waxing bis hin zu dauerhafter Haarentfernung und Wimpernlifting.
                </motion.p>
                {/*<motion.button*/}
                {/*    initial="hidden"*/}
                {/*    animate="visible"*/}
                {/*    whileHover="hover"*/}
                {/*    variants={buttonVariants}*/}
                {/*    className="inline-block px-8 py-3 bg-primary text-white text-2xl rounded capitalize">*/}
                {/*    Termin Buchen*/}
                {/*</motion.button>*/}
            </div>
        </section>
    );
};