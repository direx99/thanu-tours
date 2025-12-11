import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
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
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/', { state: { targetId: id } });
            // Note: In a real app we'd need a useEffect in Home to check location.state and scroll
            // For simplicity, we'll just navigate to home. 
            // Better yet, let's use the anchor link with full path for standard browser behavior if we were using hash router, 
            // but since we are using BrowserRouter, we need the effect.
            // Let's implement the refined basic logic:
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    return (
        <nav className="navbar" id="navbar">
            <div className="container nav-container">
                <Link to="/" className="logo" onClick={closeMenu}>Thanu<span className="highlight">Tours</span></Link>
                <div className={`hamburger ${isOpen ? 'toggle' : ''}`} id="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`} id="nav-links">
                    <li><Link to="/" onClick={(e) => handleNavigation(e, 'home')}>Home</Link></li>
                    <li><a href="#about" onClick={(e) => handleNavigation(e, 'about')}>About</a></li>
                    <li><a href="#tours" onClick={(e) => handleNavigation(e, 'tours')}>Tours</a></li>
                    <li><a href="#gallery" onClick={(e) => handleNavigation(e, 'gallery')}>Gallery</a></li>
                    <li><a href="#feedbacks" onClick={(e) => handleNavigation(e, 'feedbacks')}>Feedbacks</a></li>
                    <li><a href="#contact" className="btn-nav" onClick={(e) => handleNavigation(e, 'contact')}>Contact Us</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
