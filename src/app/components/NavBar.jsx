"use client";

import { useEffect, useState } from 'react';

const navLinks = [
  ['inicio', 'Inicio'],
  ['trayectoria', 'Trayectoria'],
  ['proyectos', 'Proyectos'],
  ['publicaciones', 'Publicaciones'],
  ['contacto', 'Contacto'],
];

const navigationOffset = 96;

export default function NavBar({ scrolling, activeSection }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const goTo = (id) => {
    setOpen(false);

    if (id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.getElementById(id);
    if (!target) return;

    const firstChild = target.firstElementChild;
    const firstChildStyle = firstChild ? window.getComputedStyle(firstChild) : null;
    const contentTop = firstChild
      ? firstChild.getBoundingClientRect().top + window.scrollY + parseFloat(firstChildStyle.paddingTop || '0')
      : target.getBoundingClientRect().top + window.scrollY;
    const top = contentTop - navigationOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  };

  return (
    <header className={`site-header fixed inset-x-0 top-0 z-50 ${scrolling ? 'site-header--scrolled border-b border-[var(--line)]' : 'bg-transparent'}`}>
      <nav className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-5 sm:px-10 lg:px-16" aria-label="Navegación principal">
        <button type="button" onClick={() => goTo('inicio')} className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--ink)] transition-colors hover:text-[var(--accent)]">
          JB <span className="text-[var(--quiet)]">/</span> Data systems
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map(([id, label], index) => (
            <button key={id} type="button" onClick={() => goTo(id)} className={`font-mono text-[0.62rem] uppercase tracking-[0.14em] transition-colors hover:text-[var(--accent)] ${activeSection === id ? 'text-[var(--accent)]' : 'text-[var(--muted)]'}`}>
              <span className="mr-2 text-[var(--quiet)]">0{index + 1}</span>{label}
            </button>
          ))}
        </div>

        <button type="button" className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[var(--ink)] md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Abrir navegación">
          {open ? 'Cerrar ×' : 'Menú +'}
        </button>
      </nav>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-[var(--line)] bg-[var(--paper)] px-6 pb-8 pt-3 sm:px-10">
          <div className="flex flex-col">
            {navLinks.map(([id, label], index) => (
              <button key={id} type="button" onClick={() => goTo(id)} className={`flex items-center justify-between border-t border-[var(--line)] py-4 text-left text-xl transition-colors hover:text-[var(--accent)] ${activeSection === id ? 'text-[var(--accent)]' : 'text-[var(--ink)]'}`}>
                <span>{label}</span><span className="font-mono text-xs text-[var(--accent)]">0{index + 1} ↘</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
