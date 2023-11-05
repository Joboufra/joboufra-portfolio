"use client"
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { BriefcaseIcon  } from '@heroicons/react/24/solid';
import { useInView } from "react-intersection-observer";

const experiencias = [
  {
    puesto: 'DevOps Engineer',
    empresa: 'BCNC Group @ Telefónica Kernel (4P)',
    fecha: 'Octubre 2023 - Actualidad',
    descripcion: 'Despliegue de servicios de Telefónica Kernel en Azure usando AKS. Resolución de problemas relacionados con la plataforma. Monitorización de infraestructura con Elasticsearch, Kibana, Prometheus y Grafana. Gestión de métricas, alarmas y dashboards.',
    icon: '',
  },
  {
    puesto: 'Observability Engineer',
    empresa: 'MESbook by MESlider Gestión de Operaciones',
    fecha: 'Enero 2023 - Octubre 2023',
    descripcion: 'Diseño y puesta en marcha de una plataforma de observabilidad tanto a nivel infraestructura como producto basada en Elastic Stack: Ingesta de logs. Diseño de una solución de gestión centralizada. Creación de métricas. Creación del sistema de alarmado. Diseño de dashboards. ',
    icon: '',
  },
  {
    puesto: 'Analista de datos',
    empresa: 'MESbook by MESlider Gestión de Operaciones',
    fecha: 'Marzo 2022 - Enero 2023',
    descripcion: 'Resolución de incidencias relacionadas con el producto de la empresa. Mantenimiento de BDs Microsoft SQL Server. Generación de informes para clientes. Automatizaciones sobre las bases de datos. Uso de lenguajes de scripting (PowerShell/Bash) para automatizar tareas y gestionar máquinas de forma ágil.',
    icon: '',
  },
  {
    puesto: 'Técnico de backoffice',
    empresa: 'Marktel',
    fecha: '2021',
    descripcion: 'Finalización de gestiones relacionadas con las operaciones de los agentes de las marcas del Grupo MÁSMOVIL.',
    icon: '',
  },
  {
    puesto: 'Desarrollador web',
    empresa: 'Freelance / FRL Vigo',
    fecha: 'Febrero 2018 - Marzo 2020',
    descripcion: 'Diseño y mantenimiento de sitios web a medida (PHP + Javascript). Implementación de funcionalidades tanto de plataformas de eCommerce pre-built (WooCommerce, Prestashop) como soluciones a medida.',
    icon: '',
  },
  {
    puesto: 'Técnico de telecomunicaciones',
    empresa: 'R Cable y Telecomunicaciones Galicia S.A.',
    fecha: 'Abril 2016 - Junio 2016',
    descripcion: 'Contrato de prácticas (FCT del CFGS de Administración de sistemas y Redes). Despliegue de red HFC. Diagnóstico y resolución de problemas relacionados con redes.',
    icon: '',
  },
];

const ExperienceSection = () => {
  const { ref, inView } = useInView({
  });

  return (
    <div className="mx-auto px-4 py-20  bg-gradient-to-b from-slate-800 to-slate-800 via-transparent w-full" id="trayectoria" ref={ref}>
      <motion.div 
      className='mt-4'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-center text-3xl font-bold text-white mx-6 mb-10 ">Trayectoria profesional</h2>
      </motion.div>
      <VerticalTimeline lineColor=''>
        {experiencias.map((experiencia, index) => (
          <VerticalTimelineElement
            key={index}
            animate={true}
            date={experiencia.fecha}
            dateClassName="text-black  xl:text-white"
            iconStyle={{ background: 'rgb(249, 115, 22)', color: '#fff' }}
            icon={<BriefcaseIcon/>}
            contentStyle={{
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left"
            }}
            visible={inView} 
          >
            <h3 className="text-xl font-bold text-black">{experiencia.puesto}</h3>
            <h4 className="text-md font-semibold text-black">{experiencia.empresa}</h4>
            <p className='text-black'>{experiencia.descripcion}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default ExperienceSection;