import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-grid">
                <div className="footer-info">
                    <a href="#" className="logo footer-logo">Thanu<span className="highlight">Tours</span></a>
                    <p>Maha Waskaduwa, Kalutara 21, Sri Lanka</p>
                    <div className="contact-item">
                        <span>📞</span> <a href="tel:+94774718374">+94 77 471 8374</a>
                    </div>
                </div>
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#tours">Tours</a></li>
                        <li><a href="#guest-house">Guest House</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h4>Social</h4>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/thanu_tours/" aria-label="Instagram">IG</a>
                        <a href="https://wa.me/94774718374" aria-label="WhatsApp">WA</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <p>&copy; 2024 Thanu Tours. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
