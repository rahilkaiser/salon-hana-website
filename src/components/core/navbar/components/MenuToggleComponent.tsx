import { NavbarItem, NavbarMenuToggle } from "@nextui-org/react";
import React from "react";

interface MenuToggleComponentProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

export const MenuToggleComponent: React.FC<MenuToggleComponentProps> = ({ isMenuOpen, toggleMenu }) => {
    return (
        <>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                onClick={toggleMenu}
            />
            <NavbarItem>
                MENU
            </NavbarItem>
        </>
    );
};
