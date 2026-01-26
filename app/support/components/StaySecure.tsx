"use client";

import React from "react";
import SupportAccordion from "./SupportAccordion";
import { User, ShieldAlert } from "lucide-react";

const StaySecure = () => {
    const securityItems = [
        {
            title: "Your Personal Safety Companion : Dedicated Support For Female Solo & Female Group Travellers",
            content: "We provide specialized assistance for female travelers, including verified stays, 24/7 emergency contact, and local safety guides to ensure a secure and enjoyable journey.",
            icon: <img src="/support/bx_female.svg" alt="Female Safety" className="" />,
            titleColor: "#FF6B00"
        },
        {
            title: "Phone Call And Email Scams",
            content: "Always verify the sender's email address and avoid sharing sensitive financial information over the phone unless you have initiated the contact through our official channels.",
            icon: <img src="/support/material-symbols_security.svg" alt="Security" className="" />,
            titleColor: "#16242A"
        }
    ];

    return (
        <div className="flex-1 max-w-3xl">
            <h2 className="text-4xl font-gilroy-semibold text-[#16242A] mb-4">
                Stay Secure
            </h2>

            <div className="space-y-3">
                <SupportAccordion
                    title=""
                    items={securityItems}
                    variant="chevron"
                />
            </div>
        </div>
    );
};

export default StaySecure;
