"use client"
import {useServiceStore} from "@/store/useServiceStore";
import {AnimatePresence, motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import Link from "next/link";
import { usePathname , useRouter} from 'next/navigation'


export const CartInfo = () => {
    const router = useRouter();
    const pathname = usePathname()

    const {
        total,
        qty
    } = useServiceStore();

    const [isVisible, setIsVisible] = useState(qty > 0);

    useEffect(() => {

        if (qty > 0 && pathname !== '/booking') {
            setIsVisible(true);
        } else {
            setTimeout(() => setIsVisible(false), 100); // Delay to allow exit animation
        }
    }, [qty]);


    const buttonVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1},
        hover: {
            transition: {duration: 0.3}, // smoother transition
            backgroundColor: "#db2777",
            color: "#ffffff",
        }
    };

    return (
        <div className="inset-x-0 fixed bottom-10 z-10 flex flex-row justify-end mx-auto my-auto">
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 20}}
                        transition={{duration: 0.5}}
                        className="flex flex-row items-center px-4 py-2 rounded-lg shadow-md backdrop-blur bg-opacity-30 bg-white"
                    >
                        <div className="pr-4 ">
                            <span className="font-bold lg">{qty}</span>
                            <span className="text-lg"> Services ausgewählt: </span>
                            <span className="font-bold text-lg">{total} €</span>
                        </div>

                        <Link href={'/booking'}>
                            <motion.button
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                variants={buttonVariants}
                                className="px-2 py-2 sm:px-8 sm:py-3 bg-primary text-white text-lg rounded capitalize"
                            >
                                <FontAwesomeIcon icon={faCalendar} className="pr-2"/>
                                <span className="hidden sm:inline">Termin Buchen</span>
                            </motion.button>
                        </Link>
                    </motion.div>

                )}
            </AnimatePresence>
        </div>
    );
};
