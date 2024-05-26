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

    // const menuItems = [
    //     "Institut",
    //     "Gesicht",
    //     "Körper",
    //     "Make-Up",
    //     "Produkte",
    // ];

    interface MenuItem {
        id: number;
        title: string;
        content: string;
    }

    const menuItems: MenuItem[] = [
        { id: 1, title: 'Item 1', content: 'This is the content for Item 1' },
        { id: 2, title: 'Item 2', content: 'This is the content for Item 2' },
        { id: 3, title: 'Item 3', content: 'This is the content for Item 3' },
        // Add more items as needed
    ];



    return (
        <Navbar isBordered maxWidth="full" className="w-screen" isBlurred={true}>

            <NavbarContent className="hidden sm:flex gap-4" justify="start">

                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}/>
                <NavbarItem>
                    MENU
                </NavbarItem>

            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg" fontFamily="noto">
                        <defs>
                            <style type="text/css">@import
                                url('https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@900&display=swap');
                            </style>
                        </defs>
                        {/*<rect width="100%" height="100%" fill="white"/>*/}
                        <text x="50%" y="40%" dominant-baseline="middle" text-anchor="middle" font-family="Noto Serif"
                              font-size="25" fill="black" font-weight="500">Salon Hana
                        </text>
                        <line x1="30" y1="52" x2="170" y2="52" stroke="black" stroke-width="2"/>
                        <text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" font-family="Noto Serif"
                              font-size="14" fill="black" font-weight="200">Berlin
                        </text>
                    </svg>


                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <button
                        className="inline-block px-8 py-3 bg-primary text-white text-lg rounded hover:bg-pink-600 transition duration-300 capitalize">Termin
                        Buchen
                    </button>

                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="text-black pt-20 overflow-x-hidden overflow-y-auto">
                    <NavbarMenuItem >
                        <MainMenu></MainMenu>

                        {/*<div className="flex">*/}
                        {/*    <ul className="bg-gray-800 text-white w-48 p-4">*/}
                        {/*        <li className="mb-2 cursor-pointer" onMouseEnter={() => setHoveredItem(item.id)}>*/}
                        {/*            MainMenu Item 1*/}
                        {/*            {hoveredItem === item.id && (*/}
                        {/*                <ul className="absolute bg-gray-700 text-white mt-1 left-48 w-48">*/}
                        {/*                    <li className="p-2">Submenu Item 1</li>*/}
                        {/*                    <li className="p-2">Submenu Item 2</li>*/}
                        {/*                    <li className="p-2">Submenu Item 3</li>*/}
                        {/*                </ul>*/}
                        {/*            )}*/}
                        {/*        </li>*/}
                        {/*        <li className="mb-2 cursor-pointer">MainMenu Item 2</li>*/}
                        {/*        <li className="mb-2 cursor-pointer">MainMenu Item 3</li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}


                        {/*<div className="relative w-full ">*/}
                        {/*    <ul className="space-y-4">*/}
                        {/*            <li*/}
                        {/*                key={item.id}*/}
                        {/*                className="p-4 border border-gray-300 cursor-pointer"*/}
                        {/*                onMouseEnter={() => setHoveredItem(item.id)}*/}
                        {/*            >*/}
                        {/*                {item.title}*/}
                        {/*            </li>*/}
                        {/*    </ul>*/}
                        {/*    <div className="relative w-full">*/}
                        {/*            <div*/}
                        {/*                key={item.id}*/}
                        {/*                className={`absolute top-0 left-0 transition-transform transform ${*/}
                        {/*                    hoveredItem === item.id ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'*/}
                        {/*                }`}*/}
                        {/*            >*/}
                        {/*                <div className="p-4 border border-gray-300  shadow-lg">*/}
                        {/*                    {item.content}*/}
                        {/*                </div>*/}
                        {/*            </div>*/}

                        {/*    </div>*/}
                        {/*</div>*/}


                        {/*<div className="flex justify-center w-1/2 mx-[30%]">*/}
                        {/*    <ul className="flex flex-col justify-center items-start mx-auto text-center">*/}
                        {/*        <li className="px-6 py-3">*/}
                        {/*            <a className="text-black text-2xl cursor-pointer hover:text-primary font-serif">*/}
                        {/*                {item}*/}
                        {/*            </a>*/}
                        {/*        </li>*/}

                        {/*    </ul>*/}
                        {/*    <ul className="flex flex-col justify-center items-start mx-auto text-center">*/}
                        {/*        <li className="px-6 py-3">*/}

                        {/*                <li className="">*/}
                        {/*                    <a className="w-[150px]">Ihr Termin bei uns</a>*/}
                        {/*                </li>*/}

                        {/*        </li>*/}
                        {/*    </ul>*/}

                        {/*</div>*/}


                    </NavbarMenuItem>

            </NavbarMenu>
        </Navbar>
    );
};
