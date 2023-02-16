import Navbar from './components/Navbar';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Experience from './components/Experience.js';
import AboutMe from './components/AboutMe.js'; 
import Contact from './components/Contact.js';
import Hero from './components/Hero.js';

import './App.scss';

function App() {
  return (
      <container className="page">
      <Hero />
      <Navbar />
      <Skills />
      <Projects />
      <Experience />
      <AboutMe />
      <Contact />
      </container>
  );
}

export default App;
