"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
  {
    id: 1,
    title: "Web portfolio en React",
    description: "Descripción 1",
    image: "/images/projects/1.png",
    tag: ["Todos", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "Elasticsearch deploy en Kubernetes",
    description: "Descripción 1",
    image: "/images/projects/2.png",
    tag: ["Todos", "Docker/Kubernetes"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 3,
    title: "Notificaciones push integradas en scripts",
    description: "Descripción 1",
    image: "/images/projects/3.png",
    tag: ["Todos", "Web", "Bash"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 4,
    title: "Biblioteca de scripts en Bash",
    description: "Descripción 1",
    image: "/images/projects/4.png",
    tag: ["Todos", "Bash"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 5,
    title: "Biblioteca de scripts en PowerShell",
    description: "Descripción 1",
    image: "/images/projects/5.png",
    tag: ["Todos", "PowerShell"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 6,
    title: "Despligue BDs en con Docker-Compose",
    description: "Descripción 1",
    image: "/images/projects/1.png",
    tag: ["Todos", "Docker/Kubernetes"],
    gitUrl: "/",
    previewUrl: "/"
  }
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const handleTagChange  = (newTag) => {
      setTag(newTag)
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
  <>
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
        name="PowerShell" 
        isSelected={tag === "PowerShell"} 
      />
      <ProjectTag 
        onClick={handleTagChange} 
        name="Web" 
        isSelected={tag === "Web"} 
      />
    </div>
    
    <div className='grid md:grid-cols-2 gap-8 md:gap-12'>
      {filteredProjects.map((project) => 
      <ProjectCard 
        key={project.id} 
        title={project.title} 
        description={project.description} 
        imgUrl={project.image}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
      />)}
    </div>
  </>
  )
}

export default ProjectsSection;