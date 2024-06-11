"use client"

import SectionTitle from "@/components/core/section-title/SectionTitle";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {Navigation} from "swiper/modules";
import CustomButton from "@/components/core/custom-button/CustomButton";
import React from "react";

export const Testimonials = () => {

    return (
        <div className="mx-auto max-w-screen-lg bg-white flex flex-col justify-center text-center p-8 space-y-8 mb-12">
            <SectionTitle title="Kundenmeinungen"/>
            <div className="relative">
                <Swiper
                    navigation={{
                        nextEl: '.swiper-button-next-unique',
                        prevEl: '.swiper-button-prev-unique',
                    }}
                    modules={[Navigation]}
                    className="w-full"
                    spaceBetween={15}
                    slidesPerView={1}
                    pagination={{clickable: true}}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide className="flex flex-col items-center justify-center space-y-4">
                        <Image src="/images/waxingface.jpg"
                               alt="John Doe"
                               width={220}
                               height={220}
                               className="mx-auto rounded-full shadow-lg"
                        />
                        <blockquote className="text-lg font-semibold italic">This service has truly exceeded my expectations. Fantastic!
                        </blockquote>
                        <div className="font-medium">John Doe - CEO of BeautyWorks</div>
                    </SwiperSlide>

                    <SwiperSlide className="flex flex-col items-center justify-center space-y-4">
                        <Image src="/images/waxingface.jpg"
                               alt="John Doe"
                               width={220}
                               height={220}
                               className="mx-auto rounded-full shadow-lg"
                        />
                        <blockquote className="text-lg font-semibold italic">This service has truly exceeded my expectations. Fantastic!
                        </blockquote>
                        <div className="font-medium">John Doe - CEO of BeautyWorks</div>
                    </SwiperSlide>
                    {/* Repeat other SwiperSlides as needed */}
                </Swiper>
                <div className="flex justify-center items-center pt-4">
                    <button
                        className="swiper-button-prev-unique text-primary mx-14">
                        <FontAwesomeIcon icon={faArrowLeft} size="2x"/>
                    </button>
                    <button
                        className="swiper-button-next-unique text-primary mx-14">
                        <FontAwesomeIcon icon={faArrowRight} size="2x"/>
                    </button>
                </div>
            </div>
            <div className="py-12 mx-auto">
                <CustomButton text={"Alle Bewertungen"} clicked={() => {
                }}></CustomButton>
            </div>

        </div>
    );
};
