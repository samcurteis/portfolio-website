import Navbar from './components/Navbar';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Experience from './components/Experience.js';
import AboutMe from './components/AboutMe.js'; 
import Contact from './components/Contact.js';
import Hero from './components/Hero.js';

import './styles/app-styles.scss';
import './styles/hero-styles.scss';
import './styles/navbar-styles.scss';
import './styles/skills-styles.scss';
import './styles/projects-styles.scss';
import './styles/experience-styles.scss';
import './styles/about-me-styles.scss';
import './styles/contact-styles.scss';

import './styles/carousel-styles.scss';

function App() {
        

  return (
      <div className="page">
      <Hero />
      <Navbar />
      <Skills />
      <Projects />
      <Experience />
      <AboutMe />
      <Contact />
      </div>
  );
}

export default App;
