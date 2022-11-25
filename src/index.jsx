import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HouseContextProvider from "./components/HouseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HouseContextProvider>
    <Router>
      <React.StrictMode>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </React.StrictMode>
    </Router>
  </HouseContextProvider>
);
