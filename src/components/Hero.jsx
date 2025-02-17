// src/components/Hero.jsx
import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
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
          <img src="/water.webp" alt="Water Effect" className="image1" />
          <img src="/heroimg.webp" alt="Product" className="image2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
