import poetscorner from '../assets/gifs/poetscorner.gif'
import getyerboots from '../assets/gifs/getyerboots.gif'
import memegenerator from '../assets/gifs/memegenerator.gif'
import adventuremap from '../assets/gifs/adventuremap.gif'

 
export default function Projects() {
    return (
     <container id="projects" className="component projects">
        <h2>Projects</h2>
      <div className="project" >  
        <div className="project-content">
<h3>Project 4</h3>
    <h3>Poet’s Corner - Readme</h3>
        <h3>9 days - Solo</h3>
        <p>Full stack app using a Django API paired with a PostgreSQL database 
        and React.js frontend, styled using a combination of Material UI and 
        SASS. The app allows users to browse a database of over 15,000 poems 
        and 3,000 authors seeded from Project Gutenberg’s free to use archive. 
        Users can register an account, like and add their favourite poems or 
        authors to their profile page, as well as write posts and like, 
        favourite or comment on other user’s posts.</p>
        </div>
        <img id="project-image" alt="project 4 gif" src={poetscorner} />
        </ div>
      <div className="project" >  
        <img id="project-image" alt="project 3 gif" src={adventuremap} />
        <div className="project-content">
        <h3>Project 3</h3>
        <h3>Adventure Map -  Readme</h3>
        <h3>1 week - Group (3 people)</h3>
            <p>Full-Stack MERN app with CRUD functionality designed for users 
        to tally the countries they’ve visited, which is logged on a world map 
        where countries are colour coded based on how many users have visited 
        them. Users can register and log in to accounts, write and post 
        pictures on the countries they’ve visited, view the posts for each 
        country and browse users to see where they’ve visited. Personal 
        responsibilities included developing backend CRUD functionality, 
        frontend data handling and design layout using Material UI.</p>
        </div>
        </ div>
      <div className="project" >  
        <div className="project-content">
        <h3>Project 2</h3>
        <h3>Meme Generator - ReadMe</h3>
        <h3>48 hours - Group (3 people)</h3>
            <p>React.js app which interacted with a public API, where users 
        could generate a random meme or browse through an index of 100 memes, 
        styled using SASS and Bulma. Responsibilities included design layout 
        and styling, building components and handling API data.</p>
        </div>
        <img id="project-image" alt="project 2 gif" src={memegenerator} />
        </ div>
      <div className="project" >  
        <img id="project-image" alt="project 1 gif" src={getyerboots} />
        <div className="project-content">
        <h3>Project 1</h3>
        <h3>Get yer boots across the bog - Readme</h3>
        <h3>1 week - solo project</h3>
            <p>Grid based frogger-style game built using HTML, CSS and 
        JavaScript. This project consolidated and put into practice all of 
        the skills that I learned so far in the course and pushed me to use 
        them creatively.</p>
        </div>
        </ div>
        </container>
    )
};
