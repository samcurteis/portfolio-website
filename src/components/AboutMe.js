import headshot from '../assets/personal-pics/headshot.jpg'

export default function AboutMe() {
    return (
        <div className="component about-me">
        <span className="anchor" id="about-me"></span>
        <h2>About Me</h2>
        <div className="headshot">
        <img alt="headshot" src={headshot} />
        </div>
        <p className="piece brand-statement">I’m a junior software developer with previous experience teaching English as a first and second language. I decided to make the jump to software engineering because it draws on a lot of my interests while also being completely novel. I took the Software Engineering Immersive course at General Assembly to dive head first into this new world. Having taught and studied English, I’m fascinated by the power of words and language, and discovering that I can use them to build technologies has been a hugely rewarding experience. I hope to put the new skills I’ve learned to use in an environment which has the same goal in mind as my previous work: to help others to learn and grow.</p>
        <div className="options">
            <button><a href="#education">Education</a></button>
            <button><a href="#volunteering">Volunteering</a></button>
            <button><a href="#interests">Interests</a></button>
        </div>
        <div className="container">
        <div className="scroller">
        <div  className="section">
        <span className="options-anchor" id="education"></span>
        <h2>Education</h2>
        <div className="piece">
        <h3>Software Engineering Immersive - Online - Oct 2022 - Jan 2023 - General Assembly</h3>
        </div >
        <div className="piece">
        <h3>CELTA Pass B</h3>
        <h3>London</h3>
        <h3>Sep - Dec 2018</h3>
        <h3>City and Islington College</h3>
<p>Studied teaching English as a second language, student analysis, lesson preparation and delivery with 120+ hours of input lessons and lesson practice.</p>

        </div >
        <div className="piece">
        <h3>BA in English with First Class Honours</h3>
        <h3>London</h3>
        <h3>Sep 2014 - Jun 2017</h3>
 <h3>Queen Mary: University of London</h3>
        <ul>
<li>Developed analytical skills in reading literature, literary theory, culture, philosophy and history from medieval to contemporary.</li>
<li>Studied four modules per term, with twelve primary texts, secondary research and four essays per module.</li>
 <li>Conducted research and wrote essays of up to 4000 words on a range of subjects.</li>
<li>Completed an independent 10,000 word dissertation on theories of performance and narrative in stand-up comedy.</li>
</ul>
        </div >
        </ div>
        <div  className="section ">
        <span className="options-anchor" id="volunteering"></span>
        <h2>Volunteering</h2>
        <div className="piece">
        <h3>Refunet - Online - Aug 2021 - Sep 2022</h3>
<p>Tutoring an hour of one to one English as a second language to refugees.
</p>
        </div>
        <div className="piece">
        <h3>2050 Miles - Scotland - Jun 2021</h3>
        <p>Cycled 500 miles in 10 days as part of a 2050 mile relay around Britain to raise money for climate change charities.</p>
        </div>
        </ div>
        <div className="section">
        <span className="options-anchor" id="interests"></span>
        <h2>Interests</h2>
        <div className="piece">
            <h3>Cycling</h3>
            <p>I regularly train and go out on long adventures on my bike. My longest so far has been just under 2000km!</p>
        </div>
        <div className="piece">
            <h3>Languages</h3>
            <p>I love to learn languages by listening to music, going to language cafes, taking classes and using apps.</p>
        </div>
        <div className="piece">
            <h3>Art & Culture</h3>
            <p>I love going to galleries, taking life drawing classes, watching movies, reading books, and learning how to cook different cuisines (especially Italian).</p>
        </div>
        </div>
        </div>
        </ div>
        </ div>
        
    )
};
