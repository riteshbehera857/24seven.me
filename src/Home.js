import React from 'react'
import Hero from './pages/Hero'
import Grooming from './pages/Grooming'
import Services from './pages/Services'
import KennelPark from './pages/KennelPark';
import Training from './pages/Training';
import Breeding from './pages/Breeding';
import Sitting from './pages/Sitting';
import DayCare from './pages/DayCare';
import PetTaxi from './pages/PetTaxi';


const Home = () => {
    return (
        <>
            <Hero />
            <Grooming />
            <Services />
            <KennelPark />
            <Training />
            <Breeding />
            <Sitting />
            <DayCare />
            <PetTaxi />
        </>
    )
}

export default Home
