import React from "react";
import { Helmet } from "react-helmet-async";
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

// Blog detail pages
import TdsControllersForWaterTreatmentPlants from "./pages/tds-controllers-for-water-treatment-plants";
import PaddleWheelFlowmetersForSmartFarmingInIndia from "./pages/paddle-wheel-flowmeters-for-smart-farming-in-india";
import HowBatteryOperatedFlowMetersImproveWaterFlowMeasurementInIndustrialPlants from "./pages/how-battery-operated-flow-meters-improve-water-flow-measurement-in-industrial-plants";
import PaddleWheelFlowmeterForWaterFlowMeasurementSupplierInPune from "./pages/paddle-wheel-flowmeter-for-water-flow-measurement-supplier-in-pune";

function App() {
  return (
    <>
      <Helmet>
        <title>Nuclus Control - Digital Flow Meters</title>
        <meta
          name="description"
          content="Nuclus Control provides high-quality digital flow meters."
        />
        <meta
          name="keywords"
          content="Nuclus Control, Digital Flow Meter, Flow Measurement, Industrial Flow Meters, Flow Sensors"
        />
      </Helmet>
      <Navbar />
      <ScrollToTop />
      <div style={{ paddingTop: "100px" }}>
        <Routes>
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

          {/* Product Routes */}
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
          <Route path="/products/BAT-001" element={<BAT_001 />} />

          {/* Blog Routes */}
          <Route path="/blogs" element={<BlogSection />} />
          <Route path="/blogs/tds-controllers-for-water-treatment-plants" element={<TdsControllersForWaterTreatmentPlants />} />
          <Route path="/blogs/paddle-wheel-flowmeters-for-smart-farming-in-india" element={<PaddleWheelFlowmetersForSmartFarmingInIndia />} />
          <Route path="/blogs/how-battery-operated-flow-meters-improve-water-flow-measurement-in-industrial-plants" element={<HowBatteryOperatedFlowMetersImproveWaterFlowMeasurementInIndustrialPlants />} />
          <Route path="/blogs/paddle-wheel-flowmeter-for-water-flow-measurement-supplier-in-pune" element={<PaddleWheelFlowmeterForWaterFlowMeasurementSupplierInPune />} />

          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/products" replace />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
