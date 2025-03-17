import React, { useState, useEffect, useMemo } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  // Use useMemo to ensure the images array isn't re-created on every render.
  const images = useMemo(() => [
    "/heroimg1.webp",
    "/heroimg2.webp",
    "/heroimg3.webp",
    "/heroimg4.webp",
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 4 seconds using setInterval.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

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
              {/* Adding loading="lazy" to logo images improves performance without affecting design */}
              <img src="/glenmark.webp" alt="Glenmark" loading="lazy" />
              <img src="/decore.webp" alt="Decore" loading="lazy" />
              <img src="/loreal.webp" alt="L'Oréal" loading="lazy" />
              <img src="/ion-exchange.webp" alt="Ion Exchange" loading="lazy" />
              <img src="/britannia.webp" alt="Britannia" loading="lazy" />
              <img src="/raymond.webp" alt="Raymond" loading="lazy" />
              <img src="/adani.webp" alt="Adani" loading="lazy" />
              <img src="/emcure.webp" alt="Emcure" loading="lazy" />
              <img src="/ruttonsha.webp" alt="Ruttonsha" loading="lazy" />
              <img src="/nrb.webp" alt="NRB" loading="lazy" />
              <img src="/leo.webp" alt="Leo" loading="lazy" />
              <img src="/prakash-ind.webp" alt="Prakash Industries" loading="lazy" />
              <img src="/vhm.webp" alt="VHM" loading="lazy" />
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
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
