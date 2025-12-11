import React from 'react';
import hostImg from '../assets/images/host.jpg';

const Host = () => {
    return (
        <section id="host" className="section bg-light">
            <div className="container">
                <div className="host-container">
                    <div className="host-image-wrapper">
                        <img src={hostImg} alt="Thanu Silva" className="host-img" />
                    </div>
                    <div className="host-content">
                        <span className="overline">Meet Your Guide</span>
                        <h2>Thanu Silva</h2>
                        <h4 className="host-role">Owner & Host of Thanu Tours</h4>
                        <p className="lead">
                            A friendly and energetic host with over 15 years of experience in Sri Lankan tourism.
                        </p>
                        <p>
                            Thanu is dedicated to showing you the real Sri Lanka. With his deep knowledge of the island and warm hospitality,
                            he ensures every guest feels like family. He is fluent in multiple languages, making communication easy and enjoyable for travelers from around the world.
                        </p>

                        <div className="languages-spoken">
                            <h5>Languages Spoken:</h5>
                            <div className="tags">
                                <span className="tag">English</span>
                                <span className="tag">German</span>
                                <span className="tag">Russian</span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <a href="#contact" className="btn btn-primary">Contact Thanu</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Host;
