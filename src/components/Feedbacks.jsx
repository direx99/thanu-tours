import React from 'react';

const Feedbacks = () => {
    return (
        <section id="feedbacks" className="section bg-light">
            <div className="container">
                <div className="section-header text-center">
                    <h2>What Our Guests Say</h2>
                </div>
                <div className="testimonials-wrapper">
                    {/* Review 1 */}
                    <div className="testimonial-card">
                        <p className="t-text">"The best tour guide we could ask for! Thanu knows all the hidden gems. The guest
                            house was lovely and clean."</p>
                        <div className="t-author">
                            <div className="t-avatar" style={{ backgroundImage: "url('/assets/images/avatar-sarah.jpg')", backgroundSize: 'cover' }}></div>
                            <div>
                                <h4>Sarah Johnson</h4>
                                <span>United Kingdom</span>
                            </div>
                        </div>
                    </div>
                    {/* Review 2 */}
                    <div className="testimonial-card">
                        <p className="t-text">"Amazing hospitality. We felt like family. Highly recommend the river safari and
                            the Kandy tour."</p>
                        <div className="t-author">
                            <div className="t-avatar" style={{ backgroundImage: "url('/assets/images/avatar-marc.jpg')", backgroundSize: 'cover' }}></div>
                            <div>
                                <h4>Marc & Lisa</h4>
                                <span>Germany</span>
                            </div>
                        </div>
                    </div>
                    {/* Review 3 */}
                    <div className="testimonial-card">
                        <p className="t-text">"An unforgettable experience! Thanu arranged everything perfectly. From the train ride to Ella to the safari in Udawalawe."</p>
                        <div className="t-author">
                            <div className="t-avatar" style={{ backgroundColor: '#FFCC80' }}></div>
                            <div>
                                <h4>Dmitry V.</h4>
                                <span>Russia</span>
                            </div>
                        </div>
                    </div>
                    {/* Review 4 */}
                    <div className="testimonial-card">
                        <p className="t-text">"Friendly, professional, and very knowledgeable. We learned so much about Sri Lankan culture. Thank you Thanu!"</p>
                        <div className="t-author">
                            <div className="t-avatar" style={{ backgroundColor: '#A5D6A7' }}></div>
                            <div>
                                <h4>Emma Wilson</h4>
                                <span>Australia</span>
                            </div>
                        </div>
                    </div>
                    {/* Review 5 */}
                    <div className="testimonial-card">
                        <p className="t-text">"Best driver and guide! Very safe driving and always on time. He showed us the best local food spots."</p>
                        <div className="t-author">
                            <div className="t-avatar" style={{ backgroundColor: '#90CAF9' }}></div>
                            <div>
                                <h4>Hans & Gretta</h4>
                                <span>Switzerland</span>
                            </div>
                        </div>
                    </div>
                    {/* Review 6 */}
                    <div className="testimonial-card">
                        <p className="t-text">"We loved the turtle hatchery and the boat trip. Thanu made our honeymoon very special."</p>
                        <div className="t-author">
                            <div className="t-avatar" style={{ backgroundColor: '#F48FB1' }}></div>
                            <div>
                                <h4>Chloe & Tom</h4>
                                <span>France</span>
                            </div>
                        </div>
                    </div>
                    {/* Review 7 */}
                    <div className="testimonial-card">
                        <p className="t-text">"Superb service! Very flexible with the itinerary. We saw so many elephants at the national park!"</p>
                        <div className="t-author">
                            <div className="t-avatar" style={{ backgroundColor: '#CE93D8' }}></div>
                            <div>
                                <h4>Lars Jensen</h4>
                                <span>Denmark</span>
                            </div>
                        </div>
                    </div>
                    {/* Review 8 */}
                    <div className="testimonial-card">
                        <p className="t-text">"Thanu is a great host. He speaks excellent German which helped us a lot. 10/10 recommendation!"</p>
                        <div className="t-author">
                            <div className="t-avatar" style={{ backgroundColor: '#B0BEC5' }}></div>
                            <div>
                                <h4>Stefan Meyer</h4>
                                <span>Germany</span>
                            </div>
                        </div>
                    </div>
                    {/* Review 9 */}
                    <div className="testimonial-card">
                        <p className="t-text">"Incredible island tour. The tea plantations were breathtaking. Thanu organized everything seamlessy."</p>
                        <div className="t-author">
                            <div className="t-avatar" style={{ backgroundColor: '#FFAB91' }}></div>
                            <div>
                                <h4>Maria Garcia</h4>
                                <span>Spain</span>
                            </div>
                        </div>
                    </div>
                    {/* Review 10 */}
                    <div className="testimonial-card">
                        <p className="t-text">"Value for money and trustworthy. We felt very safe and cared for during our entire 2-week trip."</p>
                        <div className="t-author">
                            <div className="t-avatar" style={{ backgroundColor: '#80CBC4' }}></div>
                            <div>
                                <h4>John & Kate</h4>
                                <span>New Zealand</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedbacks;
