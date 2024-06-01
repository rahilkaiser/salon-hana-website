import React from 'react';
import Image from 'next/image';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faClock} from "@fortawesome/free-solid-svg-icons";

interface ServiceProps {
    id: number;
    category: string;
    name: string;
    duration: string;
    price: string;
    imageUrl: string;
}

interface ServiceCardProps {
    service: ServiceProps;
}

const ServiceCard: React.FC<ServiceCardProps> = ({service}) => {
    return (
        <div
            className="relative flex-1 overflow-hidden rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:scale-102"
            style={{width: '100%', height: '400px', position: 'relative'}}>
            <Image
                src={service.imageUrl}
                alt={service.name}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
            />
            <div
                className="flex flex-col justify-between items-center opacity-55 bg-black absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4"
                style={{minHeight: '40%'}}>
                <span className="text-lg font-bold">
                    {service.name}
                </span>
                <p><FontAwesomeIcon icon={faClock} className="px-2"/> {service.duration} | {service.price}</p>
                <button
                    className="bg-primary mt-2 hover:bg-pink-600 duration-300 text-white font-bold py-2 px-4 rounded">
                    Buchen
                </button>
            </div>

        </div>
    );
};

export default ServiceCard;
