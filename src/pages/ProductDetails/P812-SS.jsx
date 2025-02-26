import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Contact from "../../components/Contact"; // Your Contact form component
import '../../styles/ProductDetails.css';

const P812_SS = () => {
  const product = {
    id: "P812-SS",
    title: "P812 Paddle Wheel Flow Sensor - Stainless Steel 316",
    description: "The P812 SS Paddlewheel Flow Sensor is a rugged, high-durability sensor designed for industrial and high-pressure applications. It supports pipe sizes ranging from 15 NB to 300 NB and provides accurate flow rate and total flow measurement. The SS 316 housing ensures excellent corrosion resistance and extended lifespan in demanding environments.",
    keyFeatures: [
      "Stainless Steel 316 corrosion-resistant body",
      "Wide dynamic flow range: 0.5 to 5 m/s",
      "Supports pipe sizes from 15 NB to 300 NB",
      "Multiple installation fitting options",
      "High-pressure resistance"
    ],
    technicalData: {
      column1: {
        "Flow Rate Range": "0.5 to 5 m/s (1.6 to 16.4 ft/s)",
        "Pipe Size Range": "15 NB to 300 NB (0.5 to 12 inches)",
        "Linearity": "±1% of full range",
        "Repeatability": "±0.5% of full range"
      },
      column2: {
        "Min Reynolds Number Required": "4500",
        "Operating Pressure": "Max 12 bar (175 psi) @ 25°C",
        "Operating Temperature": "-10°C to 100°C (14°F to 212°F)"
      }
    },
    electronics: {
      column1: {
        "Supply Voltage": "10 to 24 VDC regulated",
        "Supply Current": "<20 mA @ 10 to 24 VDC"
      },
      column2: {
        "Output Type": "Pulse output (NPN)",
        "Output Current": "10 mA max.",
        "Frequency": "38 Hz per m/s nominal (5.5 Hz per ft/s nominal)"
      }
    },
    material: {
      column1: {
        "Sensor Body": "Stainless Steel 316",
        "O-Rings": "Viton / Teflon"
      },
      column2: {
        "Rotor Pin": "Stainless Steel 316",
        "Rotor": "Black PVDF"
      }
    },
    fittings: [
      { src: "/p812-ss-fitting1.webp", alt: "Flange End SS T Fitting" },
      { src: "/p812-ss-fitting2.webp", alt: "Block Design Sensor Fitting" }
    ],
    lineSize: {
      sizes: ["15 NB", "25 NB", "40 NB", "50 NB", "65 NB", "80 NB", "100 NB"],
      sizeInches: ["0.5\"", "1\"", "1.5\"", "2\"", "2.5\"", "3\"", "4\""],
      minFlow: ["0.26", "0.88", "2.04", "3.50", "6.30", "7.80", "14.0"],
      maxFlow: ["2.60", "8.80", "20.4", "35.0", "63.0", "78.0", "140"]
    },
    sliderImages: ["/P812-SS.webp", "/p812-ss2.png", "/p812-ss3.png"]
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
          <h2>REQUEST OF QUOTE</h2>
          <Contact />
        </section>
      )}
    </div>
  );
};

export default P812_SS;
