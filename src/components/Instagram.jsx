import React from 'react';

const Instagram = () => {
    return (
        <section id="instagram" className="section instagram-section">
            <div className="container text-center">
                <h2>Follow Our Journey</h2>
                <p>@thanu_tours</p>
                <div className="insta-grid">
                    {/* Mock Instagram Feed */}
                    <div className="insta-item"
                        style={{ backgroundImage: "url('/assets/images/insta-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <div className="insta-item"
                        style={{ backgroundImage: "url('/assets/images/insta-2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <div className="insta-item"
                        style={{ backgroundImage: "url('/assets/images/insta-3.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <div className="insta-item"
                        style={{ backgroundImage: "url('/assets/images/insta-4.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                </div>
                <a href="https://www.instagram.com/thanu_tours/" target="_blank" className="btn btn-outline mt-4">View on
                    Instagram</a>
            </div>
        </section>
    );
};

export default Instagram;
