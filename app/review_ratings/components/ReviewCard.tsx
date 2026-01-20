import { ThumbsDown, ThumbsUp, X } from "lucide-react";
import React from "react";

export interface Reply {
    author: string;
    isAdmin: boolean;
    date: string;
    description: string;
    likes: number;
    dislikes: number;
    authorImage?: string;
}

export interface Review {
    rating: number;
    title: string;
    subtitle: string;
    author: string;
    authorImage?: string;
    date: string;
    verified: boolean;
    category: string;
    stay: string;
    description: string;
    images: string[];
    likes: number;
    dislikes: number;
    replies?: Reply[];
}

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
    return (
        <div className="bg-white rounded-2xl py-5 px-6 border border-gray-100 font-gilroy-medium">
            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
                <span className="bg-orange-500 text-white text-base font-gilroy-bold px-4 py-1 rounded-md">
                    {review.rating} ★
                </span>
                <h3 className="text-[22px] leading-tight font-gilroy-semibold">{review.title}</h3>
            </div>

            <p className="text-lg tracking-[-0.02em] font-gilroy-semibold mb-3">{review.subtitle}</p>

            {/* Meta */}
            <div className="flex flex-wrap items-center text-lg tracking-[-0.02em] gap-2 mb-4 ">
                <img
                    src={review.authorImage || "/person.svg"}
                    className="w-8 h-8 rounded-full"
                    alt={review.author}
                />
                <span className="font-gilroy-medium ">{review.author}</span>
                <span className="w-2 h-2 bg-[#bcbcbc] rounded-full"></span>
                <span>{review.date}</span>
                {review.verified && (
                    <>
                        <span className="w-2 h-2 bg-[#bcbcbc] rounded-full"></span>
                        <span className="flex items-center gap-1 font-gilroy-medium">
                            <img src="/icons/solar_verified-check-bold.svg" alt="" />
                            Verified Traveler</span>
                    </>
                )}
                <span className="w-2 h-2 bg-[#bcbcbc] rounded-full"></span>
                <span>Category: {review.category}</span>
                <span className="w-2 h-2 bg-[#bcbcbc] rounded-full"></span>
                <span>{review.stay}</span>
            </div>

            {/* Description */}
            <p className="leading-relaxed mb-6 tracking-[-0.02em]">
                {review.description}
            </p>

            {/* Images */}
            <div className="flex gap-2 mb-5">
                {review.images.slice(0, 4).map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt="review"
                        className="w-[125px] h-[125px] rounded-lg object-cover"
                    />
                ))}

                {review.images.length > 4 && (
                    <div className="w-[125px] h-[125px] rounded-lg bg-black/80 flex items-center justify-center text-white font-gilroy-bold">
                        5+
                    </div>
                )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
                <button className="gap-1 border rounded-lg px-3 py-[6px] text-base font-gilroy-semibold text-black hover:bg-gray-50 flex justify-center items-center">
                    <span className="font-gilroy-semibold text-white"><ThumbsUp fill="#A3A3A3" border-color="#A3A3A3" size={20} /></span > <span>{review.likes}</span>
                </button>
                <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                <button className="gap-1 border rounded-lg px-3 py-[6px] text-base font-gilroy-semibold text-black hover:bg-gray-50 flex justify-center items-center">
                    <span className="font-gilroy-semibold text-white"><ThumbsDown fill="#A3A3A3" border-color="#A3A3A3" size={20} /></span> <span>{review.dislikes}</span>
                </button>
            </div>

            {/* Replies Section */}
            {review.replies && review.replies.length > 0 && (
                <div className="mt-6 pt-4 border-t border-black">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-[22px] font-gilroy-semibold">Replies</h4>
                        <X size={24} className="cursor-pointer" />
                    </div>

                    <div className="space-y-4">
                        {review.replies.map((reply, index) => (
                            <div key={index} className="bg-[#FFF5ED] rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <img
                                        src={reply.authorImage || "/person.svg"}
                                        className="w-8 h-8 rounded-full"
                                        alt={reply.author}
                                    />
                                    <div className="flex items-center gap-2">
                                        <span className={`text-lg font-gilroy-medium ${reply.isAdmin ? 'text-primary-orange' : ''}`}>
                                            {reply.author} {reply.isAdmin && <span className="text-primary-orange font-gilroy-medium">(Admin)</span>}
                                        </span>
                                        <span className="w-2 h-2 bg-[#bcbcbc] rounded-full"></span>
                                        <span className="text-lg font-gilroy-medium">{reply.date}</span>
                                    </div>
                                </div>

                                <p className="leading-relaxed text-base mb-2 tracking-[-0.02em] font-gilroy-medium">
                                    {reply.description}
                                </p>
                                <div className="flex items-center gap-3">
                                    <button className="gap-1 border rounded-lg px-3 py-[6px] text-base font-gilroy-semibold text-black hover:bg-gray-50 flex justify-center items-center">
                                        <span className="font-gilroy-semibold text-white"><ThumbsUp fill="#A3A3A3" border-color="#A3A3A3" size={20} /></span > <span>{review.likes}</span>
                                    </button>
                                    <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                                    <button className="gap-1 border rounded-lg px-3 py-[6px] text-base font-gilroy-semibold text-black hover:bg-gray-50 flex justify-center items-center">
                                        <span className="font-gilroy-semibold text-white"><ThumbsDown fill="#A3A3A3" border-color="#A3A3A3" size={20} /></span> <span>{review.dislikes}</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReviewCard;
