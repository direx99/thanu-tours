import React from 'react';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="overline">Who We Are</span>
                    <h2>Welcome to Thanu Tours</h2>
                    <p>
                        Welcome to <strong>Thanu Tours</strong>, your gateway to the wonders of Sri Lanka.
                        Based in the beautiful coastal town of Kalutara, we specialize in creating personalized
                        travel experiences that showcase the rich culture, stunning landscapes, and wildlife of our island.
                    </p>
                </div>
                <div className="about-grid">
                    <div className="about-stats">
                        <div className="stat-item">
                            <h3>15+</h3>
                            <p>Years Experience</p>
                        </div>
                        <div className="stat-item">
                            <h3>500+</h3>
                            <p>Happy Guests</p>
                        </div>
                        <div className="stat-item">
                            <h3>24/7</h3>
                            <p>Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
