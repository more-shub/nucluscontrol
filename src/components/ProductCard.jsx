import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <Link to={`/products/${product.id}`}>
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          loading="lazy" 
          width="300" 
          height="200"
        />
      </Link>
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
          <button className="get-quote" onClick={(e) => e.preventDefault()}>
            Get Price/Quote
          </button>
          <Link to={`/products/${product.id}`} className="more-details">
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
