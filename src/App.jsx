import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import ZonasComunes from "./pages/ZonasComunes";
import { PageNotFound } from "./components/404/PageNotFound";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/ZonasComunes" element={<ZonasComunes />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
