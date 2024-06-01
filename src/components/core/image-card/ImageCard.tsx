import React from "react";
import Image from 'next/image';

interface ImageCardProps {
    imageUrl: string;
    title: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, title }) => {
    return (
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
