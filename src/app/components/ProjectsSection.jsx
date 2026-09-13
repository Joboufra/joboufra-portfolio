"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const projects = [
  {
    number: '01',
    client: 'VASS · Repsol',
    title: 'Reimplantación del buscador corporativo',
    date: 'Mar 2026 — Actualidad',
    type: 'Search',
    summary: 'Reimplantación del buscador corporativo de los portales web de Repsol sobre Coveo. Incluye la configuración de la plataforma, query pipelines, relevancia, reglas de ranking e integración con portales y fuentes de contenido, además de la coordinación del análisis, la resolución de incidencias y la evolución de la solución.',
    tags: ['Coveo Relevance Cloud', 'Query pipelines', 'Relevancia', 'Gestión de equipos'],
  },
  {
    number: '02',
    client: 'VASS · Proyecto interno',
    title: 'Adopción de IA y agentes para equipos',
    date: 'Ene 2026 — Actualidad',
    type: 'AI',
    summary: 'Iniciativa interna de VASS para incorporar la IA al trabajo diario y preparar su aplicación en futuros proyectos: definición de prioridades, diseño de agentes y flujos de trabajo, formación de equipos y apoyo a la entrega.',
    tags: ['IA Champion', 'Diseño de agentes', 'Formación', 'Entrega'],
  },
  {
    number: '03',
    client: 'VASS · Acciona',
    title: 'Buscador documental corporativo',
    date: 'Jun 2025 — Actualidad',
    type: 'Search',
    summary: 'Desarrollo y evolución de un buscador documental corporativo para facilitar el acceso a la documentación interna. Responsable de la arquitectura basada en Elasticsearch, el modelado de datos, los índices, las consultas, la relevancia y la integración con repositorios documentales.',
    tags: ['Elasticsearch', 'Modelado de datos', 'Relevancia', 'Gestión de equipos'],
  },
  {
    number: '04',
    client: 'VASS · Atradius (Crédito y Caución)',
    title: 'Buscador de pólizas',
    date: 'Ene 2025 — Actualidad',
    type: 'Search',
    summary: 'Diseño y evolución de un buscador de pólizas basado en Elasticsearch. Incluye la definición del modelo de indexación, la arquitectura de datos y la optimización de consultas para mejorar el rendimiento, la calidad de los resultados y la explotación de la información.',
    tags: ['Kubernetes', 'Elasticsearch', 'Indexación', 'Arquitectura de datos'],
  },
  {
    number: '05',
    client: 'Telefónica',
    title: 'Open Gateway',
    date: 'Ene 2024 — Dic 2024',
    type: 'Platform',
    summary: 'Participación en el equipo global de soporte de nivel 2 de Open Gateway, iniciativa de Telefónica y la GSMA para exponer capacidades de red mediante APIs estandarizadas. Soporte a varios países, despliegue, operación y resolución de incidencias en APIs, además de apoyo a los entornos de demostración del Mobile World Congress 2024.',
    tags: ['APIs de red', 'Soporte de nivel 2', 'AKS', 'Operaciones'],
  },
  {
    number: '06',
    client: 'Telefónica',
    title: 'Telefónica Kernel (4th platform)',
    date: 'Oct 2023 — Dic 2024',
    type: 'Platform',
    summary: 'Operación, despliegue y resolución de incidencias sobre Telefónica Kernel (4th platform), con soporte técnico para garantizar la estabilidad de los servicios.',
    tags: ['AKS', 'Despliegues', 'Resolución de incidencias', 'Operación de plataforma'],
  },
  {
    number: '07',
    client: 'Telefónica',
    title: 'Integración de IA en soporte de operaciones',
    date: 'May 2024 — Jun 2024',
    type: 'AI',
    summary: 'Desarrollo de un módulo en Python integrado con una plataforma de IA existente para optimizar el trabajo de los agentes N1 de Telefónica Kernel. Filtrado inteligente de alertas, correlación de logs en Elasticsearch para localizar el origen de las incidencias y propuesta de autorremediaciones.',
    tags: ['Python', 'Prometheus', 'Elasticsearch', 'Autorremediación'],
  },
  {
    number: '08',
    client: 'MESbook',
    title: 'Plataforma de observabilidad',
    date: 'May 2023 — Oct 2023',
    type: 'Observability',
    summary: 'Liderazgo de la migración de la plataforma de observabilidad de Elasticsearch 7.x a 8.x, utilizada para monitorizar aplicaciones e infraestructura de más de 70 clientes. Estandarización de la recolección de logs y métricas en Windows y Linux mediante Elastic Agents, con adaptación de la arquitectura y mejora de la ingesta.',
    tags: ['Elastic Stack', 'Elastic Agents', 'Windows / Linux', '70+ clientes'],
  },
  {
    number: '09',
    client: 'MESbook',
    title: 'Automatización de la recolección de KPIs',
    date: 'Feb 2023 — Abr 2023',
    type: 'Data',
    summary: 'Automatización de la recopilación de KPIs de producción de clientes, antes manual, integrando la captura y el envío de datos al sistema interno de análisis. Permitió a los Project Managers trabajar con información más fiable y actualizada para generar informes y detectar oportunidades de mejora.',
    tags: ['SQL', 'APIs', 'Automatización', 'KPIs'],
  },
];

