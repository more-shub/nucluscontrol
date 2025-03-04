import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Contact from "../../components/Contact"; // Your Contact form component
import "../../styles/ProductDetails.css";

const P812_PP = () => {
  const product = {
    id: "P812-PP",
    title: "P812 Paddle Wheel Flow Sensor - Polypropylene",
    description:
      "The P812 PP Paddlewheel Flow Sensor is a high-performance, durable flow sensor ideal for chemical processing and water treatment applications. It operates within a dynamic flow range of 0.5 to 5 m/s (1.6 to 16.4 ft/s) and is designed for full pipe flow measurement. The PP housing offers excellent chemical resistance and is suitable for applications requiring a cost-effective solution.",
    keyFeatures: [
      "Chemical-resistant Polypropylene body",
      "Wide dynamic flow range: 0.5 to 5 m/s",
      "Supports pipe sizes from 15 NB to 300 NB",
      "Multiple installation fitting options",
      "Low power consumption with pulse output",
      "Food grade plastic / metal MOC",
    ],
    technicalData: {
      column1: {
        "Flow Rate Range": "0.5 to 5 m/s (1.6 to 16.4 ft/s)",
        "Pipe Size Range": "15 NB to 300 NB (0.5 to 12 inches)",
        "Linearity": "±1% of full range",
        "Repeatability": "±0.5% of full range",
      },
      column2: {
        "Min Reynolds Number Required": "4500",
        "Operating Pressure": "Max 10 bar (145 psi) @ 25°C",
        "Operating Temperature": "-10°C to 70°C (14°F to 158°F)",
        "Input": "Nuclus sensor P812",
      },
    },
    electronics: {
      column1: {
        "Supply Voltage": "10 to 24 VDC regulated",
        "Supply Current": "<20 mA @ 10 to 24 VDC",
      },
      column2: {
        "Output Type": "Pulse output (NPN)",
        "Output Current": "10 mA max.",
        "Frequency": "38 Hz per m/s nominal (5.5 Hz per ft/s nominal)",
      },
    },
    material: {
      column1: {
        "Sensor Body": "Polypropylene (black)",
        "O-Rings": "Viton / Teflon",
      },
      column2: {
        "Rotor Pin": "Metal shaft",
        Rotor: "Black PVDF",
      },
    },
    fittings: [
      { src: "/Weld-Adapter.webp", alt: "Weld Adapter Fitting" },
      { src: "/pvcthreaded.webp", alt: "Threaded End ABS/PVC T Fitting" },
      { src: "/Triclore.webp", alt: "Triclore Fitting" },
      { src: "/upvc.webp", alt: "Threaded End ABS/PVC T Fitting" },
      { src: "/Tfitting-Threadedend.webp", alt: "Threaded End Fitting" },
      { src: "/StubEnd.webp", alt: "StubEnd Fitting" },
    ],
    lineSize: {
      sizes: ["15 NB", "25 NB", "40 NB", "50 NB", "60 NB", "80 NB", "100 NB"],
      sizeInches: ['0.5"', '1"', '1.5"', '2"', '2.5"', '3"', '4"'],
      minFlow: ["0.26", "0.88", "2.04", "3.50", "6.30", "7.80", "14.0"],
      maxFlow: ["2.60", "8.80", "20.4", "35.0", "63.0", "78.0", "140"],
    },
    sliderImages: [
      "/p812.webp",
      "/p812threadedend.webp",
      "/p812threadedend1.webp",
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);
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

      {/* Material Section */}
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

export default P812_PP;
