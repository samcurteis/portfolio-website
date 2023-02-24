import Navbar from './components/Navbar';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Experience from './components/Experience.js';
import AboutMe from './components/AboutMe.js'; 
import Contact from './components/Contact.js';
import Hero from './components/Hero.js';

import './styles/App.scss';
import './styles/hero.scss';
import './styles/navbar.scss';
import './styles/skills.scss';
import './styles/projects.scss';
import './styles/experience.scss';
import './styles/about-me.scss';
import './styles/contact.scss';

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
