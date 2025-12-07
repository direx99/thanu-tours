import React from 'react';

const Gallery = () => {
    const images = [
        "/assets/images/gallery-elephants.jpg",
        "/assets/images/gallery-tea.jpg",
        "/assets/images/gallery-temple.jpg",
        "/assets/images/gallery-food.jpg",
        "/assets/images/gallery-surfing.jpg",
        "/assets/images/gallery-train.jpg"
    ];

    return (
        <section id="gallery" className="section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="overline">Moments</span>
                    <h2>Gallery</h2>
                </div>
                <div className="gallery-grid" id="gallery-grid">
                    {images.map((img, index) => (
                        <div key={index} className="gallery-item"
                            style={{ backgroundImage: `url('${img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
