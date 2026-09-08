import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { FaWhatsapp, FaPhoneAlt, FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent background scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleNavigation = (e, id) => {
        e.preventDefault();
        closeMenu();
        if (location.pathname === '/') {
            const element = document.getElementById(id);
            if (element) {
                const navHeight = 70;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: elementPosition - navHeight,
                    behavior: 'smooth'
                });
            }
        } else {
            navigate('/', { state: { targetId: id } });
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    const navHeight = 70;
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                        top: elementPosition - navHeight,
                        behavior: 'smooth'
                    });
                }
            }, 150);
        }
    };

    return (
        <>
            <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
                <div className="container nav-container">
                    <Link to="/" className="logo" onClick={closeMenu}>
                        Thanu<span className="highlight">Tours</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="desktop-nav" aria-label="Main Navigation">
                        <ul className="nav-links">
                            <li><Link to="/" onClick={(e) => handleNavigation(e, 'home')}>Home</Link></li>
                            <li><a href="#about" onClick={(e) => handleNavigation(e, 'about')}>About</a></li>
                            <li><a href="#tours" onClick={(e) => handleNavigation(e, 'tours')}>Tours</a></li>
                            <li><a href="#gallery" onClick={(e) => handleNavigation(e, 'gallery')}>Gallery</a></li>
                            <li><a href="#feedbacks" onClick={(e) => handleNavigation(e, 'feedbacks')}>Feedbacks</a></li>
                            <li><a href="#contact" onClick={(e) => handleNavigation(e, 'contact')}>Contact</a></li>
                        </ul>
                    </nav>

                    {/* Mobile Hamburger Toggle Button */}
                    <button 
                        type="button" 
                        className="mobile-nav-toggle" 
                        onClick={toggleMenu} 
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation menu"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </header>

            {/* Mobile Navigation Drawer Backdrop */}
            <div 
                className={`mobile-nav-backdrop ${isOpen ? 'active' : ''}`} 
                onClick={closeMenu}
                aria-hidden="true"
            />

            {/* Mobile Navigation Drawer */}
            <aside className={`mobile-nav-drawer ${isOpen ? 'active' : ''}`} aria-label="Mobile Menu">
                <div className="mobile-drawer-header">
                    <span className="logo">Thanu<span className="highlight">Tours</span></span>
                    <button 
                        className="mobile-drawer-close" 
                        onClick={closeMenu}
                        aria-label="Close menu"
                    >
                        <FaTimes />
                    </button>
                </div>

                <div className="mobile-drawer-body">
                    <ul className="mobile-drawer-links">
                        <li><Link to="/" onClick={(e) => handleNavigation(e, 'home')}>Home</Link></li>
                        <li><a href="#about" onClick={(e) => handleNavigation(e, 'about')}>About Thanu</a></li>
                        <li><a href="#tours" onClick={(e) => handleNavigation(e, 'tours')}>Tour Packages & Prices</a></li>
                        <li><a href="#gallery" onClick={(e) => handleNavigation(e, 'gallery')}>Photo Gallery</a></li>
                        <li><a href="#feedbacks" onClick={(e) => handleNavigation(e, 'feedbacks')}>Guest Feedbacks</a></li>
                        <li><a href="#contact" onClick={(e) => handleNavigation(e, 'contact')}>Contact & Location</a></li>
                    </ul>

                    <div className="mobile-drawer-contact">
                        <p className="mobile-contact-title">Direct Inquiries & Booking:</p>
                        <a 
                            href="https://wa.me/94774718374?text=Hi%20Thanu%20Tours%2C%20I%20am%20planning%20a%20trip%20to%20Sri%20Lanka."
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mobile-btn-whatsapp"
                        >
                            <FaWhatsapp /> Chat on WhatsApp
                        </a>
                        <a href="tel:+94774718374" className="mobile-btn-call">
                            <FaPhoneAlt /> Call +94 77 471 8374
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Navbar;
