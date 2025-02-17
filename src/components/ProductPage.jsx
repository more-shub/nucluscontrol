import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import "../styles/ProductPage.css";

const ProductPage = () => {
  const [data, setData] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [filterCategory, setFilterCategory] = useState("all");

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const handleFilter = (category) => {
    setFilterCategory(category);
  };

  const handleShowDetails = (id) => {
    setSelectedProductId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setSelectedProductId(null);
  };

  if (!data) {
    return <div className="loading">Loading products...</div>;
  }

  // When a product is selected, show its details view
  if (selectedProductId) {
    const productDetail = data.productDetails[selectedProductId];
    return (
      <ProductDetails product={productDetail} onBack={handleBack} />
    );
  }

  // Otherwise, show the product list
  return (
    <ProductList
      products={data.products}
      filterCategory={filterCategory}
      onFilter={handleFilter}
      onShowDetails={handleShowDetails}
    />
  );
};

export default ProductPage;
