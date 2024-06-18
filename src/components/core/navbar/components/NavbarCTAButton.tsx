'use client'
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpa} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const NavbarCTAButton = () => {

    const buttonVariants = {
        hidden: {scale: 0.8, opacity: 0, x: 500},
        visible: {
            x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                delay: 0.6, // Adjusted to follow after the last text
                duration: 0.3,
            }
        },
        hover: {
            transition: {duration: 0.3}, // smoother transition
            backgroundColor: "#db2777",
            color: "#ffffff",
        }
    };

    return (
        <Link href={'/services'}>
            <motion.button
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={buttonVariants}
                className="px-4 py-2 sm:px-8 sm:py-3 bg-primary text-white text-lg rounded uppercase">
                <FontAwesomeIcon icon={faSpa} className="md:pr-2"/>

                <span className="hidden sm:inline">ZU den Services</span>
            </motion.button>
        </Link>
    );
};
