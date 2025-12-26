"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";

const visaTrips = [
    {
        title: "Thailand",
        desc: "Ancient ruins, island tales, Mediterranean sun.",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
        title: "Vietnam",
        desc: "Backwaters, spice gardens, lush hills",
        img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },
    {
        title: "Maldives",
        desc: "Endless trail paths, wild coasts and pure air",
        img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    },
    {
        title: "Mauritius",
        desc: "Frozen beauty, deep fjords, northern lights",
        img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    },
];

export default function VisaOnArrival() {
    return (
        <section className="pt-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-base md:text-lg font-gilroy-semibold">
                        Visa on Arrival Destinations
                    </h3>

                    <div className="flex gap-2">
                        <div className="visa-prev w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer">
                            <ArrowLeft className="w-4 h-4" />
                        </div>
                        <div className="visa-next w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer text-orange-500">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>

                {/* Slider */}
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".visa-prev",
                        nextEl: ".visa-next",
                    }}
                    spaceBetween={20}
                    slidesPerView={1.15}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {visaTrips.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="relative h-[260px] rounded-2xl overflow-hidden text-white">

                                {/* Image */}
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                {/* Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                                {/* Content */}
                                <div className="absolute bottom-5 left-5 right-5">
                                    <h4 className="text-sm md:text-base font-gilroy-semibold">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs md:text-sm text-gray-200 mt-1 leading-snug">
                                        {item.desc}
                                    </p>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}
