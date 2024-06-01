'use client'
import { useState } from 'react';

const MainMenu: React.FC = () => {
    const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
    const [menuKey, setMenuKey] = useState<number>(0);

    const menus: { [key: string]: string[] } = {
        "Institut": ['Ihr Termin bei uns', 'Unser Team', 'Kundenbewertungen', 'Philosophie', 'Impressionen', 'Gutscheine', 'Kontakt'],
        "Gesicht": [
            'Hautzustände',
            'Klassische Gesichtsbehandlung',
            'Facials für den Mann',
        'HydraFacial',
        'Microneedling',
        'Microdermabrasion',
        'Reviderm PCA Peeling',
        'Peeling Velours',
        'LDM Ultraschallbehandlung',
        'Endermologie Gesicht',
        'Dauerhafte Haarentfernung Gesicht',
        ],
        "Körper": ['LPG® Endermologie (Anti-Cellulite)',
            'Dauerhafte Haarentfernung mit IPL',
            'Haarentfernung / Sugaring',
            'Manicure & Pedicure',
            'Spraytanning'
        ],
        "Make-up": [
            'Permanent Make-up',
            'Wimpern & Brauen',
        ],
        "Produkte": [
            'REVIDERM',
            'Susanne Kaufmann',
            'Valmont',
            'LPG®',
            'Yves Saint Laurent',
            'Onlineshop',
        ],
    };

    const handleMenuHover = (menu: string) => {
        setSelectedMenu(null); // Temporarily unset the selected menu to trigger unmount
        setTimeout(() => {
            setSelectedMenu(menu);
            setMenuKey(prevKey => prevKey + 1); // Change key to force re-render
        }, 50); // Small delay to allow unmount
    };

    return (
        <div className="flex justify-center items-center">
            <div className="flex w-full mx-[30%]  p-4">
                <ul className="flex flex-col justify-start items-start mx-auto text-center">
                    {Object.keys(menus).map((menu) => (
                        <li className="px-6 py-2"
                            key={menu}>
                            <a className={`text-black text-2xl cursor-pointer font-serif ${selectedMenu === menu ? 'text-primary' : 'text-black'}`}
                               onMouseEnter={() => handleMenuHover(menu)}>
                                {menu}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="w-96 p-5 overflow-y-auto">
                    {selectedMenu && (
                        <ul className="flex flex-col justify-start items-start mx-auto text-center">
                            {menus[selectedMenu].map((submenuItem, index) => (
                                <li key={index}
                                    className="mb-2 animate-appearance-in">
                                    <a className="text-black font-light hover:text-primary cursor-pointer text-sm">
                                        {submenuItem}
                                    </a>

                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MainMenu;
