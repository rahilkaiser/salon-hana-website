"use client"
import {CheckoutInfo} from "@/components/core/checkout-info/CheckoutInfo";
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faUser} from "@fortawesome/free-solid-svg-icons";

import {useRouter} from "next/navigation";
import {useEffect} from "react";


export default function Checkout() {

    const router = useRouter();
    // const {events, fetchEvents, fetchToken} = useBookingStore();

    const pageVariants = {
        initial: {opacity: 0, y: 20},
        in: {opacity: 1, y: 0},
        out: {opacity: 0, y: -20}
    };

    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.5
    };


    // fetchToken().then(fetchEvents);

    useEffect(() => {

            // fetchToken().then(async r => {
            //
            //     const events = fetchEvents()
            // });



    }, []);


    return (
        <div>
            <CheckoutInfo></CheckoutInfo>
            <div>
                {/*{events.length > 0 ? (*/}
                {/*    events.map(event => (*/}
                {/*        <div key={event.id}>*/}
                {/*            <h3>{event.name}</h3>*/}
                {/*            <p>{event.description}</p>*/}
                {/*        </div>*/}
                {/*    ))*/}
                {/*) : (*/}
                {/*    <p>No events found.</p>*/}
                {/*)}*/}
            </div>

            {/*<motion.div*/}
            {/*    initial="initial"*/}
            {/*    animate="in"*/}
            {/*    exit="out"*/}
            {/*    variants={pageVariants}*/}
            {/*    transition={pageTransition}>*/}

            {/*    <div className="ml-20 my-8">*/}
            {/*        <button className="cursor-pointer" onClick={() => {*/}
            {/*            router.back();*/}
            {/*        }}>*/}
            {/*            <FontAwesomeIcon icon={faArrowLeft} size="1x" className="text-lg"/>*/}
            {/*            <span className="px-2">Zurück</span>*/}
            {/*        </button>*/}

            {/*    </div>*/}

            {/*    <div className="max-w-7xl mx-auto px-16 sm:px-8 ">*/}
            {/*        <div className="flex flex-row justify-evenly w-full p-4 ">*/}
            {/*            <div className="flex flex-col items-start justify-start w-1/4">*/}
            {/*                <span className="py-2 font-semibold">Sicherer Checkout</span>*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</motion.div>*/}
        </div>
    );
}