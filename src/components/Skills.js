import { useInView } from 'react-intersection-observer';




export default function Skills() {
const { ref: skills, inView: skillsInView} = useInView({
    triggerOnce: true
    });
    return (
        <div  className={"component skills " + (skillsInView ? "show" : "hidden")} ref={skills}>
        <span className="anchor" id="skills"></span>
        <h2 className="title">Skills </h2>
        <div className="icons">
        <div className="skill">  
        <i className="devicon-html5-plain"></i>          
        <p className="skill-name">HTML</p>
        </div>
        <div className="skill">  
        <i className="devicon-css3-plain"></i>
        <p className="skill-name">CSS</p>
        </div>  
  
        <div className="skill">  
        <i className="devicon-javascript-plain"></i>     
             <p className="skill-name">JavaScript</p>
        </div>  
        <div className="skill">  
        <i className="devicon-react-original"></i>       
             <p className="skill-name">React.js</p>
        </div>  
        <div className="skill">  
        <i className="devicon-sass-original"></i>        
             <p className="skill-name">SASS</p>
        </div>  
        <div className="skill">  
        <i className="devicon-express-original"></i>     
             <p className="skill-name">Express</p>
        </div>  
        <div className="skill">  
        <i className="devicon-django-plain"></i>         
             <p className="skill-name">Django</p>
        </div>  
         <div className="skill">  
        <i className="devicon-flask-original"></i>
             <p className="skill-name">Flask</p>
        </div>  
        <div className="skill">  
        <i className="devicon-python-plain"></i>         
             <p className="skill-name">Python</p>
        </div>  
        <div className="skill">  
        <i className="devicon-java-plain"></i>         
             <p className="skill-name">Java</p>
        </div>  
        <div className="skill">  
        <i className="devicon-spring-plain"></i>         
             <p className="skill-name">Spring</p>
        </div>  
        <div className="skill">  
        <i className="devicon-mongodb-plain"></i>        
             <p className="skill-name">MongoDB</p>
        </div>  
        <div className="skill">  
        <i className="devicon-postgresql-plain"></i>     
             <p className="skill-name">PostgreSQL</p>
        </div>  
        <div className="skill">  
        <i class="devicon-docker-plain"></i>
             <p className="skill-name">Docker</p>
        </div>  
        <div className="skill">  
        <i className="devicon-git-plain"></i>            
             <p className="skill-name">Git</p>
        </div>  
        <div className="skill">  
        <i className="devicon-heroku-original"></i>      
             <p className="skill-name">Heroku</p>
        </div>  
        <div className="skill">  
        <i className="devicon-lua-plain"></i>            
             <p className="skill-name">Lua</p>
        </div>  
        <div className="skill">  
        <i className="devicon-npm-original-wordmark"></i>
        <p className="skill-name">npm</p>
        </div>         
        <div className="skill">  
        <i className="devicon-slack-plain"></i>          
        <p className="skill-name">Slack</p>
        </div>         
        <div className="skill">  
        <i className="devicon-trello-plain"></i>         
        <p className="skill-name">Trello</p>
        </div>         
</div>
        </div>
    )
};
