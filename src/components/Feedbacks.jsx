import React from 'react';

const Feedbacks = () => {
    return (
        <section id="feedbacks" className="section bg-light">
            <div className="container">
                <div className="section-header text-center">
                    <h2>What Our Guests Say</h2>
                </div>
                <div className="testimonials-wrapper">
                    <div className="testimonial-card">
                        <p className="t-text">"The best tour guide we could ask for! Thanu knows all the hidden gems. The guest
                            house was lovely and clean."</p>
                        <div className="t-author">
                            <div className="t-avatar"
                                style={{ backgroundImage: "url('/assets/images/avatar-sarah.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            </div>
                            <div>
                                <h4>Sarah Johnson</h4>
                                <span>United Kingdom</span>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <p className="t-text">"Amazing hospitality. We felt like family. Highly recommend the river safari and
                            the Kandy tour."</p>
                        <div className="t-author">
                            <div className="t-avatar"
                                style={{ backgroundImage: "url('/assets/images/avatar-marc.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            </div>
                            <div>
                                <h4>Marc & Lisa</h4>
                                <span>Germany</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedbacks;
