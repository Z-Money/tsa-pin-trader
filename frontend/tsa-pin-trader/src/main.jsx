/* React Imports */
import React from "react";
import ReactDOM from "react-dom/client";

/* CSS Imports */
import "./assets/styles.css";
import "./index.css";

/* Component Imports */
import PinCardColumn from "./components/PinBoard.jsx";
import PinCard from "./components/ui/card.jsx";
import TestApp from "./TestApp.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     {/* <App /> */}
//     {/* <PinCard /> */}
//     <PinCardColumn />
//     <PinCardColumn />
//     <PinCardColumn />
//     <PinCardColumn />
//     <PinCardColumn />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TestApp />
  </React.StrictMode>
);
