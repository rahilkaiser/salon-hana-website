"use client"
import {motion} from "framer-motion";

import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faSpa} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/navigation";
import {CustomInputField} from "@/components/core/custom-input-field/CustomInputField";
import {validateEmail, validateName, validatePhoneNumber} from "@/utils/InputValidators";
import {useBookingStore} from "@/store/useBookingStore";
import {useServiceStore} from "@/store/useServiceStore";

export default function BookingConfirm() {
    const router = useRouter();
    const {
        userDetails,
        setUserDetails,
        selectedBookingDetails
    } = useBookingStore();

    const {selectedService, selectedCategory} = useServiceStore();

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

    const buttonVariants = {
        hidden: {scale: 0.8, opacity: 0},
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.3,
            }
        },
        hover: {
            transition: {duration: 0.3}, // smoother transition
            backgroundColor: "#db2777",
            color: "#ffffff",
        }
    };

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phoneNumber: '',
    });

    const handleSubmit = () => {
        const newErrors: any = {
            name: validateName(userDetails.name),
            email: validateEmail(userDetails.email),
            phoneNumber: validatePhoneNumber(userDetails.phoneNumber),
        };

        setErrors(newErrors);

        const isValid = Object.values(newErrors).every((error) => error === '');

        if (isValid) {

            // navigate('/salary-details');

            // MAKE BOOKING
        }
    };

    // State for form inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="max-w-7xl mx-auto md:px-16"
        >
            <div className="ml-20 my-8">
                <button className="cursor-pointer" onClick={() => {
                    router.back();
                }}>
                    <FontAwesomeIcon icon={faArrowLeft} size="1x" className="text-lg"/>
                    <span className="px-2">Zurück</span>
                </button>
            </div>
            <div className="flex flex-col bg-white shadow-lg rounded-lg">
                <h2 className="text-lg font-semibold text-center mb-4">Bitte bestätigen Sie Ihre Angaben</h2>
                <div className="flex flex-row space-x-16 p-8">
                    <div className="flex flex-col flex-1">
                        <form className="space-y-8">
                            <CustomInputField label={"Name"} key={"name"} value={userDetails.name} onChange={(e) => {
                                setUserDetails({name: e.target.value});
                            }}
                                              errorMessage={errors.name}
                            ></CustomInputField>

                            <CustomInputField label={"E-Mail"} key={"mail"} value={userDetails.email} onChange={(e) => {
                                setUserDetails({email: e.target.value});
                            }}
                                              errorMessage={errors.email}
                            ></CustomInputField>

                            <CustomInputField label={"Telefonnummer"} key={"phone"} value={userDetails.phoneNumber}
                                              onChange={(e) => {
                                                  setUserDetails({phoneNumber: e.target.value});
                                              }}
                                              errorMessage={errors.phoneNumber}
                            ></CustomInputField>
                        </form>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-xl font-bold">{selectedBookingDetails.selectedService.name}</h3>
                        <p className="mt-1">Datum: {selectedBookingDetails.bookingDate.toLocaleDateString()}</p>
                        <p className="mt-1">Kategorie: {selectedBookingDetails.selectedCategory.name}</p>
                        <p className="mt-1">Dauer: {selectedBookingDetails.selectedService.duration} Minuten</p>
                        <p className="text-lg font-semibold mt-2">Gesamtbetrag: {parseInt(selectedBookingDetails.selectedService.price)} EUR</p>
                        <div className="flex items-center mt-8 focus:border-primary">
                            <input type="checkbox" id="terms" className="mr-2"/>
                            <label htmlFor="terms">Ich stimme den Allgemeinen Geschäftsbedingungen von SimplyBook.me
                                zu*
                            </label>
                        </div>
                        <motion.button
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            variants={buttonVariants}
                            className="mx-auto px-4 py-4 sm:px-8 sm:py-3 bg-primary text-white text-lg rounded uppercase"
                            onClick={handleSubmit}>
                            {/*<FontAwesomeIcon icon={faSpa} className="md:pr-2"/>*/}

                            <span className="hidden sm:inline">Buchung bestätigen</span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
