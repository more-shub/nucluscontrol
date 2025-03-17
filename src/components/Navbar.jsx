import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  // Memoized toggle function for the hamburger menu.
  const toggleMenu = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  // Collapse the menu on small screens (<=768px) after a nav link is clicked.
  const handleNavLinkClick = useCallback(() => {
    if (window.innerWidth <= 768 && isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    // Throttle scroll events with requestAnimationFrame for smoother performance.
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowNavbar(window.scrollY <= 150);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enable keyboard control for the hamburger menu.
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      toggleMenu();
    }
  };

  return (
    <nav className={`navbar ${!showNavbar ? "hide" : ""}`}>
      <div className="logo">
        <Link to="/" onClick={handleNavLinkClick}>
          <img 
            src="/nuclus_logo.webp" 
            alt="Nuclus Logo" 
            width="140" 
            height="80"
            loading="lazy" 
          />
        </Link>
      </div>
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={handleNavLinkClick}>Home</Link>
        <a href="/#industries-section" onClick={handleNavLinkClick}>Industries</a>
        <a href="/#about-section" onClick={handleNavLinkClick}>About</a>
        <Link to="/products" onClick={handleNavLinkClick}>Products</Link>
        <Link to="/blogs" onClick={handleNavLinkClick}>Blogs</Link>
        <a href="/#contact" onClick={handleNavLinkClick}>Contact</a>
      </div>
      <div 
        className="hamburger"
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        tabIndex="0"
        role="button"
        aria-label="Toggle navigation menu"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
