import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
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

  const pageTitle = filterCategory === "all"
    ? "All Products | Nuclus Control"
    : `${filterCategory} Products | Nuclus Control`;

  const pageDescription = `Browse our ${filterCategory === "all" ? "entire" : filterCategory} product catalog, including precision instruments like flow meters, PH meters, and sensors designed by Nuclus Control.`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="Nuclus Control, flow meters, sensors, PH meters, TDS meters, industrial products" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
      </Helmet>

      {!data ? (
        <div className="loading">Loading products...</div>
      ) : (
        <ProductList 
          products={data.products} 
          filterCategory={filterCategory} 
          onFilter={handleFilter} 
        />
      )}
    </>
  );
};

export default ProductPage;
