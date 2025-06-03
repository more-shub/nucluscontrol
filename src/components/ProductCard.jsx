import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <>
      <Helmet>
        <title>{`${product.name} | Nuclus Control`}</title>
        <meta
          name="description"
          content={`Explore details about ${product.name} by Nuclus Control. View specifications, features, and more.`}
        />
        <meta name="keywords" content={`${product.name}, Nuclus Control products`} />
        <meta property="og:title" content={product.name} />
        <meta
          property="og:description"
          content={`Explore high-quality instruments like ${product.name} from Nuclus Control.`}
        />
        <meta property="og:image" content={product.imageUrl} />
        <meta property="og:type" content="product" />
      </Helmet>

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
        </div>
      </div>
    </>
  );
};

export default ProductCard;
