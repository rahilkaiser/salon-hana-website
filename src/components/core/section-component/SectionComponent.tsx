'use client';

import React, { useEffect, ReactNode } from 'react';
import useIntersectionObserver from '../interaction-observer/InteractionObserver';

interface SectionProps {
    children: ReactNode;
    noSlide?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, noSlide = false }) => {
    const entries = useIntersectionObserver({ threshold: 0.1 });

    useEffect(() => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
                entry.target.classList.add('visible');
            }
        });
    }, [entries]);

    return (
        <div
            className={`section ${noSlide ? '' : 'observe transition-transform duration-1000 ease-in-out transform translate-y-10 opacity-0'}`}>
            {children}
        </div>
    );
};

export default Section;
