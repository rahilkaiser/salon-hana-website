import React from "react";
import Link from "next/link";

interface CustomButtonProps {
    text: string;
    href: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({text, href}) => {
    return (
        <Link prefetch href={href}>
            <button
                className="bg-white inline-block px-8 py-3 border-black border text-sm rounded hover:bg-primary hover:border-primary hover:text-white transition duration-300 capitalize font-bold">
                {text}
            </button>
        </Link>
    );
};

export default CustomButton;
