"use client";

import { useState } from "react";
import SupportHero from "./components/SupportHero";
import SupportSidebar from "./components/SupportSidebar";
import ContactUsContent from "./components/ContactUsContent";
import TravelDocuments from "./components/TravelDocuments";
import SocialMediaSupport from "./components/SocialMediaSupport";
import PhoenixFlyAdvantage from "./components/PhoenixFlyAdvantage";
import RewardsContent from "./components/RewardsContent";
import TagAndEarn from "./components/TagAndEarn";
import ReferAndEarn from "./components/ReferAndEarn";
import ChangeAndCancel from "./components/ChangeAndCancel";
import RefundPolicy from "./components/RefundPolicy";
import StaySecure from "./components/StaySecure";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import PaymentsContent from "./components/PaymentsContent";
import { LineReveal } from "../utils/animation";
import { Search } from "lucide-react";

const SupportPage = () => {
    const [activeCategory, setActiveCategory] = useState("Contact Us");
    const [searchQuery, setSearchQuery] = useState("");

    const renderContent = () => {
        switch (activeCategory) {
            case "Contact Us":
                return <ContactUsContent />;
            case "Travel Documents":
                return <TravelDocuments />;
            case "Social Media Support":
                return <SocialMediaSupport />;
            case "Phoenix Fly Advantage":
                return <PhoenixFlyAdvantage />;
            case "Phoenix Fly Rewards":
                return <RewardsContent />;
            case "Tag & Earn Rewards":
                return <TagAndEarn />;
            case "Refer & Earn Rewards":
                return <ReferAndEarn />;
            case "Change & Cancel":
                return <ChangeAndCancel />;
            case "Refund Policy & Timelines":
                return <RefundPolicy />;
            case "Stay Secure":
                return <StaySecure />;
            case "Terms & Conditions":
                return <TermsAndConditions />;
            case "Privacy Policy":
                return <PrivacyPolicy />;
            case "Payments":
                return <PaymentsContent />;
            default:
                return (
                    <div className="flex-1 max-w-2xl">
                        <h2 className="text-4xl font-gilroy-semibold text-[#16242A] mb-4">
                            {activeCategory}
                        </h2>
                        <div className="text-base font-gilroy-medium text-[#16242A]">
                            Content for {activeCategory} is coming soon.
                        </div>
                    </div>
                );
        }
    };

    return (
        <main className="min-h-screen pb-20 px-4 md:px-8">
            <section className='pt-20 font-gilroy-medium'>
                <div className='max-w-6xl mx-auto '>
                    <div className="relative rounded-[2rem] overflow-hidden">
                        <img
                            src={"/support-hero.png"}
                            alt="Logo"
                            className='w-full h-auto object-cover'
                        />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center text-white'>
                            <h1 className='text-[88px] leading-[100%] uppercase font-gilroy-semibold'>
                                <LineReveal text="Support" />
                            </h1>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto mt-6">
                {/* Search Bar */}
                <div className="flex justify-center mb-9">
                    <div className="relative w-full max-w-[500px]">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#16242A]/60 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search in Support"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full h-14 pl-12 pr-8 rounded-full bg-white text-[15px] font-gilroy-medium text-[#16242A] focus:outline-none placeholder:text-[#16242A]/40 border-none shadow-none"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <SupportSidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                    {renderContent()}
                </div>
            </div>

            {/* Backdrop blur effect at the bottom as seen in other pages */}
            <div
                className="pointer-events-none fixed bottom-0 left-0 z-50 h-32 w-full
        backdrop-blur-md
        [mask-image:linear-gradient(to_top,black,transparent)]"
            />
        </main>
    );
};

export default SupportPage;
