import headshot from '../assets/personal-pics/headshot.jpg'

export default function AboutMe() {
    return (
        <container id="about-me" className="component about-me">
        <h2>About Me</h2>
        <img alt="headshot" src={headshot} />
        <p className="section">I’m a junior software developer with previous experience teaching English as a first and second language. I decided to make the jump to software engineering because it draws on a lot of my interests while also being completely novel. I took the Software Engineering Immersive course at General Assembly to dive head first into this new world. Having taught and studied English, I’m fascinated by the power of words and language, and discovering that I can use them to build technologies has been a hugely rewarding experience. I hope to put the new skills I’ve learned to use in an environment which has the same goal in mind as my previous work: to help others to learn and grow.</p>
        <container className="education">
        <h2>Education</h2>
        <div className="section">
        Software Engineering Immersive - Online - Oct 2022 - Jan 2023 - General Assembly
        </div >
        <div className="section">
        CELTA Pass B - London - Sep - Dec 2018 - City and Islington College
Studied teaching English as a second language, student analysis, lesson preparation and delivery with 120+ hours of input lessons and lesson practice.

        </div >
        <div className="section">
        BA in English with First Class Honours - London - Sep 2014 - Jun 2017
Queen Mary: University of London
Developed analytical skills in reading literature, literary theory, culture, philosophy and history from medieval to contemporary.
Studied four modules per term, with twelve primary texts, secondary research and four essays per module.
Conducted research and wrote essays of up to 4000 words on a range of subjects.
Completed an independent 10,000 word dissertation on theories of performance and narrative in stand-up comedy.

        </div >
        </ container>
        <container className="volunteering ">
        <h2>Volunteering</h2>
        <div className="section">
        <p>Refunet - Online - Aug 2021 - Sep 2022
Tutoring an hour of one to one English as a second language to refugees.
</p>
        </div>
        <div className="section">
        <p>Cycled 500 miles in 10 days as part of a 2050 mile relay around Britain to raise money for climate change charities.</p>
        </div>
        </ container>
        </ container>
        
    )
};
