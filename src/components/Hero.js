import { useInView } from 'react-intersection-observer';

export default function Hero() {
const { ref: hero, inView: heroInView} = useInView();

     return (
        <div className={"component hero " + (heroInView ? "show" : "hidden")} ref={hero}>
         <div className="content">
        <h1>Samuel Curteis</h1>
         <h2>Junior Software Engineer</h2>
         <div className="icons">
       <a href='https://www.linkedin.com/in/samcurteis'> <i className="devicon-linkedin-plain"></i></a>
       <a href='https://github.com/samcurteis'> <i className="devicon-github-original"></i></a>
         </div>
         </div>
         </div>
    )
};
