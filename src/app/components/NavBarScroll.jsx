"use client";

import { useEffect, useState } from 'react';
import NavBar from './NavBar';

export default function NavBarScroll() {
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sectionIds = ['inicio', 'trayectoria', 'proyectos', 'publicaciones', 'contacto'];
    const sections = sectionIds
      .map((id) => ({ id, element: document.getElementById(id) }))
      .filter(({ element }) => element);
    let sectionTops = [];
    let frame;

    const updateSectionTops = () => {
      sectionTops = sections.map(({ id, element }) => ({
        id,
        top: element.offsetTop,
      }));
    };

    const update = () => {
      frame = undefined;
      const currentSection = sectionTops.reduce((current, section) => (
        section.top <= window.scrollY + window.innerHeight * 0.35 ? section.id : current
      ), 'inicio');
      const nextScrolling = window.scrollY > 24;

      setScrolling((current) => current === nextScrolling ? current : nextScrolling);
      setActiveSection((current) => current === currentSection ? current : currentSection);
    };

    const scheduleUpdate = () => {
      if (frame === undefined) frame = requestAnimationFrame(update);
    };
    const handleResize = () => {
      updateSectionTops();
      scheduleUpdate();
    };

    updateSectionTops();
    scheduleUpdate();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', handleResize);
      if (frame !== undefined) cancelAnimationFrame(frame);
    };
  }, []);

  return <NavBar scrolling={scrolling} activeSection={activeSection} />;
}
