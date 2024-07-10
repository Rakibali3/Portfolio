import './App.css';
import React, { useRef } from 'react';
import AboutMe from './components/AboutMe';
import Body from './components/Body';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    const headerHeight = document.querySelector('header').offsetHeight;
    window.scrollTo({
      top: ref.current.offsetTop - headerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App bg-[#0D2438] dark:bg-white cursor-gradient  ">
      <Header scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, projectsRef, educationRef, contactRef }} />
      <div ref={homeRef}><Body /></div>
      <div ref={aboutRef}><AboutMe /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={educationRef}><Education /></div>
      <div ref={contactRef}><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
