import Hero from './components/Hero'
import ExclusiveDeals from './components/ExclusiveDeals'
import HeroBanner from './components/Banners'
import ExploreThemes from './components/ExploreThemes'
import HeroSlider from '../common/HeroSlider'
import EarlyBirdOffers from './components/EarlyBirdOffers'


const slides = [
    {
        title: "Solo/Group Female Travellers",
        offer: "Your safety and peace of mind are our utmost priorities",
        cta: "Book Now",
        image: "/home/variant/variant1.png",
    },
    {
        title: "SUMMER",
        offer: "UP TO 40% OFF",
        cta: "Explore Now",
        image: "/home/variant/variant2.png",
    },
    {
        title: "WEEKEND",
        offer: "SPECIAL DEALS",
        cta: "View Deals",
        image: "/home/variant/variant3.png",
    },
]


const HomePage = () => {
    return (
        <section>
            <Hero />
            <ExclusiveDeals />
            <HeroBanner />
            <ExploreThemes />
            <HeroSlider
                heading="Experience the Extraordinary"
                subheading="Immerse yourself in extraordinary journeys tailored to your style"
                slides={slides}
            />
            <EarlyBirdOffers />
        </section>
    )
}

export default HomePage