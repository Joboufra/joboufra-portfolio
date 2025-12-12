"use client";
import React, { useState } from 'react';
import GithubIcon from '../../../public/github-icon.svg';
import LinkedinIcon from '../../../public/linkedin-icon.svg';
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
    const endpoint = '/api/send';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const result = await response.json();
    if (response.status === 200) {
      console.log('Email enviado correctamente');
      setEmailSubmitted(true);
      setButtonText('Correo enviado');
      setTimeout(() => {
        setButtonText('Enviar correo');
        setEmailSubmitted(false);
      }, 5000);
    } else {
      console.log('Error al enviar email:', result);
    }
  };

  return (
    <section className="relative w-full overflow-hidden py-12 md:py-14" id="contacto" aria-label="Contacto">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(transparent 95%, rgba(255,255,255,0.07) 95%), linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.07) 95%)',
          backgroundSize: '38px 38px',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5" />

      <div className="relative mx-auto max-w-6xl space-y-10 px-4">
        <motion.div
          className="space-y-4 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Contacto</p>
          <h2 className="text-4xl font-bold text-white">Contacta conmigo</h2>
          <p className="text-slate-200/80">
            Envíame tu mensaje y te contactaré lo antes posible. También puedes escribirme por mis redes indicadas si así lo prefieres.
          </p>
        </motion.div>

        <div className="relative grid gap-8 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-[0_16px_48px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/16 via-rose-300/10 to-emerald-300/12" />
            <div className="relative flex flex-col items-center space-y-6 md:items-start">
              <div className="space-y-3 text-center md:text-left">
                <h5 className="text-2xl font-bold text-white">Ponte en contacto conmigo</h5>
                <p className="text-[#e6e8ed]">
                  Estas son las redes sociales donde puedes encontrarme:
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-6 md:justify-start">
                <Link href="http://www.github.com/joboufra" target="_blank">
                  <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3">
                    <Image src={GithubIcon} alt="Github Icon" className="h-6 w-6" />
                    <p className="text-sm font-semibold">Github</p>
                  </motion.div>
                </Link>

                <Link href="https://www.linkedin.com/in/jboullosa/" target="_blank">
                  <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3">
                    <Image src={LinkedinIcon} alt="LinkedIn Icon" className="h-6 w-6" />
                    <p className="text-sm font-semibold">LinkedIn</p>
                  </motion.div>
                </Link>
              </div>

              <div className="mt-6 w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                <p className="font-semibold text-white">¿Buscas disponibilidad en concreto para hablar conmigo?</p>
                <p>Propón dos franjas horarias y te contesto directamente con un enlace de calendario con nuestra reunión programada.</p>
              </div>
            </div>
          </div>

          <form className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-[0_16px_48px_rgba(0,0,0,0.35)]" onSubmit={handleSubmit}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/14 via-transparent to-white/10" />
            <div className="relative flex flex-col gap-5">
              <div className="space-y-3">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80">
                    Tu email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="mt-1 w-full rounded-lg border border-white/10 bg-[#0e1322] p-3 text-gray-100 outline-none transition focus:border-amber-300/60"
                    placeholder="tucorreo@correo.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/80">
                    Asunto
                  </label>
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    className="mt-1 w-full rounded-lg border border-white/10 bg-[#0e1322] p-3 text-gray-100 outline-none transition focus:border-amber-300/60"
                    placeholder="He visto tu portfolio"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="mt-1 w-full resize-none rounded-lg border border-white/10 bg-[#0e1322] p-3 text-gray-100 outline-none transition focus:border-amber-300/60"
                  placeholder="Buenas Jose, quiero contactar contigo."
                />
              </div>

              <button
                type="submit"
                className={`mt-2 w-full rounded-lg px-5 py-3 text-sm font-semibold text-white transition ${
                  emailSubmitted
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 shadow-lg shadow-orange-500/30'
                }`}
              >
                {buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
