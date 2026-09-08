import React, { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const FloatingWhatsApp = () => {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = "94774718374";
    const defaultMsg = encodeURIComponent("Hi Thanu Tours, I'd like to ask a question about your tour packages in Sri Lanka!");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMsg}`;

    return (
        <aside className="floating-whatsapp-container" aria-label="WhatsApp quick chat">
            {isOpen && (
                <div className="whatsapp-popup animate-in">
                    <div className="whatsapp-popup-header">
                        <div className="whatsapp-popup-avatar">
                            <span className="online-indicator"></span>
                            <span className="avatar-letter">T</span>
                        </div>
                        <div className="whatsapp-popup-info">
                            <h4>Thanu Silva</h4>
                            <p>Typically replies in minutes</p>
                        </div>
                        <button 
                            className="whatsapp-close-btn" 
                            onClick={() => setIsOpen(false)}
                            aria-label="Close chat popup"
                        >
                            <FaTimes />
                        </button>
                    </div>
                    <div className="whatsapp-popup-body">
                        <p className="chat-bubble">
                            Ayubowan! 🙏 Welcome to Sri Lanka. How can I help plan your dream vacation or private tour?
                        </p>
                        <a 
                            href={whatsappUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn-popup-send"
                        >
                            <FaWhatsapp className="me-2" /> Start WhatsApp Chat
                        </a>
                    </div>
                </div>
            )}

            <button 
                className={`floating-whatsapp-btn ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Chat with Thanu Tours on WhatsApp"
                title="Chat with us on WhatsApp"
            >
                <span className="pulse-ring"></span>
                <FaWhatsapp className="whatsapp-icon" />
                <span className="floating-label">Need Help? Chat Now</span>
            </button>
        </aside>
    );
};

export default FloatingWhatsApp;
