import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Contact from "../../components/Contact"; // Your Contact form component
import "../../styles/ProductDetails.css";

const C282 = () => {
  const product = {
    id: "C282",
    title: "Conductivity / TDS Controller & Transmitter - C282",
    description:
      "NUCLUS Model C282 is a process Conductivity/TDS controller & transmitter designed for inline installations. It offers a wide measuring range (0 to 200.0 mS) with high accuracy (±1% of reading). The microprocessor-based design supports automatic or manual temperature compensation, multiple cell factors, 4-20 mA isolated output, and optional RS485 MODBUS. Its IP65 enclosure, graphic LCD display, and dual alarm relays make it ideal for a variety of industrial process applications.",
    keyFeatures: [
      "64 x 128 Graphic LCD with Back Light",
      "Range up to 200.0 mS with ±1% accuracy",
      "Automatic or manual temperature compensation",
      "4-20 mA isolated output (RS485 MODBUS optional)",
      "Two alarm relays (2 x 5A)",
      "Universal power supply (90 - 265 VAC or 12-36 VDC)",
      "IP65 enclosure for harsh environments",
      "1 or 2 point calibration"
    ],
    technicalData: {
      column1: {
        Function: "Conductivity / TDS Controller & Transmitter",
        "Measuring Range": "0 to 200.0 mS",
        Accuracy: "±1% of reading",
        Resolution: "0.01",
        "Operating Temperature": "0 to 60°C"
      },
      column2: {
        Display: "64 x 128 Graphic LCD with Back Light",
        Calibration: "1 or 2 point calibration",
        Dimension: "96 x 96 x 120 mm",
        Enclosure: "IP65"
      }
    },
    electronics: {
      column1: {
        "Temperature Range": "0 to 200°C",
        "Temperature Sensor": "Pt100 / Pt1000"
      },
      column2: {
        "Temperature Compensation": "Automatic / Manual",
        "Cell Factor": "0.01, 0.1, 1.0, 10"
      }
    },
    material: {
      column1: {
        Output: "4-20 mA isolated",
        "Alarm Relay": "2 x 5A"
      },
      column2: {
        "RS485 MODBUS": "Optional",
        Supply: "90 - 265 VAC or 12-36 VDC"
      }
    },
    cellSpecifications: {
      "Wetted Parts":
        "Cell Body: Polypropylene (White), Electrode: SS316, Insulator: PTFE with epoxy potting",
      "Threaded Connection": "½ & ¾ inch BSP",
      "Cable Length": "3 meters (STD)",
      "Cell Weight": "500 gms (Approx.)"
    },
    // Range Selectable from the image (Conductivity & TDS)
    rangeSelectable: {
      "Conductivity (µS)": "20, 200, 2000, 20000, 200000",
      "TDS (ppm)": "20, 200, 2000, 20000, 200000"
    },
    // Slider images (replace with actual paths if you have them)
    sliderImages: ["/c181dp.webp", "/cell.webp"]
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

      {/* Range Selectable Section */}
      {product.rangeSelectable && (
        <section className="additional-section range-section">
          <h2>Range Selectable</h2>
          <div className="data-columns">
            <ul>
              {Object.entries(product.rangeSelectable).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Quotation Form Section */}
      {showForm && (
        <section className="quote-form-section" ref={formRef}>
          <h2>FORM FOR QUOTATION</h2>
          <Contact />
        </section>
      )}
    </div>
  );
};

export default C282;
