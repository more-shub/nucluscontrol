import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ product, onShowDetails }) => {
  return (
    <div className="card">
      <a href="#" onClick={(e) => { e.preventDefault(); onShowDetails(product.id); }}>
        <img src={product.imageUrl} alt={product.name} loading="lazy" width="300" height="200" />
      </a>
      <div className="card-content">
        <h5>{product.name}</h5>
        {product.rating && (
          <div className="rating">
            {Array.from({ length: Math.floor(product.rating) }).map((_, i) => (
              <svg key={i} viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 15l-5.4 3.6 1.8-6-5.4-4.2 6.7-.6L10 2l2.3 5.8 6.7.6-5.4 4.2 1.8 6z" />
              </svg>
            ))}
          </div>
        )}
        <div className="btn-container">
          <a href="#" className="get-quote">Get Price/Quote</a>
          <a href="#" className="more-details" onClick={(e) => { e.preventDefault(); onShowDetails(product.id); }}>
            More Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
