import headshot from '../assets/personal-pics/headshot.jpg';
import { IconContext } from "react-icons";
import { BsChevronBarLeft, BsChevronBarRight } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';

import Education from './AboutMeComponents/Education.js';
import Other from './AboutMeComponents/Other.js';
import Cycling from './AboutMeComponents/Cycling.js';
import Film from './AboutMeComponents/Film.js';
import Photography from './AboutMeComponents/Photography.js';

export default function AboutMe() {
   const setting = {
    triggerOnce: true
    }; 
const { ref: title, inView: titleInView} = useInView(setting);
const { ref: headshotRef, inView: headshotRefInView} = useInView(setting);
const { ref: brandStatement, inView: brandStatementInView} = useInView(setting);
const { ref: options, inView: optionsInView} = useInView(setting);
const { ref: container, inView: containerInView} = useInView(setting);

    function scrollRight(){
        console.log('scroll right activated')
        const container = document.getElementById("container");
        const containerWidth = container.offsetWidth;
 container.scrollLeft += containerWidth
}

    function scrollLeft(){
        console.log('scroll left activated')
        const container = document.getElementById("container");
        const containerWidth = container.offsetWidth;
 container.scrollLeft -= containerWidth
}

    function scrollSection(e){
        const container = document.getElementById("container");
        const containerWidth = container.offsetWidth;
 container.scrollTo({
     top: 0,
     left: (containerWidth * e.target.id) 
 })
    }

    return (
        <div className="component about-me">
        <span className="anchor" id="about-me"></span>
        <h2 className={"title " + (titleInView ? "show" : "hidden")} ref={title}>About Me</h2>
        <div className={"headshot " + (headshotRefInView ? "show" : "hidden")} ref={headshotRef}>
        <img  alt="headshot" src={headshot} />
        </div>
        <p className={"piece brand-statement " + (brandStatementInView ? "show" : "hidden")} ref={brandStatement}>I’m a junior software developer with previous experience teaching English as a first and second language. I decided to make the jump to software engineering because it draws on a lot of my interests while also being completely novel, and took the Software Engineering Immersive course at General Assembly to dive head first into this new world. Having taught and studied English, I’m fascinated by the power of words and language, and discovering that I can use them to build technologies has been a hugely rewarding experience. I hope to put the new skills I’ve learned to use in an environment which has the same goal in mind as my previous work: to help others to learn and grow.</p>
        <IconContext.Provider value={{ className: 'chevrons' }}>
        <div className={"options " + (optionsInView ? "show" : "hidden")} ref={options}>
        <BsChevronBarLeft onClick={scrollLeft}/>
        <div className="buttons " >
            <h4 className="border" onClick={scrollSection} id={0}>EDUCATION</h4>
            <h4 className="border" onClick={scrollSection} id={1}>CYCLING</h4>
            <h4 className="border" onClick={scrollSection} id={2}>FILM</h4>
            <h4 className="border" onClick={scrollSection} id={3}>PHOTOGRAPHY</h4>
            <h4  onClick={scrollSection} id={4}>OTHER</h4>
        </div>
        <BsChevronBarRight  onClick={scrollRight}/>
        </div>
        </IconContext.Provider>
        <div className={"container " + (containerInView ? "show" : "hidden")} ref={container} id="container">
        <div className="scroller">
        <Education />
        <Cycling />
        <Film />
        <Photography />
        <Other />
        </ div>
        </ div>
        </ div>
        
    )
};
