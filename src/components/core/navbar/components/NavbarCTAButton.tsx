'use client'
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";

export const NavbarCTAButton = () => {

    const buttonVariants = {
        hidden: { scale: 0.8, opacity: 0 , x:500},
        visible: {
            x:0,
            scale: 1,
            opacity: 1,
            transition: {
                delay: 0.6, // Adjusted to follow after the last text
                duration: 0.3,
            }
        },
        hover: {
            transition: { duration: 0.1 }, // smoother transition
            backgroundColor: "#ec4899",
            color: "#ffffff",
        }
    };

    return (
        <motion.button
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={buttonVariants}
            className="px-4 py-2 sm:px-8 sm:py-3 bg-primary text-white text-lg rounded capitalize">
            <FontAwesomeIcon icon={faCalendar} className="px-2"/>
            <span className="hidden sm:inline">Termin Buchen</span>

        </motion.button>
    );
};
