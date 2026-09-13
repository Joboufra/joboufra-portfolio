const publications = [
  {
    date: '04 Ene 2026',
    type: 'Artículo en LinkedIn · Datos públicos',
    title: 'Balizas V16 y geolocalización: lo que expone la DGT',
    summary: 'Un análisis de la API pública de eTraffic, el nivel de precisión de los datos DGT 3.0 y el equilibrio entre transparencia, geolocalización y privacidad.',
    tags: ['DGT 3.0', 'APIs', 'Geolocalización', 'Privacidad'],
    href: 'https://www.linkedin.com/pulse/balizas-v16-y-geolocalizaci%C3%B3n-lo-que-expone-la-dgt-boullosa-fraga-bpi1e/',
  },
];

export default function PublicationsSection() {
  return (
    <div>
      <header className="section-heading flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div>
          <p className="editorial-label mb-5 text-[var(--accent)]">04 / Publicaciones</p>
          <h2 className="max-w-3xl text-5xl font-medium tracking-[-0.06em] text-[var(--ink)] sm:text-7xl">Notas de campo.</h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-[var(--muted)] lg:pb-1">
          Publicaciones sobre tecnología, datos y cualquier tema del mundo tech que me despierte curiosidad.
        </p>
      </header>

      <div>
        {publications.map((publication, index) => (
          <article
            key={publication.title}
            aria-labelledby={`publication-title-${index}`}
            className="section-card group border-l-2 border-l-[var(--accent)] p-6 transition-[background-color,border-color,box-shadow] duration-300 hover:border-[var(--accent)] hover:bg-[var(--surface)] hover:shadow-[0_18px_45px_color-mix(in_srgb,var(--accent)_8%,transparent)] focus-within:border-[var(--accent)] focus-within:bg-[var(--surface)] motion-reduce:transition-none sm:p-8 lg:p-10"
          >
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(220px,0.65fr)] lg:gap-14">
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <p className="editorial-label text-[var(--accent)]">{publication.type}</p>
                  <span className="text-[var(--quiet)]" aria-hidden="true">·</span>
                  <time className="editorial-label" dateTime="2026-01-04">{publication.date}</time>
                </div>
                <h3 id={`publication-title-${index}`} className="mt-7 max-w-3xl text-4xl font-medium tracking-[-0.055em] text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--accent)] group-focus-within:text-[var(--accent)] motion-reduce:transition-none sm:text-5xl">
                  {publication.title}
                </h3>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)]">{publication.summary}</p>
                <a
                  href={publication.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Leer «${publication.title}» en LinkedIn (se abre en una pestaña nueva)`}
                  className="editorial-link mt-8 inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] focus-visible:rounded-sm focus-visible:text-[var(--accent)]"
                >
                  Leer en LinkedIn <span aria-hidden="true">↗</span><span className="sr-only"> (se abre en una pestaña nueva)</span>
                </a>
              </div>

              <aside className="border-t border-[var(--line)] pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <p className="editorial-label text-[var(--accent)]">Temas</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Temas del artículo">
                  {publication.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-[var(--line)] px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-[var(--quiet)] transition-colors duration-300 group-hover:border-[var(--line-strong)] group-hover:text-[var(--muted)] motion-reduce:transition-none">{tag}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}
