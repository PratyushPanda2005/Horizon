import React from 'react'
import TrendingPackages from './components/TrendingPackages'
import NatureEscapes from './components/NatureEscapes'
import VisaOnArrival from './components/VisaOnArrival'
import DestinationSlider from '../common/DestinationSlider';
import TripsByDuration from './components/TripsByDuration';

const visaTrips = [
    {
        title: "Thailand",
        desc: "Ancient ruins, island tales, Mediterranean sun.",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
        title: "Vietnam",
        desc: "Backwaters, spice gardens, lush hills",
        img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },
    {
        title: "Maldives",
        desc: "Endless trail paths, wild coasts and pure air",
        img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    },
    {
        title: "Mauritius",
        desc: "Frozen beauty, deep fjords, northern lights",
        img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    },
];

const DestinationPage = () => {
    return (
        <main>
            <TrendingPackages />
            <NatureEscapes />
            <VisaOnArrival />
            <TripsByDuration />
            <DestinationSlider
                title="Visa on Arrival Destinations"
                items={visaTrips}
                prevClass="visa-prev"
                nextClass="visa-next"
            />
        </main>
    )
}

export default DestinationPage