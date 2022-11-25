import tennis from "../assets/img/zones/tennis.jpg";
import park from "../assets/img/zones/park.jpg";
import pool from "../assets/img/zones/pool.jpg";

export const ComunZones = () => {
  return (
    <div className="container mx-auto ">
      <div className="container mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-14 items-center pt-16  ">
        <img
          src={tennis}
          alt=""
          className=" animate__animated animate__fadeInLeft max-w-full h-auto rounded-3xl shadow-2xl object-cover	 "
        />
        <h3 className="text-lg font-medium	 object-cover font-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          laudantium architecto enim sequi rerum blanditiis voluptatum commodi
          eius perspiciatis! Explicabo illo architecto nulla adipisci in quidem
          voluptatem aut ullam nam.
        </h3>

        <img
          src={park}
          alt=""
          className=" animate__animated animate__fadeInRight max-w-full h-auto rounded-3xl shadow-2xl object-cover	 "
        />
        <h3 className="text-lg font-medium	 object-cover font-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          laudantium architecto enim sequi rerum blanditiis voluptatum commodi
          eius perspiciatis! Explicabo illo architecto nulla adipisci in quidem
          voluptatem aut ullam nam.
        </h3>
        <img
          src={pool}
          alt=""
          className=" animate__animated animate__fadeInLeft max-w-full h-auto rounded-3xl shadow-2xl object-cover	 "
        />
        <h3 className="text-lg font-medium	 object-cover font-sans ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          laudantium architecto enim sequi rerum blanditiis voluptatum commodi
          eius perspiciatis! Explicabo illo architecto nulla adipisci in quidem
          voluptatem aut ullam nam.
        </h3>
        <br />
      </div>
    </div>
  );
};
