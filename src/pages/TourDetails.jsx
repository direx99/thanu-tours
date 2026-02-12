import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toursData } from '../data/toursData';
import {
    FaWhatsapp,
    FaFacebookF,
    FaInstagram,
    FaTelegramPlane,
    FaClock,
    FaCheckCircle,
    FaMapMarkerAlt
} from 'react-icons/fa';

const TourDetails = () => {
    const { id } = useParams();
    const tour = toursData.find(t => t.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!tour) {
        return (
            <div className="section text-center">
                <h2>Tour Not Found</h2>
                <Link to="/" className="btn btn-primary">Back to Home</Link>
            </div>
        );
    }

    const bookingLinks = (tourTitle) => {
        const message = encodeURIComponent(`Hi Thanu Tours, I am interested in booking the *${tourTitle}*.`);
        return {
            whatsapp: `https://wa.me/94774718374?text=${message}`,
            facebook: `https://www.facebook.com/share/1AY2pjWxVS/`,
            instagram: `https://ig.me/m/thanu_tours`,
            telegram: `https://t.me/+94774718374`
        };
    };

    const links = bookingLinks(tour.title);

    return (
        <div className="tour-details-page">
            {/* Modern Hero Section */}
            <div className="page-hero" style={{ backgroundImage: `url('${tour.image}')` }}>
                <div className="overlay"></div>
                <div className="container hero-content">
                    <div className="breadcrumbs">
                        <Link to="/">Home</Link> <span>/</span>
                        <span className="text-white-50">Tours</span> <span>/</span>
                        <span className="text-white">{tour.title}</span>
                    </div>
                    <h1 className="text-white fade-in-up">{tour.title}</h1>
                    <p className="lead text-white fade-in-up delay-1">
                        <FaClock className="me-2" /> {tour.duration} Adventure
                    </p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="tour-overview mb-5 fade-in-up delay-2">
                                <h3 className="mb-4">Tour Overview</h3>
                                <p className="lead text-muted">{tour.summary}</p>
                            </div>

                            <div className="itinerary mb-5 fade-in-up delay-3">
                                <h3 className="mb-5">Daily Itinerary</h3>
                                <div className="itinerary-timeline">
                                    {tour.itinerary.map((day, index) => (
                                        <div key={index} className="timeline-item">
                                            <div className="timeline-marker">{day.day}</div>
                                            <div className="timeline-content">
                                                <h4>{day.title}</h4>
                                                <ul className="list-unstyled timeline-activities mb-0">
                                                    {day.activities.map((activity, i) => (
                                                        <li key={i}>
                                                            <FaMapMarkerAlt className="text-primary me-3 mt-1" />
                                                            <span>{activity}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="tour-sidebar">
                                <div className="price-card mb-4 fade-in-up delay-4">
                                    <h4 className="mb-4">Book This Experience</h4>
                                    <p className="text-muted small mb-4">Ready to go? Contact us on your favorite platform to book or customize.</p>

                                    <a href={links.whatsapp} target="_blank" rel="noreferrer" className="btn-social-full whatsapp">
                                        <FaWhatsapp className="icon" /> Book via WhatsApp
                                    </a>
                                    <a href={links.facebook} target="_blank" rel="noreferrer" className="btn-social-full facebook">
                                        <FaFacebookF className="icon" /> Message on Facebook
                                    </a>
                                    <a href={links.instagram} target="_blank" rel="noreferrer" className="btn-social-full instagram">
                                        <FaInstagram className="icon" /> Message on Instagram
                                    </a>
                                    <a href={links.telegram} target="_blank" rel="noreferrer" className="btn-social-full telegram">
                                        <FaTelegramPlane className="icon" /> Message on Telegram
                                    </a>
                                </div>

                                <div className="card shadow-sm border-0 bg-white p-4 rounded-4 fade-in-up delay-5">
                                    <h5 className="mb-3 border-bottom pb-2">Price Includes</h5>
                                    <ul className="list-unstyled includes-list mb-0">
                                        {tour.price_includes.map((item, index) => (
                                            <li key={index}>
                                                <FaCheckCircle className="check-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TourDetails;
