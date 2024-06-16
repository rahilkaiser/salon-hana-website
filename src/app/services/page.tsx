"use client"

import {Card, CardFooter, Image, Button, Accordion} from "@nextui-org/react";
import {motion} from "framer-motion";
import {SetStateAction, useState} from "react";
import {Divider} from "@nextui-org/divider";
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useCheckboxGroupItem} from "@react-aria/checkbox";

interface Service {
    name: string;
    image: string;
}

// Define a type for the sidebar contents object
interface SidebarContents {
    [key: string]: string[];
}

interface ServiceDetail {
    title?: string;
    description?: string;
    price?: string;
    time?: string;
    isSelected?: boolean;
    group?: ServiceDetail[];
}

interface DetailedServicesMap {
    [key: string]: ServiceDetail[];
}

export default function Services() {
    const [selected, setSelected] = useState('Alle');
    const [selectedItem, setSelectedItem] = useState<string>('Kosmetische Zahnaufhellung')

    const services: Service[] = [
        {
            name: "Alle",
            image: "https://nextui.org/images/hero-card.jpeg"
        },
        {
            name: "Haarentfernung",
            image: "https://nextui.org/images/hero-card.jpeg"
        },
        {
            name: "Gesicht",
            image: "https://nextui.org/images/hero-card.jpeg"
        },
        {
            name: "medizinisch & zahnmedizinisch",
            image: "https://nextui.org/images/hero-card.jpeg"
        }
    ];

    const sidebarContents: SidebarContents = {
        'Alle':
            [
                'Kosmetische Zahnaufhellung',
                'Damen - Sugaring',
                'Gesichtsbehandlungen',
                'Augenbrauen & Wimpernbehandlungen',
                'Diodenlaser - Dauerhafte Haarentfernung',
                'Zahnaufhellung'
            ],
        'Haarentfernung':
            [
                'Damen - Sugaring',
                'Diodenlaser - Dauerhafte Haarentfernung'
            ],
        'Gesicht': [
            'Gesichtsbehandlungen',
            'Augenbrauen & Wimpernbehandlungen'
        ],
        'medizinisch & zahnmedizinisch': [
            'Kosmetische Zahnaufhellung',
            'Zahnaufhellung'
        ]
    };

    const detailedServices: DetailedServicesMap = {
        "Gesichtsbehandlungen": [
            {
                title: "Gesichtsbehandlung - Aquafacial",
                description: "A quick and effective hair removal service using natural sugar paste.",
                price: "95",
                isSelected: true,
                time: "30"
            },
            {
                title: "Gesichtsbehandlung - SkinScrubber",
                description: "A quick and effective hair removal service using natural sugar paste.",
                price: "80",
                isSelected: true,
                time: "45"
            },
            {
                title: "Gesichtsbehandlung - BB Glow",
                description: "A quick and effective hair removal service using natural sugar paste.",
                price: "ab 40",
                time: "30 Min. - 1 Std.",
                group: [
                    {
                        title: "BB Glow - nur Augenringe",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: "80",
                        isSelected: false,
                        time: "30 Min."
                    },
                    {
                        title: "BB Glow",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: "90",
                        isSelected: false,
                        time: "1 Std."
                    },
                ]
            },
            {
                title: "Gesichtsbehandlung - Microneedling",
                description: "A quick and effective hair removal service using natural sugar paste.",
                price: "99",
                isSelected: true,
                time: "1 Std."
            },
        ],
        "Kosmetische Zahnaufhellung": [
            {
                title: "Zahnbleaching",
                description: "A quick and effective hair removal service using natural sugar paste.",
                price: "125",
                isSelected: true,
                time: "45"
            },
        ],

        "Augenbrauen & Wimpernbehandlungen": [
            {
                title: "Wimpernlifting & Färben",
                description: "A quick and effective hair removal service using natural sugar paste.",
                price: "60",
                isSelected: false,
                time: "1 Std."
            },
            {
                title: "Augenbrauenlifting & Färben",
                description: "A quick and effective hair removal service using natural sugar paste.",
                price: "55",
                isSelected: false,
                time: "1 Std."
            },
            {
                title: "Henna Brows",
                description: "A quick and effective hair removal service using natural sugar paste.",
                price: "55",
                isSelected: false,
                time: "30 Min."
            },
            {
                title: "Wimpern färben",
                description: "A quick and effective hair removal service using natural sugar paste.",
                price: "15",
                isSelected: false,
                time: "15 Min."
            },            {
                title: "Augenbrauen färben",
                description: "A quick and effective hair removal service using natural sugar paste.",
                price: "15",
                isSelected: false,
                time: "15 Min."
            },
            {
                title: "Augenbrauen zupfen",
                description: "A quick and effective hair removal service using natural sugar paste.",
                price: "15",
                isSelected: false,
                time: "15 Min."
            },
        ],

        "Diodenlaser - Dauerhafte Haarentfernung": [
            {
                title: "Dauerhafte Haarentfernung - Gesicht inklusive Hals",
                description: "A quick and effective hair removal service using natural sugar paste.",
                price: "40",
                isSelected: false,
                time: "15 Min."
            },          {
                title: "Dauerhafte Haarentfernung - Oberlippe und Kinn",
                description: "A quick and effective hair removal service using natural sugar paste.",
                price: "25",
                isSelected: false,
                time: "15 Min."
            },          {
                title: "Dauerhafte Haarentfernung - Rücken komplett",
                description: "A quick and effective hair removal service using natural sugar paste.",
                price: "50",
                isSelected: false,
                time: "30 Min."
            },          {
                title: "Dauerhafte Haarentfernung - Achseln",
                description: "A quick and effective hair removal service using natural sugar paste.",
                price: "45",
                isSelected: false,
                time: "25 Min."
            },          {
                title: "Dauerhafte Haarentfernung - Arme komplett inklusive Achseln",
                description: "A quick and effective hair removal service using natural sugar paste.",
                price: "70",
                isSelected: false,
                time: "40 Min."
            },          {
                title: "Dauerhafte Haarentfernung - Bauch & Brust",
                description: "A quick and effective hair removal service using natural sugar paste.",
                price: "55",
                isSelected: false,
                time: "30 Min."
            },          {
                title: "Dauerhafte Haarentfernung - Beine komplett",
                description: "A quick and effective hair removal service using natural sugar paste.",
                price: "75",
                isSelected: false,
                time: "40 Min."
            },          {
                title: "Dauerhafte Haarentfernung - Oberschenkel",
                description: "A quick and effective hair removal service using natural sugar paste.",
                price: "40",
                isSelected: false,
                time: "20 Min."
            },          {
                title: "Dauerhafte Haarentfernung - Unterschenkel",
                description: "A quick and effective hair removal service using natural sugar paste.",
                price: "40",
                isSelected: false,
                time: "20 Min."
            },          {
                title: "Dauerhafte Haarentfernung - Intim",
                description: "A quick and effective hair removal service using natural sugar paste.",
                price: "70",
                isSelected: false,
                time: "30 Min."
            },          {
                title: "Dauerhafte Haarentfernung - Ganzkörper",
                description: "A quick and effective hair removal service using natural sugar paste.",
                price: "180",
                isSelected: false,
                time: "1 Std."
            },
        ],
        "Zahnaufhellung":[
            {
                title: "Aufrischung innerhalb von 3 Monaten",
                description: "A quick and effective hair removal service using natural sugar paste.",
                price: "55",
                isSelected: false,
                time: "30 Min."
            },
            {
                title: "komplett",
                description: "A quick and effective hair removal service using natural sugar paste.",
                price: "125",
                isSelected: false,
                time: "1 Std."
            },
        ],

        "Damen - Sugaring": [
            {
                title: "Damen Sugaring - Oberlippe & Kinn",
                description: "A quick and effective hair removal service using natural sugar paste.",
                price: "20",
                isSelected: false,
                time: "15"
            },
            {
                title: "Damen Sugaring - Arme komplett",
                description: "An extended sugaring session that includes skin conditioning treatments.",
                price: "40",
                isSelected: false,
                time: "25"
            },
            {
                title: "Damen Sugaring - Unterschenkel",
                description: "An extended sugaring session that includes skin conditioning treatments.",
                price: "38",
                isSelected: false,
                time: "25"
            },
            {
                title: "Damen Sugaring - Oberschenkel",
                description: "An extended sugaring session that includes skin conditioning treatments.",
                price: "38",
                isSelected: false,
                time: "30"
            },
            {
                title: "Damen Sugaring - Beine komplett",
                description: "An extended sugaring session that includes skin conditioning treatments.",
                price: "38",
                isSelected: false,
                time: "45"
            },
            {
                title: "Damen Sugaring - Achseln",
                description: "An extended sugaring session that includes skin conditioning treatments.",
                price: "65",
                isSelected: false,
                time: "15"
            },
            {
                title: "Damen Sugaring - Bikini & Achseln",
                description: "An extended sugaring session that includes skin conditioning treatments.",
                price: "24",
                isSelected: false,
                time: "40"
            },
            {
                title: "Damen Sugaring - Intim",
                description: "An extended sugaring session that includes skin conditioning treatments.",
                price: "35",
                isSelected: false,
                time: "30"
            },
            {
                title: "Damen Sugaring - Bikini",
                description: "An extended sugaring session that includes skin conditioning treatments.",
                price: "38",
                isSelected: false,
                time: "30"
            }
        ],
        // Add other services similarly
    };

    const cardVariants = {
        selected: {
            scale: 1.1,
            transition: {type: 'spring', stiffness: 300, damping: 30},
        },
        unselected: {
            scale: 0.95,
            transition: {type: 'spring', stiffness: 300, damping: 30}
        }
    };

    const itemVariants = {
        selected: {
            backgroundColor: "#A67097", // This corresponds to Tailwind's 'bg-indigo-500'
            color: "#ffffff",
            transition: {type: 'smooth', stiffness: 500, damping: 30},
        },
        unselected: {
            backgroundColor: "#ffffff",
            color: "#000000",
            transition: {type: 'smooth', stiffness: 500, damping: 30,},
        }
    };

    const [openItemId, setOpenItemId] = useState<string | undefined>(undefined);
    const toggleItem = (id: string | undefined) => {
        if (openItemId === id) {
            setOpenItemId(undefined); // Close it if it's already open
        } else {
            setOpenItemId(id); // Open the clicked one
        }
    };

    const selectService = (name: string) => {
        setSelected(name);
        setSelectedItem(sidebarContents[name][0]);
    };

    return (
        <div className="w-full py-8 text-start bg-accent sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <h1>ALLE SERVICES</h1>
                <div className="bg-accent p-4 flex flex-row space-x-2">
                    {services.map(service => (
                        <motion.div
                            key={service.name}
                            className={`flex-1 max-w-[12rem]`}
                            variants={cardVariants}
                            animate={selected === service.name ? 'selected' : 'unselected'}>
                            <Card
                                isPressable
                                onPress={() => selectService(service.name)}
                                isFooterBlurred
                                radius="lg"
                                className={`border-none shadow-xl ${selected === service.name ? 'ring-2 ring-primary' : ''}`}
                            >
                                <Image
                                    alt={service.name}
                                    className="object-cover"
                                    height={200}
                                    width={200}
                                    src={service.image}
                                />
                                <CardFooter
                                    className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                    <p className="text-white/80 text-center w-full">{service.name}</p>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
                <div className="py-16">


                    <div className="flex">
                        <div className="w-1/4">
                            {sidebarContents[selected]?.map((item, index) => (
                                <motion.div key={index}
                                            className="p-2 cursor-pointer"
                                            variants={itemVariants}
                                            animate={selectedItem === item ? 'selected' : 'unselected'}
                                            onClick={() => setSelectedItem(item)}>
                                    {item}
                                    <Divider></Divider>
                                </motion.div>
                            ))}
                        </div>
                        <div className="w-3/4 px-4">

                            {detailedServices[selectedItem]?.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-4 my-2 rounded-lg shadow-md"
                                >
                                    {!item.group ?
                                        <div className="flex flex-row space-x-2 justify-between items-center">
                                            <div
                                            >
                                                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                                                <div className={'flex flex-row space-x-2'}>
                                                    <p className="text-gray-600">{item.time} Min.</p>
                                                    <p className="text-gray-800 font-semibold cursor-pointer">Details
                                                        anzeigen</p>
                                                </div>

                                            </div>
                                            <div className="flex flex-row space-x-2 items-center">
                                                <p className="text-gray-800 font-semibold">{item.price} €</p>
                                                {!item.isSelected ? <button
                                                    className=" w-24 m-3 text-pink-600 font-semibold border-pink-600 border rounded-lg py-2">
                                                    Auswählen
                                                </button> : <button
                                                    className=" m-3 p-1 text-green-600 font-semibold border-green-600 border rounded-lg py-2">
                                                    Ausgewählt
                                                </button>}
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <div className="flex flex-row space-x-2 justify-between items-center cursor-pointer" onClick={() => toggleItem(item.title)}>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                                                    <div className={'flex flex-row space-x-2'}>
                                                        <p className="text-gray-600">{item.time} Min.</p>
                                                        <p className="text-gray-800 font-semibold cursor-pointer">Details
                                                            anzeigen</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row space-x-2 items-center">
                                                    <p className="text-gray-800 font-semibold cursor-pointer">{item.price} €</p>
                                                    <button
                                                        className="px-4 py-2 text-gray-600 rounded focus:outline-none">
                                                        {openItemId === item.title ?
                                                            <FontAwesomeIcon icon={faChevronUp}/> :
                                                            <FontAwesomeIcon icon={faChevronDown}/>}
                                                    </button>
                                                </div>
                                            </div>

                                            {openItemId === item.title && (
                                                item.group.map( groupItem  => (
                                                    <motion.div
                                                        initial={
                                                            {
                                                                opacity: 0,
                                                                height:18
                                                            }
                                                        }
                                                        animate={
                                                            {
                                                                opacity: 1,
                                                                height: 'auto'
                                                            }
                                                        }

                                                        key={groupItem.title} className="flex flex-row space-x-2 justify-between items-center">
                                                        <div className="p-4 ">
                                                            <h3 className="text-xl font-bold text-gray-800">{groupItem.title}</h3>
                                                            <div className={'flex flex-row space-x-2'}>
                                                                <p className="text-gray-600">{groupItem.time}</p>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-row space-x-2 items-center">
                                                            <p className="text-gray-800 font-semibold">{groupItem.price} €</p>
                                                            {!groupItem.isSelected ? <button
                                                                className=" w-24 m-3 text-pink-600 font-semibold border-pink-600 border rounded-lg py-2">
                                                                Auswählen
                                                            </button> : <button
                                                                className=" m-3 p-1 text-green-600 font-semibold border-green-600 border rounded-lg py-2">
                                                                Ausgewählt
                                                            </button>}
                                                        </div>
                                                    </motion.div>
                                                ))
                                            )
                                            }
                                        </div>

                                    }


                                    {/*<div className="space-y-2 w-full max-w-md mx-auto mt-10">*/}
                                    {/*    {item.group.map(itemGroup => (*/}
                                    {/*        <div key={item.title} className="border rounded-lg overflow-hidden">*/}
                                    {/*            <button*/}
                                    {/*                className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 focus:outline-none"*/}
                                    {/*                onClick={() => toggleItem(item.title)}*/}
                                    {/*            >*/}
                                    {/*                {item.title}*/}
                                    {/*            </button>*/}
                                    {/*            {openItemId === item.title && (*/}
                                    {/*                <div className="p-4 bg-white">*/}
                                    {/*                    Test*/}
                                    {/*                </div>*/}
                                    {/*            )}*/}
                                    {/*        </div>*/}
                                    {/*    ))}*/}
                                    {/*</div>*/}


                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}
