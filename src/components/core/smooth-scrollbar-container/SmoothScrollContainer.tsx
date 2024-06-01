'use client'
import React, { useRef, useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';

type SmoothScrollContainerProps = {
    children?: React.ReactNode;
};

const SmoothScrollContainer: React.FC<SmoothScrollContainerProps> = ({ children }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let scrollbarInstance: Scrollbar | null = null;
        if (scrollRef.current) {
            const isMobile = window.innerWidth < 768;

            scrollbarInstance = Scrollbar.init(scrollRef.current, {
                damping: isMobile ? 0.01 : 0.05,
                thumbMinSize: 20,
                alwaysShowTracks: true,
                continuousScrolling: true,
                renderByPixels: isMobile
            });
        }

        return () => {
            scrollbarInstance?.destroy();
        };
    }, []);

    return (
        <div ref={scrollRef} style={{ height: '100vh', width: '100%' }}>
            {children}
        </div>
    );
};

export default SmoothScrollContainer;
