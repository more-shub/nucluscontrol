import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Contact from "../../components/Contact"; // Your Contact form component
import '../../styles/ProductDetails.css';

const P300 = () => {
  const product = {
    id: "P300",
    title: "pH Transmitter - P300",
    description: "NUCLUS Model P300 is an online accurate pH transmitter designed for electrochemical analysis. It displays the current pH value and provides a self-powered 4-20mA current output for process control. This microcontroller-based instrument is versatile and suitable for industrial applications including water treatment, filtration, pharmaceutical, bottling, and textile processes.",
    modesAvailable: [
      "Real-time pH Monitoring",
      "Analog Output for PLC Integration"
    ],
    keyFeatures: [
      "Self-powered 4-20mA output",
      "4-digit red 7-segment LED display",
      "Software-controlled tuning for Zero and Slope",
      "Manual temperature correction (Auto optional)",
      "IP65 weatherproof enclosure",
      "Conformity with Indian National Standards"
    ],
    technicalData: {
      column1: {
        "Function": "pH Transmitter",
        "Supply Voltage": "230 VAC ±10%",
        "Range": "0 to 14 pH",
        "Resolution": "0.01 pH"
      },
      column2: {
        "Accuracy": "±0.02 pH",
        "Repeatability": "±0.01 pH",
        "Operating Temperature": "0 to 50°C"
      }
    },
    electronics: {
      column1: {
        "Display": "4-digit red 7-segment LED display (0.5\")"
      }
    },
    material: {
      column1: {
        "Housing": "Plastic ABS",
        "pH Electrode": "Glass body, Standard PVC (Optional Teflon/SS316) housing"
      }
    },
    sliderImages: ["/ph-transmitter1.png", "/ph-transmitter2.png", "/ph-transmitter3.png"],
    fittings: [
      { src: "/ph-fittings1.webp", alt: "pH Transmitter Fitting 1" },
      { src: "/ph-fittings2.webp", alt: "pH Transmitter Fitting 2" }
    ]
    // Note: P300 does not include a lineSize property.
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? product.sliderImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === product.sliderImages.length - 1 ? 0 : prev + 1));
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
        <link rel="canonical" href={`https://www.mycompany.com/products/${product.id}`} />
      </Helmet>
      <header className="details-header">
        <h1 className="details-title">{product.title}</h1>
        <Link to="/products" className="back-btn">Back to Products</Link>
      </header>
      <section className="details-main">
        <div className="slider-section">
          <div className="slider-container">
            <button className="slider-btn" onClick={handlePrev}>&lt;</button>
            <img 
              src={product.sliderImages[currentIndex]} 
              alt={product.title} 
              className="main-image"
              loading="lazy"
            />
            <button className="slider-btn" onClick={handleNext}>&gt;</button>
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
          <button className="quote-btn" onClick={handleQuoteClick}>Ask For Quote</button>
        </div>
      </section>
      <section className="additional-section technical-section">
        <h2>Technical Data</h2>
        <div className="data-columns">
          <ul>
            {Object.entries(product.technicalData.column1).map(([key, value]) => (
              <li key={key}><strong>{key}:</strong> {value}</li>
            ))}
          </ul>
          <ul>
            {Object.entries(product.technicalData.column2).map(([key, value]) => (
              <li key={key}><strong>{key}:</strong> {value}</li>
            ))}
          </ul>
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
      {/* Conditionally render line-size section only if product.lineSize exists */}
      {product.lineSize && (
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
      )}
      {showForm && (
        <section className="quote-form-section" ref={formRef}>
          <h2>REQUEST OF QUOTE</h2>
          <Contact />
        </section>
      )}
    </div>
  );
};

export default P300;
