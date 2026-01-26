"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface SupportSectionAccordionProps {
    title: string;
    children: React.ReactNode;
}

const SupportSectionAccordion = ({ title, children }: SupportSectionAccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg bg-white overflow-hidden transition-all mb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-5 py-6 text-left"
            >
                <span className="text-2xl tracking-[-0.02em] font-gilroy-semibold text-primary-orange">
                    {title}
                </span>
                <ChevronDown
                    className={`h-5 w-5 text-[#16242A] transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>
            <div
                className={`transition-all duration-500 ease-in-out ${isOpen ? "max-h-[1000px] opacity-100 pb-8" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-6 ">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default SupportSectionAccordion;
