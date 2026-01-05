"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Json To Table',
    description:
      'Transformador de datos JSON a tablas visuales. Backend en Python, frontend en Next.js y Tailwind CSS. Rediseñado en Diciembre 2025. Aplicación desplegada en mi clúster personal. ',
    image: '/images/projects/jsontotable.webp',
    tag: ['Todos', 'Python', 'Web', 'Despliegues'],
    gitUrl: 'https://github.com/Joboufra/pyJsonToTable-Front',
    previewUrl: 'https://jsontotable.joboufra.es/',
  },
  {
    id: 2,
    title: 'QR Creator',
    description:
      'Crea tu propio código QR personalizado. Backend en Python, frontend en Next.js y Tailwind CSS. Aplicación desplegada en mi clúster personal.',
    image: '/images/projects/qrcreator.webp',
    tag: ['Todos', 'Python', 'Web', 'Despliegues'],
    gitUrl: 'https://github.com/Joboufra/qr-creator',
    previewUrl: 'https://qr.joboufra.es/',
  },
    {
    id: 3,
    title: 'Portfolio',
    description: 'Esta misma página, mi portfolio personal desarrollado en Next.js y Tailwind CSS rediseñado en Diciembre 2025. Desplegado en en mi clúster personal.',
    image: '/images/projects/portfolio.webp',
    tag: ['Todos', 'Despliegues', 'Web'],
    gitUrl: 'https://github.com/Joboufra/joboufra-portfolio',
    previewUrl: 'https://www.joboufra.es'
  },
  {
    id: 4,
    title: 'Despliegue: NTFY',
    description: 'Aplicación de notificaciones push ligera y de código abierto, desplegada en Kubernetes en mi clúster personal como plataforma de notificaciones push para todos mis servicios.',
    image: '/images/projects/ntfy.webp',
    tag: ['Todos', 'Despliegues', 'Kubernetes', 'Observability'],
    gitUrl: 'https://ntfy.joboufra.es/docs/',
    previewUrl: 'https://ntfy.joboufra.es'
  },
  {
    id: 5,
    title: 'V16 Tracker - Ingestor',
    description: "Servicio de ingesta y normalización de eventos de balizas V16 desde eTraffic DGT. Este servicio alimenta las visualizaciones del dashboard de Kibana que acompaña estos datos. Desplegado en mi clúster personal.",
    image: '/images/projects/v16tracker-ingestor.webp',
    tag: ['Todos', 'Python', 'Observability', 'Despliegues'],
    gitUrl: 'https://github.com/Joboufra/v16-tracker-ingestor',
    previewUrl: 'https://kibana.joboufra.es/s/demo/app/r/s/63qmW'
  },
  {
    id: 6,
    title: 'Tapo Monitor',
    description:
      "Monitor de cámaras Tapo de TP-Link para verificar su estado y notificar al detectar ruidos superando cierto umbral. Desplegado en Kubernetes en mi clúster personal.",
    image: '/images/projects/tapomonitor.webp',
    tag: ['Todos', 'Python', 'Despliegues', 'Kubernetes'],
    gitUrl: 'https://github.com/Joboufra/tapo-monitor',
  },
  {
    id: 7,
    title: 'Observabilidad de mis aplicaciones',
    description:
      "Dashboards en Kibana con métricas y logs de todas mis apps on-premise. Acceso a la demo con usuario 'portfolio' y la contraseña 'demoportfolio'. Desplegado en mi clúster personal",
    image: '/images/projects/observability.webp',
    tag: ['Todos', 'Observability'],
    gitUrl: 'https://github.com/Joboufra/kibana-dashboards',
    previewUrl: 'https://kibana.joboufra.es',
  },
  {
    id: 8,
    title: 'Alerts Reader',
    description: 'Script en Python para recuperar y exportar alertas de Kibana escritas en el propio log, facilitando el análisis fuera de la plataforma.',
    image: '/images/projects/alertsreader.webp',
    tag: ['Todos', 'Python', "Observability"],
    gitUrl: 'https://github.com/Joboufra/kibana-AlertsReader',
  },

  {
    id: 9,
    title: 'Biblioteca de scripts en Bash',
    description: 'Colección de scripts Bash para automatizar tareas de plataforma y soporte diario.',
    image: '/images/projects/bash.webp',
    tag: ['Todos', 'Scripting'],
    gitUrl: 'https://github.com/Joboufra/Bash-Utils',
  },
  {
    id: 10,
    title: 'Biblioteca de scripts en PowerShell',
    description: 'Scripts en PowerShell para administración y despliegues en entornos Windows y Azure.',
    image: '/images/projects/powershell.webp',
    tag: ['Todos', 'Scripting'],
    gitUrl: 'https://github.com/Joboufra/Powershell-Utils',
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('Todos');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [keyCounter, setKeyCounter] = useState(0);
  const handleTagChange = (newTag) => {
    setTag(newTag);
    setKeyCounter((prevKey) => prevKey + 1);
  };

  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  return (
    <section className="space-y-10">
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80 text-center">Proyectos</p>
        <h2 className="text-center text-4xl font-bold text-white">Mis creaciones</h2>
        <p className="text-center text-slate-200/80 max-w-3xl mx-auto">
          Una mezcla de proyectos personales, herramientas internas y ejemplos de observabilidad.
        </p>
        <div className="text-white flex flex-row flex-wrap items-center justify-center gap-2 py-4">
          {['Todos', 'Despliegues', 'Observability', 'Python', 'Scripting', 'Web'].map((name) => (
            <ProjectTag key={name} onClick={handleTagChange} name={name} isSelected={tag === name} />
          ))}
        </div>
      </motion.div>

      <ul ref={ref} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" key={keyCounter}>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tags={project.tag.filter((t) => t !== 'Todos')}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
