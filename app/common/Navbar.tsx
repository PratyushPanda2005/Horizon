import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Navbar() {
    return (
        <header className="w-full">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 absolute top-0 left-0 right-0 bg-none z-10">
                {/* Left */}
                <div className="flex items-center gap-10">
                    <img
                        src={"/about/logos/logo.svg"}
                        className=""
                    />

                    <nav className="hidden md:flex items-center gap-6 text-sm text-text font-gilroy-semibold">
                        <NavItem label="Destination" />
                        <NavItem label="Explore Extraordinary" />
                        <NavItem label="Offers" />
                        <NavItem label="Support" />
                        <NavItem label="Review & Ratings" />
                        <NavItem label="About Us" />
                        <span className="cursor-pointer hover:text-white">Blogs</span>
                    </nav>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">
                    <Button
                        variant="secondary"
                        className=" bg-slate-700 text-white hover:bg-slate-600"
                    >
                        Signup
                    </Button>
                    <Button
                        variant="secondary"
                        className=" bg-slate-500 text-white hover:bg-slate-400"
                    >
                        Login
                    </Button>
                </div>
            </div>
        </header>
    )
}

function NavItem({ label }: { label: string }) {
    return (
        <div className="flex cursor-pointer items-center gap-1 hover:text-white">
            <span>{label}</span>
            <ChevronDown className="h-4 w-4" />
        </div>
    )
}
