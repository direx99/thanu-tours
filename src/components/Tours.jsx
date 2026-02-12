import React from 'react';
import { Link } from 'react-router-dom';
import { toursData } from '../data/toursData';
import { FaArrowRight, FaClock } from 'react-icons/fa';

const Tours = () => {
    return (
        <section id="tours" className="section bg-light">
            <div className="container">
                <div className="section-header text-center">
                    <span className="overline">Discover Sri Lanka</span>
                    <h2>Our Exclusive Tours</h2>
                    <p>Customizable packages tailored just for you.</p>
                </div>
                <div className="tours-grid">
                    {toursData.map(tour => (
                        <article key={tour.id} className="tour-card">
                            <div className="tour-image" style={{ backgroundImage: `url('${tour.image}')` }}>
                                <div className="tour-duration-badge">
                                    <FaClock className="me-1" /> {tour.duration}
                                </div>
                            </div>
                            <div className="tour-content">
                                <h3>{tour.title}</h3>
                                <p className="tour-summary small text-muted mb-3">{tour.summary}</p>

                                <h4 className="h6 mt-3 mb-2 text-primary">Highlights:</h4>
                                <ul className="tour-points mb-4">
                                    {tour.itinerary.slice(0, 3).map((day, index) => (
                                        <li key={index} className="text-truncate">
                                            Day {day.day}: {day.title}
                                        </li>
                                    ))}
                                    {tour.itinerary.length > 3 && (
                                        <li className="text-muted small fst-italic">+ {tour.itinerary.length - 3} more days</li>
                                    )}
                                </ul>

                                <div className="tour-booking mt-auto">
                                    <Link to={`/tours/${tour.id}`} className="btn btn-primary w-100 d-flex align-items-center justify-content-center">
                                        View Details <FaArrowRight className="ms-2" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tours;
