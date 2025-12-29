"use client";

import { Timer } from "lucide-react";

interface VerticalPackageCardProps {
    image: string;
    title: string;
    location: string;
    price: string;
    oldPrice: string;
    timer?: string;
    type: string;
    meta?: string;
}

export function VerticalPackageCard({
    image,
    title,
    location,
    price,
    oldPrice,
    timer,
    type,
    meta,
}: VerticalPackageCardProps) {
    return (
        <div className="relative h-[380px] md:h-[420px] rounded-3xl overflow-hidden group">
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Timer */}
            {timer && (
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-orange-500 text-white text-xs px-3 py-1.5 md:px-4 md:py-2 rounded-lg z-10">
                    <span>
                        <Timer className="h-[1em] w-[1em]" />
                    </span>
                    {timer}
                </div>
            )}

            {/* Content */}
            <div className="absolute bottom-0 p-4 md:p-5 text-white w-full font-gilroy-medium z-10">
                <span className="text-xs bg-black/50 px-3 py-1 rounded-full inline-block mb-2 backdrop-blur-sm">
                    {type}
                    {meta && <span className="ml-2">{meta}</span>}
                </span>
                <h3 className="text-lg md:text-xl font-semibold line-clamp-1">
                    {title}
                </h3>
                <p className="text-xs md:text-sm opacity-80 mb-3 truncate">
                    {location}
                </p>

                <div className="flex items-end gap-2">
                    <span className="text-xl md:text-2xl font-semibold text-white font-gilroy-semibold">
                        <span className="text-orange-400">₹</span> {price}
                    </span>
                    <span className="text-xs md:text-sm line-through opacity-60">
                        {oldPrice}
                    </span>
                    <span className="text-xs md:text-sm">Per Person</span>
                </div>
                <p className="text-[10px] md:text-xs opacity-70 mt-1">
                    Includes taxes
                </p>
            </div>
        </div>
    );
}
