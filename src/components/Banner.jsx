import React from 'react';
import Image from '../assets/img/office.png';
import Search from '../components/Search';

const Banner = () => {
  return(
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4x1 lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-[#094067]'>Renta</span>
          </h1>
          <p className='max-w-[480px] mb-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus unde asperiores dolores ab quam tempore debitis obcaecati autem sed explicabo!
          </p>
        </div>
        {/* image */}
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt="" />
        </div>
      </div>
      {/* <Search/> */}
    </section>
  );
};

export default Banner;
