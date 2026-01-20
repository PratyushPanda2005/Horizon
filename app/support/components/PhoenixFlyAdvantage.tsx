"use client";

import React, { useState } from "react";
import { ChevronDown, CheckCircle, Star, Users, Percent, Gift } from "lucide-react";

const advantages = [
    {
        icon: "/icons/heroicons_currency-rupee-solid.svg",
        title: "Best Price Guarantee: Price Match & Assurance Policy",
    },
    {
        icon: "/icons/solar_gift-bold.svg",
        title: "Rewarding Night Stay",
    },
    {
        icon: "/icons/vaadin_group.svg",
        title: "Group Booking: Discover The Joy Of Togetherness",
    },
    {
        icon: "/icons/iconamoon_discount-fill.svg",
        title: "Exclusive Offers",
    },
    {
        icon: "/icons/fluent_gift-card-20-filled.svg",
        title: "Gift Cards: Gift A Moment, Make A Memory!",
    },
];

const PhoenixFlyAdvantage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="flex-1 max-w-[720px]">
            <h2 className="text-4xl font-gilroy-semibold text-[#16242A] mb-4">
                Phoenix Fly Advantage
            </h2>

            <div className="space-y-3">
                {advantages.map((item, index) => (
                    <div
                        key={index}
                        className="border border-gray-100 rounded-2xl bg-white overflow-hidden transition-all"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between p-6 text-left"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="h-5 w-5 text-primary-orange"
                                />
                                <span className="text-xl font-gilroy-semibold text-primary-orange">
                                    {item.title}
                                </span>
                            </div>
                            <ChevronDown
                                className={`h-5 w-5 text-gray-400 transition-transform ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>
                        {openIndex === index && (
                            <div className="px-6 pb-6 text-sm font-gilroy-medium text-gray-600 border-t border-gray-50 pt-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhoenixFlyAdvantage;
