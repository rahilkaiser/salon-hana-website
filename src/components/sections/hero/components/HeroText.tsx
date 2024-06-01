'use client'
import {motion} from "framer-motion";
import React from "react";

export const HeroText = () => {
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
        <div className="relative z-10 text-center md:text-start w-full text-white pt-40 px-6 md:px-12 lg:px-24">
            <motion.h1
                initial="hidden"
                animate="visible"
                custom={0} // No delay for the first element
                variants={textVariants}
                className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 font-serif">
                Salon Hana
            </motion.h1>
            <motion.h3
                initial="hidden"
                animate="visible"
                custom={1} // Delay for the second element
                variants={textVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 font-serif">
                Beauty-Dienstleistungen in Berlin
            </motion.h3>
            <motion.h4
                initial="hidden"
                animate="visible"
                custom={2} // Further delay for the third element
                variants={textVariants}
                className="text-xl md:text-2xl max-w-3xl mb-12 font-serif">
                Entdecken Sie bei Salon Hana in Berlin ein umfangreiches Angebot an Beauty-Dienstleistungen – von
                Sugaring und Waxing bis hin zu dauerhafter Haarentfernung und Wimpernlifting.
            </motion.h4>
            {/*<motion.button*/}
            {/*    initial="hidden"*/}
            {/*    animate="visible"*/}
            {/*    whileHover="hover"*/}
            {/*    variants={buttonVariants}*/}
            {/*    className="inline-block px-8 py-3 bg-primary text-white text-2xl rounded capitalize">*/}
            {/*    Termin Buchen*/}
            {/*</motion.button>*/}
        </div>
    );
};
