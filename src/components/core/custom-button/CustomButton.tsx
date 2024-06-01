import React from "react";

interface CustomButtonProps {
    text: string;
    clicked: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, clicked }) => {
    return (
        <button
            className="bg-white inline-block px-8 py-3 border-black border text-sm rounded hover:bg-primary hover:border-primary hover:text-white transition duration-300 capitalize font-bold"
            onClick={clicked}>
            {text}
        </button>
    );
};

export default CustomButton;
