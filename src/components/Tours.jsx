import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toursData } from '../data/toursData';
import { FaArrowRight, FaClock, FaStar, FaWhatsapp, FaMapMarkerAlt, FaCheckCircle, FaSlidersH } from 'react-icons/fa';

const Tours = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All Packages' },
        { id: 'multi-day', label: '7-Day Grand Tours' },
        { id: 'short-break', label: '2 - 4 Day Getaways' },
        { id: 'day-trip', label: 'Day Excursions' }
    ];

    const filteredTours = selectedCategory === 'all'
        ? toursData
        : toursData.filter(tour => tour.category === selectedCategory);

    return (
        <section id="tours" className="section bg-light tours-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="overline">Tailored Island Journeys</span>
                    <h2>Sri Lanka Tour Packages & Rates</h2>
                    <p className="section-subtitle">
                        Private chauffeur-guided itineraries with comfortable air-conditioned vehicle, handpicked hotels, and authentic experiences. All prices in USD with no hidden surprises.
                    </p>
                </div>

                {/* Category Filter Pills */}
                <div className="tour-filters-wrapper">
                    <div className="tour-filters" role="tablist" aria-label="Filter tours by category">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                role="tab"
                                aria-selected={selectedCategory === cat.id}
                                className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(cat.id)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tour Cards Grid */}
                <div className="tours-grid">
                    {filteredTours.map(tour => {
                        const whatsappMessage = encodeURIComponent(
                            `Hi Thanu Tours, I am interested in the "${tour.title}" package ($${tour.priceUSD} USD / ${tour.duration}). Can you please share availability and details?`
                        );
                        const whatsappUrl = `https://wa.me/94774718374?text=${whatsappMessage}`;

                        return (
                            <article key={tour.id} className="tour-card">
                                <div className="tour-image" style={{ backgroundImage: `url('${tour.image}')` }}>
                                    <div className="tour-image-overlay"></div>
                                    {tour.badge && (
                                        <span className="tour-ribbon-badge">{tour.badge}</span>
                                    )}
                                    <div className="tour-duration-badge">
                                        <FaClock className="me-1" /> {tour.duration}
                                    </div>
                                </div>

                                <div className="tour-content">
                                    <div className="tour-header-meta">
                                        <div className="tour-rating">
                                            <FaStar className="star-icon" />
                                            <span>{tour.rating}</span>
                                            <span className="reviews-count">({tour.reviewsCount} reviews)</span>
                                        </div>
                                        <span className="customizable-pill">100% Customizable</span>
                                    </div>

                                    <h3 className="tour-title">
                                        <Link to={`/tours/${tour.id}`}>{tour.title}</Link>
                                    </h3>
                                    
                                    <p className="tour-summary">{tour.summary}</p>

                                    {/* Destination Tags */}
                                    {tour.tags && (
                                        <div className="tour-tag-list">
                                            {tour.tags.slice(0, 4).map((tag, idx) => (
                                                <span key={idx} className="tour-tag">
                                                    <FaMapMarkerAlt className="tag-pin" /> {tag}
                                                </span>
                                            ))}
                                            {tour.tags.length > 4 && (
                                                <span className="tour-tag more">+{tour.tags.length - 4} more</span>
                                            )}
                                        </div>
                                    )}

                                    {/* Highlights snippet */}
                                    <div className="tour-highlights-box">
                                        <span className="highlights-label">Key Highlights:</span>
                                        <ul className="tour-points">
                                            {tour.itinerary.slice(0, 2).map((day, index) => (
                                                <li key={index}>
                                                    <strong>Day {day.day}:</strong> {day.title}
                                                </li>
                                            ))}
                                            {tour.itinerary.length > 2 && (
                                                <li className="more-days-hint">
                                                    + {tour.itinerary.length - 2} more days of adventure
                                                </li>
                                            )}
                                        </ul>
                                    </div>

                                    {/* Price and CTA Section */}
                                    <div className="tour-card-footer">
                                        <div className="tour-price-block">
                                            <div className="price-label-row">
                                                <span className="price-label">Starting from</span>
                                                <span className="price-currency-tag">USD</span>
                                            </div>
                                            <div className="price-value-row">
                                                <span className="price-currency">$</span>
                                                <span className="price-amount">{tour.priceUSD}</span>
                                                <span className="price-subnote-inline">/ person</span>
                                            </div>
                                            <span className="price-subnote">{tour.priceNote}</span>
                                        </div>

                                        <div className="tour-action-buttons">
                                            <Link 
                                                to={`/tours/${tour.id}`} 
                                                className="btn btn-primary btn-view-tour"
                                            >
                                                View Itinerary <FaArrowRight className="ms-1" />
                                            </Link>
                                            <a 
                                                href={whatsappUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-card-whatsapp"
                                                title="Inquire via WhatsApp"
                                                aria-label={`Inquire about ${tour.title} on WhatsApp`}
                                            >
                                                <FaWhatsapp className="me-1" /> WhatsApp
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Custom Package Banner */}
                <div className="custom-tour-banner">
                    <div className="custom-tour-content">
                        <div className="custom-tour-badge">Custom Tailor-Made Trips</div>
                        <h3>Have a specific itinerary or budget in mind?</h3>
                        <p>
                            We specialize in fully bespoke itineraries. Tell us your travel dates, group size, and must-see places, and Thanu will build your personalized travel plan with a transparent USD quote.
                        </p>
                    </div>
                    <div className="custom-tour-cta">
                        <a 
                            href="https://wa.me/94774718374?text=Hi%20Thanu%20Tours%2C%20I%20would%20like%20a%20customized%20tour%20itinerary%20for%20Sri%20Lanka." 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-whatsapp-large"
                        >
                            <FaWhatsapp className="me-2" /> Request Custom Quote
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tours;
