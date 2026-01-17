import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { IconContext } from 'react-icons';
import { AiOutlineUnorderedList } from 'react-icons/ai';

export default function MobileNav() {
  const [height, setHeight] = useState(0);

  const toggleDropdown = () => setHeight(height === 0 ? 'auto' : 0);

  return (
    <div className='component mobile-nav'>
      <div className='icon-container'>
        <IconContext.Provider value={{ className: 'chevron' }}>
          <span
            className='dropdown-icon'
            alt='dropdown icon'
            aria-controls='id'
            onClick={toggleDropdown}
          >
            <AiOutlineUnorderedList />
          </span>
        </IconContext.Provider>
      </div>
      <AnimateHeight id='id' duration={250} height={height}>
        <div className='navbar-options'>
          <p className='navbar-item'>
            <a onClick={toggleDropdown} href='#m-skills'>
              Skills
            </a>
          </p>
          <p className='navbar-item'>
            <a onClick={toggleDropdown} href='#m-experience'>
              Experience
            </a>
          </p>
          <p className='navbar-item'>
            <a onClick={toggleDropdown} href='#m-projects'>
              Projects
            </a>
          </p>
          <p className='navbar-item'>
            <a onClick={toggleDropdown} href='#m-about-me'>
              About Me
            </a>
          </p>
          <p className='navbar-item'>
            <a onClick={toggleDropdown} href='#m-contact'>
              Contact
            </a>
          </p>
        </div>
      </AnimateHeight>
    </div>
  );
}
