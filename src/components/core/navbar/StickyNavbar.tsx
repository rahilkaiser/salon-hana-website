'use client';

import {
    Button,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import MainMenu from "@/components/core/menu/MainMenu";
import { motion } from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import SmoothScrollContainer from "@/components/core/smooth-scrollbar-container/SmoothScrollContainer";

export const StickyNavbar = () => {
    let isMenuOpen = React.useState(false);
    interface MenuItem {
        id: number;
        title: string;
        content: string;
    }

    const menuItems: MenuItem[] = [
        {id: 1, title: 'Item 1', content: 'This is the content for Item 1'},
        {id: 2, title: 'Item 2', content: 'This is the content for Item 2'},
        {id: 3, title: 'Item 3', content: 'This is the content for Item 3'},
    ];

    const buttonVariants = {
        hidden: { scale: 0.8, opacity: 0 , x:500},
        visible: {
            x:0,
            scale: 1,
            opacity: 1,
            transition: {
                delay: 0.6, // Adjusted to follow after the last text
                duration: 0.4,
            }
        },
        hover: {
            transition: { duration: 0.1 }, // smoother transition
            backgroundColor: "#ec4899",
            color: "#ffffff",
        }
    };

    return (
        <Navbar isBordered maxWidth="full" className="" isBlurred={true}>
            <NavbarContent className="sm:flex gap-4" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}/>
                <NavbarItem>
                    MENU
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="gap-4" justify="center">
                <NavbarBrand style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg" style={{margin: "auto"}}>
                        <text x="50%" y="40%" dominant-baseline="middle" text-anchor="middle" fontFamily="Noto Serif"
                              fontSize="25" fill="black" fontWeight="500">Salon Hana
                        </text>
                        <line x1="30" y1="52" x2="170" y2="52" stroke="black" strokeWidth="2"/>
                        <text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" fontFamily="Noto Serif"
                              fontSize="14" fill="black" fontWeight="200">Berlin
                        </text>
                    </svg>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <motion.button
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        variants={buttonVariants}
                        className="px-4 py-2 sm:px-8 sm:py-3 bg-primary text-white text-lg rounded capitalize">
                        <FontAwesomeIcon icon={faCalendar} className="px-2"/>
                        <span className="hidden sm:inline">Termin Buchen</span>

                    </motion.button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu
                className="text-black pt-20 overflow-x-hidden overflow-y-auto">
                <SmoothScrollContainer><NavbarMenuItem>
                    <MainMenu></MainMenu>
                </NavbarMenuItem></SmoothScrollContainer>
            </NavbarMenu>
        </Navbar>
    );
};
