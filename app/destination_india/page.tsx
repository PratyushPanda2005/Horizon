import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FloatingPillInput } from '../common/atom/floating-pill-input'
import { FloatingPillSelect } from '../common/atom/floating-pill-select'
import Hero from './compoents/Hero'
import StateCard from './compoents/StateCard'

const DESTINATIONS = [
    {
        slug: 'goa',
        name: 'Goa',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/goa.png',
        mobileImage: '/destination_india/mob/goa.png'
    },
    {
        slug: 'kerala',
        name: 'Kerala',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/kerala.png',
        mobileImage: '/destination_india/mob/kerala.png'
    },
    {
        slug: 'hp',
        name: 'Himachal Pradesh',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/himachal.png',
        mobileImage: '/destination_india/mob/himachal.png'
    },
    {
        slug: 'gujarat',
        name: 'Gujarat',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/gujurat.png',
        mobileImage: '/destination_india/mob/gujurat.png'
    },
    {
        slug: 'rajasthan',
        name: 'Rajasthan',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/rajasthan.png',
        mobileImage: '/destination_india/mob/rajasthan.png'
    },
    {
        slug: 'tamil-nadu',
        name: 'Tamil Nadu',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/tamil_nadu.png',
        mobileImage: '/destination_india/mob/tamil_nadu.png'
    },
    {
        slug: 'jammu-and-kashmir',
        name: 'Jammu and Kashmir',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/j&k.png',
        mobileImage: '/destination_india/mob/j&k.png'
    },
    {
        slug: 'karnataka',
        name: 'Karnataka',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/karnataka.png',
        mobileImage: '/destination_india/mob/karnataka.png'
    },
    {
        slug: 'meghalaya',
        name: 'Meghalaya',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/meghalaya.png',
        mobileImage: '/destination_india/mob/meghalaya.png'
    },
    {
        slug: 'madhya-pradesh',
        name: 'Madhya Pradesh',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/mp.png',
        mobileImage: '/destination_india/mob/mp.png'
    },
    {
        slug: 'uttarakhand',
        name: 'Uttarakhand',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/uttarakhand.png',
        mobileImage: '/destination_india/mob/uttarakhand.png'
    },
    {
        slug: 'uttar-pradesh',
        name: 'Uttar Pradesh',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/up.png',
        mobileImage: '/destination_india/mob/up.png'
    },
    {
        slug: 'assam',
        name: 'Assam',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/assam.png',
        mobileImage: '/destination_india/mob/assam.png'
    },
    {
        slug: 'andhra-pradesh',
        name: 'Andhra Pradesh',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/ap.png',
        mobileImage: '/destination_india/mob/ap.png'
    },
    {
        slug: 'andaman-and-nicobar-islands',
        name: 'Andaman and Nicobar Islands',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/andaman.png',
        mobileImage: '/destination_india/mob/andaman.png'
    }
]

const DestinationIndia = () => {
    return (
        <main>
            <Hero />
            <section className="w-full py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-4xl lg:text-[52px] font-gilroy-semibold text-center mb-1">
                        Explore <span className="text-primary-orange">India</span>
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg  font-gilroy-medium text-center mb-4">
                        Embark on a Journey to Explore India's Rich Heritage and Natural Beauty
                    </p>
                    <div>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
                            <div className="relative max-w-md w-full group">
                                <span className="absolute top-3 left-7 text-sm text-gray-400 pointer-events-none font-gilroy-medium">
                                    Search here
                                </span>

                                <input
                                    type="text"
                                    placeholder="Search here"
                                    className={cn(
                                        `
                                        placeholder:text-black
                                     w-full h-16 rounded-full
                                     px-7 pt-6
                                     text-sm
                                     outline-none
                                     focus:border-gray-300
                                     bg-white
                                     font-gilroy-medium
                                   `,

                                    )}
                                />
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[#16242A]/60">
                                    <Search size={24} strokeWidth={1.5} />
                                </div>
                            </div>

                            <FloatingPillSelect
                                label="Sort By"
                                defaultValue="most-liked"
                                className='w-full md:max-w-[240px]'
                            >
                                <option value="most-liked">Most Liked</option>
                                <option value="newest">Newest</option>
                            </FloatingPillSelect>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-6 mb-12'>
                        {DESTINATIONS.map((destination, index) => (
                            <StateCard
                                key={index}
                                name={destination.name}
                                description={destination.description}
                                image={destination.image}
                                mobileImage={destination.mobileImage}
                                slug={destination.slug}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DestinationIndia