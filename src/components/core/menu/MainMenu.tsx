import Lenis from "@studio-freight/lenis";
import {useLenis} from "@studio-freight/react-lenis";
import Link from "next/link";


const MainMenu: React.FC<{ onMenuItemClick: () => void }> = ({ onMenuItemClick }) => {
    let lenis = useLenis();

    const handleScrollTo = (lenis: Lenis | undefined, sectionId: string) => {


        const section = document.getElementById(sectionId);
        if (section && lenis) {

            lenis.scrollTo(section, {
                lerp: 0.05,
            });

            onMenuItemClick();
        }
    };

    return (
        <div className="flex justify-center items-center z-50">
            <div className="flex w-full mx-[30%]  p-4">
                <ul className="flex flex-col justify-start items-start text-center">
                    <li className="px-6 py-2">
                        <a className={`text-black text-2xl cursor-pointer font-serif hover:text-primary`}>
                            Ihr Termin bei uns
                        </a>
                    </li>
                    <li className="px-6 py-2" onClick={() => onMenuItemClick()}>
                        <Link href={'/about'} className={`text-black text-2xl cursor-pointer font-serif hover:text-primary`}>
                            Über uns
                        </Link>
                    </li>
                    <li className="px-6 py-2" onClick={() => onMenuItemClick()}>
                        <Link href={'/services'} className={`text-black text-2xl cursor-pointer font-serif hover:text-primary`}>
                            Dienstleistungen
                        </Link>
                    </li>
                    <li className="px-6 py-2" onClick={() => handleScrollTo(lenis, 'beauty-packages')}>
                        <a className={`text-black text-2xl cursor-pointer font-serif hover:text-primary`}>
                            Beauty Pakete
                        </a>
                    </li>
                    <li className="px-6 py-2" onClick={() => onMenuItemClick()}>
                        <Link href={'/testimonials'} className={`text-black text-2xl cursor-pointer font-serif hover:text-primary`}>
                            Kundenmeinungen
                        </Link>
                    </li>
                    <li className="px-6 py-2" onClick={() => handleScrollTo(lenis, 'footer')}>
                        <a className={`text-black text-2xl cursor-pointer font-serif hover:text-primary`}>
                            Kontakt
                        </a>
                    </li>

                </ul>


                {/*<ul className="flex flex-col justify-start items-start text-center">*/}
                {/*    {Object.keys(menus).map((menu) => (*/}
                {/*        <li className="px-6 py-2"*/}
                {/*            key={menu}>*/}
                {/*            <a className={`text-black text-2xl cursor-pointer font-serif ${selectedMenu === menu ? 'text-primary' : 'text-black'}`}*/}
                {/*               onMouseEnter={() => handleMenuHover(menu)}>*/}
                {/*                {menu}*/}
                {/*            </a>*/}
                {/*        </li>*/}
                {/*    ))}*/}
                {/*</ul>*/}
                {/*<div className="w-96 p-5 overflow-y-auto">*/}
                {/*    {selectedMenu && (*/}
                {/*        <ul className="flex flex-col justify-start items-start mx-auto text-center">*/}
                {/*            {menus[selectedMenu].map((submenuItem, index) => (*/}
                {/*                <li key={index}*/}
                {/*                    className="mb-2 animate-appearance-in">*/}
                {/*                    <a className="text-black font-light hover:text-primary cursor-pointer text-sm">*/}
                {/*                        {submenuItem}*/}
                {/*                    </a>*/}

                {/*                </li>*/}
                {/*            ))}*/}
                {/*        </ul>*/}
                {/*    )}*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default MainMenu;
