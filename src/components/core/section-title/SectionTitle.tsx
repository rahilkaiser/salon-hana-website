"use client";

import React from "react";

interface TitleWithLineProps {
    title: string;
}

const TitleWithLine: React.FC<TitleWithLineProps> = ({ title }) => {
    return (
        <div className="flex flex-col items-center space-y-4">
            <h2 className="text-3xl font-serif">{title}</h2>
            <div className="flex justify-center">
                <span className="inline-block w-8 h-1 bg-primary align-middle"></span>
            </div>
        </div>
    );
};

export default TitleWithLine;
