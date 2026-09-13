import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1440px] px-6 py-8 sm:px-10 lg:px-16">
      <div className="flex flex-col justify-between gap-6 border-t border-[var(--line)] pt-7 text-sm sm:flex-row sm:items-center">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[var(--quiet)]">© {new Date().getFullYear()} Jose Boullosa</p>
        <div className="flex flex-wrap gap-6 text-[var(--muted)]">
          <a className="transition-colors hover:text-[var(--accent)]" href="https://github.com/joboufra" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="transition-colors hover:text-[var(--accent)]" href="https://www.linkedin.com/in/jboullosa/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className="transition-colors hover:text-[var(--accent)]" href="mailto:contacto@joboufra.es">contacto@joboufra.es ↗</a>
          <Link className="transition-colors hover:text-[var(--accent)]" href="#inicio">Volver arriba ↑</Link>
        </div>
      </div>
      <p className="mt-7 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[var(--quiet)]">Búsqueda / Datos / Operaciones</p>
    </footer>
  );
}
