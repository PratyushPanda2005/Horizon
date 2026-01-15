"use client"

import React, { useState } from 'react'
import CustomizationModal from './CustomizationModal'

interface StatePageClientProps {
    state: string
}

const StatePageClient = ({ state }: StatePageClientProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            {/* Main Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                {/* Subtitle */}
                <p className="mb-4 text-sm md:text-base font-gilroy-medium text-white/80">
                    Explore the Beauty of {state} & its Mountains
                </p>

                {/* Big Heading */}
                <h1 className="font-gilroy-bold text-[3.2rem] md:text-[6rem] lg:text-[7.5rem] leading-[1.05] tracking-tight">
                    {state.toUpperCase()}
                </h1>

                {/* CTA */}
                <button className="mt-8 rounded-xl bg-primary-orange px-8 py-4 text-sm md:text-base font-gilroy-semibold text-black transition hover:scale-105">
                    Explore {state}
                </button>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-8 left-1/2 z-20 w-[90%] max-w-3xl -translate-x-1/2">
                    <div className="flex items-center justify-between gap-4 rounded-2xl bg-[#0E1F2C]/90 px-6 py-4 backdrop-blur-md">
                        {/* Left Text */}
                        <p className="text-sm md:text-base font-gilroy-medium text-white">
                            Create your own itinerary
                        </p>

                        {/* Button */}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="rounded-xl bg-primary-orange px-6 py-3 text-sm font-gilroy-semibold text-black transition hover:scale-105"
                        >
                            Customize Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <CustomizationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                stateName={state}
            />
        </>
    )
}

export default StatePageClient
