'use client';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12 md:mt-20'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm_text 5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 '>
              Jose Boullosa{" "}
              <br></br>
            </span>
            <TypeAnimation
              sequence={[
                'SysOps Engineer',
                2000,
                'Database Administrator',
                2000,
                'Site Reliability Engineer',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.
          </p>
        </div>
        <div className='col-span-5 place-self-center mt-6 lg:mt-4 mb-4'>
        <button className='px-0.5 py-0.5 w-full rounded-full sm:w-fit mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 text-white font-bold hover:transition-all hover:duration-300 hover:bg-transparent'>
              <span className='px-5 py-3 sm:w-fit block rounded-full bg-[#121212] hover:bg-gradient-to-br from-primary-500 to-secondary-500 hover:text-black'> 
                Descargar CV 
              </span>
            </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;