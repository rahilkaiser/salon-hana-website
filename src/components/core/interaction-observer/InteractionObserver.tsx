'use client';

import { useEffect, useState } from 'react';

interface IntersectionObserverOptions {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
}

const useIntersectionObserver = (options: IntersectionObserverOptions) => {
    const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            setEntries(entries);
        }, options);

        const elements = document.querySelectorAll('.observe');
        elements.forEach((element) => observer.observe(element));

        return () => {
            elements.forEach((element) => observer.unobserve(element));
        };
    }, [options]);

    return entries;
};

export default useIntersectionObserver;
