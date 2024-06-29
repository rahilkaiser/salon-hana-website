"use client"
import {motion} from "framer-motion";
import {useEffect} from "react";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useRouter} from "next/navigation";
import {useServiceStore} from "@/store/useServiceStore";
import {CheckoutInfo} from "@/components/core/checkout-info/CheckoutInfo";
import {useBookingStore} from "@/store/useBookingStore";
import {TimeSlot} from "@/models/TimeSlot";
import {addDurationToTime, formatDate} from "@/utils/Utils";
import {Spinner} from "@nextui-org/spinner";

export default function Booking() {

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

    const router = useRouter();

    const {
        selectedService,
    } = useServiceStore();

    const {
        goToPreviousWeek,
        goToNextWeek,
        getWeekDates,
        initializeWeek,
        timeSlots,
        fetchAvailableTimeSlots,
        isLoadingTimeSlots,
    } = useBookingStore();


    const weekDates = getWeekDates();
    useEffect(() => {
        initializeWeek()
        const fetchData = async () => {
            try {
                await fetchAvailableTimeSlots(weekDates[0], weekDates[weekDates.length - 1])
            } catch (error) {
                console.error('Error fetching API key:', error);
            }
        };
        fetchData();

    }, []);


    return (
        <div>
            <CheckoutInfo></CheckoutInfo>
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
                <div className="max-w-7xl mx-auto md:px-16">
                    <div className="flex flex-col justify-center w-full p-4 ">
                        <div className="w-full flex flex-row justify-between md:px-12 pb-12 space-x-4">
                            <div>
                                <button onClick={goToPreviousWeek}>Vorherige Woche</button>
                            </div>
                            <div className="font-bold text-lg text-center">
                                {weekDates[0].toLocaleDateString()} - {weekDates[weekDates.length - 1].toLocaleDateString()}
                            </div>
                            <div>
                                <button onClick={goToNextWeek}>Nächste Woche</button>
                            </div>
                        </div>
                        {isLoadingTimeSlots ?
                            <div className="flex justify-center items-center">
                                <Spinner/>
                            </div> :

                            <div
                                className="flex md:flex-row flex-col space-y-4 md:space-y-0 justify-between text-center">
                                {weekDates.map((date, index) => {
                                        return (
                                            <div className="flex-1" key={index}>
                                                <h3>{date.toLocaleDateString()}</h3>
                                                <p className="text-center font-bold">{['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'][date.getDay()]}</p>

                                                <div className="flex flex-col items-center w-full">

                                                    {timeSlots.length > 0 ? timeSlots.map((t: TimeSlot, idx: number) => {

                                                        const newTime = addDurationToTime(t.client_time.slice(0, 5), parseInt(selectedService.duration));

                                                        if (t.date == formatDate(date)) {
                                                            return (
                                                                <button key={idx}
                                                                        className="flex-1 w-40 m-1 hover:bg-primary hover:text-white text-md border border-black p-4 rounded">
                                                            <span
                                                                key={idx}>

                                                                {t.client_time} - {newTime}
                                                            </span>
                                                                </button>);
                                                        }
                                                    }) : <p>-</p>}
                                                </div>
                                            </div>
                                        );
                                    }
                                )
                                }
                            </div>
                        }
                    </div>
                </div>
            </motion.div>
        </div>
    );
}