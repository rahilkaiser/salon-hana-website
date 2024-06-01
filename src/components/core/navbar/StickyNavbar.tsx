import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
} from "@nextui-org/react";
import MainMenu from "@/components/core/menu/MainMenu";
import { motion } from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import SmoothScrollContainer from "@/components/core/smooth-scrollbar-container/SmoothScrollContainer";
import {MenuToggleComponent} from "@/components/core/navbar/components/MenuToggleComponent";
import {NavbarCTAButton} from "@/components/core/navbar/components/NavbarCTAButton";

export const StickyNavbar = () => {

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
        <Navbar isBordered maxWidth="full" className="" isBlurred={true}>
            <NavbarContent className="sm:flex gap-4" justify="start">
                <MenuToggleComponent/>
            </NavbarContent>

            <NavbarContent className="gap-4" justify="center">
                <NavbarBrand className="cursor-pointer" style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg" style={{margin: "auto"}}>
                        <text x="50%" y="40%" dominantBaseline="middle" textAnchor="middle" fontFamily="Noto Serif"
                              fontSize="25" fill="black" fontWeight="500">Salon Hana
                        </text>
                        <line x1="30" y1="52" x2="170" y2="52" stroke="black" strokeWidth="2"/>
                        <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fontFamily="Noto Serif"
                              fontSize="14" fill="black" fontWeight="200">Berlin
                        </text>
                    </svg>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <NavbarCTAButton/>
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
