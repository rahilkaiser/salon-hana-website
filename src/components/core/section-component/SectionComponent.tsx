'use client';

import React, { useEffect, ReactNode } from 'react';
import useIntersectionObserver from '../interaction-observer/InteractionObserver';

interface SectionProps {
    id: string;
    children: ReactNode;
    noSlide?: boolean;
}

const Section: React.FC<SectionProps> = ({id,  children, noSlide = false }) => {
    const entries = useIntersectionObserver({ threshold: 0.1 });

    useEffect(() => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
                entry.target.classList.add('visible');
            }
        });
    }, [entries]);

    return (
        <section
            id={id}
            className={`section ${noSlide ? '' : 'observe transition-transform duration-1000 ease-in-out transform translate-y-10 opacity-0'}`}>
            {children}
        </section>
    );
};

export default Section;
