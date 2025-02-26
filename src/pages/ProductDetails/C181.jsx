import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Contact from '../../components/Contact'; // Your Contact form component
import '../../styles/ProductDetails.css';

const C181 = () => {
  const product = {
    id: "C181",
    title: "Conductivity/TDS Indicator - C181",
    description: "NUCLUS Model C181 is a digital conductivity and TDS indicator designed for a wide variety of applications, ranging from high-purity water quality monitoring to process control in weak acids and bases. This microprocessor-based instrument provides accurate, repeatable readings with long-term signal stability. It is designed for both in-line and submersible installation.",
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
    mountingOptions: {
      fieldMount: [
        { src: "/c181-field1.png", alt: "C181 Field Mount Option 1" },
        { src: "/c181-field2.png", alt: "C181 Field Mount Option 2" }
      ],
      panelMount: [
        { src: "/c181-panel1.png", alt: "C181 Panel Mount Option 1" },
        { src: "/c181-panel2.png", alt: "C181 Panel Mount Option 2" }
      ]
    },
    cellSpecifications: {
      "WettedParts": "Cell Body: Polypropylene (White), Electrode: SS316, Insulator: PTFE with epoxy potting",
      "ThreadedConnection": "½ & ¾ inch BSP",
      "CableLength": "3 meters (STD)",
      "CellWeight": "500 gms (Approx.)",
      "CellRange": "0.01 cell constant: 0.055 to 100 µS/cm; 0.10: 1 to 1000 µS/cm; 1.00: 10 to 10000 µS/cm"
    },
    fittings: [
      { src: "/c181-fitting1.png", alt: "C181 Fitting 1" },
      { src: "/c181-fitting2.png", alt: "C181 Fitting 2" }
    ],
    sliderImages: ["/c181-1.png", "/c181-2.png", "/c181-3.png"]
    // Note: This product data does not include a "lineSize" property.
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex(prev =>
      prev === 0 ? product.sliderImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prev =>
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
      {/* Conditionally render line-size section if product.lineSize exists */}
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
          <h2>FORM FOR QUOTATION</h2>
          <Contact />
        </section>
      )}
    </div>
  );
};

export default C181;
