import React from "react";
import Banner from "../components/Banner";
import { motion } from "framer-motion";
import HouseList from "../components/HouseList";

const Home = () => {
  return (
    <motion.div
      className="min-h-[1800px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
    >
      <Banner />
      <HouseList />
    </motion.div>
  );
};

export default Home;
