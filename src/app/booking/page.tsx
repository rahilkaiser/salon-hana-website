"use client"
import { motion } from "framer-motion";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {Button, Calendar, Divider} from "@nextui-org/react";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {faArrowLeft, faArrowRight, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Listbox, ListboxItem} from "@nextui-org/react";
import {useRouter} from "next/navigation";
import {useServiceStore} from "@/store/useServiceStore";

export default function Booking() {
    const [selectedKeys, setSelectedKeys] = useState(new Set(["erster_freier_mitarbeiter"]));
    const [selectedKeysTime, setSelectedKeysTime] = useState(new Set(["10:00"]));
    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );
    const selectedValueTime = useMemo(
        () => Array.from(selectedKeysTime).join(", ").replaceAll("_", " "),
        [selectedKeysTime]
    );

    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        in: { opacity: 1, y: 0 },
        out: { opacity: 0, y: -20 }
    };

    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.5
    };

    const scrollRef = useRef<HTMLDivElement>(null);

    const handleWheel = useCallback((event: WheelEvent) => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop += event.deltaY;
            event.preventDefault();
            event.stopPropagation();
        }
    }, []);

    const addWheelListener = useCallback(() => {
        scrollRef.current?.addEventListener('wheel', handleWheel);
    }, [handleWheel]);

    const removeWheelListener = useCallback(() => {
        scrollRef.current?.removeEventListener('wheel', handleWheel);
    }, [handleWheel]);

    const router = useRouter();


    const {
        total,
        qty,
        cart,
        removeService,
    } = useServiceStore();


    useEffect(() => {
        return () => removeWheelListener();
    }, [removeWheelListener]);


    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}>
            <div className="ml-20 my-8">
                <button className="cursor-pointer" onClick={() => {
                    router.back();
                }}>
                    <FontAwesomeIcon icon={faArrowLeft} size="1x" className="text-lg"/>
                    <span className="px-2">Zurück</span>
                </button>

            </div>
            <div className="max-w-7xl mx-auto px-16 sm:px-8 ">
                <div className="flex flex-row justify-evenly w-full p-4 ">
                    <div className="flex flex-col items-start justify-start w-1/4">
                        <span className="py-2 font-semibold">Mitarbeiter wählen</span>
                        <div className="py-2 w-full">
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button
                                        variant="bordered"
                                        className="capitalize w-full justify-start text-md p-2 text-center rounded-none"
                                        color={'primary'}
                                    >
                                        <FontAwesomeIcon icon={faUser}/>
                                        {selectedValue}
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu
                                    aria-label="Single selection example"
                                    variant="light"
                                    disallowEmptySelection
                                    selectionMode="single"
                                    selectedKeys={selectedKeys}
                                    onSelectionChange={(key) => {
                                        setSelectedKeys(key.valueOf() as Set<string>)

                                    }}
                                >
                                    <DropdownItem key="erster_freier_mitarbeiter">Erster freier
                                        Mitarbeiter</DropdownItem>
                                    <DropdownItem key="hanadi">Hanadi</DropdownItem>
                                    <DropdownItem key="katja">Katja</DropdownItem>
                                    <DropdownItem key="mariam">Mariam</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                        <Divider></Divider>
                        <span className="py-2 font-semibold">Datum und Uhrzeit für den Termin wählen:</span>
                        <div className="py-2 w-full ">
                            <Calendar
                                aria-label="Date (Page Behaviour)"
                                pageBehavior="visible"
                            />
                        </div>
                        <div ref={scrollRef}
                             onMouseEnter={addWheelListener}
                             onMouseLeave={removeWheelListener}
                             className="flex flex-col gap-1 overflow-y-auto max-h-80 overflow-x-hidden">
                            <div
                                className="w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100 ">
                                {["10:00", "10:20", "10:40", "11:00", "11:20", "11:40", "12:00", "12:20", "12:40", "13:00", "13:20", "13:40"].map(time => (
                                    <Listbox key={time}
                                             aria-label="Time selection"
                                             disallowEmptySelection
                                             selectionMode="single"
                                             selectedKeys={selectedKeysTime}
                                             onSelectionChange={(keys => {
                                                 setSelectedKeysTime(keys.valueOf() as Set<string>)
                                             })}>
                                        <ListboxItem key={time} variant={"flat"}>
                                            <div
                                                className={`flex items-center justify-center w-full py-2 rounded 
                                                ${selectedKeysTime.has(time) ? 'bg-primary text-white' : 'bg-white text-gray-900'}`}>
                                                {time}
                                            </div>
                                        </ListboxItem>
                                    </Listbox>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full font-semibold pl-8 items-stretch">
                        <span className="mb-8">Ausgewählte Services</span>
                        <Divider></Divider>
                        {qty > 0 ?
                            <div
                                className="w-full">
                            {cart.map((item) => (
                                <div key={item.title}
                                     className="flex flex-row justify-between items-center bg-white shadow-md rounded-lg p-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                                        <div className="flex flex-row">
                                            <p className="text-gray-600 mr-4">{item.time} Min.</p>
                                            <p className="text-gray-800 font-semibold cursor-pointer">Details
                                                anzeigen</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            removeService(item);
                                        }}
                                        className="text-red-500 hover:text-red-700 font-semibold p-2 rounded-full">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div> :
                        <div className="flex items-center justify-center w-full">
                            keine Services ausgewählt
                        </div>

                        }
                    </div>

                </div>
            </div>
        </motion.div>
    );
}