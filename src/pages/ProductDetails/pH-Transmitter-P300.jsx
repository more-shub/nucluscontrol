import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Contact from "../../components/Contact"; // Your Contact form component
import "../../styles/ProductDetails.css";

const P300 = () => {
  const product = {
    id: "pH-Transmitter-P300.",
    title: "pH Transmitter - P300",
    description:
      "NUCLUS Model P300 is an online accurate pH transmitter designed for electrochemical analysis. It displays the current pH value and provides a self-powered non-isolated 4-20 mA current output (300E max) for process control. This microcontroller-based instrument is versatile and suitable for industrial applications including water treatment, filtration, pharmaceutical, bottling, and textile processes. It offers software-controlled tuning for Zero and Slope, manual temperature correction (auto optional), and conforms to Indian National Standards—all housed in an IP65 weatherproof enclosure.",
    modesAvailable: [
      "Real-time pH Monitoring",
      "Analog Output for PLC Integration",
    ],
    keyFeatures: [
      "Self-powered non-isolated 4-20 mA current output (300E max)",
      "4-digit red 7-segment LED display",
      "Software-controlled tuning for Zero and Slope",
      "Manual temperature correction (Auto optional)",
      "IP65 weatherproof enclosure",
      "Conformity with Indian National Standards",
    ],
    technicalData: {
      column1: {
        Function: "pH Transmitter",
        "Supply Voltage": "230 VAC ±10%",
        Range: "0 to 14 pH",
        Resolution: "0.01 pH",
      },
      column2: {
        Accuracy: "±0.02 pH",
        Repeatability: "±0.01 pH",
        "Operating Temperature": "0 to 50°C",
      },
    },
    electronics: {
      column1: {
        Display: '4-digit red 7-segment LED display (0.5")',
      },
    },
    material: {
      column1: {
        Housing: "Plastic ABS",
      },
      column2: {
        "pH Electrode":
          "Glass body, Standard PVC (Optional: Teflon/SS316) housing",
      },
    },
    electrodeSpecifications: {
      "Wetted Parts": "Glass Body",
      Housing: "Standard PVC (Optional: Teflon/SS316)",
      "Process Connection": "3/4 inch (NPT optional)",
      "Pressure Range": "0 - 6 bar (Std)",
      "Cable Connector": "BMC",
      "Electrode Range": "0.0 to 14.0 pH",
      Accuracy: "±0.02 pH",
      Repeatability: "±0.01 pH",
      "Configuration Lock": "Password Protection",
      Calibration: "Using front membrane keys",
      "Electrode Housing": "Plastic ABS",
      "Cutout Size": "90 mm x 90 mm",
      "Operating Temperature": "0 to 50°C",
      Display: '4-digit 7-segment red LED display (0.5")',
      "Input Supply": "230 VAC ±10%",
      Resolution: "0.01 pH",
      Dimensions: "96 mm x 96 mm x 85 mm",
      Connection: "Combined pH electrode with BNC connection",
      Enclosure: "IP65 Weatherproof",
    },
    sliderImages: ["/pHmeter1.webp", "/Elecctrode.webp", "/housing.webp"],
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
        <title>{product.title} | Nuclus Control</title>
        <meta name="description" content={product.description} />
        <link
          rel="canonical"
          href={`https://digitalflowmeter.net/products/${product.id}`}
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
          {product.modesAvailable && (
            <>
              <h3>Modes Available</h3>
              <ul>
                {product.modesAvailable.map((mode, index) => (
                  <li key={index}>{mode}</li>
                ))}
              </ul>
            </>
          )}
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
            {Object.entries(product.technicalData.column1).map(
              ([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              )
            )}
          </ul>
          <ul>
            {Object.entries(product.technicalData.column2).map(
              ([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      {/* Electronics Section */}
      {product.electronics && (
        <section className="additional-section electronics-section">
          <h2>Electronics</h2>
          <div className="data-columns">
            <ul>
              {Object.entries(product.electronics.column1).map(
                ([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                )
              )}
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

      {/* pH Electrode Specifications Section */}
      {product.electrodeSpecifications && (
        <section className="additional-section electrode-specifications-section">
          <h2>pH Electrode Specifications</h2>
          <div className="data-columns">
            <ul>
              {Object.entries(product.electrodeSpecifications).map(
                ([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                )
              )}
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

export default P300;
