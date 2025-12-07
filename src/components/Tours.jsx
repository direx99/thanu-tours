import React from 'react';

const Tours = () => {
    const tours = [
        {
            id: 1,
            title: "Coastal Bliss",
            description: "Explore the golden sandy beaches of the southern coast. Mirissa, Unawatuna, and Hikkaduwa await.",
            image: "/assets/images/tour-beach.jpg"
        },
        {
            id: 2,
            title: "Hill Country Escape",
            description: "Ride the train to Ella, see the Nine Arch Bridge, and feel the cool mist of Nuwara Eliya.",
            image: "/assets/images/tour-hills.jpg"
        },
        {
            id: 3,
            title: "Cultural Triangle",
            description: "Step back in time at Sigiriya, Polonnaruwa, and the Temple of the Tooth in Kandy.",
            image: "/assets/images/tour-culture.jpg"
        }
    ];

    return (
        <section id="tours" className="section bg-light">
            <div className="container">
                <div className="section-header text-center">
                    <span className="overline">Discover</span>
                    <h2>Our Popular Tours</h2>
                </div>
                <div className="tours-grid">
                    {tours.map(tour => (
                        <article key={tour.id} className="tour-card">
                            <div className="tour-image" style={{ backgroundImage: `url('${tour.image}')` }}></div>
                            <div className="tour-content">
                                <h3>{tour.title}</h3>
                                <p>{tour.description}</p>
                                <a href="#contact" className="btn-link">Book Now &rarr;</a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tours;
