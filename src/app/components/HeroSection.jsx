"use client"
import { React } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const variants = {
    hover: { scale: 1.5, transition: { duration: 0.2 } },
    notHover: { scale: 1.2, transition: { duration: 0.2 } },
  };

  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12 md:mt-20'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 '>
              Jose Boullosa{" "}
              <br />
            </span>
            <TypeAnimation
              sequence={[
                'SysOps Engineer',
                2000,
                'DB Administrator',
                2000,
                'Observability Engineer',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
            <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 '>
              Especializado en diseño de arquitecturas técnicas de monitorización y alarmado basadas en Stack ELK, con creación de visualizaciones tanto en Kibana como Grafana.
            </p>
            <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 font-semibold'>
              Certificado como Elastic Observability Engineer.
            </p>
        </div>
        <div className='col-span-5 place-self-center mt-6 lg:mt-4 mb-4'>
          <motion.button 
            className='relative px-0.5 py-0.5 w-full rounded-full sm:w-fit mr-4 text-white font-bold'
            initial="notHover"
            whileHover="hover"
          >
            <motion.span 
              className='absolute inset-0 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600' 
              variants={variants}>
            </motion.span>
            <span className='relative px-5 py-3 sm:w-fit block rounded-full'>
            <a href="/docs/CV-Jose-Boullosa-2023.pdf" download>DESCARGAR CV</a>
            </span>
          </motion.button>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;