"use client"
import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

const NavBarScroll = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <NavBar scrolling={scrolling} />;
};

export default NavBarScroll;
