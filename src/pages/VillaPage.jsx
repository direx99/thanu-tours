import React, { useEffect } from 'react';
import VillaGallery from '../components/VillaGallery';

const VillaPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            {/* Villa Hero */}
            <header className="hero" style={{ height: '60vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/assets/images/gh-room.jpg")' }}>
                <div className="hero-content">
                    <h1 className="hero-title">Happy House <span className="text-gradient">Villa</span></h1>
                    <p className="hero-subtitle">Your private sanctuary just 100m from the beach.</p>
                    <div className="hero-buttons">
                        <a href="https://www.booking.com/Share-Ra6788" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ backgroundColor: '#003580' }}>Book on Booking.com</a>
                        <a href="https://www.agoda.com/happy-house-villa/hotel/wadduwa-lk.html?cid=1844104" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: '#333' }}>Book on Agoda</a>
                    </div>
                </div>
            </header>

            {/* Overview */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="overline">The Villa</span>
                        <h2>Overview</h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-gray)' }}>
                            Welcome to <strong>Happy House Villa</strong>. Whether you want to rent the full villa for ultimate privacy or just enjoy a Bed & Breakfast stay, we have you covered. Located just 100 meters from the beautiful beach, our villa offers the perfect blend of modern comfort and tropical serenity.
                        </p>
                    </div>

                    {/* Amenities Grid */}
                    <div className="about-grid" style={{ marginTop: '4rem' }}>
                        <div>
                            <h3 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Amenities</h3>
                            <ul className="features-list">
                                <li><strong>3 Modern Bedrooms</strong></li>
                                <li><strong>3 Attached Bathrooms</strong></li>
                                <li>Modern Kitchen</li>
                                <li>Spacious Lobby</li>
                                <li>Private Parking</li>
                                <li>Free High-Speed Wi-Fi</li>
                                <li>100m to the Beach</li>
                                <li>BBQ Facilities (Internal request)</li>
                            </ul>
                        </div>
                        <div className="gh-img-large" style={{ width: '100%', height: '400px', backgroundImage: 'url("/assets/images/gh-garden.jpg")', backgroundSize: 'cover' }}></div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <VillaGallery />

            {/* Booking CTA Section */}
            <section className="section bg-light text-center">
                <div className="container">
                    <h2>Ready for your stay?</h2>
                    <p className="mt-4">Book now through your favorite platform for the best rates.</p>
                    <div className="hero-buttons mt-4">
                        <a href="https://www.booking.com/Share-Ra6788" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book on Booking.com</a>
                        <a href="https://www.agoda.com/happy-house-villa/hotel/wadduwa-lk.html?cid=1844104" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: 'linear-gradient(to right, #e4405f, #fd1d1d)' }}>Book on Agoda</a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default VillaPage;
