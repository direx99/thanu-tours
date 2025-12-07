import React from 'react';
import { Link } from 'react-router-dom';

const GuestHouse = () => {
    return (
        <section id="guest-house" className="section">
            <div className="container guest-house-container">
                <div className="guest-house-content">
                    <span className="overline">Accommodation</span>
                    <h2>Your Home in Kalutara</h2>
                    <p>Our Guest House is specifically designed for international travelers. Enjoy modern amenities, clean
                        rooms, and a peaceful environment just steps away from the beach.</p>
                    <ul className="features-list">
                        <li>AC Rooms with Attached Bathrooms</li>
                        <li>Free Wi-Fi & Breakfast</li>
                        <li>Close to the Beach</li>
                        <li>Local Home-Cooked Meals</li>
                    </ul>
                    <Link to="/villa" className="btn btn-primary">View Details & Book</Link>
                </div>
                <div className="guest-house-gallery">
                    <div className="gh-img-large"
                        style={{ backgroundImage: "url('/assets/images/gh-room.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <div className="gh-img-small"
                        style={{ backgroundImage: "url('/assets/images/gh-garden.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GuestHouse;
