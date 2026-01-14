import Hero from './compoents/Hero'
import StateCard from './compoents/StateCard'

const DESTINATIONS = [
    {
        name: 'Goa',
        description: 'Goa is a state in western India on the Malabar Coast of the Arabian Sea. It is known for its beaches, temples, and colonial architecture.',
        image: '/destination_india/goa.png'
    },
    {
        name: 'Kerala',
        description: 'Kerala is a state on the southwestern Malabar Coast of India. It is known for its palm-lined beaches and backwaters.',
        image: '/destination_india/kerala.png'
    },
    {
        name: 'Himachal Pradesh',
        description: 'Himachal Pradesh is a northern Indian state in the Himalayas. It is home to scenic mountain towns and resorts.',
        image: '/destination_india/himachal.png'
    },
    {
        name: 'Gujarat',
        description: 'Gujarat is a state in western India. It is known for its beaches, temples, and colonial architecture.',
        image: '/destination_india/gujurat.png'
    },
    {
        name: 'Rajasthan',
        description: 'Rajasthan is a state in northern India. It is known for its majestic forts, vibrant culture, and the vast Thar Desert.',
        image: '/destination_india/rajasthan.png'
    },
    {
        name: 'Tamil Nadu',
        description: 'Tamil Nadu is a state in southern India. It is known for its rich cultural heritage, vibrant festivals, and scenic beauty.',
        image: '/destination_india/tamil_nadu.png'
    },
    {
        name: 'Jammu and Kashmir',
        description: 'Jammu and Kashmir is a state in northern India. It is known for its scenic beauty, vibrant culture, and the famous Kashmir Valley.',
        image: '/destination_india/j&k.png'
    },
    {
        name: 'Karnataka',
        description: 'Karnataka is a state in southwestern India. It is known for its beaches, temples, and colonial architecture.',
        image: '/destination_india/karnataka.png'
    },
    {
        name: 'Meghalaya',
        description: 'Meghalaya is a state in northeastern India. It is known for its scenic beauty, vibrant culture, and the famous Meghalaya Valley.',
        image: '/destination_india/meghalaya.png'
    },
    {
        name: 'Madhya Pradesh',
        description: 'Madhya Pradesh is a state in central India. It is known for its scenic beauty, vibrant culture, and the famous Madhya Pradesh Valley.',
        image: '/destination_india/mp.png'
    },
    {
        name: 'Uttarakhand',
        description: 'Uttarakhand is a state in northern India. It is known for its scenic beauty, vibrant culture, and the famous Uttarakhand Valley.',
        image: '/destination_india/uttarakhand.png'
    },
    {
        name: 'Uttar Pradesh',
        description: 'Uttar Pradesh is a state in northern India. It is known for its scenic beauty, vibrant culture, and the famous Uttarakhand Valley.',
        image: '/destination_india/up.png'
    },
    {
        name: 'Assam',
        description: 'Assam is a state in northeastern India. It is known for its scenic beauty, vibrant culture, and the famous Assam Valley.',
        image: '/destination_india/assam.png'
    },
    {
        name: 'Andhra Pradesh',
        description: 'Andhra Pradesh is a state in southeastern India. It is known for its scenic beauty, vibrant culture, and the famous Andhra Pradesh Valley.',
        image: '/destination_india/ap.png'
    },
    {
        name: 'Andaman and Nicobar Islands',
        description: 'Andaman and Nicobar Islands is a state in northeastern India. It is known for its scenic beauty, vibrant culture, and the famous Andaman and Nicobar Islands Valley.',
        image: '/destination_india/andaman.png'
    }
]

const DestinationIndia = () => {
    return (
        <main>
            <Hero />
            <section className="w-full py-16">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-4xl font-gilroy-semibold text-center mb-3">
                        Explore <span className="text-primary-orange">India</span>
                    </h2>
                    <p className="text-base text-gray-500 font-gilroy-medium text-center mb-8">
                        Embark on a Journey to Explore India's Rich Heritage and Natural Beauty
                    </p>
                    <div>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
                            <div className="w-full md:max-w-md">
                                <input
                                    type="text"
                                    placeholder="Search destinations..."
                                    className="w-full px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-orange/20 focus:border-primary-orange font-gilroy-medium bg-white"
                                />
                            </div>
                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <label className="text-gray-600 font-gilroy-medium whitespace-nowrap">Sort by:</label>
                                <select className="flex-1 md:w-48 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-orange/20 focus:border-primary-orange font-gilroy-medium bg-white cursor-pointer">
                                    <option value="all">All Destinations</option>
                                    <option value="popular">Most Popular</option>
                                    <option value="rating">Top Rated</option>
                                    <option value="newest">Newest Added</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-6 mb-12'>
                        {DESTINATIONS.map((destination, index) => (
                            <StateCard
                                key={index}
                                name={destination.name}
                                description={destination.description}
                                image={destination.image}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DestinationIndia