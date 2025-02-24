import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Industries from "./components/Industries";
import About from "./components/About";
import ProductPage from "./components/ProductPage"; // Ensure this is the correct product listing component
import BlogSection from "./components/BlogSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import P282_PP from "./pages/ProductDetails/P282-PP"; // Product detail page
import P282_SS from "./pages/ProductDetails/P282-SS";
import P181_PP from "./pages/ProductDetails/P181-PP";
import P181_SS from "./pages/ProductDetails/P181-SS";
import P383_PP from "./pages/ProductDetails/P383-PP";
import P383_SS from "./pages/ProductDetails/P383-SS";
import P812_PP from "./pages/ProductDetails/P812-PP";
import P812_SS from "./pages/ProductDetails/P812-SS";
import P200 from "./pages/ProductDetails/P200";
import P300 from "./pages/ProductDetails/P300";
import C181 from "./pages/ProductDetails/C181";
import C282 from "./pages/ProductDetails/C282";
import BAT_001 from "./pages/ProductDetails/BAT-001";
import ScrollToTop from "./ScrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      {/* Padding to prevent content from being hidden behind a fixed Navbar */}
      <div style={{ paddingTop: "100px" }}>
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Industries />
                <About />
                <Contact />
              </>
            }
          />
          {/* Product listing and detail routes */}
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/P282-PP" element={<P282_PP />} />
          <Route path="/products/P282-SS" element={<P282_SS />} />
          <Route path="/products/P181-PP" element={<P181_PP />} />
          <Route path="/products/P181-SS" element={<P181_SS />} />
          <Route path="/products/P383-PP" element={<P383_PP />} />
          <Route path="/products/P383-SS" element={<P383_SS />} />
          <Route path="/products/P812-PP" element={<P812_PP />} />
          <Route path="/products/P812-SS" element={<P812_SS />} />
          <Route path="/products/P200" element={<P200 />} />
          <Route path="/products/P300" element={<P300 />} />
          <Route path="/products/C181" element={<C181 />} />
          <Route path="/products/C282" element={<C282 />} />
          <Route path="/products/BAT-001" element={<BAT_001 />} />
          {/* Blog route */}
          <Route path="/blogs" element={<BlogSection />} />
          {/* Catch-all: redirect any unknown route to /products */}
          <Route path="*" element={<Navigate to="/products" replace />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
