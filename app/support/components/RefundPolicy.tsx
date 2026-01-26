"use client";

import React from "react";
import { LineReveal } from "@/app/utils/animation";

const RefundPolicy = () => {
    return (
        <div className="flex-1 max-w-2xl">
            <h2 className="text-[42px] leading-[100%] tracking-[-0.02em] font-gilroy-semibold text-[#16242A] mb-[18px]">
                Refund Policy
            </h2>

            <div className="space-y-6 text-lg tracking-[-0.02em] font-gilroy-medium text-[#16242A] leading-[28px]">
                <div className="flex gap-4">
                    <div className="mt-2.5 w-1 h-1 rounded-full bg-black/80 shrink-0" />
                    <h1 className="leading-[28px]">
                        Some bookings are non-refundable. For these bookings, you will not receive a refund if you{" "}
                        <span className="text-primary-orange">change or cancel.</span>
                    </h1>
                </div>

                <div className="flex gap-4">
                    <div className="mt-2.5 w-1 h-1 rounded-full bg-black/80 shrink-0" />
                    <h1 className="leading-[28px]">
                        Some bookings are refundable. For these bookings, you may be eligible for either a partial or full refund if you{" "}
                        <span className="text-primary-orange">change or cancel.</span>
                    </h1>
                </div>

                <div className="flex gap-4">
                    <div className="mt-2.5 w-1 h-1 rounded-full bg-black/80 shrink-0" />
                    <h1 className="leading-[28px]">
                        <LineReveal text="If your booking is eligible for a refund, we usually process the refund within 24 hours." />
                    </h1>
                </div>

                <div className="flex gap-4">
                    <div className="mt-2.5 w-1 h-1 rounded-full bg-black/80 shrink-0" />
                    <h1 className="leading-[28px]">
                        <LineReveal text="Refunds may take up to 14 business days to process." />
                    </h1>
                </div>

                <div className="flex gap-4">
                    <div className="mt-2.5 w-1 h-1 rounded-full bg-black/80 shrink-0" />
                    <h1 className="leading-[28px]">
                        <LineReveal text="Once we initiate your refund, we will email you a refund receipt with details regarding the refund amount, how, and when you'll get your refund." />
                    </h1>
                </div>

                <div className="flex gap-4">
                    <div className="mt-2.5 w-1 h-1 rounded-full bg-black/80 shrink-0" />
                    <h1 className="leading-[28px]">
                        <LineReveal text="In general, you will be refunded in the same form of payment and currency you used when booking." />
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;
