import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section className="h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white px-6 md:px-12 lg:px-24">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif">
                    Salon Hana
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 font-serif">
                    Beauty-Dienstleistungen in Berlin
                </p>
                <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-12 font-serif">
                    Erleben Sie die vielfältigen Beauty-Dienstleistungen bei Salon Hana in Berlin. Von Sugaring und
                    Waxing bis zu dauerhafter Haarentfernung und Wimpernlifting bieten wir alles für Ihre Schönheit.
                </p>

                <button
                    className="inline-block px-8 py-3 bg-primary text-white text-2xl rounded hover:bg-pink-600 transition duration-300 capitalize ">Termin Buchen
                </button>
            </div>
        </section>
    );
};
