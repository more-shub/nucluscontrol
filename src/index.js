import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.css";

const container = document.getElementById("root");
const root = createRoot(container);

// Example flag: set this based on your environment or configuration
const useHashRouter = process.env.REACT_APP_USE_HASH_ROUTER === "true";

root.render(
  <React.StrictMode>
    {useHashRouter ? (
      <HashRouter>
        <App />
      </HashRouter>
    ) : (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )}
  </React.StrictMode>
);
