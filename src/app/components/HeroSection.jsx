"use client";

import { motion, useReducedMotion } from 'framer-motion';

const HeroSection = () => {
  const reduceMotion = useReducedMotion();
  const scrollToProjects = () => {
    const target = document.getElementById('proyectos');
    if (!target) return;

    const firstChild = target.firstElementChild;
    const firstChildStyle = firstChild ? window.getComputedStyle(firstChild) : null;
    const contentTop = firstChild
      ? firstChild.getBoundingClientRect().top + window.scrollY + parseFloat(firstChildStyle.paddingTop || '0')
      : target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({ top: Math.max(0, contentTop - 96), behavior: 'smooth' });
  };

  return (
    <section className="relative">
      <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
        <div>
          <div className="mb-5">
            <motion.p
              className="mb-2 text-2xl font-medium tracking-[-0.04em] text-[var(--ink)] sm:text-3xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Jose Boullosa
            </motion.p>
            <motion.p
              className="editorial-label text-[var(--accent)]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              Search Platform Architect · Data Systems
            </motion.p>
          </div>
          <motion.h1
            className="hero-title max-w-5xl text-[clamp(3rem,8vw,8rem)] font-semibold leading-[0.86] tracking-[-0.08em] text-[var(--ink)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.05 }}
          >
            {['Hacer que lo', 'complejo funcione.'].map((line, index) => (
              <span className="hero-title-line" key={line}>
                <motion.span
                  initial={reduceMotion ? false : { y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h1>
        </div>

        <motion.div
          className="flex flex-col justify-end lg:pb-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="max-w-md text-base leading-relaxed text-[var(--muted)]">
            Lidero equipos técnicos en plataformas de búsqueda y datos basadas en Elasticsearch. Defino arquitectura, modelado e indexación, optimizando relevancia, consultas e integración de soluciones RAG.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium">
            <button type="button" className="editorial-link text-left" onClick={scrollToProjects}>Ver proyectos <span aria-hidden="true">↘</span></button>
            <a className="editorial-link" href="/docs/CV-Jose-Boullosa.pdf" download>Descargar CV <span aria-hidden="true">↘</span></a>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 grid border-t border-[var(--line)] sm:grid-cols-3">
        {[
          ['01', 'Principios', 'Tecnología útil, sistemas operables y decisiones que resisten la escala.'],
          ['02', 'Enfoque', 'Arquitectura de búsqueda, plataformas en la nube, IA, datos y observabilidad'],
          ['03', 'Método', 'Entender bien el problema y construir soluciones que duren'],
        ].map(([number, title, detail]) => (
          <motion.div
            key={number}
            className="border-b border-[var(--line)] py-5 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-0 sm:last:border-r-0"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: Number(number) * 0.06 }}
          >
            <p className="editorial-label mb-6">{number}</p>
            <h2 className="text-xl font-medium tracking-tight text-[var(--ink)]">{title}</h2>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-[var(--muted)]">{detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
