"use client"

import { Button } from "@/components/ui/button"
import {
    MapPin,
    IndianRupee,
    Layers,
    Route,
    ArrowRight,
    MessageCircle,
} from "lucide-react"

export default function CustomizeBooking() {
    return (
        <section className="w-full px-8 py-20">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-gilroy-semibold text-gray-900 mb-3">
                        Customize Your Booking
                    </h2>
                    <p className="text-gray-600">
                        Customize every aspect of your journey to fit your budget,
                        schedule, and group dynamics.
                    </p>
                </div>

                {/* Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden bg-white shadow-sm">

                    {/* Left Gradient Panel */}
                    <div className="p-12 bg-gradient-to-br from-[#FFD9BD] to-[#B3E5F1]">
                        <h3 className="text-4xl font-gilroy-semibold text-gray-900 leading-tight mb-6">
                            Let Our Experts <br />
                            Tailor A{" "}
                            <span className="text-orange-500">Customized Package</span>
                            <br />
                            That Caters To <br />
                            Your Preferences
                        </h3>

                        <button className="flex items-center gap-2 text-gray-800 font-gilroy-medium hover:gap-3 transition-all">
                            Make Your Custom Itinerary Now!
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Right Content */}
                    <div className="p-12 py-16 flex flex-col justify-between">

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">

                            <Feature
                                icon={<Layers />}
                                title="100% Customized Trips"
                                desc="Tailor-made travel experiences just for you."
                            />

                            <Feature
                                icon={<Route />}
                                title="Multi-City Adventures"
                                desc="Visit multiple destinations in one seamless trip."
                            />

                            <Feature
                                icon={<MapPin />}
                                title="Instant & Flexible Planning"
                                desc="Pick your own dates that fits your schedule."
                            />

                            <Feature
                                icon={<IndianRupee />}
                                title="Budget-Friendly Trips"
                                desc="Smart recommendations that match your budget."
                            />
                        </div>

                        {/* CTA */}
                        <div className="flex gap-4 font-gilroy-medium  mt-10">
                            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 rounded-lg w-1/2">
                                Customize Now
                            </Button>

                            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-lg flex items-center gap-2 w-1/2">
                                Whatsapp Us
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

/* Feature Item */
function Feature({ icon, title, desc }) {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="mb-3 text-orange-500">
                {icon}
            </div>
            <h4 className="font-gilroy-semibold text-gray-900 mb-1">
                {title}
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed text-center">
                {desc}
            </p>
        </div>
    )
}
