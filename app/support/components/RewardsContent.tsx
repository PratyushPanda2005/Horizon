"use client";

import React from "react";
import { LineReveal } from "@/app/utils/animation";
import SupportAccordion from "./SupportAccordion";
import SupportSectionAccordion from "./SupportSectionAccordion";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const RewardsContent = () => {
    const faqs = [
        { title: "How Do I Join Phoenix Fly Rewards?", content: "You can join Phoenix Fly Rewards by signing up on our website. Once you create an account, you'll be automatically enrolled into our rewards program." },
        { title: "Can I Earn Points On All Types Of Bookings?", content: "Yes, you can earn points on all types of bookings including flights, hotels, and holiday packages." },
        { title: "Can I Combine Points With Promotional Discounts?", content: "Points can be combined with most promotional discounts unless specified otherwise in the offer terms." },
        { title: "How Can I Avail Of The Early Check-In / Late Check-Out Benefit?", content: "This benefit is available for Gold and Platinum members. You can request it during the booking process or at the hotel reception." },
        { title: "What Is The Validity Of My Earned Points?", content: "Points are valid for 12 months from the date of earning. Any unused points will expire after this period." },
        { title: "Can I Transfer My Points To Another Member?", content: "Currently, points are non-transferable and can only be used by the account holder." },
        { title: "How Do I Upgrade My Membership Level?", content: "Membership levels are upgraded based on your total spend and number of bookings within a calendar year." },
    ];

    const terms = [
        { title: "Terms & Conditions Info", content: "Phoenix Fly Rewards points are non-transferable and have no cash value. Points expire after 12 months of inactivity." },
    ];

    return (
        <div className="flex-1 max-w-3xl">
            <div className="bg-white border border-gray-100 rounded-2xl p-8">
                <h2 className="text-[42px] tracking-[-0.02em] leading-[100%] font-gilroy-semibold text-[#16242A] mb-10">
                    Phoenix Fly Rewards
                </h2>

                <div className="relative mb-5">
                    {/* Navigation Arrows */}
                    <button className="absolute -left-8 top-1/2 -translate-y-1/2 p-2 text-[#16242A] hover:text-black transition-colors hidden md:block">
                        <ChevronLeft size={20} />
                    </button>
                    <button className="absolute -right-8 top-1/2 -translate-y-1/2 p-2 text-[#16242A] hover:text-black transition-colors hidden md:block">
                        <ChevronRight size={20} />
                    </button>

                    <div className="flex flex-col md:flex-row gap-10 items-stretch">
                        <img
                            src="/support/explorer-card.svg"
                            alt="Explorer Card"
                            className="w-full md:w-1/2"
                        />

                        <div className="w-full md:w-1/2 flex flex-col justify-between py-1">
                            <div>
                                <h4 className="text-xl font-gilroy-semibold text-primary-orange mb-4">Explorer</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-sm font-gilroy-medium text-[#16242A]">
                                        <CheckCircle2 size={24} className="text-primary-orange shrink-0" />
                                        <span>Earn 1% points on total booking amount.</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm font-gilroy-medium text-[#16242A]">
                                        <CheckCircle2 size={24} className="text-primary-orange shrink-0" />
                                        <span>500 points on first booking completion.</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm font-gilroy-medium text-[#16242A]">
                                        <CheckCircle2 size={24} className="text-primary-orange shrink-0" />
                                        <span>Daily Login Bonus: 10 points per day.</span>
                                    </li>
                                </ul>
                                <button className="mt-5 text-base font-gilroy-semibold text-[#16242A] underline hover:text-primary-orange transition-colors">
                                    Know More
                                </button>
                            </div>
                            <div className="flex gap-2 pt-4">
                                <div className="w-2.5 h-2.5 rounded-full bg-primary-orange" />
                                <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                                <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                                <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-10">
                    <button className="bg-[#1C2C34] text-white px-10 py-4 rounded-xl font-gilroy-semibold text-sm hover:bg-black transition-all shadow-md">
                        View My Rewards & Status
                    </button>
                </div>

                <div className="space-y-4">
                    <SupportSectionAccordion title="FAQs">
                        <SupportAccordion items={faqs} variant="plus-minus" isFlat={true} />
                    </SupportSectionAccordion>

                    <SupportSectionAccordion title="Terms & Conditions">
                        <div className="text-base font-gilroy-medium text-[#16242A] leading-relaxed">
                            {terms[0].content}
                        </div>
                    </SupportSectionAccordion>
                </div>
            </div>
        </div>
    );
};

export default RewardsContent;
