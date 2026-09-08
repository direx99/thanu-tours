import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toursData } from '../data/toursData';
import {
    FaWhatsapp,
    FaFacebookF,
    FaInstagram,
    FaTelegramPlane,
    FaClock,
    FaCheckCircle,
    FaTimesCircle,
    FaMapMarkerAlt,
    FaEnvelope,
    FaStar,
    FaShieldAlt,
    FaArrowRight,
    FaCalendarCheck,
    FaUserCheck
} from 'react-icons/fa';

const TourDetails = () => {
    const { id } = useParams();
    const tour = toursData.find(t => t.id === parseInt(id));
    const [activeDay, setActiveDay] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!tour) {
        return (
            <div className="section text-center not-found-section">
                <div className="container">
                    <h2>Tour Package Not Found</h2>
                    <p className="text-muted mb-4">We couldn't find the tour you are looking for.</p>
                    <Link to="/#tours" className="btn btn-primary">Browse All Tours</Link>
                </div>
            </div>
        );
    }

    const bookingLinks = (tourTitle, price) => {
        const message = encodeURIComponent(
            `Hi Thanu Tours, I am interested in booking the *${tourTitle}* package ($${price} USD). Please let me know available dates and details.`
        );
        const emailSubject = encodeURIComponent(`Booking Inquiry: ${tourTitle} ($${price} USD)`);
        const emailBody = encodeURIComponent(
            `Hello Thanu,\n\nI would like to inquire about booking the "${tourTitle}" package ($${price} USD).\nTravel Dates:\nNumber of Travelers:\nPickup Location:\n\nThank you!`
        );

        return {
            whatsapp: `https://wa.me/94774718374?text=${message}`,
            facebook: `https://www.facebook.com/share/1AY2pjWxVS/`,
            instagram: `https://ig.me/m/thanu_tours`,
            telegram: `https://t.me/+94774718374`,
            email: `mailto:toursthanu@gmail.com?subject=${emailSubject}&body=${emailBody}`
        };
    };

    const links = bookingLinks(tour.title, tour.priceUSD);
    const relatedTours = toursData.filter(t => t.id !== tour.id).slice(0, 3);

    return (
        <div className="tour-details-page">
            {/* Modern Hero Section */}
            <div className="page-hero" style={{ backgroundImage: `url('${tour.image}')` }}>
                <div className="overlay"></div>
                <div className="container hero-content">
                    <div className="breadcrumbs">
                        <Link to="/">Home</Link> <span>/</span>
                        <a href="/#tours">Tours</a> <span>/</span>
                        <span className="current-crumb">{tour.title}</span>
                    </div>

                    <div className="tour-details-hero-badges">
                        {tour.badge && <span className="tour-badge-pill">{tour.badge}</span>}
                        <span className="tour-rating-pill">
                            <FaStar className="star" /> {tour.rating} ({tour.reviewsCount} reviews)
                        </span>
                        <span className="tour-duration-pill">
                            <FaClock className="me-1" /> {tour.duration}
                        </span>
                    </div>

                    <h1 className="tour-page-title">{tour.title}</h1>
                    <p className="tour-page-subtitle">{tour.summary}</p>
                </div>
            </div>

            {/* Quick Meta Strip */}
            <section className="tour-meta-strip">
                <div className="container meta-strip-container">
                    <div className="meta-strip-item">
                        <span className="meta-strip-label">Price in USD</span>
                        <span className="meta-strip-val price-highlight">${tour.priceUSD} USD <small>/ person</small></span>
                    </div>
                    <div className="meta-strip-item">
                        <span className="meta-strip-label">Tour Duration</span>
                        <span className="meta-strip-val">{tour.duration}</span>
                    </div>
                    <div className="meta-strip-item">
                        <span className="meta-strip-label">Vehicle Type</span>
                        <span className="meta-strip-val">Private AC Car or Van</span>
                    </div>
                    <div className="meta-strip-item">
                        <span className="meta-strip-label">Customizable</span>
                        <span className="meta-strip-val text-success">100% Tailor-Made</span>
                    </div>
                </div>
            </section>

            <section className="section tour-body-section">
                <div className="container">
                    <div className="row tour-details-layout">
                        {/* Main Content Column */}
                        <div className="col-lg-8 tour-main-col">
                            {/* Tour Overview */}
                            <div className="content-box mb-5">
                                <h2 className="section-title-sm">Tour Overview & Highlights</h2>
                                <p className="lead-text">{tour.summary}</p>
                                
                                {tour.tags && (
                                    <div className="tour-tag-row mt-3">
                                        <span className="tag-label">Key Destinations:</span>
                                        {tour.tags.map((tag, i) => (
                                            <span key={i} className="destination-pill">
                                                <FaMapMarkerAlt className="me-1 text-primary" /> {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Daily Itinerary */}
                            <div className="content-box mb-5">
                                <div className="itinerary-header">
                                    <div>
                                        <h2 className="section-title-sm">Day-by-Day Itinerary</h2>
                                        <p className="text-muted small">Every stop is flexible and can be customized to your schedule.</p>
                                    </div>
                                </div>

                                <div className="itinerary-timeline">
                                    {tour.itinerary.map((day, index) => {
                                        const isExpanded = activeDay === index || activeDay === null;
                                        return (
                                            <div key={index} className="timeline-item">
                                                <div className="timeline-marker">
                                                    <span>Day</span>
                                                    <strong>{day.day}</strong>
                                                </div>
                                                <div className="timeline-content">
                                                    <div className="timeline-title-row">
                                                        <h4>{day.title}</h4>
                                                    </div>
                                                    <ul className="timeline-activities">
                                                        {day.activities.map((activity, i) => (
                                                            <li key={i}>
                                                                <FaMapMarkerAlt className="activity-pin" />
                                                                <span>{activity}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Inclusions & Exclusions */}
                            <div className="content-box mb-5">
                                <h2 className="section-title-sm">Package Inclusions & Transparency</h2>
                                <div className="inclusions-grid">
                                    <div className="inc-card included">
                                        <h4 className="inc-title text-success">
                                            <FaCheckCircle className="me-2" /> What is Included
                                        </h4>
                                        <ul className="inc-list">
                                            {tour.price_includes.map((item, index) => (
                                                <li key={index}>
                                                    <FaCheckCircle className="check-icon" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {tour.price_excludes && (
                                        <div className="inc-card excluded">
                                            <h4 className="inc-title text-muted">
                                                <FaTimesCircle className="me-2 text-danger" /> Not Included
                                            </h4>
                                            <ul className="inc-list">
                                                {tour.price_excludes.map((item, index) => (
                                                    <li key={index}>
                                                        <FaTimesCircle className="cross-icon" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Sticky Sidebar Booking Column */}
                        <div className="col-lg-4 tour-sidebar-col">
                            <aside className="tour-sidebar">
                                <div className="price-card mb-4">
                                    <div className="price-card-header">
                                        <span className="price-sub-title">Package Price</span>
                                        <div className="price-display-box">
                                            <span className="currency-sym">$</span>
                                            <span className="currency-num">{tour.priceUSD}</span>
                                            <span className="currency-type">USD</span>
                                        </div>
                                        <p className="price-detail-note">{tour.priceNote}</p>
                                    </div>

                                    <div className="price-guarantees">
                                        <div className="guarantee-item">
                                            <FaShieldAlt className="guarantee-icon" />
                                            <span>No Hidden Costs • 100% Transparent</span>
                                        </div>
                                        <div className="guarantee-item">
                                            <FaCalendarCheck className="guarantee-icon" />
                                            <span>Flexible Dates & Itinerary Adjustments</span>
                                        </div>
                                        <div className="guarantee-item">
                                            <FaUserCheck className="guarantee-icon" />
                                            <span>Private Driver-Guide Dedicated to You</span>
                                        </div>
                                    </div>

                                    <div className="booking-actions">
                                        <a 
                                            href={links.whatsapp} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="btn-social-full whatsapp"
                                        >
                                            <FaWhatsapp className="icon" /> Book on WhatsApp
                                        </a>

                                        <a 
                                            href={links.email} 
                                            className="btn-social-full email"
                                        >
                                            <FaEnvelope className="icon" /> Inquire via Email
                                        </a>

                                        <div className="secondary-social-actions">
                                            <span className="alt-contact-text">Or message Thanu on:</span>
                                            <div className="social-row-btns">
                                                <a 
                                                    href={links.telegram} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="social-icon-btn telegram"
                                                    title="Telegram"
                                                >
                                                    <FaTelegramPlane />
                                                </a>
                                                <a 
                                                    href={links.instagram} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="social-icon-btn instagram"
                                                    title="Instagram"
                                                >
                                                    <FaInstagram />
                                                </a>
                                                <a 
                                                    href={links.facebook} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="social-icon-btn facebook"
                                                    title="Facebook"
                                                >
                                                    <FaFacebookF />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="custom-note-box">
                                        <p>
                                            <strong>Travelling as a family or group?</strong> We offer special discounts and custom hotel tier options (3-Star, 4-Star or Luxury Boutique).
                                        </p>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>

                    {/* Related Tours */}
                    {relatedTours.length > 0 && (
                        <div className="related-tours-section mt-5 pt-5 border-top">
                            <div className="section-header text-center mb-4">
                                <span className="overline">Discover More</span>
                                <h3>You May Also Like</h3>
                            </div>
                            <div className="related-tours-grid">
                                {relatedTours.map(relTour => (
                                    <div key={relTour.id} className="related-tour-card">
                                        <div 
                                            className="related-tour-img" 
                                            style={{ backgroundImage: `url('${relTour.image}')` }}
                                        >
                                            <span className="rel-duration">{relTour.duration}</span>
                                        </div>
                                        <div className="related-tour-body">
                                            <h4>{relTour.title}</h4>
                                            <div className="related-tour-price">
                                                From <strong>${relTour.priceUSD} USD</strong> <small>/ person</small>
                                            </div>
                                            <Link to={`/tours/${relTour.id}`} className="btn btn-outline-sm mt-3">
                                                View Details <FaArrowRight className="ms-1" />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Mobile Sticky Bottom Booking Bar */}
            <div className="mobile-bottom-booking-bar">
                <div className="mobile-bottom-price">
                    <span className="mobile-price-lbl">Starting from</span>
                    <div className="mobile-price-amt">
                        ${tour.priceUSD} <span className="mobile-currency">USD</span>
                    </div>
                    <span className="mobile-price-dur">{tour.duration}</span>
                </div>
                <a 
                    href={links.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mobile-bottom-btn"
                >
                    <FaWhatsapp className="me-2" /> Book on WhatsApp
                </a>
            </div>
        </div>
    );
};

export default TourDetails;
