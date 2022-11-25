import BannerZonas from "../components/BannerZonas";
import HouseList from "../components/HouseList";
import { motion } from "framer-motion";
import { ComunZones } from "../components/ComunZones";

const ZonasComunes = () => {
  return (
    <motion.div
      className="min-h-[1800px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
    >
      <BannerZonas />
      {/* <HouseList /> */}
      <ComunZones/>
    </motion.div>
  );
};

export default ZonasComunes;
