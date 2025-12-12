"use client";
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/24/solid';
import { useInView } from 'react-intersection-observer';

const experiencias = [
  {
    puesto: 'Elastic Stack Engineer',
    empresa: 'VASS',
    fecha: 'Enero 2025 - Actualidad',
    descripcion:
      'Diseño y configuración de arquitecturas de búsqueda y observabilidad basadas en Elasticsearch. Gestión de índices y queries, pipelines de ingesta y despliegue en Kubernetes con alta disponibilidad.',
  },
  {
    puesto: 'DevOps Engineer',
    empresa: 'Telefónica Innovación Digital',
    fecha: 'Octubre 2023 - Enero 2025',
    descripcion:
      'Operaciones en Azure Kubernetes Service para Telefónica Kernel. Monitorización de APIs, dashboards en Kibana/Grafana, alertado en Prometheus y automatizaciones para reducir tiempo de respuesta.',
  },
  {
    puesto: 'Observability Engineer',
    empresa: 'MESbook',
    fecha: 'Enero 2023 - Octubre 2023',
    descripcion:
      'Diseño de plataforma de observabilidad de producto e infraestructura con Elastic Stack. Gestión centralizada de agentes, creación de métricas, alertado y mantenimiento del clúster de Elasticsearch.',
  },
  {
    puesto: 'Analista de datos',
    empresa: 'MESbook',
    fecha: 'Marzo 2022 - Enero 2023',
    descripcion:
      'Mantenimiento de Microsoft SQL Server, generación de informes y automatizaciones con PowerShell/Bash para mejorar tiempos de operación.',
  },
  {
    puesto: 'Técnico de backoffice',
    empresa: 'Marktel',
    fecha: '2021',
    descripcion: 'Cierre y seguimiento de gestiones del grupo MASMOVIL, asegurando integridad de la operativa diaria.',
  },
  {
    puesto: 'Desarrollador web',
    empresa: 'Freelance / FRL Vigo',
    fecha: 'Febrero 2018 - Marzo 2020',
    descripcion:
      'Diseño y mantenimiento de sitios a medida (PHP + Javascript) y personalización de plataformas eCommerce como WooCommerce y Prestashop.',
  },
  {
    puesto: 'Técnico de telecomunicaciones',
    empresa: 'R Cable y Telecomunicaciones Galicia S.A.',
    fecha: 'Abril 2016 - Junio 2016',
    descripcion: 'Prácticas de despliegue HFC, diagnóstico y resolución de problemas de red.',
  },
];

const ExperienceSection = () => {
  const { ref, inView } = useInView({});

  return (
    <div className="mx-auto w-full bg-gradient-to-b from-transparent to-[#0b0f1c] px-4 py-20" id="trayectoria" ref={ref}>
      <motion.div
        className="mt-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="mb-10 text-center text-3xl font-bold text-white">Trayectoria profesional</h2>
      </motion.div>
      <VerticalTimeline lineColor="rgba(255,255,255,0.1)">
        {experiencias.map((experiencia, index) => (
          <VerticalTimelineElement
            key={index}
            animate={true}
            date={experiencia.fecha}
            dateClassName="text-white"
            iconStyle={{
              background: 'rgba(251, 191, 36, 0.9)',
              color: '#0b0f1c',
              boxShadow: '0 0 0 4px rgba(255,255,255,0.08)',
            }}
            icon={<BriefcaseIcon />}
            contentStyle={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              textAlign: 'left',
              boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
            }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255,255,255,0.1)' }}
            visible={inView}
          >
            <h3 className="text-xl font-bold text-white">{experiencia.puesto}</h3>
            <h4 className="text-md font-semibold text-amber-200">{experiencia.empresa}</h4>
            <p className="text-slate-200/90">{experiencia.descripcion}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default ExperienceSection;
