import Navbar from './components/Navbar';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import AboutMe from './components/AboutMe.jsx';
import Contact from './components/Contact.jsx';
import Hero from './components/Hero.jsx';

import './styles/app-styles.scss';
import './styles/hero-styles.scss';
import './styles/navbar-styles.scss';
import './styles/skills-styles.scss';
import './styles/projects-styles.scss';
import './styles/experience-styles.scss';
import './styles/about-me-styles.scss';
import './styles/contact-styles.scss';

import './styles/carousel-styles.scss';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='page'>
      <Hero />
      <Navbar />
      <Experience />
      <Projects />
      <AboutMe />
      <Contact />
      <ToastContainer />
    </div>
  );
}

export default App;
