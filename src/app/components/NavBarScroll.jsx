"use client";

import { useEffect, useState } from 'react';
import NavBar from './NavBar';

export default function NavBarScroll() {
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sectionIds = ['inicio', 'trayectoria', 'proyectos', 'publicaciones', 'contacto'];
    const handleScroll = () => {
      const currentSection = sectionIds.reduce((current, id) => {
        const section = document.getElementById(id);
        return section && section.offsetTop <= window.scrollY + window.innerHeight * 0.35 ? id : current;
      }, 'inicio');

      setScrolling(window.scrollY > 24);
      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return <NavBar scrolling={scrolling} activeSection={activeSection} />;
}
