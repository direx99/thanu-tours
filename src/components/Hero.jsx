import React, { useState, useEffect } from 'react';

// Import specific images for the slider
import img1 from '../assets/images/gallery/IMG_4615.webp';
import img2 from '../assets/images/gallery/IMG_0431.webp';
import img3 from '../assets/images/gallery/IMG_4584.webp';
import img5 from '../assets/images/gallery/IMG_0724.webp';
import img6 from '../assets/images/gallery/IMG_6549.webp';

const Hero = () => {
    const images = [img1, img2, img3, img5, img6];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <header id="home" className="hero">
            <div className="hero-slider">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <h1 className="hero-title">Experience the Magic of Sri Lanka</h1>
                <p className="hero-subtitle">Unforgettable journeys and personalized tours across the paradise island.</p>
                <div className="hero-buttons">
                    <a href="#tours" className="btn btn-primary">Explore Tours</a>
                </div>
            </div>
            <div className="scroll-down">
                {/* Icon can be added here if needed */}
            </div>
        </header>
    );
};

export default Hero;
