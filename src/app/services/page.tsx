"use client"

import {Card, CardFooter, Image, Button, Accordion, Divider} from "@nextui-org/react";
import {motion} from "framer-motion";
import {useState} from "react";
import {CATEGORIES, Service, ServiceMap, serviceMap, SUBCATEGORIES, SubCategory} from "@/components/data/ServiceData";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {useServiceStore} from "@/store/useServiceStore";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function Services() {

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

    // const [selectedCategory, setSelectedCategory] = useState<ServiceMap>(
    //     completeServiceMap[0]
    // );
    // const [selectedSubcategory, setSelectedSubcategory] = useState<SubCategory>(
    //     completeServiceMap[0].sub[0]
    // );

    const [openItemId, setOpenItemId] = useState<string | undefined>(undefined);

    // const addService = useServiceStore((state) => state.addService);
    const {
        total,
        qty,
        selectedCategory,
        selectedSubCategory,
        serviceMap,
        addService,
        removeService,
        setSelectedSubcategory,
        setSelectedCategory,
    } = useServiceStore();

    const toggleItem = (id: string | undefined) => {
        if (openItemId === id) {
            setOpenItemId(undefined);
        } else {
            setOpenItemId(id);
        }
    };


    const selectCategory = (category: ServiceMap) => {
        setSelectedCategory(category);
        // const newCategory = completeServiceMap.find(c => c.name === categoryName);
        if (category) {
            setSelectedSubcategory(category.sub[0]);
        }
    };


    return (
        <div className="w-full py-8 text-start bg-accent sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <h1>ALLE SERVICES</h1>
                <div
                    className="bg-accent p-4 flex md:flex-row flex-col md:space-x-2 md:space-y-0 space-y-2 items-center">
                    {serviceMap.map(category => (
                        <motion.div
                            key={category.name}
                            className={`relative flex-1 max-w-[12rem]`}
                            variants={cardVariants}
                            animate={selectedCategory === category ? 'selected' : 'unselected'}>
                            <Card
                                isPressable
                                onPress={() => selectCategory(category)}
                                isFooterBlurred
                                radius="lg"
                                className={`border-none shadow-xl ${selectedCategory === category ? 'ring-2 ring-primary' : ''}`}
                            >
                                <Image
                                    alt={category.name}
                                    className="object-cover"
                                    height={200}
                                    width={200}
                                    src={category.image}
                                />
                                <CardFooter
                                    className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                    <p className="text-white/80 text-center w-full">{category.name}</p>
                                </CardFooter>
                                {(category.isSelected && category.name != 'Alle') && (
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        className="absolute top-0 right-0 m-2 text-primary text-2xl z-50"
                                    />
                                )}
                            </Card>
                        </motion.div>
                    ))}
                </div>
                <div className="py-16">
                    <div className="flex flex-col md:flex-row ">
                        <div className="md:w-1/4">
                            {
                                selectedCategory.sub.map(
                                    (sub, index) => (
                                        <motion.div key={index}
                                                    className="p-2 cursor-pointer relative "
                                                    variants={itemVariants}
                                                    animate={selectedSubCategory === sub ? 'selected' : 'unselected'}
                                                    onClick={() => setSelectedSubcategory(sub)}>
                                            {sub.name}
                                            {sub.isSelected && (
                                                <FontAwesomeIcon icon={faCheckCircle} className="text-pink-600 text-xl absolute right-2" />
                                            )}
                                            <Divider></Divider>
                                        </motion.div>
                                    )
                                )}
                        </div>
                        <div className="md:w-3/4 px-4 py-4 md:py-0">
                            {selectedSubCategory.services.map((item, index) => (
                                <div key={index}
                                     className="bg-white p-4 my-2 rounded-lg shadow-md">
                                    {!item.group ?
                                        <div className="flex flex-row space-x-2 justify-between items-center">
                                            <div>
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
                                                    onClick={() => {
                                                        addService(item);
                                                    }}
                                                    className=" w-24 m-3 text-pink-600 font-semibold border-pink-600 border rounded-lg py-2">
                                                    Auswählen
                                                </button> : <button
                                                    onClick={() => {
                                                        removeService(item);
                                                    }}
                                                    className=" m-3 p-1 text-green-600 font-semibold border-green-600 border rounded-lg py-2">
                                                    Ausgewählt
                                                </button>}
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <div
                                                className="flex flex-row space-x-2 justify-between items-center cursor-pointer"
                                                onClick={() => toggleItem(item.title)}>
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
                                                item.group.map(groupItem => (
                                                    <motion.div
                                                        initial={
                                                            {
                                                                opacity: 0,
                                                                height: 18
                                                            }
                                                        }
                                                        animate={
                                                            {
                                                                opacity: 1,
                                                                height: 'auto'
                                                            }
                                                        }

                                                        key={groupItem.title}
                                                        className="flex flex-row space-x-2 justify-between items-center">
                                                        <div className="p-4 ">
                                                            <h3 className="text-xl font-bold text-gray-800">{groupItem.title}</h3>
                                                            <div className={'flex flex-row space-x-2'}>
                                                                <p className="text-gray-600">{groupItem.time}</p>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-row space-x-2 items-center">
                                                            <p className="text-gray-800 font-semibold">{groupItem.price} €</p>
                                                            {!groupItem.isSelected ?
                                                                <button
                                                                onClick={() => {
                                                                    addService(groupItem)
                                                                }}
                                                                className=" w-24 m-3 text-pink-600 font-semibold border-pink-600 border rounded-lg py-2">
                                                                Auswählen
                                                            </button> : <button
                                                                    onClick={() => {
                                                                        removeService(groupItem);
                                                                    }}
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
