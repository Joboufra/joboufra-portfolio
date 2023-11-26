"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

const projectsData = [
  {
    id: 1,
    title: "Mi portfolio",
    description: "Esta misma página. Ha sido creada con Next.js + Tailwind CSS",
    image: "/images/projects/1.webp",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/Joboufra/joboufra-portfolio",
    previewUrl: "https://www.joboufra.es"
  },
  {
    id: 2,
    title: "Aplicación de chat con Python",
    description: "Aplicación de chat en tiempo real con Python, usando Flask, Websockets y PostgreSQL para la persistencia de los mensajes y la gestión de usuarios",
    image: "/images/projects/2.webp",
    tag: ["Todos", "Python", "Web"],
    gitUrl: "https://github.com/Joboufra/pythonChat",
    previewUrl: "https://chat.joboufra.es/"
  },
  {
    id: 3,
    title: "Notificaciones push integradas en scripts",
    description: "Haciendo uso del proyecto 'ntfy.sh' conseguimos que ciertas acciones durante la ejecución de un script desencadenen una notificación push a un dispositivo",
    image: "/images/projects/3.webp",
    tag: ["Todos", "Bash",  "PowerShell"],
    gitUrl: "https://ntfy.joboufra.es",
    previewUrl: "/"
  },
  {
    id:4,
    title: "Json To Table",
    description: "Aplicación web diseñada para transformar datos JSON a representaciones visuales en formato tabla. Con un backend en Python, y frontend usando Next.js y Tailwind CSS",
    image: "/images/projects/8.webp",
    tag: ["Todos", "Python", "Web"],
    gitUrl: "https://github.com/Joboufra/pyJsonToTable-Front",
    previewUrl: "https://jsontotable.joboufra.es/"
  },
  {
    id: 5,
    title: "Biblioteca de scripts en Bash",
    description: "Biblioteca completa de algunos de mis scripts escritos en Bash",
    image: "/images/projects/4.webp",
    tag: ["Todos", "Bash"],
    gitUrl: "https://github.com/Joboufra/Bash-Utils",
    previewUrl: "/"
  },
  {
    id: 6,
    title: "Biblioteca de scripts en PowerShell",
    description: "Biblioteca completa de algunos de mis scripts escritos en PowerShell",
    image: "/images/projects/5.webp",
    tag: ["Todos", "PowerShell"],
    gitUrl: "https://github.com/Joboufra/Powershell-Utils",
    previewUrl: "/"
  }

]

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [keyCounter, setKeyCounter] = useState(0);
  const handleTagChange = (newTag) => {
    setTag(newTag);
    setKeyCounter(prevKey => prevKey + 1);
  };
  
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 }
  };

  return (
  <section>
    <motion.div 
      className='mt-4'
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-6'>Mis proyectos</h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6 mb-10 flex-wrap md:flex-nowrap'>
        <ProjectTag 
          onClick={handleTagChange} 
          name="Todos" 
          isSelected={tag === "Todos"} 
        />
        <ProjectTag 
          onClick={handleTagChange} 
          name="Bash" 
          isSelected={tag === "Bash"} 
        />
        <ProjectTag 
          onClick={handleTagChange} 
          name="Docker/Kubernetes" 
          isSelected={tag === "Docker/Kubernetes"} 
        />
        <ProjectTag 
          onClick={handleTagChange} 
          name="Python" 
          isSelected={tag === "Python"} 
        />
        <ProjectTag 
          onClick={handleTagChange} 
          name="PowerShell" 
          isSelected={tag === "PowerShell"} 
        />  
        <ProjectTag 
          onClick={handleTagChange} 
          name="Web" 
          isSelected={tag === "Web"} 
        />
      </div>
    </motion.div>
    
    <ul ref={ref} className='grid md:grid-cols-2 gap-8 md:gap-12' key={keyCounter}>
      {filteredProjects.map((project, index) => 
      <motion.li
        key={index}
        variants= {cardVariants}
        initial="initial"
        animate= {isInView ? "animate" : "initial"}
        transition={{ duration: 0.5, delay: index * 0.25 }}
        >
      <ProjectCard 
        key={project.id} 
        title={project.title} 
        description={project.description} 
        imgUrl={project.image}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
      />
      </motion.li>
      )}
    </ul>
  </section>
  )
}

export default ProjectsSection;