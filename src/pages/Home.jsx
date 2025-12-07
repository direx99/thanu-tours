import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Tours from '../components/Tours';
import GuestHouse from '../components/GuestHouse';
import Gallery from '../components/Gallery';
import Feedbacks from '../components/Feedbacks';
import Instagram from '../components/Instagram';


const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.targetId) {
            const element = document.getElementById(location.state.targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <main>
            <Hero />
            <About />
            <Tours />
            <GuestHouse />
            <Gallery />
            <Feedbacks />
            <Instagram />
        </main>
    );
};

export default Home;
