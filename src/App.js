import React, { useState, useEffect } from 'react';
import Preloader from './Components/Preloader';
import Header from './Components/header';
import Hero from './Components/hero';
import About from './Components/about';
import Skills from './Components/skills';
import Projects from './Components/projects';
import Contact from './Components/contact';
import Footer from './Components/footer';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans">
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <Header />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer/>
        </div>
      )}
    </div>
  );
};

export default App;
