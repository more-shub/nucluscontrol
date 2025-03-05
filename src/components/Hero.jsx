// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  // Array of images for the slideshow
  const images = [
    "/heroimg1.webp",
    "/heroimg2.webp",
    "/heroimg3.webp",
    "/heroimg4.webp",
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Revolutionizing Flow Measurement</h1>
        <p>
          Experience Precision with NUCLUS CONTROL. Our innovative solutions ensure accurate flow control and seamless fluid management for your operations.
        </p>
        <div className="logos-section">
          <div className="images-wrapper">
            <div className="images-container">
              <img src="/glenmark.webp" alt="Glenmark" />
              <img src="/decore.webp" alt="Decore" />
              <img src="/loreal.webp" alt="L'Oréal" />
              <img src="/ion-exchange.webp" alt="Ion Exchange" />
              <img src="/britannia.webp" alt="Britannia" />
              <img src="/raymond.webp" alt="Raymond" />
              <img src="/adani.webp" alt="Adani" />
              <img src="/emcure.webp" alt="Emcure" />
              <img src="/ruttonsha.webp" alt="Ruttonsha" />
              <img src="/nrb.webp" alt="NRB" />
              <img src="/leo.webp" alt="Leo" />
              <img src="/prakash-ind.webp" alt="Prakash Industries" />
              <img src="/vhm.webp" alt="VHM" />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-container">
          <img
            src={images[currentIndex]}
            alt="Product Slideshow"
            className="slideshow-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
