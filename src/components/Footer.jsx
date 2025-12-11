import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

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
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#host">Host</a></li>
                        <li><a href="#tours">Tours</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#feedbacks">Feedbacks</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h4>Social</h4>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/share/1AY2pjWxVS/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/thanu_tours/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://wa.me/94774718374" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                        <a href="https://t.me/+94774718374" aria-label="Telegram" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <p>&copy; 2024 Thanu Tours. All rights reserved.</p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', opacity: 0.7 }}>
                    Developed by <a href="https://www.route94.tech/" target="_blank" rel="noopener noreferrer" style={{ color: '#FF7043', textDecoration: 'none' }}>Route94</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
