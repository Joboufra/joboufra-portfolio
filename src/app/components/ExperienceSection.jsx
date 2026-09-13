"use client";

import { motion } from 'framer-motion';

const roles = [
  {
    date: '01.25 — ahora',
    role: 'Principal Project Manager & Search Architect',
    company: 'VASS',
    color: 'var(--accent)',
    badge: 'IA Champion · desde 2026',
    stack: ['Coveo', 'Elasticsearch', 'Agentes de IA', 'Gestión de proyectos'],
    detail: 'Diseño de arquitecturas de búsqueda y soluciones de IA para proyectos reales, además de coordinar alcance, prioridades y entrega como Project Manager. Desde 2026 también soy IA Champion en VASS, impulsando la adopción de IA entre equipos y proyectos.',
    details: ['Repsol — reimplantación del buscador con Coveo: diseño de query pipelines, ranking, facetas y reglas de relevancia.', 'Acciona — buscador documental: modelado de contenido, diseño de índices Elasticsearch y ajuste de consultas.', 'Atradius — buscador de pólizas: arquitectura de datos, indexación y diseño de consultas sobre Elasticsearch.', 'VASS interno — definición de prioridades de IA y diseño de agentes y flujos de trabajo adaptados a la operativa de equipos y proyectos.', 'Creación de soluciones y recursos reutilizables para ayudar a los equipos y extender buenas prácticas entre proyectos.'],
  },
  {
    date: '10.23 — 01.25',
    role: 'DevOps Engineer',
    company: 'Telefónica',
    color: 'var(--lilac)',
    stack: ['Kernel (4th platform)', 'AKS', 'Prometheus / Grafana', 'ELK / Fluent Bit'],
    detail: 'Operación y automatización de infraestructura para el equipo global de Telefónica Kernel (4th platform), garantizando estabilidad y observabilidad en entornos cloud.',
    details: ['Gestión operativa y despliegues en clústeres de Azure Kubernetes Service (AKS), además de troubleshooting avanzado de APIs críticas.', 'Monitorización integral con Prometheus y Grafana para métricas, y Elastic Stack y Fluent Bit para logs. Integración pionera de la infraestructura con Azure AI para mejorar la precisión y la eficacia del alertado.', 'Creación de pipelines de despliegue con GitHub Actions y desarrollo de herramientas a medida para agilizar los procedimientos operativos.', 'Análisis de alertas de plataforma con Prometheus y Alertmanager, y definición de runbooks y procedimientos para que el Nivel 1 pueda resolver incidencias.'],
  },
  {
    date: '05.23 — 10.23',
    role: 'Observability Engineer',
    company: 'MESbook',
    color: 'var(--mint)',
    stack: ['Elastic Stack', 'Elastic Agents', 'Windows', 'Linux'],
    detail: 'Lideré la migración de la plataforma de observabilidad basada en Elasticsearch de la versión 7.x a la 8.x, utilizada para monitorizar aplicaciones e infraestructura de más de 70 clientes.',
    details: ['Estandarización de la recolección de logs y métricas en servidores Windows y Linux mediante Elastic Agents, con gestión centralizada de la observabilidad.', 'Adaptación de la arquitectura, actualización de componentes de Elastic Stack y validación de compatibilidad.', 'Mejora de los procesos de ingesta de logs y métricas para asegurar la continuidad operativa y la escalabilidad de la plataforma.'],
  },
  {
    date: '03.22 — 05.23',
    role: 'Analista de sistemas',
    company: 'MESbook',
    color: 'var(--gold)',
    stack: ['Elastic Stack', 'SQL Server', 'Bash', 'PowerShell'],
    detail: 'Gestión de infraestructura, bases de datos y desarrollo de soluciones de monitorización para asegurar el funcionamiento del producto en tiempo real.',
    details: ['Desarrollo e implantación de un sistema de monitorización y análisis de indicadores basado en Elastic Stack (Elasticsearch, Logstash y Kibana), con automatización de alertas.', 'Gestión, mantenimiento y optimización de bases de datos Microsoft SQL Server.', 'Creación de scripts en Bash y PowerShell y automatizaciones para tareas de administración, mejorando la eficiencia operativa.', 'Análisis y resolución de incidencias técnicas, además de investigación y evaluación de nuevas tecnologías para mejorar la plataforma.'],
  },
];

export default function ExperienceSection() {
  return (
    <div>
      <div className="section-heading grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
        <div>
          <p className="editorial-label mb-5 text-[var(--accent)]">02 / Trayectoria</p>
          <h2 className="max-w-md text-5xl font-medium tracking-[-0.06em] text-[var(--ink)] sm:text-7xl">De los datos a la arquitectura.</h2>
          <div className="mt-8 flex gap-1" aria-hidden="true">
            <span className="h-1 w-12 bg-[var(--accent)]" />
            <span className="h-1 w-8 bg-[var(--lilac)]" />
            <span className="h-1 w-6 bg-[var(--mint)]" />
            <span className="h-1 w-4 bg-[var(--gold)]" />
          </div>
        </div>
        <p className="max-w-xl text-lg leading-relaxed text-[var(--muted)]">
          He trabajado en distintos puntos del ciclo: datos, observabilidad, operación y arquitectura de búsqueda. Esa experiencia me ayuda a entender los problemas desde la base y a proponer soluciones que los equipos puedan mantener.
        </p>
      </div>

      <div className="border-t border-[var(--line)]">
        {roles.map((item) => (
          <motion.article
            key={`${item.company}-${item.role}`}
            className="grid gap-5 border-b border-l-2 border-[var(--line)] py-8 pl-5 transition-[background-color,transform] duration-300 hover:translate-x-1 hover:bg-[var(--surface)] lg:grid-cols-[180px_0.8fr_1.2fr] lg:gap-10 lg:py-10"
            style={{ borderLeftColor: item.color }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <p className="editorial-label text-[var(--quiet)]">{item.date}</p>
            <div>
              <h3 className="text-2xl font-medium tracking-[-0.04em] text-[var(--ink)]">{item.role}</h3>
              <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.14em]" style={{ color: item.color }}>{item.company}</p>
              {item.badge && <p className="mt-5 inline-flex rounded-full border border-[var(--lilac)]/60 bg-[var(--lilac)]/10 px-3 py-2 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-[var(--lilac)]">{item.badge}</p>}
            </div>
            <div className="max-w-xl">
              <p className="text-sm leading-relaxed text-[var(--muted)]">{item.detail}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((technology) => <span key={technology} className="rounded-full border border-[var(--line)] px-2.5 py-1.5 font-mono text-[0.58rem] uppercase tracking-[0.1em] text-[var(--quiet)]">{technology}</span>)}
              </div>
              <ul className="mt-5 space-y-2 border-t border-[var(--line)] pt-4">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-3 text-xs leading-relaxed text-[var(--quiet)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: item.color }} aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
