import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Contact from "../../components/Contact"; // Your Contact form component
import "../../styles/ProductDetails.css";

const P181_SS = () => {
  const product = {
    id: "Digital-Flow-Indicator-P181-SS",
    title: "Digital Flow Indicator - P181 (SS Sensor)",
    description:
      "NUCLUS Model P181 is a digital flow rate indicator compatible with Stainless Steel (SS) sensors. It offers precise real-time flow measurement and supports both field and panel mounting configurations. The P181 model features a programmable scale factor for direct flow rate readings in multiple units (m³/hr, LPH, LPM, LPS, GPM US/UK).",
    modesAvailable: ["Flow Rate Indicator"],
    keyFeatures: [
      "Programmable scale factor",
      "Direct flow rate readings in multiple units",
      "Backlit alphanumeric 1 x 16 LCD display",
      "IP65 protection for field mounting",
    ],
    technicalData: {
      column1: {
        Function: "Flow Rate Indicator",
        "Supply Voltage": "230 V AC",
        Accuracy: "±1% of FSD",
        Input: "Nuclus sensor P812",
        "Scale Factor": "00.1000000",
      },
      column2: {
        "Operating Temperature": "0 to 50°C",
        Protection: "IP65",
        "Sensor Supply": "12 VDC (±10%), 30 mA",
      },
    },
    electronics: {
      column1: {
        Display: "Backlit alphanumeric 1 x 16 LCD",
        "Supply Voltage": "230 V AC",
        "Sensor Supply": "12 VDC (±10%), 30 mA",
      },
    },
    material: {
      column1: {
        Housing: "Plastic ABS",
        "Sensor Body": "Stainless Steel 316",
      },
      column2: {
        "O-Ring": "Viton / Teflon",
        "Paddle (Rotor)": "Black PVDF",
      },
    },
    mountingOptions: {
      fieldMount: [
        { src: "/p181ssthreadedend.webp", alt: "P181 SS Field Mount Option 1" },
      ],
      panelMount: [
        { src: "/p181sspanel.webp", alt: "P181 SS Panel Mount Option 1" },
      ],
    },
    fittings: [
      { src: "/Triclore(ss).webp", alt: "Triclore Fitting" },
      { src: "/Tfitting-Threadedend(ss).webp", alt: "Threaded End Fitting" },
      { src: "/StubEnd(ss).webp", alt: "StubEnd Fitting" },
      { src: "/Triclore(ss).webp", alt: "Triclore Fitting" },
    ],
    lineSize: {
      sizes: ["15 NB", "25 NB", "40 NB", "50 NB", "60 NB", "80 NB", "100 NB"],
      sizeInches: ['0.5"', '1"', '1.5"', '2"', '2.36"', '3.00"', '4.00"'],
      minFlow: ["0.26", "0.88", "2.04", "3.50", "6.30", "8.00", "14.00"],
      maxFlow: ["2.60", "8.80", "20.40", "35.00", "63.00", "80.00", "140.00"],
    },
    sliderImages: [
      "/p181ss.webp",
      "/p181ssthreadedend.webp",
      "/p181sspanel.webp",
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);
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

  // State and ref for the contact form
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  // Handler for "Ask For Quote" button
  const handleQuoteClick = () => {
    if (!showForm) {
      setShowForm(true);
      // Ensure the form is rendered before scrolling
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
        </div>
      </section>

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
      <section className="additional-section mounting-options">
        <h2>Mounting Options</h2>
        <div className="mounting-columns">
          <div className="mounting-block">
            <h3>Field Mount</h3>
            <div className="mounting-images">
              {product.mountingOptions.fieldMount.map((imgObj, index) => (
                <img
                  key={index}
                  src={imgObj.src}
                  alt={imgObj.alt}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <div className="mounting-block">
            <h3>Panel Mounted</h3>
            <div className="mounting-images">
              {product.mountingOptions.panelMount.map((imgObj, index) => (
                <img
                  key={index}
                  src={imgObj.src}
                  alt={imgObj.alt}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="additional-section fittings-section">
        <h2>Fittings</h2>
        <div className="gallery-grid">
          {product.fittings.map((fit, index) => (
            <div key={index} className="fitting-item">
              <img src={fit.src} alt={fit.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>
      <section className="additional-section line-size-section">
        <h2>Line Size</h2>
        <div className="table-wrapper">
          <table className="line-size-table">
            <thead>
              <tr>
                <th>Size</th>
                {product.lineSize.sizes.map((size, index) => (
                  <th key={index}>{size}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Size (inch)</th>
                {product.lineSize.sizeInches.map((si, index) => (
                  <td key={index}>{si}</td>
                ))}
              </tr>
              <tr>
                <th>Min Flow (m³/hr)</th>
                {product.lineSize.minFlow.map((mf, index) => (
                  <td key={index}>{mf}</td>
                ))}
              </tr>
              <tr>
                <th>Max Flow (m³/hr)</th>
                {product.lineSize.maxFlow.map((mf, index) => (
                  <td key={index}>{mf}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {showForm && (
        <section className="quote-form-section" ref={formRef}>
          <h2>FORM FOR QUOTATION</h2>
          <Contact />
        </section>
      )}
    </div>
  );
};

export default P181_SS;
