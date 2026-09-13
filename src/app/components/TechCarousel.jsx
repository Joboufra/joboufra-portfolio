import Image from 'next/image';

const technologies = [
  ['Coveo', '/coveo-icon.svg', 'Búsqueda'],
  ['Elasticsearch', '/elastic-icon.svg', 'Búsqueda'],
  ['Kibana', '/kibana-icon.svg', 'Observabilidad'],
  ['OpenAI', '/openai-icon.svg', 'IA'],
  ['Python', '/python-icon.svg', 'Desarrollo'],
  ['SQL Server', '/sql-server-icon.svg', 'Datos'],
  ['Docker', '/docker-icon.svg', 'Plataforma'],
  ['Kubernetes', '/kubernetes-icon.svg', 'Plataforma'],
  ['OpenShift', '/openshift-icon.svg', 'Plataforma'],
  ['Azure DevOps', '/azure-devops-icon.svg', 'Entrega'],
  ['GitHub Actions', '/githubactions-icon.svg', 'Entrega'],
  ['Ansible', '/ansible-icon.svg', 'Automatización'],
  ['Prometheus', '/prometheus-icon.svg', 'Métricas'],
  ['Grafana', '/grafana-icon.svg', 'Métricas'],
  ['Hugging Face', '/huggingface-icon.svg', 'IA'],
  ['Logstash', '/logstash-icon.svg', 'Ingesta'],
];

export default function TechCarousel() {
  return (
    <div className="relative w-full border-y border-[var(--line)] py-7">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <p className="editorial-label text-[var(--accent)]">Tecnologías</p>
      </div>
      <div className="tech-carousel mt-7" aria-label="Tecnologías utilizadas">
        <div className="tech-track">
          {[0, 1].map((group) => (
            <div className="tech-group" key={group}>
              {technologies.map(([name, icon, category]) => (
                <div className="tech-card group flex w-32 shrink-0 flex-col items-center border border-[var(--line)] bg-[var(--paper)] px-3 py-4" key={`${group}-${name}`}>
                  <div className="flex h-10 items-center justify-center">
                    <Image src={icon} alt="" width={32} height={32} className="h-8 w-8 object-contain" />
                  </div>
                  <p className="mt-4 text-center text-xs font-medium leading-tight text-[var(--ink)]">{name}</p>
                  <p className="mt-2 text-center font-mono text-[0.52rem] uppercase tracking-[0.1em] text-[var(--quiet)]">{category}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
