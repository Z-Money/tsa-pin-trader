/* React Imports */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

/* CSS Imports */
import "./main.css";

/* Component Imports */
import TestApp from "./TestApp.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <TestApp />
    </Router>
  </React.StrictMode >
);
