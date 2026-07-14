import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* FIXED: Removed the duplicate BrowserRouter wrapper since App.js already contains your <Router> context layout layer */}
    <App />
  </React.StrictMode>
);
