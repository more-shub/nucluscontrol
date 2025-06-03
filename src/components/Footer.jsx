import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

// Updated product list (excluding products without static pages)
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

const productMapping = {
  "DigiFlow P181-SS": "Digital-Flow-Indicator-P181-SS",
  "DigiFlow P181-PP": "Digital-Flow-Indicator-P181-PP",
  "DigiFlow P282-SS": "Digital-Flow-Controller-P282-SS",
  "DigiFlow P282-PP": "Digital-Flow-Controller-P282-PP",
  "DigiFlow P383-SS": "Digital-Flow-Transmitter-P383-SS",
  "DigiFlow P383-PP": "Digital-Flow-Transmitter-P383-PP",
  "Flow Sensor P812-SS": "Paddle-Wheel-Flow-Sensor-Stainless-Steel-316",
  "Flow Sensor P812-PP": "Paddle-Wheel-Flow-Sensor-Polypropylene",
  "FlowReader (Battery)": "Battery-Operated-Digital-Flow-Meter",
  "PH Indicator": "pH-Indicator-P200",
  "PH Transmitter": "pH-Transmitter-P300",
  "Conductivity/TDS Indicator": "Conductivity-TDS-Indicator-C181",
};

const Footer = () => {
  const domain = "https://digitalflowmeter.net";

  return (
    <footer id="footer-section-wrapper">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-company">
            <h2>NUCLUS CONTROL</h2>
            <p>
              Leading manufacturers, exporters, and suppliers of controlling and
              measuring instruments.
            </p>

            <div className="icons-container">
              <div className="make-in-india-wrapper">
                <img
                  src={`${domain}/makeinindia.webp`}
                  alt="Make in India"
                  className="make-in-india-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="list-section products">
            <h3>Products</h3>
            <ul className="products-list">
              {products.map((prod, index) => (
                <li key={index}>
                  <Link to={`/products/${productMapping[prod]}`}>
                    {prod}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <address className="contact-info">
            <div className="contact-item">
              📍 Shubh Ganesh Industrial Estate Opp. SBI Bank, Sr No.27/4/2,
              Old Mundhwa-Kharadi Rd. Kharadi, Pune, Maharashtra, 411014
            </div>
            <div className="contact-item">
              📧{" "}
              <a href="mailto:sales@nucluscontrol.com">
                sales@nucluscontrol.com
              </a>
            </div>
            <div className="contact-item">
              📞 <a href="tel:+918530804143">+91 8530804143</a>
            </div>
          </address>

          <div className="social-media" aria-label="Social media links">
            <a
              href="https://www.facebook.com/nucluscontrol"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <img
                src={`${domain}/facebook.webp`}
                alt="Facebook Logo"
                width="40"
                height="40"
                loading="lazy"
              />
            </a>
            <a
              href="https://x.com/NuclusControl"
              target="_blank"
              rel="noopener noreferrer"
              title="X"
            >
              <img
                src={`${domain}/x.webp`}
                alt="X Logo"
                width="40"
                height="40"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/nuclus-control-925989354/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <img
                src={`${domain}/linkedin.webp`}
                alt="LinkedIn Logo"
                width="40"
                height="40"
                loading="lazy"
              />
            </a>
          </div>

          <div className="trusted-seller-wrapper">
            <a
              href="https://www.tradeindia.com/truststamp-member/NUCLUS-CONTROL-2349176/"
              target="_blank"
              rel="noopener noreferrer"
              title="Trusted Seller"
            >
              <img
                src="https://tiimg.tistatic.com/new_website1/general/trust_stamp/trusted-seller.svg"
                alt="Trusted Seller Icon"
                className="trusted-seller-icon"
                width="120"
                height="120"
                loading="lazy"
              />
            </a>
          </div>

          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.070766695633!2d73.92978241489678!3d18.54933218719245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c11968e5b549%3A0x6c7d2f1763b7a8ca!2sNUCLUS%20CONTROL!5e0!3m2!1sen!2sin!4v1679922983372!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nuclus Control Map"
            ></iframe>
          </div>
        </div>

        <div className="footer-bottom-text">
          &copy; {new Date().getFullYear()} Nuclus Control. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
