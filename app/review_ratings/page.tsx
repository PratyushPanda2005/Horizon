
"use client"
import React, { useState } from 'react'
import { cn } from "@/lib/utils";
import ReviewCard, { Review } from './components/ReviewCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { FloatingPillInput } from '../common/atom/floating-pill-input'
import { FloatingPillSelect } from '../common/atom/floating-pill-select'

const reviews: Review[] = [
    {
        rating: 5,
        title: "Excellent",
        subtitle: "Staycation At Novotel | Goa | Nature Travel",
        author: "Tarun Singh",
        authorImage: "/person.svg",
        date: "Jul 08, 2023",
        verified: true,
        category: "Family",
        stay: "2-Night Stay",
        description:
            "This Was My Third Stay At Novatel And I Am Not At All Disappointed. I Just Loved Every Bit Of My Stay At This Hotel Such A Wonderful Property And Humble Staff They Have Especially The Restaurant And Chef Himself.",
        images: [
            "https://images.unsplash.com/photo-1501117716987-c8e2a51f14c7",
            "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            "extra"
        ],
        likes: 15,
        dislikes: 0
    },
    {
        rating: 5,
        title: "Excellent",
        subtitle: "Staycation At Novotel | Goa | Nature Travel",
        author: "Tarun Singh",
        authorImage: "/person.svg",
        date: "Jul 08, 2023",
        verified: true,
        category: "Family",
        stay: "2-Night Stay",
        description:
            "This Was My Third Stay At Novatel And I Am Not At All Disappointed. I Just Loved Every Bit Of My Stay At This Hotel Such A Wonderful Property And Humble Staff They Have Especially The Restaurant And Chef Himself.",
        images: [
            "https://images.unsplash.com/photo-1501117716987-c8e2a51f14c7",
            "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            "extra"
        ],
        likes: 15,
        dislikes: 0,
        replies: [
            {
                author: "Phoenix Fly",
                isAdmin: true,
                authorImage: "/person.svg",
                date: "Jul 08, 2023",
                description: "Thanks A Lot For Using Our Services. We Would Love To Offer Our Services Again To Ensure Your Seamless Travel Experience!",
                likes: 15,
                dislikes: 0
            }
        ]
    },

];

const tabs = [
    "All Reviews",
    "Hotel Reviews",
    "Package Reviews",
    "Community Trip",
    "Trekking",
    "Solo Female Travel",
    "Cruise",
    "Others",
    "Your Reviews"
];

const otherSubFilters = [
    "All",
    "Destination Wedding",
    "Cab Services",
    "Flight Services",
    "Bus Services",
    "Train Services"
];

const ReviewRatings = () => {
    const [activeTab, setActiveTab] = useState("All Reviews");
    const [activeOtherSubFilter, setActiveOtherSubFilter] = useState("All");
    return (
        <main>
            <section className='relative px-8 py-16 font-gilroy-medium'>
                <div className='max-w-6xl  mx-auto relative'>
                    <img
                        src={"/review_ratings/review_ratings-bg.png"}
                        alt="Logo"
                        className='w-full h-auto object-cover'
                    />
                    <h1 className='text-[88px] uppercase font-gilroy-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center text-white'>
                        Ratings & Reviews
                    </h1>
                    <div className='bg-gradient-to-t from-black/50 to-transparent rounded-2xl absolute bottom-0 left-0 w-full h-1/2 '></div>
                </div>


                <div className="max-w-6xl mx-auto py-10 min-h-screen">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-10">
                        <div>
                            <h1 className="text-[42px] leading-[1.2] tracking-[-0.02em] font-gilroy-semibold">User Rating & Reviews</h1>
                            <p className="text-lg font-gilroy-medium">
                                Discover The Collective Wisdom Of The Crowd Through User Ratings And Reviews
                            </p>
                        </div>
                        <Button className="bg-orange-500 text-white px-12 h-[50px] rounded-lg font-gilroy-semibold hover:bg-orange-600">
                            Write A Review
                        </Button>
                    </div>

                    {/* Tabs */}
                    <div className="flex justify-between w-full border-b border-gray-400 mb-4 text-base font-gilroy-semibold text-gray-600 overflow-x-auto no-scrollbar">
                        {tabs.map((tab, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-2 transition-colors whitespace-nowrap font-gilroy-semibold ${activeTab === tab
                                    ? "border-b-4 border-orange-500 text-black "
                                    : "text-black"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Filters */}
                    <div className="flex gap-[10px] mb-8 ">
                        <FloatingPillInput
                            label="Search By Destination, Hotel or Package"
                            defaultValue="Manali"
                        />

                        <FloatingPillSelect
                            label="Sort By"
                            defaultValue="most-liked"
                            className="w-full"
                        >
                            <option value="most-liked">Most Liked</option>
                            <option value="newest">Newest</option>
                        </FloatingPillSelect>

                    </div>

                    {/* Sub-filters for "Others" */}
                    {activeTab === "Others" && (
                        <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar">
                            {otherSubFilters.map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveOtherSubFilter(filter)}
                                    className={cn(
                                        "px-6 py-4 rounded-lg text-sm font-gilroy-semibold transition-all whitespace-nowrap flex items-center justify-center",
                                        activeOtherSubFilter === filter
                                            ? "bg-[#FFEAD7] text-orange-600"
                                            : "bg-white text-gray-800"
                                    )}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    )}


                    {/* Review Cards */}
                    <div className="space-y-4">
                        {reviews.map((review, index) => (
                            <ReviewCard key={index} review={review} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ReviewRatings