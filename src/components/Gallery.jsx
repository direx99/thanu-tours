import React from 'react';

const Gallery = () => {
    // Dynamic import of all images from the gallery directory
    const imageModules = import.meta.glob('../assets/images/gallery/*.{png,jpg,jpeg,webp,avif}', { eager: true });

    // Convert modules object to array of URLs
    const allImages = Object.values(imageModules).map(module => module.default);

    // State for pagination
    const [visibleCount, setVisibleCount] = React.useState(12);
    const visibleImages = allImages.slice(0, visibleCount);

    const loadMore = () => {
        setVisibleCount(prev => prev + 12);
    };

    return (
        <section id="gallery" className="section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="overline">Moments</span>
                    <h2>Gallery</h2>
                    <p style={{ maxWidth: '600px', margin: '1rem auto', color: 'var(--color-gray)' }}>
                        Capture the essence of Sri Lanka through our lens. From wildlife to scenic views, explore the beauty of our tours.
                    </p>
                </div>

                <div className="gallery-masonry">
                    {visibleImages.map((img, index) => (
                        <div key={index} className="gallery-item-wrapper">
                            <img
                                src={img}
                                alt={`Gallery image ${index + 1}`}
                                className="gallery-img"
                                loading="lazy"
                                width="400"
                            />
                        </div>
                    ))}
                </div>

                {visibleCount < allImages.length && (
                    <div className="text-center mt-4">
                        <button onClick={loadMore} className="btn btn-outline" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;
