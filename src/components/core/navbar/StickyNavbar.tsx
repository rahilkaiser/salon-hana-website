
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
        <Navbar isBordered maxWidth="full" className="overflow-hidden overscroll-none mx-auto" isBlurred={true} >
            <NavbarContent justify="start" className="justify-between flex">
                <MenuToggleComponent/>
                {/*<button className="font-bold text-primary">Über uns</button>*/}
                {/*<button className="font-bold text-primary">Leistungen</button>*/}
                {/*<button className="font-bold text-primary">Beauty Pakete</button>*/}
                {/*<button className="font-bold text-primary">Rezensionen</button>*/}
                {/*<button className="font-bold text-primary">Kontakt</button>*/}
            </NavbarContent>

            <NavbarContent className="" justify="center">
                <NavbarBrand className="cursor-pointer flex justify-center w-full">
                    <svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style={{ maxWidth: '100%', height: 'auto', margin: "auto" }}>
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
                className="text-black pt-20 overflow-x-hidden overflow-y-hidden">
                <NavbarMenuItem>
                    <MainMenu></MainMenu>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
};
