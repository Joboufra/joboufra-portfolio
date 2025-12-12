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
      'Transformador de datos JSON a tablas visuales. Backend en Python, frontend en Next.js y Tailwind CSS desplegado en contenedores.',
    image: '/images/projects/8.webp',
    tag: ['Todos', 'Python', 'Web'],
    gitUrl: 'https://github.com/Joboufra/pyJsonToTable-Front',
    previewUrl: 'https://jsontotable.joboufra.es/',
  },
  {
    id: 2,
    title: 'Aplicación de chat con Python',
    description:
      'Chat en tiempo real con Flask, websockets y PostgreSQL para persistencia y gestión de usuarios. Desplegado sobre contenedores.',
    image: '/images/projects/2.webp',
    tag: ['Todos', 'Python', 'Web'],
    gitUrl: 'https://github.com/Joboufra/pythonChat',
    previewUrl: 'https://chat.joboufra.es/',
  },
  {
    id: 3,
    title: 'Alerts Reader',
    description: 'Script en Python para recuperar y exportar alertas de Kibana, facilitando análisis fuera de la plataforma.',
    image: '/images/projects/9.webp',
    tag: ['Todos', 'Python'],
    gitUrl: 'https://github.com/Joboufra/kibana-AlertsReader',
  },
  {
    id: 4,
    title: 'Observabilidad de mis aplicaciones',
    description:
      "Dashboards en Kibana con métricas y logs de todas mis apps on-premise. Acceso de demo con usuario 'portfolio' y la contraseña indicada.",
    image: '/images/projects/10.webp',
    tag: ['Todos', 'Observability'],
    gitUrl: 'https://github.com/Joboufra/kibana-dashboards',
    previewUrl: 'https://kibana.joboufra.es',
  },
  {
    id: 5,
    title: 'Biblioteca de scripts en Bash',
    description: 'Colección de scripts Bash para automatizar tareas de plataforma y soporte diario.',
    image: '/images/projects/4.webp',
    tag: ['Todos', 'Bash'],
    gitUrl: 'https://github.com/Joboufra/Bash-Utils',
  },
  {
    id: 6,
    title: 'Biblioteca de scripts en PowerShell',
    description: 'Scripts en PowerShell para administración y despliegues en entornos Windows y Azure.',
    image: '/images/projects/5.webp',
    tag: ['Todos', 'PowerShell'],
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
          {['Todos', 'Bash', 'Observability', 'Python', 'PowerShell', 'Web'].map((name) => (
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
