import headshot from '../assets/personal-pics/headshot.png';
import { IconContext } from 'react-icons';
import { BsChevronBarLeft, BsChevronBarRight } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';

import Education from './AboutMeComponents/Education.jsx';
import Other from './AboutMeComponents/Other.jsx';
import Cycling from './AboutMeComponents/Cycling.jsx';
import Film from './AboutMeComponents/Film.jsx';
import Photography from './AboutMeComponents/Photography.jsx';

export default function AboutMe() {
  const setting = {
    triggerOnce: true
  };
  const { ref: title, inView: titleInView } = useInView(setting);
  const { ref: headshotRef, inView: headshotRefInView } = useInView(setting);
  const { ref: brandStatement, inView: brandStatementInView } =
    useInView(setting);
  const { ref: options, inView: optionsInView } = useInView(setting);
  const { ref: container, inView: containerInView } = useInView(setting);

  function scrollRight() {
    console.log('scroll right activated');
    const container = document.getElementById('container');
    const containerWidth = container.offsetWidth;
    container.scrollLeft += containerWidth;
  }

  function scrollLeft() {
    console.log('scroll left activated');
    const container = document.getElementById('container');
    const containerWidth = container.offsetWidth;
    container.scrollLeft -= containerWidth;
  }

  function scrollSection(e) {
    const container = document.getElementById('container');
    const containerWidth = container.offsetWidth;
    container.scrollTo({
      top: 0,
      left: containerWidth * e.target.id
    });
  }

  return (
    <div className='component about-me'>
      <span className='anchor' id='about-me'></span>
      <h2 className={'title ' + (titleInView ? 'show' : 'hidden')} ref={title}>
        About Me
      </h2>
      <div
        className={'headshot ' + (headshotRefInView ? 'show' : 'hidden')}
        ref={headshotRef}
      >
        <img alt='headshot' src={headshot} />
      </div>
      <p
        className={
          'piece brand-statement ' + (brandStatementInView ? 'show' : 'hidden')
        }
        ref={brandStatement}
      >
        I’m a software engineer with a previous career in teaching English as a
        first and second language. I made the jump into tech to combine my
        strengths in communication and problem-solving with a desire to build
        solutions that improves people’s lives. My teaching background helps me
        keep the end user at the centre of my work, collaborate effectively with
        colleagues, and manage stakeholder relationships with clarity and
        empathy. Having had more than one career allows me to approach my work
        with a fresh perspective, learn quickly, and do away with what doesn't
        work in pursuit of what does.
      </p>
      <IconContext.Provider value={{ className: 'chevrons' }}>
        <div
          className={'options ' + (optionsInView ? 'show' : 'hidden')}
          ref={options}
        >
          <BsChevronBarLeft onClick={scrollLeft} />
          <div className='buttons '>
            <h4 className='border' onClick={scrollSection} id={0}>
              EDUCATION
            </h4>
            <h4 className='border' onClick={scrollSection} id={1}>
              CYCLING
            </h4>
            <h4 className='border' onClick={scrollSection} id={2}>
              FILM
            </h4>
            <h4 className='border' onClick={scrollSection} id={3}>
              PHOTOGRAPHY
            </h4>
            <h4 onClick={scrollSection} id={4}>
              OTHER
            </h4>
          </div>
          <BsChevronBarRight onClick={scrollRight} />
        </div>
      </IconContext.Provider>
      <div
        className={'container ' + (containerInView ? 'show' : 'hidden')}
        ref={container}
        id='container'
      >
        <div className='scroller'>
          <Education />
          <Cycling />
          <Film />
          <Photography />
          <Other />
        </div>
      </div>
    </div>
  );
}
