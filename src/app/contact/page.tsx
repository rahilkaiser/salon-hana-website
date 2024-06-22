"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEnvelope, faPhone, faClock } from "@fortawesome/free-solid-svg-icons";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {loadGoogleMaps} from "@/actions/actions";

const center = {
    lat: 52.512470,
    lng: 13.466640
};

const markers = [
    {
        position: center,
        title: 'Salon Hana',
        content: "Jungstraße 10, 10247 Berlin"
    }
];

const containerStyle = {
    width: '100%',
    height: '400px',
    border: 'none',
};

export default function Contact() {
    const [apiKey, setApiKey] = useState<string | null>(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const router = useRouter();

    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        in: { opacity: 1, y: 0 },
        out: { opacity: 0, y: -20 }
    };

    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.5
    };

    useEffect(() => {
        const fetchApiKey = async () => {
            try {
                const apiKey = await loadGoogleMaps();
                setApiKey(apiKey);
            } catch (error) {
                console.error('Error fetching API key:', error);
            }
        };

        fetchApiKey();
    }, []);

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className="ml-20 my-8">
                <button className="cursor-pointer" onClick={() => { router.back(); }}>
                    <FontAwesomeIcon icon={faArrowLeft} size="1x" className="text-lg text-primary" />
                    <span className="px-2">Zurück</span>
                </button>
            </div>
            <div className="max-w-7xl mx-auto px-16 sm:px-8 ">
                <span className="mb-8 font-semibold pl-8">Kontakt</span>
                <div className="flex flex-row justify-evenly w-full p-4 ">
                    <div className="flex flex-col w-full pl-8 items-center">
                        {/* Adresse */}
                        <span className="font-bold">Salon Hana</span>
                        <span className="pt-2">Jungstraße 10, 10247 Berlin</span>
                        <span className="text-primary font-semibold pt-2 cursor-pointer">
              <FontAwesomeIcon icon={faPhone} size="1x" className="text-primary pr-2" />
              +49 160 7785184
            </span>
                        <span className="text-primary font-semibold pt-2 cursor-pointer">
              <FontAwesomeIcon icon={faEnvelope} size="1x" className="text-primary pr-2" />
              salonhana@gmail.com
            </span>
                        <div className="font-semibold mt-8">
                            <FontAwesomeIcon icon={faClock} size="1x" className="text-primary pr-2" />
                            Öffnungszeiten
                        </div>
                        <div className="flex flex-row">
                            <div className="flex flex-col">
                                <div className="py-0.5">Montag:</div>
                                <div className="py-0.5">Dienstag:</div>
                                <div className="py-0.5">Mittwoch:</div>
                                <div className="py-0.5">Donnerstag:</div>
                                <div className="py-0.5">Freitag:</div>
                            </div>
                            <div className="flex flex-col px-2">
                                <div className="py-0.5">10:00 - 15:00</div>
                                <div className="py-0.5">10:00 - 17:00</div>
                                <div className="py-0.5">10:00 - 15:00</div>
                                <div className="py-0.5">10:00 - 15:00</div>
                                <div className="py-0.5">10:00 - 15:00</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full pl-8 items-stretch bg-white shadow-md rounded-md">
                        <form>
                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-transparent focus:ring-0"
                                            placeholder="Name"
                                        />
                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-500 peer-focus:w-full"></span>
                                        <label
                                            htmlFor="name"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                                        >
                                            Name
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-transparent focus:ring-0"
                                            placeholder="Telefon"
                                        />
                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-500 peer-focus:w-full"></span>
                                        <label
                                            htmlFor="phone"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                                        >
                                            Telefon
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-transparent focus:ring-0"
                                            placeholder="E-Mail-Adresse"
                                        />
                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-500 peer-focus:w-full"></span>
                                        <label
                                            htmlFor="email"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                                        >
                                            E-Mail-Adresse
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className="relative">
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="peer h-32 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-transparent focus:ring-0"
                        placeholder="Nachricht"
                    ></textarea>
                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-500 peer-focus:w-full"></span>
                                        <label
                                            htmlFor="message"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                                        >
                                            Nachricht
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full py-2 px-4 bg-primary hover:bg-pink-600 text-white rounded-md duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 uppercase"
                                    >
                                        Kontaktieren Sie uns
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    {apiKey && (
                        <LoadScript googleMapsApiKey={apiKey}>
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={14}
                                onLoad={map => setMap(map)}
                                onUnmount={() => setMap(null)}
                            >
                                {markers.map((marker, i) => (
                                    <Marker key={i} position={marker.position} />
                                ))}
                            </GoogleMap>
                        </LoadScript>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
