"use client"
import React, { useState } from 'react';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }
    const response = await fetch(endpoint, options);
    if (response.status === 200 ) {
      console.log ('Email enviado correctamente');
      setEmailSubmitted(true);
    }
    else {
      console.log ('Error al enviar email');
    }
  }
  return (
    <section 
      className='grid md:grid-cols-2 md:my-12 py-12 gap-4 relative'
    >
      <div>
        <h5 className='text-xl font-bold text-white my-2'>
          ¡Ponte en contacto conmigo!
        </h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          {" "}
          Siempre estoy dispuesto a escuchar nuevas oportunidades. 
          Si tienes alguna pregunta o simplemente quieres contactar conmigo, 
          envíame un mensaje y contestaré lo antes posible.
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link href="http://github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="http://linkedin.com">
            <Image src={LinkedinIcon} alt="LinkedIn Icon" />
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
              placeholder='¡He visto tu portfolio, Jose!' 
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
              placeholder='Buenas Jose, me ha gustado mucho tu portfolio y quiero contactar contigo.'
              />
          </div>
          <button 
            type='submit'
            className='bg-primary-500 hover:bg-green-600 text-black hover:text-white font-medium py-2.5 px-5 rounded-lg w-full'>
            Enviar correo
          </button>
          {
            emailSubmitted && (
            <p className=' text-green-500 text-sm mt-2'>
              Mensaje enviado correctamente
            </p>
            )
          }
        </form>
    </section>
  )
}

export default EmailSection