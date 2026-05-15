'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Motores de búsqueda',
    description: 'Implementación y configuración avanzada de plataformas de búsqueda corporativa en entornos distribuidos.',
    items: ['Elasticsearch', 'Coveo', 'OpenSearch', 'Solr'],
  },
  {
    title: 'Automatización y data pipelines',
    description: 'ETL, orquestación de ingesta y scripting para mantener flujos de datos fiables y repetibles.',
    items: ['Python', 'Bash', 'PowerShell', 'Ansible', 'Kafka', 'Logstash'],
  },
  {
    title: 'Observabilidad y monitorización',
    description: 'Stack completo de métricas, logs y trazas con alertado proactivo y dashboards accionables.',
    items: ['Kibana', 'Grafana', 'Prometheus', 'Alertmanager', 'EFK'],
  },
]

const techCards = [
  { src: '/elastic-icon.svg', name: 'Elasticsearch', tags: ['Search', 'Bases de datos'] },
  { src: '/coveo-icon.svg', name: 'Coveo', tags: ['Search'] },
  { src: '/opensearch-icon.svg', name: 'OpenSearch', tags: ['Search'] },
  { src: '/solr-icon.svg', name: 'Solr', tags: ['Search'] },
  { src: '/openai-icon.svg', name: 'OpenAI', tags: ['IA'] },
  { src: '/huggingface-icon.svg', name: 'Hugging Face', tags: ['IA'] },
  { src: '/python-icon.svg', name: 'Python', tags: ['Automatización', 'Lenguaje', 'ETL', 'IA'] },
  { src: '/apache-kafka-icon.svg', name: 'Kafka', tags: ['Data pipelines', 'Mensajería'] },
  { src: '/rabbitmq-icon.svg', name: 'RabbitMQ', tags: ['Data pipelines', 'Mensajería'] },
  { src: '/kubernetes-icon.svg', name: 'Kubernetes', tags: ['Cloud', 'Contenedores'] },
  { src: '/docker-icon.svg', name: 'Docker', tags: ['Cloud', 'Contenedores'] },
  { src: '/ansible-icon.svg', name: 'Ansible', tags: ['Automatización'] },
  { src: '/logstash-icon.svg', name: 'Logstash', tags: ['Data pipelines', 'Ingesta'] },
  { src: '/postgresql-icon.svg', name: 'PostgreSQL', tags: ['Bases de datos'] },
  { src: '/mysql-icon.svg', name: 'MySQL', tags: ['Bases de datos'] },
  { src: '/sql-server-icon.svg', name: 'SQL Server', tags: ['Bases de datos'] },
  { src: '/mongodb-icon.svg', name: 'MongoDB', tags: ['Bases de datos'] },
  { src: '/redis-icon.svg', name: 'Redis', tags: ['Bases de datos', 'Caching'] },
  { src: '/kibana-icon.svg', name: 'Kibana', tags: ['Observabilidad', 'Analytics'] },
  { src: '/grafana-icon.svg', name: 'Grafana', tags: ['Observabilidad'] },
  { src: '/prometheus-icon.svg', name: 'Prometheus', tags: ['Observabilidad'] },
  { src: '/bash-icon.svg', name: 'Bash', tags: ['Automatización', 'Lenguaje'] },
  { src: '/powershell-icon.svg', name: 'PowerShell', tags: ['Automatización', 'Lenguaje'] },
]

const techFilters = ['Todos', 'Search', 'IA', 'Bases de datos', 'Cloud', 'Automatización', 'Observabilidad', 'Lenguaje', 'Data pipelines']

const SkillsSection = () => {
  const [techFilter, setTechFilter] = useState('Todos')
  const filteredTechs =
    techFilter === 'Todos'
      ? techCards
      : techCards.filter((tech) => tech.tags?.includes(techFilter))

  return (
    <div className="space-y-10">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Stack técnico</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-2 text-3xl font-semibold text-white sm:text-4xl"
        >
          Plataformas de búsqueda y datos
        </motion.h2>
        <p className="mt-3 text-lg text-slate-200/80">
          Convierto plataformas de datos en sistemas de búsqueda eficientes, escalables y orientados a negocio, con expertise en Search, Data, Cloud e IA.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            className="bento-card relative overflow-hidden p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            whileHover={{ y: -6, borderColor: 'rgba(255,255,255,0.2)', boxShadow: '0 20px 60px rgba(0,0,0,0.35)', transition: { duration: 0.25, ease: 'easeOut' } }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
            <div className="relative flex h-full flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">{category.title}</p>
              <p className="text-lg font-semibold text-white">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span key={item} className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bento-card relative overflow-hidden p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-300/10 via-white/5 to-amber-300/10" />
        <div className="relative flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Tecnologías</p>
            <p className="text-2xl font-semibold text-white">Tecnologías con las que he trabajado</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {techFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setTechFilter(filter)}
                className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                  techFilter === filter
                    ? 'border-amber-300/70 bg-white/10 text-white'
                    : 'border-white/15 text-white/70 hover:border-white/30 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {filteredTechs.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.22 }}
                whileHover={{ y: -4, scale: 1.02, borderColor: 'rgba(255,255,255,0.2)', boxShadow: '0 18px 48px rgba(0,0,0,0.35)', transition: { duration: 0.24, ease: 'easeOut' } }}
                className="group flex w-full flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-center shadow-inner shadow-black/30 transition-colors sm:w-[calc((100%-1rem)/2)] md:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-4rem)/5)]"
              >
                {tech.src ? (
                  <img src={tech.src} alt={tech.name} className="mx-auto h-14 w-14 transition duration-300 group-hover:scale-105" />
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-sm font-semibold text-white/85 shadow-inner shadow-black/20 transition duration-300 group-hover:scale-105">
                    {tech.name.slice(0, 3).toUpperCase()}
                  </div>
                )}
                <p className="text-sm font-semibold text-white/85 group-hover:text-white">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SkillsSection
