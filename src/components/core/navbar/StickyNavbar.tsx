"use client"
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
} from "@nextui-org/react";
import MainMenu from "@/components/core/menu/MainMenu";
import SmoothScrollContainer from "@/components/core/smooth-scrollbar-container/SmoothScrollContainer";
import {MenuToggleComponent} from "@/components/core/navbar/components/MenuToggleComponent";
import {NavbarCTAButton} from "@/components/core/navbar/components/NavbarCTAButton";
import {useState} from "react";
import Link from "next/link";
import {useServiceStore} from "@/store/useServiceStore";
import {usePathname} from "next/navigation";

export const StickyNavbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const pathName = usePathname();
    const {
        total,
        qty
    } = useServiceStore();

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleMenuClick = () => {
        setMenuOpen(false);
    };

    return (
        <Navbar isBordered maxWidth="full" className="overflow-hidden overscroll-none mx-auto" isBlurred={true}
                isMenuOpen={isMenuOpen}>
            <NavbarContent justify="start" className="justify-between flex">
                <MenuToggleComponent isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
            </NavbarContent>

            <NavbarContent className="" justify="center">
                <Link href={'/'} prefetch>
                    <NavbarBrand className="cursor-pointer flex justify-center w-full">
                        <svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg"
                             preserveAspectRatio="xMidYMid meet"
                             style={{maxWidth: '100%', height: 'auto', margin: "auto"}}>
                            <text x="50%" y="40%" dominantBaseline="middle" textAnchor="middle" fontFamily="Noto Serif"
                                  fontSize="25" fill="black" fontWeight="500">Salon Hana
                            </text>
                            <line x1="30" y1="52" x2="170" y2="52" stroke="black" strokeWidth="2"/>
                            <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fontFamily="Noto Serif"
                                  fontSize="14" fill="black" fontWeight="200">Berlin
                            </text>
                        </svg>
                    </NavbarBrand>
                </Link>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    {(pathName !== "/services" && pathName !== "/booking" && pathName !== "/checkout") &&
                        <NavbarCTAButton/>}

                </NavbarItem>
            </NavbarContent>

            <NavbarMenu
                className="text-black pt-20 overflow-x-hidden overflow-y-hidden">
                <NavbarMenuItem>
                    <MainMenu onMenuItemClick={handleMenuClick}/>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
};
