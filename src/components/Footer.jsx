import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

// Updated product list (removed "Pd Sensor" and "Pd Sensor (Mini)" as they have no static pages)
const products = [
  "DigiFlow P181-SS",
  "DigiFlow P181-PP",
  "DigiFlow P282-SS",
  "DigiFlow P282-PP",
  "DigiFlow P383-SS",
  "DigiFlow P383-PP",
  "Flow Sensor P812-SS",
  "Flow Sensor P812-PP",
  "FlowReader (Battery)",
  "PH Indicator",
  "PH Transmitter",
  "Conductivity/TDS Indicator",
];

// Map each product name to its static detail page ID
const productMapping = {
  "DigiFlow P181-SS": "P181-SS",
  "DigiFlow P181-PP": "P181-PP",
  "DigiFlow P282-SS": "P282-SS",
  "DigiFlow P282-PP": "P282-PP",
  "DigiFlow P383-SS": "P383-SS",
  "DigiFlow P383-PP": "P383-PP",
  "Flow Sensor P812-SS": "P812-SS",
  "Flow Sensor P812-PP": "P812-PP",
  "FlowReader (Battery)": "BAT-001",
  "PH Indicator": "P200",
  "PH Transmitter": "P300",
  "Conductivity/TDS Indicator": "C181",
};

const Footer = () => {
  return (
    <footer id="footer-section-wrapper">
      <div className="footer-container">
        {/* Top Section: Company Info and Products List */}
        <div className="footer-top">
          {/* Company Info */}
          <div className="footer-company">
            <h2>NUCLUS CONTROL</h2>
            <p>
              Leading manufacturers, exporters, and suppliers of controlling and
              measuring instruments.
            </p>
          </div>
          {/* Products List */}
          <div className="list-section products">
            <h3>Products</h3>
            <ul className="products-list">
              {products.map((prod, index) => (
                <li key={index}>
                  <Link to={`/products/${productMapping[prod]}`}>{prod}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Bottom Section: Contact, Social Media & Map */}
        <div className="footer-bottom">
          <div className="contact-info">
            <div className="contact-item">📍 Pune, Maharashtra, India</div>
            <div className="contact-item">📧 sales@nucluscontrol.com</div>
            <div className="contact-item">📞 +91 8530804143</div>
          </div>
          <div className="social-media">
            <Link to="#" title="Facebook">
              <img
                src="./facebook.png" // Update this path to your actual image location
                alt="Facebook Logo"
                style={{ width: "48px", height: "48px" }}
              />
            </Link>

            <Link to="https://x.com/NuclusControl" title="X">
              <img
                src="./x.png" // Update this path to your actual image location
                alt="X Logo"
                style={{ width: "48px", height: "48px" }}
              />
            </Link>
            <Link to="#" title="LinkedIn">
              <img
                src="./linkedin.png" // Update with the actual path to your LinkedIn logo
                alt="LinkedIn Logo"
                style={{ width: "48px", height: "48px" }}
              />
            </Link>
          </div>
          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.070766695633!2d73.92978241489678!3d18.54933218719245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c11968e5b549%3A0x6c7d2f1763b7a8ca!2sNUCLUS%20CONTROL!5e0!3m2!1sen!2sin!4v1679922983372!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nuclus Control Map"
            ></iframe>
          </div>
        </div>
        {/* Footer Bottom Text */}
        <div className="footer-bottom-text">
          &copy; 2025 Nuclus Control. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