const filters = [
  ['All', 'Todos'],
  ['Search', 'Búsqueda'],
  ['Platform', 'Plataforma'],
  ['AI', 'IA'],
  ['Observability', 'Observabilidad'],
  ['Data', 'Análisis de datos'],
];

const personalProjects = [
  {
    title: 'Json To Table',
    description: 'Herramienta para transformar datos JSON en tablas visuales, con backend en Python y frontend en Next.js y Tailwind CSS.',
    image: '/images/projects/jsontotable.webp',
    tags: ['Python', 'Next.js', 'Web'],
    source: 'https://github.com/Joboufra/pyJsonToTable-Front',
    demo: 'https://jsontotable.joboufra.es/',
  },
  {
    title: 'QR Creator',
    description: 'Generador de códigos QR personalizados, desplegado en mi clúster personal.',
    image: '/images/projects/qrcreator.webp',
    tags: ['Python', 'Next.js', 'Web'],
    source: 'https://github.com/Joboufra/qr-creator',
    demo: 'https://qr.joboufra.es/',
  },
  {
    title: 'Despliegue: NTFY',
    description: 'Plataforma de notificaciones push desplegada en Kubernetes para conectar mis servicios personales.',
    image: '/images/projects/ntfy.webp',
    tags: ['Kubernetes', 'Notificaciones', 'Operaciones'],
    source: 'https://ntfy.joboufra.es/docs/',
    demo: 'https://ntfy.joboufra.es',
  },
  {
    title: 'V16 Tracker - Ingesta y visualización',
    description: 'Servicio en Python que ingiere y normaliza eventos de balizas V16 desde eTraffic DGT para visualizarlos en Kibana.',
    image: '/images/projects/v16tracker-ingestor.webp',
    tags: ['Python', 'Ingesta', 'Kibana'],
    source: 'https://github.com/Joboufra/v16-tracker-ingestor',
    demo: 'https://kibana.joboufra.es/s/demo/app/r/s/63qmW',
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  const visibleProjects = filter === 'All' ? projects : projects.filter((project) => project.type === filter);

  return (
    <div>
      <div className="mb-14 flex flex-col justify-between gap-8 border-b border-[var(--line)] pb-8 lg:flex-row lg:items-end">
        <div>
          <p className="editorial-label mb-5 text-[var(--accent)]">03 / Proyectos</p>
          <h2 className="max-w-3xl text-5xl font-medium tracking-[-0.06em] text-[var(--ink)] sm:text-7xl">Proyectos reales. Problemas concretos.</h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-[var(--muted)]">
          Proyectos de búsqueda, plataformas, inteligencia artificial y observabilidad en los que he trabajado.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap gap-2" aria-label="Filtrar proyectos">
        {filters.map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setFilter(value)}
            className={`rounded-full border px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] transition-colors ${filter === value ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--paper)]' : 'border-[var(--line)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--ink)]'}`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="border-t border-[var(--line)]">
        {visibleProjects.map((project) => (
          <motion.article
            key={project.number}
            layout
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4 }}
            className="group -mx-6 grid gap-5 border-b border-[var(--line)] px-6 py-8 transition-[background-color,transform] duration-300 hover:translate-x-1 hover:bg-[var(--surface)] sm:-mx-10 sm:px-10 lg:-mx-16 lg:grid-cols-[80px_1.1fr_1fr_160px] lg:items-start lg:gap-8 lg:px-16 lg:py-10"
          >
            <p className="editorial-label text-[var(--accent)]">{project.number}</p>
            <div>
              <p className="editorial-label mb-3">{project.client}</p>
              <h3 className="text-2xl font-medium tracking-[-0.04em] text-[var(--ink)] transition-colors group-hover:text-[var(--accent)] sm:text-3xl">{project.title}</h3>
            </div>
            <div>
              <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)]">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                {project.tags.map((tag) => <span key={tag} className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-[var(--quiet)]">{tag}</span>)}
              </div>
            </div>
            <p className="font-mono text-[0.65rem] uppercase leading-relaxed tracking-[0.12em] text-[var(--quiet)] lg:text-right">{project.date}<span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></p>
          </motion.article>
        ))}
      </div>

      <div className="mt-16">
        <div className="mb-7 flex flex-col gap-3 border-b border-[var(--line)] pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="editorial-label mb-3 text-[var(--accent)]">Cómo se conectan</p>
            <h3 className="text-3xl font-medium tracking-[-0.05em] text-[var(--ink)] sm:text-4xl">Del problema a la operación.</h3>
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-[var(--muted)]">
            No son disciplinas aisladas: las combino para llevar una solución desde el dato hasta su uso diario.
          </p>
        </div>

        <div className="grid border-y border-[var(--line)] md:grid-cols-3">
          {[
            ['01', 'Arquitectura de búsqueda', 'Diseñar cómo se encuentra, entiende y recupera la información.'],
            ['02', 'Adopción de IA', 'Convertir casos de uso en agentes y flujos incorporables al trabajo diario.'],
            ['03', 'Plataformas y observabilidad', 'Instrumentar y operar sistemas con señales claras para detectar y resolver.'],
          ].map(([value, label, detail]) => (
            <div key={label} className="border-b border-l-2 border-[var(--accent)] px-5 py-6 last:border-b-0 md:border-b-0 md:border-l-0 md:border-r md:border-t-2 md:px-6 md:py-7 md:last:border-r-0">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[var(--accent)]">{value}</p>
              <h4 className="mt-4 text-xl font-medium tracking-[-0.04em] text-[var(--ink)]">{label}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 border-t border-[var(--line)] pt-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="editorial-label mb-5 text-[var(--accent)]">También / Proyectos personales</p>
            <h3 className="text-4xl font-medium tracking-[-0.06em] text-[var(--ink)] sm:text-6xl">Proyectos para seguir aprendiendo.</h3>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--muted)]">Herramientas, automatizaciones y experimentos que mantengo para probar ideas en producción y entender mejor los sistemas que diseño y despliego.</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {personalProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
              className="section-card group overflow-hidden transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[var(--accent)]"
            >
              <div className="relative aspect-[2.4/1] overflow-hidden border-b border-[var(--line)] bg-[var(--paper)]">
                <Image src={project.image} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-75 transition-[opacity,transform] duration-500 group-hover:scale-105 group-hover:opacity-100" />
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-5">
                  <h4 className="text-2xl font-medium tracking-[-0.04em] text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">{project.title}</h4>
                  <span className="font-mono text-[0.62rem] text-[var(--quiet)]">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--muted)]">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                  {project.tags.map((tag) => <span key={tag} className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-[var(--quiet)]">{tag}</span>)}
                </div>
                <div className="mt-7 flex gap-5 font-mono text-[0.62rem] uppercase tracking-[0.14em]">
                  <a href={project.source} target="_blank" rel="noreferrer" className="editorial-link">Ver código <span aria-hidden="true">↗</span></a>
                  {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="editorial-link">Abrir demo <span aria-hidden="true">↗</span></a>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
