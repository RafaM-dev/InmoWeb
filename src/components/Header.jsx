import { Link } from "react-router-dom";
import Logo from "../assets/img/buildings.png";

const Header = () => {
  return (
    <header className="py-6 mb-12">
      <div
        className="container mx-auto flex
    justify-between items-center"
      >
        {/* logo */}
        <Link to="/">
          <img className="object-cover h-42 w-20" src={Logo} alt="" />
        </Link>
        {/* Buttons */}
        <div className="flex items-center gap-6">
          <Link className="hover:text-[#094067] transition" to="/">
            Inicio
          </Link>
          {/* <Link className="hover:text-[#094067] transition" to="/ZonasComunes">
            Zonas comunes
          </Link> */}
          <Link
            className="bg-[#094067] hover:bg-[#073250] text-white px-4 py-3 rounded-lg transition"
            to="/ZonasComunes"
          >
            Zonas Comunes
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
