"use client"
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid';

const experiencias = [
  {
    puesto: 'SysOps Engineer',
    empresa: 'Telefónica @ BCNC Group',
    fecha: 'Octubre 2023 - Actualidad',
    descripcion: 'Despliegue de aplicaciones en entornos cloud (Azure Kubernetes Service). Resolución de problemas. Monitorización de infraestructura con Elasticsearch, Kibana, Zabbix y Grafana. Gestión de métricas, alarmas y dashboards.',
    icon: '',
  },
  {
    puesto: 'System Administrator',
    empresa: 'MESbook by MESlider Gestión de Operaciones',
    fecha: 'Enero 2023 - Octubre 2023',
    descripcion: 'Diseño y puesta en marcha de una plataforma de observabilidad tanto a nivel infraestructura como producto basada en Elastic Stack: Ingesta de logs. Diseño de una solución de gestión centralizada. Creación de métricas. Creación del sistema de alarmado. Diseño de dashboards. ',
    icon: '',
  },
  {
    puesto: 'Data Analyst',
    empresa: 'MESbook by MESlider Gestión de Operaciones',
    fecha: 'Marzo 2022 - Enero 2023',
    descripcion: 'Resolución de incidencias relacionadas con el producto de la empresa. Mantenimiento de BDs Microsoft SQL Server. Generación de informes para clientes. Automatizaciones sobre las bases de datos. Uso de lenguajes de scripting (PowerShell/Bash) para automatizar tareas y gestionar máquinas de forma ágil.',
    icon: '',
  },
  {
    puesto: 'Técnico de Backoffice',
    empresa: 'Marktel',
    fecha: '2021',
    descripcion: 'Finalización de gestiones relacionadas con las operaciones de los agentes de las marcas del Grupo MÁSMOVIL.',
    icon: '',
  },
  {
    puesto: 'Desarrollador Web',
    empresa: 'Freelance / FRL Vigo',
    fecha: 'Mayo 2018 - Marzo 2020',
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
  return (
    <div className="container mx-auto px-4 py-20" id="experiencia">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-center text-3xl font-bold text-white mx-6 mb-4">Trayectoria profesional</h2>
      </motion.div>
      <VerticalTimeline>
        {experiencias.map((experiencia, index) => (
          <VerticalTimelineElement
            key={index}
            date={experiencia.fecha}
            iconStyle={{ background: 'rgb(249, 115, 22)', color: '#fff' }}
            icon={<ChevronDoubleUpIcon />}
            visible={true} 
          >
            <h3 className="text-xl font-semibold text-black">{experiencia.puesto}</h3>
            <h4 className="text-md text-black">{experiencia.empresa}</h4>
            <p className='text-black'>{experiencia.descripcion}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default ExperienceSection;
