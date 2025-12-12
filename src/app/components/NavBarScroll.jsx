"use client"
import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

const NavBarScroll = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const mainElement = document.querySelector('main');
    if (!mainElement) {
      return;
    }

    const handleScroll = () => {
      setScrolling(mainElement.scrollTop > 200);
    };

    handleScroll();
    mainElement.addEventListener('scroll', handleScroll);

    return () => {
      mainElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <NavBar scrolling={scrolling} />;
};

export default NavBarScroll;
