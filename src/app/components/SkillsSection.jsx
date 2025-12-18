'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Observabilidad',
    description: 'Dashboards accionables, alertado útil y pipelines de ingesta con Elastic Stack.',
    items: ['Elasticsearch', 'Kibana', 'Logstash', 'Alert Manager'],
  },
  {
    title: 'Arquitecturas de IA & MLOps',
    description: 'Diseño de sistemas RAG, integración de LLMs y ciclo de vida de modelos.',
    items: ['LangChain', 'OpenAI/Azure OpenAI', 'Hugging Face', 'MLflow', 'Python'],
  },
  {
    title: 'Infraestructura como Código (IaC)',
    description: 'Aprovisionamiento inmutable, gestión de estado y replicabilidad de entornos.',
    items: ['Terraform', 'AWS CloudFormation'],
  },
]

const techCards = [
  { src: '/docker-icon.svg', name: 'Docker', tags: ['Contenedores'] },
  { src: '/kubernetes-icon.svg', name: 'Kubernetes', tags: ['Contenedores', 'Orquestación'] },
  { src: '/azure-aks-icon.svg', name: 'Azure AKS', tags: ['Contenedores', 'Cloud'] },
  { src: '/amazon-eks-icon.svg', name: 'Amazon EKS', tags: ['Contenedores', 'Cloud'] },
  { src: '/openshift-icon.svg', name: 'RedHat Openshift', tags: ['Contenedores', 'Cloud'] },
  { src: '/elastic-icon.svg', name: 'Elasticsearch', tags: ['Observabilidad', 'Bases de datos'] },
  { src: '/logstash-icon.svg', name: 'Logstash', tags: ['Observabilidad', 'Ingesta'] },
  { src: '/apache-kafka-icon.svg', name: 'Kafka', tags: ['Mensajería'] },
  { src: '/rabbitmq-icon.svg', name: 'RabbitMQ', tags: ['Mensajería'] },
  { src: '/redis-icon.svg', name: 'Redis', tags: ['Bases de datos', 'Caching'] },
  { src: '/grafana-icon.svg', name: 'Grafana', tags: ['Observabilidad'] },
  { src: '/prometheus-icon.svg', name: 'Prometheus', tags: ['Observabilidad'] },
  { src: '/python-icon.svg', name: 'Python', tags: ['Lenguaje'] },
  { src: '/mongodb-icon.svg', name: 'MongoDB', tags: ['Bases de datos'] },
  { src: '/githubactions-icon.svg', name: 'GitHub Actions', tags: ['Automatización', 'CI/CD'] },
  { src: '/azure-devops-icon.svg', name: 'Azure DevOps', tags: ['Automatización', 'CI/CD'] },
  { src: '/bash-icon.svg', name: 'Bash', tags: ['Automatización','Lenguaje'] },
  { src: '/powershell-icon.svg', name: 'Powershell', tags: ['Automatización','Lenguaje'] },
]

const techFilters = ['Todos', 'Observabilidad', 'Contenedores', 'Automatización', 'Bases de datos', 'Mensajería', 'Cloud', 'Lenguaje', 'CI/CD']

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
          Infraestructuras listas para el futuro
        </motion.h2>
        <p className="mt-3 text-lg text-slate-200/80">
          Fusiono las mejores prácticas de DevOps con la potencia de la Inteligencia Artificial para crear sistemas resilientes y evolutivos.
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
            <p className="text-2xl font-semibold text-white">Stacks tecnológicos con los que he trabajado</p>
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
