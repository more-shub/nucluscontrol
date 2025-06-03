import React from 'react';
import { Helmet } from 'react-helmet';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

const ProductList = ({ products, filterCategory, onFilter }) => {
  const categories = [
    "all",
    "Flow Sensors",
    "Digital Flow Meters",
    "Flow Meters",
    "PH Meters",
    "Conductivity TDS Meters"
  ];

  const filteredProducts = filterCategory === "all"
    ? products
    : products.filter(p => p.category === filterCategory);

  const pageTitle = filterCategory === "all"
    ? "Our Product Range | Nuclus Control"
    : `${filterCategory} | Nuclus Control`;

  const pageDescription = `Explore our range of ${
    filterCategory === "all" ? "products" : filterCategory
  } designed and manufactured by Nuclus Control.`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="Flow meters, sensors, PH meters, TDS, Nuclus Control products" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="product-list">
        <header className="product-list-header">
          <h1>Product Showcase</h1>
          <nav className="button-container" aria-label="Product Categories">
            {categories.map((cat, index) => (
              <button key={index} className="dark-btn" onClick={() => onFilter(cat)}>
                {cat}
              </button>
            ))}
          </nav>
        </header>
        <main className="product-container">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </main>
      </div>
    </>
  );
};

export default ProductList;
