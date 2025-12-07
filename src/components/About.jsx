import React from 'react';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="overline">Who We Are</span>
                    <h2>Welcome to Thanu Tours</h2>
                </div>
                <div className="about-grid">
                    <div className="about-text">
                        <p>Located in the beautiful coastal town of <strong>Maha Waskaduwa, Kalutara</strong>, Thanu Tours
                            offers authentic Sri Lankan experiences tailored just for you. Whether you are seeking
                            adventure, culture, or relaxation, we make it happen.</p>
                        <p>We also run a comfortable <strong>Guest House</strong> designed for foreigners looking for a home
                            away from home. Experience warm hospitality and local charm with us.</p>
                    </div>
                    <div className="about-stats">
                        <div className="stat-item">
                            <h3>5+</h3>
                            <p>Years Experience</p>
                        </div>
                        <div className="stat-item">
                            <h3>100+</h3>
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
