"use client";

import React from "react";
import {motion} from "framer-motion";

interface CustomButtonProps {
    text: string;
    onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick }) => {

    const buttonVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: 0.6, // Adjusted to follow after the last text
                duration: 0.4,
            }
        },
        hover: {
            transition: { duration: 0.2 }, // smoother transition
            backgroundColor: "#ec4899",
            color: "#ffffff",
        }
    };
    return (

        <motion.button
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={buttonVariants}
            className="inline-block px-8 py-3 bg-primary text-white text-2xl rounded capitalize">
            Termin Buchen
        </motion.button>

    // <button
    //     className="bg-white inline-block px-8 py-3 border-black border text-sm rounded hover:bg-primary hover:border-primary hover:text-white transition duration-300 capitalize font-bold"
    //     onClick={onClick}
    // >
    //     {text}
    // </button>
)
    ;
};

export default CustomButton;
