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
            {/*<CartInfo></CartInfo>*/}
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

// useEffect(() => {
//     let category = searchParams.get('category');
//
//     switch (category) {
//         case 'facials':
//             category = CATEGORIES.FACIAL;
//             break;
//         case 'hairRemoval':
//             category = CATEGORIES.HAIRREM;
//             break;
//         case 'dental':
//             category = CATEGORIES.TEETH;
//             break;
//         case 'package':
//             category = CATEGORIES.PACKAGE;
//             break;
//     }
//
//     if (category) {
//         let foundCategory = null;
//
//         if (category == CATEGORIES.PACKAGE) {
//             foundCategory = packages;
//         } else {
//             foundCategory = serviceMap.find(cat => cat.name.toLowerCase() === category.toLowerCase());
//         }
//
//         if (foundCategory) {
//             selectCategory(foundCategory);
//         }
//     }
// }, [searchParams, serviceMap]);

// const selectCategory = (category: ServiceMap) => {
//     setSelectedCategory(category);
//     if (category) {
//         setSelectedSubcategory(category.sub[0]);
//     }
// };


// <div key={index} className="bg-white p-4 my-2 rounded-lg shadow-md">
/*<div className="flex flex-row space-x-2 justify-between items-center">*/
/*    <div>*/
/*        <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>*/
/*        <div className={'flex flex-row space-x-2'}>*/
/*            <p className="text-gray-600">{item.time} Min.</p>*/
/*            <p className="text-gray-800 font-semibold cursor-pointer">Details*/
/*                anzeigen</p>*/
/*        </div>*/
/*    </div>*/
/*    <div className="flex flex-row space-x-2 items-center">*/
/*        <p className="text-gray-800 font-semibold">{item.price} €</p>*/
/*        {!item.isSelected ? <button*/
/*            onClick={() => {*/
/*                addService(item);*/
/*            }}*/
/*            className=" w-24 m-3 text-pink-600 font-semibold border-pink-600 border rounded-lg py-2">*/
/*            Auswählen*/
/*        </button> : <button*/
/*            onClick={() => {*/
/*                removeService(item);*/
/*            }}*/
/*            className=" m-3 p-1 text-green-600 font-semibold border-green-600 border rounded-lg py-2">*/
/*            Ausgewählt*/
/*        </button>}*/
/*    </div>*/
/*</div>*/
// </div>


