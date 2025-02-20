import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import '../styles/ProductPage.css';

const ProductPage = () => {
  const [data, setData] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  const handleFilter = (category) => {
    setFilterCategory(category);
  };

  if (!data) {
    return <div className="loading">Loading products...</div>;
  }

  return (
    <ProductList 
      products={data.products} 
      filterCategory={filterCategory} 
      onFilter={handleFilter} 
    />
  );
};

export default ProductPage;
