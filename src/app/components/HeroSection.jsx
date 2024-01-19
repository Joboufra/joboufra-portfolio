"use client"
import { React } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  const variants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } },
    notHover: { scale: 1.0, transition: { duration: 0.2 } },
  };

  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12 md:mt-20'>
        <div className='col-span-8 place-self-center text-center sm:text-left'>
          <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span
              className='text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 '>
                Jose Boullosa{" "}
                <br />
                </span>
              <TypeAnimation
                sequence={[
                  'DevOps Engineer',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={1}
              />
          </h1>

          <div className='col-span-8 mt-10 lg:mt-10 mb-4'>
            <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 '>
              Especializado en orquestación y gestión de contenedores con tecnologías como Kubernetes y en diseño de arquitecturas de monitorización y alertado basadas en ELK Stack.
            </p>
            <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 font-semibold'>
              Certificado como Elastic Observability Engineer.
            </p>
            <motion.button 
              className='relative mt-5 w-[180px] h-14 sm:w-[250px] text-white font-bold rounded-full bg-gradient-to-br from-primary-600 to-secondary-600'
              initial="notHover"
              whileHover="hover"
              variants={variants}
            >
              <a 
                className='uppercase tracking-[1px]'
                href="/docs/CV-Jose-Boullosa-2023.pdf" 
                download
              >Descargar CV</a>

            </motion.button>
          </div>
        </div>

        <div
          className='col-span-4 flex justify-center items-center relative mt-5 sm:mt-0 scale-100 m:scale-50'
        >
          <div className="absolute flex justify-center items-center max-w-[300px] w-[150px]  h-[170px] bg-slate-600 rounded-2xl sm:w-[330px] sm:h-[320px]"> 
          </div>

          <Image 
            src='/images/fotoPerfil.png' 
            alt={`Jose-Boullosa`} 
            width={350}
            height={350}
            className="z-10 max-w-[80%] sm:max-w-none"
          />  
        </div>
      </div>
    </section>
  );
};

export default HeroSection;