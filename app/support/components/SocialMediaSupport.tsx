"use client";

import React from "react";
import { LineReveal } from "@/app/utils/animation";

const SocialMediaSupport = () => {
    return (
        <div className="flex-1 max-w-[720px]">
            <h2 className="text-[42px] leading-[100%] font-gilroy-semibold tracking-[-0.02em] text-[#16242A] mb-4">
                Social Media Support
            </h2>

            <div className="text-lg font-gilroy-medium tracking-[-0.02em] text-[#16242A] mb-3 leading-relaxed">
                <LineReveal text="Reach out to us through social media channels." />
            </div>

            <div className="flex gap-6 mb-4">
                <a href="#" className="border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
                    <img src="/icons/ic_baseline-facebook.svg" alt="Facebook" className="" />
                </a>
                <a href="#" className="border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
                    <img src="/icons/fe_instagram.svg" alt="Instagram" className="" />
                </a>
                <a href="#" className="border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
                    <img src="/icons/ant-design_whats-app-outlined.svg" alt="WhatsApp" className="" />
                </a>
                <a href="#" className="border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
                    <img src="/icons/mdi_twitter.svg" alt="Twitter" className="" />
                </a>
                <a href="#" className="border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
                    <img src="/icons/ri_youtube-fill.svg" alt="YouTube" className="" />
                </a>
            </div>

            <div className="text-lg font-gilroy-medium tracking-[-0.02em] text-[#16242A] leading-relaxed">
                <LineReveal text="Our social media accounts are monitored and we aim to respond to direct messages within 5-10 minutes." />
            </div>
        </div>
    );
};

export default SocialMediaSupport;
