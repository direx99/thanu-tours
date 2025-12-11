import React from 'react';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa';

const Tours = () => {
    const tours = [
        {
            id: 1,
            title: "Ella Adventure",
            points: ["Ravana Waterfall", "Train Journey", "9 Arch Bridge", "Little Adam's Peak", "Tea Plantation"],
            image: "/assets/images/generated/ella.jpg"
        },
        {
            id: 2,
            title: "Galle Explorer",
            points: ["Kanda Vihara Temple", "Bentota River Safari", "Spices & Herbal Garden", "Turtle Farm", "Tsunami Memorial", "Moonstone Mine", "Hikkaduwa Beach", "Galle Dutch Fort"],
            image: "/assets/images/generated/galle.jpg"
        },
        {
            id: 3,
            title: "Kandy Cultural Tour",
            points: ["Pinnawala Elephant Orphanage", "Spices & Herbal Garden", "Tea Plantation & Factory", "Royal Botanical Garden", "Kandy Gem Mine", "Temple of the Tooth Relic"],
            image: "/assets/images/generated/kandy.jpg"
        },
        {
            id: 4,
            title: "Yala Safari",
            points: ["Full Day Wildlife Safari", "Leopard Spotting", "Bird Watching"],
            image: "/assets/images/generated/yala.jpg"
        },
        {
            id: 5,
            title: "Whale Watching",
            points: ["Whale Watching", "Stick Fishing", "Swimming at Nice Beach"],
            image: "/assets/images/generated/whale.jpg"
        },
        {
            id: 6,
            title: "Udawalawe Safari",
            points: ["Elephant Transit Home", "Jeep Safari", "Nature Trails"],
            image: "/assets/images/generated/udawalawe.jpg"
        },
        {
            id: 7,
            title: "Sigiriya & Dambulla",
            points: ["Sigiriya Lion Rock", "Dambulla Golden Rock Temple", "Village Tour"],
            image: "/assets/images/generated/sigiriya.jpg"
        },
        {
            id: 8,
            title: "Colombo City Tour",
            points: ["Lotus Tower", "Independent Square", "Gangaramaya Temple", "Shopping"],
            image: "/assets/images/generated/colombo.jpg"
        },
        {
            id: 9,
            title: "Airport Pick up/Drop",
            points: ["Hassle-free Transfer", "AC Comfort", "24/7 Service"],
            image: "/assets/images/generated/airport_kdh.jpg"
        }
    ];

    const bookingLinks = (tourTitle) => {
        const message = encodeURIComponent(`Hi Thanu Tours, I am interested in booking the *${tourTitle}*.`);
        return {
            whatsapp: `https://wa.me/94774718374?text=${message}`,
            facebook: `https://www.facebook.com/share/1AY2pjWxVS/`, // Direct profile link
            instagram: `https://ig.me/m/thanu_tours`,
            telegram: `https://t.me/+94774718374`
        };
    };

    // Import icons if not already imported at top, but since we are replacing content, we'll assume imports need to be added.
    // Wait, I need to add imports at the top. I'll do that in a separate chunk or include it if I can view the whole file context better.
    // For now, I will assume I can edit the return statement and the helper.

    return (
        <section id="tours" className="section bg-light">
            <div className="container">
                <div className="section-header text-center">
                    <span className="overline">Discover Sri Lanka</span>
                    <h2>Our Exclusive Tours</h2>
                    <p>Customizable packages for 1 or more days.</p>
                </div>
                <div className="tours-grid">
                    {tours.map(tour => {
                        const links = bookingLinks(tour.title);
                        return (
                            <article key={tour.id} className="tour-card">
                                <div className="tour-image" style={{ backgroundImage: `url('${tour.image}')` }}></div>
                                <div className="tour-content">
                                    <h3>{tour.title}</h3>
                                    <ul className="tour-points">
                                        {tour.points.map((point, index) => (
                                            <li key={index}>{point}</li>
                                        ))}
                                    </ul>
                                    <p className="tour-duration">
                                        Duration: 1 or more days (Customizable)
                                    </p>

                                    <div className="tour-booking">
                                        <span className="booking-label">Book via:</span>
                                        <div className="social-buttons">
                                            <a href={links.whatsapp} target="_blank" rel="noreferrer" className="social-btn whatsapp" aria-label="Book via WhatsApp">
                                                {/* We need icons here. I will add imports in next step or use simple text/emoji if SVG fails, but Plan said react-icons */}
                                                <FaWhatsapp />
                                            </a>
                                            <a href={links.facebook} target="_blank" rel="noreferrer" className="social-btn facebook" aria-label="Book via Facebook">
                                                <FaFacebookF />
                                            </a>
                                            <a href={links.instagram} target="_blank" rel="noreferrer" className="social-btn instagram" aria-label="Book via Instagram">
                                                <FaInstagram />
                                            </a>
                                            <a href={links.telegram} target="_blank" rel="noreferrer" className="social-btn telegram" aria-label="Book via Telegram">
                                                <FaTelegramPlane />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Tours;
