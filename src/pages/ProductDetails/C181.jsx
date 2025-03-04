import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Contact from "../../components/Contact"; // Your Contact form component
import "../../styles/ProductDetails.css";

const C181 = () => {
  const product = {
    id: "C181",
    title: "Conductivity/TDS Indicator - C181",
    description:
      "NUCLUS Model C181 is a digital conductivity and TDS indicator designed for a wide variety of applications, ranging from high-purity water quality monitoring to process control in weak acids and bases. This microprocessor-based instrument provides accurate, repeatable readings with long-term signal stability. It is designed for both in-line and submersible installation.",
    keyFeatures: [
      "Microprocessor-based for wide operating range and long term signal stability",
      "Backlit alphanumeric 1 x 16 LCD display",
      "IP65 weatherproof enclosure",
      "Dual-threaded (½ & ¾ inch BSP) for quick installation",
      "Universal power supply (70V AC to 270V AC SMPS)"
    ],
    technicalData: {
      column1: {
        "Function": "Conductivity & TDS Indicator",
        "Supply Voltage": "70V AC to 270V AC SMPS",
        "Linearity": "+2% of FSD",
        "Input": "from Nuclus Cell"
      },
      column2: {
        "Protection": "IP65",
        "Configuration Lock": "Password Protection",
        "Calibration": "Using front keys",
        "Display": "Backlit alphanumeric 1 x 16 LCD"
      }
    },
    electronics: {
      column1: {
        "Cell Constant": "Selectable (e.g., 0.01 to 1.00)",
        "Operating Temperature": "0 to 50°C"
      },
      column2: {
        "Measurement Range": "Dependent on cell constant",
        "Cable Length": "3 meters (STD)"
      }
    },
    material: {
      column1: {
        "Housing": "Plastic ABS"
      },
      column2: {
        "Electrode": "Conductivity cell with SS316 electrode, PTFE insulator (epoxy potted)"
      }
    },
    cellSpecifications: {
      "Wetted Parts": "Cell Body: Polypropylene (White), Electrode: SS316, Insulator: PTFE with epoxy potting",
      "Threaded Connection": "½ & ¾ inch BSP",
      "Cable Length": "3 meters (STD)",
      "Cell Weight": "500 gms (Approx.)",
      "Cell Range": "0.01 cell constant: 0.055 to 100 µS/cm; 0.10: 1 to 1000 µS/cm; 1.00: 10 to 10000 µS/cm"
    },
    sliderImages: ["/c181dp.webp", "/cell.webp"]
    // Note: This product data does not include mounting options or line size.
  };

  // Slider state for images
  const [currentIndex, setCurrentIndex] = useState(0);
  // State and ref for the contact form
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? product.sliderImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === product.sliderImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleQuoteClick = () => {
    if (!showForm) {
      setShowForm(true);
      // Wait for the form to render before scrolling
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    } else {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="details-view" className="product-details">
      <Helmet>
        <title>{product.title} | MyCompany</title>
        <meta name="description" content={product.description} />
        <link
          rel="canonical"
          href={`https://www.mycompany.com/products/${product.id}`}
        />
      </Helmet>
      <header className="details-header">
        <h1 className="details-title">{product.title}</h1>
        <Link to="/products" className="back-btn">
          Back to Products
        </Link>
      </header>

      {/* Main Section: Slider & Description */}
      <section className="details-main">
        <div className="slider-section">
          <div className="slider-container">
            <button className="slider-btn" onClick={handlePrev}>
              &lt;
            </button>
            <img
              src={product.sliderImages[currentIndex]}
              alt={product.title}
              className="main-image"
              loading="lazy"
            />
            <button className="slider-btn" onClick={handleNext}>
              &gt;
            </button>
          </div>
        </div>
        <div className="info-section">
          <h2>Description</h2>
          <p>{product.description}</p>
          {product.keyFeatures && (
            <>
              <h3>Key Features</h3>
              <ul>
                {product.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </>
          )}
          <button className="quote-btn" onClick={handleQuoteClick}>
            Ask For Quote
          </button>
        </div>
      </section>

      {/* Technical Data Section */}
      <section className="additional-section technical-section">
        <h2>Technical Data</h2>
        <div className="data-columns">
          <ul>
            {Object.entries(product.technicalData.column1).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
          <ul>
            {Object.entries(product.technicalData.column2).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Electronics Section */}
      {product.electronics && (
        <section className="additional-section electronics-section">
          <h2>Electronics</h2>
          <div className="data-columns">
            <ul>
              {Object.entries(product.electronics.column1).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
            <ul>
              {Object.entries(product.electronics.column2).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Material Section */}
      {product.material && (
        <section className="additional-section material-section">
          <h2>Material</h2>
          <div className="data-columns">
            <ul>
              {Object.entries(product.material.column1).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
            <ul>
              {Object.entries(product.material.column2).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Cell Specifications Section */}
      {product.cellSpecifications && (
        <section className="additional-section cell-specifications-section">
          <h2>Cell Specifications</h2>
          <div className="data-columns">
            <ul>
              {Object.entries(product.cellSpecifications).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {showForm && (
        <section className="quote-form-section" ref={formRef}>
          <h2>FORM FOR QUOTATION</h2>
          <Contact />
        </section>
      )}
    </div>
  );
};

export default C181;
