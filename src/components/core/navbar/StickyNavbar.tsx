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
import {Link} from "@nextui-org/link";
import React, {useState} from "react";
import MainMenu from "@/components/core/menu/MainMenu";


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


    return (
        <Navbar isBordered maxWidth="full" className="w-screen justify-center" isBlurred={true}>

            <NavbarContent className="sm:flex gap-4" justify="start">

                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}/>
                <NavbarItem>
                    MENU
                </NavbarItem>

            </NavbarContent>

            <NavbarContent className=" sm:flex gap-4" justify="center">
                <NavbarBrand style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg" style={{ margin: "auto" }}>
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
                    <button
                        className="hidden md:inline-block  px-8 py-3 bg-primary text-white text-lg rounded hover:bg-pink-600 transition duration-300 capitalize">Termin
                        Buchen
                    </button>

                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="text-black pt-20 overflow-x-hidden overflow-y-auto">
                <NavbarMenuItem>
                    <MainMenu></MainMenu>


                </NavbarMenuItem>

            </NavbarMenu>
        </Navbar>
    );
};
