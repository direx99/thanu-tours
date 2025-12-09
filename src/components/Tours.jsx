import React from 'react';

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

    const handleBookNow = (tourTitle) => {
        const message = `Hi Thanu Tours, I am interested in booking the *${tourTitle}*. Please provide more details.`;
        const url = `https://wa.me/94774718374?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <section id="tours" className="section bg-light">
            <div className="container">
                <div className="section-header text-center">
                    <span className="overline">Discover Sri Lanka</span>
                    <h2>Our Exclusive Tours</h2>
                    <p>Customizable packages for 1 or more days.</p>
                </div>
                <div className="tours-grid">
                    {tours.map(tour => (
                        <article key={tour.id} className="tour-card">
                            <div className="tour-image" style={{ backgroundImage: `url('${tour.image}')` }}></div>
                            <div className="tour-content">
                                <h3>{tour.title}</h3>
                                <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.2rem', textAlign: 'left', color: '#666' }}>
                                    {tour.points.map((point, index) => (
                                        <li key={index} style={{ marginBottom: '0.3rem' }}>{point}</li>
                                    ))}
                                </ul>
                                <p className="text-sm" style={{ marginBottom: '1rem', fontStyle: 'italic', color: '#888' }}>
                                    Duration: 1 or more days (Customizable)
                                </p>
                                <button
                                    onClick={() => handleBookNow(tour.title)}
                                    className="btn-link"
                                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', padding: 0 }}
                                >
                                    Book via WhatsApp &rarr;
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tours;
