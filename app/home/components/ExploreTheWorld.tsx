'use client'
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const indiaRegions = [
    {
        title: "North India",
        subtitle: "Explore The Best Of",
        description:
            "Embark on an enchanting Himalayan odyssey of cultures and majestic landscapes in North India.",
        image: "/home/north_india.png",
    },
    {
        title: "South India",
        subtitle: "Explore The Best Of",
        description:
            "Discover temples, beaches, and lush greenery across South India.",
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
    },
    {
        title: "West India",
        subtitle: "Explore The Best Of",
        description:
            "Experience deserts, forts, and vibrant cities of West India.",
        image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    },
    {
        title: "East India",
        subtitle: "Explore The Best Of",
        description:
            "Explore rivers, hills, and cultural heritage of East India.",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    },
];

const internationalRegions = [
    {
        title: "Europe",
        subtitle: "Explore The Best Of",
        description:
            "Timeless cities, history, and scenic countryside across Europe.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
    {
        title: "Asia",
        subtitle: "Explore The Best Of",
        description:
            "A blend of modern cities, traditions, and landscapes.",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    },
    {
        title: "Africa",
        subtitle: "Explore The Best Of",
        description:
            "Wildlife safaris and breathtaking natural wonders.",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    },
    {
        title: "More",
        subtitle: "Explore",
        description:
            "Explore More Destinations",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    },
];


const ExploreTheWorld: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [tab, setTab] = useState<"india" | "international">("india");
    const regions = tab === "india" ? indiaRegions : internationalRegions;


    /** Auto cycle */
    useEffect(() => {
        startAutoCycle();
        return stopAutoCycle;
    }, []);

    const startAutoCycle = () => {
        stopAutoCycle();
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % regions.length);
        }, 3000);
    };

    const stopAutoCycle = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    /** Animate on index change */
    useEffect(() => {
        gsap.to(".region-card", {
            gridColumn: "span 1",
            duration: 0.6,
            ease: "power3.inOut",
        });

        gsap.to(`.region-${activeIndex}`, {
            gridColumn: "span 2",
            duration: 0.6,
            ease: "power3.inOut",
        });
    }, [activeIndex]);

    return (
        <section className="max-w-7xl mx-auto px-8 py-16">
            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-gilroy-semibold text-gray-900 mb-3">
                    Explore The World
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto font-gilroy-medium">
                    Browse top domestic and international travel experiences tailored
                    for every kind of traveler.
                </p>
            </div>

            {/* Toggle */}
            <div className="my-6 flex justify-center">
                <div className="bg-gray-200 rounded-full p-1 flex">
                    <button
                        onClick={() => {
                            setTab("india");
                            setActiveIndex(0);
                        }}
                        className={`px-8 py-2 rounded-full text-sm font-gilroy-semibold transition ${tab === "india"
                            ? "bg-white text-primary-orange"
                            : "text-gray-600"
                            }`}
                    >
                        India
                    </button>

                    <button
                        onClick={() => {
                            setTab("international");
                            setActiveIndex(0);
                        }}
                        className={`px-8 py-2 rounded-full text-sm font-gilroy-semibold transition ${tab === "international"
                            ? "bg-white text-primary-orange"
                            : "text-gray-600"
                            }`}
                    >
                        International
                    </button>
                </div>
            </div >


            {/* Cards */}
            < div className="grid grid-cols-1 md:grid-cols-5 gap-2 h-[420px]" >
                {
                    regions.map((region, index) => (
                        <div
                            key={region.title}
                            className={`region-card region-${index} relative rounded-lg overflow-hidden cursor-pointer`}
                            onMouseEnter={() => {
                                stopAutoCycle();
                                setActiveIndex(index);
                            }}
                            onMouseLeave={startAutoCycle}
                        >
                            <img
                                src={region.image}
                                alt={region.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                            {/* Content */}
                            <div
                                className={`relative z-10 h-full flex flex-col justify-end items-start ${index === activeIndex
                                    ? "p-6"
                                    : "pl-6"
                                    }`}
                            >

                                {index === activeIndex && region.subtitle && (
                                    <span className="text-white/80 text-sm mb-1 font-gilroy-medium">
                                        {region.subtitle}
                                    </span>
                                )}

                                <h3
                                    className={` text-white transition-all duration-500 font-gilroy-semibold ${index === activeIndex
                                        ? "text-3xl"
                                        : "text-3xl rotate-[-90deg] origin-left"
                                        }`}
                                >
                                    {region.title}
                                </h3>

                                {index === activeIndex && region.description && (
                                    <p className="text-white/90 text-sm max-w-md mt-2 font-gilroy-medium">
                                        {region.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))
                }
            </div >
        </section >
    );
};

export default ExploreTheWorld;
