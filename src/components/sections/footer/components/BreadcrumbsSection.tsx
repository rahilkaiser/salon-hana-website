"use client"
import React from "react";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";

export const BreadcrumbsSection = () => {
    const [currentPage, setCurrentPage] = React.useState("music");

    return (
        <Breadcrumbs
            size="sm"
            onAction={(key) => setCurrentPage(key.toString())}
            classNames={{
                list: "gap-2",
            }}
            itemClasses={{
                item: [
                    "px-2 py-0.5 border-small border-default-400 rounded-small",
                    "data-[current=true]:border-foreground data-[current=true]:bg-foreground data-[current=true]:text-background transition-colors",
                    "data-[disabled=true]:border-default-400 data-[disabled=true]:bg-default-100",
                ],
                separator: "hidden",
            }}
        >
            <BreadcrumbItem key="home" isCurrent={currentPage === "home"}>
                Home
            </BreadcrumbItem>
            <BreadcrumbItem key="music" isCurrent={currentPage === "music"}>
                Music
            </BreadcrumbItem>
            <BreadcrumbItem key="artist" isCurrent={currentPage === "artist"}>
                Artist
            </BreadcrumbItem>
            <BreadcrumbItem key="album" isCurrent={currentPage === "album"}>
                Album
            </BreadcrumbItem>
            <BreadcrumbItem key="song" isDisabled isCurrent={currentPage === "song"}>
                Song
            </BreadcrumbItem>
        </Breadcrumbs>
    );
};
