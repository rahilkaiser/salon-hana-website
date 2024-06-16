"use client"
import Section from "@/components/core/section-component/SectionComponent";
import {Intro} from "@/components/sections/intro/Intro";
import {BeautySection} from "@/components/sections/beauty-section/BeautySection";
import { motion } from "framer-motion";


export default function About() {

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

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <Section id={"intro"}><Intro/></Section>
            <Section id={"beauty-section"} noSlide><BeautySection/></Section>
        </motion.div>
    );
}