import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Hero() {
  const { ref: hero, inView: heroInView } = useInView({
    triggerOnce: true
  });

  return (
    <div
      className={'component hero ' + (heroInView ? 'show' : 'hidden')}
      ref={hero}
    >
      <div className='content'>
        <h1>Samuel Curteis</h1>
        <h2>Software Engineer</h2>
        <div className='icons title'>
          <a
            href='https://www.linkedin.com/in/samcurteis'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            <FontAwesomeIcon icon='fa-brands fa-linkedin' size='3x' />
          </a>
          <a
            href='https://github.com/samcurteis'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
          </a>
          <FontAwesomeIcon icon='fa-brands fa-github' size='3x' />
        </div>
      </div>
    </div>
  );
}
