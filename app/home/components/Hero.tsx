import React from "react"
import SearchBar from "./SearchBar"
import { Button } from "@/components/ui/button"

const Hero = () => {
    return (
        <section
            className="relative flex min-h-screen items-center px-4 py-8 md:px-8 md:py-16"
            style={{
                backgroundImage: "url('/home/hero-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-full  bg-black/20" />

            {/* Bottom white gradient */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[25vh] md:h-[35vh] bg-gradient-to-t from-[#F2F4F6] via-[#F2F4F6]/80 to-transparent" />

            {/* Content */}
            <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col items-center">
                <h3 className="text-base md:text-xl font-gilroy-semibold text-white mb-2 md:mb-4 text-center">
                    One Adventure At A Time
                </h3>
                <h1 className="text-6xl md:text-7xl lg:text-9xl font-gilroy-bold uppercase text-white lg:tracking-[-8px] text-center">
                    Discover
                </h1>

                {/* Search Bar */}
                <div className="mt-6 md:mt-10 w-full px-2 md:px-0 max-md:hidden">
                    <SearchBar />
                </div>

                <Button className="mt-4 md:hidden bg-black/60 rounded-3xl">
                    Search here
                </Button>
            </div>
        </section>
    )
}

export default Hero
