import React, { useRef, useEffect, useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const feedbacksList = [
    {
        id: 1,
        name: "Sarah Johnson",
        country: "United Kingdom",
        avatar: "/assets/images/avatar-sarah.jpg",
        tag: "7 Day Grand Tour",
        text: "The best tour guide we could ask for! Thanu knows all the hidden gems. The guest house was lovely, clean, and welcoming."
    },
    {
        id: 2,
        name: "Marc & Lisa",
        country: "Germany",
        avatar: "/assets/images/avatar-marc.jpg",
        tag: "Cultural & River Safari",
        text: "Amazing hospitality. We felt like family. Highly recommend the river safari in Bentota and the cultural tour in Kandy."
    },
    {
        id: 3,
        name: "Dmitry V.",
        country: "Russia",
        color: "#FF9F43",
        tag: "Ella & Yala Safari",
        text: "An unforgettable experience! Thanu arranged everything perfectly, from the scenic train to Ella to the safari in Yala."
    },
    {
        id: 4,
        name: "Emma Wilson",
        country: "Australia",
        color: "#10B981",
        tag: "4 Day Heritage Escape",
        text: "Friendly, professional, and very knowledgeable. We learned so much about Sri Lankan history and wildlife. Thank you Thanu!"
    },
    {
        id: 5,
        name: "Hans & Gretta",
        country: "Switzerland",
        color: "#3B82F6",
        tag: "Private Chauffeur Tour",
        text: "Best driver and guide! Very safe driving, clean air-conditioned vehicle, and always on time. He showed us the best local food spots."
    },
    {
        id: 6,
        name: "Chloe & Tom",
        country: "France",
        color: "#EC4899",
        tag: "Honeymoon Special",
        text: "We loved the turtle hatchery and the scenic boat trip. Thanu made our honeymoon trip in Sri Lanka truly magical."
    },
    {
        id: 7,
        name: "Lars Jensen",
        country: "Denmark",
        color: "#8B5CF6",
        tag: "Wildlife & Sigiriya",
        text: "Superb service! Very flexible with the itinerary. We saw so many elephants at the national park and Sigiriya at sunset was unreal."
    },
    {
        id: 8,
        name: "Stefan Meyer",
        country: "Germany",
        color: "#64748B",
        tag: "German-Speaking Guide",
        text: "Thanu is a great host. He speaks excellent German which helped us a lot. 10/10 recommendation for any international traveler!"
    },
    {
        id: 9,
        name: "Maria Garcia",
        country: "Spain",
        color: "#F97316",
        tag: "Tea Country & Ella",
        text: "Incredible island tour. The tea plantations and waterfalls were breathtaking. Thanu organized everything seamlessly."
    },
    {
        id: 10,
        name: "John & Kate",
        country: "New Zealand",
        color: "#14B8A6",
        tag: "2-Week Island Explorer",
        text: "Value for money and trustworthy. We felt very safe and cared for during our entire 2-week trip with Thanu Tours."
    }
];

// Duplicate items to make seamless infinite loop
const doubleFeedbacks = [...feedbacksList, ...feedbacksList];

const Feedbacks = () => {
    const scrollContainerRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let animationFrameId;

        const autoScroll = () => {
            if (!isPaused && container) {
                container.scrollLeft += 1; // 1px smooth scroll per frame
                
                // When reached halfway, seamlessly reset to start
                const halfWidth = container.scrollWidth / 2;
                if (container.scrollLeft >= halfWidth) {
                    container.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(autoScroll);
        };

        animationFrameId = requestAnimationFrame(autoScroll);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isPaused]);

    const handlePrev = () => {
        const container = scrollContainerRef.current;
        if (container) {
            container.scrollBy({ left: -360, behavior: 'smooth' });
        }
    };

    const handleNext = () => {
        const container = scrollContainerRef.current;
        if (container) {
            container.scrollBy({ left: 360, behavior: 'smooth' });
        }
    };

    return (
        <section id="feedbacks" className="section bg-light feedbacks-section">
            <div className="container">
                <div className="feedbacks-header-row">
                    <div className="section-header text-center mb-0">
                        <span className="overline">Verified Guest Reviews</span>
                        <h2>What Our Travelers Say</h2>
                        <p>Real stories and experiences from travelers around the globe who explored Sri Lanka with Thanu.</p>
                    </div>
                    
                    {/* Manual Navigation Controls */}
                    <div className="feedbacks-controls" aria-label="Slide controls">
                        <button 
                            className="btn-feedback-nav" 
                            onClick={handlePrev} 
                            aria-label="Previous reviews"
                            title="Previous reviews"
                        >
                            <FaChevronLeft />
                        </button>
                        <button 
                            className="btn-feedback-nav" 
                            onClick={handleNext} 
                            aria-label="Next reviews"
                            title="Next reviews"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </div>

            {/* Infinite Auto-Sliding Track */}
            <div 
                className="feedbacks-marquee-container"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
            >
                <div 
                    className="feedbacks-scroll-track" 
                    ref={scrollContainerRef}
                >
                    {doubleFeedbacks.map((item, index) => (
                        <article key={index} className="testimonial-card feedback-marquee-card">
                            <div className="feedback-card-top">
                                <div className="feedback-stars">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="star-icon" />
                                    ))}
                                </div>
                                <span className="feedback-tag">{item.tag}</span>
                            </div>

                            <p className="t-text">
                                "{item.text}"
                            </p>

                            <div className="t-author">
                                {item.avatar ? (
                                    <div 
                                        className="t-avatar" 
                                        style={{ backgroundImage: `url('${item.avatar}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                    ></div>
                                ) : (
                                    <div 
                                        className="t-avatar text-avatar" 
                                        style={{ backgroundColor: item.color || '#FF7043' }}
                                    >
                                        {item.name.charAt(0)}
                                    </div>
                                )}
                                <div>
                                    <h4>{item.name}</h4>
                                    <span>{item.country}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            
            <div className="text-center mt-4">
                <span className="feedbacks-pause-hint">
                    💡 Hover or touch any review to pause sliding
                </span>
            </div>
        </section>
    );
};

export default Feedbacks;
