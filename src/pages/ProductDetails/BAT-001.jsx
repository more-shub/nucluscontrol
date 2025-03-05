import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Contact from '../../components/Contact'; // Your Contact form component
import '../../styles/ProductDetails.css';

const BAT_001 = () => {
  const product = {
    id: "BAT-001",
    title: "Battery Operated Flow Meter - FloReader",
    description:
      "The FloReader is a battery-operated water flow meter engineered for stand-alone water applications such as water treatment, distribution networks, and irrigation. With no reliance on mains power, it offers flexible installation and reliable flow measurement, featuring both flow rate indication and totalizer functions.",
    modesAvailable: ["Flow Rate Indication", "Totalizer Function"],
    keyFeatures: [
      "Battery operated for flexible installation without mains power",
      "Accurate flow rate measurement and integrated totalizer function",
      "Easy installation and calibration",
      "Modular construction for economical deployment",
      "Mountable horizontally or vertically with a 360° rotatable display"
    ],
    technicalData: {
      column1: {
        "Function": "Flow Rate Indicator & Totalizer",
        "Flow Rate Range": "0.5 to 5 m/s (1.6 to 16.4 ft/s)",
        "Pipe Size Range": "15 NB to 300 NB (0.5 to 12 in.)"
      },
      column2: {
        "Input Supply": "2 x 1.5 VDC (Duracell batteries)",
        "Protection Rating": "IP65 (Weatherproof Enclosure)",
        "Operating Pressure": "5 bar (145 psi) maximum",
        "Operating Temperature": "Up to 55°C maximum"
      }
    },
    electronics: {
      column1: {
        "Display": "7-digit numeric customizable LCD display"
      }
    },
    material: {
      column1: {
        "Housing": "ABS (for enclosure)",
        "Sensor": "Polypropylene (PP) for sensor"
      }
    },
    lineSize: {
      sizes: ["15 NB", "25 NB", "40 NB", "50 NB", "60 NB", "80 NB", "100 NB"],
      sizeInches: ["0.5\"", "1\"", "1.5\"", "2\"", "2.36\"", "3.00\"", "4.00\""],
      minFlow: ["0.26", "0.88", "2.04", "3.50", "6.30", "8.00", "14.00"],
      maxFlow: ["2.60", "8.80", "20.40", "35.00", "63.00", "80.00", "140.00"]
    },
    fittings: [
      { src: "/Weld-Adapter.webp", alt: "Weld Adapter Fitting" },
      { src: "/pvcthreaded.webp", alt: "Threaded End ABS/PVC T Fitting" },
      { src: "/Triclore.webp", alt: "Triclore Fitting" },
      { src: "/upvc.webp", alt: "Threaded End ABS/PVC T Fitting" },
      { src: "/Tfitting-Threadedend.webp", alt: "Threaded End Fitting" },
      { src: "/StubEnd.webp", alt: "StubEnd Fitting" }
    ],
    sliderImages: ["/Floreader1.webp", "/Floreader2.webp", "/Floreader3.webp","/Floreader4.webp"]
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

export default BAT_001;
