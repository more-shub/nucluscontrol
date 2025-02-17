import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Industries from "./components/Industries";
import About from "./components/About";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      {/* Add padding so content isn't hidden behind the fixed Navbar */}
      <div style={{ paddingTop: "100px" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Industries />
                <About />
                
              </>
            }
          />
          {/* If your product page handles its own internal routing, use a wildcard route */}
          <Route path="/products/*" element={<ProductPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
