import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const toggleMenu = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const handleNavLinkClick = useCallback(() => {
    if (window.innerWidth <= 768 && isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
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

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      toggleMenu();
    }
  };

  return (
    <>
      <Helmet>
        <title>Nuclus Control | Precision Flow Measurement & Control</title>
        <meta
          name="description"
          content="Nuclus Control provides innovative and reliable flow measurement solutions tailored for various industries. Discover high-quality products for efficient fluid management."
        />
        <meta
          name="keywords"
          content="Nuclus Control, Flow Measurement, Fluid Control, Industrial Instruments, Flow Meter, Automation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Nuclus Control" />
        <meta property="og:title" content="Nuclus Control" />
        <meta
          property="og:description"
          content="Innovative Flow Control Solutions for Modern Industries"
        />
        <meta property="og:image" content="/nuclus_og_image.webp" />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/webp" href="/favicon.webp" />
        <link rel="canonical" href="https://digitalflowmeter.net/" />
      </Helmet>

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
          <Link to="/" onClick={handleNavLinkClick}>
            Home
          </Link>
          <a href="/#industries-section" onClick={handleNavLinkClick}>
            Industries
          </a>
          <a href="/#about-section" onClick={handleNavLinkClick}>
            About
          </a>
          <Link to="/products" onClick={handleNavLinkClick}>
            Products
          </Link>
          <Link to="/blogs" onClick={handleNavLinkClick}>
            Blogs
          </Link>
          <a href="/#contact" onClick={handleNavLinkClick}>
            Contact
          </a>
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
    </>
  );
};

export default Navbar;
