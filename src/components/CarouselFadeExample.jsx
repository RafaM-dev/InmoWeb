import Carousel from "react-bootstrap/Carousel";
import h1 from "../assets/img/apartments/a1lg.png";
import h2 from "../assets/img/apartments/a2lg.png";
import h3 from "../assets/img/apartments/a3lg.png";

const CarouselFadeExample = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={h1} className="w-full" alt="img" />
        <div className=" absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-ghost text-3xl btn-circle	">
            ❮
          </a>
          <a href="#slide2" className="btn btn-ghost text-3xl btn-circle ">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={h2} className="w-full" alt="img" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-ghost text-3xl btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-ghost text-3xl btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={h2} className="w-full" alt="img" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-ghost text-3xl btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-ghost text-3xl btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={h3} className="w-full" alt="img" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
          <a href="#slide3" className="btn btn-ghost text-3xl btn-circle ">
            ❮
          </a>
          <a href="#slide1" className="btn btn-ghost text-3xl btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarouselFadeExample;
