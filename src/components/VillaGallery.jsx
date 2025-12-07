import React, { useState } from 'react';

const VillaGallery = () => {
    const [activeCategory, setActiveCategory] = useState("Full Villa");

    const categories = ["Full Villa", "Rooms", "Kitchen", "Bathrooms"];

    // In a real scenario, we would have specific images for each category.
    // Using available assets and placeholders for demonstration.
    const images = [
        { id: 1, category: "Full Villa", src: "/assets/images/gh-garden.jpg", alt: "Villa Garden view" },
        { id: 2, category: "Full Villa", src: "/assets/images/gh-room.jpg", alt: "Villa Exterior" }, // Reusing room as exterior placeholder if needed, or just garden
        { id: 3, category: "Rooms", src: "/assets/images/gh-room.jpg", alt: "Master Bedroom" },
        { id: 4, category: "Rooms", src: "/assets/images/gh-room.jpg", alt: "Guest Room" }, // Duplicate for demo
        { id: 5, category: "Kitchen", src: "/assets/images/gallery-food.jpg", alt: "Kitchen & Dining" }, // Using food image as proxy for kitchen/dining context
        { id: 6, category: "Bathrooms", src: "/assets/images/gh-room.jpg", alt: "Modern Bathroom" }, // Placeholder
    ];

    const filteredImages = images.filter(img => img.category === activeCategory);

    return (
        <section className="section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="overline">Visual Tour</span>
                    <h2>Gallery</h2>
                </div>

                {/* Filter Tabs */}
                <div className="gallery-tabs">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`btn-tab ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="gallery-grid">
                    {filteredImages.length > 0 ? (
                        filteredImages.map(img => (
                            <div key={img.id} className="gallery-item"
                                style={{ backgroundImage: `url('${img.src}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            </div>
                        ))
                    ) : (
                        <p className="text-center" style={{ gridColumn: "1 / -1", color: "var(--color-gray)" }}>
                            No images available for this category yet.
                        </p>
                    )}
                </div>
            </div>

            <style>{`
                .gallery-tabs {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    margin-bottom: 2rem;
                    margin-top: 1rem;
                    flex-wrap: wrap;
                }
                .btn-tab {
                    background: transparent;
                    border: 2px solid var(--color-light-gray);
                    padding: 0.5rem 1.5rem;
                    border-radius: 50px;
                    cursor: pointer;
                    font-weight: 500;
                    color: var(--color-gray);
                    transition: all 0.3s ease;
                    font-family: var(--font-body);
                }
                .btn-tab:hover, .btn-tab.active {
                    border-color: var(--color-primary);
                    background: var(--color-primary);
                    color: white;
                }
            `}</style>
        </section>
    );
};

export default VillaGallery;
