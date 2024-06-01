'use client'
import React, { useRef, useEffect } from 'react';
import Scrollbar, {ScrollbarPlugin} from 'smooth-scrollbar';

type SmoothScrollContainerProps = {
    children?: React.ReactNode;
};

class SmoothTouchScrollPlugin extends ScrollbarPlugin {
    static pluginName = 'smoothTouchScroll';

    transformDelta(delta: any, fromEvent: { type: string; }) {
        if (fromEvent.type === 'touchmove') {
            this.scrollbar.options.damping = 0.1; // change this to whatever you want
        }

        return delta;
    }
}

const SmoothScrollContainer: React.FC<SmoothScrollContainerProps> = ({ children }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let scrollbarInstance: Scrollbar | null = null;
        if (scrollRef.current) {
            const isMobile = window.innerWidth < 768;

            scrollbarInstance = Scrollbar.init(scrollRef.current, {
                damping: isMobile ? 0.01 : 0.05,
                thumbMinSize: 10,
                alwaysShowTracks: true,
                continuousScrolling: true,
                renderByPixels: false,
                plugins: SmoothTouchScrollPlugin
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
