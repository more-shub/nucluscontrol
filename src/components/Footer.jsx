import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

// Define your categories and product names
const categories = [
  "Flow Sensors",
  "Digital Flow Meters",
  "Flow Meters",
  "PH Meters",
  "Conductivity TDS Meters",
];

const products = [
  "DigiFlow P181-SS",
  "DigiFlow P181-PP",
  "DigiFlow P282-SS",
  "DigiFlow P282-PP",
  "DigiFlow P383-SS",
  "DigiFlow P383-PP",
  "Flow Sensor P812-SS",
  "Flow Sensor P812-PP",
  "Pd Sensor",
  "Pd Sensor (Mini)",
  "FlowReader (Battery)",
  "PH Indicator",
  "PH Transmitter",
  "Conductivity/TDS Indicator",
  "Conductivity/TDS Controller",
];

// A simple slugify helper (you can also import from a utils file)
const slugify = (text) =>
  text.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "");

const Footer = () => {
  return (
    <footer id="footer-section-wrapper">
      <div className="footer-container">
        {/* Top Section: Company Info and Lists */}
        <div className="footer-top">
          {/* Company Info */}
          <div className="footer-company">
            <h2>NUCLUS CONTROL</h2>
            <p>
              Leading manufacturers, exporters, and suppliers of controlling
              and measuring instruments.
            </p>
          </div>
          {/* Categories List */}
          <div className="list-section categories">
            <h3>Categories</h3>
            <ul>
              {categories.map((cat, index) => (
                <li key={index}>
                  <Link to={`/products?category=${encodeURIComponent(cat)}`}>
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Products List */}
          <div className="list-section products">
            <h3>Products</h3>
            <ul className="products-list">
              {products.map((prod, index) => (
                <li key={index}>
                  <Link to={`/products/details/${slugify(prod)}`}>
                    {prod}
                  </Link>
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.59375 0 0 .59375 0 1.325v21.3516C0 23.4063.59375 24 1.325 24H12.82v-9.294h-3.204v-3.623h3.204V8.413c0-3.169 1.932-4.899 4.75-4.899 1.351 0 2.509.1016 2.847.146V8.64H18.11c-1.4 0-1.672.667-1.672 1.645v2.156h3.344l-0.436 3.623h-2.908V24h5.699C23.4063 24 24 23.4063 24 22.676V1.325C24 .59375 23.4063 0 22.675 0z" />
              </svg>
            </Link>
            <Link to="#" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20.447 20.452H17.46V14.94c0-1.307-.026-2.988-1.822-2.988-1.823 0-2.104 1.423-2.104 2.889v5.617h-2.989V9h2.873v1.561h.041c.4-.754 1.379-1.55 2.837-1.55 3.035 0 3.598 2 3.598 4.605v6.836zM5.337 7.433a1.74 1.74 0 1 1 0-3.48 1.74 1.74 0 0 1 0 3.48zM6.89 20.452H3.788V9h3.102v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.205 24 24 23.226 24 22.271V1.729C24 .774 23.205 0 22.225 0z" />
              </svg>
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
