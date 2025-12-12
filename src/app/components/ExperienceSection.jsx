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
    <div className="relative mx-auto w-full overflow-hidden px-4 py-20" id="trayectoria" ref={ref}>
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(transparent 95%, rgba(255,255,255,0.06) 95%), linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.06) 95%)',
          backgroundSize: '38px 38px',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5" />

      <motion.div
        className="relative mx-auto max-w-4xl space-y-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.35 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Trayectoria</p>
        <h2 className="text-4xl font-bold text-white">Trayectoria profesional</h2>
        <p className="text-slate-200/80">
          Un recorrido resumido de mi trayectoria laboral hasta la fecha
        </p>
      </motion.div>

      <VerticalTimeline lineColor="rgba(255,255,255,0.15)">
        {experiencias.map((experiencia, index) => (
          <VerticalTimelineElement
            key={index}
            animate={true}
            date={experiencia.fecha}
            dateClassName="text-white/85 font-semibold"
            iconStyle={{
              background: '#f5b20a',
              color: '#0b0f1c',
              boxShadow: '0 0 0 4px rgba(255,255,255,0.08)',
            }}
            icon={<BriefcaseIcon />}
            contentStyle={{
              background: 'rgba(12, 16, 28, 0.82)',
              border: '1px solid rgba(255,255,255,0.08)',
              textAlign: 'left',
              boxShadow: '0 24px 80px rgba(0,0,0,0.45)',
              backdropFilter: 'blur(8px)',
            }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255,255,255,0.08)' }}
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
