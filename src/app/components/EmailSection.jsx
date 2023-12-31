"use client"
import React, { useState } from 'react';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [buttonText, setButtonText] = useState('Enviar correo');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    if (response.status === 200) {
      console.log('Email enviado correctamente');
      setEmailSubmitted(true);
      setButtonText('Correo enviado');
      setTimeout(() => {
        setButtonText('Enviar correo');
        setEmailSubmitted(false);
      }, 5000);
    } else {
      console.log('Error al enviar email');
    }
  };

  return (
    <section className='grid md:grid-cols-2 md:my-12 py-12 gap-4 relative'>
      <div>
        <h5 className='text-xl font-bold text-white my-2'>
          ¡Ponte en contacto conmigo!
        </h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          Si tienes alguna pregunta o simplemente quieres contactar conmigo,
          envíame un mensaje y te responderé lo antes posible. Si prefieres no contactar por email, tienes aquí algunas de mis redes:
        </p>

        <div className='socials flex flex-row gap-8 mt-5 mb-10'>
          <Link href="http://www.github.com/joboufra" target='_blank'>
            <motion.div
              whileHover={{ scale: 1.10, duration: 0.1 }}
              className="flex flex-col items-center">
              <Image src={GithubIcon} alt="Github Icon" />
              <p>Github</p>
            </motion.div>
          </Link>

          <Link href="https://www.linkedin.com/in/jboullosa/" target='_blank'>
            <motion.div
              whileHover={{ scale: 1.10, duration: 0.1 }}
              className="flex flex-col items-center">
              <Image src={LinkedinIcon} alt="LinkedIn Icon" />
              <p>LinkedIn</p>
            </motion.div>
          </Link>
        </div>

      </div>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <div className='mb-6'>
          <label
            htmlFor="email"
            className='text-white block text-sm font-medium mb-2'>
            Tu email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            required
            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            placeholder='tucorreo@correo.com'
          />
        </div>

        <div className='mb-6'>
          <label
            htmlFor="subject"
            className='text-white block text-sm font-medium mb-2'>
            Asunto
          </label>
          <input
            name="subject"
            type="text"
            id="subject"
            required
            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            placeholder='¡He visto tu portfolio!'
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='message'
            className='text-white block text-sm font-medium mb-2'
          >
            Mensaje
          </label>
          <textarea
            name="message"
            id="message"
            className='resize-none	bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            placeholder='Buenas Jose, quiero contactar contigo.'
          />
        </div>

        <button
          type='submit'
          className={`${
            emailSubmitted
              ? 'bg-green-600 hover:bg-green-700'
              : 'hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-600 bg-gradient-to-r from-primary-600 to-secondary-600'
          } text-white font-medium py-2.5 px-5 rounded-lg w-full transition-all duration-500`}
        >
          {buttonText}
        </button>
      </form>
    </section>
  );
};

export default EmailSection;
