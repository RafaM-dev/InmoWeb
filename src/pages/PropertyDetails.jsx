// import houseData
import { housesData } from "../data";
import "../components/header.css"
//  useParams
import { useParams } from "react-router-dom";
// import icons
import { BiBed, BiBath, BiArea, BiPhone } from "react-icons/bi";
// import link
import Carousel from "../components/CarouselFadeExample";
import { ContactForm } from "../components/ContactForm";
import Logo from "../assets/img/Logo2.png";
import { motion } from "framer-motion";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  return (
    <motion.div
      className="container mx-auto min-h-[800px] mb-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">{property.name}</h2>
          <h3 className="text-lg mb-4">{property.address}</h3>
        </div>
        <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
          <div className="bg-[#3da9fc] rounded-full text-white px-3 inline-block">
            {property.type}
          </div>
          <div className="bg-[#094067] rounded-full text-white px-3 inline-block">
            {property.country}
          </div>
        </div>
        <div className="text-3xl font-semibold text-[#094067]">
          $ {property.price}
        </div>
      </div>
      <div className="flex flex-col items-start gap-8 lg:flex-row">
        <div className="max-w-[768px]">
          <div className="mb-8">
            {/* <img src={property.imageLg} alt='' /> */}
            <Carousel />
          </div>
          <div className="flex gap-x-6 text-[#094067] mb-6">
            <div className="flex gap-x-2 items-center">
              <BiBed className="text-2xl" />
              <div className="text-lg font-medium">{property.bedrooms}</div>
            </div>
            <div className="flex gap-x-2 items-center">
              <BiBath className="text-2xl" />
              <div className="text-lg font-medium">{property.bathrooms}</div>
            </div>
            <div className="flex gap-x-2 items-center">
              <BiArea className="text-2xl" />
              <div className="text-lg font-medium">{property.surface}</div>
            </div>
          </div>
          <p>{property.description}</p>
        </div>
        <div className="flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8">
          <div className="flex items-center gap-x-4 mb-8">
            <div className="flex items-center justify-center w-20 h-20 p-1 border border-gray-300 rounded-full ">
              <img className="image2"  src={Logo} alt="" />
            </div>
            <div>
              <div className="font-bold text-lg">Contacto</div>
              {/* <Link to="" className="text-[#094067] text-sm">
                Ver listados
              </Link> */}
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyDetails;
