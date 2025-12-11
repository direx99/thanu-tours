import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

const FollowUs = () => {
    return (
        <section id="follow-us" className="section bg-white text-center">
            <div className="container">
                <div className="section-header">
                    <span className="overline">Join Our Community</span>
                    <h2>Stay Connected</h2>
                    <p>Follow us on social media for daily updates, travel tips, and stunning photos of Sri Lanka.</p>
                </div>

                <div className="social-connect-grid">
                    <a href="https://www.facebook.com/share/1AY2pjWxVS/" target="_blank" rel="noopener noreferrer" className="social-connect-card facebook">
                        <FaFacebookF className="social-icon" />
                        <h3>Facebook</h3>
                        <span>Like our Page</span>
                    </a>

                    <a href="https://www.instagram.com/thanu_tours/" target="_blank" rel="noopener noreferrer" className="social-connect-card instagram">
                        <FaInstagram className="social-icon" />
                        <h3>Instagram</h3>
                        <span>Follow Us</span>
                    </a>

                    <a href="https://wa.me/94774718374" target="_blank" rel="noopener noreferrer" className="social-connect-card whatsapp">
                        <FaWhatsapp className="social-icon" />
                        <h3>WhatsApp</h3>
                        <span>Chat with Us</span>
                    </a>

                    <a href="https://t.me/+94774718374" target="_blank" rel="noopener noreferrer" className="social-connect-card telegram">
                        <FaTelegramPlane className="social-icon" />
                        <h3>Telegram</h3>
                        <span>Join Channel</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FollowUs;
