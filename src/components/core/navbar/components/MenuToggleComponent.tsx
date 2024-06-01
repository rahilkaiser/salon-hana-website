'use client'

import {NavbarItem, NavbarMenuToggle} from "@nextui-org/react";
import React from "react";

export const MenuToggleComponent = () => {
    let isMenuOpen = React.useState(false);

    return (
        <><NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}/><NavbarItem>
            MENU
        </NavbarItem></>
    );
};
