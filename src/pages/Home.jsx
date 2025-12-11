import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Host from '../components/Host';
import Tours from '../components/Tours';

import Gallery from '../components/Gallery';
import Feedbacks from '../components/Feedbacks';
import FollowUs from '../components/FollowUs';


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
            <Host />
            <Tours />

            <Gallery />
            <Feedbacks />
            <FollowUs />
        </main>
    );
};

export default Home;
