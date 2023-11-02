import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Element } from 'react-scroll';
import CertificationsList from './components/CertificationsList';
import WorkExperience from './components/WorkExperience';


function App() {
  // Step 1: Create a state variable to track the current mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Step 2: Add an event handler to toggle the mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Add a toggle icon for switching modes */}
      
      <div className="mode-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? '🌞' : '🌙'}
      </div>

      <Header />

      <Landing />

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="certifications">
        <CertificationsList />
      </Element>

      <Element name="experience">
        <WorkExperience />
      </Element>

      <Element name="about">
        <AboutMe />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
      
    </div>
  );
}

export default App;
