"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const bentoCards = [
  {
    title: 'Liderazgo de equipos técnicos',
    detail: 'Defino arquitectura, modelado de datos y lidero la evolución de plataformas de búsqueda utilizadas por grandes organizaciones.',
    accent: 'from-emerald-400/30 to-cyan-500/10',
    size: 'sm:col-span-2',
  },
  {
    title: 'Search & discovery',
    detail: 'Diseño de experiencias de búsqueda intuitivas con navegación por facets, autocompletado y sugerencias contextuales.',
    accent: 'from-sky-400/25 to-indigo-500/10',
    size: 'sm:col-span-1',
  },
  {
    title: 'IA y búsqueda semántica',
    detail: 'Arquitecturas RAG, embeddings y hybrid search para búsquedas contextuales y respuestas generativas sobre datos propios.',
    accent: 'from-amber-400/25 to-orange-500/10',
    size: 'sm:col-span-1',
  },
  {
    title: 'Proyectos a gran escala',
    detail: 'Empresas como Telefónica, Repsol, Atradius o Acciona entre otras han confiado en mi para sus proyectos.',
    accent: 'from-rose-400/25 to-fuchsia-500/10',
    size: 'sm:col-span-2',
  },
];

const HeroSection = () => {
  return (
    <section className="relative pt-16">
      <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-primary-400/10 blur-[80px]" />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:items-start">
        <div className="order-1 flex flex-col gap-6 lg:self-stretch">
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold leading-[1.04] text-white sm:text-5xl xl:text-6xl">
              Soy Jose Boullosa. {' '}
              <span className="bg-gradient-to-r from-amber-300 via-rose-300 to-cyan-300 bg-clip-text text-transparent">
                Lead Search
              </span>{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-amber-300 bg-clip-text text-transparent">
                Architect
              </span>
            </h1>

            <p className="text-lg text-slate-200/90">
              Lidero equipos técnicos en el diseño e implementación de plataformas de búsqueda y disponibilidad de datos basadas en
              Elasticsearch, desarrollando sistemas de explotación de datos para entornos corporativos de gran escala.
              Defino arquitectura técnica, modelado de datos e indexación, optimizando relevancia, consultas e integración de arquitecturas RAG.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-white/70">
              <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-emerald-50">
                Search Platform Lead
              </span>
              <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-cyan-50">
                Data Architect
              </span>
              <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-amber-50">
                Elasticsearch Engineer
              </span>
              <span className="rounded-full border border-rose-300/30 bg-rose-300/10 px-3 py-1 text-rose-50">
                DevOps
              </span>
            </div>

            <motion.div
              className="bento-card relative mt-5 overflow-hidden p-5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-300/12 via-white/5 to-amber-300/12" />
              <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-1 text-sm text-white/85">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">Situación laboral actual</p>
                  <p className="text-base font-semibold text-white">No busco cambio</p>
                  <p>Estoy abierto a colaboraciones puntuales y mentoring.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.98 }}
                    href="/docs/CV-Jose-Boullosa.pdf"
                    download
                    className="rounded-full bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-700/30"
                  >
                    Descargar CV
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.98 }}
                    href="#contacto"
                    className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/90 hover:border-amber-300/60 hover:text-white"
                  >
                    Contacto
                  </motion.a>
                </div>
              </div>
            </motion.div>


          </div>
        </div>
        <div className="order-2 lg:order-2 lg:self-stretch">
          <div className="relative flex h-full flex-col">
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
              {bentoCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  className={`bento-card relative overflow-hidden p-5 ${card.size}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.accent}`} />
                  <div className="relative flex h-full flex-col justify-between gap-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/70">{card.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/90">{card.detail}</p>
                    </div>
                    {card.image ? (
                      <div className="relative mt-2 h-24 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                        <Image
                          src={card.image}
                          alt={card.title}
                          width={480}
                          height={120}
                          className="h-full w-full object-cover opacity-90"
                        />
                      </div>
                    ) : (
                      <div className="mt-2 h-[2px] w-16 rounded-full bg-gradient-to-r from-white/70 to-transparent" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
