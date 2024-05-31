"use client";

import React from "react";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@nextui-org/react";

export const BeautySection = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleOpen = () => {
        onOpen();
    };

    return (
        <div className="w-full py-8 text-start bg-accent sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="flex flex-col-reverse lg:flex-row items-stretch justify-between space-y-8 lg:space-y-0 lg:space-x-8">
                    <div className="flex-1 py-4 px-4 sm:p-10 flex flex-col justify-center items-start">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-left font-serif">
                            Beauty Programme für<br />Gesicht und Körper
                        </h2>
                        <p className="text-left mb-4 font-serif text-base sm:text-lg">
                            Neben <strong>klassischen Gesichtsbehandlungen</strong> von REVIDERM, Valmont und Susanne Kaufmann bieten wir Ihnen auch spezielle <strong>Anti-Aging Behandlungen</strong> wie das Microneedling, HydraFacial, Fruchtsäurepeelings oder hochwirksame Ultraschall-Treatments an. Permanent Make-up, Wimpernlifting, Maniküre/Pediküre und Haarentfernung runden Ihr Schönheitsprogramm ab. Unser Team kümmert sich aber nicht nur um das Gesicht, sondern auch um den perfekten Body. Zum Beispiel mit der LPG Endermologie® zur Bekämpfung von Cellulite und zur Körperstraffung.
                        </p>
                        <p className="text-left mb-4">
                            Entdecken Sie <strong>Kosmetik auf höchstem Niveau</strong> bei Beauty Care Zürich und lassen Sie sich von Kopf bis Fuss verwöhnen.
                        </p>
                        <button className="bg-white inline-block px-6 py-2 sm:px-8 sm:py-3 border-black border text-sm rounded hover:bg-primary hover:border-primary hover:text-white transition duration-300 capitalize font-bold">
                            Mehr über uns
                        </button>
                    </div>
                    <div className="flex-1 relative p-4 overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0">
                            <img
                                src="https://mlvj6gh278jg.i.optimole.com/cb:-M3q.40215/w:auto/h:auto/q:90/f:best/https://www.beautycarezuerich.ch/wp-content/uploads/2022/07/22.jpg"
                                alt="Video background"
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={handleOpen}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="bg-white rounded-full p-4">
                                    <svg className="text-primary w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                size={'sm'}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalContent>
                    <ModalBody>
                        <div className="h-96 overflow-hidden">
                            <iframe
                                className="w-full h-full"
                                // src="https://www.youtube.com/embed/c8OBF4kZg7c"
                                src="https://www.youtube.com/embed/NpEaa2P7qZI"
                                // src="https://www.youtube.com/watch?v=NpEaa2P7qZI"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
};