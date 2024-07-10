import React, { useEffect, useRef, useCallback } from 'react';
import './CSS/CSS_FILE.css';
import './CSS/react.css';
import './CSS/responsive.css';
import About from './About.js';
import Experience from './Experience.js';
import Skills from './Skills.js';
import Header from './Header.js';
import './index.js';
import Contact from './Contact.js';

function App() {
  const scrollOffset = 100;
  const contentElementsRef = useRef([]);

  useEffect(() => {
    contentElementsRef.current = Array.from(document.querySelectorAll(".sectionn"));
  }, []);

  const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight - offset);
  };

  const displayScrollElement = (el) => {
    el.classList.add('scrolled');
  };

  const hideScrollElement = (el) => {
    el.classList.remove('scrolled');
  };

  const handleScrollAnimation = useCallback(() => {
    contentElementsRef.current.forEach((element) => {
      if (elementInView(element, scrollOffset)) {
        displayScrollElement(element);
      } else {
        hideScrollElement(element);
      }
    });
  }, [scrollOffset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollAnimation);
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, [handleScrollAnimation]);

  return (
    <div className='myweb'>
      <div className='Header'><Header/></div>
      <div className='About'><About/></div>
      <div className='sectionn Experience'><Experience/></div>
      <div className='sectionn Skills'><Skills/></div>
      <div className='sectionn Contact'><Contact/></div>
    </div>
  );
}

export default App;
