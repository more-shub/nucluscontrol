import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Industries from "./components/Industries";
import About from "./components/About";
import ProductPage from "./components/ProductPage";
import BlogSection from "./components/BlogSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import "./App.css";

// Product detail pages
import P282_PP from "./pages/ProductDetails/P282-PP";
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
import BAT_001 from "./pages/ProductDetails/BAT-001";

// Blog detail pages (grouped similar to products)
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";
import Blog4 from "./pages/Blog4";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      {/* Padding to prevent content from being hidden behind the fixed Navbar */}
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
          {[
            { path: "P282-PP", element: <P282_PP /> },
            { path: "P282-SS", element: <P282_SS /> },
            { path: "P181-PP", element: <P181_PP /> },
            { path: "P181-SS", element: <P181_SS /> },
            { path: "P383-PP", element: <P383_PP /> },
            { path: "P383-SS", element: <P383_SS /> },
            { path: "P812-PP", element: <P812_PP /> },
            { path: "P812-SS", element: <P812_SS /> },
            { path: "P200", element: <P200 /> },
            { path: "P300", element: <P300 /> },
            { path: "C181", element: <C181 /> },
            { path: "BAT-001", element: <BAT_001 /> },
          ].map(({ path, element }) => (
            <Route key={path} path={`/products/${path}`} element={element} />
          ))}

          <Route path="/blogs" element={<BlogSection />} />
          {[
            { path: "blog1", element: <Blog1 /> },
            { path: "blog2", element: <Blog2 /> },
            { path: "blog3", element: <Blog3 /> },
            { path: "blog4", element: <Blog4 /> },
            // Add additional blog detail pages here as needed.
          ].map(({ path, element }) => (
            <Route key={path} path={`/blogs/${path}`} element={element} />
          ))}

          {/* Catch-all: redirect any unknown route to /products */}
          <Route path="*" element={<Navigate to="/products" replace />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
