"use client";

import React from "react";

interface CustomButtonProps {
    text: string;
    onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick }) => {
    return (
        <button
            className="bg-white inline-block px-8 py-3 border-black border text-sm rounded hover:bg-primary hover:border-primary hover:text-white transition duration-300 capitalize font-bold"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default CustomButton;
