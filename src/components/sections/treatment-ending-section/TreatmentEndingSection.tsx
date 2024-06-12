'use client'
import React, {useEffect, useRef, useState} from "react";
import Lenis from "@studio-freight/lenis";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const TreatmentEndingSection = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [lenis, setLenis] = useState<Lenis | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const lenisInit = new Lenis({
            lerp: 0.1,
            smoothWheel: true,

        });

        setLenis(lenisInit);

        return () => {
            lenisInit.destroy();
        };
    }, []);

    useEffect(() => {
        if (!lenis || !ref.current) return;

        lenis.on('scroll', () => {
            ScrollTrigger.update();
        });

        ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(value) {
                // Ensuring 'value' is not undefined before passing it
                if (value !== undefined) {
                    return lenis.scrollTo(value);
                } else {
                    // Provide a default behavior or value when 'value' is undefined
                    return lenis.scroll.scrollY ?? 0; // Fallback to 0 if 'scrollY' is also undefined
                }
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
        });

        gsap.fromTo(
            ref.current,
            {
                backgroundPosition: "50% 0%"
            },
            {
                backgroundPosition: "50% 100%",
                ease: "none",
                scrollTrigger: {
                    trigger: ref.current,
                    scroller: document.body, // use body as scroller
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            }
        );

        ScrollTrigger.addEventListener("refresh", () => lenis.resize());
        return () => {
            if (ref.current) ScrollTrigger.killAll();
        };
    }, [lenis]);

    function clicked() {

    }

    return (
        <div
            ref={ref}
            className="h-[600px] bg-cover bg-fixed"
            style={{ backgroundImage: `url(https://www.beautycarezuerich.ch/wp-content/uploads/2022/10/facial-gross.jpg)` }}
        >
            <div className="flex-col h-full w-1/2 mx-auto flex items-center justify-center">
                <h1 className="text-white text-lg md:text-4xl uppercase text-center my-16">
                    Genießen Sie Ihre exklusive <span>Gesichtsbehandlung</span>
                </h1>
                <button
                    className="bg-transparent border-white text-white inline-block px-8 py-3 border rounded hover:bg-primary hover:border-primary transition duration-300 font-semibold text-sm uppercase"
                    onClick={clicked}>
                    Zu den Facials
                </button>

            </div>
        </div>
    );
};
