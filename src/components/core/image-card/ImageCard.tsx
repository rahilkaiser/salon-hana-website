import React from "react";
import Image from 'next/image';

interface ImageCardProps {
    imageUrl: string;
    title: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, title }) => {
    return (

        // <div className="card bg-white shadow-md rounded p-4 mb-4">
        //     <h2 className="text-lg font-bold">Wimpernlifting + Browlifting inkl. färben</h2>
        //     <p className="text-gray-700">1 Std.</p>
        //     <p className="text-gray-700">100,00 €</p>
        //     <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        //         Buchen
        //     </button>
        // </div>
        <div className="group relative flex-1">
            <a href="#" className="block overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    layout="responsive"
                    width={100}
                    height={600}
                    objectFit="cover"
                    className="w-full h-auto transform transition-transform duration-300 group-hover:scale-105 lg:group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-75">
                    <span className="inline-block w-4 h-1 bg-primary mr-2 align-middle"></span>
                    <span className="text-lg w-full font-semibold align-middle">{title}</span>
                </div>
            </a>
        </div>
    );
};

export default ImageCard;
