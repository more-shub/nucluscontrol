import React, { useState } from "react";
import "../styles/ProductDetails.css";

const ProductDetails = ({ product, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderImages = product.sliderImages || [];

  const handlePrev = () => {
    if (sliderImages.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
    }
  };

  const handleNext = () => {
    if (sliderImages.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }
  };

  return (
    <div id="details-view" className="product-details">
      <header className="details-header">
        <h1 className="details-title">{product.title}</h1>
        <button className="back-btn" onClick={onBack}>Back to Products</button>
      </header>

      <section className="details-main">
        {/* Left Column: Image Slider */}
        <div className="slider-section">
          <div className="slider-container">
            <button className="slider-btn" onClick={handlePrev}>&lt;</button>
            <img
              src={sliderImages.length > 0 ? sliderImages[currentIndex] : product.imageUrl}
              alt={product.title}
              className="main-image"
            />
            <button className="slider-btn" onClick={handleNext}>&gt;</button>
          </div>
        </div>
        {/* Right Column: Product Info */}
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
          <button className="quote-btn">Ask For Quote</button>
        </div>
      </section>

      {/* Additional Sections */}
      {product.technicalData && (
        <section className="additional-section technical-section">
          <h2>Technical Data</h2>
          <div className="data-columns">
            <ul>
              {Object.entries(product.technicalData.column1 || {}).map(([key, value]) => (
                <li key={key}><strong>{key}:</strong> {value}</li>
              ))}
            </ul>
            <ul>
              {Object.entries(product.technicalData.column2 || {}).map(([key, value]) => (
                <li key={key}><strong>{key}:</strong> {value}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {product.electronics && (
        <section className="additional-section electronics-section">
          <h2>Electronics</h2>
          <div className="data-columns">
            <ul>
              {Object.entries(product.electronics.column1 || {}).map(([key, value]) => (
                <li key={key}><strong>{key}:</strong> {value}</li>
              ))}
            </ul>
            <ul>
              {Object.entries(product.electronics.column2 || {}).map(([key, value]) => (
                <li key={key}><strong>{key}:</strong> {value}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {product.material && (
        <section className="additional-section material-section">
          <h2>Material</h2>
          <div className="data-columns">
            <ul>
              {Object.entries(product.material.column1 || {}).map(([key, value]) => (
                <li key={key}><strong>{key}:</strong> {value}</li>
              ))}
            </ul>
            <ul>
              {Object.entries(product.material.column2 || {}).map(([key, value]) => (
                <li key={key}><strong>{key}:</strong> {value}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {product.mountingOptions && (
        <section className="additional-section mounting-options">
          <h2>Mounting Options</h2>
          <div className="mounting-columns">
            <div className="mounting-block">
              <h3>Field Mount</h3>
              <div className="mounting-images">
                {product.mountingOptions.fieldMount?.map((imgObj, index) => (
                  <img key={index} src={imgObj.src} alt={imgObj.alt} loading="lazy" />
                ))}
              </div>
            </div>
            <div className="mounting-block">
              <h3>Panel Mounted</h3>
              <div className="mounting-images">
                {product.mountingOptions.panelMount?.map((imgObj, index) => (
                  <img key={index} src={imgObj.src} alt={imgObj.alt} loading="lazy" />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {product.lineSize && (
        <section className="additional-section line-size-section">
          <h2>Line Size</h2>
          <div className="table-wrapper">
            <table className="line-size-table">
              <thead>
                <tr>
                  <th>Size</th>
                  {(product.lineSize.sizes || []).map((size, index) => (
                    <th key={index}>{size}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Size (inch)</th>
                  {(product.lineSize.sizeInches || []).map((si, index) => (
                    <td key={index}>{si}</td>
                  ))}
                </tr>
                <tr>
                  <th>Min Flow (m³/hr)</th>
                  {(product.lineSize.minFlow || []).map((mf, index) => (
                    <td key={index}>{mf}</td>
                  ))}
                </tr>
                <tr>
                  <th>Max Flow (m³/hr)</th>
                  {(product.lineSize.maxFlow || []).map((mf, index) => (
                    <td key={index}>{mf}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}

      {product.fittings && (
        <section className="additional-section fittings-section">
          <h2>Fittings</h2>
          <div className="gallery-grid">
            {product.fittings.map((fit, index) => (
              <div key={index} className="fitting-item">
                <img src={fit.src} alt={fit.alt} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;
