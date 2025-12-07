import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <header id="home" className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Experience the <span className="text-gradient">Magic</span> of Sri Lanka</h1>
                <p className="hero-subtitle">Unforgettable journeys, personalized tours, and a cozy stay at our Guest House in Kalutara.</p>
                <div className="hero-buttons">
                    <a href="#tours" className="btn btn-primary">Explore Tours</a>
                    <Link to="/villa" className="btn btn-outline">View Guest House</Link>
                </div>
            </div>
            <div className="scroll-down">
                {/* Icon can be added here if needed */}
            </div>
        </header>
    );
};

export default Hero;