// <div className="w-full py-8 text-start bg-accent sm:py-16">
//     <CartInfo></CartInfo>
//     <div className="max-w-7xl mx-auto px-4 sm:px-8">
//         <h1>ALLE SERVICES</h1>
//         <div
//             className="bg-accent p-4 flex md:flex-row flex-col md:space-x-2 md:space-y-0 space-y-2 items-center">
//             {
//
//                 serviceMap.map(category => (
//                     <motion.div
//                         key={category.name}
//                         className={`relative flex-1 max-w-[12rem]`}
//                         variants={cardVariants}
//                         animate={selectedCategory === category ? 'selected' : 'unselected'}>
//                         <Card
//                             isPressable
//                             onPress={() => selectCategory(category)}
//                             isFooterBlurred
//                             radius="lg"
//                             className={`border-none shadow-xl ${selectedCategory === category ? 'ring-2 ring-primary' : ''}`}
//                         >
//                             <Image
//                                 alt={category.name}
//                                 className="object-cover"
//                                 height={200}
//                                 width={200}
//                                 src={category.image}
//                             />
//                             <CardFooter
//                                 className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
//                                 <p className="text-white/80 text-center w-full">{category.name}</p>
//                             </CardFooter>
//                             {(category.isSelected && category.name != 'Alle') && (
//                                 <FontAwesomeIcon
//                                     icon={faCheckCircle}
//                                     className="absolute top-0 right-0 m-2 text-primary text-2xl z-50"
//                                 />
//                             )}
//                         </Card>
//                     </motion.div>
//                 ))}
//
//             <motion.div
//                 className={`md:absolute md:right-32 max-w-[12rem] md:flex-grow`}
//                 variants={cardVariants}
//                 animate={selectedCategory === packages ? 'selected' : 'unselected'}>
//                 <Card
//                     isPressable
//                     onPress={() => selectCategory(packages)}
//                     isFooterBlurred
//                     radius="lg"
//                     className={`border-none shadow-xl ${selectedCategory === packages ? 'ring-2 ring-primary' : ''}`}
//                 >
//                     <Image
//                         alt={packages.name}
//                         className="object-cover"
//                         height={200}
//                         width={200}
//                         src={packages.image}
//                     />
//                     <CardFooter
//                         className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
//                         <p className="text-white/80 text-center w-full">{packages.name}</p>
//                     </CardFooter>
//                     {(packages.isSelected) && (
//                         <FontAwesomeIcon
//                             icon={faCheckCircle}
//                             className="absolute top-0 right-0 m-2 text-primary text-2xl z-50"
//                         />
//                     )}
//                 </Card>
//             </motion.div>
//         </div>
//         <div className="py-16">
//             <div className="flex flex-col md:flex-row ">
//                 <div className="md:w-1/4">
//                     {
//                         selectedCategory.sub.map(
//                             (sub, index) => (
//                                 <motion.div key={index}
//                                             className="p-2 cursor-pointer relative "
//                                             variants={itemVariants}
//                                             animate={selectedSubCategory === sub ? 'selected' : 'unselected'}
//                                             onClick={() => setSelectedSubcategory(sub)}>
//                                     {sub.name}
//                                     {sub.isSelected && (
//                                         <FontAwesomeIcon icon={faCheckCircle}
//                                                          className="text-pink-600 text-xl absolute right-2"/>
//                                     )}
//                                     <Divider></Divider>
//                                 </motion.div>
//                             )
//                         )}
//                 </div>
//                 <div className="md:w-3/4 px-4 py-4 md:py-0">
//                     {selectedSubCategory.services.map((item, index) => (
//                         <div key={index}
//                              className="bg-white p-4 my-2 rounded-lg shadow-md">
//                             {!item.group ?
//                                 <div className="flex flex-row space-x-2 justify-between items-center">
//                                     <div>
//                                         <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
//                                         <div className={'flex flex-row space-x-2'}>
//                                             <p className="text-gray-600">{item.time} Min.</p>
//                                             <p className="text-gray-800 font-semibold cursor-pointer">Details
//                                                 anzeigen</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex flex-row space-x-2 items-center">
//                                         <p className="text-gray-800 font-semibold">{item.price} €</p>
//                                         {!item.isSelected ? <button
//                                             onClick={() => {
//                                                 addService(item);
//                                             }}
//                                             className=" w-24 m-3 text-pink-600 font-semibold border-pink-600 border rounded-lg py-2">
//                                             Auswählen
//                                         </button> : <button
//                                             onClick={() => {
//                                                 removeService(item);
//                                             }}
//                                             className=" m-3 p-1 text-green-600 font-semibold border-green-600 border rounded-lg py-2">
//                                             Ausgewählt
//                                         </button>}
//                                     </div>
//                                 </div>
//                                 :
//                                 <div>
//                                     <div
//                                         className="flex flex-row space-x-2 justify-between items-center cursor-pointer"
//                                         onClick={() => toggleItem(item.title)}>
//                                         <div>
//                                             <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
//                                             <div className={'flex flex-row space-x-2'}>
//                                                 <p className="text-gray-600">{item.time} Min.</p>
//                                                 <p className="text-gray-800 font-semibold cursor-pointer">Details
//                                                     anzeigen</p>
//                                             </div>
//                                         </div>
//                                         <div className="flex flex-row space-x-2 items-center">
//                                             <p className="text-gray-800 font-semibold cursor-pointer">{item.price} €</p>
//                                             <button
//                                                 className="px-4 py-2 text-gray-600 rounded focus:outline-none">
//                                                 {openItemId === item.title ?
//                                                     <FontAwesomeIcon icon={faChevronUp}/> :
//                                                     <FontAwesomeIcon icon={faChevronDown}/>}
//                                             </button>
//                                         </div>
//                                     </div>
//
//                                     {openItemId === item.title && (
//                                         item.group.map(groupItem => (
//                                             <motion.div
//                                                 initial={
//                                                     {
//                                                         opacity: 0,
//                                                         height: 18
//                                                     }
//                                                 }
//                                                 animate={
//                                                     {
//                                                         opacity: 1,
//                                                         height: 'auto'
//                                                     }
//                                                 }
//
//                                                 key={groupItem.title}
//                                                 className="flex flex-row space-x-2 justify-between items-center">
//                                                 <div className="p-4 ">
//                                                     <h3 className="text-xl font-bold text-gray-800">{groupItem.title}</h3>
//                                                     <div className={'flex flex-row space-x-2'}>
//                                                         <p className="text-gray-600">{groupItem.time}</p>
//                                                     </div>
//                                                 </div>
//
//                                                 <div className="flex flex-row space-x-2 items-center">
//                                                     <p className="text-gray-800 font-semibold">{groupItem.price} €</p>
//                                                     {!groupItem.isSelected ?
//                                                         <button
//                                                             onClick={() => {
//                                                                 addService(groupItem)
//                                                             }}
//                                                             className=" w-24 m-3 text-pink-600 font-semibold border-pink-600 border rounded-lg py-2">
//                                                             Auswählen
//                                                         </button> : <button
//                                                             onClick={() => {
//                                                                 removeService(groupItem);
//                                                             }}
//                                                             className=" m-3 p-1 text-green-600 font-semibold border-green-600 border rounded-lg py-2">
//                                                             Ausgewählt
//                                                         </button>}
//                                                 </div>
//                                             </motion.div>
//                                         ))
//                                     )
//                                     }
//                                 </div>
//
//                             }
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>