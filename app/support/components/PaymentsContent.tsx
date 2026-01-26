"use client";

import React from "react";
import { LineReveal } from "@/app/utils/animation";

const PaymentRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex items-center justify-between gap-8 mb-2">
        <span className="text-lg font-gilroy-medium text-[#16242A] w-32">{label}</span>
        <div className="flex-1 bg-[#D7F7FF] py-5 px-5 rounded-lg text-center text-lg font-gilroy-semibold text-[#16242A]">
            {value}
        </div>
    </div>
);

const PaymentsContent = () => {
    return (
        <div className="flex-1 max-w-3xl">
            <h2 className="text-[42px] leading-[100%] tracking-[-0.02em] font-gilroy-semibold text-[#16242A] mb-4">
                Payments
            </h2>

            <div className="bg-white border border-gray-100 rounded-lg p-[30px] mb-12">
                <h3 className="text-center text-lg tracking-[-0.04em] font-gilroy-medium text-[#16242A] mb-8">Booking Amount To Be Paid</h3>
                <PaymentRow label="Before 30 days" value="25% of Total Amount" />
                <PaymentRow label="30-20 days" value="30% of Total Amount" />
                <PaymentRow label="20-14 days" value="40% of Total Amount" />
                <PaymentRow label="14-7 days" value="55% of Total Amount" />
                <PaymentRow label="7-3 days" value="75% of Total Amount" />
                <PaymentRow label="12-3 hrs" value="100% of Total Amount" />

                <div className="relative flex justify-center my-[30px]">
                    <div className="relative inline-flex items-center justify-center px-32 py-4 rounded-full">
                        {/* Gradient background */}
                        <div className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-[#FFD6B5] to-transparent" />

                        {/* Text */}
                        <span className="relative text-primary-orange font-gilroy-semibold text-lg">
                            Or
                        </span>
                    </div>
                </div>

                <h3 className="text-center text-lg tracking-[-0.04em] font-gilroy-medium text-[#16242A] mb-8">Flexible Payments</h3>
                <PaymentRow label="During Booking" value="Pay 25% of Total Amount" />
                <PaymentRow label="Before 48hrs" value="Remaining 75% of Total Amount Left" />

                <p className="mt-[30px] text-base font-gilroy-medium text-[#16242A] leading-[32px]">
                    <span className="font-gilroy-semibold text-primary-orange">Note: </span>
                    You can settle the remaining balance ( i.e. 75% of the total amount ) at your convenience. However, the full amount must be paid at least <span className="font-gilroy-semibold">48 hours</span> prior to travel.
                </p>
            </div>
        </div>
    );
};

export default PaymentsContent;
