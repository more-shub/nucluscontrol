import React from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductList.css";

const ProductList = ({ products, filterCategory, onFilter, onShowDetails }) => {
  const categories = [
    "all",
    "Flow Sensors",
    "Digital Flow Meters",
    "Flow Meters",
    "PH Meters",
    "Conductivity TDS Meters",
  ];

  const filteredProducts =
    filterCategory === "all"
      ? products
      : products.filter((p) => p.category === filterCategory);

  return (
    <div className="product-list">
      <header className="product-list-header">
        <h1>Product Showcase</h1>
        <nav className="button-container" aria-label="Product Categories">
          {categories.map((cat, index) => (
            <button
              key={index}
              className="dark-btn"
              onClick={() => onFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>
      </header>
      <main className="product-container">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onShowDetails={onShowDetails}
          />
        ))}
      </main>
    </div>
  );
};

export default ProductList;
