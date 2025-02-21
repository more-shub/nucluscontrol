import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about-section" className="about">
      <div className="about-container">
        <header className="about-header">
          <h1>Nuclus Control</h1>
          <p>Building excellence since 2009</p>
        </header>

        <div className="about-history">
          <div className="history-text">
            <h2>Our Journey</h2>
            <p>
              At Nuclus Control, we are committed to redefining precision in the
              controlling and measuring instrument industry. Based in Pune,
              Maharashtra, we specialize in manufacturing, exporting, and
              supplying high-quality instruments that combine technological
              innovation with practical efficiency.
            </p>
            <h3>Precision in Every Product</h3>
            <p>
              What started as a humble initiative has grown into a trusted brand
              offering Digital Flow Meters, Digiflow Controllers, Transmitters,
              Indicators, and Conductivity/TDS Meters. Our products are designed
              for durability, accuracy, and energy efficiency— ensuring
              reliability in every application.
            </p>
            <h3>Innovation for the Future</h3>
            <p>
              Driven by a passion for excellence, we continuously invest in
              innovation and advancement to enhance our product performance.
              With a foundation built on integrity and expertise, we remain
              dedicated to delivering world-class solutions that empower
              industries worldwide.
            </p>
          </div>
          <div className="history-image">
            <img src="/office.webp" alt="Company History" />
          </div>
        </div>

        <div className="about-features">
          <h2>What Sets Us Apart</h2>
          <div className="features">
            <div className="feature-item">
              <span className="icon">📏</span>
              <span>Reliable and accurate instruments</span>
            </div>
            <div className="feature-item">
              <span className="icon">✅</span>
              <span>Quality tested instruments</span>
            </div>
            <div className="feature-item">
              <span className="icon">🏭</span>
              <span>State-of-the-art facilities</span>
            </div>
            <div className="feature-item">
              <span className="icon">⏳</span>
              <span>Timely delivery</span>
            </div>
            <div className="feature-item">
              <span className="icon">💳</span>
              <span>Easy payment modes</span>
            </div>
            <div className="feature-item">
              <span className="icon">⚖️</span>
              <span>Ethical business practices</span>
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat">
            <h3>5000+</h3>
            <p>Customers</p>
          </div>
          <div className="stat">
            <h3>50k+</h3>
            <p>Orders Completed</p>
          </div>
          <div className="stat">
            <h3>2 Cr+</h3>
            <p>Annual Turnover</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
