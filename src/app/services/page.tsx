"use client"

import {Divider} from "@nextui-org/react";
import {motion} from "framer-motion";
import {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useServiceStore} from "@/store/useServiceStore";
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {useSearchParams} from "next/navigation";
import {CartInfo} from "@/components/core/cart-info/CartInfo";
import {Spinner} from "@nextui-org/spinner";
import Link from "next/link";

export default function Services() {
    // const searchParams = useSearchParams();

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

    const {
        cart,
        selectedCategory,
        addService,
        removeService,
        setSelectedCategory,
        categories,
        services,
        fetchEvents,
        fetchCategories,
        categoriesIsLoading,
        servicesIsLoading,

    } = useServiceStore();

    useEffect(() => {

        const fetchData = async () => {
            try {
                await fetchCategories();
                await fetchEvents();
            } catch (error) {
                console.error('Error fetching API key:', error);
            }
        };
        if (categories.length == 0 || services.length == 0) {

            fetchData();
        }

    }, [categories.length, fetchCategories, fetchEvents, services.length]);


    return (
        <div className="w-full py-8 text-start bg-accent sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 flex md:flex-row flex-col">
                <div className="md:w-1/4 px-4 py-4 md:py-0">
                    {!categoriesIsLoading ?
                        <div>
                            {categories.map((category, index) => (
                                <motion.div key={index}
                                            className="p-2 cursor-pointer relative "
                                            variants={itemVariants}
                                            animate={selectedCategory === category ? 'selected' : 'unselected'}
                                            onClick={() => setSelectedCategory(category)}>
                                    {category.name}
                                    {category.isSelected && (
                                        <FontAwesomeIcon icon={faCheckCircle}
                                                         className="text-pink-600 text-xl absolute right-2"/>
                                    )}
                                    <Divider></Divider>
                                </motion.div>
                            ))}
                        </div> :
                        <div className="flex justify-center items-center">
                            <Spinner/>
                        </div>
                    }
                </div>
                <div className="md:w-3/4 px-4 py-4 md:py-0">
                    {!servicesIsLoading ?
                        <div>{
                            services.map((service, index) => (
                                <div key={service.id}>
                                    {service.categories.includes(selectedCategory?.id!) &&
                                        <div key={index}
                                             className="bg-white p-4 my-2 rounded-lg shadow-md">

                                            <div className="flex flex-row space-x-2 justify-between items-center">
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
                                                    <div className={'flex flex-row space-x-2'}>
                                                        <p className="text-gray-600">{service.duration} Min.</p>
                                                        <p className="text-gray-800 font-semibold cursor-pointer">Details
                                                            anzeigen</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row space-x-2 items-center">
                                                    <p className="text-gray-800 font-semibold">{parseInt(service.price)} {service.currency}</p>
                                                     <Link href={'/booking'}><button
                                                        onClick={() => {
                                                            addService(service);
                                                        }}
                                                        className=" w-24 m-3 text-pink-600 font-semibold border-pink-600 border rounded-lg py-2">
                                                        Auswählen
                                                    </button>
                                                     </Link>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            ))
                        }
                        </div> :
                        <div className="flex justify-center items-center">
                            <Spinner size="lg"></Spinner>
                        </div>

                    }
                </div>
            </div>
        </div>
    );
}