import { useInView } from 'react-intersection-observer';
import poetscorner from '../assets/gifs/poetscorner.gif';
import getyerboots from '../assets/gifs/getyerboots.gif';
import memegenerator from '../assets/gifs/memegenerator.gif';
import adventuremap from '../assets/gifs/adventuremap.gif';

export default function Projects() {
  const setting = {
    triggerOnce: true
  };
  const { ref: title, inView: titleInView } = useInView(setting);
  const { ref: p1Ref, inView: p1InView } = useInView(setting);
  const { ref: p2Ref, inView: p2InView } = useInView(setting);
  const { ref: p3Ref, inView: p3InView } = useInView(setting);
  const { ref: p4Ref, inView: p4InView } = useInView(setting);

  return (
    <div className='component projects'>
      <span className='m-anchor' id='m-projects'></span>
      <span className='anchor' id='projects'></span>
      <h2 ref={title} className={'title ' + (titleInView ? 'show' : 'hidden')}>
        Projects
      </h2>
      <div className={'project ' + (p4InView ? 'show' : 'hidden')} ref={p4Ref}>
        <div className='project-content'>
          <h3>Project 4</h3>
          <h3>
            <a
              href='https://poetscorner.netlify.app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Poet’s Corner
            </a>{' '}
            -{' '}
            <a
              href='https://github.com/samcurteis/ga-project-4-frontend/blob/main/README.md'
              target='_blank'
              rel='noopener noreferrer'
            >
              Readme
            </a>
          </h3>
          <h3>9 days - Solo</h3>
          <p>
            A website inspired by the Poetry Foundation and Letterboxd, where
            users can browse a database of over 15,000 poems and 3,000 authors
            seeded from Project Gutenberg’s free-to-use archive. Users can
            register an account, like and add their favourite poems or authors
            to their profile page, as well as write posts and like, favourite or
            comment on other users' posts.
          </p>
          <p>
            <strong>Tech stack:</strong> React.js, Redux, Jest, Django, CSS,
            SASS, MUI
          </p>
          <p>
            <strong>Additional packages:</strong> JWT, Axios, CORS, Buffer, Mock
            Service Worker
          </p>
        </div>
        <div className='buffer'></div>
        <a
          href='https://poetscorner.netlify.app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img id='project-image' alt='project 4 gif' src={poetscorner} />
        </a>
      </div>
      <div
        className={'project reverse ' + (p3InView ? 'show' : 'hidden')}
        ref={p3Ref}
      >
        <a
          href='https://sams-adventure-map.netlify.app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img id='project-image' alt='project 3 gif' src={adventuremap} />
        </a>
        <div className='buffer'></div>
        <div className='project-content'>
          <h3>Project 3</h3>
          <h3>
            <a
              href='https://sams-adventure-map.netlify.app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Adventure Map
            </a>{' '}
            -{' '}
            <a
              href='https://github.com/samcurteis/GA-Project-3-Frontend/blob/development/README.md'
              target='_blank'
              rel='noopener noreferrer'
            >
              Readme
            </a>
          </h3>
          <h3>1 week - Group (3 people)</h3>
          <p>
            A website designed for users to colour in the countries they've
            visited on a world map. Countries are colour coded based on how many
            users have visited them. Users can create an account, write and post
            pictures on the countries they’ve visited and browse users to see
            where they’ve visited.
          </p>
          <p>
            <strong>Personal responsibilities: </strong>Developing backend CRUD
            functionality, frontend data handling and design layout.
          </p>
          <p>
            <strong>Tech stack:</strong> React.js, MongoExpress, Node.js, CSS,
            SASS, MUI
          </p>
          <p>
            <strong>Additional packages:</strong> Bcrypt, Axios, CORS, Buffer
          </p>
        </div>
      </div>
      <div className={'project ' + (p2InView ? 'show' : 'hidden')} ref={p2Ref}>
        <div className='project-content'>
          <h3>Project 2</h3>
          <h3>
            <a
              href='https://samsmemegenerator.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Meme Generator
            </a>{' '}
            -{' '}
            <a
              href='https://github.com/samcurteis/ga-project-2/blob/main/README.md'
              target='_blank'
              rel='noopener noreferrer'
            >
              ReadMe
            </a>
          </h3>
          <h3>48 hours - Group (3 people)</h3>
          <p>
            A website which utilises a public API to display 100 memes, which
            users can explore by either fetching a random meme, browsing an
            index page with a search bar, or scrolling through a carousel.
          </p>
          <p>
            <strong>Personal responsibilities: </strong>Creating and styling the
            home page, managing the project timeline and assisting peers in
            fixing bugs.
          </p>
          <p>
            <strong>Tech stack:</strong> React.js, CSS, SASS, Bulma
          </p>
        </div>
        <div className='buffer'></div>
        <a
          href='https://samsmemegenerator.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img id='project-image' alt='project 2 gif' src={memegenerator} />
        </a>
      </div>
      <div
        className={'project reverse ' + (p1InView ? 'show' : 'hidden')}
        ref={p1Ref}
      >
        <a
          href='https://samcurteis.github.io/ga-project-1/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img id='project-image' alt='project 1 gif' src={getyerboots} />
        </a>
        <div className='buffer'></div>
        <div className='project-content'>
          <h3>Project 1</h3>
          <h3>
            <a
              href='https://samcurteis.github.io/ga-project-1/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Get yer boots across the bog
            </a>{' '}
            -{' '}
            <a
              href='https://github.com/samcurteis/ga-project-1/blob/main/README.md'
              target='_blank'
              rel='noopener noreferrer'
            >
              Readme
            </a>
          </h3>
          <h3>1 week - Solo</h3>
          <p>
            Grid-based frogger-style game inspired by rogue-like video games and
            an anecdote amongst friends where I fell in a bog and soaked my
            boots in mud. The game has three levels that increase in difficulty
            (the last level is very hard!).
          </p>

          <p>
            This project consolidated and put into practice all of the skills
            that I had learnt during the first three weeks of the Software
            Engineering Immersive course at General Assembly, and pushed me to
            use them creatively.
          </p>
          <p>
            <strong>Tech stack:</strong> Vanilla JavaScript, HTML, CSS.
          </p>
        </div>
      </div>
    </div>
  );
}
