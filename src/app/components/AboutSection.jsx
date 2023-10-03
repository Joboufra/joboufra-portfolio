'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className=' list-disc pl-2'>
        <li>SQL Server</li>
        <li>Elasticsearch</li>
        <li>Kibana</li>
        <li>Grafana</li>
        <li>Docker</li>
        <li>Kubernetes</li>
        <li>Ansible</li>
        <li>Powershell</li>
        <li>Bash</li>
      </ul>
    )
  },
  {
    title: "Estudios",
    id: "estudios",
    content: (
      <ul>
        <li>Administración de sistemas y redes</li>
        <li>Desarrollo de aplicaciones Web</li>
      </ul>
    )
  },
  {
    title: "Certificaciones",
    id: "certificaciones",
    content: (
      <ul>
        <li>Elastic Observability Engineer</li>
        <li>Microsoft Azure Starter</li>
      </ul>
    )
  },
]

const AboutSection = () => {

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) =>  {
    startTransition(() => {
      setTab(id);
    });
  }
    return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16'>
        <Image src="/images/sobremi.png" width={500} height={500} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>Sobre mi</h2>
          <p className='text-color lg:text-lg'>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton 
              selectTab={() => handleTabChange("skills")} 
              active={tab === "skills"}>
              {" "}
              Skills {" "}
            </TabButton>
            <TabButton 
              selectTab={() => handleTabChange("estudios")} 
              active={tab === "estudios"}>
              {" "}
              Estudios {" "}
            </TabButton>
            <TabButton 
              selectTab={() => handleTabChange("certificaciones")} 
              active={tab === "certificaciones"}>
              {" "}
              Certificaciones{" "}
            </TabButton>
          </div>
          <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;