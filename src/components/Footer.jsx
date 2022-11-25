const Footer = () => {
  return (
    <footer className="bg-[#052123] py-8 text-center text-white">
      <div className="container mx-auto">

        <div className="relative flex py-5 items-center gap-5">
          <div className="flex-grow border-t border-gray-400"></div>

          <button
            id="facebook"
            className="bg-white  sticky duration-500 border-2 border-blue-600 fixed  w-12 transform hover:-translate-y-3   h-12 text-2xl rounded-full hover:bg-blue-600 hover:text-white text-blue-600 "
          >
            <i className="fab fa-facebook-f"></i>
          </button>

          <button
            id="instagram"
            className=" border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white bg-white text-pink-600 w-12 h-12  transform hover:-translate-y-3 rounded-full duration-500 "
          >
            <i className="fab fa-instagram"></i>
          </button>

          <button
            id="whatsapp"
            className="bg-white duration-500    w-12 h-12 border-2 rounded-full border-green-600 transform hover:-translate-y-3  text-2xl text-green-500 hover:bg-green-600 hover:text-white"
          >
            <i className="fab fa-whatsapp"></i>
          </button>

          <button
            id="twitter"
            className="bg-white  transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white text-2xl"
          >
            <i className="fab fa-twitter"></i>
          </button>

          <div className="flex-grow border-t border-gray-400"></div>
        </div>
      </div>
      Copyright &copy; 2022. Todos los derechos reservados.
    </footer>
  );
};

export default Footer;
