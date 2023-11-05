"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { ArrowUpCircleIcon  } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';
import { MenuToggle } from './MenuToggle';
import useOutsideClick from './hooks/useOutsideClick';

const navLinks = [
  {
    title: 'Inicio',
    path: '#inicio',
  },
  {
    title: 'Proyectos',
    path: '#proyectos',
  },
  {
    title: 'Trayectoria profesional',
    path: '#trayectoria',
  },
  {
    title: 'Contacto',
    path: '#contacto',
  },
];

const NavBar = ({ scrolling }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState('');
  const [showButton, setShowButton] = useState(false);
  const navRef = useRef(null);

  const scrollToTop = () => {
    const mainElement = document.querySelector('main');
    mainElement.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const mainElement = document.querySelector('main');
      if (mainElement.scrollTop > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    const mainElement = document.querySelector('main');
    mainElement.addEventListener('scroll', handleScroll);
    return () => {
      mainElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  const handleDocumentClick = (e) => {
    if (navbarOpen && !navRef.current.contains(e.target)) {
      closeNavbar();
    }
  };

  useOutsideClick(navRef, closeNavbar);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelectedLink(`#${entry.target.id}`);
          }
        });
      },
      { threshold: [0.4] }
    );
    navLinks.forEach((link) => {
      const element = document.querySelector(link.path);
      if (element) {
        observer.observe(element);
      }
      
    });

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeNavbar();
      }
    };


    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleDocumentClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleDocumentClick);
      navLinks.forEach((link) => {
        const element = document.querySelector(link.path);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`sticky top-0 left-0 right-0 bg-[#121212] md:bg-opacity-95 bg-opacity-100 border-b-2 border-secondary-500 z-20 ${
          scrolling ? 'scale-1' : ''
        }`}
      >
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
          <Link href={"/"} className='text-white font-semibold'>
            <Image
              src="/images/joboufra-es-transparent.png"
              alt="Logo"
              width={100}
              height={24}
            />
          </Link>

          <div className='mobile-menu block md:hidden'>
            <MenuToggle toggle={() => setNavbarOpen(!navbarOpen)} isOpen={navbarOpen} />
          </div>

          <div className='menu hidden md:block md:w-auto' id='navbar'>
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    href={link.path}
                    title={link.title}
                    extraClass={selectedLink === link.path ? 'text-white' : ''}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} onClose={closeNavbar} /> : null}
      </nav>

      {showButton && (
        <button
          className="fixed bottom-6 right-6 z-20 p-1 rounded-full transition duration-300 ease-in-out transform hover:scale-125"
          onClick={scrollToTop}
        >
          <ArrowUpCircleIcon  className="h-12 w-12 text-white hover:text-secondary-500"/>
        </button>
      )}
    </>
  );
};

export default NavBar;