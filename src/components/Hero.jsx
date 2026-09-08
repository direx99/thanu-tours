import React, { useState, useEffect } from 'react';
import { FaCar, FaAward, FaLanguage, FaTags, FaArrowDown, FaWhatsapp } from 'react-icons/fa';

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
        <>
            <header id="home" className="hero">
                <div className="hero-slider">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${img})` }}
                            aria-hidden={index !== currentIndex}
                        ></div>
                    ))}
                    <div className="hero-overlay"></div>
                </div>

                <div className="hero-content">
                    <span className="hero-badge">Authentic Sri Lankan Hospitality</span>
                    <h1 className="hero-title">Experience the Magic of Sri Lanka</h1>
                    <p className="hero-subtitle">
                        Personalized private tours, comfortable air-conditioned transport, and unforgettable island adventures with local expert guide Thanu.
                    </p>
                    <div className="hero-buttons">
                        <a href="#tours" className="btn btn-primary">
                            Explore Tour Packages
                        </a>
                        <a 
                            href="https://wa.me/94774718374?text=Hi%20Thanu%20Tours%2C%20I%20would%20like%20to%20plan%20a%20customized%20tour%20in%20Sri%20Lanka." 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-hero-whatsapp"
                        >
                            <FaWhatsapp className="me-2" /> Plan Custom Trip
                        </a>
                    </div>
                </div>

                <div className="scroll-down-indicator">
                    <a href="#tours" aria-label="Scroll to tours">
                        <FaArrowDown />
                    </a>
                </div>
            </header>

            {/* Trust Credentials Bar */}
            <section className="hero-trust-bar" aria-label="Key features">
                <div className="container trust-container">
                    <div className="trust-item">
                        <div className="trust-icon"><FaAward /></div>
                        <div className="trust-text">
                            <h4>15+ Years Experience</h4>
                            <p>5-Star rated personal guide</p>
                        </div>
                    </div>
                    <div className="trust-item">
                        <div className="trust-icon"><FaCar /></div>
                        <div className="trust-text">
                            <h4>Private A/C Vehicles</h4>
                            <p>Safe cars & vans with dedicated driver</p>
                        </div>
                    </div>
                    <div className="trust-item">
                        <div className="trust-icon"><FaLanguage /></div>
                        <div className="trust-text">
                            <h4>Multilingual Host</h4>
                            <p>English, German & Russian speaking</p>
                        </div>
                    </div>
                    <div className="trust-item">
                        <div className="trust-icon"><FaTags /></div>
                        <div className="trust-text">
                            <h4>Transparent USD Prices</h4>
                            <p>No hidden costs, 100% customizable</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
